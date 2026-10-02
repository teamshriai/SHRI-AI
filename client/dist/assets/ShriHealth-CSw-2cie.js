import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{i as t,r as n,t as r}from"./react-xSxboM_v.js";import{n as i,r as a}from"./motion-B1rJ_i3q.js";import{i as o,r as s,t as c}from"./index-B-uKHWKB.js";var l={name:`arrow-up-right`,size:24,node:[[`path`,{d:`M7 7h10v10`,key:`1tivn9`}],[`path`,{d:`M7 17 17 7`,key:`1vkiza`}]]};l.node;var u=o(l),d={name:`clipboard-plus`,size:24,node:[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M9 14h6`,key:`159ibu`}],[`path`,{d:`M12 17v-6`,key:`1y8rbf`}]]};d.node;var f=o(d),p={name:`flask-conical`,size:24,node:[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]};p.node;var m=o(p),h={name:`moon`,size:24,node:[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]};h.node;var g=o(h),_={name:`package-check`,size:24,node:[[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`path`,{d:`m16 17 2 2 4-4`,key:`uh5qu3`}],[`path`,{d:`M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753`,key:`kpkbpo`}],[`path`,{d:`M3.29 7 12 12l8.71-5`,key:`19ckod`}],[`path`,{d:`m7.5 4.27 8.997 5.148`,key:`9yrvtv`}]]};_.node;var v=o(_),y={name:`pill`,size:24,node:[[`path`,{d:`m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z`,key:`wa1lgi`}],[`path`,{d:`m8.5 8.5 7 7`,key:`rvfmvr`}]]};y.node;var b=o(y),x={name:`sun`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]};x.node;var S=o(x),C=e(t(),1),w=n(),T=r(),E=`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 108'%3E%3Cpath d='M0 0H108A28 28 0 0 1 80 28H76A48 48 0 0 0 28 76V80A28 28 0 0 1 0 108Z'/%3E%3C/svg%3E")`,D=`
.npc {
  --npc-muted: #eef0f4;
  --npc-chip: #f1f2f6;
  --npc-title: var(--ink);
  --npc-text: var(--ink-soft);

  container-type: inline-size;
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  outline: none;
  transition: translate 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.npc:hover { color: inherit; }
.npc:focus-visible { outline: 2px solid #3A82C4; outline-offset: 4px; }

/* Geometry, resolved against the card's width (cqi). */
.npc-media {
  --npc-disc: clamp(42px, 20cqi, 64px);
  --npc-tile: calc(var(--npc-disc) * 1.6875);
  --npc-radius: clamp(16px, 8cqi, 28px);
  position: relative;
}
.npc-cover {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: var(--npc-radius);
  background: var(--npc-muted);
  /* The notch. The two fills overlap the tile by 1px so no seam shows. */
  -webkit-mask-image: ${E}, linear-gradient(#000, #000), linear-gradient(#000, #000);
  mask-image: ${E}, linear-gradient(#000, #000), linear-gradient(#000, #000);
  -webkit-mask-size: var(--npc-tile) var(--npc-tile), calc(100% - var(--npc-tile) + 1px) 100%, 100% calc(100% - var(--npc-tile) + 1px);
  mask-size: var(--npc-tile) var(--npc-tile), calc(100% - var(--npc-tile) + 1px) 100%, 100% calc(100% - var(--npc-tile) + 1px);
  -webkit-mask-position: right bottom, left top, left top;
  mask-position: right bottom, left top, left top;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
.npc-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.5s cubic-bezier(0.22, 1, 0.36, 1), filter 0.5s ease;
}
.npc-cover::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to top, color-mix(in srgb, var(--npc-accent, #000) 24%, transparent), transparent 48%);
  pointer-events: none;
}
.npc-badge {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding-top: clamp(0.6rem, 5cqi, 1rem);
  pointer-events: none;
}
.npc-badge span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.32);
  padding: 0.22rem 0.6rem;
  font-size: 11px;
  font-weight: var(--fw-medium);
  letter-spacing: 0.01em;
  color: #fff;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}
.npc-badge span::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--npc-accent, #fff);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.55);
}

/* The arrow, nested in the notch. */
.npc-disc {
  position: absolute;
  right: 0;
  bottom: 0;
  width: var(--npc-disc);
  height: var(--npc-disc);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--npc-accent, var(--npc-chip));
  color: var(--npc-accent-fg, var(--ink));
  box-shadow: 0 10px 22px -10px color-mix(in srgb, var(--npc-accent, #000) 75%, transparent);
  transition: background-color 0.3s ease, color 0.3s ease, scale 0.3s ease, box-shadow 0.3s ease;
}
.npc-disc svg { width: 31%; height: 31%; min-width: 15px; min-height: 15px; transition: translate 0.3s ease; }
.npc:hover .npc-disc,
.npc:focus-visible .npc-disc {
  background: color-mix(in srgb, var(--npc-accent, var(--ink)) 82%, #000);
  color: var(--npc-accent-fg, #fff);
  scale: 1.06;
  box-shadow: 0 14px 28px -10px color-mix(in srgb, var(--npc-accent, #000) 85%, transparent);
}
.npc:hover .npc-disc svg,
.npc:focus-visible .npc-disc svg { translate: 2px -2px; }

.npc-rule {
  display: block;
  width: 28px;
  height: 3px;
  margin-top: clamp(0.9rem, 6cqi, 1.25rem);
  border-radius: 2px;
  background: var(--npc-accent, var(--ink));
  transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.npc:hover .npc-rule,
.npc:focus-visible .npc-rule { width: 44px; }
.npc-title {
  margin: 0.6rem 0 0;
  font-size: clamp(1.05rem, 7cqi, 1.5rem);
  font-weight: var(--fw-medium);
  letter-spacing: -0.02em;
  line-height: 1.25;
  color: var(--npc-title);
  transition: color 0.3s ease;
}
.npc:hover .npc-title,
.npc:focus-visible .npc-title { color: color-mix(in srgb, var(--npc-accent, var(--ink)) 85%, #000); }
.npc-desc {
  margin: 0.4rem 0 0;
  font-size: clamp(0.8rem, 5.2cqi, 0.875rem);
  font-weight: var(--fw-light);
  line-height: 1.55;
  color: var(--npc-text);
}
.npc-tags {
  list-style: none;
  margin: 0.85rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.npc-tags li {
  border-radius: 6px;
  background: color-mix(in srgb, var(--npc-accent, #8a8a9c) 11%, #fff);
  padding: 0.26rem 0.5rem;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: color-mix(in srgb, var(--npc-accent, #55556a) 80%, #000);
}

/* ── Framed: a thin outline, filling the cell so rows stay uniform ──
   Light pages: a white surface with a soft shadow; on hover or focus the
   outline takes the accent and the card a faint tint and accent shadow. */
.npc--framed {
  height: 100%;
  padding: 8px 8px 16px;
  border: 1px solid var(--npc-frame, rgba(20, 20, 30, 0.2));
  border-radius: 26px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 10px 26px rgba(20, 20, 30, 0.05);
  transition: translate 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}
.npc--framed .npc-rule,
.npc--framed .npc-title,
.npc--framed .npc-desc,
.npc--framed .npc-tags { margin-inline: 6px; }
.npc--framed:hover,
.npc--framed:focus-visible {
  border-color: var(--npc-accent, currentColor);
  background: color-mix(in srgb, var(--npc-accent, #8a8a9c) 4%, #fff);
  box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 20px 44px color-mix(in srgb, var(--npc-accent, #14141e) 16%, transparent);
}

/* ── Dark pages ── */
.npc--dark {
  --npc-muted: rgba(255, 255, 255, 0.06);
  --npc-chip: rgba(255, 255, 255, 0.12);
  --npc-title: #ffffff;
  --npc-text: rgba(255, 255, 255, 0.88);
  --npc-frame: rgba(255, 255, 255, 0.55);
}
.npc--dark.npc--framed { background: rgba(255, 255, 255, 0.025); box-shadow: none; }
.npc--dark.npc--framed:hover,
.npc--dark.npc--framed:focus-visible {
  border-color: color-mix(in srgb, var(--npc-accent, currentColor) 80%, #fff);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: none;
}
.npc--dark:focus-visible { outline-color: #8cc0f0; }
.npc--dark .npc-disc { color: var(--npc-accent-fg, #fff); }
.npc--dark .npc-rule { background: var(--npc-accent, #fff); }
.npc--dark:hover .npc-title,
.npc--dark:focus-visible .npc-title { color: color-mix(in srgb, var(--npc-accent, #fff) 55%, #fff); }
.npc--dark .npc-tags li {
  background: color-mix(in srgb, var(--npc-accent, #8a8a9c) 26%, transparent);
  color: color-mix(in srgb, var(--npc-accent, #fff) 25%, #fff);
}

/* Hover-capable devices only: lift, zoom, and the optional black-and-white
   cover. */
@media (hover: hover) {
  .npc:hover { translate: 0 -4px; }
  .npc:hover .npc-img { scale: 1.04; }
  .npc--mono .npc-img { filter: grayscale(1); }
  .npc--mono:hover .npc-img,
  .npc--mono:focus-visible .npc-img { filter: grayscale(0); }
}
.npc--mono:focus-visible .npc-img { filter: grayscale(0); }

@media (prefers-reduced-motion: reduce) {
  .npc, .npc--framed, .npc-img, .npc-disc, .npc-disc svg, .npc-rule, .npc-title { transition: none; }
  .npc:hover { translate: none; }
  .npc:hover .npc-img { scale: 1; }
  .npc:hover .npc-rule, .npc:focus-visible .npc-rule { width: 28px; }
  .npc:hover .npc-disc, .npc:focus-visible .npc-disc { scale: 1; }
  .npc:hover .npc-disc svg, .npc:focus-visible .npc-disc svg { translate: none; }
}
`;function O({href:e,title:t,description:n,image:r,imageAlt:i=``,imageWidth:a,imageHeight:o,imageSrcSet:s,imageSizes:c,badge:l,tags:d=[],monochrome:f=!1,tone:p=`light`,framed:m=!1,accent:h,accentForeground:g,ariaLabel:_,className:v=``}){let y=e?`a`:`div`,b=e?{href:e,"aria-label":_}:{},x=[`npc`,p===`dark`&&`npc--dark`,m&&`npc--framed`,f&&`npc--mono`,v].filter(Boolean).join(` `);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`style`,{href:`notched-project-card`,precedence:`default`,children:D}),(0,T.jsxs)(y,{...b,className:x,style:{"--npc-accent":h,"--npc-accent-fg":g??(h?`#fff`:void 0)},children:[(0,T.jsxs)(`div`,{className:`npc-media`,children:[(0,T.jsxs)(`div`,{className:`npc-cover`,children:[(0,T.jsx)(`img`,{className:`npc-img`,src:r,srcSet:s,sizes:s?c:void 0,alt:i,width:a,height:o,loading:`lazy`,decoding:`async`,draggable:!1}),l&&(0,T.jsx)(`div`,{className:`npc-badge`,children:(0,T.jsx)(`span`,{children:l})})]}),(0,T.jsx)(`span`,{className:`npc-disc`,"aria-hidden":`true`,children:(0,T.jsx)(u,{strokeWidth:2})})]}),(0,T.jsx)(`span`,{className:`npc-rule`,"aria-hidden":`true`}),(0,T.jsx)(`h3`,{className:`npc-title`,children:t}),n&&(0,T.jsx)(`p`,{className:`npc-desc`,children:n}),d.length>0&&(0,T.jsx)(`ul`,{className:`npc-tags`,children:d.map((e,t)=>(0,T.jsx)(`li`,{children:e},`${e}-${t}`))})]})]})}var k=`shri-health:theme`,A={dark:`#07080b`,light:`#ffffff`},j=e=>e===`dark`||e===`light`;function M(){try{let e=window.localStorage.getItem(k);return j(e)?e:`dark`}catch{return`dark`}}function N(e){try{window.localStorage.setItem(k,e)}catch{}}var P=e=>({image:`/images/shri-health/${e}.webp`,imageSrcSet:`/images/shri-health/${e}-640.webp 640w, /images/shri-health/${e}.webp 1200w`}),F=`(max-width: 1199px) 300px, 19vw`,I=[{id:`care-entry`,...P(`care-entry`),imageAlt:`A receptionist helping two patients at a bright clinic reception desk`,label:`Care Entry`,desc:`Patient registration, intake and visit check-in.`,Icon:f,accent:`#b52a6b`,demoUrl:`https://www.shri-ai.org/dev/care-entry/`},{id:`doctor`,...P(`clinician`),imageAlt:`A doctor with a stethoscope measuring a senior patient's blood pressure at a clinic desk`,label:`Clinician`,desc:`Patient records, consultations and care notes.`,Icon:s,accent:`#3A82C4`,demoUrl:`https://www.shri-ai.org/dev/clinician/`},{id:`pharma`,...P(`pharmacy`),imageAlt:`Pharmacy aisles with shelves fully stocked with medicine boxes`,label:`Pharmacy`,desc:`Prescriptions, dispensing and medicine stock.`,Icon:b,accent:`#7B6FCD`,demoUrl:`https://www.shri-ai.org/dev/pharmacy/`},{id:`laboratory`,...P(`lab`),imageAlt:`A laboratory scientist in a white coat and blue gloves at a lab bench with glassware`,label:`Lab`,desc:`Samples, tests and result reporting.`,Icon:m,accent:`#1f9163`,demoUrl:`https://www.shri-ai.org/dev/laboratory/`},{id:`procurement`,...P(`procurement`),imageAlt:`A worker managing stock in a medical supply warehouse aisle lined with blue bins`,label:`Procurement`,desc:`Purchase orders, vendors and supply tracking.`,Icon:v,accent:`#a8690f`,demoUrl:`https://www.shri-ai.org/dev/procurement/`}],L=Object.fromEntries(I.map(e=>[e.id,e])),R=[{modules:[`care-entry`],label:`Care Entry`,note:`Registration & triage`},{modules:[`doctor`],label:`Clinician`,note:`Consultation & orders`},{modules:[`pharma`,`laboratory`],label:`Pharmacy & Lab`,note:`Dispensing & tests`},{modules:[`procurement`],label:`Procurement`,note:`Stock & suppliers`}],z={initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6,ease:[.22,1,.36,1]}},B=`
          color-scheme: light;
          --sh-bg: ${A.light};
          --sh-text: var(--ink);
          --sh-soft: var(--ink-soft);
          --sh-muted: var(--ink-muted);
          --sh-line: rgba(20, 20, 30, 0.08);
          --sh-glow-blue: rgba(58, 130, 196, 0.1);
          --sh-glow-violet: rgba(123, 111, 205, 0.09);
          --sh-glow-green: rgba(31, 145, 99, 0.07);
          --sh-bar-bg: rgba(255, 255, 255, 0.88);
          --sh-foot-bg: rgba(255, 255, 255, 0.6);
          --sh-btn-line: rgba(20, 20, 30, 0.16);
          --sh-btn-hover-bg: #f4f5f8;
          --sh-btn-hover-line: rgba(20, 20, 30, 0.26);
          --sh-title-g1: #7B6FCD;
          --sh-title-g2: #3A82C4;
          --sh-title-g3: #a8690f;
          --sh-scrollbar: rgba(20, 20, 30, 0.25);
          --sh-track-opacity: 0.55;
          --sh-focus: #3A82C4;
          --sh-theme-icon: #a8690f;
          --sh-plate-line: rgba(20, 20, 30, 0.1);
          --sh-plate-shadow: 0 6px 18px -10px rgba(20, 20, 30, 0.35);
          --sh-rule: rgba(20, 20, 30, 0.14);`,V=e=>`
        ${e} .sh-step-icons svg { color: var(--ic); }`,H=`
        .sh-root {
          /* Dark — the designed default. */
          color-scheme: dark;
          --sh-bg: ${A.dark};
          --sh-text: #ffffff;
          --sh-soft: rgba(255, 255, 255, 0.9);
          --sh-muted: rgba(255, 255, 255, 0.72);
          --sh-line: rgba(255, 255, 255, 0.1);
          --sh-glow-blue: rgba(58, 130, 196, 0.16);
          --sh-glow-violet: rgba(123, 111, 205, 0.13);
          --sh-glow-green: rgba(31, 145, 99, 0.08);
          --sh-bar-bg: rgba(7, 8, 11, 0.72);
          --sh-foot-bg: rgba(7, 8, 11, 0.6);
          --sh-btn-line: rgba(255, 255, 255, 0.18);
          --sh-btn-hover-bg: rgba(255, 255, 255, 0.08);
          --sh-btn-hover-line: rgba(255, 255, 255, 0.3);
          --sh-title-g1: #b3a8f5;
          --sh-title-g2: #74b6ee;
          --sh-title-g3: #f2b766;
          --sh-scrollbar: rgba(255, 255, 255, 0.25);
          --sh-track-opacity: 0.8;
          --sh-focus: #8cc0f0;
          --sh-theme-icon: #a9c9f5;
          --sh-plate-line: rgba(255, 255, 255, 0);
          --sh-plate-shadow: 0 8px 22px -12px rgba(0, 0, 0, 0.7);
          --sh-rule: rgba(255, 255, 255, 0.22);
          /* Slimmer side margins than the rest of the site, so the page's
             containers use as much of the screen as possible. */
          --sh-gutter: clamp(0.9rem, 2.5vw, 2.5rem);

          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          /* Soft colour glows over the theme's base colour. It scrolls with
             the page (no background-attachment: fixed), so it costs nothing
             to paint and behaves the same on iOS. */
          background:
            radial-gradient(ellipse 50% 38% at 0% 0%, var(--sh-glow-blue), transparent 70%),
            radial-gradient(ellipse 45% 34% at 100% 0%, var(--sh-glow-violet), transparent 70%),
            radial-gradient(ellipse 60% 40% at 50% 100%, var(--sh-glow-green), transparent 70%),
            var(--sh-bg);
          font-family: var(--font-sans);
          color: var(--sh-text);
        }
        .sh-root[data-theme='light'] {${B}
        }
        ${V(`.sh-root[data-theme='light']`)}

        /* A theme switch applies in one step: transitions are held for the
           frame of the switch, so nothing (card titles, frames, buttons)
           fades in late. The toggle's own icons are the one exception. */
        .sh-root[data-theme-switching] *:not(.sh-theme-icon),
        .sh-root[data-theme-switching] *::before,
        .sh-root[data-theme-switching] *::after { transition: none !important; }
        /* The browser's cross-fade between the two themes, where supported. */
        ::view-transition-old(root),
        ::view-transition-new(root) { animation-duration: 0.3s; }

        .sh-wrap { width: min(100%, 1920px); margin-inline: auto; }

        /* ── Top bar ── */
        .sh-bar {
          position: sticky;
          top: 0;
          z-index: 10;
          padding: 0 var(--sh-gutter);
          background: var(--sh-bar-bg);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          backdrop-filter: blur(14px) saturate(140%);
          border-bottom: 1px solid var(--sh-line);
        }
        .sh-bar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          min-height: calc(var(--sh-plate) + 20px);
        }
        /* Brands: SHRI-AI (home) and the partner, Indo States Health, each on
           a white plate so both logos read the same in dark and light. Every
           size follows --sh-plate, the plate height (50px: a 46px SHRI-AI
           mark and a 38px-tall partner logo). */
        .sh-bar { --sh-plate: 50px; }
        .sh-brands { display: flex; align-items: center; gap: 0.875rem; min-width: 0; }
        .sh-brand,
        .sh-partner {
          flex: none;
          display: inline-flex;
          align-items: center;
          height: var(--sh-plate);
          border-radius: calc(var(--sh-plate) * 0.2);
          background: #fff;
          box-shadow: 0 0 0 1px var(--sh-plate-line), var(--sh-plate-shadow);
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .sh-brand { width: var(--sh-plate); justify-content: center; }
        .sh-partner { padding: 0 calc(var(--sh-plate) * 0.22); }
        .sh-brand img {
          display: block;
          width: calc(var(--sh-plate) - 4px);
          height: calc(var(--sh-plate) - 4px);
          object-fit: contain;
        }
        .sh-partner img { display: block; width: auto; height: calc(var(--sh-plate) * 0.762); }
        @media (hover: hover) {
          .sh-brand:hover,
          .sh-partner:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 0 1px var(--sh-plate-line), 0 12px 26px -12px rgba(0, 0, 0, 0.5);
          }
        }
        .sh-brands-rule { flex: none; width: 1px; height: calc(var(--sh-plate) * 0.6); background: var(--sh-rule); }
        .sh-wordmark {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 1.375rem;
          font-weight: var(--fw-medium);
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        /* ── Theme switch ──
           The icon shows the current theme: a moon while dark, a sun while
           light. Both are drawn in the same spot and cross-fade with a small
           turn; the button's label names the action. */
        .sh-theme {
          position: relative;
          flex: none;
          display: inline-grid;
          place-items: center;
          width: 46px;
          height: 46px;
          padding: 0;
          border-radius: 50%;
          /* Full shorthand: Tailwind's preflight leaves buttons border-less
             and without a pointer cursor. */
          border: 1px solid var(--sh-btn-line);
          background: transparent;
          color: var(--sh-theme-icon);
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease;
        }
        .sh-theme-icon {
          grid-area: 1 / 1;
          display: block;
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .sh-theme-sun { opacity: 0; transform: rotate(-90deg) scale(0.5); }
        .sh-root[data-theme='light'] .sh-theme-moon { opacity: 0; transform: rotate(90deg) scale(0.5); }
        .sh-root[data-theme='light'] .sh-theme-sun { opacity: 1; transform: none; }
        @media (hover: hover) {
          .sh-theme:hover { background: var(--sh-btn-hover-bg); border-color: var(--sh-btn-hover-line); }
        }
        .sh-theme:active { transform: scale(0.94); }

        .sh-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(2.25rem, 4vw, 3.25rem);
          padding: clamp(1.25rem, 2.5vw, 2rem) var(--sh-gutter) clamp(2.5rem, 5vw, 3.5rem);
        }

        /* ── Intro ──
           No box and no picture: the heading and quick-launch row sit
           straight on the page, aligned with the sections below. */
        .sh-banner-text {
          min-width: 0;
          padding-block: clamp(1rem, 2.4vw, 1.75rem) 0;
        }
        .sh-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.55rem 0.9rem;
          margin: 0 0 0.85rem;
        }
        .sh-maker {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          letter-spacing: 0.01em;
          color: var(--sh-soft);
        }
        .sh-maker img { width: 22px; height: 22px; object-fit: contain; display: block; border-radius: 5px; background: #fff; padding: 1px; }
        .sh-title {
          margin: 0;
          font-size: clamp(2.5rem, 4.4vw, 3.6rem);
          font-weight: var(--fw-light);
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: var(--sh-text);
          outline: none;
        }
        .sh-title-em {
          font-weight: var(--fw-regular);
          background: linear-gradient(135deg, var(--sh-title-g1) 0%, var(--sh-title-g2) 50%, var(--sh-title-g3) 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shGradient 8s ease infinite;
        }
        @keyframes shGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .sh-lede {
          margin: 0.75rem 0 0;
          max-width: 48ch;
          font-size: var(--fs-lead);
          font-weight: var(--fw-light);
          line-height: var(--lh-body);
          color: var(--sh-soft);
        }
        /* ── Section heading ── */
        .sh-head { margin: 0 0 1.25rem; }
        .sh-kicker {
          margin: 0 0 0.4rem;
          font-size: var(--fs-eyebrow);
          font-weight: var(--fw-medium);
          letter-spacing: var(--ls-eyebrow);
          text-transform: uppercase;
          color: var(--sh-muted);
        }
        .sh-heading {
          margin: 0;
          font-size: clamp(1.45rem, 2.4vw, 1.9rem);
          font-weight: var(--fw-light);
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: var(--sh-text);
        }

        /* ── Module cards: one row, always ──
           Desktop: five cards side by side. Narrower screens: the same
           single row becomes a native swipe row that snaps card by card,
           bleeding to the screen edges so the next card peeks in. Vertical
           padding keeps the hover lift and disc glow unclipped. */
        .sh-modules {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(0.75rem, 1vw, 1.1rem);
          padding-block: 8px 12px;
        }
        /* Each cell is a flex box so its framed card fills the full row
           height: every card the same size whatever its text. */
        .sh-module { min-width: 0; display: flex; }
        .sh-module > .npc { flex: 1; }
        /* A slightly shorter card than the component's default: a 16:11
           photo instead of 4:3 (the 4:3 images just lose a sliver top and
           bottom) and a little less frame padding. */
        .sh-module .npc-cover { aspect-ratio: 16 / 11; }
        .sh-module .npc--framed { padding: 7px 7px 14px; }
        /* Below ~210px a card gets cramped, so the row turns into a swipe row
           before that happens. */
        @media (max-width: 1199px) {
          .sh-modules {
            display: flex;
            /* Start-aligned: centring overflowing content would push the
               first cards past the scroll origin, out of reach. */
            justify-content: flex-start;
            gap: 1rem;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            margin-inline: calc(-1 * var(--sh-gutter));
            padding: 8px var(--sh-gutter) 18px;
            scroll-padding-inline: var(--sh-gutter);
            scrollbar-width: thin;
            scrollbar-color: var(--sh-scrollbar) transparent;
          }
          .sh-module { flex: 0 0 clamp(250px, 74vw, 300px); scroll-snap-align: start; }
        }

        /* ── How it works ── */
        .sh-flow { padding-top: clamp(1.75rem, 3vw, 2.25rem); border-top: 1px solid var(--sh-line); }
        .sh-steps {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.75rem, 1.6vw, 1.25rem);
        }
        .sh-step { position: relative; min-width: 0; padding-top: 1.2rem; }
        /* A coloured track, one segment per step, blending into the next. */
        .sh-step::before {
          content: '';
          position: absolute;
          inset: 0 0 auto;
          height: 2px;
          background: linear-gradient(90deg, var(--s-a), var(--s-b));
          opacity: var(--sh-track-opacity);
        }
        .sh-step::after {
          content: '';
          position: absolute;
          top: -3px;
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--s-a);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--s-a) 30%, transparent);
        }
        .sh-step-icons { display: flex; gap: 0.4rem; line-height: 0; margin-bottom: 0.55rem; }
        .sh-step-icons svg { color: color-mix(in srgb, var(--ic) 70%, #fff); }
        .sh-step-label { display: block; font-size: 0.95rem; font-weight: var(--fw-medium); color: var(--sh-text); }
        .sh-step-note { display: block; margin-top: 0.15rem; font-size: var(--fs-sm); font-weight: var(--fw-light); color: var(--sh-muted); }

        /* ── Footer ── */
        .sh-foot { padding: 0 var(--sh-gutter); border-top: 1px solid var(--sh-line); background: var(--sh-foot-bg); }
        .sh-foot-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem 1.5rem;
          padding: 1.1rem 0;
          font-size: 0.78rem;
          color: var(--sh-muted);
        }

        /* One focus ring for every link and button on the page, cards
           included, in the theme's own colour. */
        .sh-root a:focus-visible, .sh-root button:focus-visible { outline: 2px solid var(--sh-focus); outline-offset: 3px; }

        /* ── Responsive ── */
        /* Narrow screens: the H1 already names the page, so the wordmark
           makes room, and the plates scale with the width so both logos and
           the theme switch always fit on one line (full size from 360px). */
        @media (max-width: 540px) {
          .sh-wordmark { display: none; }
          .sh-bar { --sh-plate: clamp(40px, 14vw, 50px); }
        }
        @media (max-width: 380px) {
          .sh-brands { gap: 0.5rem; }
        }
        @media (max-width: 640px) {
          .sh-steps { grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 1.5rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sh-title-em { animation: none; }
          .sh-theme, .sh-theme-icon, .sh-brand, .sh-partner { transition: none; }
          .sh-theme:active { transform: none; }
          ::view-transition-group(*),
          ::view-transition-old(*),
          ::view-transition-new(*) { animation: none !important; }
        }

        /* Paper is white: print the light theme whatever the screen shows. */
        @media print {
          .sh-root, .sh-root[data-theme] {${B}
          }
          ${V(`.sh-root`)}
          .sh-theme { display: none; }
          .sh-root .npc--dark {
            --npc-title: var(--ink);
            --npc-text: var(--ink-soft);
            --npc-frame: rgba(20, 20, 30, 0.2);
          }
          .sh-root .npc--dark.npc--framed { background: #fff; }
        }
`,U=()=>{let e=(0,C.useRef)(null),t=(0,C.useRef)(null),n=(0,C.useRef)(null),[r,o]=(0,C.useState)(M),s=r===`dark`,l=s?`Switch to light theme`:`Switch to dark theme`;return(0,C.useEffect)(()=>{let t=document.title;return document.title=`SHRI-Health | SHRI-AI`,e.current?.focus({preventScroll:!0}),()=>{document.title=t}},[]),(0,C.useLayoutEffect)(()=>{let e=document.documentElement,t=document.body,r=t.style.backgroundColor,i=e.style.colorScheme,a=document.querySelector(`meta[name="theme-color"]`),o=!a,s=a?a.getAttribute(`content`):null;return o&&(a=document.createElement(`meta`),a.setAttribute(`name`,`theme-color`),document.head.appendChild(a)),n.current=a,()=>{t.style.backgroundColor=r,e.style.colorScheme=i,o?a.remove():s===null?a.removeAttribute(`content`):a.setAttribute(`content`,s),n.current=null}},[]),(0,C.useLayoutEffect)(()=>{document.body.style.backgroundColor=A[r],document.documentElement.style.colorScheme=r,n.current?.setAttribute(`content`,A[r])},[r]),(0,C.useEffect)(()=>{let e=e=>{(e.key===k||e.key===null)&&o(j(e.newValue)?e.newValue:`dark`)};return window.addEventListener(`storage`,e),()=>window.removeEventListener(`storage`,e)},[]),(0,T.jsxs)(a,{reducedMotion:`user`,children:[(0,T.jsx)(`style`,{children:H}),(0,T.jsxs)(`div`,{className:`sh-root`,ref:t,"data-theme":r,children:[(0,T.jsx)(`header`,{className:`sh-bar`,children:(0,T.jsxs)(`div`,{className:`sh-wrap sh-bar-inner`,children:[(0,T.jsxs)(`div`,{className:`sh-brands`,children:[(0,T.jsx)(`a`,{className:`sh-brand`,href:`/`,"aria-label":`SHRI-AI home`,children:(0,T.jsx)(`img`,{src:`/images/brand/shri-ai-logo.webp`,alt:``,width:46,height:46,draggable:!1})}),(0,T.jsx)(`span`,{className:`sh-brands-rule`,"aria-hidden":`true`}),(0,T.jsx)(`a`,{className:`sh-partner`,href:`https://indostates.com`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Indo States Health (opens in a new tab)`,children:(0,T.jsx)(`img`,{src:`/images/shri-health/logo-indostates.webp`,alt:`Indo States Health`,width:156,height:38,draggable:!1})}),(0,T.jsx)(`b`,{className:`sh-wordmark`,children:`SHRI-Health`})]}),(0,T.jsxs)(`button`,{type:`button`,className:`sh-theme`,onClick:()=>{let e=s?`light`:`dark`;N(e);let n=t.current,r=()=>{n?.setAttribute(`data-theme-switching`,``),(0,w.flushSync)(()=>o(e)),n&&(getComputedStyle(n).color,requestAnimationFrame(()=>{requestAnimationFrame(()=>n.removeAttribute(`data-theme-switching`))}))};!window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches&&typeof document.startViewTransition==`function`?document.startViewTransition(r):r()},"aria-label":l,title:l,children:[(0,T.jsx)(g,{className:`sh-theme-icon sh-theme-moon`,size:20,strokeWidth:1.8,"aria-hidden":`true`}),(0,T.jsx)(S,{className:`sh-theme-icon sh-theme-sun`,size:20,strokeWidth:1.8,"aria-hidden":`true`})]})]})}),(0,T.jsxs)(`main`,{className:`sh-main`,children:[(0,T.jsx)(i.section,{className:`sh-wrap`,"aria-labelledby":`sh-title`,...z,children:(0,T.jsxs)(`div`,{className:`sh-banner-text`,children:[(0,T.jsx)(`div`,{className:`sh-meta`,children:(0,T.jsxs)(`span`,{className:`sh-maker`,children:[(0,T.jsx)(`img`,{src:`/images/brand/shri-ai-logo.webp`,alt:``,draggable:!1}),`A product of SHRI-AI`]})}),(0,T.jsxs)(`h1`,{className:`sh-title`,id:`sh-title`,ref:e,tabIndex:-1,children:[`SHRI-`,(0,T.jsx)(`span`,{className:`sh-title-em`,children:`Health`})]}),(0,T.jsx)(`p`,{className:`sh-lede`,children:`One connected care platform for care entry, clinicians, pharmacy, laboratory and procurement management.`})]})}),(0,T.jsxs)(`section`,{className:`sh-wrap`,"aria-labelledby":`sh-modules-heading`,children:[(0,T.jsxs)(`div`,{className:`sh-head`,children:[(0,T.jsx)(`p`,{className:`sh-kicker`,children:`Modules`}),(0,T.jsx)(`h2`,{className:`sh-heading`,id:`sh-modules-heading`,children:`Open a module`})]}),(0,T.jsx)(i.div,{className:`sh-modules`,...z,children:I.map(({id:e,label:t,desc:n,image:i,imageSrcSet:a,imageAlt:o,accent:s,demoUrl:c})=>(0,T.jsx)(`div`,{className:`sh-module`,children:(0,T.jsx)(O,{href:c||void 0,ariaLabel:`Open the ${t} demo`,title:t,description:n,image:i,imageSrcSet:a,imageSizes:F,imageAlt:o,imageWidth:1200,imageHeight:900,badge:c?void 0:`Coming soon`,accent:s,tone:r,framed:!0})},e))})]}),(0,T.jsxs)(i.section,{className:`sh-wrap sh-flow`,"aria-labelledby":`sh-flow-heading`,...z,children:[(0,T.jsxs)(`div`,{className:`sh-head`,children:[(0,T.jsx)(`p`,{className:`sh-kicker`,children:`How it works`}),(0,T.jsx)(`h2`,{className:`sh-heading`,id:`sh-flow-heading`,children:`From registration to results`})]}),(0,T.jsx)(`ol`,{className:`sh-steps`,children:R.map((e,t)=>{let n=L[e.modules[0]],r=R[t+1]?L[R[t+1].modules[0]]:n;return(0,T.jsxs)(`li`,{className:`sh-step`,style:{"--s-a":n.accent,"--s-b":r.accent},children:[(0,T.jsx)(`span`,{className:`sh-step-icons`,"aria-hidden":`true`,children:e.modules.map(e=>{let{Icon:t,accent:n}=L[e];return(0,T.jsx)(t,{size:22,strokeWidth:1.7,style:{"--ic":n}},e)})}),(0,T.jsx)(`span`,{className:`sh-step-label`,children:e.label}),(0,T.jsx)(`span`,{className:`sh-step-note`,children:e.note})]},e.label)})})]})]}),(0,T.jsx)(`footer`,{className:`sh-foot`,children:(0,T.jsx)(`div`,{className:`sh-wrap sh-foot-inner`,children:(0,T.jsxs)(`span`,{children:[`SHRI-Health is a product of SHRI-AI, Senus Healthcare Research Institute · `,c]})})})]})]})};export{U as default};