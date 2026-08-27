import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        .gl-shape {
          position: absolute;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transform: translateZ(0);
          will-change: transform;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 77%);
          -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 77%);
        }

        .l1-shape {
          width: 14%;
          height: clamp(180px, 52vh, 560px);
          top: -8vh;
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }
        .l2-shape {
          width: 14%;
          height: clamp(90px, 26vh, 280px);
          top: -2vh;
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
        }
        .l1-shape-mob {
          width: 29%;
          height: clamp(160px, 48vh, 400px);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .l2-shape-mob {
          width: 29%;
          height: clamp(80px, 24vh, 200px);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .shapes-desktop { display: block; }
        .shapes-mobile  { display: none;  }

        @media (max-width: 768px) {
          .shapes-desktop { display: none;  }
          .shapes-mobile  { display: block; }
        }

        /* ── DNA clip box ──
         * Sized top-to-bottom of the hero rather than 100vh: the hero is only
         * min-height 88vh, so a 100vh box overshot it and the section's
         * overflow:hidden sliced the strand off with a hard horizontal edge —
         * worse the further you zoomed out, because the overshoot grows.
         * The mask then fades the artwork out at top, bottom and left, so no
         * boundary of the image is ever visible at any zoom level.
         */
        .dna-clip-box {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: clamp(320px, 44vw, 740px);
          overflow: hidden;
          pointer-events: none;
          z-index: 5;
          -webkit-mask-image:
            linear-gradient(to bottom, transparent 0%, #000 11%, #000 82%, transparent 100%),
            linear-gradient(to left, #000 0%, #000 58%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(to bottom, transparent 0%, #000 11%, #000 82%, transparent 100%),
            linear-gradient(to left, #000 0%, #000 58%, transparent 100%);
          mask-composite: intersect;
        }
        /* Negative insets on all four sides, so the artwork always overflows the
         * clip box and its own edges can never enter frame. The previous
         * left:10% + width:100% put the image's left edge 10% INSIDE the box,
         * which showed as a vertical seam at every zoom level. */
        .dna-img {
          position: absolute;
          /* Explicit width/height, not inset: an <img> is a replaced element, so
             width/height:auto resolves to its INTRINSIC size and the right/bottom
             insets are ignored — which collapsed it instead of bleeding it. */
          top: -9%;
          left: -7%;
          width: 114%;
          height: 118%;
          /* Tailwind preflight sets img { max-width: 100% }, which silently
             capped the width and is why the original could only ever reach
             100% and had to shift with left:10% instead of bleeding. */
          max-width: none;
          display: block;
          object-fit: cover;
          object-position: 60% 30%;
          opacity: 0.8;
          user-select: none;
        }

        @media (max-width: 1280px) {
          .l1-shape     { backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
          .l2-shape     { backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px); }
          .dna-clip-box { width: clamp(280px, 42vw, 660px); }
        }
        @media (max-width: 1024px) {
          .l1-shape     { backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); }
          .l2-shape     { backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px); }
          .dna-clip-box { width: clamp(240px, 40vw, 560px); }
        }
        @media (max-width: 768px) {
          .dna-clip-box {
            top: 0; left: 0; right: 0; bottom: 0;
            width: 100%;
            clip-path: none;
            -webkit-clip-path: none;
            z-index: 2;
            -webkit-mask-image: linear-gradient(to bottom, transparent 0%, #000 10%, #000 84%, transparent 100%);
            -webkit-mask-composite: source-in;
            mask-image: linear-gradient(to bottom, transparent 0%, #000 10%, #000 84%, transparent 100%);
            mask-composite: intersect;
          }
          .dna-img {
            top: -8%; left: -6%;
            width: 112%; height: 116%;
            object-position: 55% 50%;
            opacity: 0.12;
          }
        }
        @media (max-width: 480px) {
          .dna-img {
            top: -6%; left: -10%;
            width: 120%; height: 112%;
            object-position: 52% 50%;
            opacity: 0.1;
          }
        }

        /* ── Logo ── */
        .hero-logo-wrap {
          position: relative;
          display: inline-block;
          width:  clamp(52px, 8vw, 280px);
          height: clamp(52px, 8vw, 280px);
          margin-bottom: clamp(4px, 0.8vw, 12px);
          flex-shrink: 0;
        }
        .hero-logo-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }

        @media (max-width: 1024px) {
          .hero-logo-wrap {
            width:  clamp(80px, 16vw, 220px);
            height: clamp(80px, 16vw, 220px);
          }
        }
        @media (max-width: 768px) {
          .hero-logo-wrap {
            width:  clamp(70px, 22vw, 160px);
            height: clamp(70px, 22vw, 160px);
            margin-bottom: clamp(3px, 1.5vw, 10px);
          }
        }
        @media (max-width: 480px) {
          .hero-logo-wrap {
            width:  clamp(60px, 26vw, 130px);
            height: clamp(60px, 26vw, 130px);
          }
        }

        /* ── Hero heading ──
         * Renamed from .hero-heading: Footer.jsx defined that same class name
         * globally, rendered later in the tree, and therefore won on this
         * element — its values (below) are what has actually been shipping,
         * while the six media queries that used to live here were dead code
         * (media queries add no specificity). Those winning values are now
         * declared here explicitly so the heading is unchanged on screen but
         * no longer depends on another component's CSS.
         */
        .hero-h1 {
          font-family: var(--font-sans);
          font-weight: var(--fw-light);
          font-size: var(--fs-display);
          line-height: 1.04;
          letter-spacing: var(--ls-display);
          text-transform: uppercase;
          color: #1a1a24;
          margin: 0 0 clamp(10px, 1.4vw, 22px) 0;
        }
        .hero-h1 .word-ai       { color: #c0392b; font-weight: var(--fw-light); }
        .hero-h1 .word-genomics { color: #2a6db5; font-weight: var(--fw-light); }

        /* ── Support tagline ── */
        .hero-support-text {
          font-family: var(--font-sans);
          font-weight: 300;
          font-size: clamp(13px, 1.35vw, 19px);
          color: #6a6a7e;
          line-height: 1.7;
          margin: 0;
          max-width: clamp(300px, 50vw, 720px);
        }

        @media (max-width: 1280px) {
          .hero-support-text {
            font-size: clamp(13px, 1.28vw, 18px);
            max-width: clamp(280px, 52vw, 660px);
          }
        }
        @media (max-width: 1024px) {
          .hero-support-text {
            font-size: clamp(13px, 1.55vw, 17px);
            max-width: clamp(260px, 60vw, 580px);
          }
        }
        @media (max-width: 768px) {
          .hero-support-text {
            font-size: clamp(13px, 3.2vw, 16px);
            max-width: 100%;
          }
        }
        @media (max-width: 480px) {
          .hero-support-text { font-size: clamp(12.5px, 3.5vw, 15px); }
        }
        @media (max-width: 360px) {
          .hero-support-text { font-size: clamp(12px, 3.8vw, 14px); }
        }

        /*
         * ── OncoTrace link ──
         * Stable, crash-free implementation:
         * - <a> is inline-block so pseudo-elements are predictable
         * - underline is a <span> child (not ::after on inline) — avoids
         *   all Blink/WebKit inline pseudo-element paint bugs
         * - will-change isolated to the animated spans only
         * - animation slowwed to 9s, glow kept gentle
         */
        .oncotrace-wrap {
          display: inline-block;
          position: relative;
          vertical-align: baseline;
          line-height: inherit;
        }

        .oncotrace-link {
          display: inline-block;
          position: relative;
          text-decoration: none;
          font-weight: 800;
          letter-spacing: 0.022em;
          vertical-align: baseline;
          /* isolate stacking context so filter doesn't bleed */
          isolation: isolate;
          /* subtle lift on focus for a11y */
          outline-offset: 3px;
        }

        /* The shimmer text layer */
        .oncotrace-text {
          display: inline-block;
          position: relative;
          background: linear-gradient(
            90deg,
            #8c1e52  0%,
            #b52a6b  20%,
            #d6407a  38%,
            #f06a9b  48%,
            #ff9dc0  50%,
            #f06a9b  52%,
            #d6407a  62%,
            #b52a6b  80%,
            #8c1e52  100%
          );
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          will-change: background-position;
          animation: shimmer-text 9s linear infinite;
          /* gentle text glow via filter on this span, not the anchor */
          filter: drop-shadow(0 0 4px rgba(214,64,122,0.22))
                  drop-shadow(0 0 8px rgba(214,64,122,0.10));
          transition: filter 0.35s ease;
        }

        /* The underline — a sibling span, block under the text */
        .oncotrace-underline {
          display: block;
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(140,30,82,0.08)   0%,
            rgba(181,42,107,0.45)  20%,
            rgba(214,64,122,0.82)  38%,
            rgba(240,106,155,0.92) 48%,
            rgba(255,157,192,1.0)  50%,
            rgba(240,106,155,0.92) 52%,
            rgba(214,64,122,0.82)  62%,
            rgba(181,42,107,0.45)  80%,
            rgba(140,30,82,0.08)   100%
          );
          background-size: 220% auto;
          will-change: background-position;
          animation: shimmer-line 9s linear infinite;
          filter: drop-shadow(0 0 2px rgba(240,106,155,0.40))
                  drop-shadow(0 0 5px rgba(240,106,155,0.18));
          transition: filter 0.35s ease;
        }

        /* Hover states — brighten glow only, no layout change */
        .oncotrace-link:hover .oncotrace-text {
          filter: drop-shadow(0 0 6px rgba(240,106,155,0.42))
                  drop-shadow(0 0 12px rgba(240,106,155,0.20));
        }
        .oncotrace-link:hover .oncotrace-underline {
          filter: drop-shadow(0 0 4px rgba(255,157,192,0.62))
                  drop-shadow(0 0 8px rgba(240,106,155,0.30));
        }

        /* Two-up support row. Width is viewport-relative so it never runs
           under the DNA artwork's opaque region on the right (the artwork is
           clamp(320px, 44vw, 740px) wide and its left 42% is mask-faded). */
        .hero-supports {
          display: flex;
          align-items: flex-start;
          gap: clamp(1.1rem, 2.2vw, 2.25rem);
          width: min(100%, clamp(560px, 62vw, 1000px));
        }
        .hero-supports > .hero-support-text {
          flex: 1 1 0;
          min-width: 0;
          max-width: none;
        }
        /* Divider: vertical rule between the columns, flipping to a horizontal
           rule above the second block once stacked. Mirrors the
           .cta-bottom-divider pattern in Footer.jsx. */
        .hero-support-alt {
          border-left: 1px solid rgba(100, 100, 120, 0.16);
          padding-left: clamp(1.1rem, 2.2vw, 2.25rem);
        }
        @media (max-width: 1024px) {
          .hero-supports {
            flex-direction: column;
            /* align-items:stretch is required once stacked: in column direction
               flex-basis sizes the HEIGHT, so the default flex-start let each
               block shrink-to-fit its own text and the two edges no longer
               lined up. Width stays bounded here because the DNA artwork is
               still a right-hand column at full strength in this band. */
            align-items: stretch;
            width: min(100%, 60vw);
          }
          .hero-support-alt {
            border-left: none;
            padding-left: 0;
            border-top: 1px solid rgba(100, 100, 120, 0.16);
            padding-top: clamp(0.7rem, 2vw, 1rem);
          }
        }
        @media (max-width: 768px) {
          /* Below here the DNA becomes a faint full-bleed wash (opacity 0.12),
             so the text can safely use the full measure. */
          .hero-supports { width: 100%; }
        }

        /* Stroke-AI link — same three-span structure as OncoTrace, but a static
           accent instead of a shimmer, so the two do not compete. */
        .strokeai-text {
          display: inline-block;
          position: relative;
          color: #2a6db5;
        }
        .strokeai-underline {
          display: block;
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          border-radius: 2px;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(42,109,181,0.30) 0%, rgba(42,109,181,0.85) 50%, rgba(42,109,181,0.30) 100%);
          transition: background 0.35s ease;
        }
        .strokeai-link:hover .strokeai-underline {
          background: linear-gradient(90deg, rgba(42,109,181,0.55) 0%, rgba(42,109,181,1) 50%, rgba(42,109,181,0.55) 100%);
        }

        @keyframes shimmer-text {
          0%   { background-position: 220% center; }
          100% { background-position: -220% center; }
        }
        @keyframes shimmer-line {
          0%   { background-position: 220% center; }
          100% { background-position: -220% center; }
        }

        /* ── Bottom bar ── */
        .hero-bottom-bar {
          border-top: 1px solid rgba(100,100,120,0.13);
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .hero-bottom-grid {
          display: grid;
          grid-template-columns: 1fr;
          padding: 0 clamp(16px, 5vw, 56px);
        }
        @media (max-width: 768px) {
          .hero-bottom-grid { padding: 0; }
        }

        /* ── Reduced motion — pause animations, static mid-gradient ── */
        @media (prefers-reduced-motion: reduce) {
          .oncotrace-text,
          .oncotrace-underline {
            animation: none;
            background-position: 50% center;
            will-change: auto;
          }
        }
      `}</style>

      <section
        style={{
          position: 'relative',
          minHeight: '88vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%)',
          fontFamily: 'var(--font-sans)',
        }}
      >
        {/* ── Background glow blobs ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            overflow: 'hidden', pointerEvents: 'none', zIndex: 0,
          }}
        >
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '-20%', left: '-8%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,140,30,0.55) 0%, rgba(255,180,80,0.25) 35%, transparent 70%)',  filter: 'blur(50px)' }} />
          <div style={{ position: 'absolute', width: '50%', height: '60%', top: '-15%', left: '22%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(160,100,255,0.45) 0%, rgba(200,160,255,0.22) 40%, transparent 70%)', filter: 'blur(55px)' }} />
          <div style={{ position: 'absolute', width: '55%', height: '65%', top: '-20%', right: '-8%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(50,130,255,0.50) 0%, rgba(100,170,255,0.25) 35%, transparent 70%)',  filter: 'blur(50px)' }} />
          <div style={{ position: 'absolute', width: '30%', height: '40%', top: '5%',   right: '5%',  borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(20,90,220,0.35) 0%, transparent 70%)',                            filter: 'blur(40px)' }} />
        </div>

        {/* ── Glass shapes ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            overflow: 'hidden', pointerEvents: 'none', zIndex: 2,
          }}
        >
          {/* Desktop */}
          <div className="shapes-desktop" style={{ position: 'absolute', inset: 0 }}>
            <motion.div animate={{ y: [0,-18,0], rotate: [0,1.5,0]  }} transition={{ duration: 8.0,  repeat: Infinity, ease: 'easeInOut', delay: 0.0 }} className="gl-shape l1-shape" style={{ left: '1%',    background: 'linear-gradient(145deg, rgba(255,200,100,0.50) 0%, rgba(255,165,50,0.36) 45%, rgba(255,140,30,0.20) 100%)',  boxShadow: '0 24px 96px rgba(220,120,20,0.85), 0 12px 48px rgba(255,160,40,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0,-13,0], rotate: [0,-1.5,0] }} transition={{ duration: 9.5,  repeat: Infinity, ease: 'easeInOut', delay: 0.8 }} className="gl-shape l1-shape" style={{ left: '16.5%', background: 'linear-gradient(145deg, rgba(255,185,130,0.50) 0%, rgba(255,155,90,0.36) 45%, rgba(245,125,60,0.20) 100%)',  boxShadow: '0 24px 96px rgba(230,110,40,0.85), 0 12px 48px rgba(255,145,70,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0,-20,0], rotate: [0,2,0]    }} transition={{ duration: 7.5,  repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} className="gl-shape l1-shape" style={{ left: '32%',   background: 'linear-gradient(145deg, rgba(210,175,255,0.50) 0%, rgba(180,140,245,0.36) 45%, rgba(150,110,230,0.20) 100%)',  boxShadow: '0 24px 96px rgba(140,90,220,0.85), 0 12px 48px rgba(180,130,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0,-11,0], rotate: [0,-1,0]   }} transition={{ duration: 10.0, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }} className="gl-shape l1-shape" style={{ left: '47.5%', background: 'linear-gradient(145deg, rgba(185,195,255,0.50) 0%, rgba(155,165,250,0.36) 45%, rgba(120,135,235,0.20) 100%)',  boxShadow: '0 24px 96px rgba(100,110,230,0.85), 0 12px 48px rgba(150,160,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0,-16,0], rotate: [0,1.5,0]  }} transition={{ duration: 8.5,  repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="gl-shape l1-shape" style={{ left: '63%',   background: 'linear-gradient(145deg, rgba(140,200,255,0.50) 0%, rgba(90,165,255,0.36) 45%, rgba(50,130,240,0.20) 100%)',   boxShadow: '0 24px 96px rgba(50,120,240,0.85), 0 12px 48px rgba(100,170,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0,-22,0], rotate: [0,-2,0]   }} transition={{ duration: 9.0,  repeat: Infinity, ease: 'easeInOut', delay: 1.0 }} className="gl-shape l1-shape" style={{ left: '78.5%', background: 'linear-gradient(145deg, rgba(110,175,255,0.48) 0%, rgba(70,140,245,0.34) 45%, rgba(30,100,220,0.18) 100%)',   boxShadow: '0 24px 96px rgba(30,90,210,0.85), 0 12px 48px rgba(70,140,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />

            <motion.div animate={{ y: [0,-14,0], rotate: [0,1,0]    }} transition={{ duration: 7.8,  repeat: Infinity, ease: 'easeInOut', delay: 0.3 }} className="gl-shape l2-shape" style={{ left: '9%',    background: 'linear-gradient(150deg, rgba(255,230,150,0.58) 0%, rgba(255,200,80,0.46) 45%, rgba(240,170,40,0.26) 100%)',   boxShadow: '0 30px 100px rgba(200,140,20,0.85), 0 14px 50px rgba(255,190,50,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0,-19,0], rotate: [0,-1.5,0] }} transition={{ duration: 8.2,  repeat: Infinity, ease: 'easeInOut', delay: 0.7 }} className="gl-shape l2-shape" style={{ left: '24.5%', background: 'linear-gradient(150deg, rgba(255,210,175,0.58) 0%, rgba(255,175,130,0.46) 45%, rgba(245,145,100,0.26) 100%)',  boxShadow: '0 30px 100px rgba(230,120,60,0.85), 0 14px 50px rgba(255,160,100,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0,-12,0], rotate: [0,2,0]    }} transition={{ duration: 9.8,  repeat: Infinity, ease: 'easeInOut', delay: 1.4 }} className="gl-shape l2-shape" style={{ left: '40%',   background: 'linear-gradient(150deg, rgba(220,195,255,0.58) 0%, rgba(190,160,250,0.46) 45%, rgba(160,120,235,0.26) 100%)',  boxShadow: '0 30px 100px rgba(130,80,220,0.85), 0 14px 50px rgba(180,140,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0,-17,0], rotate: [0,-1,0]   }} transition={{ duration: 7.2,  repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} className="gl-shape l2-shape" style={{ left: '55.5%', background: 'linear-gradient(150deg, rgba(165,195,255,0.58) 0%, rgba(125,165,250,0.46) 45%, rgba(85,135,235,0.26) 100%)',   boxShadow: '0 30px 100px rgba(70,110,225,0.85), 0 14px 50px rgba(130,170,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0,-21,0], rotate: [0,1.5,0]  }} transition={{ duration: 8.8,  repeat: Infinity, ease: 'easeInOut', delay: 0.9 }} className="gl-shape l2-shape" style={{ left: '71%',   background: 'linear-gradient(150deg, rgba(175,220,255,0.58) 0%, rgba(120,185,255,0.46) 45%, rgba(70,150,245,0.26) 100%)',   boxShadow: '0 30px 100px rgba(50,110,230,0.85), 0 14px 50px rgba(100,165,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
          </div>

          {/* Mobile */}
          <div className="shapes-mobile" style={{ position: 'absolute', inset: 0 }}>
            <motion.div animate={{ y: [0,-14,0], rotate: [0,1.5,0]  }} transition={{ duration: 7.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }} className="gl-shape l2-shape-mob" style={{ left: '8%',  top: '-12vh', background: 'linear-gradient(150deg, rgba(255,230,150,0.58) 0%, rgba(255,200,80,0.46) 45%, rgba(240,170,40,0.26) 100%)',   boxShadow: '0 30px 100px rgba(200,140,20,0.85), 0 14px 50px rgba(255,190,50,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0,-19,0], rotate: [0,-1,0]   }} transition={{ duration: 8.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }} className="gl-shape l2-shape-mob" style={{ left: '34%', top: '-9vh',  background: 'linear-gradient(150deg, rgba(255,210,175,0.58) 0%, rgba(255,175,130,0.46) 45%, rgba(245,145,100,0.26) 100%)',  boxShadow: '0 30px 100px rgba(230,120,60,0.85), 0 14px 50px rgba(255,160,100,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0,-12,0], rotate: [0,2,0]    }} transition={{ duration: 9.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }} className="gl-shape l2-shape-mob" style={{ left: '66%', top: '-13vh', background: 'linear-gradient(150deg, rgba(220,195,255,0.58) 0%, rgba(190,160,250,0.46) 45%, rgba(160,120,235,0.26) 100%)',  boxShadow: '0 30px 100px rgba(130,80,220,0.85), 0 14px 50px rgba(180,140,255,0.7), inset 0 2px 0 rgba(255,255,255,0.72), inset 1px 0 0 rgba(255,255,255,0.45)' }} />
            <motion.div animate={{ y: [0,-16,0], rotate: [0,-1.5,0] }} transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="gl-shape l1-shape-mob" style={{ left: '18%', top: '-6vh',  background: 'linear-gradient(145deg, rgba(140,200,255,0.50) 0%, rgba(90,165,255,0.36) 45%, rgba(50,130,240,0.20) 100%)',   boxShadow: '0 24px 96px rgba(50,120,240,0.85), 0 12px 48px rgba(100,170,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
            <motion.div animate={{ y: [0,-22,0], rotate: [0,1.5,0]  }} transition={{ duration: 9.0, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }} className="gl-shape l1-shape-mob" style={{ left: '58%', top: '-10vh', background: 'linear-gradient(145deg, rgba(110,175,255,0.48) 0%, rgba(70,140,245,0.34) 45%, rgba(30,100,220,0.18) 100%)',   boxShadow: '0 24px 96px rgba(30,90,210,0.85), 0 12px 48px rgba(70,140,255,0.65), inset 0 2px 0 rgba(255,255,255,0.65), inset 1px 0 0 rgba(255,255,255,0.38)' }} />
          </div>

          {/* Bottom fade */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '38%',
              background: 'linear-gradient(to top, rgba(245,244,250,0.97) 0%, rgba(245,244,250,0.80) 35%, transparent 100%)',
              zIndex: 10,
            }}
          />
        </div>

        {/* ── DNA Image ── */}
        <div className="dna-clip-box" aria-hidden="true">
          <img
            className="dna-img"
            src="/gene.webp"
            alt=""
            draggable={false}
            loading="eager"
            decoding="async"
          />
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            position: 'relative', zIndex: 20,
            display: 'flex', flexDirection: 'column',
            minHeight: '88vh',
          }}
        >
          {/* Headline block — anchored bottom-left */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ padding: '0 clamp(16px,5vw,56px) clamp(22px,3vw,40px)' }}>

              {/* Logo */}
              <div className="hero-logo-wrap">
                <img
                  className="hero-logo-img"
                  src="/shri-ai-logo-trans.webp"
                  alt="SHRI-AI logo"
                  draggable={false}
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Heading */}
              <h1 className="hero-h1">
                Advancing<br />
                Precision Oncology<br />
                Through{' '}
                <span className="word-ai">AI</span>
                {' '}&amp;{' '}
                <span className="word-genomics">Genomics</span>
              </h1>

              {/* Support taglines — two supported platforms, side by side above
                  1024px with a hairline rule between them, stacked below it with
                  the rule flipping to horizontal (Stroke-AI underneath). */}
              <div className="hero-supports">
                <p className="hero-support-text">
                  SHRI-AI proudly supports{' '}
                  {/*
                    Crash-safe link structure:
                    - .oncotrace-wrap  → inline-block spacing container
                    - .oncotrace-link  → inline-block anchor (no filter here)
                    - .oncotrace-text  → gradient + filter lives here
                    - .oncotrace-underline → sibling span, not ::after
                  */}
                  <span className="oncotrace-wrap">
                    <a
                      href="https://oncotrace-ai.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="oncotrace-link"
                      aria-label="Visit OncoTrace-AI.org (opens in new tab)"
                    >
                      <span className="oncotrace-text">OncoTrace-AI.org</span>
                      <span className="oncotrace-underline" aria-hidden="true" />
                    </a>
                  </span>
                  {' '}— an open-source AI platform advancing liquid biopsy, ctDNA, and precision
                  oncology through collaborative innovation and accessible healthcare technology.
                </p>

                <p className="hero-support-text hero-support-alt">
                  SHRI-AI also proudly supports{' '}
                  {/* Same span structure, but static — a second shimmer would
                      compete with OncoTrace-AI for attention. */}
                  <span className="oncotrace-wrap">
                    <a
                      href="https://stroke-ai.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="oncotrace-link strokeai-link"
                      aria-label="Visit Stroke-AI.org (opens in new tab)"
                    >
                      <span className="strokeai-text">Stroke-AI.org</span>
                      <span className="strokeai-underline" aria-hidden="true" />
                    </a>
                  </span>
                  {' '}— an AI initiative advancing medical imaging, early stroke detection,
                  and risk assessment through collaborative research and accessible
                  healthcare technology.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom bar */}
          <div className="hero-bottom-bar" role="contentinfo">
            <div className="hero-bottom-grid" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;