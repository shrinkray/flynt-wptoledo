import{c as F,b as $}from"./autoplay-B_1I3EQh.js";import{m,a as E,b as T,c as S}from"./utils-BfK-AAWY.js";function R(I){let{swiper:e,extendParams:H,on:g,emit:v}=I;const d="swiper-pagination";H({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let y,u=0;function k(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function x(a,s){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${s}`),a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${s}-${s}`)))}function O(a,s,i){if(a=a%i,s=s%i,s===a+1)return"next";if(s===a-1)return"previous"}function P(a){const s=a.target.closest($(e.params.pagination.bulletClass));if(!s)return;a.preventDefault();const i=S(s)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const t=O(e.realIndex,i,e.slides.length);t==="next"?e.slideNext():t==="previous"?e.slidePrev():e.slideToLoop(i)}else e.slideTo(i)}function h(){const a=e.rtl,s=e.params.pagination;if(k())return;let i=e.pagination.el;i=m(i);let t,p;const C=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,z=e.params.loop?Math.ceil(C/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(p=e.previousRealIndex||0,t=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(t=e.snapIndex,p=e.previousSnapIndex):(p=e.previousIndex||0,t=e.activeIndex||0),s.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const l=e.pagination.bullets;let f,c,L;if(s.dynamicBullets&&(y=T(l[0],e.isHorizontal()?"width":"height"),i.forEach(n=>{n.style[e.isHorizontal()?"width":"height"]=`${y*(s.dynamicMainBullets+4)}px`}),s.dynamicMainBullets>1&&p!==void 0&&(u+=t-(p||0),u>s.dynamicMainBullets-1?u=s.dynamicMainBullets-1:u<0&&(u=0)),f=Math.max(t-u,0),c=f+(Math.min(l.length,s.dynamicMainBullets)-1),L=(c+f)/2),l.forEach(n=>{const r=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(o=>`${s.bulletActiveClass}${o}`)].map(o=>typeof o=="string"&&o.includes(" ")?o.split(" "):o).flat();n.classList.remove(...r)}),i.length>1)l.forEach(n=>{const r=S(n);r===t?n.classList.add(...s.bulletActiveClass.split(" ")):e.isElement&&n.setAttribute("part","bullet"),s.dynamicBullets&&(r>=f&&r<=c&&n.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),r===f&&x(n,"prev"),r===c&&x(n,"next"))});else{const n=l[t];if(n&&n.classList.add(...s.bulletActiveClass.split(" ")),e.isElement&&l.forEach((r,o)=>{r.setAttribute("part",o===t?"bullet-active":"bullet")}),s.dynamicBullets){const r=l[f],o=l[c];for(let b=f;b<=c;b+=1)l[b]&&l[b].classList.add(...`${s.bulletActiveClass}-main`.split(" "));x(r,"prev"),x(o,"next")}}if(s.dynamicBullets){const n=Math.min(l.length,s.dynamicMainBullets+4),r=(y*n-y)/2-L*y,o=a?"right":"left";l.forEach(b=>{b.style[e.isHorizontal()?o:"top"]=`${r}px`})}}i.forEach((l,f)=>{if(s.type==="fraction"&&(l.querySelectorAll($(s.currentClass)).forEach(c=>{c.textContent=s.formatFractionCurrent(t+1)}),l.querySelectorAll($(s.totalClass)).forEach(c=>{c.textContent=s.formatFractionTotal(z)})),s.type==="progressbar"){let c;s.progressbarOpposite?c=e.isHorizontal()?"vertical":"horizontal":c=e.isHorizontal()?"horizontal":"vertical";const L=(t+1)/z;let n=1,r=1;c==="horizontal"?n=L:r=L,l.querySelectorAll($(s.progressbarFillClass)).forEach(o=>{o.style.transform=`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`,o.style.transitionDuration=`${e.params.speed}ms`})}s.type==="custom"&&s.renderCustom?(l.innerHTML=s.renderCustom(e,t+1,z),f===0&&v("paginationRender",l)):(f===0&&v("paginationRender",l),v("paginationUpdate",l)),e.params.watchOverflow&&e.enabled&&l.classList[e.isLocked?"add":"remove"](s.lockClass)})}function B(){const a=e.params.pagination;if(k())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=m(i);let t="";if(a.type==="bullets"){let p=e.params.loop?Math.ceil(s/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&p>s&&(p=s);for(let C=0;C<p;C+=1)a.renderBullet?t+=a.renderBullet.call(e,C,a.bulletClass):t+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?t=a.renderFraction.call(e,a.currentClass,a.totalClass):t=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?t=a.renderProgressbar.call(e,a.progressbarFillClass):t=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(p=>{a.type!=="custom"&&(p.innerHTML=t||""),a.type==="bullets"&&e.pagination.bullets.push(...p.querySelectorAll($(a.bulletClass)))}),a.type!=="custom"&&v("paginationRender",i[0])}function A(){e.params.pagination=F(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"&&(s=[...document.querySelectorAll(a.el)]),s||(s=a.el),!(!s||s.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(s)&&s.length>1&&(s=[...e.el.querySelectorAll(a.el)],s.length>1&&(s=s.find(i=>E(i,".swiper")[0]===e.el))),Array.isArray(s)&&s.length===1&&(s=s[0]),Object.assign(e.pagination,{el:s}),s=m(s),s.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),u=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",P),e.enabled||i.classList.add(a.lockClass)}))}function M(){const a=e.params.pagination;if(k())return;let s=e.pagination.el;s&&(s=m(s),s.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",P))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}g("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:s}=e.pagination;s=m(s),s.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),g("init",()=>{e.params.pagination.enabled===!1?D():(A(),B(),h())}),g("activeIndexChange",()=>{typeof e.snapIndex>"u"&&h()}),g("snapIndexChange",()=>{h()}),g("snapGridLengthChange",()=>{B(),h()}),g("destroy",()=>{M()}),g("enable disable",()=>{let{el:a}=e.pagination;a&&(a=m(a),a.forEach(s=>s.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),g("lock unlock",()=>{h()}),g("click",(a,s)=>{const i=s.target,t=m(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&t&&t.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const p=t[0].classList.contains(e.params.pagination.hiddenClass);v(p===!0?"paginationShow":"paginationHide"),t.forEach(C=>C.classList.toggle(e.params.pagination.hiddenClass))}});const w=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=m(a),a.forEach(s=>s.classList.remove(e.params.pagination.paginationDisabledClass))),A(),B(),h()},D=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=m(a),a.forEach(s=>s.classList.add(e.params.pagination.paginationDisabledClass))),M()};Object.assign(e.pagination,{enable:w,disable:D,render:B,update:h,init:A,destroy:M})}export{R as P};
