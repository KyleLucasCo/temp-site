(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&f(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const o=document.createElement("canvas"),m=o.getContext("2d");document.body.appendChild(o);o.width=48;o.height=96;console.log("Canvas dimensions:",o.width,o.height);const n=new Image;n.src="/img/Kyle_Spritesheet.png";n.onload=function(){u(0)};n.onerror=function(){console.error("Failed to load image")};const c=48,l=96,h=18,g=6;let d=0;const y=275;let p=0;function v(){m.clearRect(0,0,o.width,o.height);const r=h+d,i=1,s=r%(n.width/c);m.drawImage(n,s*c,i*l,c,l,0,0,c,l)}function u(r){r-p>=y&&(v(),d=(d+1)%g,p=r),requestAnimationFrame(u)}document.querySelector("#app").innerHTML=`
  <div class="page">
    <div class="top-container">
      <h1>Kyle Lucas</h1>    
    </div>
    <div class="bottom-container">
      <div class="pixel-border">
        <p class="heading">This site is under construction.</p>
        <p class="info">You can find me on <a href="https://github.com/kylelucasco" target="_blank">GitHub</a> && <a href="https://linkedin.com/in/klucas10" target="_blank">LinkedIn</a>.</p>
      </div>
    </div>
  </div>
`;document.querySelector(".top-container").appendChild(o);n.onload=function(){console.log("Image loaded successfully"),u()};n.onerror=function(){console.error("Failed to load image")};
