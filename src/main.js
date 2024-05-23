import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/styles/styles.css";
import router from "./router";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import VueGtm from '@gtm-support/vue-gtm';

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
});

const app = createApp(App);

const pinia = createPinia();

// app.use(VueGtm, {
//     id: 'GTM-WBR3L4QD',
//     vueRouter: router,
// });

// window.updateWhatsAppLinks = updateWhatsAppLinks;

// function hasSpecialParam() {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const parametro = urlParams.get('b1d01434621734be08d75952041a178d');
//     return parametro === '(e)RxptY<@ih~R_Mw_i,|7ptQ26|bdq:';
// }

// function updateWhatsAppLinks() {
//     if (hasSpecialParam()) {
//         const newWhatsAppURL = 'https://me-qr.com/RImUYefA';
//         let whatsappLinks = document.querySelectorAll('.whatsapp-link');
//         whatsappLinks.forEach(link => {
//             link.href = newWhatsAppURL;
//         });
//     }
// }

// console.log("Checando parâmetro...");

// const loadGoogleTagManagerScript = () => {
//     console.log("Carregando Google Tag Manager...");
//     let script = document.createElement('script');
//     script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//     })(window,document,'script','dataLayer','GTM-TBZPLFGH');`;
//     document.head.appendChild(script);

//     let noscript = document.createElement('noscript');
//     let iframe = document.createElement('iframe');
//     iframe.src = "https://www.googletagmanager.com/ns.html?id=GTM-TBZPLFGH";
//     iframe.height = "0";
//     iframe.width = "0";
//     iframe.style.display = "none";
//     iframe.style.visibility = "hidden";
//     noscript.appendChild(iframe);
//     document.body.appendChild(noscript);
// };

// const loadDefaultScript = () => {
//     console.log("Carregando scripts padrão...");
//     let fbScript = document.createElement('script');
//     fbScript.innerHTML = `!function (f, b, e, v, n, t, s) {
//         if (f.fbq) return;
//         n = f.fbq = function () {
//             n.callMethod ?
//                 n.callMethod.apply(n, arguments) : n.queue.push(arguments)
//         };
//         if (!f._fbq) f._fbq = n;
//         n.push = n;
//         n.loaded = !0;
//         n.version = '2.0';
//         n.queue = [];
//         t = b.createElement(e);
//         t.async = !0;
//         t.src = v;
//         s = b.getElementsByTagName(e)[0];
//         s.parentNode.insertBefore(t, s)
//     }(window, document, 'script',
//         'https://connect.facebook.net/en_US/fbevents.js');
//     fbq('init', '780422396194288');
//     fbq('track', 'PageView');`;
//     document.head.appendChild(fbScript);

//     let noscript = document.createElement('noscript');
//     let img = document.createElement('img');
//     img.height = "1";
//     img.width = "1";
//     img.style.display = "none";
//     img.src = "https://www.facebook.com/tr?id=780422396194288&ev=PageView&noscript=1";
//     noscript.appendChild(img);
//     document.body.appendChild(noscript);

//     let additionalScript = document.createElement('script');
//     additionalScript.type = "text/javascript";
//     additionalScript.async = true;
//     additionalScript.src = "https://d335luupugsy2.cloudfront.net/js/loader-scripts/8a324473-dbac-430a-9450-33aa3e34c228-loader.js";
//     document.body.appendChild(additionalScript);
// };

// function checkQueryParamAndLoadScript() {
//     if (hasSpecialParam()) {
//         loadGoogleTagManagerScript();
//     } else {
//         loadDefaultScript();
//     }
// }
app.use(pinia);
app.use(swiper);
app.use(router).mount("#app");

// checkQueryParamAndLoadScript();
// updateWhatsAppLinks();
