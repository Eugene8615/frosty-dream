!function(){function t(t){console.log("%c"+t,"color: #bada55")}document.addEventListener("DOMContentLoaded",(function(){["data-modal-buynow","data-modal-franchise","data-modal-howmade","data-modal-ingredients","data-modal-locations","data-modal-readmore","data-menu"].forEach((function(n){var e=n+"-open",o=n+"-close",a=document.querySelectorAll("["+e+"]"),d=document.querySelectorAll("["+o+"]"),l=document.querySelector("["+n+"]");function c(){document.body.classList.toggle("modal-open"),l.classList.toggle("is-hidden")}l||t("Can`t find Modal with attribute "+l),0===a.length&&t("Can`t find Open modal button with attribute "+e),0===d.length&&t("Can`t find Close modal button with attribute "+o),l&&0!==a.length&&0!==d.length&&(a.forEach((function(t){return t.addEventListener("click",c)})),d.forEach((function(t){return t.addEventListener("click",c)})))}))}),!1)}();
//# sourceMappingURL=index.68940310.js.map
