import{a as f,i as l,S as g}from"./assets/vendor-DFCQGEf1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="50659446-3e4bba29bde64c5ee1caed96d",h=f.create({baseURL:"https://pixabay.com/api/",params:{key:y,image_type:"photo",orientation:"horizontal",safesearch:!0}});function b(r,o=1,s=40){return h.get("",{params:{q:r,page:o,per_page:s}}).then(a=>{const e=a.data;return(!e.hits||e.hits.length===0)&&l.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}),e}).catch(a=>{throw l.error({title:"Error",message:a.message||"Failed to fetch images. Please try again later.",position:"topRight",timeout:5e3}),a})}let n;const c=document.querySelector(".gallery");function L(r){c.innerHTML="";const o=r.map(s=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:i,views:d,comments:u,downloads:p}=s;return`
        <li class="gallery-item">
        <a href="${e}" target="_blank">
            <img src="${a}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
            <p><b>Likes:</b> ${i}</p>
            <p><b>Views:</b> ${d}</p>
            <p><b>Comments:</b> ${u}</p>
            <p><b>Downloads:</b> ${p}</p>
        </div>
        </li>
    `}).join("");c.insertAdjacentHTML("beforeend",o),n?n.refresh():n=new g(".gallery a",{captionsData:"alt",captionDelay:250})}const v=document.querySelector("form"),w=document.querySelectorAll('input[type="text"]'),m=document.getElementById("loader");v.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();o&&(m.style.display="block",b(o).then(({hits:s})=>L(s)).catch(console.error).finally(()=>{m.style.display="none"}))});w.forEach(r=>{r.addEventListener("input",()=>{r.value.trim()!==""?r.classList.add("filled"):r.classList.remove("filled")})});
//# sourceMappingURL=index.js.map
