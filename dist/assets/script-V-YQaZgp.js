import{b as e,g as m}from"./helpers-CJiaW3rk.js";import{Swiper as c}from"./swiper-Fq7cvk2C.js";import{A as g,a as f,N as y}from"./autoplay-CeU4X9wQ.js";import{P as S}from"./pagination-C-yViekD.js";/* empty css               */import"./autoplay-l0sNRNKZ.js";/* empty css             *//* empty css                   *//* empty css                   */import"./utils-BHhRRxwJ.js";function I(i){const r=e(i),p=e(i,!0),s=m(i),l=d(r,s);function d(t,u){const{options:o}=u,n={modules:[g,f,y,S],a11y:o.a11y,roundLengths:!0,navigation:{nextEl:t.next,prevEl:t.prev},loop:!0,loopAdditionalSlides:p.sliderItems.length>3?1:0,slidesPerView:1,pagination:{el:t.pagination,clickable:!0},on:{afterInit:a=>{a.loopFix()},slideChangeTransitionEnd:a=>{a.loopFix()}}};return o.autoplay&&o.autoplaySpeed&&(n.autoplay={delay:o.autoplaySpeed}),new c(t.slider,n)}return()=>l.destroy()}export{I as default};