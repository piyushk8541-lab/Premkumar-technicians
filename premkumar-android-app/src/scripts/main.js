import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/noto-sans-devanagari/400.css';
import '@fontsource/noto-sans-devanagari/500.css';
import '@fontsource/noto-sans-devanagari/600.css';
import '@fontsource/noto-sans-devanagari/700.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import '../styles/app.css';
import Alpine from 'alpinejs';
import AOS from 'aos';
import { installNativeIntegration } from './native-integration.js';

window.Alpine = Alpine;
window.AOS = AOS;
installNativeIntegration(Alpine);
Alpine.start();
// Alpine's generated service cards must be included in AOS's element list.
Alpine.nextTick(() => AOS.refreshHard());
