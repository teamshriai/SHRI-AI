const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ShriHealth-CkoP_Dw-.js","assets/rolldown-runtime-B0Z9INg1.js","assets/react-xSxboM_v.js","assets/motion-B1rJ_i3q.js","assets/JobDetail-rmO5ina7.js"])))=>i.map(i=>d[i]);
import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{i as t,n,t as r}from"./react-xSxboM_v.js";import{a as i,i as a,n as o,r as s,t as c}from"./motion-B1rJ_i3q.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function u(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:l(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var d=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},f=e=>{let t=d(e);return t.charAt(0).toUpperCase()+t.slice(1)},p=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),m={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function h(e){return e!=null}function ee(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??m.width,a=e.size??e.height??m.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?p(...c):p(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??m[`stroke-width`])*Number(e.size??e.width??m.width)/Number(t.size??t.width??m.width):t.strokeWidth??m[`stroke-width`];return[`svg`,{...Object.entries(m).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&h(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&h(t.width)&&{[r(`width`)]:t.width},...`height`in t&&h(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function te(e,t={}){return ee(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var ne=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},g=e(t(),1),re=(0,g.createContext)({}),ie=()=>(0,g.useContext)(re),ae=(0,g.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:ee=!1,nonScalingStroke:re=!1,color:ae=`currentColor`,className:_=``}=ie()??{},v=!!c||ne(d),[oe,y,b=[]]=te(u,{color:e??ae,width:n??t??m,height:r??t??m,strokeWidth:i??h,absoluteStrokeWidth:a??ee,nonScalingStroke:o??re,className:p(_,s),hasA11yProp:v,attributes:d});return(0,g.createElement)(oe,{ref:f,...y},[...b.map(([e,t])=>(0,g.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function _(e,t=[],n=[]){let r=typeof e==`string`?u(e,t,n):e,i=(0,g.forwardRef)(({className:e,...t},n)=>(0,g.createElement)(ae,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=f(r.name)),i}var v={name:`activity`,size:24,node:[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]};v.node;var oe=_(v),y={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};y.node;var b=_(y),se={name:`brain-circuit`,size:24,node:[[`path`,{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,key:`l5xja`}],[`path`,{d:`M9 13a4.5 4.5 0 0 0 3-4`,key:`10igwf`}],[`path`,{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`,key:`105sqy`}],[`path`,{d:`M3.477 10.896a4 4 0 0 1 .585-.396`,key:`ql3yin`}],[`path`,{d:`M6 18a4 4 0 0 1-1.967-.516`,key:`2e4loj`}],[`path`,{d:`M12 13h4`,key:`1ku699`}],[`path`,{d:`M12 18h6a2 2 0 0 1 2 2v1`,key:`105ag5`}],[`path`,{d:`M12 8h8`,key:`1lhi5i`}],[`path`,{d:`M16 8V5a2 2 0 0 1 2-2`,key:`u6izg6`}],[`circle`,{cx:`16`,cy:`13`,r:`.5`,key:`ry7gng`}],[`circle`,{cx:`18`,cy:`3`,r:`.5`,key:`1aiba7`}],[`circle`,{cx:`20`,cy:`21`,r:`.5`,key:`yhc1fs`}],[`circle`,{cx:`20`,cy:`8`,r:`.5`,key:`1e43v0`}]]};se.node;var ce=_(se),le={name:`brain`,size:24,node:[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]};le.node;var ue=_(le),de={name:`briefcase-business`,size:24,node:[[`path`,{d:`M12 12h.01`,key:`1mp3jc`}],[`path`,{d:`M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2`,key:`1ksdt3`}],[`path`,{d:`M22 13a18.15 18.15 0 0 1-20 0`,key:`12hx5q`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]};de.node;var fe=_(de),x={name:`chart-column`,size:24,node:[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]],aliases:[`bar-chart-3`]};x.node;var S=_(x),C={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]};C.node;var pe=_(C),me={name:`clipboard-list`,size:24,node:[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]};me.node;var he=_(me),w={name:`crosshair`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`,key:`l9bcsi`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`,key:`13hhkx`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`,key:`10w3f3`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`,key:`15g9kq`}]]};w.node;var T=_(w),E={name:`dna`,size:24,node:[[`path`,{d:`m10 16 1.5 1.5`,key:`11lckj`}],[`path`,{d:`m14 8-1.5-1.5`,key:`1ohn8i`}],[`path`,{d:`M15 2c-1.798 1.998-2.518 3.995-2.807 5.993`,key:`80uv8i`}],[`path`,{d:`m16.5 10.5 1 1`,key:`696xn5`}],[`path`,{d:`m17 6-2.891-2.891`,key:`xu6p2f`}],[`path`,{d:`M2 15c6.667-6 13.333 0 20-6`,key:`1pyr53`}],[`path`,{d:`m20 9 .891.891`,key:`3xwk7g`}],[`path`,{d:`M3.109 14.109 4 15`,key:`q76aoh`}],[`path`,{d:`m6.5 12.5 1 1`,key:`cs35ky`}],[`path`,{d:`m7 18 2.891 2.891`,key:`1sisit`}],[`path`,{d:`M9 22c1.798-1.998 2.518-3.995 2.807-5.993`,key:`q3hbxp`}]]};E.node;var D=_(E),O={name:`handshake`,size:24,node:[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`,key:`efffak`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`,key:`9pr0kb`}],[`path`,{d:`m21 3 1 11h-2`,key:`1tisrp`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`,key:`1uvwmv`}],[`path`,{d:`M3 4h8`,key:`1ep09j`}]]};O.node;var ge=_(O),k={name:`heart-pulse`,size:24,node:[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`,key:`auskq0`}]]};k.node;var _e=_(k),A={name:`house`,size:24,node:[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]],aliases:[`home`]};A.node;var ve=_(A),j={name:`layers`,size:24,node:[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]],aliases:[`layers-3`]};j.node;var ye=_(j),M={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]};M.node;var be=_(M),N={name:`microscope`,size:24,node:[[`path`,{d:`M6 18h8`,key:`1borvv`}],[`path`,{d:`M3 22h18`,key:`8prr45`}],[`path`,{d:`M14 22a7 7 0 1 0 0-14h-1`,key:`1jwaiy`}],[`path`,{d:`M9 14h2`,key:`197e7h`}],[`path`,{d:`M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z`,key:`1bmzmy`}],[`path`,{d:`M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3`,key:`1drr47`}]]};N.node;var xe=_(N),P={name:`radar`,size:24,node:[[`path`,{d:`M19.07 4.93A10 10 0 0 0 6.99 3.34`,key:`z3du51`}],[`path`,{d:`M4 6h.01`,key:`oypzma`}],[`path`,{d:`M2.29 9.62A10 10 0 1 0 21.31 8.35`,key:`qzzz0`}],[`path`,{d:`M16.24 7.76A6 6 0 1 0 8.23 16.67`,key:`1yjesh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M17.99 11.66A6 6 0 0 1 15.77 16.67`,key:`1u2y91`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}],[`path`,{d:`m13.41 10.59 5.66-5.66`,key:`mhq4k0`}]]};P.node;var Se=_(P),F={name:`scan-line`,size:24,node:[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`}],[`path`,{d:`M7 12h10`,key:`b7w52i`}]]};F.node;var Ce=_(F),I={name:`scan`,size:24,node:[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`}]]};I.node;var we=_(I),L={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]};L.node;var Te=_(L),R={name:`stethoscope`,size:24,node:[[`path`,{d:`M11 2v2`,key:`1539x4`}],[`path`,{d:`M5 2v2`,key:`1yf1q8`}],[`path`,{d:`M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1`,key:`rb5t3r`}],[`path`,{d:`M8 15a6 6 0 0 0 12 0v-3`,key:`x18d4x`}],[`circle`,{cx:`20`,cy:`10`,r:`2`,key:`ts1r5v`}]]};R.node;var z=_(R),B={name:`users`,size:24,node:[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]};B.node;var V=_(B),Ee={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};Ee.node;var De=_(Ee),Oe=e(n(),1);function ke(e){let t=[];for(let n=e;n&&n!==document.body;n=n.parentElement){let e=getComputedStyle(n).position;(e===`sticky`||e===`-webkit-sticky`)&&t.push(n)}return t}function Ae(e){let t=0;for(let n=e;n;n=n.offsetParent)t+=n.offsetTop;return t}function je(e){let t=ke(e);if(!t.length)return Ae(e);let n=t.map(e=>e.style.position);t.forEach(e=>{e.style.position=`static`});let r=Ae(e);return t.forEach((e,t)=>{e.style.position=n[t]}),r}function Me(){let e=document.querySelector(`[data-nav-header]`);if(!e){let e=document.querySelector(`.nav-root`);return e?e.offsetHeight:90}let t=document.querySelector(`.nav-root`),n=t&&parseFloat(getComputedStyle(t).getPropertyValue(`--nav-pad-solid`))||16;return e.offsetHeight+n*2}function Ne(e){let t=document.getElementById(String(e).replace(`#`,``));return t?Math.max(0,je(t)-Me()):null}function H(e){let t=Ne(e);return t!==null&&(window.scrollTo({top:t,behavior:`smooth`}),!0)}var U=r(),W=[{name:`Home`,href:`#hero`,Icon:ve},{name:`About SHRI-AI`,href:`#about`,Icon:Te},{name:`Services`,href:`#focus`,Icon:ye},{name:`Collaborating Organizations`,href:`#partnership`,Icon:ge},{name:`Team`,href:`#team`,Icon:V},{name:`Careers`,href:`#careers`,Icon:fe},{name:`Contact`,href:`#contact`,triggerForm:!0,Icon:be}],Pe=()=>{let[e,t]=(0,g.useState)(!1),[n,r]=(0,g.useState)(!1),[i,a]=(0,g.useState)(!1),[o,s]=(0,g.useState)(!1),c=(0,g.useRef)(null),l=(0,g.useRef)(null),[u,d]=(0,g.useState)(`hero`);(0,g.useEffect)(()=>{let e=()=>r(window.scrollY>30);return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,g.useEffect)(()=>{let e=()=>{a(window.innerWidth<1180),s(window.innerWidth<1200)};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,g.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&t(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,g.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]),(0,g.useEffect)(()=>{let e=[],t=null,n=()=>{e=W.map(({href:e})=>{let t=document.getElementById(e.slice(1));return t?{id:e.slice(1),top:je(t)}:null}).filter(Boolean).sort((e,t)=>e.top-t.top)},r=()=>{if(t=null,!e.length)return;let n=window.scrollY+Me()+8,r=document.documentElement,i=window.scrollY+window.innerHeight>=r.scrollHeight-2,a=e[0].id;if(i)a=e[e.length-1].id;else for(let t of e)t.top<=n&&(a=t.id);d(e=>e===a?e:a)},i=()=>{t||(t=requestAnimationFrame(r))},a=()=>{n(),i()};n(),r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,a);let o=setTimeout(a,1200);return document.fonts?.ready&&document.fonts.ready.then(a).catch(()=>{}),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,a),clearTimeout(o),t&&cancelAnimationFrame(t)}},[]);let f=(0,g.useCallback)((e,n,r=!1)=>{e.preventDefault(),t(!1),H(n)&&r&&window.dispatchEvent(new CustomEvent(`open-contact-form`))},[]),p=!n&&!e,m=p?`transparent-mode`:`solid-mode`;return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        /* ── Root nav ── */
        .nav-root {
          /* Consumed by lib/scrollToSection so the scroll offset matches the
             navbar's settled (solid) height rather than its transparent one. */
          --nav-pad-solid: 16px;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition:
            background 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            padding    0.38s cubic-bezier(0.4, 0, 0.2, 1),
            backdrop-filter 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-root.transparent {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          padding: 28px 0;
        }
        .nav-root.solid {
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 1px 0 rgba(0,0,0,0.06), 0 6px 30px rgba(0,0,0,0.05);
          padding: 16px 0;
        }

        /* ── Logo ── */
        .logo-img {
          width: 48px;
          height: 48px;
          object-fit: contain;
          flex-shrink: 0;
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-img:hover {
          opacity: 0.85;
        }
        
        .logo-title {
          font-family: var(--font-sans);
          font-size: 22px;
          font-weight: 500;
          letter-spacing: -0.022em;
          line-height: 1.1;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-subtitle {
          font-family: var(--font-sans);
          font-size: 12px;
          letter-spacing: 0.04em;
          line-height: 1.4;
          margin-top: 4px;
          transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .logo-title.transparent-mode   { color: #2d2d38; }
        .logo-subtitle.transparent-mode { color: rgba(45,45,56,0.52); }
        .logo-title.solid-mode          { color: #1a1a24; }
        .logo-subtitle.solid-mode       { color: #888; }

        /* ── Nav links ── */
        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 10px clamp(8px, 1vw, 18px);
          border-radius: 10px;
          font-family: var(--font-sans);
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 400;
          letter-spacing: -0.012em;
          cursor: pointer;
          border: none;
          background: transparent;
          text-decoration: none;
          white-space: nowrap;
          transition:
            color      0.35s cubic-bezier(0.4, 0, 0.2, 1),
            background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @media (max-width: 1200px) {
          .nav-link { padding: 10px 12px; }
        }
        .nav-link.transparent-mode {
          color: #2d2d38;
        }
        .nav-link.transparent-mode:hover {
          color: #1a1a24;
          background: rgba(45, 45, 56, 0.13);
        }
        .nav-link.solid-mode {
          color: #2d2d38;
        }
        .nav-link.solid-mode:hover {
          color: #1a1a24;
          background: rgba(0, 0, 0, 0.10);
        }

        /* ── Active-section underline ──
         * Drawn on an inner span so it hugs the label text exactly rather than
         * the link's padding box. Animated with scaleX (compositor-only) and
         * deliberately NOT paired with a font-weight change: bolding the active
         * link would change its text width and shift the whole row on every
         * scroll boundary. */
        .nav-link-label {
          position: relative;
          display: inline-block;
        }
        .nav-link-label::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -5px;
          height: 1.5px;
          border-radius: 2px;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left center;
          /* Opacity rides along with the scale: shrinking alone leaves a 1px
             dot at the transform origin for the last frames of the transition,
             which reads as a stray speck when the active link changes. */
          opacity: 0;
          transition:
            transform 0.38s cubic-bezier(0.4, 0, 0.2, 1),
            opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link.active .nav-link-label::after {
          transform: scaleX(1);
          opacity: 1;
        }
        .nav-link.active {
          color: #14141e;
        }

        /* ── Link icons ──
         * Fine-line icons stroked with the brand gradient (the About tagline's
         * purple → blue → gold), defined once in #nav-icon-grad. The CSS
         * stroke overrides lucide's currentColor attribute. Muted at rest,
         * full strength and a small lift on hover or when active. */
        .nav-icon {
          flex: none;
          stroke: url(#nav-icon-grad);
          opacity: 0.72;
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .nav-link { gap: 7px; }
        .nav-link:hover .nav-icon,
        .nav-link.active .nav-icon,
        .mobile-link:hover .nav-icon,
        .mobile-link.active .nav-icon {
          opacity: 1;
          transform: translateY(-1px);
        }
        /* Tight desktop widths: the labels need the room more than the icons. */
        @media (min-width: 1180px) and (max-width: 1380px) {
          .nav-link .nav-icon { display: none; }
        }
        /* Where the icons show, the header row is capped at 1400px, so the
           icons' width comes out of the link padding instead of pushing the
           row into the logo. */
        @media (min-width: 1381px) {
          .nav-link { padding: 10px 10px; }
        }
        .mobile-link-inner { display: inline-flex; align-items: center; gap: 12px; }

        /* Mobile: a left accent bar reads better than an underline on a
           full-width row, and costs no layout shift. */
        .mobile-link {
          position: relative;
        }
        .mobile-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 2px;
          height: 0;
          background: #14141e;
          border-radius: 2px;
          transform: translateY(-50%);
          transition: height 0.32s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-link.active::before {
          height: 60%;
        }
        .mobile-link.active {
          color: #14141e;
          background: rgba(0, 0, 0, 0.045);
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link-label::after,
          .mobile-link::before,
          .nav-icon {
            transition: none;
          }
          .nav-link:hover .nav-icon,
          .nav-link.active .nav-icon,
          .mobile-link:hover .nav-icon,
          .mobile-link.active .nav-icon {
            transform: none;
          }
        }

        /* ── Hamburger ── */
        .hamburger-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 11px;
          border: none;
          cursor: pointer;
          transition:
            background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            color      0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hamburger-btn.transparent-mode {
          background: transparent;
          color: #2d2d38;
        }
        .hamburger-btn.transparent-mode:hover {
          background: rgba(45,45,56,0.08);
        }
        .hamburger-btn.solid-mode {
          background: transparent;
          color: #2d2d38;
        }
        .hamburger-btn.solid-mode:hover {
          background: rgba(0,0,0,0.05);
        }

        /* ── Mobile panel ── */
        .mobile-panel {
          overflow: hidden;
          transition:
            max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1),
            opacity    0.36s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(255,255,255,0.98);
          border-top: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 30px rgba(0,0,0,0.07);
        }
        .mobile-panel.open   { max-height: 100dvh; opacity: 1; }
        .mobile-panel.closed { max-height: 0;       opacity: 0; }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 14px;
          border-radius: 12px;
          font-family: var(--font-sans);
          font-size: 17px;
          font-weight: 400;
          color: #2d2d38;
          letter-spacing: -0.012em;
          text-decoration: none;
          border: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          transition:
            background 0.2s cubic-bezier(0.4, 0, 0.2, 1),
            color      0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-link:hover {
          background: rgba(0,0,0,0.04);
          color: #1a1a24;
        }

        .mobile-divider {
          height: 1px;
          background: rgba(0,0,0,0.055);
          margin: 4px 0;
        }
      `}),(0,U.jsxs)(`nav`,{ref:c,className:`nav-root ${p?`transparent`:`solid`}`,children:[(0,U.jsx)(`svg`,{width:`0`,height:`0`,style:{position:`absolute`},"aria-hidden":`true`,focusable:`false`,children:(0,U.jsx)(`defs`,{children:(0,U.jsxs)(`linearGradient`,{id:`nav-icon-grad`,gradientUnits:`userSpaceOnUse`,x1:`2`,y1:`2`,x2:`22`,y2:`22`,children:[(0,U.jsx)(`stop`,{offset:`0`,stopColor:`#7B6FCD`}),(0,U.jsx)(`stop`,{offset:`0.55`,stopColor:`#3A82C4`}),(0,U.jsx)(`stop`,{offset:`1`,stopColor:`#D4891E`})]})})}),(0,U.jsxs)(`div`,{ref:l,"data-nav-header":!0,style:{maxWidth:1400,margin:`0 auto`,padding:`0 clamp(20px, 4vw, 56px)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:20},children:[(0,U.jsxs)(`a`,{href:`#hero`,onClick:e=>f(e,`#hero`),style:{display:`flex`,alignItems:`center`,gap:13,flexShrink:0,textDecoration:`none`},children:[(0,U.jsx)(`img`,{src:`/images/brand/shri-ai-logo.webp`,alt:`SHRI-AI logo`,width:`48`,height:`48`,className:`logo-img`}),(0,U.jsxs)(`div`,{style:{lineHeight:1},children:[(0,U.jsx)(`div`,{className:`logo-title ${m}`,children:`SHRI-AI.org`}),!o&&(0,U.jsx)(`div`,{className:`logo-subtitle ${m}`,children:`Senus Healthcare Research Institute`})]})]}),!i&&(0,U.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`clamp(4px, 0.8vw, 16px)`,flex:`1 1 auto`,minWidth:0,justifyContent:`center`,padding:`0 20px`},children:W.map(e=>{let t=u===e.href.slice(1);return(0,U.jsxs)(`a`,{href:e.href,className:`nav-link ${m}${t?` active`:``}`,"aria-current":t?`true`:void 0,onClick:t=>f(t,e.href,e.triggerForm),children:[(0,U.jsx)(e.Icon,{className:`nav-icon`,size:16,strokeWidth:1.6,"aria-hidden":`true`}),(0,U.jsx)(`span`,{className:`nav-link-label`,children:e.name})]},e.name)})}),(0,U.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexShrink:0},children:i&&(0,U.jsx)(`button`,{onClick:()=>t(e=>!e),className:`hamburger-btn ${m}`,"aria-label":`Toggle navigation`,"aria-expanded":e,children:(0,U.jsx)(`svg`,{style:{width:24,height:24,transition:`transform 0.3s cubic-bezier(0.4,0,0.2,1)`},fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:e?(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M6 18L18 6M6 6l12 12`}):(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M4 6h16M4 12h16M4 18h16`})})})})]}),i&&(0,U.jsx)(`div`,{className:`mobile-panel ${e?`open`:`closed`}`,children:(0,U.jsx)(`div`,{style:{maxWidth:1400,margin:`0 auto`,padding:`12px clamp(20px, 4vw, 56px) 20px`},children:(0,U.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:W.map((e,t)=>(0,U.jsxs)(`div`,{children:[t>0&&(0,U.jsx)(`div`,{className:`mobile-divider`}),(0,U.jsx)(`a`,{href:e.href,className:`mobile-link${u===e.href.slice(1)?` active`:``}`,"aria-current":u===e.href.slice(1)?`true`:void 0,onClick:t=>f(t,e.href,e.triggerForm),children:(0,U.jsxs)(`span`,{className:`mobile-link-inner`,children:[(0,U.jsx)(e.Icon,{className:`nav-icon`,size:18,strokeWidth:1.6,"aria-hidden":`true`}),e.name]})})]},e.name))})})})]})]})},Fe=({paint:e})=>(0,U.jsxs)(`svg`,{viewBox:`4.5 1.5 15 21`,width:`46`,height:`46`,fill:`none`,"aria-hidden":`true`,children:[(0,U.jsx)(`path`,{d:`M12 2.6C9.3 2.6 8.1 4.8 8.1 6.75c0 2.05 1.3 4.05 2.55 5.95L6.3 19.95l2.55 1.25L12 15.75l3.15 5.45 2.55-1.25-4.35-7.25c1.25-1.9 2.55-3.9 2.55-5.95C15.9 4.8 14.7 2.6 12 2.6Zm0 2.5c1.2 0 1.8.9 1.8 1.9 0 1.2-.75 2.6-1.8 4.1-1.05-1.5-1.8-2.9-1.8-4.1 0-1 .6-1.9 1.8-1.9Z`,fill:e,fillOpacity:`0.18`,fillRule:`evenodd`,stroke:e,strokeWidth:`1.35`,strokeLinejoin:`round`}),(0,U.jsx)(`path`,{d:`M10.65 12.7l2.4 4.1`,stroke:e,strokeWidth:`1.35`,strokeLinecap:`round`})]}),Ie=({paint:e})=>(0,U.jsx)(`svg`,{viewBox:`1.5 1.5 21 21`,width:`46`,height:`46`,fill:`none`,"aria-hidden":`true`,children:(0,U.jsxs)(`g`,{stroke:e,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,U.jsx)(`path`,{d:`M4.5 21V10.5A1.5 1.5 0 0 1 6 9h12a1.5 1.5 0 0 1 1.5 1.5V21`,fill:e,fillOpacity:`0.14`}),(0,U.jsx)(`rect`,{x:`8.5`,y:`2.75`,width:`7`,height:`6.25`,rx:`1.3`,fill:`#fff`}),(0,U.jsx)(`path`,{d:`M12 4.1v3.5M10.25 5.85h3.5`}),(0,U.jsx)(`path`,{d:`M7.25 12.25h2M14.75 12.25h2M7.25 15.25h2M14.75 15.25h2`}),(0,U.jsx)(`path`,{d:`M10.4 21v-2.9a1.6 1.6 0 0 1 3.2 0V21`}),(0,U.jsx)(`path`,{d:`M2.5 21h19`})]})}),Le=({kind:e,className:t=``})=>{let n=(0,g.useId)().replace(/:/g,``),r=`url(#${n})`,i={brain:(0,U.jsx)(ue,{size:46,strokeWidth:1.2,color:r,"aria-hidden":`true`}),ribbon:(0,U.jsx)(Fe,{paint:r}),hospital:(0,U.jsx)(Ie,{paint:r})}[e];return(0,U.jsxs)(`span`,{className:`hh-emblem ${t}`,"aria-hidden":`true`,children:[(0,U.jsx)(`svg`,{width:`0`,height:`0`,style:{position:`absolute`},focusable:`false`,children:(0,U.jsx)(`defs`,{children:(0,U.jsxs)(`linearGradient`,{id:n,gradientUnits:`userSpaceOnUse`,x1:`3`,y1:`2`,x2:`21`,y2:`22`,children:[(0,U.jsx)(`stop`,{offset:`0`,style:{stopColor:`var(--c-accent-2)`}}),(0,U.jsx)(`stop`,{offset:`1`,style:{stopColor:`var(--c-accent)`}})]})})}),i]})},G=(e,t,n,r=e)=>({"--c-accent":e,"--c-accent-2":t,"--c-accent-rgb":n,"--c-btn":r}),K=[G(`#7B6FCD`,`#a99ff0`,`123, 111, 205`),G(`#3A82C4`,`#7fb3e6`,`58, 130, 196`),G(`#2aaa72`,`#6fd1a4`,`42, 170, 114`),G(`#D4891E`,`#f0b866`,`212, 137, 30`),G(`#b52a6b`,`#e67aa6`,`181, 42, 107`)],Re=[{Icon:T,label:`Early Detection`,vars:K[1]},{Icon:D,label:`Precision Diagnosis`,vars:K[0]},{Icon:S,label:`Genomic Insights`,vars:K[2]},{Icon:_e,label:`Better Outcomes`,vars:K[4]},{Icon:V,label:`Accessible to All`,vars:K[3]}],ze=[{id:`stroke`,title:`Stroke AI`,tagline:`AI for Faster Detection and Better Outcomes`,emblem:`brain`,image:`/images/home/stroke-brain.webp`,imageSize:[425,460],cutout:!0,features:[{Icon:Ce,label:`CT / MRI Analysis`},{Icon:T,label:`Stroke Detection`},{Icon:he,label:`AI Assessment`},{Icon:S,label:`Monitoring & Follow-up`}],cta:`Stroke AI Platform`,href:`https://stroke-ai.org`,external:!0,vars:{...G(`#2a6db5`,`#6aa6e8`,`42, 109, 181`),"--c-tint-1":`#dbe8fb`,"--c-tint-2":`#f1f6ff`}},{id:`oncotrace`,title:`OncoTrace AI`,tagline:`AI Imaging + NGS for Early Detection and Personalized Care`,emblem:`ribbon`,image:`/images/home/oncotrace-breast.webp`,imageSize:[358,460],cutout:!0,features:[{Icon:Se,label:`AI MRI Analysis`},{Icon:we,label:`Mammography AI`},{Icon:D,label:`NGS & Molecular Profiling`},{Icon:oe,label:`Risk Assessment`}],cta:`OncoTrace AI`,href:`https://oncotrace-ai.org`,external:!0,vars:{...G(`#b52a6b`,`#e67aa6`,`181, 42, 107`),"--c-tint-1":`#fbe1ee`,"--c-tint-2":`#f5ecfc`}}],q={kicker:`Our priority · AI for hospitals`,title:`SHRI Health`,subtitle:`The Intelligent Hospital Platform`,tagline:`Connected Care. One Unified Experience.`,para:`Built to raise the quality of care and the productivity of every team. Hospitals lose hours to registration queues, paperwork, orders lost between departments and medicines that run out or expire. SHRI Health connects every department, so patients register once, doctors spend more time with patients than on forms, pharmacy and lab work straight from the doctor's orders, and stock is tracked before it runs short.`,photo:`clinician`,cta:`Explore SHRI Health`,href:`/dev`,vars:G(`#1f9163`,`#5cc79a`,`31, 145, 99`,`#167a52`)},Be=e=>({src:`/images/shri-health/${e}.webp`,srcSet:`/images/shri-health/${e}-640.webp 640w, /images/shri-health/${e}.webp 1200w`}),J=[.22,1,.36,1],Y=(e=0)=>({initial:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.75,delay:e*.09,ease:J}}),Ve=()=>(0,U.jsxs)(s,{reducedMotion:`user`,children:[(0,U.jsx)(`style`,{children:`
        .hh-root {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          font-family: var(--font-sans);
          color: var(--ink);
          padding: clamp(96px, 9vw, 124px) 0 var(--section-pad-y);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .hh-root *, .hh-root *::before, .hh-root *::after { box-sizing: border-box; }

        .hh-wrap {
          position: relative;
          z-index: 1;
          /* Near full width like the reference layout, with a gutter wide
             enough that the containers breathe against the viewport edge. */
          margin: 0 auto;
          padding-inline: clamp(18px, 4.5vw, 84px);
        }

        /* Shared frosted surface. */
        .hh-surface {
          background: rgba(255, 255, 255, 0.66);
          -webkit-backdrop-filter: blur(14px) saturate(125%);
          backdrop-filter: blur(14px) saturate(125%);
          border: 1px solid rgba(20, 20, 40, 0.07);
          border-radius: 22px;
          box-shadow:
            inset 0 0 0 1px rgba(20, 20, 40, 0.03),
            0 1px 2px rgba(20, 20, 40, 0.04),
            0 26px 50px -30px rgba(40, 40, 90, 0.25);
        }

        /* ── Banner (reference layout) ──
           A rounded card the width of the card row, not full-bleed: heading
           left, the building in its own middle column fading at both sides,
           the five points right. */
        .hh-banner {
          --bpad: clamp(1.25rem, 2vw, 1.9rem);
          --bpad-x: clamp(1.5rem, 3vw, 3rem);
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(20, 20, 40, 0.07);
          background: linear-gradient(90deg, rgba(221, 234, 251, 0.92) 0%, rgba(233, 242, 253, 0.84) 45%, rgba(242, 238, 252, 0.8) 100%);
          -webkit-backdrop-filter: blur(14px) saturate(125%);
          backdrop-filter: blur(14px) saturate(125%);
          box-shadow:
            inset 0 0 0 1px rgba(20, 20, 40, 0.03),
            0 1px 2px rgba(20, 20, 40, 0.04),
            0 26px 50px -30px rgba(40, 60, 120, 0.3);
        }
        /* Animated brand hairline along the banner's lower edge. */
        .hh-banner::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, #7B6FCD, #3A82C4, #2aaa72, #D4891E, #b52a6b, #7B6FCD);
          background-size: 200% 100%;
          animation: hhSlide 10s linear infinite;
          opacity: 0.55;
        }
        @keyframes hhSlide { to { background-position: 200% 0; } }

        .hh-banner-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr) auto;
          align-items: center;
          gap: clamp(1rem, 2vw, 2rem);
          min-height: clamp(170px, 11.5vw, 205px);
          padding: var(--bpad) var(--bpad-x);
        }
        .hh-banner-text { min-width: 0; }
        .hh-title {
          margin: 0;
          font-size: var(--fs-h2);
          font-weight: var(--fw-light);
          letter-spacing: var(--ls-display);
          line-height: var(--lh-display);
          color: var(--ink);
        }
        .hh-title-em {
          font-weight: var(--fw-regular);
          background: linear-gradient(135deg, #7B6FCD 0%, #3A82C4 50%, #D4891E 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: hhGradient 8s ease infinite;
        }
        @keyframes hhGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .hh-sub {
          margin: 0.75rem 0 0;
          font-size: var(--fs-lead);
          font-weight: var(--fw-light);
          line-height: var(--lh-body);
          color: var(--ink-soft);
        }
        /* Organisation status: stands out through weight, ink colour and the
           gradient on 501(c)(3), not a box. */
        .hh-org {
          margin: clamp(0.9rem, 1.4vw, 1.25rem) 0 0;
          font-size: var(--fs-body);
          font-weight: var(--fw-medium);
          line-height: 1.4;
          letter-spacing: -0.005em;
          color: var(--ink);
        }
        .hh-org-em {
          background: linear-gradient(135deg, #7B6FCD 0%, #3A82C4 55%, #D4891E 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* The building is its own column — never under the heading. It
           runs the banner's full height and fades out at both sides. */
        .hh-banner-media {
          position: relative;
          align-self: stretch;
          min-height: 170px;
          margin-block: calc(-1 * var(--bpad));
        }
        /* contain, not cover: the whole building always shows. The photo
           (the Indo States Health centre) is a cut-out with the sky removed,
           so it fades out at the left and right and only along the bottom,
           where the grounds are cut straight; the roofline stays crisp. The
           two fades are intersected, and it sits very slightly translucent so
           it reads as part of the banner. Source: UN_USED_FILES/client/
           assets-src/indostates-cutout-full.png, cropped to 2585x1173 at
           (169, 226) and exported at 1600w (q76) and 800w (q80). */
        .hh-banner-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          /* Sits on the banner's bottom edge, not centred in it. */
          object-position: 50% 100%;
          opacity: 0.95;
          -webkit-mask-image:
            linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%),
            linear-gradient(180deg, #000 0%, #000 80%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%),
            linear-gradient(180deg, #000 0%, #000 80%, transparent 100%);
          mask-composite: intersect;
        }

        .hh-points {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .hh-point {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: var(--fs-xs);
          font-weight: var(--fw-regular);
          color: var(--ink-soft);
          white-space: nowrap;
        }
        .hh-point span {
          flex: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: linear-gradient(145deg, var(--c-accent-2), var(--c-accent));
          box-shadow: 0 4px 10px -4px rgba(var(--c-accent-rgb), 0.65);
        }

        /* ── Body ── */
        .hh-body {
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 3.6vw, 3.5rem);
        }

        /* ── Module cards (reference layout) ──
           Header row, then a two-column middle — feature list left, render
           right — then a full-width button. The render has its own grid
           column and bleeds only to the card's right edge, so it can never
           sit under text at any width. */
        .hh-modules {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: clamp(1.5rem, 2.6vw, 2.75rem);
        }
        .hh-card {
          --pad: clamp(1.1rem, 1.5vw, 1.55rem);
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          padding: var(--pad);
          /* Crisper corners than the shared 22px surface. */
          border-radius: 12px;
          background:
            radial-gradient(ellipse 55% 65% at 88% 55%, rgba(var(--c-accent-rgb), 0.16), transparent 70%),
            linear-gradient(110deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.64) 45%, var(--c-tint-1) 100%);
          transition: box-shadow 0.4s ease;
        }
        .hh-card:hover {
          box-shadow:
            inset 0 0 0 1px rgba(20, 20, 40, 0.03),
            0 1px 2px rgba(20, 20, 40, 0.04),
            0 34px 64px -30px rgba(var(--c-accent-rgb), 0.45);
        }
        .hh-card-head { display: flex; align-items: flex-start; gap: 1.1rem; }
        .hh-card-head > div { flex: 1; min-width: 0; padding-top: 0.15rem; }
        /* The emblem stands in open space — no tile around it; a soft accent
           shadow under the strokes gives it depth instead. */
        .hh-emblem {
          flex: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          filter: drop-shadow(0 6px 10px rgba(var(--c-accent-rgb), 0.28));
        }
        .hh-card-title {
          margin: 0;
          font-size: clamp(1.2rem, 1.55vw, 1.55rem);
          font-weight: var(--fw-medium);
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--c-btn);
        }
        .hh-card-tagline {
          margin: 0.35rem 0 0;
          font-size: var(--fs-sm);
          font-weight: var(--fw-light);
          line-height: 1.45;
          color: var(--ink-soft);
        }
        .hh-corner {
          flex: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--c-accent);
          background: #fff;
          box-shadow: 0 1px 2px rgba(20, 20, 40, 0.06), 0 6px 16px -8px rgba(var(--c-accent-rgb), 0.55);
          transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        /* Decorative only: the whole card is the link (see .hh-btn::after),
           so the chevron reacts to the card rather than being its own target. */
        .hh-card:hover .hh-corner,
        .hh-card:focus-within .hh-corner { transform: translateX(2px); background: var(--c-btn); color: #fff; }

        .hh-card-main {
          flex: 1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) clamp(110px, 40%, 270px);
          align-items: center;
          gap: 0.75rem;
          margin: 1.25rem calc(-1 * var(--pad)) 1.35rem 0;
        }
        .hh-features {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          min-width: 0;
        }
        .hh-features li {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          min-width: 0;
          font-size: var(--fs-sm);
          font-weight: var(--fw-regular);
          line-height: 1.35;
          color: var(--ink-soft);
        }
        /* Feature icons stand free — no tile — in the card's accent. */
        .hh-feat-icon {
          flex: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          color: var(--c-accent);
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hh-features li:hover .hh-feat-icon { transform: scale(1.12); }
        /* The image box takes the image's own proportions (height auto), so
           nothing is cropped; the elliptical fade only softens the outer rim
           where the source was cut from the reference, never the subject. */
        .hh-card-img {
          position: relative;
          align-self: center;
          justify-self: center;
          width: 100%;
          max-width: 240px;
        }
        .hh-card-img img {
          display: block;
          width: auto;
          max-width: 100%;
          height: auto;
          /* A shared height cap keeps the three cards level even though the
             images differ slightly in proportion. */
          max-height: 210px;
          margin-inline: auto;
          -webkit-mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 82%, transparent 100%);
          mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 82%, transparent 100%);
        }
        /* A transparent cut-out has no rectangular edge to soften, so it
           skips the fade and takes a soft accent shadow instead. */
        .hh-card-img img.is-cutout {
          -webkit-mask-image: none;
          mask-image: none;
          filter: drop-shadow(0 14px 22px rgba(var(--c-accent-rgb), 0.28));
        }
        .hh-btn {
          margin-top: auto;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          min-height: 44px;
          padding: 0.75rem 1.4rem;
          border: 0;
          border-radius: 999px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0)),
            var(--c-btn);
          color: #fff;
          font-family: var(--font-sans);
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          letter-spacing: 0.01em;
          text-decoration: none;
          /* Hover brightens with an inset white wash, never \`filter\`: a filter
             would make this button the containing block of its ::after and
             shrink the card-wide click area to the button itself. */
          box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0), 0 10px 22px -12px rgba(var(--c-accent-rgb), 0.8);
          transition: box-shadow 0.25s ease;
        }
        .hh-btn svg { transition: transform 0.25s ease; }
        .hh-card:hover .hh-btn,
        .hh-card:focus-within .hh-btn { color: #fff; box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.1), 0 14px 28px -12px rgba(var(--c-accent-rgb), 0.9); }
        .hh-card:hover .hh-btn svg,
        .hh-card:focus-within .hh-btn svg { transform: translateX(3px); }
        /* Stretched link: the button's overlay covers the whole card, so a
           click anywhere on it follows the button. The card stays an article
           with its own heading and list; there is still one tab stop. */
        .hh-card .hh-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .hh-card .hh-btn {
          align-self: stretch;
          justify-content: center;
          min-height: 46px;
          border-radius: 8px;
          font-size: var(--fs-sm);
        }

        .hh-btn:focus-visible { outline: 2px solid #3A82C4; outline-offset: 3px; }

        /* ── Featured: SHRI Health ──
           Its own surface (deep hospital green, white type), not a variant of
           .hh-card, so the phone rule that unboxes the cards leaves it be.
           Text left; one photo fills the right side edge to edge and fades
           into the green, so the card reads as a single scene rather than
           framed pieces. The card itself is the link (one element, one tab
           stop, clickable edge to edge, photo included); the white pill is
           only its visual button. */
        .hh-feature {
          grid-column: 1 / -1;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
          align-items: stretch;
          border-radius: 20px;
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: box-shadow 0.3s ease;
          background:
            radial-gradient(ellipse 60% 80% at 85% 40%, rgba(92, 199, 154, 0.32), transparent 70%),
            radial-gradient(ellipse 50% 60% at 0% 100%, rgba(58, 130, 196, 0.22), transparent 70%),
            linear-gradient(135deg, #0d3a2b 0%, #12573f 55%, #1f9163 100%);
          box-shadow:
            0 1px 2px rgba(10, 40, 30, 0.2),
            0 40px 70px -36px rgba(13, 58, 43, 0.75);
        }
        .hh-feature::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, #7B6FCD, #3A82C4, #2aaa72, #D4891E, #b52a6b, #7B6FCD);
          background-size: 200% 100%;
          animation: hhSlide 10s linear infinite;
          opacity: 0.8;
        }
        .hh-feature-text {
          position: relative;
          z-index: 1;
          min-width: 0;
          padding: clamp(1.75rem, 3.4vw, 3.5rem);
          padding-right: 0;
        }
        .hh-feature-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 0 1.1rem;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #c9f1de;
        }
        .hh-feature-kicker::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #5cc79a;
          box-shadow: 0 0 0 4px rgba(92, 199, 154, 0.25);
        }
        .hh-feature-head { display: flex; align-items: center; gap: 1rem; }
        .hh-feature-head .hh-emblem {
          padding: 0.55rem;
          border-radius: 14px;
          background: #fff;
          filter: none;
          box-shadow: 0 10px 24px -12px rgba(0, 0, 0, 0.5);
        }
        .hh-feature-title {
          margin: 0;
          font-size: clamp(2rem, 3.4vw, 3.1rem);
          font-weight: var(--fw-medium);
          letter-spacing: -0.03em;
          line-height: 1.02;
        }
        .hh-feature-subtitle {
          margin: 0.3rem 0 0;
          font-size: clamp(1.05rem, 1.5vw, 1.35rem);
          font-weight: var(--fw-regular);
          line-height: 1.3;
          color: #c9f1de;
        }
        /* The tagline is the card's statement: larger, with a mint rule. */
        .hh-feature-tagline {
          margin: 1.6rem 0 0;
          padding-left: 1rem;
          border-left: 3px solid #5cc79a;
          font-size: clamp(1.2rem, 1.9vw, 1.65rem);
          font-weight: var(--fw-light);
          letter-spacing: -0.015em;
          line-height: 1.25;
        }
        .hh-feature-para {
          margin: 1.25rem 0 0;
          max-width: 62ch;
          font-size: var(--fs-body);
          font-weight: var(--fw-light);
          line-height: var(--lh-body);
          color: rgba(255, 255, 255, 0.86);
        }
        .hh-feature .hh-btn {
          margin-top: 1.75rem;
          min-height: 48px;
          padding: 0.8rem 1.6rem;
          background: #fff;
          color: #12573f;
          font-size: var(--fs-sm);
          box-shadow: inset 0 0 0 999px rgba(31, 145, 99, 0), 0 14px 30px -14px rgba(0, 0, 0, 0.6);
        }
        .hh-feature:hover,
        .hh-feature:focus-visible {
          box-shadow:
            0 1px 2px rgba(10, 40, 30, 0.2),
            0 48px 80px -36px rgba(13, 58, 43, 0.9);
        }
        .hh-feature:focus-visible { outline: 3px solid #3A82C4; outline-offset: 4px; }
        .hh-feature:hover .hh-btn,
        .hh-feature:focus-visible .hh-btn {
          color: #0d3a2b;
          box-shadow: inset 0 0 0 999px rgba(31, 145, 99, 0.08), 0 18px 34px -14px rgba(0, 0, 0, 0.7);
        }
        .hh-feature:hover .hh-btn svg,
        .hh-feature:focus-visible .hh-btn svg { transform: translateX(3px); }
        .hh-feature-photo {
          position: relative;
          min-height: 360px;
        }
        .hh-feature-photo img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 30% 50%;
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.55) 22%, #000 48%);
          mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.55) 22%, #000 48%);
        }

        /* ── Desktop scale ──
           zoom sets the drawn size of everything inside (text, padding,
           icons, images) and so the containers' height; width is set
           separately as a share of the viewport. 0.84 / 91% = the earlier
           0.7 / 70% made 20% taller and 30% wider. Tablets and phones stay
           at 100% so text remains readable. */
        @media (min-width: 1101px) {
          .hh-body { zoom: 0.84; width: 91%; }
          /* Desktop banner at twice its base height; the building column
             widens so the (uncropped) image grows into the extra room. */
          .hh-banner-inner {
            /* ~2x the measured base height (1536px: 192px -> ~385px drawn). */
            min-height: clamp(400px, 30vw, 540px);
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr) auto;
          }
          .hh-points { gap: 0.9rem; }
        }

        /* ── Responsive ── */
        /* Three-up cards are narrowest here: a slimmer render column and
           icon tile keep the feature labels on one line. */
        @media (min-width: 1101px) and (max-width: 1400px) {
          .hh-card-main { grid-template-columns: minmax(0, 1fr) clamp(96px, 32%, 190px); gap: 0.5rem; }
          .hh-features li { gap: 0.7rem; font-size: var(--fs-xs); }
        }
        @media (max-width: 1100px) {
          /* Tablets and phones: the building is wide, so it gets the
             banner's full width under the heading (up to 640px, centred)
             rather than a narrow column; the points sit to the heading's
             right. The image sets its own height from its width/height
             ratio, so the fades stay on its edges and nothing shifts as it
             loads. */
          .hh-banner-inner { grid-template-columns: minmax(0, 1fr) auto; }
          .hh-banner-text { grid-column: 1; grid-row: 1; }
          .hh-points { grid-column: 2; grid-row: 1; }
          .hh-banner-media {
            grid-column: 1 / -1;
            grid-row: 2;
            align-self: auto;
            min-height: 0;
            margin: 0 calc(-1 * var(--bpad-x)) calc(-1 * var(--bpad));
          }
          .hh-banner-media img {
            position: static;
            display: block;
            width: 100%;
            max-width: 640px;
            height: auto;
            margin-inline: auto;
          }
          .hh-modules { grid-template-columns: minmax(0, 1fr); }
          .hh-card-main { grid-template-columns: minmax(0, 1fr) clamp(150px, 36%, 300px); }
          /* Featured: the photo on top, fading down into the text. */
          .hh-feature { grid-template-columns: minmax(0, 1fr); }
          /* 16:10 holds the 78%-wide 4:3 photo (0.585 of the width tall). */
          .hh-feature-text { padding: 0 clamp(1.25rem, 4vw, 2.5rem) clamp(1.75rem, 4vw, 2.5rem); }
          .hh-feature-photo { order: -1; min-height: 0; height: clamp(190px, 42vw, 340px); }
          .hh-feature-photo img {
            object-position: 50% 30%;
            -webkit-mask-image: linear-gradient(180deg, #000 45%, transparent 100%);
            mask-image: linear-gradient(180deg, #000 45%, transparent 100%);
          }
        }
        @media (max-width: 640px) {
          /* Phones: one column, building under the heading (up to 500px);
             the five points make room for it. */
          .hh-banner-inner { grid-template-columns: minmax(0, 1fr); }
          .hh-banner-media img { max-width: 500px; }
          .hh-points { display: none; }
          /* Phones: the three modules drop their card box and read as one
             flowing list, split by hairlines. Everything inside is as-is. */
          .hh-modules { gap: 0; }
          .hh-card.hh-surface,
          .hh-card.hh-surface:hover {
            background: none;
            border: 0;
            border-radius: 0;
            box-shadow: none;
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            overflow: visible;
            padding: 1.75rem 0;
          }
          .hh-card + .hh-card { border-top: 1px solid rgba(20, 20, 40, 0.08); }
          .hh-feature + .hh-card { padding-top: 2rem; }
          .hh-feature { margin-bottom: 0.5rem; border-radius: 16px; }
          .hh-feature .hh-btn { align-self: stretch; justify-content: center; width: 100%; }
          .hh-card-main { margin-right: 0; }
        }
        @media (max-width: 480px) {
          .hh-card-main { grid-template-columns: minmax(0, 1fr) 104px; }
          .hh-features li { gap: 0.7rem; font-size: var(--fs-xs); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hh-banner::after, .hh-feature::after, .hh-title-em { animation: none; }
          .hh-corner, .hh-btn, .hh-btn svg, .hh-feat-icon { transition: none; }
          .hh-features li:hover .hh-feat-icon { transform: none; }
          .hh-card:hover .hh-corner, .hh-card:focus-within .hh-corner,
          .hh-card:hover .hh-btn svg, .hh-card:focus-within .hh-btn svg,
          .hh-feature:hover .hh-btn svg, .hh-feature:focus-visible .hh-btn svg { transform: none; }
        }
      `}),(0,U.jsx)(`div`,{className:`hh-root`,children:(0,U.jsxs)(`div`,{className:`hh-wrap hh-body`,children:[(0,U.jsx)(`section`,{className:`hh-banner`,children:(0,U.jsxs)(`div`,{className:`hh-banner-inner`,children:[(0,U.jsxs)(o.div,{className:`hh-banner-text`,...Y(0),children:[(0,U.jsxs)(`h1`,{className:`hh-title`,children:[`AI-Powered `,(0,U.jsx)(`span`,{className:`hh-title-em`,children:`Healthcare`})]}),(0,U.jsx)(`p`,{className:`hh-sub`,children:`Intelligence across diagnosis, genomics and patient care`}),(0,U.jsxs)(`p`,{className:`hh-org`,children:[`A California-based `,(0,U.jsx)(`span`,{className:`hh-org-em`,children:`501(c)(3)`}),` nonprofit organization`]})]}),(0,U.jsx)(o.div,{className:`hh-banner-media`,"aria-hidden":`true`,...Y(1),children:(0,U.jsx)(`img`,{src:`/images/home/banner-indostates.webp`,srcSet:`/images/home/banner-indostates-800.webp 800w, /images/home/banner-indostates.webp 1600w`,sizes:`(max-width: 1100px) min(92vw, 640px), 42vw`,alt:``,width:1600,height:726,fetchPriority:`high`,decoding:`async`,draggable:!1})}),(0,U.jsx)(`ul`,{className:`hh-points`,children:Re.map(({Icon:e,label:t,vars:n},r)=>(0,U.jsxs)(o.li,{className:`hh-point`,style:n,...Y(r+1),children:[(0,U.jsx)(`span`,{"aria-hidden":`true`,children:(0,U.jsx)(e,{size:14,strokeWidth:1.75})}),t]},t))})]})}),(0,U.jsxs)(`section`,{className:`hh-modules`,"aria-label":`AI platforms`,children:[(0,U.jsxs)(o.a,{className:`hh-feature`,href:q.href,"aria-label":`${q.cta}: ${q.subtitle}`,style:q.vars,...Y(0),whileHover:{y:-4,transition:{duration:.35,ease:J}},whileTap:{scale:.99},children:[(0,U.jsxs)(`div`,{className:`hh-feature-text`,children:[(0,U.jsx)(`p`,{className:`hh-feature-kicker`,children:q.kicker}),(0,U.jsxs)(`div`,{className:`hh-feature-head`,children:[(0,U.jsx)(Le,{kind:`hospital`}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h2`,{className:`hh-feature-title`,children:q.title}),(0,U.jsx)(`p`,{className:`hh-feature-subtitle`,children:q.subtitle})]})]}),(0,U.jsx)(`p`,{className:`hh-feature-tagline`,children:q.tagline}),(0,U.jsx)(`p`,{className:`hh-feature-para`,children:q.para}),(0,U.jsxs)(`span`,{className:`hh-btn`,"aria-hidden":`true`,children:[q.cta,(0,U.jsx)(b,{size:16,strokeWidth:1.75,"aria-hidden":`true`})]})]}),(0,U.jsx)(`div`,{className:`hh-feature-photo`,"aria-hidden":`true`,children:(0,U.jsx)(`img`,{...Be(q.photo),sizes:`(max-width: 1100px) 92vw, 42vw`,alt:``,width:1200,height:900,loading:`lazy`,decoding:`async`,draggable:!1})})]}),ze.map((e,t)=>{let n=e.external?{href:e.href,target:`_blank`,rel:`noopener noreferrer`}:{href:e.href};return(0,U.jsxs)(o.article,{className:`hh-card hh-surface`,style:e.vars,...Y(t+1),whileHover:{y:-4,transition:{duration:.35,ease:J}},children:[(0,U.jsxs)(`div`,{className:`hh-card-head`,children:[(0,U.jsx)(Le,{kind:e.emblem}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`h2`,{className:`hh-card-title`,children:e.title}),(0,U.jsx)(`p`,{className:`hh-card-tagline`,children:e.tagline})]}),(0,U.jsx)(`span`,{className:`hh-corner`,"aria-hidden":`true`,children:(0,U.jsx)(pe,{size:18,strokeWidth:1.75})})]}),(0,U.jsxs)(`div`,{className:`hh-card-main`,children:[(0,U.jsx)(`ul`,{className:`hh-features`,children:e.features.map(({Icon:e,label:t})=>(0,U.jsxs)(`li`,{children:[(0,U.jsx)(`span`,{className:`hh-feat-icon`,"aria-hidden":`true`,children:(0,U.jsx)(e,{size:20,strokeWidth:1.6})}),t]},t))}),(0,U.jsx)(`div`,{className:`hh-card-img`,"aria-hidden":`true`,children:(0,U.jsx)(`img`,{className:e.cutout?`is-cutout`:void 0,src:e.image,alt:``,loading:`lazy`,draggable:!1,width:e.imageSize[0],height:e.imageSize[1]})})]}),(0,U.jsxs)(`a`,{className:`hh-btn`,"aria-label":e.cta+(e.external?` (opens in new tab)`:``),...n,children:[e.cta,(0,U.jsx)(b,{size:16,strokeWidth:1.75,"aria-hidden":`true`})]})]},e.id)})]})]})})]}),He=()=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        .about-section {
          background: linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%);
          min-height: 100dvh;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .about-text {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          line-height: 1.55;
          color: #1a1a1a;
          letter-spacing: -0.015em;
        }

        .accent-purple { color: #7B6FCD; }
        .accent-gold   { color: #D4891E; }
        .accent-blue   { color: #3A82C4; }
        .accent-green  { color: #2aaa72; }

        .footer-tagline-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          flex-shrink: 0;
          padding: clamp(2rem, 5vh, 3.5rem) var(--gutter);
          background: linear-gradient(to top, rgba(232, 234, 246, 0.9) 0%, transparent 100%);
        }

        .footer-tagline {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: clamp(1.75rem, 4vw, 3.25rem);
          /* was +0.02em — the only display-size heading tracking the wrong
             direction; the system tightens tracking as size grows */
          letter-spacing: -0.015em;
          background: linear-gradient(135deg, #7B6FCD 0%, #3A82C4 50%, #D4891E 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
          text-align: center;
          line-height: 1.4;
          margin: 0;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .footer-tagline .highlight {
          font-weight: 400;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .footer-tagline {
            font-size: clamp(1.35rem, 6vw, 2rem);
          }
          
          .footer-tagline-wrapper {
            padding: clamp(1.5rem, 4vh, 2.5rem) var(--gutter);
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          .footer-tagline {
            font-size: clamp(2rem, 4.5vw, 2.75rem);
          }
        }

        /* Ensure smooth rendering */
        .about-section * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Prevent layout shift */
        .content-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: clamp(2rem, 5vh, 4rem);
        }
      `}),(0,U.jsxs)(`section`,{className:`about-section relative w-full overflow-hidden`,children:[(0,U.jsxs)(`div`,{style:{position:`absolute`,inset:0,overflow:`hidden`,pointerEvents:`none`,zIndex:0},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,width:`65%`,height:`60%`,bottom:`-15%`,left:`-10%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(255,140,30,0.30) 0%, rgba(255,180,80,0.12) 40%, transparent 70%)`,filter:`blur(90px)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,width:`60%`,height:`60%`,bottom:`-10%`,left:`20%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(160,100,255,0.25) 0%, rgba(200,160,255,0.10) 40%, transparent 70%)`,filter:`blur(100px)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,width:`65%`,height:`60%`,bottom:`-15%`,right:`-10%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(50,130,255,0.30) 0%, rgba(100,170,255,0.12) 40%, transparent 70%)`,filter:`blur(90px)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,width:`40%`,height:`50%`,bottom:`0%`,right:`5%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(20,90,220,0.20) 0%, transparent 70%)`,filter:`blur(80px)`}})]}),(0,U.jsx)(`div`,{className:`content-wrapper relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24`,children:(0,U.jsxs)(`div`,{className:`about-text flex flex-col`,style:{fontSize:`clamp(1.2rem, 2.6vw, 2.2rem)`,gap:`clamp(0.15rem, 0.5vw, 0.35rem)`},children:[(0,U.jsxs)(`p`,{className:`text-center pb-4 max-w-[1400px] mx-auto`,children:[(0,U.jsx)(`span`,{style:{color:`#888`,fontWeight:300,fontSize:`0.92em`,letterSpacing:`0.02em`,marginRight:`0.28em`},children:`→`}),`SHRI-AI is a California-based 501(c)(3) nonprofit advancing `,(0,U.jsx)(`span`,{className:`accent-purple`,style:{fontWeight:400},children:`earlier detection`}),` and `,(0,U.jsx)(`span`,{className:`accent-gold`,style:{fontWeight:400},children:`precision care`}),` across `,(0,U.jsx)(`span`,{className:`accent-blue`,style:{fontWeight:400},children:`oncology and stroke`}),`.`]}),(0,U.jsxs)(`p`,{className:`text-center max-w-[1400px] mx-auto`,children:[`We build and fund `,(0,U.jsx)(`span`,{className:`accent-green`,style:{fontWeight:400},children:`open-source AI`}),`, pairing `,(0,U.jsx)(`span`,{className:`accent-blue`,style:{fontWeight:400},children:`genomics and liquid biopsy`}),` with medical imaging — reaching hospitals and communities everywhere.`]})]})}),(0,U.jsx)(`div`,{className:`footer-tagline-wrapper`,children:(0,U.jsxs)(`p`,{className:`footer-tagline`,children:[(0,U.jsx)(`span`,{className:`highlight`,children:`AI`}),` for health, `,(0,U.jsx)(`span`,{className:`highlight`,children:`Care`}),` for `,(0,U.jsx)(`span`,{className:`highlight`,children:`ALL`})]})})]})]}),Ue=[{Icon:ce,title:`Agentic AI Systems`,desc:`Developing autonomous, reasoning-capable agents and complex LLM architectures.`,items:[`LLM-Powered Applications`,`Multi-Agent Architectures`,`Intelligent Process Automation`,`Conversational AI Assistants`],accent:`#7B6FCD`,accentRgb:`123, 111, 205`},{Icon:z,title:`Healthcare AI`,desc:`Translating high-volume clinical data into precise, actionable decision support.`,items:[`Clinical Decision Support Systems`,`Predictive Health Analytics`,`AI-Powered Diagnostic Support`,`Automated Risk Stratification`],accent:`#3A82C4`,accentRgb:`58, 130, 196`},{Icon:xe,title:`Precision Oncology`,desc:`Architecting robust pipelines for variant analysis and molecular monitoring.`,items:[`Liquid Biopsy Data Pipelines`,`ctDNA Detection & Analysis`,`Next-Gen Sequencing (NGS) Pipelines`,`Molecular Response Monitoring`],accent:`#c0392b`,accentRgb:`192, 57, 43`},{Icon:D,title:`Genomics`,desc:`Processing massive-scale sequencing data into accessible, annotated structures.`,items:[`FASTQ & BAM Processing`,`VCF Variant Analysis`,`Biomarker Discovery Pipelines`,`Automated Variant Annotation`],accent:`#2aaa72`,accentRgb:`42, 170, 114`}],We=()=>{let[e,t]=(0,g.useState)(0),n=[{icon:(0,U.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,U.jsx)(`circle`,{cx:`20`,cy:`20`,r:`4`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`path`,{d:`M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`path`,{d:`M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,transform:`rotate(60 20 20)`}),(0,U.jsx)(`path`,{d:`M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,transform:`rotate(120 20 20)`}),(0,U.jsx)(`circle`,{cx:`20`,cy:`4`,r:`2`,fill:`currentColor`,opacity:`0.5`}),(0,U.jsx)(`circle`,{cx:`20`,cy:`36`,r:`2`,fill:`currentColor`,opacity:`0.5`}),(0,U.jsx)(`circle`,{cx:`4`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(60 20 20)`}),(0,U.jsx)(`circle`,{cx:`36`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(60 20 20)`}),(0,U.jsx)(`circle`,{cx:`4`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(120 20 20)`}),(0,U.jsx)(`circle`,{cx:`36`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(120 20 20)`})]}),accent:`#7B6FCD`,accentRgb:`123,111,205`,number:`01`,title:`Precision Oncology & Genomics`,subtitle:`From Sequence to Treatment Decision`,description:`Turning genomic and molecular data into decisions clinicians can act on — earlier detection, better-matched treatment, and monitoring that continues through the course of care.`,features:[`Next-generation sequencing and multi-omic interpretation`,`Liquid biopsy and ctDNA for non-invasive monitoring`,`Biomarker discovery and treatment-response modelling`]},{icon:(0,U.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,U.jsx)(`path`,{d:`M20 5 C13 5 8 11 8 18 C8 24 12 28 12 32 L12 34 L28 34 L28 32 C28 28 32 24 32 18 C32 11 27 5 20 5 Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`path`,{d:`M14 19 L18 19 L20 14 L23 24 L25 19 L28 19`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,U.jsx)(`path`,{d:`M15 34 L15 36 M25 34 L25 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#c0392b`,accentRgb:`192,57,43`,number:`02`,title:`Medical Imaging & Stroke AI`,subtitle:`Reading Scans at the Speed of Care`,description:`Imaging AI built for the clock that actually governs outcomes. Stroke is where we prove it, and the same methods extend to any diagnosis where minutes and subtle findings decide the result.`,features:[`AI-assisted CT and MRI interpretation`,`Risk stratification and early-warning models`,`Decision support for time-critical pathways`]},{icon:(0,U.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,U.jsx)(`rect`,{x:`6`,y:`12`,width:`28`,height:`20`,rx:`3`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`path`,{d:`M13 22 L16 18 L19 23 L22 16 L25 22 L28 19`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,U.jsx)(`circle`,{cx:`20`,cy:`8`,r:`3`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`path`,{d:`M17 10.5 L16 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`path`,{d:`M23 10.5 L24 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#3A82C4`,accentRgb:`58,130,196`,number:`03`,title:`AI Across the Care Continuum`,subtitle:`Prediction, Diagnosis, Monitoring`,description:`AI applied wherever clinical data is generated — not a single condition, but the whole arc from risk prediction and screening through diagnosis, treatment selection, and long-term monitoring.`,features:[`Predictive and risk-stratification models across conditions`,`Clinical decision support embedded in real workflows`,`Multimodal learning across imaging, genomics, and records`,`Foundation models adapted to clinical and biomedical data`]},{icon:(0,U.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,U.jsx)(`path`,{d:`M20 6 L20 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`circle`,{cx:`20`,cy:`21`,r:`4`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`path`,{d:`M8 14 L14 17.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`path`,{d:`M32 14 L26 17.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`path`,{d:`M8 28 L14 24.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`path`,{d:`M32 28 L26 24.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`circle`,{cx:`8`,cy:`13`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`circle`,{cx:`32`,cy:`13`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`circle`,{cx:`8`,cy:`29`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`circle`,{cx:`32`,cy:`29`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`circle`,{cx:`20`,cy:`35`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`path`,{d:`M20 25 L20 32.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#D4891E`,accentRgb:`212,137,30`,number:`04`,title:`Translation & Clinical Validation`,subtitle:`From Promising to Proven`,description:`Most health AI never reaches a patient. We treat the path from model to bedside as part of the research itself — validated on real populations, evaluated for bias, and built to survive clinical reality.`,features:[`Prospective validation with hospitals, labs, and academic centres`,`Evaluation across diverse populations and care settings`,`Regulatory, safety, and clinical-evidence pathways`,`Integration with existing clinical systems and workflows`]},{icon:(0,U.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,U.jsx)(`circle`,{cx:`20`,cy:`20`,r:`13`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`ellipse`,{cx:`20`,cy:`20`,rx:`6`,ry:`13`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,U.jsx)(`path`,{d:`M7 20 Q13 17 20 20 Q27 23 33 20`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`path`,{d:`M9 14 Q14 12 20 13 Q26 14 31 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,U.jsx)(`path`,{d:`M9 26 Q14 28 20 27 Q26 26 31 28`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#2aaa72`,accentRgb:`42,170,114`,number:`05`,title:`Open Infrastructure & Global Access`,subtitle:`Built to Be Adopted, Not Licensed`,description:`Advanced diagnostics are worth little if only well-funded systems can run them. We build in the open so hospitals, labs, and researchers anywhere can deploy, inspect, and extend the work themselves.`,features:[`Open-source tooling hospitals and labs can adopt directly`,`Solutions designed for constrained infrastructure and budgets`,`Research capacity building in India, Southeast Asia, and Africa`,`Transparent, auditable models rather than closed black boxes`]}],r=[{title:`Clinical Studies`,desc:`Collaborative research initiatives and trial design`,accent:`#7B6FCD`,accentRgb:`123,111,205`},{title:`Data Partnerships`,desc:`Shared datasets and analytics pipelines`,accent:`#3A82C4`,accentRgb:`58,130,196`},{title:`Technology Validation`,desc:`Real-world testing and verification`,accent:`#2aaa72`,accentRgb:`42,170,114`},{title:`Grant-Funded Research`,desc:`Joint funding and co-authorship`,accent:`#D4891E`,accentRgb:`212,137,30`}],a={fontFamily:`var(--font-sans)`},s={...a,fontWeight:300,fontSize:`0.68rem`,letterSpacing:`0.12em`,opacity:.35,marginRight:`1.25rem`,minWidth:`2rem`};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .fa2-root {
          font-family: var(--font-sans);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* ── Sponsor band (ViSolve) ──
         * Opens the section, above the "Services" heading. Deliberately
         * quiet: a hairline-ruled strip rather than a card, so it reads as an
         * acknowledgement and never competes with the research content below.
         *
         * Spacing is symmetrical by construction. The section wrapper already
         * contributes its own generous padding above, so this band cancels it
         * with a negative top margin and then sets its OWN equal padding on
         * both sides — the optical gap above the logo and below the text (to
         * the rule) are the same value, --fa2-sponsor-pad, at every width.
         */
        .fa2-sponsor {
          --fa2-sponsor-pad: clamp(2.25rem, 4vw, 3.25rem);

          /* Pull up out of the wrapper's padding so the top gap is ours to
             set, not the wrapper's much larger one (measured 115px vs 49px
             before this — visibly lopsided). */
          margin-top: calc(var(--fa2-sponsor-pad) - clamp(4rem, 8vw, 8rem));
          margin-bottom: clamp(3rem, 6vw, 5rem);

          /* The two values that must match. */
          padding-top: var(--fa2-sponsor-pad);
          padding-bottom: var(--fa2-sponsor-pad);
        }

        /* Logo + text row. Lives on an inner wrapper so the AI-services grid
           below can span the band's full width instead of squeezing into the
           text column. */
        .fa2-sponsor-main {
          display: flex;
          align-items: center;
          gap: clamp(1.5rem, 3.5vw, 3rem);
        }

        /* ── ViSolve AI services ──
           Titles, taglines and items are ViSolve's own, from visolve.com.
           An editorial index rather than cards: four hairline-ruled rows in
           the same rhythm as the sponsor band and the Services accordion,
           with no boxes, tiles or chips. Each area's colour appears only in
           small touches — the index dot, the item dashes, and on hover. */
        .fa2-ai {
          margin-top: clamp(2.25rem, 4vw, 3.25rem);
        }
        .fa2-ai-headline {
          font-family: var(--font-sans);
          font-size: clamp(1.4rem, 2.4vw, 2rem);
          font-weight: 300;
          letter-spacing: -0.025em;
          line-height: 1.2;
          color: #0a0a0a;
          margin: 0 0 clamp(1.75rem, 3.2vw, 2.75rem);
          max-width: 34ch;
          text-wrap: balance;
        }
        .fa2-ai-headline strong { font-weight: 500; }

        .fa2-ai-headline .fa2-ai-kw-blue { color: #3A82C4; }
        .fa2-ai-headline .fa2-ai-kw-red { color: #c0392b; }
        .fa2-ai-headline .fa2-ai-kw-green { color: #2aaa72; }

        .fa2-ai-index { list-style: none; margin: 0; padding: 0; border-top: 1px solid rgba(10, 10, 10, 0.08); }
        .fa2-ai-row {
          --ai-accent-2: color-mix(in srgb, var(--ai-accent) 55%, #fff);
          position: relative;
          display: grid;
          grid-template-columns: 5.5rem minmax(0, 0.8fr) minmax(0, 0.95fr) minmax(0, 1.45fr);
          align-items: baseline;
          column-gap: clamp(1.25rem, 2.6vw, 2.75rem);
          padding: clamp(1.6rem, 2.8vw, 2.25rem) clamp(0.75rem, 1.4vw, 1.25rem);
          /* Soft colour sweep on hover: a wash that grows from the left edge.
             It is a gradient on the row itself — no box, border or radius. */
          background-image: linear-gradient(90deg, rgba(var(--ai-accent-rgb), 0.07), rgba(var(--ai-accent-rgb), 0) 70%);
          background-repeat: no-repeat;
          background-size: 0% 100%;
          transition: background-size 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fa2-ai-row:hover { background-size: 100% 100%; }
        /* The row's rule, in its own colour: strong at the left, fading to
           the neutral hairline. */
        .fa2-ai-row::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, rgba(var(--ai-accent-rgb), 0.6), rgba(var(--ai-accent-rgb), 0.15) 35%, rgba(10, 10, 10, 0.07) 70%);
        }
        /* On hover the full accent line draws across. */
        .fa2-ai-row::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: var(--ai-accent);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fa2-ai-row:hover::after { transform: scaleX(1); }
        /* The list ends in open space: no rule under the last row. */
        .fa2-ai-row:last-child::before,
        .fa2-ai-row:last-child::after { display: none; }

        .fa2-ai-num {
          font-family: var(--font-sans);
          font-size: clamp(2.1rem, 3.2vw, 3rem);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.04em;
          font-variant-numeric: tabular-nums;
          background: linear-gradient(145deg, var(--ai-accent-2), var(--ai-accent));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .fa2-ai-title {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          margin: 0;
          font-family: var(--font-sans);
          font-size: clamp(1.35rem, 2.1vw, 1.9rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: #0a0a0a;
          transition: color 0.3s ease;
        }
        .fa2-ai-title svg {
          flex: none;
          color: var(--ai-accent);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fa2-ai-row:hover .fa2-ai-title { color: var(--ai-accent); }
        .fa2-ai-row:hover .fa2-ai-title svg { transform: rotate(-8deg) scale(1.08); }
        .fa2-ai-desc {
          margin: 0;
          font-family: var(--font-sans);
          font-size: var(--fs-sm);
          font-weight: 300;
          line-height: 1.65;
          color: #6e6e76;
          max-width: 40ch;
          text-wrap: pretty;
        }
        .fa2-ai-items {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.6rem 1.5rem;
        }
        .fa2-ai-items li {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          font-family: var(--font-sans);
          font-size: var(--fs-sm);
          font-weight: 400;
          line-height: 1.45;
          color: #3d3d45;
          transition: color 0.3s ease;
        }
        .fa2-ai-items li::before {
          content: '';
          flex: none;
          width: 12px;
          height: 2px;
          border-radius: 1px;
          background: linear-gradient(90deg, var(--ai-accent), var(--ai-accent-2));
          transform: translateY(-0.28em);
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .fa2-ai-row:hover .fa2-ai-items li::before { width: 18px; }
        .fa2-ai-items li:hover { color: var(--ai-accent); }
        @media (max-width: 1100px) {
          .fa2-ai-row {
            grid-template-columns: 4rem minmax(0, 1fr);
            row-gap: 0.75rem;
          }
          .fa2-ai-desc, .fa2-ai-items { grid-column: 2; }
          .fa2-ai-items { margin-top: 0.35rem; }
        }
        @media (max-width: 560px) {
          .fa2-ai-row { grid-template-columns: minmax(0, 1fr); padding-inline: 0.25rem; }
          .fa2-ai-desc, .fa2-ai-items { grid-column: 1; }
          .fa2-ai-items { grid-template-columns: minmax(0, 1fr); }
        }

        /* The logo sits directly on the section — no plate, no frame. The
           asset's own rounded corners are its only edge treatment. */
        .fa2-sponsor-logo-link {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
          border-radius: 10px;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 0.35s ease;
        }

        .fa2-sponsor-logo-link:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }

        .fa2-sponsor-logo-link:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 4px;
        }

        /* width+height on the <img> match the asset's intrinsic 201x110, so the
           plate holds its size from first paint, before the file arrives. */
        .fa2-sponsor-logo {
          display: block;
          width: clamp(116px, 12.5vw, 156px);
          height: auto;
        }

        /* Eyebrow. The rule after the words is what separates this from the
           other all-caps labels in the section and stops the short line from
           floating unanchored above the paragraph. */
        .fa2-sponsor-label {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          letter-spacing: 0.2em;
          font-size: 0.65rem;
          text-transform: uppercase;
          color: #8a8a92;
          font-weight: 400;
          margin: 0 0 0.9rem 0;
        }

        .fa2-sponsor-label::after {
          content: '';
          flex: 0 0 auto;
          width: clamp(1.5rem, 4vw, 2.75rem);
          height: 1px;
          background: rgba(10, 10, 10, 0.12);
        }

        /* Measure capped in ch so the paragraph breaks into even lines rather
           than running the full 1600px container width on a wide screen. */
        .fa2-sponsor-text {
          font-size: clamp(0.9rem, 1.05vw, 1rem);
          line-height: 1.75;
          color: #3d3d45;
          font-weight: 300;
          margin: 0;
          max-width: 68ch;
          text-wrap: pretty;
        }

        /* The company name, and SHRI-AI, lifted out of the grey run of text —
           the two proper nouns the sentence exists to connect. */
        .fa2-sponsor-name {
          color: #0a0a0a;
          font-weight: 500;
        }

        /* ViSolve as a link. Matches .fa2-sponsor-name's weight and colour so
           the pair still reads as one set, with an underline that firms up on
           hover rather than a colour change — the orange logo is already the
           band's only strong colour and a blue link would fight it. */
        .fa2-sponsor-link {
          color: #0a0a0a;
          font-weight: 500;
          text-decoration: underline;
          text-decoration-color: rgba(10, 10, 10, 0.28);
          text-underline-offset: 3px;
          text-decoration-thickness: 1px;
          transition: text-decoration-color 0.25s ease;
        }

        .fa2-sponsor-link:hover {
          text-decoration-color: rgba(10, 10, 10, 0.75);
        }

        .fa2-sponsor-link:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 2px;
          border-radius: 2px;
        }

        /* Dedicated portfolio button. Outline rather than solid — this band
           sits on the page's own light background (not a dark CTA block like
           .fa2-btn-primary below), so the same sharp, no-radius shape is kept
           but inverted: transparent fill, dark ink border, filling solid on
           hover. A clear, separate action from the inline "ViSolve" link
           above it, not a restatement of it. */
        .fa2-sponsor-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: clamp(1.25rem, 2.5vw, 1.75rem);
          padding: 0.75rem 1.5rem;
          min-height: 44px;
          background: transparent;
          color: #0a0a0a;
          font-weight: 500;
          font-size: 0.8rem;
          letter-spacing: 0.01em;
          font-family: var(--font-sans);
          border: 1px solid rgba(10, 10, 10, 0.22);
          text-decoration: none;
          cursor: pointer;
        }

        .fa2-sponsor-btn svg {
          transition: transform 0.25s ease;
        }

        .fa2-sponsor-btn:hover svg {
          transform: translateX(3px);
        }

        .fa2-sponsor-btn:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 2px;
        }

        @media (max-width: 640px) {
          .fa2-sponsor-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fa2-sponsor-logo-link { transition: none; }
          .fa2-sponsor-logo-link:hover { transform: none; }
          .fa2-ai-row, .fa2-ai-row::after, .fa2-ai-title, .fa2-ai-title svg,
          .fa2-ai-items li, .fa2-ai-items li::before { transition: none; }
          .fa2-ai-row:hover .fa2-ai-title svg { transform: none; }
        }

        .fa2-hero-title {
          font-family: var(--font-sans);
          font-weight: 300;
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin: 0;
        }

        .fa2-hero-em {
          font-style: italic;
          letter-spacing: -0.01em;
        }

        .fa2-shimmer {
          background: linear-gradient(
            110deg,
            #7B6FCD 0%, #a58de8 18%, #3A82C4 36%,
            #2aaa72 52%, #D4891E 70%, #e05a8a 85%, #7B6FCD 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fa2-shimmer-anim 8s linear infinite;
        }

        @keyframes fa2-shimmer-anim {
          from { background-position: 0% center; }
          to   { background-position: 250% center; }
        }

        /* ── accordion shell ── */
        .fa2-accordion {
          border: 1px solid rgba(0,0,0,0.08);
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 20px 60px rgba(0,0,0,0.04);
        }

        .fa2-accordion-item {
          border-bottom: 1px solid rgba(0,0,0,0.07);
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease;
        }
        .fa2-accordion-item:last-child { border-bottom: none; }

        .fa2-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          outline: none;
          position: relative;
          padding: clamp(1.2rem, 2.5vw, 1.75rem) clamp(1.25rem, 3vw, 2.5rem);
        }
        .fa2-accordion-btn:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: -2px;
        }

        /* ── collab grid ── */
        .fa2-collab-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(0,0,0,0.07);
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .fa2-collab-card {
          padding: 2.2rem 2rem;
          border-right: 1px solid rgba(0,0,0,0.07);
          background: #fff;
          transition: background-color 0.2s ease;
        }
        .fa2-collab-card:last-child { border-right: none; }

        /* ── CTA ── */
        .fa2-cta-block {
          background: #0a0a0a;
          padding: clamp(2.5rem, 5vw, 5rem) clamp(1.75rem, 5vw, 4rem);
        }
        .fa2-cta-inner {
          display: block;
        }
        /* Lede sentence and its CTA side by side, baseline-independent so the
           button stays vertically centred against however many lines wrap. */
        .fa2-cta-lede {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: clamp(1.25rem, 3vw, 2.5rem);
          margin-top: clamp(1rem, 2vw, 1.5rem);
        }
        .fa2-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          padding: 0.9rem clamp(1rem, 3vw, 2rem);
          min-height: 44px;
          background: #fff;
          color: #0a0a0a;
          font-weight: 500;
          font-size: 0.875rem;
          letter-spacing: 0.01em;
          border: none;
          cursor: pointer;
          text-decoration: none;
          font-family: var(--font-sans);
        }

        /* ── collaborating organisation ──
         * Two independent blocks on one row: a plain photo card and a dark
         * glass text panel. The row itself is a bare grid with no surface of
         * its own, so neither block sits "inside" the other. Both are
         * stretch-aligned, so their tops and bottoms line up exactly at any
         * height, and the row spans the same width as the CTA block above it.
         */
        .fa2-org {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1fr);
          gap: clamp(0.9rem, 1.8vw, 1.6rem);
          align-items: stretch;
          margin-top: clamp(2.25rem, 4vw, 3.5rem);
        }

        /* Photo card: fills its column edge to edge and matches the panel's
           height via object-fit, so no aspect-ratio guess is needed. */
        .fa2-org-visual {
          position: relative;
          margin: 0;
          overflow: hidden;
          background: #12121a;
          border: 1px solid rgba(20, 20, 30, 0.1);
          /* sets the row's floor when the panel copy is short */
          min-height: clamp(190px, 20vw, 300px);
        }
        .fa2-org-visual img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 45%;
          display: block;
        }

        /* Dark glass text panel — carries the surface that used to live on the
           row, since the row is now just a layout grid. */
        .fa2-org-panel {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background:
            linear-gradient(135deg, rgba(28, 28, 40, 0.94) 0%, rgba(12, 12, 18, 0.97) 100%);
          backdrop-filter: blur(22px) saturate(130%);
          -webkit-backdrop-filter: blur(22px) saturate(130%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-top-color: rgba(255, 255, 255, 0.16);
          box-shadow:
            0 1px 0 rgba(255, 255, 255, 0.06) inset,
            0 24px 60px rgba(10, 10, 16, 0.22);
          padding: clamp(1.5rem, 2.6vw, 2.25rem) clamp(1.5rem, 2.8vw, 2.4rem);
        }
        .fa2-org-eyebrow {
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          font-weight: 400;
          margin: 0 0 0.55rem;
        }
        .fa2-org-name {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: clamp(1.05rem, 1.7vw, 1.3rem);
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0 0 0.7rem;
        }
        .fa2-org-vision {
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: 300;
          font-size: clamp(0.82rem, 1.1vw, 0.92rem);
          line-height: 1.6;
          color: rgba(255,255,255,0.62);
          margin: 0 0 0.55rem;
          max-width: 52ch;
        }
        .fa2-org-mission {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(0.76rem, 0.95vw, 0.83rem);
          line-height: 1.65;
          color: rgba(255,255,255,0.38);
          margin: 0;
          max-width: 60ch;
        }

        /* ── misc ── */
        .fa2-divider {
          width: 100%;
          height: 1px;
          background: rgba(0,0,0,0.07);
        }
        .fa2-focus-grid {
          display: grid;
          grid-template-columns: clamp(200px, 28%, 320px) 1fr;
          gap: clamp(3rem, 5vw, 7rem);
          align-items: start;
        }
        .fa2-sticky-left { position: sticky; top: 6rem; }

        /* ── responsive ── */
        @media (max-width: 768px) {
          .fa2-focus-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .fa2-sticky-left { position: static; }
          .fa2-cta-lede    { flex-direction: column; align-items: flex-start; }
          /* Stacked: photo card on top, text panel below, both full width so
             their left and right edges stay aligned with each other. */
          .fa2-org {
            grid-template-columns: 1fr;
            gap: clamp(0.85rem, 2.5vw, 1.25rem);
          }
          .fa2-org-visual {
            min-height: 0;
            aspect-ratio: 16 / 9;
          }
          .fa2-collab-grid { grid-template-columns: repeat(2, 1fr); }
          .fa2-collab-card:nth-child(odd)  { border-right: 1px solid rgba(0,0,0,0.07); }
          .fa2-collab-card:nth-child(even) { border-right: none; }
          .fa2-collab-card:nth-child(1),
          .fa2-collab-card:nth-child(2)    { border-bottom: 1px solid rgba(0,0,0,0.07); }
        }
        @media (max-width: 480px) {
          .fa2-collab-grid { grid-template-columns: 1fr; }
          /* ~176px of fixed chrome (counter + icon + plus) left only ~80px for
             the title at 320px; none of it used to shrink. */
          .fa2-accordion-btn { padding: 1.1rem 0.9rem; }
          .fa2-btn-primary { width: 100%; }
          .fa2-collab-card { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.07); }
          .fa2-collab-card:last-child { border-bottom: none; }
        }
      `}),(0,U.jsx)(`section`,{className:`fa2-root relative w-full`,style:{background:`#f8f7f5`,minHeight:`100vh`},children:(0,U.jsxs)(`div`,{style:{maxWidth:`1600px`,margin:`0 auto`,padding:`clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 4rem)`,position:`relative`,zIndex:1},children:[(0,U.jsxs)(o.div,{className:`fa2-sponsor`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.08},transition:{duration:.7,ease:[.22,1,.36,1]},children:[(0,U.jsxs)(`div`,{className:`fa2-sponsor-main`,children:[(0,U.jsx)(`a`,{href:`https://visolve.com/portfolio/`,target:`_blank`,rel:`noopener noreferrer`,className:`fa2-sponsor-logo-link`,"aria-label":`ViSolve portfolio (opens in a new tab)`,children:(0,U.jsx)(`img`,{src:`/images/services/visolve-logo.webp`,alt:`ViSolve`,className:`fa2-sponsor-logo`,width:`201`,height:`110`,loading:`lazy`,decoding:`async`})}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{style:a,className:`fa2-sponsor-label`,children:`Sponsored by`}),(0,U.jsxs)(`p`,{style:a,className:`fa2-sponsor-text`,children:[`Founded in 1995 and headquartered in San Jose, California,`,` `,(0,U.jsx)(`a`,{href:`https://visolve.com/portfolio/`,target:`_blank`,rel:`noopener noreferrer`,className:`fa2-sponsor-link`,children:`ViSolve`}),` `,`is a product development, software services, and consulting firm focused on Healthcare IT and Enterprise IT using open source and leading-edge technologies. ViSolve sponsors`,` `,(0,U.jsx)(`span`,{className:`fa2-sponsor-name`,children:`SHRI-AI`}),`, supporting the research and engineering behind our work in precision oncology, stroke imaging, and AI for healthcare.`]}),(0,U.jsxs)(o.a,{href:`https://visolve.com/portfolio/`,target:`_blank`,rel:`noopener noreferrer`,className:`fa2-sponsor-btn`,whileHover:{backgroundColor:`#0a0a0a`,color:`#fff`},whileTap:{scale:.98},transition:{duration:.18},children:[`View ViSolve’s Portfolio`,(0,U.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,U.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})})]})]})]}),(0,U.jsxs)(`div`,{className:`fa2-ai`,children:[(0,U.jsx)(`p`,{style:a,className:`fa2-sponsor-label`,children:`ViSolve AI Services`}),(0,U.jsxs)(`p`,{className:`fa2-ai-headline`,children:[`AI engineered for `,(0,U.jsx)(`strong`,{className:`fa2-ai-kw-blue`,children:`healthcare`}),`,`,` `,(0,U.jsx)(`strong`,{className:`fa2-ai-kw-red`,children:`precision oncology`}),` and`,` `,(0,U.jsx)(`strong`,{className:`fa2-ai-kw-green`,children:`genomics`}),`.`]}),(0,U.jsx)(`ol`,{className:`fa2-ai-index`,children:Ue.map(({Icon:e,title:t,desc:n,items:r,accent:i,accentRgb:a},s)=>(0,U.jsxs)(o.li,{className:`fa2-ai-row`,style:{"--ai-accent":i,"--ai-accent-rgb":a},initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{delay:s*.06,duration:.6,ease:[.22,1,.36,1]},children:[(0,U.jsx)(`span`,{className:`fa2-ai-num`,"aria-hidden":`true`,children:String(s+1).padStart(2,`0`)}),(0,U.jsxs)(`h3`,{className:`fa2-ai-title`,children:[(0,U.jsx)(e,{size:22,strokeWidth:1.5,"aria-hidden":`true`}),t]}),(0,U.jsx)(`p`,{className:`fa2-ai-desc`,children:n}),(0,U.jsx)(`ul`,{className:`fa2-ai-items`,children:r.map(e=>(0,U.jsx)(`li`,{children:e},e))})]},t))})]})]}),(0,U.jsxs)(`div`,{className:`fa2-focus-grid`,children:[(0,U.jsxs)(o.div,{className:`fa2-sticky-left`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},children:[(0,U.jsx)(`p`,{style:{...a,fontWeight:300,letterSpacing:`0.18em`,fontSize:`0.68rem`,textTransform:`uppercase`,color:`#999`,marginBottom:`2rem`},children:`Services`}),(0,U.jsxs)(`h2`,{className:`fa2-hero-title`,style:{fontSize:`clamp(2.6rem, 4.5vw, 4.2rem)`,color:`#0a0a0a`,marginBottom:`2rem`},children:[`Where`,` `,(0,U.jsx)(`span`,{className:`fa2-hero-em fa2-shimmer`,children:`science`}),(0,U.jsx)(`br`,{}),`meets`,` `,(0,U.jsx)(`span`,{className:`fa2-hero-em fa2-shimmer`,children:`impact`})]}),(0,U.jsx)(`div`,{style:{width:`2rem`,height:`1px`,background:`#0a0a0a`,marginBottom:`1.5rem`}})]}),(0,U.jsx)(o.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,delay:.15,ease:[.22,1,.36,1]},children:(0,U.jsx)(`div`,{className:`fa2-accordion`,children:n.map((n,r)=>{let c=e===r;return(0,U.jsxs)(`div`,{className:`fa2-accordion-item`,style:{background:c?`#fff`:`#fdfdfd`},children:[(0,U.jsx)(o.div,{initial:{scaleY:0,opacity:0},animate:{scaleY:+!!c,opacity:+!!c},transition:{duration:.4,ease:[.16,1,.3,1]},style:{position:`absolute`,left:0,top:0,bottom:0,width:2,background:n.accent,transformOrigin:`top`,zIndex:2}}),(0,U.jsxs)(`button`,{type:`button`,className:`fa2-accordion-btn`,onClick:()=>t(c?null:r),children:[(0,U.jsx)(`span`,{style:s,children:n.number}),(0,U.jsx)(o.span,{animate:{color:c?n.accent:`#bbb`},transition:{duration:.25},style:{display:`flex`,alignItems:`center`,marginRight:`1.25rem`,flexShrink:0},children:n.icon}),(0,U.jsxs)(`span`,{style:{flex:1,minWidth:0},children:[(0,U.jsx)(`span`,{style:{...a,display:`block`,fontSize:`clamp(0.875rem, 1.5vw, 1rem)`,fontWeight:500,color:c?`#0a0a0a`:`#444`,letterSpacing:`-0.01em`,transition:`color 0.2s ease`,lineHeight:1.3},children:n.title}),(0,U.jsx)(`span`,{style:{...a,display:`block`,fontSize:`0.68rem`,color:`#bbb`,fontWeight:300,letterSpacing:`0.1em`,marginTop:`0.25rem`,textTransform:`uppercase`},children:n.subtitle})]}),(0,U.jsx)(o.span,{animate:{rotate:c?45:0},transition:{duration:.35,ease:[.16,1,.3,1]},style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:28,height:28,flexShrink:0,marginLeft:`1rem`,color:c?n.accent:`#ccc`,transition:`color 0.2s ease`},children:(0,U.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,children:(0,U.jsx)(`path`,{d:`M12 5v14M5 12h14`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})})})]}),(0,U.jsx)(i,{initial:!1,children:c&&(0,U.jsx)(o.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{height:{duration:.5,ease:[.16,1,.3,1]},opacity:{duration:.3}},style:{overflow:`hidden`},children:(0,U.jsxs)(`div`,{style:{paddingLeft:`clamp(1.25rem, 3vw, 2.5rem)`,paddingRight:`clamp(1.25rem, 3vw, 2.5rem)`,paddingBottom:`clamp(1.5rem, 3vw, 2.25rem)`},children:[(0,U.jsx)(`p`,{style:{...a,fontSize:`0.875rem`,color:`#666`,lineHeight:1.7,fontWeight:300,marginBottom:`1.25rem`,maxWidth:`58ch`},children:n.description}),(0,U.jsx)(`div`,{style:{borderTop:`1px solid rgba(0,0,0,0.05)`},children:n.features.map((e,t)=>(0,U.jsxs)(o.div,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{delay:t*.07+.1,duration:.4},style:{display:`flex`,alignItems:`flex-start`,gap:`1rem`,padding:`0.9rem 0`,borderBottom:t<n.features.length-1?`1px solid rgba(0,0,0,0.05)`:`none`,...a,fontSize:`0.875rem`,color:`#555`,fontWeight:400,lineHeight:1.55},children:[(0,U.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0,marginTop:`0.18rem`},children:[(0,U.jsx)(`path`,{d:`M9 12l2 2 4-4`,stroke:n.accent,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,U.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:n.accent,strokeWidth:`1.5`,opacity:`0.3`})]}),e]},e))})]})},`content`)})]},n.title)})})})]}),(0,U.jsx)(`div`,{className:`fa2-divider`,style:{margin:`clamp(4rem, 8vw, 7rem) 0`}}),(0,U.jsxs)(o.div,{id:`partnership`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},style:{marginBottom:`clamp(3rem, 5vw, 5rem)`},children:[(0,U.jsxs)(`h2`,{className:`fa2-hero-title`,style:{fontSize:`clamp(2rem, 4vw, 3.5rem)`,color:`#0a0a0a`,marginBottom:`1rem`},children:[`Collaborating`,` `,(0,U.jsx)(`span`,{className:`fa2-hero-em fa2-shimmer`,children:`Opportunities`})]}),(0,U.jsx)(`p`,{style:{...a,fontSize:`0.875rem`,color:`#888`,fontWeight:300,maxWidth:`50ch`,lineHeight:1.7},children:`Accelerating healthcare innovation through diverse global collaborations.`})]}),(0,U.jsxs)(o.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,delay:.1,ease:[.22,1,.36,1]},style:{marginBottom:`clamp(3rem, 5vw, 5rem)`},children:[(0,U.jsx)(`p`,{style:{...a,fontSize:`0.68rem`,letterSpacing:`0.2em`,textTransform:`uppercase`,color:`#bbb`,fontWeight:300,marginBottom:`1.25rem`},children:`Areas of Collaboration`}),(0,U.jsx)(`div`,{className:`fa2-collab-grid`,children:r.map((e,t)=>(0,U.jsxs)(o.div,{className:`fa2-collab-card`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},whileHover:{backgroundColor:`rgba(${e.accentRgb}, 0.03)`},transition:{delay:t*.08,duration:.6,ease:[.22,1,.36,1]},children:[(0,U.jsx)(`div`,{style:{width:28,height:2,background:e.accent,marginBottom:`1.5rem`,borderRadius:1}}),(0,U.jsx)(`h4`,{style:{...a,fontSize:`0.95rem`,fontWeight:500,color:`#0a0a0a`,letterSpacing:`-0.01em`,marginBottom:`0.5rem`,marginTop:0},children:e.title}),(0,U.jsx)(`p`,{style:{...a,fontSize:`0.8rem`,color:`#999`,fontWeight:300,lineHeight:1.6,margin:0},children:e.desc})]},e.title))})]}),(0,U.jsx)(o.div,{className:`fa2-cta-block`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},children:(0,U.jsxs)(`div`,{className:`fa2-cta-inner`,children:[(0,U.jsx)(`p`,{style:{...a,fontSize:`0.65rem`,letterSpacing:`0.22em`,textTransform:`uppercase`,color:`rgba(255,255,255,0.28)`,fontWeight:300,marginBottom:`1rem`,marginTop:0},children:`Support Our Mission`}),(0,U.jsxs)(`h3`,{className:`fa2-hero-title`,style:{fontSize:`clamp(1.6rem, 3vw, 2.8rem)`,color:`#fff`,marginBottom:`0.75rem`},children:[`Drive breakthroughs in`,` `,(0,U.jsx)(`span`,{className:`fa2-hero-em`,style:{color:`rgba(255,255,255,0.45)`},children:`precision healthcare`})]}),(0,U.jsxs)(`div`,{className:`fa2-cta-lede`,children:[(0,U.jsx)(`p`,{style:{...a,fontSize:`0.85rem`,color:`rgba(255,255,255,0.38)`,fontWeight:300,lineHeight:1.7,maxWidth:`55ch`,margin:0},children:`As a nonprofit, SHRI-AI relies on strategic partnerships and philanthropic contributions.`}),(0,U.jsxs)(o.a,{href:`#contact`,onClick:e=>{e.preventDefault(),H(`contact`),window.dispatchEvent(new CustomEvent(`open-contact-form`))},className:`fa2-btn-primary`,whileHover:{backgroundColor:`#f0f0f0`,y:-2},whileTap:{scale:.99},transition:{duration:.18},children:[`Become a collaborator`,(0,U.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,U.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})})]})]})]})}),(0,U.jsxs)(o.div,{className:`fa2-org`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},children:[(0,U.jsx)(`figure`,{className:`fa2-org-visual`,children:(0,U.jsx)(`img`,{src:`/images/services/indostateshealth.webp`,alt:`The Indo States Health hospital campus`,width:1200,height:642,loading:`lazy`,decoding:`async`})}),(0,U.jsxs)(`div`,{className:`fa2-org-panel`,children:[(0,U.jsx)(`p`,{className:`fa2-org-eyebrow`,children:`Collaborating Organization`}),(0,U.jsx)(`h4`,{className:`fa2-org-name`,children:`Indo States Health`}),(0,U.jsx)(`p`,{className:`fa2-org-vision`,children:`“Every human being gets state-of-the-art medical treatment regardless of their background.”`}),(0,U.jsx)(`p`,{className:`fa2-org-mission`,children:`Advancing equitable healthcare by making state-of-the-art medical treatment accessible to every individual, regardless of background.`})]})]})]})})]})},Ge=[{id:`sena`,initials:`SP`,name:`Sena Palanisami`,role:`Founder & Technology Leader`,bio:`Open-source healthcare technology · Ex-Chairman of OpenEMR`,image:`/images/team/Sena-Palanisami.webp`,cardSummary:`Open-source healthcare technology and AI.`,objectPosition:`50% 22%`,accent:`#7B6FCD`,accentSoft:`rgba(123, 111, 205, 0.12)`,summary:`Technology entrepreneur and healthcare technology leader with more than four decades of experience across software, open-source technology, and healthcare IT.`,quote:`Technology should make healthcare more accessible — not more complicated or more expensive.`,sections:[{heading:`Open Source in Healthcare`,paragraphs:[`As former Chairman of OpenEMR, one of the world's leading open-source Electronic Medical Record platforms, Sena helped advance the goal of making healthcare technology more accessible, affordable, and interoperable.`,`That work shaped a conviction that healthcare innovation should not be limited by proprietary technology or geography: open source can put high-quality clinical software in the hands of organisations and communities that would otherwise have no route to it.`]},{heading:`AI for Precision Medicine`,paragraphs:[`Sena now applies the same philosophy through SHRI-AI, developing and supporting open-source AI for cancer detection, precision oncology, genomic medicine, stroke care, and preventive health.`,`SHRI-AI combines AI, medical imaging, genomics, and clinical data to build solutions meant for real deployment in partnership with hospitals, laboratories, researchers, and clinicians.`]},{heading:`Current Focus`,list:[`NGS and liquid biopsy data with AI, for earlier cancer detection, disease monitoring, and personalised treatment strategies`,`Stroke-AI — applying AI to medical imaging for early detection, risk assessment, and clinical decision support`,`Genomic medicine and preventive healthcare`,`Open-source tooling that hospitals and labs can adopt directly`]},{heading:`Vision`,paragraphs:[`His long-term aim is an open healthcare technology ecosystem in which advanced AI and precision medicine reach not only major medical centres, but hospitals, laboratories, and communities in underserved regions.`]},{heading:`Earlier Career & Education`,paragraphs:[`Sena founded the ViSolve US operation in 1998 and became its Chairman and CEO in 2001, growing it into a 50+ member organisation. Before that he spent nearly 20 years at Hewlett-Packard, moving from software engineering into leadership across development, operations, product planning, and business development, and helping establish international software operations in Australia and India.`,`He holds a Master's degree in Mathematics and a Master's degree in Computer Science from the University of Minnesota, Minneapolis.`]}]},{id:`manoj`,initials:`MM`,name:`Manoj Mittal`,role:`Group Vice President, FP&A — Gartner`,bio:`Finance leader specializing in FP&A, M&A, and corporate growth strategy.`,image:`/images/team/manoj.webp`,cardSummary:`Group Vice President, FP&A at Gartner.`,objectPosition:`50% 30%`,accent:`#D4891E`,accentSoft:`rgba(212, 137, 30, 0.12)`,summary:`Senior business and technology executive based in Palo Alto, California, with extensive experience in strategy, corporate development, financial planning, executive communication, deal structures, and strategic negotiations.`,sections:[{heading:`Professional Overview`,paragraphs:[`He has held senior leadership positions at Gartner, along with earlier experience at HP and Troba.`]},{heading:`Professional Experience`,paragraphs:[`Manoj has been with Gartner in senior leadership roles for more than two decades:`],list:[`Group Vice President, FP&A — 2017–Present`,`Managing Vice President, Strategy & Corporate Development — 2007–2017`,`Director, Strategy & Corporate Development — 2001–2007`],footer:`His career combines strategic planning, corporate development, financial leadership, and executive-level decision-making.`},{heading:`Education`,list:[`MBA in Finance, General — Harvard Business School`,`MS in Computer Science — University of Wisconsin`,`B.Tech in Mechanical Engineering — Indian Institute of Technology, Delhi`]},{heading:`Core Expertise`,list:[`Strategy`,`Corporate Development`,`Executive-Level Communication`,`Strategic Negotiations`,`Deal Structures`,`Financial Planning & Analysis`]}]},{id:`rajesh`,initials:`RR`,name:`Dr. Rajesh Rangaswamy`,role:`MD, DABR, CAQ(NR), CAST(EVN)`,bio:`MD, DABR, CAQ(NR), CAST(EVN)`,image:`/images/team/Rajesh-Rangaswamy.webp`,cardSummary:`Founder of Indostates Health · Neuroradiology.`,objectPosition:`50% 20%`,accent:`#3A82C4`,accentSoft:`rgba(58, 130, 196, 0.12)`,tag:`Founder of Indostates Health`,summary:`Clinical expertise spans NeuroIntervention, Neuroradiology, and Vascular & Interventional Radiology, with extensive experience across clinical practice, academic medicine, teaching, and specialized interventional care.`,sections:[{heading:`Medical Education & Training`,list:[`Medical School: Coimbatore Medical College, Tamil Nadu, India`,`Internship: Coimbatore Medical College Hospital, Tamil Nadu, India`,`Residency: Gujarat Cancer & Research Institute, B.J. Medical College, India`,`Fellowship in Neuroradiology: Rush University Medical Center, Chicago, USA`,`Fellowship in Vascular & Interventional Radiology — Body and Neuro-Intervention: University of Florida & Shands, Jacksonville, USA`]},{heading:`Academic & Clinical Appointments`,list:[`Director, Neuro-Interventional Service — Renown Regional Medical Center`,`Associate Clinical Professor — University of Nevada School of Medicine, Reno`,`Adjunct Assistant Professor — Texas A&M University, Texas`,`Assistant Professor of Radiology — Texas A&M University, 2008–2010`,`Clinical Assistant Professor of Radiology — University of Florida, Jacksonville, 2005–2008`]},{heading:`Honors & Recognition`,list:[`Outstanding Teacher, 2008–2009 — Department of Radiology, Scott & White Clinic, Texas A&M University, Temple, Texas`,`Teacher of the Year, 2007–2008 — Department of Radiology, University of Florida & Shands, Jacksonville`]},{heading:`Board Certifications & Professional Memberships`,list:[`Gujarat University — Radiology`,`American Board of Radiology — Diagnostic Radiology`,`American Board of Radiology — Certificate of Added Qualification in Neuroradiology`,`American Board of Vascular Medicine — Endovascular Diplomat`,`Society of Neuro-Interventional Surgery — Senior Member`,`American Society of Neuroradiology — Senior Member`,`American Medical Association`]}]},{id:`balasubramaniam`,initials:`BA`,name:`Dr. Balasubramaniam A V`,role:`MBBS, MD (PGI, Chandigarh), DNB, FRCR (UK)`,bio:`MBBS, MD (PGI, Chandigarh), DNB, FRCR (UK)`,image:`/images/team/Balasubramaniam-AV.webp`,cardSummary:`Diagnostic Radiology and stroke imaging AI.`,objectPosition:`44% 6%`,accent:`#2aaa72`,accentSoft:`rgba(42, 170, 114, 0.12)`,summary:`Diagnostic Radiologist with more than 15 years of experience interpreting a broad range of medical imaging subspecialities, and a strong interest in integrating AI and machine learning into diagnostic radiology.`,sections:[{heading:`Clinical Focus`,paragraphs:[`Dr. Balasubramaniam applies clinical and imaging expertise to support the development, validation, and refinement of AI-driven solutions for medical imaging.`,`His work includes stroke imaging protocols and imaging-based decision support, contributing to the assessment of findings relevant to acute ischemic stroke, intracranial hemorrhage, large-vessel occlusion, and treatment planning — with a particular interest in optimising imaging workflows for timely diagnosis in emergency neurological care.`]},{heading:`Artificial Intelligence Projects`,paragraphs:[`More than five years of experience across AI projects, collaborating with AI researchers, data scientists, software engineers, and healthcare technology teams to provide clinical and radiological expertise in the development, evaluation, and clinical application of AI-driven medical imaging solutions.`],list:[`Defining clinically relevant use cases`,`Reviewing imaging datasets, and supporting annotation and validation`,`Evaluating algorithm performance`,`Providing expert feedback to improve the clinical relevance and usability of AI products`]},{heading:`Medical Education & Training`,list:[`MBBS — Madras Medical College, Chennai`,`MD — PGIMER, Chandigarh`,`DNB — PGIMER, Chandigarh`,`FRCR — Royal College of Radiologists, UK`]},{heading:`Professional Experience`,list:[`Senior Resident — PGIMER, Chandigarh`,`Consultant Radiologist — Anderson Diagnostics and Labs, Chennai`,`Consultant Radiologist — Avitis Superspeciality Hospital, Palakkad, Kerala`,`Senior Consultant Radiologist — Gleneagles Hospital (Fortis Network), Chennai`]},{heading:`Professional Memberships`,list:[`Indian Medical Association`,`Indian Radiological and Imaging Association`,`Radiological Society of North America`,`Indian Academy of Cardiac Imaging`]}]},{id:`muruganand`,initials:`SM`,name:`Dr. S. K. Muruganand`,role:`MBBS, DMRD`,bio:`MBBS, DMRD`,image:`/images/team/SK-Muruganand.webp`,objectPosition:`50% 15%`,accent:`#1F8A8A`,accentSoft:`rgba(31, 138, 138, 0.12)`,tag:`Founder of The Scan Point`,cardSummary:`Founder of The Scan Point · Diagnostic Radiology.`,summary:`Diagnostic radiologist with three decades in radiology, and founder of The Scan Point, a diagnostic imaging centre offering X-ray, ultrasound, and CT services. His career spans academic radiology as faculty and independent practice building and running a full-service imaging centre.`,sections:[{heading:`Medical Education & Training`,paragraphs:[`Dr. Muruganand completed his MBBS (Bachelor of Medicine, Bachelor of Surgery) before going on to specialise in diagnostic imaging with a DMRD (Diploma in Medical Radio-Diagnosis).`],list:[`MBBS — PSG Medical College`,`DMRD — JJM Medical College, Davangere, Karnataka`]},{heading:`Professional Experience`,paragraphs:[`Dr. Muruganand began his career in academic radiology, working as an Assistant Professor at SRMC, Chennai, from 1996 to 1998.`,`In 1998, he moved from academic practice to independent practice, founding his own diagnostic imaging centre, The Scan Point — a step that shifted his focus from teaching radiology to building and running a diagnostic imaging service of his own.`]},{heading:`The Scan Point — Diagnostic Imaging Centre`,paragraphs:[`The Scan Point provides diagnostic imaging services built around X-ray, ultrasound, and CT technology.`,`Together, this equipment allows the centre to offer radiography, ultrasonography, and cross-sectional CT imaging under one roof, supporting a broad range of everyday diagnostic imaging needs.`],list:[`500mA X-ray unit`,`Three ultrasound machines`,`Multi-slice CT scanner`]}]},{id:`gowrishankar`,initials:`GP`,name:`Dr. Gowrishankar Palaniswamy`,role:`Internal Medicine Resident — MUSC Health`,bio:`Physician-researcher advancing AI-driven oncology diagnostics and equitable cancer care.`,image:`/images/team/Gowrishankar-Palaniswamy.webp`,objectPosition:`50% 15%`,accent:`#c0392b`,accentSoft:`rgba(192, 57, 43, 0.12)`,cardSummary:`Oncology AI Research & Healthcare Equity.`,summary:`Internal Medicine resident at MUSC Health Lancaster Medical Center and an emerging physician-researcher at the intersection of oncology, artificial intelligence, and healthcare equity. His research spans AI-assisted cancer detection, leukemia imaging, circulating tumour DNA (ctDNA) and minimal residual disease, and emerging cancer therapies, with presentations at ASH, SOHO, Rice University, and other major scientific forums, and multiple peer-reviewed publications. He also has direct experience providing healthcare to underserved rural communities in India. At SHRI-AI, he contributes clinical and research expertise to our precision oncology and equitable healthcare initiatives.`,sections:[{heading:`Medical Education & Training`,list:[`MBBS — Saveetha Medical College and Hospital, India`,`Internal Medicine Residency (PGY-2) — Medical University of South Carolina, MUSC Health Lancaster Medical Center`]},{heading:`Oncology & AI Research`,paragraphs:[`Dr. Palaniswamy's research applies artificial intelligence to some of oncology's hardest diagnostic problems — leukemia imaging, ctDNA for minimal residual disease, and emerging cancer therapies including CAR-T cell therapy.`],list:[`LIVE — an AI-powered virtual examiner for rapid, accurate diagnosis of acute lymphoblastic leukemia`,`RADIANT — a residual-network-assisted diagnostic and analytic tool for acute lymphoblastic leukemia`,`Deep learning models (EfficientNetB1, ResNet18) for leukemia diagnosis and prognosis through computer vision`,`ctDNA as a biomarker for minimal residual disease and relapse detection in diffuse large B-cell lymphoma`]},{heading:`Presentations & Publications`,paragraphs:[`He has presented at the American Society of Hematology (ASH), the Society of Hematology and Oncology (SOHO), the Ken Kennedy Institute at Rice University, and the Endocrine Society's Annual Meeting, with an Oral Podium & Achievement Award at ASH and multiple peer-reviewed publications, including in Blood Journal.`]},{heading:`Community & Global Health`,paragraphs:[`Alongside his research, Dr. Palaniswamy has provided direct medical care to underserved rural communities in India — delivering free consultations and vaccination drives as a Voluntary Duty Medical Officer, and supporting COVID-19 relief efforts as a medical student intern.`]},{heading:`Honors & Recognition`,list:[`Resident of the Quarter — MUSC Health network`,`Excellence in Research Award — MUSC Health Lancaster Medical Center`,`Top 20 Best Outgoing Medical Student — Saveetha Medical College`]}]}],Ke=({member:e,onClose:t})=>{let n=(0,g.useRef)(null),r=(0,g.useRef)(null);return(0,g.useEffect)(()=>{let e=document.activeElement;n.current?.focus(),document.body.style.overflow=`hidden`;let r=e=>{if(e.key===`Escape`){t();return}if(e.key===`Tab`&&n.current){let t=n.current.querySelectorAll(`a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`);if(!t.length)return;let r=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())}};return document.addEventListener(`keydown`,r),()=>{document.removeEventListener(`keydown`,r),document.body.style.overflow=``,e instanceof HTMLElement&&e.focus()}},[t]),(0,U.jsx)(o.div,{className:`team-modal-overlay`,onClick:e=>{e.target===e.currentTarget&&t()},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:(0,U.jsxs)(o.div,{ref:n,className:`team-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-title-${e.id}`,tabIndex:-1,initial:{opacity:0,y:24,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:16,scale:.98},transition:{duration:.3,ease:[.4,0,.2,1]},children:[(0,U.jsx)(`button`,{ref:r,className:`team-modal-close`,onClick:t,"aria-label":`Close profile`,children:(0,U.jsx)(De,{size:20,strokeWidth:1.8})}),(0,U.jsx)(`figure`,{className:`team-modal-figure`,children:(0,U.jsx)(`img`,{src:e.image,alt:`Portrait of ${e.name}`,className:`team-modal-photo`,style:{objectPosition:e.objectPosition}})}),(0,U.jsxs)(`div`,{className:`team-modal-scroll`,children:[(0,U.jsxs)(`div`,{className:`team-modal-identity`,children:[(0,U.jsx)(`h3`,{id:`modal-title-${e.id}`,className:`team-modal-name`,children:e.name}),(0,U.jsx)(`span`,{className:`team-role team-modal-role`,style:{color:e.accent,background:e.accentSoft},children:e.role}),e.tag&&(0,U.jsx)(`p`,{className:`team-modal-tag`,style:{color:e.accent},children:e.tag})]}),(0,U.jsx)(`p`,{className:`team-modal-summary`,children:e.summary}),e.quote&&(0,U.jsx)(`blockquote`,{className:`team-modal-quote`,style:{borderColor:e.accent},children:e.quote}),(0,U.jsx)(`div`,{className:`team-modal-body`,children:e.sections.map(t=>(0,U.jsxs)(`div`,{className:`team-modal-section`,children:[(0,U.jsx)(`h4`,{className:`team-modal-heading`,style:{color:e.accent},children:t.heading}),t.paragraphs?.map((e,t)=>(0,U.jsx)(`p`,{className:`team-modal-paragraph`,children:e},t)),t.list&&(0,U.jsx)(`ul`,{className:`team-modal-list`,children:t.list.map((e,t)=>(0,U.jsx)(`li`,{children:e},t))}),t.footer&&(0,U.jsx)(`p`,{className:`team-modal-paragraph`,children:t.footer})]},t.heading))})]})]})})},qe=()=>{let[e,t]=(0,g.useState)(null),n=(0,g.useCallback)(e=>t(e),[]),r=(0,g.useCallback)(()=>t(null),[]);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        .team-section {
          background: #ffffff;
          padding: clamp(4rem, 9vw, 7rem) clamp(1.25rem, 4vw, 2rem);
          position: relative;
          overflow: hidden;
        }

        .team-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .team-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(2.5rem, 6vw, 4rem);
        }

        .team-label {
          font-family: var(--font-sans);
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: #9a9aab;
          margin: 0 0 clamp(0.75rem, 1.5vw, 1rem);
        }

        .team-heading {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(1.9rem, 4.2vw, 2.75rem);
          letter-spacing: -0.02em;
          color: #1a1a1a;
          margin: 0 0 clamp(0.75rem, 1.8vw, 1.1rem);
          line-height: 1.15;
        }

        .team-subtext {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(0.95rem, 1.3vw, 1.05rem);
          color: #6b6b7a;
          line-height: 1.6;
          margin: 0;
        }

        /* Cards are ~40% smaller than before (376px -> 232px wide). Width is a
           single token so the padding and type below scale from one number.
           Flex rather than grid auto-fit: auto-fit sizes a whole row of tracks
           to the container, so with only three cards the leftover tracks pushed
           the set off-centre. Flex wrap + centre stays centred at any count.

           Six members now need to fit the same 1200px container in one row.
           The text-safety floor was re-measured directly in the browser for
           the current longest name ("Dr. Gowrishankar Palaniswamy"): zero
           scrim overflow starts at a 175px flex width, so 178px is used as
           the floor with a small margin, not the bare minimum.

           That floor leaves very little room to also fit six cards plus five
           gaps inside 1200px: at the OLD gap (1.25rem = 20px ceiling), even
           the width-fit ceiling math (6*C + 5*20 <= 1200 -> C <= 183) barely
           clears the text-safety floor (178) — a 5px window. So this tier
           gets its own tighter gap (see below) instead of sharing the wider
           one the 2-up tier still uses, buying real margin: 6*183 + 5*14.4 =
           1170, leaving 30px of slack inside the 1200px cap rather than 2-9px.

           The activation breakpoint (below) was moved from 1249 to 1299 for
           the same reason: at 1250px viewport the container hasn't yet
           reached its full 1200px cap (measured ~1171px there), which was
           too tight even with the smaller gap. By 1300px the container is
           already fully capped, so the six-across tier only ever turns on
           where it's been verified to fit with margin. */
        .team-grid {
          --team-card-w: clamp(178px, 15vw, 183px);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          /* Vestigial now that the caption is an overlay again: every card's
             height is padding + aspect-ratio(width), identical by
             construction, so there's nothing left for stretch to reconcile.
             Left in rather than removed — harmless, and cheap insurance if a
             future child ever needs it again. */
          align-items: stretch;
          gap: clamp(0.6rem, 1vw, 0.9rem);
        }
        .team-grid > * {
          flex: 0 0 var(--team-card-w);
          max-width: 100%;
          /* Flex items default to min-width:auto, letting an unbreakable word
             (e.g. "Balasubramaniam") widen the box past its flex-basis — one
             card silently rendered 9px wider than the rest, which is both a
             same-size violation and, with less margin, what pushed a sixth
             card into an orphaned second row. min-width:0 forces every card
             to honour --team-card-w exactly; overflow-wrap below lets a long
             word break instead of bleeding past the now-fixed box. */
          min-width: 0;
        }

        /* ── Card: light "gallery mat" frame around a full-bleed portrait,
              identity typeset over the photo as it fades into the mat ── */
        .team-card {
          /* Single child now (.team-card-media) — the caption lives inside
             it as an overlay again, not as a normal-flow sibling below it,
             so this can be plain block layout. Every card's height is now
             purely padding + aspect-ratio(width), which is what makes all
             six cards structurally identical, not just visually tuned. */
          display: block;
          width: 100%;
          padding: clamp(6px, 0.7vw, 8px);
          background: #ffffff;
          border: 1px solid rgba(20, 20, 30, 0.07);
          border-radius: clamp(18px, 1.8vw, 22px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 18px 40px rgba(20, 20, 30, 0.07);
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: transform 0.42s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 30px 62px rgba(20, 20, 30, 0.12);
        }

        .team-card:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
        }

        .team-card-media {
          position: relative;
          aspect-ratio: 5 / 8;
          border-radius: clamp(12px, 1.3vw, 16px);
          overflow: hidden;
          background: #f1f1f4;
        }

        .team-card-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .team-card:hover .team-card-photo {
          transform: scale(1.035);
        }

        /* ── Overlay: name + summary sit directly on the photo again, inside
         * a fixed-height band pinned to the bottom of .team-card-media — the
         * look the team asked to bring back (a black bar dissolving into the
         * image), rebuilt so it can't reproduce the bug that broke it three
         * times before. That bug was two independently-varying quantities
         * (font-size tied to card width, scrim tied to a fixed PERCENT of
         * the photo) drifting out of sync. The fix here is to tie neither
         * dimension of the band to anything variable:
         *   - height is a fixed rem value, not a percentage — the text it
         *     holds is sized off the viewport (see .team-name), not off
         *     card width, so the pixels it actually needs stay ~constant
         *     across every breakpoint tier. A fixed height can therefore
         *     track that constant need everywhere, where a percentage of
         *     the (width-driven) media box cannot.
         *   - overflow:hidden here is the actual safety net: combined with
         *     line-clamp on both the name and the summary below, text can
         *     only ever truncate with an ellipsis inside this fixed box —
         *     it can never grow past it and reach up into the photo. */
        .team-card-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          /* Sized for the worst case: the longest current name ("Dr.
             Gowrishankar Palaniswamy") wrapped to 2 lines plus a 1-line
             summary, at the narrowest (six-across, ~178-183px) card width —
             verified directly in the browser, not guessed. Kept deliberately
             compact (not tall) — a band that reaches too far up the photo
             reads as a mistake, not a design choice. */
          height: 5rem;
          padding: clamp(0.55rem, 1vw, 0.75rem) clamp(0.6rem, 1vw, 0.8rem);
          overflow: hidden;
          pointer-events: none;
          /* Mostly opaque flat black, not a long translucent dissolve: a
             frosted/translucent band's contrast depends on how light the
             photo underneath is (risky over Rajesh's and Muruganand's
             lighter crops); a near-opaque fill reads the same regardless of
             the photo, and only needs a short blend at the very top where
             it meets the image. */
          background: linear-gradient(
            to top,
            rgba(10, 10, 16, 0.94) 0%,
            rgba(10, 10, 16, 0.94) 72%,
            rgba(10, 10, 16, 0.55) 86%,
            rgba(10, 10, 16, 0) 100%
          );
        }

        .team-name {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          /* Viewport-driven, like the rest of the site's type — not derived
             from the card's own width. Sized down from an earlier pass that
             read too large against the now-compact band. */
          font-size: clamp(0.72rem, 0.95vw, 0.82rem);
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.28;
          margin: 0 0 0.2rem;
        }

        .team-name > span {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          overflow-wrap: anywhere;
          /* .team-name is itself a flex row (name + badge); without this,
             the same min-width:auto default that once let a card silently
             overgrow its flex-basis (fixed via min-width:0 on the grid
             item) applies one level deeper to this nested flex child too. */
          min-width: 0;
        }

        .team-badge {
          width: 13px;
          height: 13px;
          flex-shrink: 0;
          margin-top: 0.15em;
        }

        .team-card-summary {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          /* One line, not two — this is most of what makes the compact band
             above possible: a second line roughly doubles the summary's own
             height requirement for comparatively little information. */
          -webkit-line-clamp: 1;
          overflow: hidden;
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.4;
          letter-spacing: -0.003em;
          margin: 0;
          text-wrap: pretty;
        }

        .team-role {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: clamp(0.82rem, 1vw, 0.9rem);
          letter-spacing: 0.02em;
          margin: 0 0 clamp(0.85rem, 1.5vw, 1.1rem);
          padding: 0.3rem 0.85rem;
          border-radius: 999px;
          display: inline-block;
        }

        /* Between ~641 and ~830px auto-fit yielded 2 columns and an orphaned
           third card; hold a single centred column until 3 genuinely fit. */
        /* With four cards the natural flex wrap produces a 3/1 split between
           ~730 and ~1000px — three across with a single orphan beneath. Capping
           the card width here forces a balanced 2/2 instead, which is why this
           range is pinned rather than left to wrap on its own. */
        @media (min-width: 640px) and (max-width: 1299px) {
          .team-grid {
            /* 38vw (not 30vw) is what actually forces 2-up: at 900px wide a
               30vw card still resolved to 230px, so three fit and the fourth
               orphaned. Two cards plus the gap must exceed half the row for
               the third to be pushed down.
               Upper bound raised again, 1249px -> 1299px: the six-card base
               tier above only fits with real margin from ~1300px up, where
               the 1200px container has fully reached its cap (measured
               ~1171px at 1250px viewport, not yet capped — too tight for six
               cards even at the tighter gap). Below 1300px, this wider,
               already-proven-safe 2-up sizing takes over instead of a
               cramped six-across row. Restores its own, wider gap below —
               the base rule's gap is now tuned tight specifically for the
               six-across fit and would pinch these larger 2-up cards for no
               reason. */
            --team-card-w: clamp(200px, 38vw, 300px);
            gap: clamp(0.75rem, 1.8vw, 1.25rem);
          }
        }
        /* On phones give the card a little more room, since it is the only one
           on the row. Flex handles the wrapping itself. Also restores the
           wider gap for the same reason as the 2-up tier above — this tier
           stacks a single column, so it never needs the six-across squeeze. */
        @media (max-width: 520px) {
          .team-grid {
            --team-card-w: min(260px, 100%);
            gap: clamp(0.75rem, 1.8vw, 1.25rem);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .team-card, .team-card-photo { transition: none; }
          .team-card:hover { transform: none; }
          .team-card:hover .team-card-photo { transform: none; }
        }

        /* ── Modal ── */
        .team-modal-overlay {
          position: fixed;
          inset: 0;
          overflow-y: auto;
          overscroll-behavior: contain;
          background: rgba(20, 20, 30, 0.55);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(1rem, 4vw, 2.5rem);
          z-index: 200;
        }

        /* Landscape dialog: portrait panel on the left, scrolling profile on
           the right. Only the text column scrolls, so the photo stays put. */
        /* The figure is absolutely positioned and the text column carries the
           height cap. A grid/flex row would size to the text's full content
           height, so max-height would merely clip it and the column would
           never scroll — leaving the end of long profiles unreachable. */
        .team-modal {
          --modal-figure-w: 37%;
          background: #ffffff;
          border-radius: 24px;
          margin: auto;
          flex-shrink: 0;
          width: 100%;
          max-width: 1080px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3);
        }

        .team-modal:focus {
          outline: none;
        }

        .team-modal-figure {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: var(--modal-figure-w);
          margin: 0;
          background: #eeeef1;
        }

        /* Fills its column at any dialog height without ever distorting —
           this is what was stretching the portrait in the old layout. */
        .team-modal-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .team-modal-scroll {
          margin-left: var(--modal-figure-w);
          max-height: min(86vh, 760px);
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: clamp(1.75rem, 3.2vw, 2.75rem);
        }

        .team-modal-close {
          position: absolute;
          top: clamp(0.85rem, 1.4vw, 1.15rem);
          right: clamp(0.85rem, 1.4vw, 1.15rem);
          z-index: 3;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(20, 20, 30, 0.08);
          background: rgba(255, 255, 255, 0.82);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #2d2d38;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease;
        }

        .team-modal-close:hover {
          background: #ffffff;
          color: #12121a;
        }

        .team-modal-close:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 2px;
        }

        .team-modal-identity {
          margin-bottom: 1.15rem;
          padding-right: 2.75rem;
        }

        .team-modal-name {
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: clamp(1.3rem, 2.4vw, 1.6rem);
          color: #1a1a1a;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .team-modal-role {
          margin: 0;
        }

        /* Founder/affiliation credential, sat under the qualifications pill.
           Inherits the member's accent so it reads as part of the identity
           block rather than as body copy. */
        .team-modal-tag {
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: clamp(0.82rem, 1vw, 0.9rem);
          letter-spacing: 0.01em;
          margin: 0.6rem 0 0;
          line-height: 1.4;
        }

        .team-modal-summary {
          font-family: var(--font-sans);
          font-weight: 400;
          font-size: clamp(0.98rem, 1.4vw, 1.08rem);
          color: #3d3d4a;
          line-height: 1.65;
          margin: 0 0 clamp(1.5rem, 3vw, 2rem);
          padding-bottom: clamp(1.25rem, 2.5vw, 1.75rem);
          border-bottom: 1px solid rgba(20,20,30,0.08);
        }

        .team-modal-quote {
          font-family: var(--font-sans);
          font-style: italic;
          font-weight: var(--fw-light);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          line-height: 1.6;
          color: #2f2f3c;
          margin: 0 0 clamp(1.5rem, 3vw, 2rem);
          padding: 0.1rem 0 0.1rem clamp(0.85rem, 1.4vw, 1.1rem);
          border-left: 2px solid currentColor;
        }

        .team-modal-body {
          display: flex;
          flex-direction: column;
          gap: clamp(1.5rem, 3vw, 2rem);
        }

        .team-modal-heading {
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: clamp(0.82rem, 1vw, 0.92rem);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin: 0 0 0.75rem;
        }

        .team-modal-paragraph {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(0.92rem, 1.1vw, 0.98rem);
          color: #4a4a58;
          line-height: 1.7;
          margin: 0 0 0.75rem;
        }

        .team-modal-paragraph:last-child {
          margin-bottom: 0;
        }

        /* Tailwind preflight resets ul to list-style:none, so markers must be
           asked for. Kept as a block list, not flex: a flex container
           blockifies its children, which suppresses list markers entirely. */
        .team-modal-list {
          margin: 0;
          list-style: disc;
          padding-left: 1.15rem;
        }

        .team-modal-list li::marker {
          color: rgba(20, 20, 30, 0.3);
        }

        .team-modal-list li {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(0.92rem, 1.1vw, 0.98rem);
          color: #4a4a58;
          line-height: 1.6;
        }

        .team-modal-list li + li {
          margin-top: 0.5rem;
        }

        /* Below the landscape threshold the dialog stacks: the portrait becomes
           a banner and the whole dialog scrolls as one column. */
        @media (max-width: 860px) {
          .team-modal-figure {
            position: relative;
            width: 100%;
            aspect-ratio: 16 / 10;
            max-height: 32vh;
          }

          .team-modal-scroll {
            margin-left: 0;
            max-height: min(52vh, 520px);
          }

          .team-modal-identity {
            padding-right: 0;
          }
        }

        @media (max-width: 420px) {
          .team-modal-figure {
            aspect-ratio: 3 / 2;
            max-height: 26vh;
          }
        }
      `}),(0,U.jsx)(`section`,{className:`team-section`,id:`team`,children:(0,U.jsxs)(`div`,{className:`team-inner`,children:[(0,U.jsxs)(`div`,{className:`team-header`,children:[(0,U.jsx)(`p`,{className:`team-label`,children:`Our Team`}),(0,U.jsx)(`h2`,{className:`team-heading`,children:`Leadership`}),(0,U.jsx)(`p`,{className:`team-subtext`,children:`Guided by experienced leaders in medicine, radiology, technology, and finance, committed to advancing equitable precision healthcare worldwide.`})]}),(0,U.jsx)(`div`,{className:`team-grid`,children:Ge.map(e=>(0,U.jsx)(`button`,{type:`button`,className:`team-card`,onClick:()=>n(e),"aria-haspopup":`dialog`,"aria-label":`View full profile of ${e.name}`,children:(0,U.jsxs)(`div`,{className:`team-card-media`,children:[(0,U.jsx)(`img`,{src:e.image,alt:`Portrait of ${e.name}`,className:`team-card-photo`,style:{objectPosition:e.objectPosition},loading:`lazy`,decoding:`async`}),(0,U.jsxs)(`div`,{className:`team-card-overlay`,"aria-hidden":`true`,children:[(0,U.jsxs)(`h3`,{className:`team-name`,children:[(0,U.jsx)(`span`,{children:e.name}),(0,U.jsxs)(`svg`,{className:`team-badge`,viewBox:`0 0 24 24`,"aria-hidden":`true`,focusable:`false`,children:[(0,U.jsx)(`path`,{transform:`translate(0.5, -0.5)`,fill:`#3A82C4`,d:`M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.494 0-.964.084-1.4.238C14.545 2.472 13.17 1.5 11.5 1.5s-3.045.972-3.69 2.238C7.374 3.584 6.904 3.5 6.41 3.5c-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.375 9.55.5 10.92.5 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .494 0 .964-.084 1.4-.238.645 1.266 2.02 2.238 3.69 2.238s3.045-.972 3.69-2.238c.436.154.906.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z`}),(0,U.jsx)(`path`,{d:`M8.3 12.3l2.6 2.6 4.9-5.1`,fill:`none`,stroke:`#ffffff`,strokeWidth:`2.1`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),(0,U.jsx)(`p`,{className:`team-card-summary`,children:e.cardSummary})]})]})},e.id))})]})}),(0,U.jsx)(i,{children:e&&(0,U.jsx)(Ke,{member:e,onClose:r})})]})},Je=`role`,Ye=`/`,Xe={"/careers":`careers`,"/team":`team`},Ze={"/dev":`shri-health`};function Qe(){try{let e=window.location.pathname.replace(/\/+$/,``);return Ze[e.slice(e.lastIndexOf(`/`))||`/`]||null}catch{return null}}var X=`shri:route`,$e=null;function et(){try{return new URLSearchParams(window.location.search).get(Je)||null}catch{return null}}function tt(e){return`/?role=`+encodeURIComponent(e)}function nt(){try{let e=window.location.pathname.replace(/\/+$/,``),t=e.slice(e.lastIndexOf(`/`))||`/`;if(Xe[t])return Xe[t];let n=window.location.hash.replace(`#`,``);return n&&document.getElementById(n)?n:null}catch{return null}}function Z(e){let t=document.documentElement,n=t.style.scrollBehavior;t.style.scrollBehavior=`auto`,getComputedStyle(t).scrollBehavior,window.scrollTo(0,e),t.style.scrollBehavior=n}function rt(e){$e=window.scrollY,Z(0),window.history.pushState({role:e},``,tt(e)),window.dispatchEvent(new CustomEvent(X))}function it(){window.history.pushState({role:null},``,Ye),window.dispatchEvent(new CustomEvent(X))}function at(){return $e}var Q=[{slug:`mba-healthcare-partnerships-ai-business-development`,discipline:`Business & Strategy`,title:`MBA — Healthcare Partnerships & AI Business Development`,focus:`Intern to full-time · India & USA`,accent:`#7B6FCD`,summary:`Build hospital, laboratory and technology partnerships across India and the United States, and bridge clinical and AI teams.`},{slug:`stroke-neurologist-clinical-lead`,discipline:`Clinical · Stroke`,title:`Stroke Neurologist — Clinical Lead, Stroke AI`,focus:`Clinical direction for the stroke platform`,accent:`#2a6db5`,summary:`Set the clinical direction of the stroke platform, from triage definitions through validation with partner hospitals.`},{slug:`neuroradiologist-stroke-neurovascular-imaging`,discipline:`Clinical Imaging`,title:`Neuroradiologist — Stroke & Neurovascular Imaging`,focus:`Reference-standard reading and imaging validation`,accent:`#3A82C4`,summary:`Establish the imaging reference standard for stroke models, and validate what they see against expert reading.`},{slug:`clinical-imaging-data-specialist-stroke`,discipline:`Clinical Data`,title:`Clinical Imaging Data Specialist — Stroke Annotation & Curation`,focus:`Datasets, annotation and traceability`,accent:`#2aaa72`,summary:`Build and maintain the annotated stroke imaging datasets every model is trained and validated on.`},{slug:`molecular-biologist-genomics-liquid-biopsy`,discipline:`Laboratory Science`,title:`Molecular Biologist — Genomics & Liquid Biopsy`,focus:`NGS, ctDNA and assay development`,accent:`#D4891E`,summary:`Develop and validate the liquid-biopsy assays behind our precision-oncology work, from extraction to reportable result.`},{slug:`oncopathologist-molecular-pathology`,discipline:`Clinical · Oncology`,title:`Oncopathologist — Molecular Pathology`,focus:`Diagnostic ground truth and molecular correlation`,accent:`#c0392b`,summary:`Provide the diagnostic ground truth and molecular correlation that our oncology models are built and judged against.`},{slug:`bioinformatics-scientist`,discipline:`Computational Biology`,title:`Bioinformatics Scientist`,focus:`Variant calling, ctDNA pipelines and multi-omics`,accent:`#7B6FCD`,summary:`Build the analysis pipelines that turn sequencing output into results clinicians and researchers can rely on.`},{slug:`clinical-research-associate`,discipline:`Clinical Research`,title:`Clinical Research Associate`,focus:`Validation studies across partner sites`,accent:`#3A82C4`,summary:`Run the validation studies that decide whether our stroke and oncology work holds up at partner sites.`}];function ot(e){if(e)return Q.find(t=>t.slug===e)}var st=()=>{let e=()=>{H(`contact`),window.dispatchEvent(new CustomEvent(`open-contact-form`))},t=(e,t)=>{e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button===0&&(e.preventDefault(),rt(t))};return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`
        .careers-section {
          background: var(--surface-alt);
          padding: var(--section-pad-y) var(--gutter);
          position: relative;
          overflow: hidden;
        }

        .careers-inner {
          max-width: 1440px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .careers-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(2.5rem, 6vw, 4rem);
        }

        .careers-label {
          font-family: var(--font-sans);
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: #9a9aab;
          margin: 0 0 clamp(0.75rem, 1.5vw, 1rem);
        }

        .careers-heading {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: clamp(1.9rem, 4.2vw, 2.75rem);
          letter-spacing: -0.02em;
          color: var(--ink);
          margin: 0 0 clamp(0.75rem, 1.8vw, 1.1rem);
          line-height: 1.15;
        }

        .careers-subtext {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-lead);
          color: var(--ink-muted);
          line-height: var(--lh-body);
          margin: 0;
        }

        /* A fixed column count rather than auto-fit: the 8 open roles divide
           evenly into 4 x 2 on desktop and 2 x 4 on tablets, so no row is
           ever orphaned. The wider 1440px column gives each card the width
           its long role titles need, so on desktop the cards come out
           slightly wider than tall instead of tall and narrow. */
        .careers-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          /* Every row takes the height of the tallest one, so all eight
             cards are exactly the same size at every width. */
          grid-auto-rows: 1fr;
          gap: clamp(1rem, 1.8vw, 1.5rem);
        }

        /* Cards are anchors now, so the link defaults have to be neutralised
           here rather than inherited from Tailwind preflight. */
        .careers-card {
          display: flex;
          text-decoration: none;
          color: inherit;
          flex-direction: column;
          width: 100%;
          min-width: 0;
          padding: clamp(1.15rem, 1.7vw, 1.5rem);
          background: var(--surface);
          border: 1px solid rgba(20, 20, 30, 0.07);
          border-radius: 0;
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 12px 30px rgba(20, 20, 30, 0.05);
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition:
            transform 0.42s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.42s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .careers-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 22px 48px rgba(20, 20, 30, 0.1);
        }

        .careers-card:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
        }

        .careers-rule {
          width: 28px;
          height: 2px;
          border-radius: 1px;
          margin-bottom: clamp(0.75rem, 1.3vw, 1rem);
          flex-shrink: 0;
        }

        .careers-card-label {
          display: block;
          font-family: var(--font-sans);
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-regular);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          margin-bottom: 0.45rem;
        }

        .careers-card-title {
          display: block;
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: var(--fs-h4);
          letter-spacing: -0.015em;
          line-height: 1.25;
          color: var(--ink);
        }

        .careers-card-focus {
          display: block;
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-sm);
          color: var(--ink-soft);
          line-height: 1.4;
          margin-top: 0.2rem;
        }

        .careers-card-desc {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-sm);
          color: var(--ink-muted);
          line-height: var(--lh-body);
          margin: clamp(0.55rem, 1vw, 0.75rem) 0 0;
          text-wrap: pretty;
        }

        /* margin-top:auto pins this to the bottom, so the row of cards keeps a
           common baseline for the action regardless of description length. */
        .careers-card-apply {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: auto;
          padding-top: clamp(0.8rem, 1.3vw, 1rem);
          font-family: var(--font-sans);
          font-weight: var(--fw-medium);
          font-size: var(--fs-xs);
          letter-spacing: 0.01em;
          color: var(--ink);
          transition: gap 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .careers-card:hover .careers-card-apply {
          gap: 0.7rem;
        }
        .careers-card-apply svg {
          flex-shrink: 0;
        }

        .careers-note {
          text-align: center;
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-sm);
          color: var(--ink-muted);
          line-height: var(--lh-body);
          max-width: var(--measure-narrow);
          margin: clamp(2.25rem, 4vw, 3rem) auto 0;
        }

        .careers-note-link {
          background: none;
          border: 0;
          padding: 0;
          font: inherit;
          color: var(--ink);
          cursor: pointer;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
          transition: color 0.22s ease;
        }
        .careers-note-link:hover { color: #3A82C4; }
        .careers-note-link:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* Tablets: two wide columns — the cards come out wider than tall. */
        @media (max-width: 1099px) {
          .careers-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        /* Phones: one column. */
        @media (max-width: 620px) {
          .careers-grid { grid-template-columns: minmax(0, 1fr); max-width: 440px; margin: 0 auto; }
        }

        @media (prefers-reduced-motion: reduce) {
          .careers-card, .careers-card-apply { transition: none; }
          .careers-card:hover { transform: none; }
          .careers-card:hover .careers-card-apply { gap: 0.4rem; }
        }
      `}),(0,U.jsx)(`section`,{className:`careers-section`,id:`careers`,children:(0,U.jsxs)(`div`,{className:`careers-inner`,children:[(0,U.jsxs)(`div`,{className:`careers-header`,children:[(0,U.jsx)(`p`,{className:`careers-label`,children:`Careers`}),(0,U.jsx)(`h2`,{className:`careers-heading`,children:`Work with us`}),(0,U.jsx)(`p`,{className:`careers-subtext`,children:`We are building AI for stroke care and precision oncology, across the clinic, the laboratory and engineering. Open a role for its full description.`})]}),(0,U.jsx)(`div`,{className:`careers-grid`,children:Q.map(e=>(0,U.jsxs)(`a`,{className:`careers-card`,href:tt(e.slug),onClick:n=>t(n,e.slug),"aria-label":`Read the full job description for `+e.title,children:[(0,U.jsx)(`span`,{className:`careers-rule`,style:{background:e.accent},"aria-hidden":`true`}),(0,U.jsx)(`span`,{className:`careers-card-label`,style:{color:e.accent},children:e.discipline}),(0,U.jsx)(`span`,{className:`careers-card-title`,children:e.title}),e.focus&&(0,U.jsx)(`span`,{className:`careers-card-focus`,children:e.focus}),(0,U.jsx)(`p`,{className:`careers-card-desc`,children:e.summary}),(0,U.jsxs)(`span`,{className:`careers-card-apply`,children:[`View role`,(0,U.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,U.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})})]})]},e.slug))}),(0,U.jsxs)(`p`,{className:`careers-note`,children:[`Do not see your discipline listed? We are always glad to hear from clinicians, researchers and engineers working on accessible healthcare technology —`,` `,(0,U.jsx)(`button`,{type:`button`,className:`careers-note-link`,onClick:e,children:`write to us`}),`.`]})]})})]})};function ct(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||``);return t?`v.${Number(t[3])}.${Number(t[2])}.${t[1]}`:e||``}var lt=ct(`2026-10-06`),ut=()=>{let e=new Date().getFullYear(),[t,n]=(0,g.useState)(!1),[r,i]=(0,g.useState)(!1),[a,o]=(0,g.useState)(!1),s=(0,g.useRef)(null),c=()=>{n(!0),i(!1),setTimeout(()=>{s.current?.focus({preventScroll:!0})},400)};return(0,g.useEffect)(()=>{let e=()=>{setTimeout(()=>{c()},250)};return window.addEventListener(`open-contact-form`,e),()=>window.removeEventListener(`open-contact-form`,e)},[]),(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`style`,{children:`

        @keyframes subtle-drift1 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-10px) translateZ(0);} }
        @keyframes subtle-drift2 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-7px) translateZ(0);} }

        .sd1 { animation: subtle-drift1 12s ease-in-out infinite alternate; }
        .sd2 { animation: subtle-drift2 14s ease-in-out infinite alternate; }

        .fgl-shape {
          position: absolute;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          will-change: transform;
          clip-path: polygon(0% 18%, 100% 0%, 100% 100%, 0% 100%);
          -webkit-clip-path: polygon(0% 18%, 100% 0%, 100% 100%, 0% 100%);
          transition: left 0.85s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease;
        }

        .fl1-shape {
          width: 11%;
          height: clamp(300px, 92vh, 980px);
          bottom: -28vh;
          top: auto;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }
        .fl2-shape {
          width: 11%;
          height: clamp(155px, 52vh, 560px);
          bottom: -12vh;
          top: auto;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
        }

        @media (max-width: 1280px) {
          .fl1-shape { width: 12%; }
          .fl2-shape { width: 12%; }
        }
        @media (max-width: 1024px) {
          .fl1-shape { width: 14%; }
          .fl2-shape { width: 14%; }
        }
        @media (max-width: 768px) {
          .fl1-shape { width: 17%; height: clamp(240px, 75vh, 700px); }
          .fl2-shape { width: 17%; height: clamp(120px, 40vh, 400px); }
        }
        @media (max-width: 640px) {
          .fl1-shape { width: 24%; height: clamp(200px, 62vh, 500px); bottom: -18vh; }
          .fl2-shape { width: 24%; height: clamp(100px, 32vh, 260px); bottom: -8vh; }
        }

        .cta-content {
          transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.65s ease;
        }
        .cta-content.slide-out {
          transform: translateX(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .form-container {
          position: absolute;
          top: 0;
          right: 0;
          width: 52%;
          height: 100%;
          transform: translateX(105%);
          transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 30;
          display: flex;
          align-items: flex-start;
          padding: clamp(60px, 8vw, 80px) clamp(20px, 4vw, 56px);
          overflow-y: auto;
          overflow-x: hidden;
        }
        .form-inner {
          width: 100%;
          max-width: 600px;
          margin: auto;
        }
        .form-container.visible { transform: translateX(0); }

        @media (max-width: 900px) { .form-container { width: 65%; } }
        @media (max-width: 680px) { .form-container { width: 100%; } }

        .back-arrow-btn {
          position: absolute;
          top: clamp(18px, 3vw, 34px);
          left: clamp(14px, 3vw, 34px);
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 4px;
          z-index: 40;
          opacity: 0;
          transform: translateX(18px);
          transition: opacity 0.5s ease 0.45s, transform 0.5s ease 0.45s;
        }
        .form-container.visible .back-arrow-btn { opacity: 1; transform: translateX(0); }
        .back-arrow-icon {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid #1a1a24;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
        }
        .back-arrow-btn:hover .back-arrow-icon { background: #1a1a24; transform: translateX(-4px); }
        .back-arrow-label {
          font-family: var(--font-ui);
          font-size: var(--fs-xs); font-weight: 500; color: #1a1a24; letter-spacing: 0.01em;
          opacity: 0; transform: translateX(-6px);
          transition: opacity 0.22s ease, transform 0.22s ease;
          pointer-events: none; white-space: nowrap;
        }
        .back-arrow-btn:hover .back-arrow-label { opacity: 1; transform: translateX(0); }
        .back-arrow-svg { transition: stroke 0.22s ease; stroke: #1a1a24; }
        .back-arrow-btn:hover .back-arrow-svg { stroke: #ffffff; }

        @keyframes slideInSuccess {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .success-notification { animation: slideInSuccess 0.4s ease-out forwards; }

        .git-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: #1a1a24; color: #fff; border: none; border-radius: 3px;
          padding: clamp(11px, 1.3vw, 15px) clamp(18px, 2vw, 30px);
          font-family: var(--font-ui);
          font-size: var(--fs-xs); font-weight: var(--fw-medium); letter-spacing: 0.02em;
          min-height: 44px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          white-space: nowrap;
        }
        .git-btn:hover { background: #2d2d40; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(26,26,36,0.25); }

        .cta-bottom {
          display: grid; grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(100,100,120,0.16);
          background: rgba(255,255,255,0.13);
          backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
        }
        @media (max-width: 560px) { .cta-bottom { grid-template-columns: 1fr; } }
        .cta-bottom-divider { border-right: 1px solid rgba(100,100,120,0.16); }
        @media (max-width: 560px) { .cta-bottom-divider { border-right: none; border-bottom: 1px solid rgba(100,100,120,0.16); } }

        .contact-form { width: 100%; }
        .name-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        @media (max-width: 560px) { .name-grid { grid-template-columns: 1fr; gap: 16px; } }
        .form-group { margin-bottom: clamp(14px, 1.8vw, 22px); }
        .form-label { display: block; font-family: var(--font-ui); font-size: var(--fs-2xs); font-weight: var(--fw-medium); color: #1a1a24; margin-bottom: 9px; letter-spacing: var(--ls-eyebrow); text-transform: uppercase; }
        .form-input, .form-textarea {
          width: 100%; padding: 13px 16px; min-height: 44px;
          font-family: var(--font-body); font-size: var(--fs-sm); color: #1a1a24;
          background: rgba(255,255,255,0.45); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: none; border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-sizing: border-box; -webkit-appearance: none; appearance: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 2px rgba(255,255,255,0.5);
        }
        .form-input:focus, .form-textarea:focus {
          outline: none; background: rgba(255,255,255,0.65);
          box-shadow: 0 0 0 3px rgba(255,220,100,0.15), 0 0 20px rgba(255,200,70,0.25), 0 4px 16px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }
        .form-textarea { resize: vertical; min-height: clamp(88px, 14vh, 130px); }
        .form-submit {
          width: 100%; padding: 15px 24px; min-height: 48px;
          font-family: var(--font-ui); font-size: var(--fs-sm); font-weight: var(--fw-medium); color: #fff;
          background: #1a1a24; border: none; border-radius: 12px; cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease;
        }
        .form-submit:hover { background: #2d2d40; transform: translateY(-2px); }

        .form-title { font-family: var(--font-display); font-size: var(--fs-h4); font-weight: var(--fw-light); color: #1a1a24; margin: 0 0 8px; letter-spacing: -0.01em; }
        .form-desc { font-family: var(--font-body); font-size: var(--fs-sm); color: #3a3a4a; margin: 0 0 clamp(18px, 3vw, 32px); line-height: var(--lh-body); }
        .fcta-label { font-family: var(--font-ui); font-size: var(--fs-eyebrow); font-weight: var(--fw-medium); letter-spacing: var(--ls-eyebrow); text-transform: uppercase; color: #6b6b80; margin: 0 0 clamp(14px, 1.8vw, 22px); }
        .fcta-heading { font-family: var(--font-display); font-weight: var(--fw-light); font-size: var(--fs-display); line-height: 1.04; letter-spacing: var(--ls-display); text-transform: uppercase; color: #1a1a24; margin: 0; }
        .fcta-badge { display: inline-flex; align-items: center; gap: clamp(5px, 0.7vw, 11px); background: rgba(255,255,255,0.52); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border: 1.5px solid rgba(255,255,255,0.68); border-radius: 4px; padding: 2px clamp(8px, 1.1vw, 16px); font-size: clamp(1.5rem, 4vw, 3.6rem); font-family: var(--font-display); font-weight: 300; }

        .shri-footer {
          background: #0d0d12;
          font-family: var(--font-body);
          color: #fff;
          padding-top: clamp(40px, 6vw, 80px);
        }

        .shri-footer-inner {
          max-width: 100%;
          margin: 0;
          padding: 0 var(--gutter);
        }

        .shri-footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1.5fr;
          gap: clamp(40px, 5vw, 80px);
          padding-bottom: clamp(60px, 8vw, 100px);
        }

        @media (max-width: 1024px) {
          .shri-footer-grid { grid-template-columns: 1fr 1fr; }
          .shri-footer-col-map { grid-column: span 2; }
        }
        @media (max-width: 640px) {
          .shri-footer-grid { grid-template-columns: 1fr; }
          .shri-footer-col-map { grid-column: span 1; }
        }

        .shri-col-label {
          font-family: var(--font-ui);
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 24px;
        }

        .shri-flink {
          color: #fff;
          text-decoration: none;
          font-size: var(--fs-body);
          transition: all 0.2s ease;
          display: block;
          margin-bottom: 16px;
          font-weight: 400;
        }
        .shri-flink:hover { color: #ff8c1e; transform: translateX(5px); }

        .shri-contact-info {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 24px;
          margin-top: 32px;
        }

        .shri-contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          color: #fff;
          text-decoration: none;
          font-size: var(--fs-sm);
          transition: color 0.2s ease;
        }
        .shri-contact-item:last-child { margin-bottom: 0; }
        .shri-contact-item:hover { color: #ff8c1e; }

        .shri-map-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.15);
          /* Bounded rather than a bare aspect-ratio, which made the map taller
             on wide columns than the 220px it replaced. Capped at ~60% of the
             previous rendered size. */
          aspect-ratio: 16 / 9;
          width: min(100%, 305px);
          max-height: 175px;
          margin-bottom: 24px;
          position: relative;
        }

        .shri-address-box {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 16px;
          display: flex;
          gap: 16px;
          transition: background 0.3s ease;
        }
        .shri-address-box:hover { background: rgba(255,255,255,0.08); }

        .shri-address-text {
          font-size: var(--fs-xs);
          color: #fff;
          line-height: 1.6;
        }

        .shri-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 32px var(--gutter);
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: clamp(0.75rem, 2vw, 2rem);
          align-items: center;
          max-width: 100%;
          margin: 0;
          font-size: var(--fs-xs);
          color: #fff;
        }

        @media (max-width: 768px) {
          .shri-footer-bottom {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 16px;
            text-align: center;
          }
          .shri-legal-links { justify-content: center; }
        }

        /* Brand mark — replaces the old "S" initial badge. Padded on a light
           plate so the logo's own colours stay legible on the dark footer. */
        .shri-brand-mark {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          object-fit: contain;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.94);
          padding: 5px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
        }

        /* Build info — centre cell of the bottom bar. */
        .shri-build-info {
          font-size: var(--fs-2xs);
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.04em;
          margin: 0;
          text-align: center;
          font-variant-numeric: tabular-nums;
        }

        .shri-legal-links {
          display: flex;
          gap: clamp(1rem, 2vw, 2rem);
          justify-content: flex-end;
        }

        .shri-copy-badge {
          font-size: var(--fs-2xs);
          padding: 4px 10px;
          background: rgba(255,255,255,0.15);
          border-radius: 6px;
          margin-left: 12px;
          color: #fff;
        }
      `}),(0,U.jsxs)(`section`,{id:`contact`,style:{position:`relative`,minHeight:`70vh`,overflow:`hidden`,display:`flex`,flexDirection:`column`,background:`linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%)`},children:[(0,U.jsxs)(`div`,{style:{position:`absolute`,inset:0,overflow:`hidden`,pointerEvents:`none`,zIndex:0},children:[(0,U.jsx)(`div`,{style:{position:`absolute`,width:`55%`,height:`65%`,top:`-20%`,left:`-8%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(255,140,30,0.55) 0%, rgba(255,180,80,0.25) 35%, transparent 70%)`,filter:`blur(52px)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,width:`50%`,height:`60%`,top:`-15%`,left:`22%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(160,100,255,0.45) 0%, rgba(200,160,255,0.22) 40%, transparent 70%)`,filter:`blur(58px)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,width:`55%`,height:`65%`,top:`-20%`,right:`-8%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(50,130,255,0.50) 0%, rgba(100,170,255,0.25) 35%, transparent 70%)`,filter:`blur(52px)`}})]}),(0,U.jsxs)(`div`,{style:{position:`absolute`,inset:0,overflow:`hidden`,pointerEvents:`none`,zIndex:2},children:[(0,U.jsx)(`div`,{className:`fgl-shape fl1-shape sd1`,style:{left:t?`13%`:`35%`,background:`linear-gradient(155deg, rgba(215,180,255,0.48) 0%, rgba(185,145,248,0.34) 45%, rgba(152,112,232,0.20) 100%)`,boxShadow:`0 32px 100px rgba(130,70,220,0.55), inset 0 2px 0 rgba(255,255,255,0.65)`,opacity:.88}}),(0,U.jsx)(`div`,{className:`fgl-shape fl2-shape sd2`,style:{left:t?`21%`:`44%`,background:`linear-gradient(158deg, rgba(225,200,255,0.54) 0%, rgba(195,165,252,0.44) 45%, rgba(162,122,238,0.26) 100%)`,boxShadow:`0 36px 110px rgba(120,70,218,0.60), inset 0 2px 0 rgba(255,255,255,0.72)`}}),(0,U.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,height:`40%`,background:`linear-gradient(to top, rgba(244,243,250,0.97) 0%, rgba(244,243,250,0.78) 38%, transparent 100%)`,zIndex:10}})]}),(0,U.jsxs)(`div`,{className:`cta-content ${t?`slide-out`:``}`,style:{position:`relative`,zIndex:20,display:`flex`,flexDirection:`column`,flex:1},children:[(0,U.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,padding:`clamp(20px, 3vw, 40px) 4vw`},children:(0,U.jsxs)(`button`,{className:`git-btn`,onClick:c,children:[`Get in touch`,(0,U.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,strokeWidth:2.5,children:(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})}),(0,U.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`center`,padding:`0 4vw`},children:[(0,U.jsx)(`p`,{className:`fcta-label`,children:`Partner With Us`}),(0,U.jsxs)(`h2`,{className:`fcta-heading`,children:[`Advance Precision`,(0,U.jsx)(`br`,{}),`Health Research`,(0,U.jsx)(`br`,{}),(0,U.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`16px`,flexWrap:`wrap`},children:[`In Just`,(0,U.jsxs)(`span`,{className:`fcta-badge`,children:[`One Email`,(0,U.jsx)(`svg`,{width:`32`,height:`32`,fill:`none`,stroke:`#1a1a24`,viewBox:`0 0 24 24`,strokeWidth:1.8,children:(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})]})]})]}),(0,U.jsxs)(`div`,{className:`cta-bottom`,children:[(0,U.jsxs)(`div`,{className:`cta-bottom-divider`,style:{padding:`32px 4vw`},children:[(0,U.jsx)(`p`,{style:{fontSize:`var(--fs-eyebrow)`,fontFamily:`var(--font-ui)`,fontWeight:500,letterSpacing:`var(--ls-eyebrow)`,textTransform:`uppercase`,color:`#888`,margin:`0 0 12px`},children:`Our Mission`}),(0,U.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`#555`,lineHeight:`var(--lh-body)`,margin:0},children:`California-based 501(c)(3) nonprofit advancing equitable access to AI-driven diagnostics worldwide.`})]}),(0,U.jsxs)(`div`,{style:{padding:`32px 4vw`},children:[(0,U.jsx)(`p`,{style:{fontSize:`var(--fs-eyebrow)`,fontFamily:`var(--font-ui)`,fontWeight:500,letterSpacing:`var(--ls-eyebrow)`,textTransform:`uppercase`,color:`#888`,margin:`0 0 12px`},children:`Vision`}),(0,U.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`#555`,lineHeight:`var(--lh-body)`,margin:0},children:`Moving innovations from lab to clinic — translational research powered by AI and genomic precision.`})]})]})]}),(0,U.jsxs)(`div`,{className:`form-container ${t?`visible`:``}`,id:`contact-form-overlay`,children:[(0,U.jsxs)(`button`,{className:`back-arrow-btn`,onClick:()=>{n(!1),i(!1)},"aria-label":`Go back`,children:[(0,U.jsx)(`div`,{className:`back-arrow-icon`,children:(0,U.jsx)(`svg`,{className:`back-arrow-svg`,width:`14`,height:`14`,fill:`none`,viewBox:`0 0 24 24`,children:(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 12H5m7-7l-7 7 7 7`})})}),(0,U.jsx)(`span`,{className:`back-arrow-label`,children:`Back`})]}),(0,U.jsx)(`div`,{className:`form-inner`,children:r?(0,U.jsxs)(`div`,{className:`success-notification`,style:{background:`#fff`,padding:`60px`,borderRadius:24,textAlign:`center`,boxShadow:`0 20px 60px rgba(0,0,0,0.1)`},children:[(0,U.jsx)(`div`,{style:{width:80,height:80,margin:`0 auto 32px`,borderRadius:`50%`,background:`#10b981`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,U.jsx)(`svg`,{width:`32`,height:`32`,fill:`none`,stroke:`#fff`,viewBox:`0 0 24 24`,strokeWidth:3,children:(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})})}),(0,U.jsx)(`h3`,{style:{fontSize:`var(--fs-h4)`,fontWeight:400,margin:`0 0 16px`},children:`Message Sent!`}),(0,U.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`#6b6b80`},children:`We'll get back to you within 24 hours`})]}):(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`h3`,{className:`form-title`,children:`Get in Touch`}),(0,U.jsx)(`p`,{className:`form-desc`,children:`Discuss how we can collaborate to advance precision health research.`}),(0,U.jsxs)(`form`,{className:`contact-form`,onSubmit:e=>{e.preventDefault(),i(!0),setTimeout(()=>{i(!1),n(!1)},2500)},children:[(0,U.jsxs)(`div`,{className:`name-grid`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`form-label`,htmlFor:`fname`,children:`First Name`}),(0,U.jsx)(`input`,{ref:s,className:`form-input`,type:`text`,id:`fname`,required:!0})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`label`,{className:`form-label`,htmlFor:`lname`,children:`Last Name`}),(0,U.jsx)(`input`,{className:`form-input`,type:`text`,id:`lname`,required:!0})]})]}),(0,U.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`24px`},children:[(0,U.jsx)(`label`,{className:`form-label`,htmlFor:`email`,children:`Email Address`}),(0,U.jsx)(`input`,{className:`form-input`,type:`email`,id:`email`,required:!0})]}),(0,U.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`32px`},children:[(0,U.jsx)(`label`,{className:`form-label`,htmlFor:`message`,children:`Message`}),(0,U.jsx)(`textarea`,{className:`form-textarea`,id:`message`,required:!0})]}),(0,U.jsx)(`button`,{type:`submit`,className:`form-submit`,children:`Send Message`})]})]})})]})]}),(0,U.jsxs)(`footer`,{className:`shri-footer`,children:[(0,U.jsx)(`div`,{className:`shri-footer-inner`,children:(0,U.jsxs)(`div`,{className:`shri-footer-grid`,children:[(0,U.jsxs)(`div`,{children:[(0,U.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,marginBottom:32},children:[(0,U.jsx)(`img`,{src:`/images/brand/shri-ai-logo.webp`,alt:`SHRI-AI logo`,width:`48`,height:`48`,loading:`lazy`,decoding:`async`,className:`shri-brand-mark`}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{style:{fontWeight:500,fontSize:`var(--fs-body)`,letterSpacing:`0.02em`,margin:0,color:`#fff`},children:`SHRI-AI`}),(0,U.jsx)(`p`,{style:{fontSize:`var(--fs-xs)`,color:`rgba(255,255,255,0.62)`,margin:0},children:`Senus Healthcare Research Institute`})]})]}),(0,U.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`rgba(255,255,255,0.62)`,lineHeight:`var(--lh-body)`,margin:`0 0 40px`},children:`Advancing equitable access to AI-driven diagnostics and genomic medicine in cancer and stroke care worldwide.`}),(0,U.jsxs)(`div`,{className:`shri-contact-info`,children:[(0,U.jsxs)(`a`,{href:`mailto:info@shri-ai.org`,className:`shri-contact-item`,onClick:()=>{navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(`info@shri-ai.org`),o(!0),setTimeout(()=>o(!1),2e3)},children:[(0,U.jsxs)(`svg`,{width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,strokeWidth:2,children:[(0,U.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,U.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),`info@shri-ai.org`,a&&(0,U.jsx)(`span`,{className:`shri-copy-badge`,children:`Copied!`})]}),(0,U.jsxs)(`a`,{href:`tel:+14086664320`,className:`shri-contact-item`,children:[(0,U.jsx)(`svg`,{width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,strokeWidth:2,children:(0,U.jsx)(`path`,{d:`M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z`})}),`+1 408 666 4320`]})]})]}),(0,U.jsxs)(`div`,{children:[(0,U.jsx)(`p`,{className:`shri-col-label`,children:`Quick Links`}),(0,U.jsxs)(`nav`,{children:[(0,U.jsx)(`a`,{href:`#about`,className:`shri-flink`,onClick:e=>{e.preventDefault(),H(`about`)},children:`About Us`}),(0,U.jsx)(`a`,{href:`#focus`,className:`shri-flink`,onClick:e=>{e.preventDefault(),H(`focus`)},children:`Focus Areas`}),(0,U.jsx)(`a`,{href:`#partnership`,className:`shri-flink`,onClick:e=>{e.preventDefault(),H(`partnership`)},children:`Collaborate`}),(0,U.jsx)(`a`,{href:`#team`,className:`shri-flink`,onClick:e=>{e.preventDefault(),H(`team`)},children:`Team`}),(0,U.jsx)(`a`,{href:`#careers`,className:`shri-flink`,onClick:e=>{e.preventDefault(),H(`careers`)},children:`Careers`}),(0,U.jsx)(`a`,{href:`#contact`,className:`shri-flink`,onClick:e=>{e.preventDefault(),H(`contact`),c()},children:`Contact`})]})]}),(0,U.jsxs)(`div`,{className:`shri-footer-col-map`,children:[(0,U.jsx)(`p`,{className:`shri-col-label`,children:`Global Reach`}),(0,U.jsx)(`div`,{className:`shri-map-wrap`,children:(0,U.jsx)(`iframe`,{src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4558.947129299513!2d-121.88439919999999!3d37.219291600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e313c74a19941%3A0xec4c74b0157b91b1!2s6559%20Springpath%20Ln%2C%20San%20Jose%2C%20CA%2095120%2C%20USA!5e1!3m2!1sen!2sin!4v1777609086171!5m2!1sen!2sin`,width:`100%`,height:`100%`,style:{border:0},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`Global Reach`})}),(0,U.jsxs)(`div`,{className:`shri-address-box`,children:[(0,U.jsxs)(`svg`,{width:`28`,height:`28`,fill:`none`,stroke:`#ff8c1e`,viewBox:`0 0 24 24`,strokeWidth:2,style:{flexShrink:0,marginTop:4},children:[(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z`}),(0,U.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),(0,U.jsxs)(`div`,{className:`shri-address-text`,children:[(0,U.jsx)(`strong`,{style:{display:`block`,marginBottom:4,color:`#ff8c1e`},children:`USA Headquarters`}),`6559 Springpath Lane, San Jose, CA 95120, USA`]})]}),(0,U.jsxs)(`div`,{className:`shri-address-box`,children:[(0,U.jsxs)(`svg`,{width:`28`,height:`28`,fill:`none`,stroke:`#a064ff`,viewBox:`0 0 24 24`,strokeWidth:2,style:{flexShrink:0,marginTop:4},children:[(0,U.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z`}),(0,U.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),(0,U.jsxs)(`div`,{className:`shri-address-text`,children:[(0,U.jsx)(`strong`,{style:{display:`block`,marginBottom:4,color:`#a064ff`},children:`Globally Available`}),`Advancing precision health and genomic research through worldwide collaboration.`]})]})]})]})}),(0,U.jsxs)(`div`,{className:`shri-footer-bottom`,children:[(0,U.jsxs)(`p`,{children:[`© `,e,` Senus Healthcare Research Institute · 501(c)(3) Nonprofit`]}),(0,U.jsx)(`p`,{className:`shri-build-info`,children:lt}),(0,U.jsxs)(`div`,{className:`shri-legal-links`,children:[(0,U.jsx)(`a`,{href:`#`,style:{color:`#fff`,textDecoration:`none`},children:`Privacy Policy`}),(0,U.jsx)(`a`,{href:`#`,style:{color:`#fff`,textDecoration:`none`},children:`Terms of Service`})]})]})]})]})},$=`shri:lazy-reload`;function dt(){try{return window.sessionStorage.getItem($)===`1`}catch{return!0}}function ft(e){try{e?window.sessionStorage.setItem($,`1`):window.sessionStorage.removeItem($)}catch{}}function pt(e){return(0,g.lazy)(()=>e().then(e=>(ft(!1),e),e=>{if(!dt())return ft(!0),window.location.reload(),new Promise(()=>{});throw e}))}var mt=`modulepreload`,ht=function(e){return`/`+e},gt={},_t=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=ht(t,n),t=s(t),t in gt)return;gt[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:mt,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},vt=pt(()=>_t(()=>import(`./ShriHealth-CkoP_Dw-.js`),__vite__mapDeps([0,1,2,3]))),yt=pt(()=>_t(()=>import(`./JobDetail-rmO5ina7.js`),__vite__mapDeps([4,1,2]))),bt=(0,U.jsx)(`div`,{style:{minHeight:`100dvh`},"aria-busy":`true`});function xt(){let e=(0,g.useRef)(null),t=(0,g.useRef)(null),n=(0,g.useRef)(null),[r,i]=(0,g.useState)(et),[a]=(0,g.useState)(Qe),o=(0,g.useRef)(!1);return(0,g.useEffect)(()=>{let e=()=>i(et());window.addEventListener(X,e),window.addEventListener(`popstate`,e);let t=window.history.scrollRestoration;return t&&(window.history.scrollRestoration=`manual`),()=>{window.removeEventListener(X,e),window.removeEventListener(`popstate`,e),t&&(window.history.scrollRestoration=t)}},[]),(0,g.useEffect)(()=>{let r=e.current,i=t.current,a=n.current;if(!r||!i||!a)return;let o=null,s=0,c=()=>{let e=i.offsetHeight+a.offsetHeight;e!==s&&(r.style.height=`${e}px`,s=e)},l=()=>{o=null,c();let e=r.getBoundingClientRect(),t=i.offsetHeight,n=Math.max(0,-e.top),s=Math.min(1,n/t);a.style.transform=`translateY(${(1-s)*100}%)`},u=()=>{o||(o=requestAnimationFrame(l))},d=()=>{c(),l()},f=new ResizeObserver(()=>{o||(o=requestAnimationFrame(l))});return f.observe(i),f.observe(a),c(),l(),window.addEventListener(`scroll`,u,{passive:!0}),window.addEventListener(`resize`,d,{passive:!0}),()=>{window.removeEventListener(`scroll`,u),window.removeEventListener(`resize`,d),f.disconnect(),o&&cancelAnimationFrame(o)}},[r]),(0,g.useEffect)(()=>{if(r){Z(0);return}let e=at();e!==null&&Z(e)},[r]),(0,g.useEffect)(()=>{if(r||o.current)return;let e=nt();if(!e)return;o.current=!0;let t=!1,n=null,i=()=>{let t=Ne(e);t!==null&&(n=t,Z(t))},a=()=>{t=!0},s=()=>{n!==null&&Math.abs(window.scrollY-n)>40&&(t=!0)},c={passive:!0};return window.addEventListener(`wheel`,a,c),window.addEventListener(`touchstart`,a,c),window.addEventListener(`keydown`,a,c),window.addEventListener(`scroll`,s,c),i(),document.fonts.ready.then(()=>{t||requestAnimationFrame(()=>{t||i()})}),()=>{window.removeEventListener(`wheel`,a,c),window.removeEventListener(`touchstart`,a,c),window.removeEventListener(`keydown`,a,c),window.removeEventListener(`scroll`,s,c)}},[r]),a===`shri-health`?(0,U.jsx)(g.Suspense,{fallback:bt,children:(0,U.jsx)(vt,{})}):r?(0,U.jsx)(g.Suspense,{fallback:bt,children:(0,U.jsx)(yt,{role:ot(r)})}):(0,U.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,U.jsx)(Pe,{}),(0,U.jsx)(`section`,{id:`hero`,children:(0,U.jsx)(Ve,{})}),(0,U.jsxs)(`div`,{ref:e,style:{position:`relative`,overflow:`clip`},children:[(0,U.jsx)(`div`,{ref:t,id:`about`,style:{position:`sticky`,top:0,zIndex:1},children:(0,U.jsx)(He,{})}),(0,U.jsx)(`div`,{ref:n,id:`focus`,style:{position:`sticky`,top:0,zIndex:2,willChange:`transform`,minHeight:`max-content`},children:(0,U.jsx)(We,{})})]}),(0,U.jsx)(qe,{}),(0,U.jsx)(st,{}),(0,U.jsx)(`footer`,{id:`footer`,children:(0,U.jsx)(ut,{})})]})}var St=class extends g.Component{constructor(e){super(e),this.state={failed:!1}}static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(e,t){console.error(`SHRI-AI: a page section failed to render.`,e,t?.componentStack)}render(){return this.state.failed?(0,U.jsx)(`main`,{role:`alert`,style:{minHeight:`100dvh`,display:`grid`,placeItems:`center`,padding:`2rem`,fontFamily:`var(--font-sans, 'DM Sans', system-ui, sans-serif)`,textAlign:`center`,color:`#14141e`,background:`#ffffff`},children:(0,U.jsxs)(`div`,{style:{maxWidth:`28rem`},children:[(0,U.jsx)(`h1`,{style:{margin:`0 0 0.75rem`,fontSize:`1.5rem`,fontWeight:500},children:`Something went wrong`}),(0,U.jsx)(`p`,{style:{margin:`0 0 1.5rem`,color:`#44444e`,lineHeight:1.6},children:`This page couldn’t load properly. Reloading usually fixes it.`}),(0,U.jsx)(`button`,{type:`button`,onClick:()=>window.location.reload(),style:{cursor:`pointer`,padding:`0.7rem 1.4rem`,border:0,borderRadius:999,background:`#14141e`,color:`#ffffff`,font:`inherit`,fontWeight:500},children:`Reload`}),` `,(0,U.jsx)(`a`,{href:`/`,style:{marginLeft:`1rem`,color:`#3A82C4`},children:`Go to the home page`})]})}):this.props.children}};Oe.createRoot(document.getElementById(`root`)).render((0,U.jsx)(g.StrictMode,{children:(0,U.jsx)(St,{children:(0,U.jsx)(a,{features:c,strict:!0,children:(0,U.jsx)(xt,{})})})}));export{_ as i,it as n,z as r,lt as t};