import{a as p,i as l,S as g}from"./assets/vendor-B3Lscd_h.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=p.create({baseURL:"https://pixabay.com/api/",params:{key:"50659446-3e4bba29bde64c5ee1caed96d",image_type:"photo",orientation:"horizontal",safesearch:!0}});function m(r,o=1,s=40){return h.get("",{params:{q:r,page:o,per_page:s}}).then(a=>{const e=a.data;return(!e.hits||e.hits.length===0)&&l.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3}),e}).catch(a=>{throw l.error({title:"Error",message:a.message||"Failed to fetch images. Please try again later.",position:"topRight",timeout:5e3}),a})}console.log(m());let n;const c=document.querySelector(".gallery");function y(r){c.innerHTML="";const o=r.map(s=>{const{webformatURL:a,largeImageURL:e,tags:t,likes:i,views:u,comments:d,downloads:f}=s;return`
        <li class="gallery-item">
        <a href="${e}" target="_blank">
            <img src="${a}" alt="${t}" loading="lazy" />
        </a>
        <div class="info">
            <p><b>Likes:</b> ${i}</p>
            <p><b>Views:</b> ${u}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${f}</p>
        </div>
        </li>
    `}).join("");c.insertAdjacentHTML("beforeend",o),n?n.refresh():n=new g(".gallery a",{captionsData:"alt",captionDelay:250})}const b=document.querySelector("form"),L=document.querySelectorAll('input[type="text"]');b.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();o&&m(o).then(({hits:s})=>y(s)).catch(console.error)});L.forEach(r=>{r.addEventListener("input",()=>{r.value.trim()!==""?r.classList.add("filled"):r.classList.remove("filled")})});
//# sourceMappingURL=index.js.map
