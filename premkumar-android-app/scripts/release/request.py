"""Non-secret, fail-closed release intent/version validation. Never loads signing keys."""
import json
import os
from pathlib import Path
import re

BRANCH = 'refs/heads/arena/01a09a19-premkumar-technicians'
ACTION = 'build-signed-artifacts-only'


def validate_version(code, name):
    code, name = str(code), str(name)
    if not re.fullmatch(r'[1-9][0-9]{0,9}', code) or int(code) > 2100000000:
        raise ValueError('Release versionCode must be an integer in 1..2100000000.')
    if len(name) > 64 or not re.fullmatch(r'[0-9]+(?:\.[0-9]+){1,3}(?:[-+][A-Za-z0-9.-]+)?', name):
        raise ValueError('Release versionName must be a numeric dotted version, optionally with a suffix.')
    return code, name


def parse_request(event_name, event, request=None):
    if event_name == 'workflow_dispatch':
        data = event.get('inputs', {})
        return validate_version(data.get('version_code', ''), data.get('version_name', ''))
    if event_name != 'push' or event.get('deleted') or not isinstance(request, dict):
        raise ValueError('Only an explicit manual run or a branch release-request push is allowed.')
    if set(request) != {'action', 'versionCode', 'versionName'} or request['action'] != ACTION:
        raise ValueError('Invalid release request; artifacts-only intent must be explicit.')
    return validate_version(request['versionCode'], request['versionName'])


if __name__ == '__main__':
    if os.environ.get('GITHUB_REF') != BRANCH:
        raise SystemExit('Release builds are restricted to the Arena branch.')
    event_name = os.environ['GITHUB_EVENT_NAME']
    event = json.loads(Path(os.environ['GITHUB_EVENT_PATH']).read_text())
    request = json.loads(Path('release/request.json').read_text()) if event_name == 'push' else None
    code, name = parse_request(event_name, event, request)
    with open(os.environ['GITHUB_OUTPUT'], 'a') as output:
        output.write(f'version_code={code}\nversion_name={name}\n')
    print(f'Validated explicit release request: {name} ({code}). No publishing requested.')
