import{i as f}from"./index-BvOxT3a5.js";import{b as m}from"./helpers-CZfVHXpj.js";function v(e){const t=m(e),o=f('[data-ref="loadMore"]',c);e.addEventListener("click",o);async function c(r){r.preventDefault();const n=r.delegateTarget;n.classList.add("button--disabled");const d=new URL(n.href);try{const p=await(await fetch(d)).text(),a=new DOMParser().parseFromString(p,"text/html"),l=a.querySelector('flynt-component[name="GridPostsArchive"] [data-ref="posts"]'),i=a.querySelector('flynt-component[name="GridPostsArchive"] [data-ref="pagination"]');t.posts.append(...l.children),t.pagination.textContent="",i&&t.pagination.append(...i.children),n.classList.remove("button--disabled")}catch(s){console.error(s)}}return()=>{e.removeEventListener("click",o)}}export{v as default};
