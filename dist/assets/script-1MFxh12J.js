import{i as d}from"./index-20P1wsSQ.js";function s(e){const r=d('[data-refs="trigger"]',n);e.addEventListener("click",r);function n(a){const t=a.target,c=document.getElementById(t.getAttribute("aria-controls")),i=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!i),c.setAttribute("aria-hidden",i)}return()=>{e.removeEventListener("click",r)}}export{s as default};
