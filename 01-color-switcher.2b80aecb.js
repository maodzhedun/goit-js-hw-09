const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.querySelector("body");let l=null;e.addEventListener("click",(()=>{l=setInterval((()=>{null!==l&&(e.disabled=!0),a.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.addEventListener("click",(()=>{e.disabled=!1,clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.2b80aecb.js.map