import{a as r,d as m,l as T}from"./index.ddd2b5a1.js";import{e as v,c as C}from"./index.5c2931f1.js";import{h}from"./index.b93551d5.js";import{p as q,e as l}from"./index.86e8ba5d.js";import{d as A}from"./store.2ce18e00.js";import{o as B}from"./share-url.870a3500.js";import"./video.722c2cc9.js";import"./hoisted.ca11fe9b.js";import"./hoisted.f03a2816.js";import"./hoisted.735e5302.js";import"./lazy.ec63ec52.js";import"./signals.module.e26a8f2a.js";import"./preact.module.284f119c.js";import"./hooks.module.15c9a964.js";import"./preload-helper.e8d31950.js";function k(){import.meta.url,import("data:text/javascript,").catch(()=>1);async function*t(){}k.g=t}const u=(t,e)=>{if(+__PN_DATA__.uid<=0)return e&&e();t()};let d=null;const g=()=>{if(d)return d;const t=document.querySelector("[data-closest]");return d=Object.assign({},t==null?void 0:t.dataset),d};r("click","[data-downld-name]",function(){const t=this.dataset.downldName,e=this.dataset.downldUrl,n=this.dataset.downldSuffix,s=this.dataset.hueid,i=this.dataset.hasBuy=="1",a=g();if(!t)return;const o=document.querySelector("[data-premium-txt]");u(()=>{switch(s&&l(s),t){case"png":case"rar":case"ppt":case"twibbon":const c=a.fee=="1"&&t==="png";i&&e?window.open(e,"_blank"):A({type:a.type||"1",btnType:t,rarName:n||"PSD",goPremiumTxt:(o==null?void 0:o.dataset.premiumTxt)||"Go Premium",href:e,downUrl:e,fee:c,licenseType:a.licenseType||0},!1);break;case"edit":e&&window.open(e,"_blank");break;case"mobile":const f=document.querySelector("._o2b");v(f,S=>S-40);break;case"freevideo":const p=document.getElementById("_ijc");p&&p.currentSrc&&I(p.currentSrc,"down_ifr");break;default:e&&setTimeout(()=>{window.open(e,"_blank")},100);break}},()=>{e&&t==="edit"&&window.open(e,"_blank"),l("down-btnnologin-"+t)})});function D(t){u(()=>{const e=t.target,n=document.getElementById("_hjc"),s=document.getElementById("_jjc");n&&s&&(n.hidden=e&&e.value==="down",s.hidden=!n.hidden)})}document.querySelectorAll('input[type="radio"][name="size-selection"]').forEach(t=>{t.addEventListener("change",D)});function I(t,e){const n=document.getElementById(e)||document.createElement("iframe");n.id=e,n.src=t,document.body.appendChild(n)}if(__PN_DATA__.no_bot=="1"){const{id:t,type:e,detect_status:n}=g();h.get("/api/statistics/view",{id:t,type:e,t:n}),e=="1"?h.get("/api/statistics/detail-out-view",{id:t}):e=="5"&&q("font_detail",1,"come")}r("click","[data-share-btn]",function(){const t=N();t.name=this.dataset.shareBtn||"",B(t)});function N(){const t={title:"",media:"",word:"",name:""},e=document.querySelector("[data-share-media]");if(e){const{shareTitle:n,shareMedia:s,shareWord:i}=e.dataset;t.title=n||"",t.media=s||"",t.word=i||""}return t}const E="._z_b";r("click",E,function(){setTimeout(()=>{l("der-followmain")}),u(()=>{const t=this.dataset.follow,e=this.textContent,n=this.dataset.txt;this.disabled=!0,h.post("/api/async/designer-follow",{id:t}).then(s=>{s.status===200&&(this.textContent=n,this.dataset.txt=e)}).finally(()=>{this.disabled=!1})})});const L="._t2b a";r("click","[data-prf-type]",function(){u(()=>{const t=this.dataset.prfType,n=this.dataset.limitedTime=="1"?!1:this.dataset.hasBuy=="1",s=t==="enterprise",i=s?"team":"",a=g(),{vip_type:o,enterprise_status:c}=window.__PN_DATA__,f={enterprise:c!="1",personal:+o<=0};!n&&f[t]?(m(document,"dialog:toggle",{name:"prf-license-"+t,show:!0}),l("prfview-btn"+i)):(this.disabled=!0,m(document,"down:prf",{data:a,isTeam:s,hasBuy:n,resolve:()=>{this.disabled=!1},reject:()=>{this.disabled=!1}}),l("prfdown-btn"+i))})});r("click",L,function(t){t.preventDefault(),l("relatekeyword-report"),this.href&&setTimeout(()=>{window.open(this.href,"_blank")},100)});const P="._w8b ._i_b";r("click",P,function(){const t=this.dataset.id;t&&l("url-similartype-".concat(t))});r("click","._b3b>span",function(){m(this.parentElement.querySelector('[data-huejs="der-linkmain"]'),"click")});const b=()=>{var t;return(t=document.querySelector("[data-ai-prompt]"))==null?void 0:t.textContent};r("click",".copyprompt-btn",function(){const t=b();if(t){const e=this.textContent||"",n=this.dataset.copied||e;C(t).then(()=>{this.textContent=n,setTimeout(()=>{this.textContent=e},2600)})}});r("click",".useprompt-btn",function(){const t=b();t&&(localStorage.setItem("_useprompt_text",t),setTimeout(()=>{window.location.href="/ai-tools/ai-png-generator"}))});r("click","[data-tab-name]",function(){const t=this.dataset.tabName;document.querySelectorAll("[data-tab-name]").forEach(e=>{e.classList[e.dataset.tabName===t?"add":"remove"]("actived-tab")}),document.querySelectorAll("[data-tab-c]").forEach(e=>{e.classList[e.dataset.tabC===t?"add":"remove"]("_wzb")})});const j="._pdc",H="._qdc",z="._rdc",W=["_h","_w8"];F();function F(){if(window.innerWidth<1024)return;const t=document.querySelectorAll(j);for(const e of t){const n=e.querySelector(H),s=e.querySelector(z);if(!n||!s)continue;const i=n.children,a=i.length,o=i[a-1];if(a<=1||o&&o.offsetTop<=0)continue;const c=$({btnEl:s,boxEl:n,btns:i,len:a});U(c,n,s,e)}}function U(t,e,n,s){const i=s.offsetHeight,a=()=>{t.show=!1,n.textContent="+"+t.count,e.insertBefore(n,t.el),n.style.removeProperty("width"),s.style.cssText+="height:".concat(i,"px;")};T(n,"click",()=>{if(t.show)return a();t.show=!0,e.appendChild(n),n.textContent=n.dataset.less,n.style.width="auto",s.style.cssText+="height:".concat(e.offsetHeight,"px;")}),a(),t.count>0&&requestAnimationFrame(()=>{n.classList.remove(...W)})}function $({btns:t,len:e,btnEl:n,boxEl:s}){const i={el:null,i:0,count:0,show:!1};for(let o=0;o<e;o++){const c=t[o];if(c!==n){if(c.offsetTop>0)break;i.i++,i.el=c}}i.count=e-i.i;const a=t[e-2];if(i.count>1){n.textContent="+"+i.count,s.insertBefore(n,i.el);let o=n.nextElementSibling;for(;o&&o.offsetTop<=0;)o=o.nextElementSibling,s.insertBefore(n,o),i.el=o,i.i++,i.count--}else i.el===a&&(i.el=null);return i}const x="._bac",O="._ndc",_=()=>{m(document,"dialog:toggle",{name:"PreviewImage",show:!0})},y=t=>{var e;(e=document.querySelector(O))==null||e.classList[t?"add":"remove"]("_ck")},w=t=>{t.preventDefault()};r("click",x,function(t){w(t),setTimeout(()=>{l("detail-preview-image")},100);const e=document.getElementById("PreviewImage");if(e){if(e.querySelector("img"))return _()}else return;const n=this.querySelector("a"),s=this.querySelector("img");if(!n||!s)return;const i=n.href||s.currentSrc||s.src;if(!i)return;_();const a=n.offsetHeight>n.parentElement.offsetHeight,o=document.createElement("img"),c=a?e:o;c.style.maxWidth=window.innerWidth-40+"px",c.style.maxHeight=window.innerHeight-120+"px",o.className=e.dataset.imgClass||"",o.style.minWidth=a?"640px":"auto",o.alt="",o.oncontextmenu=w,o.onload=o.onabort=o.onerror=()=>{requestAnimationFrame(()=>{y(!0)})},o.src=i,requestAnimationFrame(()=>{y(),e.appendChild(o)})});r("contextmenu",x,w);export{k as __vite_legacy_guard};