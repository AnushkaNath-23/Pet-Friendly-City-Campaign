(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function m(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=m(t);fetch(t.href,n)}})();document.addEventListener("DOMContentLoaded",()=>{const d=document.querySelector(".mobile-menu-toggle"),r=document.querySelector(".nav-links");d==null||d.addEventListener("click",()=>{r.classList.toggle("active")}),document.querySelectorAll(".nav-links a").forEach(e=>{e.addEventListener("click",()=>{r.classList.contains("active")&&r.classList.remove("active")})});const i=document.getElementById("volunteer-form");i&&i.addEventListener("submit",e=>{e.preventDefault();const c=new FormData(i),l=Object.fromEntries(c.entries());console.log("Form submitted with values:",l),i.innerHTML=`
        <div class="success-message">
          <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--success); margin-bottom: var(--space-md);"></i>
          <h3>Thank You for Volunteering!</h3>
          <p>We've received your application and will be in touch soon.</p>
        </div>
      `});const t=document.querySelector(".carousel"),n=document.querySelector(".carousel-arrow.prev"),s=document.querySelector(".carousel-arrow.next"),u=document.querySelectorAll(".carousel-item");if(t&&n&&s&&u.length>0){let o=function(){t.style.transform=`translateX(-${e*(c+16)}px)`};var y=o;let e=0;const c=u[0].getBoundingClientRect().width,l=window.innerWidth>1024?3:window.innerWidth>768?2:1,a=Math.max(0,u.length-l);s.addEventListener("click",()=>{e<a?(e++,o(),setTimeout(()=>transitioning=!1,500)):(e++,o(),setTimeout(()=>{e=0,o(),transitioning=!1},500))}),n.addEventListener("click",()=>{transitioning||(transitioning=!0,e>0?(e--,o(),setTimeout(()=>transitioning=!1,500)):(e=a,o(),setTimeout(()=>{e=a,o(),transitioning=!1},500)))}),setInterval(()=>{e<a?e++:e=0,o()},5e3),window.addEventListener("resize",()=>{const h=window.innerWidth>1024?3:window.innerWidth>768?2:1,p=Math.max(0,u.length-h);e=Math.min(e,p),o()})}const f=()=>{document.querySelectorAll(".section-header, .about-content, .story-card, .volunteer-form").forEach(c=>{const l=c.getBoundingClientRect().top,a=window.innerHeight;l<a*.9&&c.classList.add("fade-in")})},v=document.createElement("style");v.textContent=`
    .fade-in {
      animation: fadeInUp 1s ease both;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .section-header, .about-content, .story-card, .volunteer-form {
      opacity: 0;
    }
  `,document.head.appendChild(v),f(),window.addEventListener("scroll",f)});
