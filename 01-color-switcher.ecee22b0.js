!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.ecee22b0.js.map
