(()=>{"use strict";class t{constructor(){this.init()}init(){let t=document.querySelector(".widget-icon"),e=document.querySelector(".wpml-ls-sub-menu");t.addEventListener("click",(s=>{t.classList.toggle("widget-icon-open"),e.classList.toggle("wpml-ls-sub-menu-active")}));const s=document.querySelector("nav.toc");s&&s.addEventListener("click",(function(t){if(t.target.classList.contains("toc__show")||t.target.classList.contains("toc__title")||"SPAN"===t.target.tagName&&!t.target.classList.contains("sub-arrow")){const t=document.querySelector(".toc__list"),e=document.querySelector(".toc__show");t.classList.toggle("toc__list_showed"),e.classList.toggle("burger_active")}}));const n=document.querySelectorAll(".toc__list_columns .level-1 > ol");n&&n.forEach((t=>{const e=document.createElement("span");e.classList.add("sub-arrow"),t.parentElement.append(e),t.parentElement.addEventListener("click",(function(e){e.target.classList.contains("sub-arrow")&&t.parentElement.classList.toggle("show")}))}))}}class e{constructor(){this.init()}init(){if(window.innerWidth<=1100){const t=document.querySelector(".primary-nav"),e=t.querySelector(".primary-nav__list"),s=document.querySelector(".burger");let n=!1;if(s.addEventListener("click",(function(){this.classList.toggle("burger_active"),t.classList.toggle("primary-nav_showed"),document.querySelector("body").classList.toggle("no-scroll"),n||(n=!0,t.querySelectorAll(".sub-menu").forEach((t=>{const e=document.createElement("span");e.classList.add("back-item"),e.innerHTML="Back",t.prepend(e)})))})),t){let s={lastItems:[],lastScrollTop:0,counter:0};t.addEventListener("click",(function(n){const c=n.target;if(c.classList.contains("menu-item-has-children")){s.lastScrollTop=t.scrollTop,t.scrollTop=0,s.counter++,s.lastItems.push(e.innerHTML);const n=c.querySelector(".sub-menu");e.innerHTML=n.innerHTML}c.classList.contains("back-item")&&(s.counter--,t.scrollTop=s.lastScrollTop,e.innerHTML=s.lastItems[s.counter]),0===s.counter&&(s.lastItems=[])}))}}}}document.addEventListener("DOMContentLoaded",(async()=>{window.refs={all:{init:()=>new t},primaryNav:{init:()=>new e}},Object.keys(window.refs).forEach((t=>{window.refs[t].hasOwnProperty("init")&&(window.refs[t].class=window.refs[t].init())}))}))})();