!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){function n(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,s=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw s}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}window.addEventListener("DOMContentLoaded",(function(){var e,t=document.querySelectorAll(".swiper-container"),o=void 0,r=window.matchMedia("(min-width: 768px)"),s=n(t);try{for(s.s();!(e=s.n()).done;){var c=e.value;o=new Swiper(c,{slidesPerView:1.2,spaceBetween:16,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}}),r.matches&&o.destroy()}}catch(e){s.e(e)}finally{s.f()}}))},function(e,t,n){e.exports=n(7)},function(e,t,n){},function(e,t){function n(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,c=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){i=!0,s=e},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw s}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}window.addEventListener("DOMContentLoaded",(function(){var e,t=document.querySelector(".aside-menu"),o=document.querySelector(".button__menu"),r=document.querySelector(".button__menu-close"),s=t.querySelector(".button__call"),c=t.querySelector(".button__chat"),i=document.querySelectorAll(".menu-main__text"),a=window.matchMedia("(min-width: 1366px)"),l=n(i);try{for(l.s();!(e=l.n()).done;){e.value.addEventListener("click",(function(){document.querySelector(".menu-main__text--active").classList.remove("menu-main__text--active"),this.classList.add("menu-main__text--active")}))}}catch(e){l.e(e)}finally{l.f()}o.addEventListener("click",(function(){t.classList.toggle("aside-menu--open"),t.classList.toggle("aside-menu--close")})),r.addEventListener("click",(function(){t.classList.toggle("aside-menu--close"),t.classList.toggle("aside-menu--open")})),document.addEventListener("click",(function(e){e.target===t&&(t.classList.toggle("aside-menu--close"),t.classList.toggle("aside-menu--open"))})),s.addEventListener("click",(function(){a.matches||(t.classList.toggle("aside-menu--open"),t.classList.toggle("aside-menu--close"))})),c.addEventListener("click",(function(){a.matches||(t.classList.toggle("aside-menu--open"),t.classList.toggle("aside-menu--close"))}))}))},function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".aside-call"),t=document.querySelectorAll(".button__call"),n=document.querySelector(".aside-call__close-btn");t.forEach((function(t){t.addEventListener("click",(function(){e.classList.toggle("aside-call--open"),e.classList.toggle("aside-call--close")}))})),n.addEventListener("click",(function(){e.classList.toggle("aside-call--close"),e.classList.toggle("aside-call--open")})),document.addEventListener("click",(function(t){t.target===e&&(e.classList.toggle("aside-call--close"),e.classList.toggle("aside-call--open"))}))}))},function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".aside-feedback"),t=document.querySelectorAll(".button__chat"),n=document.querySelector(".aside-feedback__close-btn");t.forEach((function(t){t.addEventListener("click",(function(){e.classList.toggle("aside-feedback--open"),e.classList.toggle("aside-feedback--close")}))})),n.addEventListener("click",(function(){e.classList.toggle("aside-feedback--close"),e.classList.toggle("aside-feedback--open")})),document.addEventListener("click",(function(t){t.target===e&&(e.classList.toggle("aside-feedback--close"),e.classList.toggle("aside-feedback--open"))}))}))},function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".main__read-more"),t=e.querySelector(".main__more-icon"),n=e.querySelector(".main__more-text"),o=document.querySelector(".main__text"),r=window.matchMedia("(max-width: 915px)");e.addEventListener("click",(function(){r.matches&&(e.classList.contains("main__read-more--open")?(n.textContent="Скрыть",t.classList.toggle("main__more-icon--open"),t.classList.toggle("main__more-icon--close"),e.classList.toggle("main__read-more--open"),e.classList.toggle("main__read-more--close"),o.classList.toggle("main__text--close"),o.classList.toggle("main__text--open")):(n.textContent="Читать далее",t.classList.toggle("main__more-icon--open"),t.classList.toggle("main__more-icon--close"),e.classList.toggle("main__read-more--open"),e.classList.toggle("main__read-more--close"),o.classList.toggle("main__text--close"),o.classList.toggle("main__text--open")))}))}))},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(0);window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".brands-cards__button-more"),t=e.querySelector(".brands-cards__more-img"),n=e.querySelector(".brands-cards__more-text"),o=document.querySelector(".slider-brands__cards");e.addEventListener("click",(function(){e.classList.contains("brands-cards__button-more--open")?(n.textContent="Скрыть",t.classList.toggle("brands-cards__more-img--open"),t.classList.toggle("brands-cards__more-img--close"),e.classList.toggle("brands-cards__button-more--open"),e.classList.toggle("brands-cards__button-more--close"),o.classList.toggle("slider-brands__cards--open"),o.classList.toggle("slider-brands__cards--close")):(n.textContent="Показать все",t.classList.toggle("brands-cards__more-img--open"),t.classList.toggle("brands-cards__more-img--close"),e.classList.toggle("brands-cards__button-more--open"),e.classList.toggle("brands-cards__button-more--close"),o.classList.toggle("slider-brands__cards--open"),o.classList.toggle("slider-brands__cards--close"))}))})),window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".technique-cards__button-more"),t=e.querySelector(".technique-cards__more-img"),n=e.querySelector(".technique-cards__more-text"),o=document.querySelector(".slider-technique__cards");e.addEventListener("click",(function(){e.classList.contains("technique-cards__button-more--open")?(n.textContent="Скрыть",t.classList.toggle("technique-cards__more-img--open"),t.classList.toggle("technique-cards__more-img--close"),e.classList.toggle("technique-cards__button-more--open"),e.classList.toggle("technique-cards__button-more--close"),o.classList.toggle("slider-technique__cards--open"),o.classList.toggle("slider-technique__cards--close")):(n.textContent="Показать все",t.classList.toggle("technique-cards__more-img--open"),t.classList.toggle("technique-cards__more-img--close"),e.classList.toggle("technique-cards__button-more--open"),e.classList.toggle("technique-cards__button-more--close"),o.classList.toggle("slider-technique__cards--open"),o.classList.toggle("slider-technique__cards--close"))}))}))}]);
//# sourceMappingURL=bundle.js.map