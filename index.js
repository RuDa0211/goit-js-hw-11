import{a as m,S as y,i}from"./assets/vendor-DXaqCXe3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const p="https://pixabay.com/api/",g="49423547-3925a10a81c3177a913fbde2f";async function h(r){try{const t=await m.get(p,{params:{key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}});if(t.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return t.data.hits}catch(t){throw new Error(t.message)}}function b(r,t){const a=r.map(({webformatURL:e,largeImageURL:o,tags:s,likes:l,views:u,comments:d,downloads:f})=>`<li class="gallery-item">
          <a href="${o}" target="_blank">
            <img class="gallery-image"
 src="${e}" alt="${s}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${l}</p>
            <p><b>Views</b> ${u}</p>
            <p><b>Comments</b> ${d}</p>
            <p><b>Downloads</b> ${f}</p>
          </div>
        </li>`).join("");t.innerHTML=a,new y(".gallery a").refresh()}function L(r){r.innerHTML=""}function w(){const r=document.querySelector(".loader");r.style.display="flex"}function q(){const r=document.querySelector(".loader");r.style.display="none"}const S=document.querySelector(".form"),c=document.querySelector(".gallery");document.querySelector(".loader");S.addEventListener("submit",async r=>{r.preventDefault();const t=r.target.elements["search-text"].value.trim();if(!t){i.warning({title:"Warning",message:"Enter a search query!"});return}L(c),w();try{const a=await h(t);b(a,c)}catch(a){i.error({title:"Error",message:a.message})}finally{q()}});
//# sourceMappingURL=index.js.map
