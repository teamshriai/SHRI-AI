var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,o)=>(o=n==null?{}:e(i(n)),l(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n)),d=e=>a.call(e,`module.exports`)?e[`module.exports`]:l(t({},`__esModule`,{value:!0}),e);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var f=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var C={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return w(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function T(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?T(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function E(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,E(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),E(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=E(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=E(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return E(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ce(e,t,n){if(e==null)return e;var r=[],i=0;return E(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function le(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ue=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function de(e){var t=C.T,n={};n.types=t===null?null:t.types,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,ue)}catch(e){ue(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}}function fe(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else de(fe.bind(null,e))}var pe={map:ce,forEach:function(e,t,n){ce(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ce(e,function(){t++}),t},toArray:function(e){return ce(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=pe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.addTransitionType=fe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return w(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return w(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:le}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=de,e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.3.0`})),p=s(((e,t)=>{t.exports=f()})),m=s((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,re());else{var t=n(l);t!==null&&ae(x,t.startTime-e)}}}var S=!1,ee=-1,te=5,C=-1;function ne(){return g?!0:!(e.unstable_now()-C<te)}function w(){if(g=!1,S){var t=e.unstable_now();C=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ee),ee=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ae(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?re():S=!1}}}var re;if(typeof y==`function`)re=function(){y(w)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,T=ie.port2;ie.port1.onmessage=w,re=function(){T.postMessage(null)}}else re=function(){_(w,0)};function ae(t,n){ee=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):te=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ee),ee=-1):h=!0,ae(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,re()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),h=s(((e,t)=>{t.exports=m()})),g=s((e=>{var t=p();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),_=s(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=s((e=>{var t=h(),n=p(),r=_();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function d(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=d(e),t!==null)return t;e=e.sibling}return null}function f(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&f(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function m(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function g(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=m(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function ee(e,t,n){return e===n||e===t&&(x=e,!0)}function te(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function C(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ne(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var w=Object.assign,re=Symbol.for(`react.element`),ie=Symbol.for(`react.transitional.element`),T=Symbol.for(`react.portal`),ae=Symbol.for(`react.fragment`),oe=Symbol.for(`react.strict_mode`),se=Symbol.for(`react.profiler`),E=Symbol.for(`react.consumer`),ce=Symbol.for(`react.context`),le=Symbol.for(`react.forward_ref`),ue=Symbol.for(`react.suspense`),de=Symbol.for(`react.suspense_list`),fe=Symbol.for(`react.memo`),pe=Symbol.for(`react.lazy`),me=Symbol.for(`react.activity`),he=Symbol.for(`react.legacy_hidden`),ge=Symbol.for(`react.memo_cache_sentinel`),_e=Symbol.for(`react.view_transition`),ve=Symbol.for(`react.recoverable`),ye=Symbol.iterator;function be(e){return typeof e!=`object`||!e?null:(e=ye&&e[ye]||e[`@@iterator`],typeof e==`function`?e:null)}var xe=Symbol.for(`react.client.reference`);function Se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ae:return`Fragment`;case se:return`Profiler`;case oe:return`StrictMode`;case ue:return`Suspense`;case de:return`SuspenseList`;case me:return`Activity`;case _e:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case T:return`Portal`;case ce:return e.displayName||`Context`;case E:return(e._context.displayName||`Context`)+`.Consumer`;case le:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case fe:return t=e.displayName||null,t===null?Se(e.type)||`Memo`:t;case pe:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var Ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Te=[],Ee=-1;function De(e){return{current:e}}function Oe(e){0>Ee||(e.current=Te[Ee],Te[Ee]=null,Ee--)}function k(e,t){Ee++,Te[Ee]=e.current,e.current=t}var ke=De(null),Ae=De(null),je=De(null),Me=De(null);function Ne(e,t){switch(k(je,t),k(Ae,e),k(ke,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Oe(ke),k(ke,e)}function Pe(){Oe(ke),Oe(Ae),Oe(je)}function Fe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,k(Me,e)),t=ke.current;var n=dp(t,e.type);t!==n&&(k(Ae,e),k(ke,n))}function Ie(e){Ae.current===e&&(Oe(ke),Oe(Ae)),Me.current===e&&(Oe(Me),sh._currentValue=we)}var Le,Re;function ze(e){if(Le===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Le=t&&t[1]||``,Re=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Le+e+Re}var Be=!1;function Ve(e,t){if(!e||Be)return``;Be=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Be=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ze(n):``}function He(e,t){switch(e.tag){case 26:case 27:case 5:return ze(e.type);case 16:return ze(`Lazy`);case 13:return e.child!==t&&t!==null?ze(`Suspense Fallback`):ze(`Suspense`);case 19:return ze(`SuspenseList`);case 0:case 15:return Ve(e.type,!1);case 11:return Ve(e.type.render,!1);case 1:return Ve(e.type,!0);case 31:return ze(`Activity`);case 30:return ze(`ViewTransition`);default:return``}}function Ue(e){try{var t=``,n=null;do t+=He(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var We=Object.prototype.hasOwnProperty,Ge=t.unstable_scheduleCallback,Ke=t.unstable_cancelCallback,qe=t.unstable_shouldYield,Je=t.unstable_requestPaint,Ye=t.unstable_now,Xe=t.unstable_getCurrentPriorityLevel,Ze=t.unstable_ImmediatePriority,Qe=t.unstable_UserBlockingPriority,$e=t.unstable_NormalPriority,et=t.unstable_LowPriority,tt=t.unstable_IdlePriority,nt=t.log,rt=t.unstable_setDisableYieldValue,it=null,at=null;function ot(e){if(typeof nt==`function`&&rt(e),at&&typeof at.setStrictMode==`function`)try{at.setStrictMode(it,e)}catch{}}var st=Math.clz32?Math.clz32:ut,ct=Math.log,lt=Math.LN2;function ut(e){return e>>>=0,e===0?32:31-(ct(e)/lt|0)|0}var dt=256,ft=262144,A=4194304;function pt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=pt(n))):i=pt(o):i=pt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=pt(n))):i=pt(o)):i=pt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function ht(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-st(n),i=1<<r;t|=e[r],n&=~i}return t}function _t(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vt(){var e=A;return A<<=1,!(A&62914560)&&(A=4194304),e}function yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-st(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&St(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function St(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-st(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function wt(e,t){var n=t&-t;return n=n&42?1:Tt(n),(n&(e.suspendedLanes|t))===0?n:0}function Tt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Et(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Dt(){var e=O.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Ot(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var kt=Math.random().toString(36).slice(2),At=`__reactFiber$`+kt,j=`__reactProps$`+kt,jt=`__reactContainer$`+kt,Mt=`__reactEvents$`+kt,Nt=`__reactListeners$`+kt,Pt=`__reactHandles$`+kt,Ft=`__reactResources$`+kt,It=`__reactMarker$`+kt,Lt=`__reactLoad$`+kt;function Rt(e){delete e[At],delete e[j],delete e[Nt],delete e[Pt]}function zt(e){var t;if(t=e[At])return t;for(var n=e.parentNode;n;){if(t=n[jt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[At])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Bt(e){if(e=e[At]||e[jt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ht(e){var t=e[Ft];return t||=e[Ft]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Ut(e){e[It]=!0}function Wt(e){e[Lt]=void 0}var Gt=new Set,Kt={};function qt(e,t){Jt(e,t),Jt(e+`Capture`,t)}function Jt(e,t){for(Kt[e]=t,e=0;e<t.length;e++)Gt.add(t[e])}var Yt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Xt={},Zt={};function Qt(e){return We.call(Zt,e)?!0:We.call(Xt,e)?!1:Yt.test(e)?Zt[e]=!0:(Xt[e]=!0,!1)}var M=!1;function $t(){var e=M;return M=!1,e}function en(e,t,n){if(Qt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function tn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function nn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function rn(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function N(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function an(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function on(e){if(!e._valueTracker){var t=N(e)?`checked`:`value`;e._valueTracker=an(e,t,``+e[t])}}function sn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=N(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var cn=/[\n"\\]/g;function ln(e){return e.replace(cn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function un(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+rn(t)):e.value!==``+rn(t)&&(e.value=``+rn(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):fn(e,rn(n)):o===`number`&&e.value==t?fn(e,rn(e.value)):fn(e,rn(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+rn(s):e.removeAttribute(`name`)}function dn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){on(e);return}n=n==null?``:``+rn(n),t=t==null?n:``+rn(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),on(e)}function fn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function pn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function mn(e,t,n){if(t!=null&&(t=``+rn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+rn(n)}function hn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(Ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=rn(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),on(e)}function gn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _n=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function vn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||_n.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function yn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,M=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(vn(e,a,r),M=!0)}else for(var o in t)t.hasOwnProperty(o)&&vn(e,o,t[o])}function bn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var xn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Sn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cn(e){return Sn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function wn(){}var Tn=null;function En(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Dn=null,On=null;function kn(e){var t=Bt(e);if(t&&(e=t.stateNode)){var n=e[j]||null;a:switch(e=t.stateNode,t.type){case`input`:if(un(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+ln(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[j]||null;if(!a)throw Error(i(90));un(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&sn(r)}break a;case`textarea`:mn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}}}var An=!1;function jn(e,t,n){if(An)return e(t,n);An=!0;try{return e(t)}finally{if(An=!1,(Dn!==null||On!==null)&&(zd(),Dn&&(t=Dn,e=On,On=Dn=null,kn(t),e)))for(t=0;t<e.length;t++)kn(e[t])}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[j]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Nn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,P=!1;if(Nn)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){P=!0}}),window.addEventListener(`test`,Pn,Pn),window.removeEventListener(`test`,Pn,Pn)}catch{P=!1}var Fn=null,In=null,Ln=null;function Rn(){if(Ln)return Ln;var e,t=In,n=t.length,r,i=`value`in Fn?Fn.value:Fn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Ln=i.slice(e,1<r?1-r:void 0)}function zn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Bn(){return!0}function Vn(){return!1}function Hn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Bn:Vn,this.isPropagationStopped=Vn,this}return w(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),t}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=Hn(Un),Gn=w({},Un,{view:0,detail:0}),Kn=Hn(Gn),qn,Jn,Yn,Xn=w({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Yn&&(Yn&&e.type===`mousemove`?(qn=e.screenX-Yn.screenX,Jn=e.screenY-Yn.screenY):Jn=qn=0,Yn=e),qn)},movementY:function(e){return`movementY`in e?e.movementY:Jn}}),Zn=Hn(Xn),Qn=Hn(w({},Xn,{dataTransfer:0})),$n=Hn(w({},Gn,{relatedTarget:0})),er=Hn(w({},Un,{animationName:0,elapsedTime:0,pseudoElement:0})),tr=Hn(w({},Un,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),nr=Hn(w({},Un,{data:0})),rr={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},F={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},ir={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function ar(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ir[e])?!!t[e]:!1}function or(){return ar}var sr=Hn(w({},Gn,{key:function(e){if(e.key){var t=rr[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=zn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?F[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type===`keypress`?zn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?zn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),cr=Hn(w({},Xn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),lr=Hn(w({},Un,{submitter:0})),ur=Hn(w({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or})),dr=Hn(w({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0})),fr=Hn(w({},Xn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),pr=Hn(w({},Un,{newState:0,oldState:0,source:0})),mr=[9,13,27,32],hr=Nn&&`CompositionEvent`in window,gr=null;Nn&&`documentMode`in document&&(gr=document.documentMode);var _r=Nn&&`TextEvent`in window&&!gr,vr=Nn&&(!hr||gr&&8<gr&&11>=gr),yr=` `,br=!1;function xr(e,t){switch(e){case`keyup`:return mr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var I=!1;function Cr(e,t){switch(e){case`compositionend`:return Sr(t);case`keypress`:return t.which===32?(br=!0,yr):null;case`textInput`:return e=t.data,e===yr&&br?null:e;default:return null}}function wr(e,t){if(I)return e===`compositionend`||!hr&&xr(e,t)?(e=Rn(),Ln=In=Fn=null,I=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return vr&&t.locale!==`ko`?null:t.data;default:return null}}var Tr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Tr[e.type]:t===`textarea`}function Dr(e,t,n,r){Dn?On?On.push(r):On=[r]:Dn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Or=null,kr=null;function Ar(e){Vf(e,0)}function jr(e){if(sn(Vt(e)))return e}function Mr(e,t){if(e===`change`)return t}var Nr=!1;if(Nn){var Pr;if(Nn){var Fr=`oninput`in document;if(!Fr){var Ir=document.createElement(`div`);Ir.setAttribute(`oninput`,`return;`),Fr=typeof Ir.oninput==`function`}Pr=Fr}else Pr=!1;Nr=Pr&&(!document.documentMode||9<document.documentMode)}function Lr(){Or&&(Or.detachEvent(`onpropertychange`,Rr),kr=Or=null)}function Rr(e){if(e.propertyName===`value`&&jr(kr)){var t=[];Dr(t,kr,e,En(e)),jn(Ar,t)}}function zr(e,t,n){e===`focusin`?(Lr(),Or=t,kr=n,Or.attachEvent(`onpropertychange`,Rr)):e===`focusout`&&Lr()}function Br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return jr(kr)}function Vr(e,t){if(e===`click`)return jr(t)}function Hr(e,t){if(e===`input`||e===`change`)return jr(t)}function Ur(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Wr=typeof Object.is==`function`?Object.is:Ur;function Gr(e,t){if(Wr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!We.call(t,i)||!Wr(e[i],t[i]))return!1}return!0}function Kr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function qr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jr(e,t){var n=qr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=qr(n)}}function Yr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Yr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kr(e.document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Qr=Nn&&`documentMode`in document&&11>=document.documentMode,$r=null,ei=null,ti=null,ni=!1;function ri(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||$r==null||$r!==Kr(r)||(r=$r,`selectionStart`in r&&Zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ti&&Gr(ti,r)||(ti=r,r=Jf(ei,`onSelect`),0<r.length&&(t=new Wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=$r)))}function ii(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ai={animationend:ii(`Animation`,`AnimationEnd`),animationiteration:ii(`Animation`,`AnimationIteration`),animationstart:ii(`Animation`,`AnimationStart`),transitionrun:ii(`Transition`,`TransitionRun`),transitionstart:ii(`Transition`,`TransitionStart`),transitioncancel:ii(`Transition`,`TransitionCancel`),transitionend:ii(`Transition`,`TransitionEnd`)},oi={},si={};Nn&&(si=document.createElement(`div`).style,`AnimationEvent`in window||(delete ai.animationend.animation,delete ai.animationiteration.animation,delete ai.animationstart.animation),`TransitionEvent`in window||delete ai.transitionend.transition);function ci(e){if(oi[e])return oi[e];if(!ai[e])return e;var t=ai[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in si)return oi[e]=t[n];return e}var li=ci(`animationend`),ui=ci(`animationiteration`),di=ci(`animationstart`),fi=ci(`transitionrun`),pi=ci(`transitionstart`),mi=ci(`transitioncancel`),hi=ci(`transitionend`),gi=new Map,_i=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);_i.push(`scrollEnd`);function vi(e,t){gi.set(e,t),qt(t,[e])}var yi=0;function bi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=yi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function xi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Si(e,t){return e=xi(e),t=xi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Ci=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},wi=[],Ti=0,Ei=0;function Di(){for(var e=Ti,t=Ei=Ti=0;t<e;){var n=wi[t];wi[t++]=null;var r=wi[t];wi[t++]=null;var i=wi[t];wi[t++]=null;var a=wi[t];if(wi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ji(n,i,a)}}function Oi(e,t,n,r){wi[Ti++]=e,wi[Ti++]=t,wi[Ti++]=n,wi[Ti++]=r,Ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ki(e,t,n,r){return Oi(e,t,n,r),Mi(e)}function Ai(e,t){return Oi(e,null,null,t),Mi(e)}function ji(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-st(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Mi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ni={};function Pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fi(e,t,n,r){return new Pi(e,t,n,r)}function Ii(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Li(e,t){var n=e.alternate;return n===null?(n=Fi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ri(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function zi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ii(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,ke.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case me:return e=Fi(31,n,t,a),e.elementType=me,e.lanes=o,e;case ae:return Bi(n.children,a,o,t);case oe:s=8,a|=24;break;case se:return e=Fi(12,n,t,a|2),e.elementType=se,e.lanes=o,e;case ue:return e=Fi(13,n,t,a),e.elementType=ue,e.lanes=o,e;case de:return e=Fi(19,n,t,a),e.elementType=de,e.lanes=o,e;case he:case _e:return e=a|32,e=Fi(30,n,t,e),e.elementType=_e,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case ce:s=10;break a;case E:s=9;break a;case le:s=11;break a;case fe:s=14;break a;case pe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Fi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Bi(e,t,n,r){return e=Fi(7,e,r,t),e.lanes=n,e}function Vi(e,t,n){return e=Fi(6,e,null,t),e.lanes=n,e}function Hi(e){var t=Fi(18,null,null,0);return t.stateNode=e,t}function Ui(e,t,n){return t=Fi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wi=new WeakMap;function Gi(e,t){if(typeof e==`object`&&e){var n=Wi.get(e);return n===void 0?(t={value:e,source:t,stack:Ue(t)},Wi.set(e,t),t):n}return{value:e,source:t,stack:Ue(t)}}var Ki=[],qi=0,Ji=null,Yi=0,Xi=[],Zi=0,Qi=null,$i=1,ea=``;function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Ji,Ji=e,Yi=t}function na(e,t,n){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,Qi=e;var r=$i;e=ea;var i=32-st(r)-1;r&=~(1<<i),n+=1;var a=32-st(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,$i=1<<32-st(t)+i|n<<i|r,ea=a+e}else $i=1<<a|n<<i|r,ea=e}function ra(e){e.return!==null&&(ta(e,1),na(e,1,0))}function ia(e){for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null;for(;e===Qi;)Qi=Xi[--Zi],Xi[Zi]=null,ea=Xi[--Zi],Xi[Zi]=null,$i=Xi[--Zi],Xi[Zi]=null}function aa(e,t){Xi[Zi++]=$i,Xi[Zi++]=ea,Xi[Zi++]=Qi,$i=t.id,ea=t.overflow,Qi=e}var oa=null,L=null,R=!1,sa=null,ca=!1,la=Error(i(519));function ua(e){throw ga(Gi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),la}function da(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[At]=e,t[j]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),dn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),hn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=wn),t=!0):t=!1,t||ua(e,!0)}function fa(e){for(oa=e.return;oa;)switch(oa.tag){case 5:case 31:case 13:ca=!1;return;case 27:case 3:ca=!0;return;default:oa=oa.return}}function pa(e){if(e!==oa)return!1;if(!R)return fa(e),R=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&L&&ua(e),fa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));L=dm(e)}else t===27?(t=L,Sp(e.type)?(e=um,um=null,L=e):L=t):L=oa?lm(e.stateNode.nextSibling):null;return!0}function ma(){L=oa=null,R=!1}function ha(){var e=sa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),sa=null),e}function ga(e){sa===null?sa=[e]:sa.push(e)}var _a=De(null),va=null,ya=null;function ba(e,t,n){k(_a,t._currentValue),t._currentValue=n}function xa(e){e._currentValue=_a.current,Oe(_a)}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ca(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Sa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Sa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Sa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function wa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Wr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&Ca(t,e,n,r),t.flags|=262144,e!==null}function Ta(e){for(e=e.firstContext;e!==null;){if(!Wr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ea(e){va=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Da(e){return ka(va,e)}function Oa(e,t){return va===null&&Ea(e),ka(e,t)}function ka(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ya===null){if(e===null)throw Error(i(308));ya=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ya=ya.next=t;return n}var Aa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ja=t.unstable_scheduleCallback,Ma=t.unstable_NormalPriority,Na={$$typeof:ce,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pa(){return{controller:new Aa,data:new Map,refCount:0}}function Fa(e){e.refCount--,e.refCount===0&&ja(Ma,function(){e.controller.abort()})}function Ia(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var La=null;function Ra(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var za=null,Ba=0,Va=0,Ha=null;function Ua(e,t){if(za===null){var n=za=[];Ba=0,Va=Pf(),Ha={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ba++,t.then(Wa,Wa),t}function Wa(){if(--Ba===0&&(La=null,za!==null)){Ha!==null&&(Ha.status=`fulfilled`);var e=za;za=null,Va=0,Ha=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ga(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ka=D.S;D.S=function(e,t){if(hd=Ye(),typeof t==`object`&&t&&typeof t.then==`function`&&Ua(e,t),La!==null)for(var n=bf;n!==null;)Ia(n,La),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ia(r,n),r=r.next;if(Va!==0){r=La,r===null&&(r=La=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ka!==null&&Ka(e,t)};var qa=De(null);function Ja(){var e=qa.current;return e===null?q.pooledCache:e}function Ya(e,t){t===null?k(qa,qa.current):k(qa,t.pool)}function Xa(){var e=Ja();return e===null?null:{parent:Na._currentValue,pool:e}}var Za=Error(i(460)),Qa=Error(i(474)),$a=Error(i(542)),eo={then:function(){}};function to(e){return e=e.status,e===`fulfilled`||e===`rejected`}function no(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(wn,wn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(wn,wn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,oo(e),e}throw io=t,Za}}function ro(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(io=e,Za):e}}var io=null;function ao(){if(io===null)throw Error(i(459));var e=io;return io=null,e}function oo(e){if(e===Za||e===$a)throw Error(i(483))}var so=null,co=0;function lo(e){var t=co;return co+=1,so===null&&(so=[]),no(so,e,t)}function uo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function fo(e,t){throw t.$$typeof===re?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function po(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Li(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ae?(e=d(e,t,n.props.children,r,n.key),uo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===pe&&ro(i)===t.type)?(t=a(t,n.props),uo(t,n),t.return=e,t):(t=zi(n.type,n.key,n.props,null,e.mode,r),uo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ui(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Vi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ie:return n=zi(t.type,t.key,t.props,null,e.mode,n),uo(n,t),n.return=e,n;case T:return t=Ui(t,e.mode,n),t.return=e,t;case pe:return t=ro(t),f(e,t,n)}if(Ce(t)||be(t))return t=Bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,lo(t),n);if(t.$$typeof===ce)return f(e,Oa(e,t),n);fo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ie:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case pe:return n=ro(n),p(e,t,n,r)}if(Ce(n)||be(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,lo(n),r);if(n.$$typeof===ce)return p(e,t,Oa(e,n),r);fo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ie:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case pe:return r=ro(r),m(e,t,n,r,i)}if(Ce(r)||be(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,lo(r),i);if(r.$$typeof===ce)return m(e,t,n,Oa(t,r),i);fo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),R&&ta(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return R&&ta(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),R&&ta(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),R&&ta(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return R&&ta(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),R&&ta(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ae&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ie:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ae){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),uo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===pe&&ro(l)===r.type){n(e,r.sibling),c=a(r,o.props),uo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ae?(c=Bi(o.props.children,e.mode,c,o.key),uo(c,o),c.return=e,e=c):(c=zi(o.type,o.key,o.props,null,e.mode,c),uo(c,o),c.return=e,e=c)}return s(e);case T:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ui(o,e.mode,c),c.return=e,e=c}return s(e);case pe:return o=ro(o),_(e,r,o,c)}if(Ce(o))return h(e,r,o,c);if(be(o)){if(l=be(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,lo(o),c);if(o.$$typeof===ce)return _(e,r,Oa(e,o),c);fo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Vi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{co=0;var i=_(e,t,n,r);return so=null,i}catch(t){if(t===Za||t===$a)throw t;var a=Fi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var mo=po(!0),ho=po(!1),go=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function bo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Mi(e),ji(e,null,n),t}return Oi(e,r,t,n),Mi(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ct(e,n)}}function So(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Co=!1;function wo(){if(Co){var e=Ha;if(e!==null)throw e}}function To(e,t,n,r){Co=!1;var i=e.updateQueue;go=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Va&&(Co=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=w({},d,f);break a;case 2:go=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function Eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Do(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Eo(n[e],t)}var Oo=De(null),ko=De(0);function Ao(e,t){e=id,k(ko,e),k(Oo,t),id=e|t.baseLanes}function jo(){k(ko,id),k(Oo,Oo.current)}function Mo(){id=ko.current,Oe(Oo),Oe(ko)}var No=De(null),Po=null;function Fo(e){var t=e.alternate;k(Bo,Bo.current&1),k(No,e),Po===null&&(t===null||Oo.current!==null||t.memoizedState!==null)&&(Po=e)}function Io(e){k(Bo,Bo.current),k(No,e),Po===null&&(Po=e)}function Lo(e){e.tag===22?(k(Bo,Bo.current),k(No,e),Po===null&&(Po=e)):Ro()}function Ro(){k(Bo,Bo.current),k(No,No.current)}function zo(e){Oe(No),Po===e&&(Po=null),Oe(Bo)}var Bo=De(0);function Vo(e,t){k(No,No.current),k(Bo,t)}function Ho(e){Oe(Bo),Oe(No),Po===e&&(Po=null)}function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wo=0,z=null,B=null,V=null,Go=!1,H=!1,Ko=!1,qo=0,Jo=0,Yo=null,Xo=0;function U(){throw Error(i(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wr(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,i,a){return Wo=a,z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?hc:gc,Ko=!1,a=n(r,i),Ko=!1,H&&(a=es(t,n,r,i)),$o(e),a}function $o(e){D.H=mc;var t=B!==null&&B.next!==null;if(Wo=0,V=B=z=null,Go=!1,Jo=0,Yo=null,t)throw Error(i(300));e===null||Nc||(e=e.dependencies,e!==null&&Ta(e)&&(Nc=!0))}function es(e,t,n,r){z=e;var a=0;do{if(H&&(Yo=null),Jo=0,H=!1,25<=a)throw Error(i(301));if(a+=1,V=B=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=_c,o=t(n,r)}while(H);return o}function ts(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?cs(t):t,e=e.useState()[0],(B===null?null:B.memoizedState)!==e&&(z.flags|=1024),t}function ns(){var e=qo!==0;return qo=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function is(e){if(Go){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Go=!1}Wo=0,V=B=z=null,H=!1,Jo=qo=0,Yo=null}function as(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return V===null?z.memoizedState=V=e:V=V.next=e,V}function os(){if(B===null){var e=z.alternate;e=e===null?null:e.memoizedState}else e=B.next;var t=V===null?z.memoizedState:V.next;if(t!==null)V=t,B=e;else{if(e===null)throw z.alternate===null?Error(i(467)):Error(i(310));B=e,e={memoizedState:B.memoizedState,baseState:B.baseState,baseQueue:B.baseQueue,queue:B.queue,next:null},V===null?z.memoizedState=V=e:V=V.next=e}return V}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cs(e){var t=Jo;return Jo+=1,Yo===null&&(Yo=[]),e=no(Yo,e,t),t=z,(V===null?t.memoizedState:V.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?hc:gc),e}function ls(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return cs(e);if(e.$$typeof===ve)return;if(e.$$typeof===ce)return Da(e)}throw Error(i(438,String(e)))}function us(e){var t=null,n=z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ss(),z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ge;return t.index++,n}function ds(e,t){return typeof t==`function`?t(e):t}function fs(e){return ps(os(),B,e)}function ps(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Wo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Va&&(d=!0);else if((Wo&p)===p){u=u.next,p===Va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,z.lanes|=p,od|=p;f=u.action,Ko&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,z.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Wr(o,e.memoizedState)&&(Nc=!0,d&&(n=Ha,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ms(e){var t=os(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Wr(o,t.memoizedState)||(Nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(e,t,n){var r=z,a=os(),o=R;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Wr((B||a).memoizedState,n);if(s&&(a.memoizedState=n,Nc=!0),a=a.queue,Bs(vs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||V!==null&&!!(V.memoizedState.tag&1),Fs(e?9:8,{destroy:void 0},_s.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Wo&127||gs(r,t,n)}return n}function gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=z.updateQueue,t===null?(t=ss(),z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _s(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&bs(e)}function vs(e,t,n){return n(function(){ys(t)&&bs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wr(e,n)}catch{return!0}}function bs(e){var t=Ai(e,2);t!==null&&Pd(t,e,2)}function xs(e){var t=as();if(typeof e==`function`){var n=e;if(e=n(),Ko){ot(!0);try{n()}finally{ot(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t}function Ss(e,t,n,r){return e.baseState=n,ps(e,B,typeof r==`function`?r:ds)}function Cs(e,t,n,r,a){if(dc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ws(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ws(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};o.types=a===null?null:a.types,D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Ts(e,t,s)}catch(n){Ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Ts(e,t,a)}catch(n){Ds(e,t,n)}}function Ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Es(e,t,n)},function(n){return Ds(e,t,n)}):Es(e,t,n)}function Es(e,t,n){t.status=`fulfilled`,t.value=n,Os(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ws(e,n)))}function Ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Os(t),t=t.next;while(t!==r)}e.action=null}function Os(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ks(e,t){return t}function As(e,t){if(R){var n=q.formState;if(n!==null){a:{var r=z;if(R){if(L){b:{for(var i=L,a=ca;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){L=lm(i.nextSibling),r=i.data===`F!`;break a}}ua(r)}r=!1}r&&(t=n[0])}}return n=as(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},n.queue=r,n=cc.bind(null,z,r),r.dispatch=n,r=xs(!1),a=uc.bind(null,z,!1,r.queue),r=as(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Cs.bind(null,z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function js(e){return Ms(os(),B,e)}function Ms(e,t,n){if(t=ps(e,t,ks)[0],e=fs(ds)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=cs(t)}catch(e){throw e===Za?$a:e}else r=t;t=os();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(z.flags|=2048,Fs(9,{destroy:void 0},Ns.bind(null,i,n),null)),[r,a,e]}function Ns(e,t){e.action=t}function Ps(e){var t=os(),n=B;if(n!==null)return Ms(t,n,e);os(),t=t.memoizedState,n=os();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=z.updateQueue,t===null&&(t=ss(),z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Is(){return os().memoizedState}function Ls(e,t,n,r){var i=as();z.flags|=e,i.memoizedState=Fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Rs(e,t,n,r){var i=os();r=r===void 0?null:r;var a=i.memoizedState.inst;B!==null&&r!==null&&Zo(r,B.memoizedState.deps)?i.memoizedState=Fs(t,a,n,r):(z.flags|=e,i.memoizedState=Fs(1|t,a,n,r))}function zs(e,t){Ls(8390656,8,e,t)}function Bs(e,t){Rs(2048,8,e,t)}function Vs(e){z.flags|=4;var t=z.updateQueue;if(t===null)t=ss(),z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hs(e){var t=os().memoizedState;return Vs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Rs(4,2,e,t)}function Ws(e,t){return Rs(4,4,e,t)}function Gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){n=n==null?null:n.concat([e]),Rs(4,4,Gs.bind(null,t,e),n)}function qs(){}function Js(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ys(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Zo(t,r[1]))return r[0];if(r=e(),Ko){ot(!0);try{e()}finally{ot(!1)}}return n.memoizedState=[r,t],r}function Xs(e,t,n){return n===void 0||Wo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),z.lanes|=e,od|=e,n)}function Zs(e,t,n,r){return Wr(n,t)?n:Oo.current===null?!(Wo&106)||Wo&1073741824&&!(Y&261930)?(Nc=!0,e.memoizedState=n):(e=Md(),z.lanes|=e,od|=e,t):(e=Xs(e,n,r),Wr(e,t)||(Nc=!0),e)}function Qs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};s.types=o===null?null:o.types,D.T=s,uc(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?lc(e,t,Ga(c,r),jd(e)):lc(e,t,r,jd(e))}catch(n){lc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function $s(){}function ec(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=tc(e).queue;Qs(e,a,t,we,n===null?$s:function(){return nc(e),n(r)})}function tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:we},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nc(e){var t=tc(e);t.next===null&&(t=e.alternate.memoizedState),lc(e,t.next.queue,{},jd())}function rc(){return Da(sh)}function ic(){return os().memoizedState}function ac(){return os().memoizedState}function oc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=yo(n);var r=bo(t,e,n);r!==null&&(Pd(r,t,n),xo(r,t,n)),t={cache:Pa()},e.payload=t;return}t=t.return}}function sc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e)?fc(t,n):(n=ki(e,t,n,r),n!==null&&(Pd(n,e,r),pc(n,t,r)))}function cc(e,t,n){lc(e,t,n,jd())}function lc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Wr(s,o))return Oi(e,t,i,0),q===null&&Di(),!1}catch{}if(n=ki(e,t,i,r),n!==null)return Pd(n,e,r),pc(n,t,r),!0}return!1}function uc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(t)throw Error(i(479))}else t=ki(e,n,r,2),t!==null&&Pd(t,e,2)}function dc(e){var t=e.alternate;return e===z||t!==null&&t===z}function fc(e,t){H=Go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ct(e,n)}}var mc={readContext:Da,use:ls,useCallback:U,useContext:U,useEffect:U,useImperativeHandle:U,useLayoutEffect:U,useInsertionEffect:U,useMemo:U,useReducer:U,useRef:U,useState:U,useDebugValue:U,useDeferredValue:U,useTransition:U,useSyncExternalStore:U,useId:U,useHostTransitionStatus:U,useFormState:U,useActionState:U,useOptimistic:U,useMemoCache:U,useCacheRefresh:U,useEffectEvent:U},hc={readContext:Da,use:ls,useCallback:function(e,t){return as().memoizedState=[e,t===void 0?null:t],e},useContext:Da,useEffect:zs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ls(4194308,4,Gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){Ls(4,2,e,t)},useMemo:function(e,t){var n=as();t=t===void 0?null:t;var r=e();if(Ko){ot(!0);try{e()}finally{ot(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=as();if(n!==void 0){var i=n(t);if(Ko){ot(!0);try{n(t)}finally{ot(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=sc.bind(null,z,e),[r.memoizedState,e]},useRef:function(e){var t=as();return e={current:e},t.memoizedState=e},useState:function(e){e=xs(e);var t=e.queue,n=cc.bind(null,z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){return Xs(as(),e,t)},useTransition:function(){var e=xs(!1);return e=Qs.bind(null,z,e.queue,!0,!1),as().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=z,a=as();if(R){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||gs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,zs(vs.bind(null,r,o,e),[e]),r.flags|=2048,Fs(9,{destroy:void 0},_s.bind(null,r,o,n,t),null),n},useId:function(){var e=as(),t=q.identifierPrefix;if(R){var n=ea,r=$i;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=qo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Xo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:As,useActionState:As,useOptimistic:function(e){var t=as();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=uc.bind(null,z,!0,n),n.dispatch=t,[e,t]},useMemoCache:us,useCacheRefresh:function(){return as().memoizedState=oc.bind(null,z)},useEffectEvent:function(e){var t=as(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:Da,use:ls,useCallback:Js,useContext:Da,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:fs,useRef:Is,useState:function(){return fs(ds)},useDebugValue:qs,useDeferredValue:function(e,t){return Zs(os(),B.memoizedState,e,t)},useTransition:function(){var e=fs(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:js,useActionState:js,useOptimistic:function(e,t){return Ss(os(),B,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs},_c={readContext:Da,use:ls,useCallback:Js,useContext:Da,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:ms,useRef:Is,useState:function(){return ms(ds)},useDebugValue:qs,useDeferredValue:function(e,t){var n=os();return B===null?Xs(n,e,t):Zs(n,B.memoizedState,e,t)},useTransition:function(){var e=ms(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var n=os();return B===null?(n.baseState=e,[e,n.queue.dispatch]):Ss(n,B,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs};function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:w({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=yo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bo(e,i,r),t!==null&&(Pd(t,e,r),xo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=yo(n);r.tag=2,t!=null&&(r.callback=t),t=bo(e,r,n),t!==null&&(Pd(t,e,n),xo(t,e,n))}};function bc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(i,a):!0}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function Sc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=w({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Cc(e){Ci(e)}function wc(e){console.error(e)}function Tc(e){Ci(e)}function Ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){return n=yo(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(e,t)},n}function kc(e){return e=yo(e),e.tag=3,e}function Ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Dc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function jc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&wa(t,n,a,!0),n=No.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Po===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===eo?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(R)return t=No.current,t===null?(r!==la&&(t=Error(i(423),{cause:r}),ga(Gi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Gi(r,n),a=Oc(e.stateNode,r,a),So(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==la&&(e=Error(i(422),{cause:r}),ga(Gi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Gi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Gi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Oc(n.stateNode,r,e),So(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=kc(a),Ac(a,e,n,r),So(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Mc=Error(i(461)),Nc=!1;function Pc(e,t,n,r){t.child=e===null?ho(t,null,n,r):mo(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ea(t),r=Qo(e,t,n,o,a,i),s=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(R&&s&&ra(t),t.flags|=1,Pc(e,t,r,i),t.child)}function Ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ii(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Lc(e,t,a,r,i)):(e=zi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ul(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Gr:n,n(o,r)&&e.ref===t.ref)return ll(e,t,i)}return t.flags|=1,e=Li(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Gr(a,r)&&e.ref===t.ref){if(Nc=!1,t.pendingProps=r=a,ul(e,i))e.flags&131072&&(Nc=!0);else return t.lanes=e.lanes,ll(e,t,i)}}return Gc(e,t,n,r,i)}function Rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Bc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ya(t,a===null?null:a.cachePool),a===null?jo():Ao(t,a),Lo(t);else return r=t.lanes=536870912,Bc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ya(t,null),jo(),Ro()):(Ya(t,a.cachePool),Ao(t,a),Ro(),t.memoizedState=null);return Pc(e,t,i,n),t.child}function zc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bc(e,t,n,r,i){var a=Ja();return a=a===null?null:{parent:Na._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ya(t,null),jo(),Lo(t),e!==null&&wa(e,t,r,!0),t.childLanes=i,null}function Vc(e,t){return t=el({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hc(e,t,n){return mo(t,e.child,null,n),e=Vc(t,t.pendingProps),e.flags|=2,zo(t),t.memoizedState=null,e}function Uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(R){if(r.mode===`hidden`)return e=Vc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},zc(null,e);if(Io(t),(e=L)?(e=am(e,ca),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=536870912,null}return Vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Io(t),a){if(t.flags&256)t.flags&=-257,t=Hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Nc||wa(e,t,n,!1),a=(n&e.childLanes)!==0,Nc||a){if(Oo.current===null){if(r=q,r!==null&&(s=wt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ai(e,s),Pd(r,e,s),Mc;Kd()}t=Hc(e,t,n)}else e=o.treeContext,L=lm(s.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=Vc(t,r),t.flags|=134221824;return t}return e=Li(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gc(e,t,n,r,i){return Ea(t),n=Qo(e,t,n,r,void 0,i),r=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(R&&r&&ra(t),t.flags|=1,Pc(e,t,n,i),t.child)}function Kc(e,t,n,r,i,a){return Ea(t),t.updateQueue=null,n=es(t,r,n,i),$o(e),r=ns(),e!==null&&!Nc?(rs(e,t,a),ll(e,t,a)):(R&&r&&ra(t),t.flags|=1,Pc(e,t,n,a),t.child)}function qc(e,t,n,r,i){if(Ea(t),t.stateNode===null){var a=Ni,o=n.contextType;typeof o==`object`&&o&&(a=Da(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},_o(t),o=n.contextType,a.context=typeof o==`object`&&o?Da(o):Ni,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(vc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&yc.enqueueReplaceState(a,a.state,null),To(t,r,a,i),wo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Sc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ni,typeof u==`object`&&u&&(o=Da(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&xc(t,a,r,o),go=!1;var f=t.memoizedState;a.state=f,To(t,r,a,i),wo(),l=t.memoizedState,s||f!==l||go?(typeof d==`function`&&(vc(t,n,d,r),l=t.memoizedState),(c=go||bc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,vo(e,t),o=t.memoizedProps,u=Sc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ni,typeof l==`object`&&l&&(c=Da(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&xc(t,a,r,c),go=!1,f=t.memoizedState,a.state=f,To(t,r,a,i),wo();var p=t.memoizedState;o!==d||f!==p||go||e!==null&&e.dependencies!==null&&Ta(e.dependencies)?(typeof s==`function`&&(vc(t,n,s,r),p=t.memoizedState),(u=go||bc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ta(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Wc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=mo(t,e.child,null,i),t.child=mo(t,null,n,i)):Pc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ll(e,t,i),e}function Jc(e,t,n,r){return ma(),t.flags|=256,Pc(e,t,n,r),t.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:Xa()}}function Zc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Bo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(R){if(i?Fo(t):Ro(),(e=L)?(e=am(e,ca),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Qi===null?null:{id:$i,overflow:ea},retryLane:536870912,hydrationErrors:null},n=Hi(e),n.return=t,t.child=n,oa=t,L=null)):e=null,e===null)throw ua(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ro(),i=t.mode,a=el({mode:`hidden`,children:a},i),r=Bi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Xc(n),r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(null,r)):(Fo(t),$c(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return nl(e,t,a,o,r,c,s,n)}return i?(Ro(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Li(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Bi(i,a,n,null),i.flags|=2):i=Li(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,zc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Xc(n):(a=i.cachePool,a===null?a=Xa():(s=Na._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(e.child,r)):(Fo(t),n=e.child,e=n.sibling,n=Li(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function $c(e,t){return t=el({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function el(e,t){return e=Fi(22,e,null,t),e.lanes=0,e}function tl(e,t,n){return mo(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Fo(t),t.flags&=-257,tl(e,t,c)):t.memoizedState===null?(Ro(),o=a.fallback,s=t.mode,a=el({mode:`visible`,children:a.children},s),o=Bi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,mo(t,e.child,null,c),a=t.child,a.memoizedState=Xc(c),a.childLanes=Zc(e,r,c),t.memoizedState=Yc,zc(null,a)):(Ro(),t.child=e.child,t.flags|=128,null);if(Fo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ga({value:a,source:null,stack:null})),tl(e,t,c)}if(Nc||wa(e,t,c,!1),r=(c&e.childLanes)!==0,Nc||r){if(Oo.current!==null)return tl(e,t,c);if(r=q,r!==null&&(a=wt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ai(e,a),Pd(r,e,a),Mc;return om(o)||Kd(),tl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,L=lm(o.nextSibling),oa=t,R=!0,sa=null,ca=!1,e!==null&&aa(t,e),t=$c(t,a.children),t.flags|=134221824,t)}function rl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function il(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Uo(n)===null&&(t=e),e=e.sibling}return t}function al(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ol(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function sl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Bo.current;if(t.flags&128)return Vo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Vo(t,o),i===`backwards`&&e!==null?(ol(e),Pc(e,t,r,n),ol(e)):Pc(e,t,r,n),r=R?Yi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rl(e,n,t);else if(e.tag===19)rl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ol(t)),al(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,a,r);break;case`together`:al(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,a,r)}return t.child}function cl(e,t,n){var r=t.pendingProps;return ba(t,t.type,r.value),Pc(e,t,r.children,n),t.child}function ll(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(wa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Li(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Li(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ul(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ta(e)))}function dl(e,t,n){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),ba(t,Na,e.memoizedState.cache),ma();break;case 27:case 5:Fe(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fo(t),t.flags|=128,null;r=wa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Qc(e,t,n):(Fo(t),e=ll(e,t,n),e===null?null:e.sibling)}Fo(t);break;case 19:if(t.flags&128)return sl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(wa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return sl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Vo(t,Bo.current),r)break;return null;case 22:return t.lanes=0,Rc(e,t,n,t.pendingProps);case 24:ba(t,Na,e.memoizedState.cache)}return ll(e,t,n)}function fl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Nc=!0;else{if(!ul(e,n)&&!(t.flags&128))return Nc=!1,dl(e,t,n);Nc=!!(e.flags&131072)}}else Nc=!1,R&&t.flags&1048576&&na(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=ro(t.elementType),t.type=e,typeof e==`function`)Ii(e)?(r=Sc(e,r),t.tag=1,t=qc(null,t,e,r,n)):(t.tag=0,t=Gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===le){t.tag=11,t=Fc(null,t,e,r,n);break a}if(a===fe){t.tag=14,t=Ic(null,t,e,r,n);break a}if(a===ce){t.tag=10,t.type=e,t=cl(null,t,n);break a}}throw t=Se(e)||e,Error(i(306,t,``))}}return t;case 0:return Gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Sc(r,t.pendingProps),qc(e,t,r,a,n);case 3:a:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,vo(e,t),To(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ba(t,Na,r),r!==o.cache&&Ca(t,[Na],n,!0),wo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Jc(e,t,r,n);break a}if(r!==a){a=Gi(Error(i(424)),t),ga(a),t=Jc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(L=lm(e.firstChild),oa=t,R=!0,sa=null,ca=!0,n=ho(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ma(),r===a){t=ll(e,t,n);break a}Pc(e,t,r,n)}t=t.child}return t;case 26:return Wc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:R||(t.stateNode=fp(t.type,t.pendingProps,je.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Fe(t),e===null&&R&&(r=t.stateNode=hm(t.type,t.pendingProps,je.current),oa=t,ca=!0,a=L,Sp(t.type)?(um=a,L=lm(r.firstChild)):L=a),Pc(e,t,t.pendingProps.children,n),Wc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&R&&((a=r=L)&&(r=rm(r,t.type,t.pendingProps,ca),r===null?a=!1:(t.stateNode=r,oa=t,L=lm(r.firstChild),ca=!1,a=!0)),a||ua(t)),Fe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Qo(e,t,ts,null,null,n),sh._currentValue=a),Wc(e,t),Pc(e,t,r,n),t.child;case 6:return e===null&&R&&((e=n=L)&&(n=im(n,t.pendingProps,ca),n===null?e=!1:(t.stateNode=n,oa=t,L=null,e=!0)),e||ua(t)),null;case 13:return Qc(e,t,n);case 4:return Ne(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mo(t,null,r,n):Pc(e,t,r,n),t.child;case 11:return Fc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Wc(e,t),Pc(e,t,r,n),t.child;case 8:return Pc(e,t,t.pendingProps.children,n),t.child;case 12:return Pc(e,t,t.pendingProps.children,n),t.child;case 10:return cl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ea(t),a=Da(a),r=r(a),t.flags|=1,Pc(e,t,r,n),t.child;case 14:return Ic(e,t,t.type,t.pendingProps,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 19:return sl(e,t,n);case 31:return Uc(e,t,n);case 22:return Rc(e,t,n,t.pendingProps);case 24:return Ea(t),r=Da(Na),e===null?(a=Ja(),a===null&&(a=q,o=Pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},_o(t),ba(t,Na,a)):((e.lanes&n)!==0&&(vo(e,t),To(t,null,null,n),wo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ba(t,Na,r),r!==a.cache&&Ca(t,[Na],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ba(t,Na,r))),Pc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:R&&ra(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Wc(e,t),Pc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function pl(e){e.flags|=4}function ml(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw io=eo,Qa}}else e.flags&=-16777217}function hl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw io=eo,Qa}}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:vt(),e.lanes|=t,ud|=t)}function _l(e,t){if(!R)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vl(e,t,n){var r=t.pendingProps;switch(ia(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Na),Pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(pa(t)?pl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ha())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(pl(t),o===null?(W(t),ml(t,a,null,r,n)):(W(t),hl(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(pl(t),W(t),hl(t,o)):(e=e.memoizedProps,e!==r&&pl(t),W(t),ml(t,a,e,r,n)),null;case 27:if(Ie(t),n=je.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),t.subtreeFlags&=-33554433,null}e=ke.current,pa(t)?da(t,e):(e=hm(a,r,n),t.stateNode=e,pl(t))}return W(t),t.subtreeFlags&=-33554433,null;case 5:if(Ie(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),t.subtreeFlags&=-33554433,null}if(o=ke.current,pa(t))da(t,o);else{var s=lp(je.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[At]=t,o[j]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&pl(t)}}return W(t),t.subtreeFlags&=-33554433,ml(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=je.current,pa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=oa,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[At]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ua(t,!0)}else e=lp(e).createTextNode(r),e[At]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=pa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[At]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(zo(t),t):(zo(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=pa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[At]=t}else ma(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=ha(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(zo(t),t):(zo(t),null)}return zo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),gl(t,t.updateQueue),W(t),null);case 4:return Pe(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,W(t),null;case 10:return xa(t.type),W(t),null;case 19:if(Ho(t),r=t.memoizedState,r===null)return W(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)_l(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Uo(e),o!==null){for(t.flags|=128,_l(r,!1),e=o.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ri(n,e),n=n.sibling;return Vo(t,Bo.current&1|2),R&&ta(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ye()>gd&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Uo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),_l(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!R)return W(t),null}else 2*Ye()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ye(),e.sibling=null,o=Bo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||R?Vo(t,o):(n=o,k(No,t),k(Bo,n),Po===null&&(Po=t)),R&&ta(t,r.treeForkCount),e}return W(t),null;case 22:case 23:return zo(t),Mo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&gl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Oe(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Na),W(t),null;case 25:return null;case 30:return t.flags|=33554432,W(t),null}throw Error(i(156,t.tag))}function yl(e,t){switch(ia(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xa(Na),Pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ie(t),null;case 31:if(t.memoizedState!==null){if(zo(t),t.alternate===null)throw Error(i(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(zo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ma()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ho(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Pe(),null;case 10:return xa(t.type),null;case 22:case 23:return zo(t),Mo(),e!==null&&Oe(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return xa(Na),null;case 25:return null;default:return null}}function bl(e,t){switch(ia(t),t.tag){case 3:xa(Na),Pe();break;case 26:case 27:case 5:Ie(t);break;case 4:Pe();break;case 31:t.memoizedState!==null&&zo(t);break;case 13:zo(t);break;case 19:Ho(t);break;case 10:xa(t.type);break;case 22:case 23:zo(t),Mo(),e!==null&&Oe(qa);break;case 24:xa(Na)}}function xl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Sl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Cl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Do(t,n)}catch(t){Z(e,e.return,t)}}}function wl(e,t,n){n.props=Sc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=bi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);f(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function El(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Dl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Ol(e){for(var t=e.return;t!==null&&(jl(t)&&em(e.stateNode,t.stateNode),!Al(t));)t=t.return}function kl(e){for(var t=e.return;t!==null&&(jl(t)&&tm(e.stateNode,t.stateNode),!Al(t));)t=t.return}function Al(e){return e.tag===5||e.tag===3||e.tag===27}function jl(e){return e&&e.tag===7&&e.stateNode!==null}function Ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Nl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[j]=t}catch(t){Z(e,e.return,t)}}function Pl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Fl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wn)),Dl(e,r),M=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Dl(e,r),M=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[At]=e,t[j]=n}catch(t){Z(e,e.return,t)}}var zl=!1,Bl=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(zl=!0)}var Hl=null;function Ul(){var e=Hl;return Hl=null,e}var Wl=0;function Gl(e,t,n,r,i){return Wl=0,Kl(e.child,t,n,r,i)}function Kl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);zl=!0,Tp(o,Wl===0?t:t+`_`+Wl,n),Wl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Kl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ql(e.child,t)),e=e.sibling}function Jl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=Si(t.default,t.share),t!==`none`&&(Gl(e,n,t,null,!1)||ql(e.child,!1))}e=e.sibling}}function Yl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=bi(r,n),a=Si(r.default,n.paired?r.share:r.enter);a===`none`?Jl(e):Gl(e,i,a,null,!1)?(Jl(e),n.paired||t||Nd(e,r.onEnter)):ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e,t),e=e.sibling;else Jl(e)}function Xl(e){if(Bl!==null&&Bl.size!==0){var t=Bl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Si(n.default,n.share);if(a!==`none`&&(Gl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):ql(e.child,!1)),t.delete(r),t.size===0)break}}}Xl(e)}e=e.sibling}}}function Zl(e){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode),r=Bl===null?void 0:Bl.get(n),i=Si(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Gl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Bl.delete(n),Nd(e,t.onShare)):ql(e.child,!1)),Bl!==null&&Xl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Bl!==null&&Xl(e)}function Ql(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=bi(t,e.stateNode);t=Si(t.default,t.update),e.flags&=-5,t!==`none`&&Gl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ql(e);e=e.sibling}}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,ql(e.child,!1))}$l(e)}e=e.sibling}}function eu(e){if(e.tag===30)e.stateNode.paired=null,ql(e.child,!1),$l(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else $l(e)}function tu(e){for(e=e.child;e!==null;)e.tag===30?ql(e.child,!1):e.subtreeFlags&33554432&&tu(e),e=e.sibling}function nu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Wl<a.length){var l=a[Wl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Wl===0?n:n+`_`+Wl,i),s&&e.flags&4||(Hl===null&&(Hl=[]),Hl.push(c,Wl===0?r:r+`_`+Wl,t.memoizedProps)),Wl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:nu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ru(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=bi(n,r),a=Si(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Wl=0,i=nu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ru(e,t);e=e.sibling}}var iu=!1,G=!1,au=!1,ou=!1,su=typeof WeakSet==`function`?WeakSet:Set,cu=null,lu=!1,uu=!1,du=!1,fu=!1;function pu(e,t,n){if(e=e.containerInfo,sp=gh,e=Xr(e),Zr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,cu=t,t=n?9270:1024;cu!==null;){if(e=cu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Zl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),mu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Zl(r),mu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),mu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,cu=r):(n&&Ql(e),mu(n))}}Bl=null}function mu(e){for(;cu!==null;){var t=cu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Sc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=bi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=Si(a.default,a.update),a!==`none`&&Gl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,cu=r;break}cu=t.return}}function hu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&xl(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Sc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Cl(n),r&512&&Tl(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Do(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Rl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Ml(n),r&512&&Tl(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||iu,!r){var a=t!==null&&t.memoizedState!==null||G;t=iu,i=G,iu=r,(G=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),iu=t,G=i}break;case 30:Fu(e,n),r&512&&Tl(n,n.return);break;case 7:r&512&&Tl(n,n.return);default:Fu(e,n)}}function gu(e,t){for(e=e.child;e!==null;)_u(e,t),e=e.sibling}function _u(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,M=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&gu(e,t);break;default:gu(e,t)}}function vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:_u(n,r);break a;case 22:n.memoizedState===null&&vu(n,r);break a;default:vu(n,r)}}e=e.sibling}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bu=null,xu=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(at&&typeof at.onCommitFiberUnmount==`function`)try{at.onCommitFiberUnmount(it,n)}catch{}switch(n.tag){case 26:G||El(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!G&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:G||El(n,t),kl(n);var r=bu,i=xu;Sp(n.type)&&(bu=n.stateNode,xu=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),bu=r,xu=i;break;case 5:G||El(n,t),kl(n);case 6:if(n.tag===6&&kl(n),r=bu,i=xu,bu=null,Su(e,t,n),bu=r,xu=i,bu!==null){if(xu)try{(bu.nodeType===9?bu.body:bu.nodeName===`HTML`?bu.ownerDocument.body:bu).removeChild(n.stateNode),M=!0}catch(e){Z(n,t,e)}else try{bu.removeChild(n.stateNode),M=!0}catch(e){Z(n,t,e)}}break;case 18:bu!==null&&(xu?(e=bu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(bu,n.stateNode));break;case 4:r=bu,i=xu,bu=n.stateNode.containerInfo,xu=!0,Su(e,t,n),bu=r,xu=i;break;case 0:case 11:case 14:case 15:Sl(2,n,t),G||Sl(4,n,t),Su(e,t,n);break;case 1:G||(El(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&wl(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:G=(r=G)||n.memoizedState!==null,Su(e,t,n),G=r;break;case 30:El(n,t),Su(e,t,n);break;case 7:G||El(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new su),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new su),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){bu=l.stateNode,xu=!1;break a}break;case 5:bu=l.stateNode,xu=!1;break a;case 3:case 4:bu=l.stateNode.containerInfo,xu=!0;break a}l=l.return}if(bu===null)throw Error(i(160));Cu(s,c,o),bu=null,xu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(Sl(3,e,e.return),xl(3,e),Sl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),a&64&&iu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(iu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[It]||r[At]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[At]=e,Ut(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[At]=e,Ut(r),t=r}e.stateNode=t}}else iu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||G||t.parentNode.removeChild(t)):a.count--,n===null?iu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),r!==null&&a&4&&Nl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=au,au=!1,Ou(t,e,n),au=o,ju(e),a&512&&(G||r===null||El(r,r.return)),e.flags&32){t=e.stateNode;try{gn(t,``),M=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Nl(e,t,r===null?t:r.memoizedProps)),a&1024&&(ou=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,M=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(M=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}ou&&(ou=!1,Mu(e)),M=!1;break;case 4:a=au,au=iu,r=$t(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,M&&uu&&(du=!0),M=r,au=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Ye()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=iu,l=G,u=au;iu=c||o,au=u||o,G=l||s,Ou(t,e,n),G=l,au=u,iu=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||iu||G||(t=s||G,n=iu,r=G,iu=o||iu,G=t,Iu(e,2),iu=n,G=r),!o&&au||gu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(G||r===null||El(r,r.return)),a=$t(),o=uu,s=(n&335544064)===n,c=e.memoizedProps,uu=s&&Si(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&M&&(e.flags|=4),uu=o,M=a;break;case 21:break;case 7:a&512&&(G||r===null||El(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Pl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(jl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Al(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ll(e,Fl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(gn(l,``),n.flags&=-33),Ll(e,Fl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Il(e,Fl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else ru(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Yl(e,!1);else switch(e.tag){case 3:if(fu=lu=!1,Ul(),Nu(t,e),!lu&&!du){if(e=Hl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),fu=!0}Hl=null;break;case 5:Nu(t,e);break;case 4:r=lu,lu=!1,Nu(t,e),lu&&(du=!0),lu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Yl(e,!1));break;case 30:r=lu,i=Ul(),lu=!1,Nu(t,e),lu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=bi(a,o),o=bi(n.memoizedProps,o);var s=Si(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wl=0,t=nu(e,n,t,o,s,a,!0),Wl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Hl=i):i!==null&&(i.push.apply(i,Hl),Hl=i),lu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Sl(4,n,n.return),Iu(n,r);break;case 1:El(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&wl(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:El(n,n.return),n.tag!==5&&n.tag!==27||kl(n),Iu(n,r);break;case 6:kl(n);break;case 26:El(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||G||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:El(n,n.return),Iu(n,r);break;case 7:El(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),xl(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Eo(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Cl(a),Tl(a,a.return);break;case 27:n&2&&Rl(a);case 5:a.tag!==5&&a.tag!==27||Ol(a),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 6:Ol(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||iu||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),Tl(a,a.return);break;case 30:Lu(i,a,n),Tl(a,a.return);break;case 7:Tl(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Fa(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Fa(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&tu(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&eu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&xl(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&fu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Fa(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&eu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&eu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(ql(a.child,!0),ql(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),xl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Bl===null&&(Bl=new Map),Bl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;cu!==null;){var n=cu;switch(n.tag){case 0:case 11:case 15:Sl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Fa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cu=r;else a:for(n=e;cu!==null;){r=cu;var i=r.sibling,a=r.return;if(yu(r),r===n){cu=null;break a}if(i!==null){i.return=a,cu=i;break a}cu=a}}}var Qu={getCacheForType:function(e){var t=Da(Na),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Da(Na).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:D.T===null?Dt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||R){var e=ft;ft<<=1,!(ft&3932160)&&(ft=262144),ld=e}else ld=536870912}return e=No.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(bi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),bt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||ht(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Ye(),10<a)){if(Rd(r,t,ld,!td),mt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wn},Bl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Ye():(a&4194048)===a?hd-Ye():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Wr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=gt(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-st(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&St(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,ya=va=null,is(e),so=null,co=0,e=J;for(;e!==null;)bl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Li(e.current,null),Y=t,X=0,ed=null,td=!1,nd=ht(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=gt(e,t),Di(),n}function Hd(e,t){z=null,D.H=mc,t===Za||t===$a?(t=ao(),X=3):t===Qa?(t=ao(),X=4):X=t===Mc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Ec(e,Gi(t,e.current)))}function Ud(){var e=No.current;return e===null?!0:(Y&4194048)===Y?Po===null:(Y&62914560)===Y||Y&536870912?e===Po:!1}function Wd(){var e=D.H;return D.H=mc,e===null?mc:e}function Gd(){var e=D.A;return D.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&No.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:No.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ya=va=null,K=r,D.H=i,D.A=a,J===null&&(q=null,Y=0,Di()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=Ye()+500,Vd(e,t)):nd=ht(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(to(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:to(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ya=va=null,D.H=r,D.A=a,K=n,J===null?(q=null,Y=0,Di(),ad):0}function Xd(){for(;J!==null&&!qe();)Zd(J)}function Zd(e){var t=fl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Kc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:is(t);var r=t;r===oa&&(R?(fa(r),r.tag===5&&r.stateNode!=null&&(L=r.stateNode)):(fa(r),R=!0));default:bl(n,t),t=J=Ri(t,id),t=fl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){ya=va=null,is(t),so=null,co=0;var i=t.return;try{if(jc(e,i,t,n,Y)){ad=1,Ec(e,Gi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Ec(e,Gi(n,e.current)),J=null;return}t.flags&32768?(R||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=No.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=vl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=yl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ei,xt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ra(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf($e,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),zl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=D.T,D.T=null,i=O.p,O.p=2,a=K,K|=4;try{pu(e,t,n)}finally{K=a,O.p=i,D.T=r}}yd=1,zl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=D.T,D.T=null;var i=O.p;O.p=2;var a=K;K|=4;try{uu=du=!1,Au(t,e,n),n=cp;var o=Xr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Yr(s.ownerDocument.documentElement,s)){if(c!==null&&Zr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Jr(s,h),v=Jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,O.p=i,D.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{hu(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Je();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),Et(r),n=n.stateNode,at&&typeof at.onCommitFiberRoot==`function`)try{at.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=D.T,a=O.p,O.p=2,D.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{D.T=n,O.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Fa(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=Et(Sd),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),at&&typeof at.onPostCommitFiberRoot==`function`)try{at.onPostCommitFiberRoot(it,o)}catch{}return!0}finally{O.p=a,D.T=r,uf(e,t)}}function pf(e,t,n){t=Gi(n,t),t=Oc(e.stateNode,t,2),e=bo(e,t,2),e!==null&&(bt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Gi(n,e),n=kc(2),r=bo(t,n,2),r!==null&&(Ac(n,r,t,e),bt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>Ye()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=vt()),e=Ai(e,t),e!==null&&(bt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ge(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-st(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=mt(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||ht(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=Ye(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-st(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=_t(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=mt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||ht(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ke(r),Et(n)){case 2:case 8:n=Qe;break;case 32:n=$e;break;case 268435456:n=tt;break;default:n=$e}return r=jf.bind(null,e),n=Ge(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ke(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=mt(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,Ye()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?Ge(Ze,Of):kf()})}function Pf(){if(Tf===0){var e=Va;e===0&&(e=dt,dt<<=1,!(dt&261888)&&(dt=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Cn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[j]||null).action),o=r.submitter;o&&(t=(t=o[j]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);ec(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ec(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<_i.length;Lf++){var Rf=_i[Lf];vi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}vi(li,`onAnimationEnd`),vi(ui,`onAnimationIteration`),vi(di,`onAnimationStart`),vi(`dblclick`,`onDoubleClick`),vi(`focusin`,`onFocus`),vi(`focusout`,`onBlur`),vi(fi,`onTransitionRun`),vi(pi,`onTransitionStart`),vi(mi,`onTransitionCancel`),vi(hi,`onTransitionEnd`),Jt(`onMouseEnter`,[`mouseout`,`mouseover`]),Jt(`onMouseLeave`,[`mouseout`,`mouseover`]),Jt(`onPointerEnter`,[`pointerout`,`pointerover`]),Jt(`onPointerLeave`,[`pointerout`,`pointerover`]),qt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),qt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),qt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),qt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),qt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),qt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Ci(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Mt];n===void 0&&(n=t[Mt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Gt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!P||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=zt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}jn(function(){var r=a,i=En(n),s=[];a:{var c=gi.get(e);if(c!==void 0){var l=Wn,u=e;switch(e){case`keypress`:if(zn(n)===0)break a;case`keydown`:case`keyup`:l=sr;break;case`focusin`:u=`focus`,l=$n;break;case`focusout`:u=`blur`,l=$n;break;case`beforeblur`:case`afterblur`:l=$n;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Zn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Qn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ur;break;case li:case ui:case di:l=er;break;case hi:l=dr;break;case`scroll`:case`scrollend`:l=Kn;break;case`wheel`:l=fr;break;case`copy`:case`cut`:case`paste`:l=tr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=cr;break;case`submit`:l=lr;break;case`toggle`:case`beforetoggle`:l=pr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Mn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==Tn&&(u=n.relatedTarget||n.fromElement)&&(zt(u)||u[jt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?zt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Zn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=cr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Vt(c),h=l==null?u:Vt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,zt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ne(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?Vt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Mr;else if(Er(c)){if(Nr)_=Hr;else{_=Br;var v=zr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&bn(r.elementType)&&(_=Mr):_=Vr;if(_&&=_(e,r)){Dr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Vt(r):window,e){case`focusin`:(Er(v)||v.contentEditable===`true`)&&($r=v,ei=r,ti=null);break;case`focusout`:ti=ei=$r=null;break;case`mousedown`:ni=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ni=!1,ri(s,n,i);break;case`selectionchange`:if(Qr)break;case`keydown`:case`keyup`:ri(s,n,i)}var y;if(hr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else I?xr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(vr&&n.locale!==`ko`&&(I||b!==`onCompositionStart`?b===`onCompositionEnd`&&I&&(y=Rn()):(Fn=i,In=`value`in Fn?Fn.value:Fn.textContent,I=!0)),v=Jf(r,b),0<v.length&&(b=new nr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Sr(n),y!==null&&(b.data=y)))),(y=_r?Cr(e,n):wr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new nr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Mn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Mn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Mn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Mn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&gn(e,``+r);else return;break;case`className`:tn(e,`class`,r);break;case`tabIndex`:tn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:tn(e,n,r);break;case`style`:yn(e,r,o);return;case`data`:if(t!==`object`){tn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Cn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=wn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Cn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),en(e,`popover`,r);break;case`xlinkActuate`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:nn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:nn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:nn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:nn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:en(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=xn.get(n)||n,en(e,n,r);else return}M=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:yn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)gn(e,r);else if(typeof r==`number`||typeof r==`bigint`)gn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=wn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[j]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}M=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):en(e,n,r)}return}M=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}dn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&pn(e,!!r,n,!0):pn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}hn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(bn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(M=!0),o=m;break;case`name`:m!==f&&(M=!0),a=m;break;case`checked`:m!==f&&(M=!0),u=m;break;case`defaultChecked`:m!==f&&(M=!0),d=m;break;case`value`:m!==f&&(M=!0),s=m;break;case`defaultValue`:m!==f&&(M=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}un(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(M=!0),p=o;break;case`defaultValue`:o!==l&&(M=!0),c=o;break;case`multiple`:o!==l&&(M=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?pn(e,!!n,n?[]:``,!1):pn(e,!!n,t,!0)):pn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(M=!0),p=a;break;case`defaultValue`:a!==o&&(M=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}mn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(M=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(bn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[At]=r,n[j]=t,np(n,e,t),Ut(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[It]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:w({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),f(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),f(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=m(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){f(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];f(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=m(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&f(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),f(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),f(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return f(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=m(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=m(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];f(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,g(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=g(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=zt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=m(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ne(n,a,C),t===null?t=!1:(f(t,!0,ee,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ne(r,a,C),t===null?t=!1:(f(t,!0,te,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];f(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||m(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Rt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[It])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===wn&&(e.onclick=null),Rt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=O.d;O.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Bt(e);t!==null&&t.tag===5&&t.type===`form`?nc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=ln(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Ut(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+ln(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+ln(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+ln(n.imageSizes)+`"]`)):i+=`[href="`+ln(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=w({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Lt]=!0,o.onload=o.onerror=function(){Wt(o)}),Ut(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+ln(r)+`"][href="`+ln(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=w({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Ut(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Ht(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=w({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Ut(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Ht(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ut(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Ht(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=w({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Ut(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=je.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Ht(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Ht(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Ht(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+ln(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Lt]){r.loading=1;return}}else t=e.createElement(`link`),t[Lt]=!0,t.onload=t.onerror=Wt.bind(null,t),np(t,`link`,n),Ut(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+ln(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+ln(n.href)+`"]`);if(r)return t.instance=r,Ut(r),r;var a=w({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Ut(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Ut(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Ut(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Ut(a),a):(r=n,(a=vm.get(o))&&(r=w({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Ut(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[It]||a[At]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Ut(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Ut(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:ce,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.hiddenUpdates=yt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Fi(3,null,null,t),e.current=a,a.stateNode=e,t=Pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},_o(a),e}function uh(e){return e?(e=Ni,e):Ni}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=yo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=bo(e,r,t),n!==null&&(Pd(n,e,t),xo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ai(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=Tt(t);var n=Ai(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function vh(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,yh(e,t,n,r)}finally{O.p=a,D.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Bt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=pt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-st(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=Ye()+500,Df(0,!1))}}break;case 31:case 13:s=Ai(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=En(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=zt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Xe()){case Ze:return 2;case Qe:return 8;case $e:case et:return 32;case tt:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Bt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=zt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Ot(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Ot(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tn=r,n.target.dispatchEvent(r),Tn=null}else return t=Bt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Bt(n);a!==null&&(e.splice(t,3),t-=3,ec(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[j]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[j]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[jt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:d(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{it=Jh.inject(qh),at=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Cc,s=wc,c=Tc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[jt]=t.current,Wf(e),new Wh(t)}})),y=s(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=v()})),b=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function x(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:b(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var S=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},ee=e=>{let t=S(e);return t.charAt(0).toUpperCase()+t.slice(1)},te=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),C={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function ne(e){return e!=null}function w(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??C.width,a=e.size??e.height??C.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?te(...c):te(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??C[`stroke-width`])*Number(e.size??e.width??C.width)/Number(t.size??t.width??C.width):t.strokeWidth??C[`stroke-width`];return[`svg`,{...Object.entries(C).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&ne(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&ne(t.width)&&{[r(`width`)]:t.width},...`height`in t&&ne(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function re(e,t={}){return w(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var ie=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},T=u(p(),1),ae=(0,T.createContext)({}),oe=()=>(0,T.useContext)(ae),se=(0,T.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:_=`currentColor`,className:v=``}=oe()??{},y=!!c||ie(d),[b,x,S=[]]=re(u,{color:e??_,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:te(v,s),hasA11yProp:y,attributes:d});return(0,T.createElement)(b,{ref:f,...x},[...S.map(([e,t])=>(0,T.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function E(e,t=[],n=[]){let r=typeof e==`string`?x(e,t,n):e,i=(0,T.forwardRef)(({className:e,...t},n)=>(0,T.createElement)(se,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=ee(r.name)),i}var ce={name:`activity`,size:24,node:[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]};ce.node;var le=E(ce),ue={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]};ue.node;var de=E(ue),fe={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};fe.node;var pe=E(fe),me={name:`brain-circuit`,size:24,node:[[`path`,{d:`M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z`,key:`l5xja`}],[`path`,{d:`M9 13a4.5 4.5 0 0 0 3-4`,key:`10igwf`}],[`path`,{d:`M6.003 5.125A3 3 0 0 0 6.401 6.5`,key:`105sqy`}],[`path`,{d:`M3.477 10.896a4 4 0 0 1 .585-.396`,key:`ql3yin`}],[`path`,{d:`M6 18a4 4 0 0 1-1.967-.516`,key:`2e4loj`}],[`path`,{d:`M12 13h4`,key:`1ku699`}],[`path`,{d:`M12 18h6a2 2 0 0 1 2 2v1`,key:`105ag5`}],[`path`,{d:`M12 8h8`,key:`1lhi5i`}],[`path`,{d:`M16 8V5a2 2 0 0 1 2-2`,key:`u6izg6`}],[`circle`,{cx:`16`,cy:`13`,r:`.5`,key:`ry7gng`}],[`circle`,{cx:`18`,cy:`3`,r:`.5`,key:`1aiba7`}],[`circle`,{cx:`20`,cy:`21`,r:`.5`,key:`yhc1fs`}],[`circle`,{cx:`20`,cy:`8`,r:`.5`,key:`1e43v0`}]]};me.node;var he=E(me),ge={name:`brain`,size:24,node:[[`path`,{d:`M12 18V5`,key:`adv99a`}],[`path`,{d:`M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4`,key:`1e3is1`}],[`path`,{d:`M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5`,key:`1gqd8o`}],[`path`,{d:`M17.997 5.125a4 4 0 0 1 2.526 5.77`,key:`iwvgf7`}],[`path`,{d:`M18 18a4 4 0 0 0 2-7.464`,key:`efp6ie`}],[`path`,{d:`M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517`,key:`1gq6am`}],[`path`,{d:`M6 18a4 4 0 0 1-2-7.464`,key:`k1g0md`}],[`path`,{d:`M6.003 5.125a4 4 0 0 0-2.526 5.77`,key:`q97ue3`}]]};ge.node;var _e=E(ge),ve={name:`briefcase-business`,size:24,node:[[`path`,{d:`M12 12h.01`,key:`1mp3jc`}],[`path`,{d:`M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2`,key:`1ksdt3`}],[`path`,{d:`M22 13a18.15 18.15 0 0 1-20 0`,key:`12hx5q`}],[`rect`,{width:`20`,height:`14`,x:`2`,y:`6`,rx:`2`,key:`i6l2r4`}]]};ve.node;var ye=E(ve),be={name:`chart-column`,size:24,node:[[`path`,{d:`M3 3v16a2 2 0 0 0 2 2h16`,key:`c24i48`}],[`path`,{d:`M18 17V9`,key:`2bz60n`}],[`path`,{d:`M13 17V5`,key:`1frdt8`}],[`path`,{d:`M8 17v-3`,key:`17ska0`}]],aliases:[`bar-chart-3`]};be.node;var xe=E(be),Se={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]};Se.node;var Ce=E(Se),D={name:`clipboard-list`,size:24,node:[[`rect`,{width:`8`,height:`4`,x:`8`,y:`2`,rx:`1`,ry:`1`,key:`tgr4d6`}],[`path`,{d:`M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,key:`116196`}],[`path`,{d:`M12 11h4`,key:`1jrz19`}],[`path`,{d:`M12 16h4`,key:`n85exb`}],[`path`,{d:`M8 11h.01`,key:`1dfujw`}],[`path`,{d:`M8 16h.01`,key:`18s6g9`}]]};D.node;var O=E(D),we={name:`crosshair`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`22`,x2:`18`,y1:`12`,y2:`12`,key:`l9bcsi`}],[`line`,{x1:`6`,x2:`2`,y1:`12`,y2:`12`,key:`13hhkx`}],[`line`,{x1:`12`,x2:`12`,y1:`6`,y2:`2`,key:`10w3f3`}],[`line`,{x1:`12`,x2:`12`,y1:`22`,y2:`18`,key:`15g9kq`}]]};we.node;var Te=E(we),Ee={name:`dna`,size:24,node:[[`path`,{d:`m10 16 1.5 1.5`,key:`11lckj`}],[`path`,{d:`m14 8-1.5-1.5`,key:`1ohn8i`}],[`path`,{d:`M15 2c-1.798 1.998-2.518 3.995-2.807 5.993`,key:`80uv8i`}],[`path`,{d:`m16.5 10.5 1 1`,key:`696xn5`}],[`path`,{d:`m17 6-2.891-2.891`,key:`xu6p2f`}],[`path`,{d:`M2 15c6.667-6 13.333 0 20-6`,key:`1pyr53`}],[`path`,{d:`m20 9 .891.891`,key:`3xwk7g`}],[`path`,{d:`M3.109 14.109 4 15`,key:`q76aoh`}],[`path`,{d:`m6.5 12.5 1 1`,key:`cs35ky`}],[`path`,{d:`m7 18 2.891 2.891`,key:`1sisit`}],[`path`,{d:`M9 22c1.798-1.998 2.518-3.995 2.807-5.993`,key:`q3hbxp`}]]};Ee.node;var De=E(Ee),Oe={name:`flask-conical`,size:24,node:[[`path`,{d:`M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,key:`18mbvz`}],[`path`,{d:`M6.453 15h11.094`,key:`3shlmq`}],[`path`,{d:`M8.5 2h7`,key:`csnxdl`}]]};Oe.node;var k=E(Oe),ke={name:`handshake`,size:24,node:[[`path`,{d:`m11 17 2 2a1 1 0 1 0 3-3`,key:`efffak`}],[`path`,{d:`m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4`,key:`9pr0kb`}],[`path`,{d:`m21 3 1 11h-2`,key:`1tisrp`}],[`path`,{d:`M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3`,key:`1uvwmv`}],[`path`,{d:`M3 4h8`,key:`1ep09j`}]]};ke.node;var Ae=E(ke),je={name:`heart-pulse`,size:24,node:[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}],[`path`,{d:`M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27`,key:`auskq0`}]]};je.node;var Me=E(je),Ne={name:`house`,size:24,node:[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]],aliases:[`home`]};Ne.node;var Pe=E(Ne),Fe={name:`layers`,size:24,node:[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]],aliases:[`layers-3`]};Fe.node;var Ie=E(Fe),Le={name:`mail`,size:24,node:[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]};Le.node;var Re=E(Le),ze={name:`microscope`,size:24,node:[[`path`,{d:`M6 18h8`,key:`1borvv`}],[`path`,{d:`M3 22h18`,key:`8prr45`}],[`path`,{d:`M14 22a7 7 0 1 0 0-14h-1`,key:`1jwaiy`}],[`path`,{d:`M9 14h2`,key:`197e7h`}],[`path`,{d:`M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z`,key:`1bmzmy`}],[`path`,{d:`M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3`,key:`1drr47`}]]};ze.node;var Be=E(ze),Ve={name:`package-check`,size:24,node:[[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`path`,{d:`m16 17 2 2 4-4`,key:`uh5qu3`}],[`path`,{d:`M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753`,key:`kpkbpo`}],[`path`,{d:`M3.29 7 12 12l8.71-5`,key:`19ckod`}],[`path`,{d:`m7.5 4.27 8.997 5.148`,key:`9yrvtv`}]]};Ve.node;var He=E(Ve),Ue={name:`pill`,size:24,node:[[`path`,{d:`m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z`,key:`wa1lgi`}],[`path`,{d:`m8.5 8.5 7 7`,key:`rvfmvr`}]]};Ue.node;var We=E(Ue),Ge={name:`radar`,size:24,node:[[`path`,{d:`M19.07 4.93A10 10 0 0 0 6.99 3.34`,key:`z3du51`}],[`path`,{d:`M4 6h.01`,key:`oypzma`}],[`path`,{d:`M2.29 9.62A10 10 0 1 0 21.31 8.35`,key:`qzzz0`}],[`path`,{d:`M16.24 7.76A6 6 0 1 0 8.23 16.67`,key:`1yjesh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M17.99 11.66A6 6 0 0 1 15.77 16.67`,key:`1u2y91`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}],[`path`,{d:`m13.41 10.59 5.66-5.66`,key:`mhq4k0`}]]};Ge.node;var Ke=E(Ge),qe={name:`scan-line`,size:24,node:[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`}],[`path`,{d:`M7 12h10`,key:`b7w52i`}]]};qe.node;var Je=E(qe),Ye={name:`scan`,size:24,node:[[`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`,key:`aa7l1z`}],[`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`,key:`4qcy5o`}],[`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`,key:`6vwrx8`}],[`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`,key:`ioqczr`}]]};Ye.node;var Xe=E(Ye),Ze={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]};Ze.node;var Qe=E(Ze),$e={name:`stethoscope`,size:24,node:[[`path`,{d:`M11 2v2`,key:`1539x4`}],[`path`,{d:`M5 2v2`,key:`1yf1q8`}],[`path`,{d:`M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1`,key:`rb5t3r`}],[`path`,{d:`M8 15a6 6 0 0 0 12 0v-3`,key:`x18d4x`}],[`circle`,{cx:`20`,cy:`10`,r:`2`,key:`ts1r5v`}]]};$e.node;var et=E($e),tt={name:`users`,size:24,node:[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]};tt.node;var nt=E(tt),rt={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};rt.node;var it=E(rt),at=u(y(),1);function ot(e){let t=[];for(let n=e;n&&n!==document.body;n=n.parentElement){let e=getComputedStyle(n).position;(e===`sticky`||e===`-webkit-sticky`)&&t.push(n)}return t}function st(e){let t=0;for(let n=e;n;n=n.offsetParent)t+=n.offsetTop;return t}function ct(e){let t=ot(e);if(!t.length)return st(e);let n=t.map(e=>e.style.position);t.forEach(e=>{e.style.position=`static`});let r=st(e);return t.forEach((e,t)=>{e.style.position=n[t]}),r}function lt(){let e=document.querySelector(`[data-nav-header]`);if(!e){let e=document.querySelector(`.nav-root`);return e?e.offsetHeight:90}let t=document.querySelector(`.nav-root`),n=t&&parseFloat(getComputedStyle(t).getPropertyValue(`--nav-pad-solid`))||16;return e.offsetHeight+n*2}function ut(e){let t=document.getElementById(String(e).replace(`#`,``));return t?Math.max(0,ct(t)-lt()):null}function dt(e){let t=ut(e);return t!==null&&(window.scrollTo({top:t,behavior:`smooth`}),!0)}var ft=s((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),A=s(((e,t)=>{t.exports=ft()}))(),pt=[{name:`Home`,href:`#hero`,Icon:Pe},{name:`About SHRI-AI`,href:`#about`,Icon:Qe},{name:`Services`,href:`#focus`,Icon:Ie},{name:`Collaborating Organizations`,href:`#partnership`,Icon:Ae},{name:`Team`,href:`#team`,Icon:nt},{name:`Careers`,href:`#careers`,Icon:ye},{name:`Contact`,href:`#contact`,triggerForm:!0,Icon:Re}],mt=()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(!1),[i,a]=(0,T.useState)(!1),[o,s]=(0,T.useState)(!1),c=(0,T.useRef)(null),l=(0,T.useRef)(null),[u,d]=(0,T.useState)(`hero`);(0,T.useEffect)(()=>{let e=()=>r(window.scrollY>30);return e(),window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,T.useEffect)(()=>{let e=()=>{a(window.innerWidth<1180),s(window.innerWidth<1200)};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,T.useEffect)(()=>{let e=e=>{c.current&&!c.current.contains(e.target)&&t(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,T.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]),(0,T.useEffect)(()=>{let e=[],t=null,n=()=>{e=pt.map(({href:e})=>{let t=document.getElementById(e.slice(1));return t?{id:e.slice(1),top:ct(t)}:null}).filter(Boolean).sort((e,t)=>e.top-t.top)},r=()=>{if(t=null,!e.length)return;let n=window.scrollY+lt()+8,r=document.documentElement,i=window.scrollY+window.innerHeight>=r.scrollHeight-2,a=e[0].id;if(i)a=e[e.length-1].id;else for(let t of e)t.top<=n&&(a=t.id);d(e=>e===a?e:a)},i=()=>{t||=requestAnimationFrame(r)},a=()=>{n(),i()};n(),r(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,a);let o=setTimeout(a,1200);return document.fonts?.ready&&document.fonts.ready.then(a).catch(()=>{}),()=>{window.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,a),clearTimeout(o),t&&cancelAnimationFrame(t)}},[]);let f=(0,T.useCallback)((e,n,r=!1)=>{e.preventDefault(),t(!1),dt(n)&&r&&window.dispatchEvent(new CustomEvent(`open-contact-form`))},[]),p=!n&&!e,m=p?`transparent-mode`:`solid-mode`;return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`

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
          width: 42px;
          height: 42px;
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
      `}),(0,A.jsxs)(`nav`,{ref:c,className:`nav-root ${p?`transparent`:`solid`}`,children:[(0,A.jsx)(`svg`,{width:`0`,height:`0`,style:{position:`absolute`},"aria-hidden":`true`,focusable:`false`,children:(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:`nav-icon-grad`,gradientUnits:`userSpaceOnUse`,x1:`2`,y1:`2`,x2:`22`,y2:`22`,children:[(0,A.jsx)(`stop`,{offset:`0`,stopColor:`#7B6FCD`}),(0,A.jsx)(`stop`,{offset:`0.55`,stopColor:`#3A82C4`}),(0,A.jsx)(`stop`,{offset:`1`,stopColor:`#D4891E`})]})})}),(0,A.jsxs)(`div`,{ref:l,"data-nav-header":!0,style:{maxWidth:1400,margin:`0 auto`,padding:`0 clamp(20px, 4vw, 56px)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:20},children:[(0,A.jsxs)(`a`,{href:`#hero`,onClick:e=>f(e,`#hero`),style:{display:`flex`,alignItems:`center`,gap:13,flexShrink:0,textDecoration:`none`},children:[(0,A.jsx)(`img`,{src:`/shri-ai-logo.webp`,alt:`SHRI-AI logo`,className:`logo-img`}),(0,A.jsxs)(`div`,{style:{lineHeight:1},children:[(0,A.jsx)(`div`,{className:`logo-title ${m}`,children:`SHRI-AI.org`}),!o&&(0,A.jsx)(`div`,{className:`logo-subtitle ${m}`,children:`Senus Healthcare Research Institute`})]})]}),!i&&(0,A.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`clamp(4px, 0.8vw, 16px)`,flex:`1 1 auto`,minWidth:0,justifyContent:`center`,padding:`0 20px`},children:pt.map(e=>{let t=u===e.href.slice(1);return(0,A.jsxs)(`a`,{href:e.href,className:`nav-link ${m}${t?` active`:``}`,"aria-current":t?`true`:void 0,onClick:t=>f(t,e.href,e.triggerForm),children:[(0,A.jsx)(e.Icon,{className:`nav-icon`,size:16,strokeWidth:1.6,"aria-hidden":`true`}),(0,A.jsx)(`span`,{className:`nav-link-label`,children:e.name})]},e.name)})}),(0,A.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexShrink:0},children:i&&(0,A.jsx)(`button`,{onClick:()=>t(e=>!e),className:`hamburger-btn ${m}`,"aria-label":`Toggle navigation`,"aria-expanded":e,children:(0,A.jsx)(`svg`,{style:{width:24,height:24,transition:`transform 0.3s cubic-bezier(0.4,0,0.2,1)`},fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:e?(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M6 18L18 6M6 6l12 12`}):(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:1.8,d:`M4 6h16M4 12h16M4 18h16`})})})})]}),i&&(0,A.jsx)(`div`,{className:`mobile-panel ${e?`open`:`closed`}`,children:(0,A.jsx)(`div`,{style:{maxWidth:1400,margin:`0 auto`,padding:`12px clamp(20px, 4vw, 56px) 20px`},children:(0,A.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:2},children:pt.map((e,t)=>(0,A.jsxs)(`div`,{children:[t>0&&(0,A.jsx)(`div`,{className:`mobile-divider`}),(0,A.jsx)(`a`,{href:e.href,className:`mobile-link${u===e.href.slice(1)?` active`:``}`,"aria-current":u===e.href.slice(1)?`true`:void 0,onClick:t=>f(t,e.href,e.triggerForm),children:(0,A.jsxs)(`span`,{className:`mobile-link-inner`,children:[(0,A.jsx)(e.Icon,{className:`nav-icon`,size:18,strokeWidth:1.6,"aria-hidden":`true`}),e.name]})})]},e.name))})})})]})]})},ht=(0,T.createContext)({});function gt(e){let t=(0,T.useRef)(null);return t.current===null&&(t.current=e()),t.current}var _t=typeof window<`u`?T.useLayoutEffect:T.useEffect,vt=(0,T.createContext)(null);function yt(e,t){e.indexOf(t)===-1&&e.push(t)}function bt(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var xt=(e,t,n)=>n>t?t:n<e?e:n,St={},Ct=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),wt=e=>typeof e==`object`&&!!e,Tt=e=>/^0[^.\s]+$/u.test(e);function Et(e){let t;return()=>(t===void 0&&(t=e()),t)}var Dt=e=>e,Ot=(...e)=>e.reduce((e,t)=>n=>t(e(n))),kt=(e,t,n)=>{let r=t-e;return r?(n-e)/r:1},At=class{constructor(){this.subscriptions=[]}add(e){return yt(this.subscriptions,e),()=>bt(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r){if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},j=e=>e*1e3,jt=e=>e/1e3,Mt=(e,t)=>t?1e3/t*e:0,Nt=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Pt=1e-7,Ft=12;function It(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=Nt(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Pt&&++s<Ft);return o}function Lt(e,t,n,r){if(e===t&&n===r)return Dt;let i=t=>It(t,0,1,e,n);return e=>e===0||e===1?e:Nt(i(e),t,r)}var Rt=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,zt=e=>t=>1-e(1-t),Bt=Lt(.33,1.53,.69,.99),Vt=zt(Bt),Ht=Rt(Vt),Ut=e=>e>=1?1:(e*=2)<1?.5*Vt(e):.5*(2-2**(-10*(e-1))),Wt=e=>1-Math.sin(Math.acos(e)),Gt=zt(Wt),Kt=Rt(Wt),qt=Lt(.42,0,1,1),Jt=Lt(0,0,.58,1),Yt=Lt(.42,0,.58,1),Xt=e=>Array.isArray(e)&&typeof e[0]!=`number`,Zt=e=>Array.isArray(e)&&typeof e[0]==`number`,Qt={linear:Dt,easeIn:qt,easeInOut:Yt,easeOut:Jt,circIn:Wt,circInOut:Kt,circOut:Gt,backIn:Vt,backInOut:Ht,backOut:Bt,anticipate:Ut},M=e=>typeof e==`string`,$t=e=>{if(Zt(e)){e.length;let[t,n,r,i]=e;return Lt(t,n,r,i)}return M(e)?(Qt[e],`${e}`,Qt[e]):e},en=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`];function tn(e){let t=new Set,n=new Set,r=!1,i=!1,a=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function s(t){a.has(t)&&(c.schedule(t),e()),t(o)}let c={schedule:(e,i=!1,o=!1)=>{let s=o&&r?t:n;return i&&a.add(e),s.add(e),e},cancel:e=>{n.delete(e),a.delete(e)},process:e=>{if(o=e,r){i=!0;return}r=!0;let a=t;t=n,n=a,t.forEach(s),t.clear(),r=!1,i&&(i=!1,c.process(e))}};return c}var nn=40;function rn(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=en.reduce((e,t)=>(e[t]=tn(a),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=St.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,nn),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:en.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<en.length;t++)o[en[t]].cancel(e)},state:i,steps:o}}var{schedule:N,cancel:an,state:on,steps:sn}=rn(typeof requestAnimationFrame<`u`?requestAnimationFrame:Dt,!0),cn;function ln(){cn=void 0}var un={now:()=>(cn===void 0&&un.set(on.isProcessing||St.useManualTiming?on.timestamp:performance.now()),cn),set:e=>{cn=e,queueMicrotask(ln)}},dn=e=>t=>typeof t==`string`&&t.startsWith(e),fn=dn(`--`),pn=dn(`var(--`),mn=e=>pn(e)?hn.test(e.split(`/*`)[0].trim()):!1,hn=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function gn(e){return typeof e==`string`&&e.split(`/*`)[0].includes(`var(--`)}var _n={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},vn={..._n,transform:e=>xt(0,1,e)},yn={..._n,default:1},bn=e=>Math.round(e*1e5)/1e5,xn=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Sn(e){return e==null}var Cn=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,wn=(e,t)=>n=>!!(typeof n==`string`&&Cn.test(n)&&n.startsWith(e)||t&&!Sn(n)&&Object.prototype.hasOwnProperty.call(n,t)),Tn=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(xn);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},En=e=>xt(0,255,e),Dn={..._n,transform:e=>Math.round(En(e))},On={test:wn(`rgb`,`red`),parse:Tn(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+Dn.transform(e)+`, `+Dn.transform(t)+`, `+Dn.transform(n)+`, `+bn(vn.transform(r))+`)`};function kn(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var An={test:wn(`#`),parse:kn,transform:On.transform},jn=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Mn=jn(`deg`),Nn=jn(`%`),P=jn(`px`),Pn=jn(`vh`),Fn=jn(`vw`),In={...Nn,parse:e=>Nn.parse(e)/100,transform:e=>Nn.transform(e*100)},Ln={test:wn(`hsl`,`hue`),parse:Tn(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+Nn.transform(bn(t))+`, `+Nn.transform(bn(n))+`, `+bn(vn.transform(r))+`)`},Rn={test:e=>On.test(e)||An.test(e)||Ln.test(e),parse:e=>On.test(e)?On.parse(e):Ln.test(e)?Ln.parse(e):An.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?On.transform(e):Ln.transform(e),getAnimatableNone:e=>{let t=Rn.parse(e);return t.alpha=0,Rn.transform(t)}},zn=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Bn(e){return isNaN(e)&&typeof e==`string`&&(e.match(xn)?.length||0)+(e.match(zn)?.length||0)>0}var Vn=`number`,Hn=`color`,Un=`var`,Wn=`var(`,Gn="${}",Kn=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function qn(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Kn,e=>(Rn.test(e)?(r.color.push(a),i.push(Hn),n.push(Rn.parse(e))):e.startsWith(Wn)?(r.var.push(a),i.push(Un),n.push(e)):(r.number.push(a),i.push(Vn),n.push(parseFloat(e))),++a,Gn)).split(Gn),indexes:r,types:i}}function Jn(e){return qn(e).values}function Yn({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];i+=e===Vn?bn(r[a]):e===Hn?Rn.transform(r[a]):r[a]}return i}}function Xn(e){return Yn(qn(e))}var Zn=e=>typeof e==`number`?0:Rn.test(e)?Rn.getAnimatableNone(e):e,Qn=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Zn(e);function $n(e){let t=qn(e);return Yn(t)(t.values.map((e,n)=>Qn(e,t.split[n])))}var er={test:Bn,parse:Jn,createTransformer:Xn,getAnimatableNone:$n};function tr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function nr({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=tr(s,r,e+1/3),a=tr(s,r,e),o=tr(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function rr(e,t){return n=>n>0?t:e}var F=(e,t,n)=>e+(t-e)*n,ir=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},ar=[An,On,Ln],or=e=>ar.find(t=>t.test(e));function sr(e){let t=or(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Ln&&(n=nr(n)),n}var cr=(e,t)=>{let n=sr(e),r=sr(t);if(!n||!r)return rr(e,t);let i={...n};return e=>(i.red=ir(n.red,r.red,e),i.green=ir(n.green,r.green,e),i.blue=ir(n.blue,r.blue,e),i.alpha=F(n.alpha,r.alpha,e),On.transform(i))},lr=new Set([`none`,`hidden`]);function ur(e,t){return lr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function dr(e,t){return n=>F(e,t,n)}function fr(e){return typeof e==`number`?dr:typeof e==`string`?mn(e)?rr:Rn.test(e)?cr:gr:Array.isArray(e)?pr:typeof e==`object`?Rn.test(e)?cr:mr:rr}function pr(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>fr(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function mr(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=fr(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function hr(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}var gr=(e,t)=>{let n=er.createTransformer(t),r=qn(e),i=qn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?lr.has(e)&&!i.values.length||lr.has(t)&&!r.values.length?ur(e,t):Ot(pr(hr(r,i),i.values),n):(`${e}${t}`,rr(e,t))};function _r(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?F(e,t,n):fr(e)(e,t)}var vr=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>N.update(t,e),stop:()=>an(t),now:()=>on.isProcessing?on.timestamp:un.now()}},yr=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},br=2e4;function xr(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Sr(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(xr(r),br);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:jt(i)}}var I={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Cr(e,t){return e*Math.sqrt(1-t*t)}var wr=12;function Tr(e,t,n){let r=n;for(let n=1;n<wr;n++)r-=e(r)/t(r);return r}var Er=.001;function Dr({duration:e=I.duration,bounce:t=I.bounce,velocity:n=I.velocity,mass:r=I.mass}){let i,a;I.maxDuration;let o=1-t;o=xt(I.minDamping,I.maxDamping,o),e=xt(I.minDuration,I.maxDuration,jt(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Cr(t,o),c=Math.exp(-i);return Er-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Cr(t**2,o);return(-i(t)+Er>0?-1:1)*((a-s)*c)/l}):(i=t=>-.001+Math.exp(-t*e)*((t-n)*e+1),a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=Tr(i,a,s);if(e=j(e),isNaN(c))return{stiffness:I.stiffness,damping:I.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var Or=[`duration`,`bounce`],kr=[`stiffness`,`damping`,`mass`];function Ar(e,t){return t.some(t=>e[t]!==void 0)}function jr(e){let t={velocity:I.velocity,stiffness:I.stiffness,damping:I.damping,mass:I.mass,isResolvedFromDuration:!1,...e};if(!Ar(e,kr)&&Ar(e,Or)){if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*xt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:I.mass,stiffness:i,damping:a}}else{let n=Dr({...e,velocity:0});t={...t,...n,mass:I.mass},t.isResolvedFromDuration=!0}}return t}function Mr(e=I.visualDuration,t=I.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=jr({...n,velocity:-jt(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=jt(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?I.restSpeed.granular:I.restSpeed.default,i||=v?I.restDelta.granular:I.restDelta.default;let y,b,x,S,ee,te;if(h<1)x=Cr(_,h),S=(m+h*_*g)/x,y=e=>{let t=Math.exp(-h*_*e);return o-t*(S*Math.sin(x*e)+g*Math.cos(x*e))},ee=h*_*S+g*x,te=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(ee*Math.sin(x*e)+te*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let C={calculatedDuration:p&&d||null,velocity:e=>j(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=j(t*(ee*n+te*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=j(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(xr(C),br),t=yr(t=>C.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return C}Mr.applyToOptions=e=>{let t=Sr(e,100,Mr);return e.ease=t.ease,e.duration=j(t.duration),e.type=`keyframes`,e};var Nr=5;function Pr(e,t,n){let r=Math.max(t-Nr,0);return Mt(n-e(r),t-r)}function Fr({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,ee=e=>{p(f.value)&&(x=e,S=Mr({keyframes:[f.value,m(f.value)],velocity:Pr(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return ee(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),ee(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Ir(e,t,n){let r=[],i=n||St.mix||_r,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ot(Array.isArray(t)?t[n]||Dt:t,a)),r.push(a)}return r}function Lr(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Ir(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=kt(e[r],e[r+1],n);return s[r](i)};return n?t=>l(xt(e[0],e[a-1],t)):l}function Rr(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=kt(0,t,r);e.push(F(n,1,i))}}function zr(e){let t=[0];return Rr(t,e.length-1),t}function Br(e,t){return e.map(e=>e*t)}function Vr(e,t){return e.map(()=>t||Yt).splice(0,e.length-1)}function Hr({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=Xt(r)?r.map($t):$t(r),a={done:!1,value:t[0]},o=Lr(Br(n&&n.length===t.length?n:zr(t),e),t,{ease:Array.isArray(i)?i:Vr(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Ur=e=>e!==null;function Wr(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Ur),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Gr={decay:Fr,inertia:Fr,tween:Hr,keyframes:Hr,spring:Mr};function Kr(e){typeof e.type==`string`&&(e.type=Gr[e.type])}var qr=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Jr=e=>e/100,Yr=class extends qr{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==un.now()&&this.tick(un.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Kr(e);let{type:t=Hr,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||Hr;s!==Hr&&typeof o[0]!=`number`&&(this.mixKeyframes=Ot(Jr,_r(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=xr(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.currentTime=this.holdTime===null?t:this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=xt(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==Fr&&(b.value=Wr(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return jt(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+jt(e)}get time(){return jt(this.currentTime)}set time(e){e=j(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Pr(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(un.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=jt(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=vr,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(un.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Xr(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Zr=e=>e*180/Math.PI,Qr=e=>ei(Zr(Math.atan2(e[1],e[0]))),$r={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Qr,rotateZ:Qr,skewX:e=>Zr(Math.atan(e[1])),skewY:e=>Zr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},ei=e=>(e%=360,e<0&&(e+=360),e),ti=Qr,ni=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ri=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ii={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ni,scaleY:ri,scale:e=>(ni(e)+ri(e))/2,rotateX:e=>ei(Zr(Math.atan2(e[6],e[5]))),rotateY:e=>ei(Zr(Math.atan2(-e[2],e[0]))),rotateZ:ti,rotate:ti,skewX:e=>Zr(Math.atan(e[4])),skewY:e=>Zr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function ai(e){return+!!e.includes(`scale`)}function oi(e,t){if(!e||e===`none`)return ai(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=ii,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=$r,i=t}if(!i)return ai(t);let a=r[t],o=i[1].split(`,`).map(ci);return typeof a==`function`?a(o):o[a]}var si=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return oi(n,t)};function ci(e){return parseFloat(e.trim())}var li=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],ui=new Set([...li,`pathRotation`]),di=e=>e===_n||e===P,fi=new Set([`x`,`y`,`z`]),pi=li.filter(e=>!fi.has(e));function mi(e){let t=[];return pi.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(+!!n.startsWith(`scale`)))}),t}var hi={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>oi(t,`x`),y:(e,{transform:t})=>oi(t,`y`)};hi.translateX=hi.x,hi.translateY=hi.y;var gi=new Set,_i=!1,vi=!1,yi=!1;function bi(){if(vi){let e=Array.from(gi).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=mi(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}vi=!1,_i=!1,gi.forEach(e=>e.complete(yi)),gi.clear()}function xi(){gi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(vi=!0)})}function Si(){yi=!0,xi(),bi(),yi=!1}var Ci=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(gi.add(this),_i||(_i=!0,N.read(xi),N.resolveKeyframes(bi))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Xr(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),gi.delete(this)}cancel(){this.state===`scheduled`&&(gi.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},wi=e=>e.startsWith(`--`);function Ti(e,t,n){wi(t)?e.style.setProperty(t,n):e.style[t]=n}var Ei={};function Di(e,t){let n=Et(e);return()=>Ei[t]??n()}var Oi=Di(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ki=Di(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),Ai=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ji={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:Ai([0,.65,.55,1]),circOut:Ai([.55,0,1,.45]),backIn:Ai([.31,.01,.66,-.59]),backOut:Ai([.33,1.53,.69,.99])};function Mi(e,t){if(e)return typeof e==`function`?ki()?yr(e,t):`ease-out`:Zt(e)?Ai(e):Array.isArray(e)?e.map(e=>Mi(e,t)||ji.easeOut):ji[e]}function Ni(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=Mi(s,i);Array.isArray(d)&&(u.easing=d);let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};return l&&(f.pseudoElement=l),e.animate(u,f)}function Pi(e){return typeof e==`function`&&`applyToOptions`in e}function Fi({type:e,...t}){return Pi(e)&&ki()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var Ii=class extends qr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Fi(e);this.animation=Ni(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Wr(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),Ti(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e!==`idle`&&e!==`finished`&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return jt(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+jt(e)}get time(){return jt(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=j(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&Oi()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),Dt):r(this)}},Li={anticipate:Ut,backInOut:Ht,circInOut:Kt};function Ri(e){return e in Li}function zi(e){typeof e.ease==`string`&&Ri(e.ease)&&(e.ease=Li[e.ease])}var Bi=10,Vi=class extends Ii{constructor(e){zi(e),Kr(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Yr({...a,autoplay:!1}),s=Math.max(Bi,un.now()-this.startTime),c=xt(0,Bi,s-Bi),l=o.sample(s).value,{name:u}=this.options;i&&u&&Ti(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Hi=(e,t)=>t!==`zIndex`&&!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(er.test(e)||e===`0`)&&!e.startsWith(`url(`));function Ui(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Wi(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Hi(i,t),s=Hi(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:Ui(e)||(n===`spring`||Pi(n))&&r}function Gi(e){e.duration=0,e.type=`keyframes`}var Ki=new Set([`opacity`,`clipPath`,`filter`,`transform`,`backgroundColor`]),qi=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ji(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&qi.test(e[t]))return!0;return!1}var Yi=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Xi=Et(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Zi(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e,c=t?.owner?.current;if(!(c instanceof HTMLElement)&&!(c instanceof SVGElement))return!1;let{onUpdate:l,transformTemplate:u}=t.owner.getProps();return Xi()&&n&&(Ki.has(n)||Yi.has(n)&&Ji(s))&&(n!==`transform`||!u)&&!l&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Qi=40,$i=class extends qr{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=un.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u},f=l?.KeyframeResolver||Ci;this.keyframeResolver=new f(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=un.now();let u=!0;Wi(e,i,a,o)||(u=!1,(St.instantAnimations||!s)&&l?.(Wr(e,n,t)),e[0]=e[e.length-1],Gi(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Qi?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Zi(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new Vi({...d,element:p})}catch{m=new Yr(d)}else m=new Yr(d);m.finished.then(()=>{this.notifyFinished()}).catch(Dt),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Si()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function ea(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var ta=30,na=e=>!isNaN(parseFloat(e)),ra={current:void 0},ia=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=un.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=un.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=na(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new At);let n=this.events[e].add(t);return e===`change`?()=>{n(),N.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ra.current&&ra.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=un.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ta)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,ta);return Mt(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function aa(e,t){return new ia(e,t)}function oa(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function L(e,t){let n=e?.[t]??e?.default??e;return n===e?n:oa(n,e)}var R={type:`spring`,stiffness:500,damping:25,restSpeed:10},sa=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ca={type:`keyframes`,duration:.8},la={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},ua=(e,{keyframes:t})=>t.length>2?ca:ui.has(e)?e.startsWith(`scale`)?sa(t[1]):R:la,da=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function fa(e){for(let t in e)if(!da.has(t))return!0;return!1}var pa=(e,t,n,r={},i,a)=>o=>{let s=L(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=j(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};fa(s)||Object.assign(u,ua(e,u)),u.duration&&=j(u.duration),u.repeatDelay&&=j(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Gi(u),u.delay===0&&(d=!0)),(St.instantAnimations||St.skipAnimations||i?.shouldSkipAnimations||s.skipAnimations)&&(d=!0,Gi(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Wr(u.keyframes,s);if(e!==void 0){N.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Yr(u):new $i(u)},ma=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ha(e){let t=ma.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function ga(e,t,n=1){`${e}`;let[r,i]=ha(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return Ct(e)?parseFloat(e):e}return mn(i)?ga(i,t,n+1):i}function _a(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function va(e,t,n,r){if(typeof t==`function`){let[i,a]=_a(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=_a(r);t=t(n===void 0?e.custom:n,i,a)}return t}function ya(e,t,n){let r=e.getProps();return va(r,t,n===void 0?r.custom:n,e)}var ba=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...li]),xa=e=>Array.isArray(e);function Sa(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,aa(n))}function Ca(e){return xa(e)?e[e.length-1]||0:e}function wa(e,t){let{transitionEnd:n={},transition:r={},...i}=ya(e,t)||{};i={...i,...n};for(let t in i)Sa(e,t,Ca(i[t]))}var Ta=e=>!!(e&&e.getVelocity);function Ea(e){return!!(Ta(e)&&e.add)}function Da(e,t){let n=e.getValue(`willChange`);if(Ea(n))return n.add(t);if(!n&&St.WillChange){let n=new St.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function Oa(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var ka=`data-`+Oa(`framerAppearId`);function Aa(e){return e.props[ka]}function ja({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Ma(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?oa(a,c):c;let l=a?.reduceMotion,u=a?.skipAnimations;r&&(a=r);let d=[],f=i&&e.animationState&&e.animationState.getState()[i],p=a?.path;p&&p.animateVisualElement(e,s,a,n,d);for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||f&&ja(f,t))continue;let o={delay:n,...L(a||{},t)};u&&(o.skipAnimations=!0);let c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){N.update(()=>r.set(i));continue}let p=!1;if(window.MotionHandoffAnimation){let n=Aa(e);if(n){let e=window.MotionHandoffAnimation(n,t,N);e!==null&&(o.startTime=e,p=!0)}}Da(e,t);let m=l??e.shouldReduceMotion;r.start(pa(t,r,i,m&&ba.has(t)?{type:!1}:o,e,p));let h=r.animation;h&&d.push(h)}if(o){let t=()=>N.update(()=>{o&&wa(e,o)});d.length?Promise.all(d).then(t):t()}return d}function Na(e,t,n={}){let r=ya(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(Ma(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Pa(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function Pa(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Na(c,t,{...o,delay:n+(typeof r==`function`?0:r)+ea(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function Fa(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Na(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Na(e,t,n);else{let i=typeof t==`function`?ya(e,t,n.custom):t;r=Promise.all(Ma(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Ia={test:e=>e===`auto`,parse:e=>e},La=e=>t=>t.test(e),Ra=[_n,P,Nn,Mn,Fn,Pn,Ia],za=e=>Ra.find(La(e));function Ba(e){return typeof e==`number`?e===0:e===null||e===`none`||e===`0`||Tt(e)}var Va=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function Ha(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(xn)||[];if(!r)return e;let i=n.replace(r,``),a=+!!Va.has(t);return r!==n&&(a*=100),t+`(`+a+i+`)`}var Ua=/\b([a-z-]*)\(.*?\)/gu,Wa={...er,getAnimatableNone:e=>{let t=e.match(Ua);return t?t.map(Ha).join(` `):e}},Ga={...er,getAnimatableNone:e=>{let t=er.parse(e);return er.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Ka={..._n,transform:Math.round},qa={borderWidth:P,borderTopWidth:P,borderRightWidth:P,borderBottomWidth:P,borderLeftWidth:P,borderRadius:P,borderTopLeftRadius:P,borderTopRightRadius:P,borderBottomRightRadius:P,borderBottomLeftRadius:P,width:P,maxWidth:P,height:P,maxHeight:P,top:P,right:P,bottom:P,left:P,inset:P,insetBlock:P,insetBlockStart:P,insetBlockEnd:P,insetInline:P,insetInlineStart:P,insetInlineEnd:P,padding:P,paddingTop:P,paddingRight:P,paddingBottom:P,paddingLeft:P,paddingBlock:P,paddingBlockStart:P,paddingBlockEnd:P,paddingInline:P,paddingInlineStart:P,paddingInlineEnd:P,margin:P,marginTop:P,marginRight:P,marginBottom:P,marginLeft:P,marginBlock:P,marginBlockStart:P,marginBlockEnd:P,marginInline:P,marginInlineStart:P,marginInlineEnd:P,fontSize:P,backgroundPositionX:P,backgroundPositionY:P,rotate:Mn,pathRotation:Mn,rotateX:Mn,rotateY:Mn,rotateZ:Mn,scale:yn,scaleX:yn,scaleY:yn,scaleZ:yn,skew:Mn,skewX:Mn,skewY:Mn,distance:P,translateX:P,translateY:P,translateZ:P,x:P,y:P,z:P,perspective:P,transformPerspective:P,opacity:vn,originX:In,originY:In,originZ:P,zIndex:Ka,fillOpacity:vn,strokeOpacity:vn,numOctaves:Ka},Ja={...qa,color:Rn,backgroundColor:Rn,outlineColor:Rn,fill:Rn,stroke:Rn,borderColor:Rn,borderTopColor:Rn,borderRightColor:Rn,borderBottomColor:Rn,borderLeftColor:Rn,filter:Wa,WebkitFilter:Wa,mask:Ga,WebkitMask:Ga},Ya=e=>Ja[e],Xa=new Set([Wa,Ga]);function Za(e,t){let n=Ya(e);return Xa.has(n)||(n=er),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Qa=new Set([`auto`,`none`,`0`]);function $a(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Qa.has(t)&&qn(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Za(n,i)}var eo=class extends Ci{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),mn(r))){let i=ga(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ba.has(n)||e.length!==2)return;let[r,i]=e,a=za(r),o=za(i);if(gn(r)!==gn(i)&&hi[n]){this.needsMeasurement=!0;return}if(a!==o){if(di(a)&&di(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else hi[n]&&(this.needsMeasurement=!0)}}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||Ba(e[t]))&&n.push(t);n.length&&$a(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=hi[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=hi[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}},to=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomRightRadius`,`borderBottomLeftRadius`];function no(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var ro=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function io(e){return wt(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:ao,cancel:oo}=rn(queueMicrotask,!1),so={x:!1,y:!1};function co(){return so.x||so.y}function lo(e){return e===`x`||e===`y`?so[e]?null:(so[e]=!0,()=>{so[e]=!1}):so.x||so.y?null:(so.x=so.y=!0,()=>{so.x=so.y=!1})}function uo(e,t){let n=no(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function fo(e){return!(e.pointerType===`touch`||co())}function po(e,t,n={}){let[r,i,a]=uo(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!fo(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var mo=(e,t)=>t?e===t||mo(e,t.parentElement):!1,ho=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,go=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function _o(e){return go.has(e.tagName)||e.isContentEditable===!0}var vo=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function yo(e){return vo.has(e.tagName)||e.isContentEditable===!0}var bo=new WeakSet;function xo(e){return t=>{t.key===`Enter`&&e(t)}}function So(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Co=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=xo(()=>{if(bo.has(n))return;So(n,`down`);let e=xo(()=>{So(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>So(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function wo(e){return ho(e)&&!co()}var To=new WeakSet;function Eo(e,t,n={}){let[r,i,a]=uo(e,n),o=e=>{let r=e.currentTarget;if(!wo(e)||To.has(e))return;bo.add(r),n.stopPropagation&&To.add(e);let a=t(r,e),o={...i,capture:!0},s=(e,t)=>{window.removeEventListener(`pointerup`,c,o),window.removeEventListener(`pointercancel`,l,o),bo.has(r)&&bo.delete(r),wo(e)&&typeof a==`function`&&a(e,{success:t})},c=e=>{s(e,r===window||r===document||n.useGlobalTarget||mo(r,e.target))},l=e=>{s(e,!1)};window.addEventListener(`pointerup`,c,o),window.addEventListener(`pointercancel`,l,o)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),io(e)&&(e.addEventListener(`focus`,e=>Co(e,i)),!_o(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function Do(e){return wt(e)&&`ownerSVGElement`in e}var Oo=new WeakMap,ko,Ao=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:Do(r)&&`getBBox`in r?r.getBBox()[t]:r[n],jo=Ao(`inline`,`width`,`offsetWidth`),Mo=Ao(`block`,`height`,`offsetHeight`);function No({target:e,borderBoxSize:t}){Oo.get(e)?.forEach(n=>{n(e,{get width(){return jo(e,t)},get height(){return Mo(e,t)}})})}function Po(e){e.forEach(No)}function Fo(){typeof ResizeObserver<`u`&&(ko=new ResizeObserver(Po))}function Io(e,t){ko||Fo();let n=no(e);return n.forEach(e=>{let n=Oo.get(e);n||(n=new Set,Oo.set(e,n)),n.add(t),ko?.observe(e)}),()=>{n.forEach(e=>{let n=Oo.get(e);n?.delete(t),n?.size||ko?.unobserve(e)})}}var Lo=new Set,Ro;function zo(){Ro=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Lo.forEach(t=>t(e))},window.addEventListener(`resize`,Ro)}function Bo(e){return Lo.add(e),Ro||zo(),()=>{Lo.delete(e),!Lo.size&&typeof Ro==`function`&&(window.removeEventListener(`resize`,Ro),Ro=void 0)}}function Vo(e,t){return typeof e==`function`?Bo(e):Io(e,t)}var Ho={value:null,addProjectionMetrics:null};function Uo(e){return Do(e)&&e.tagName===`svg`}var Wo=[...Ra,Rn,er],z=e=>Wo.find(La(e)),B=()=>({translate:0,scale:1,origin:0,originPoint:0}),V=()=>({x:B(),y:B()}),Go=()=>({min:0,max:0}),H=()=>({x:Go(),y:Go()}),Ko=new WeakMap;function qo(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Jo(e){return typeof e==`string`||Array.isArray(e)}var Yo=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Xo=[`initial`,...Yo];function U(e){return qo(e.animate)||Xo.some(t=>Jo(e[t]))}function Zo(e){return!!(U(e)||e.variants)}function Qo(e,t,n){for(let r in t){let i=t[r],a=n[r];if(Ta(i))e.addValue(r,i);else if(Ta(a))e.addValue(r,aa(i,{owner:e}));else if(a!==i){if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,aa(t===void 0?i:t,{owner:e}))}}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var $o={current:null},es={current:!1},ts=typeof window<`u`;function ns(){if(es.current=!0,ts){if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>$o.current=e.matches;e.addEventListener(`change`,t),t()}else $o.current=!1}}var rs=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],is={};function as(e){is=e}function os(){return is}var ss=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ci,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=un.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,N.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=U(t),this.isVariantNode=Zo(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&Ta(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Ko.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(es.current||ns(),this.shouldReduceMotion=$o.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),an(this.notifyUpdate),an(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Ki.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new Ii({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:j(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=ui.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&N.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in is){let t=is[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):H()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<rs.length;t++){let n=rs[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Qo(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=aa(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(Ct(n)||Tt(n))?n=parseFloat(n):!z(n)&&er.test(t)&&(n=Za(e,t)),this.setBaseTarget(e,Ta(n)?n.get():n)),Ta(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=va(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Ta(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new At),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){ao.render(this.render)}},cs=class extends ss{constructor(){super(...arguments),this.KeyframeResolver=eo}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;Ta(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},ls=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function us({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ds({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function fs(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ps(e){return e===void 0||e===1}function ms({scale:e,scaleX:t,scaleY:n}){return!ps(e)||!ps(t)||!ps(n)}function hs(e){return ms(e)||gs(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function gs(e){return _s(e.x)||_s(e.y)}function _s(e){return e&&e!==`0%`}function vs(e,t,n){return n+t*(e-n)}function ys(e,t,n,r,i){return i!==void 0&&(e=vs(e,i,r)),vs(e,n,r)+t}function bs(e,t=0,n=1,r,i){e.min=ys(e.min,t,n,r,i),e.max=ys(e.max,t,n,r,i)}function xs(e,{x:t,y:n}){bs(e.x,t.translate,t.scale,t.originPoint),bs(e.y,n.translate,n.scale,n.originPoint)}var Ss=.999999999999,Cs=1.0000000000001;function ws(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Ts(e.x,-a.scroll.offset.x),Ts(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,xs(e,o)),r&&hs(a.latestValues)&&Os(e,a.latestValues,a.layout?.layoutBox))}t.x<Cs&&t.x>Ss&&(t.x=1),t.y<Cs&&t.y>Ss&&(t.y=1)}function Ts(e,t){e.min+=t,e.max+=t}function Es(e,t,n,r,i=.5){bs(e,t,n,F(e.min,e.max,i),r)}function Ds(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function Os(e,t,n){let r=n??e;Es(e.x,Ds(t.x,r.x),t.scaleX,t.scale,t.originX),Es(e.y,Ds(t.y,r.y),t.scaleY,t.scale,t.originY)}function ks(e,t){return us(fs(e.getBoundingClientRect(),t))}function As(e,t,n){let r=ks(e,n),{scroll:i}=t;return i&&(Ts(r.x,i.offset.x),Ts(r.y,i.offset.y)),r}var js={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},Ms=li.length;function Ns(e,t,n){let r=``,i=!0;for(let a=0;a<Ms;a++){let o=li[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===+!!o.startsWith(`scale`);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=ro(s,qa[o]);if(!c){i=!1;let t=js[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}let a=e.pathRotation;return a&&(i=!1,r+=`rotate(${ro(a,qa.pathRotation)}) `),r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Ps(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(ui.has(e)){o=!0;continue}if(fn(e)){i[e]=n;continue}{let t=ro(n,qa[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=Ns(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function Fs(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function Is(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Ls={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`){if(P.test(e))e=parseFloat(e);else return e}return`${Is(e,t.target.x)}% ${Is(e,t.target.y)}%`}},Rs={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=er.parse(e);if(i.length>5)return r;let a=er.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=F(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},zs={borderRadius:{...Ls,applyTo:[...to]},borderTopLeftRadius:Ls,borderTopRightRadius:Ls,borderBottomLeftRadius:Ls,borderBottomRightRadius:Ls,boxShadow:Rs};function Bs(e,{layout:t,layoutId:n}){return ui.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!zs[e]||e===`opacity`)}function Vs(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(Ta(r[t])||i&&Ta(i[t])||Bs(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function Hs(e){return window.getComputedStyle(e)}var Us=class extends cs{constructor(){super(...arguments),this.type=`html`,this.renderInstance=Fs}mount(e){e.style,super.mount(e)}readValueFromInstance(e,t){if(ui.has(t))return this.projection?.isProjecting?ai(t):si(e,t);{let n=Hs(e),r=(fn(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return ks(e,t)}build(e,t,n){Ps(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Vs(e,t,n)}},Ws={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Gs={offset:`strokeDashoffset`,array:`strokeDasharray`};function Ks(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?Ws:Gs;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var qs=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Js(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Ps(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of qs)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Ks(d,i,a,o,!1)}var Ys=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Xs=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Zs(e,t,n,r){Fs(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Ys.has(n)?n:Oa(n),t.attrs[n])}function Qs(e,t,n){let r=Vs(e,t,n);for(let n in e)if(Ta(e[n])||Ta(t[n])){let t=li.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var $s=class extends cs{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=H}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ui.has(t)){let e=Ya(t);return e&&e.default||0}return t=Ys.has(t)?t:Oa(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Qs(e,t,n)}build(e,t,n){Js(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Zs(e,t,n,r)}mount(e){this.isSVGTag=Xs(e.tagName),super.mount(e)}},ec=Xo.length;function tc(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&tc(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<ec;n++){let r=Xo[n],i=e.props[r];(Jo(i)||i===!1)&&(t[r]=i)}return t}function nc(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var rc=[...Yo].reverse(),ic=Yo.length;function ac(e){return t=>Promise.all(t.map(({animation:t,options:n})=>Fa(e,t,n)))}function oc(e){let t=ac(e),n=lc(),r=!0,i=!1,a=t=>(n,r)=>{let i=ya(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=tc(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<ic;t++){let p=rc[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Jo(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||qo(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=sc(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],ee=S.reduce(a(p),{});_===!1&&(ee={});let{prevResolvedValues:te={}}=m,C={...te,...ee},ne=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in C){let t=ee[e],n=te[e];if(d.hasOwnProperty(e))continue;let r=!1;r=xa(t)&&xa(n)?!nc(t,n)||y:t!==n,r?t==null?u.add(e):ne(e):t!==void 0&&u.has(e)?ne(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=ee,m.isActive&&(d={...d,...ee}),(r||i)&&e.blockInitialAnimation&&(b=!1);let w=v&&y;b&&(!w||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!w&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=ya(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=ea(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=ya(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=lc(),i=!0}}}function sc(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!nc(t,e):!1}function cc(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function lc(){return{animate:cc(!0),whileInView:cc(),whileHover:cc(),whileTap:cc(),whileDrag:cc(),whileFocus:cc(),exit:cc()}}function uc(e,t){e.min=t.min,e.max=t.max}function dc(e,t){uc(e.x,t.x),uc(e.y,t.y)}function fc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var pc=.9999,mc=1.0001,hc=-.01,gc=.01;function _c(e){return e.max-e.min}function vc(e,t,n){return Math.abs(e-t)<=n}function yc(e,t,n,r=.5){e.origin=r,e.originPoint=F(t.min,t.max,e.origin),e.scale=_c(n)/_c(t),e.translate=F(n.min,n.max,e.origin)-e.originPoint,(e.scale>=pc&&e.scale<=mc||isNaN(e.scale))&&(e.scale=1),(e.translate>=hc&&e.translate<=gc||isNaN(e.translate))&&(e.translate=0)}function bc(e,t,n,r){yc(e.x,t.x,n.x,r?r.originX:void 0),yc(e.y,t.y,n.y,r?r.originY:void 0)}function xc(e,t,n,r=0){e.min=(r?F(n.min,n.max,r):n.min)+t.min,e.max=e.min+_c(t)}function Sc(e,t,n,r){xc(e.x,t.x,n.x,r?.x),xc(e.y,t.y,n.y,r?.y)}function Cc(e,t,n,r=0){let i=r?F(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+_c(t)}function wc(e,t,n,r){Cc(e.x,t.x,n.x,r?.x),Cc(e.y,t.y,n.y,r?.y)}function Tc(e,t,n,r,i){return e-=t,e=vs(e,1/n,r),i!==void 0&&(e=vs(e,1/i,r)),e}function Ec(e,t=0,n=1,r=.5,i,a=e,o=e){if(Nn.test(t)&&(t=parseFloat(t),t=F(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=F(a.min,a.max,r);e===a&&(s-=t),e.min=Tc(e.min,t,n,s,i),e.max=Tc(e.max,t,n,s,i)}function Dc(e,t,[n,r,i],a,o){Ec(e,t[n],t[r],t[i],t.scale,a,o)}var Oc=[`x`,`scaleX`,`originX`],kc=[`y`,`scaleY`,`originY`];function Ac(e,t,n,r){Dc(e.x,t,Oc,n?n.x:void 0,r?r.x:void 0),Dc(e.y,t,kc,n?n.y:void 0,r?r.y:void 0)}function jc(e){return e.translate===0&&e.scale===1}function Mc(e){return jc(e.x)&&jc(e.y)}function Nc(e,t){return e.min===t.min&&e.max===t.max}function Pc(e,t){return Nc(e.x,t.x)&&Nc(e.y,t.y)}function Fc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ic(e,t){return Fc(e.x,t.x)&&Fc(e.y,t.y)}function Lc(e){return _c(e.x)/_c(e.y)}function Rc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function zc(e){return[e(`x`),e(`y`)]}function Bc(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,pathRotation:i,rotateX:a,rotateY:o,skewX:s,skewY:c}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotate(${i}deg) `),a&&(r+=`rotateX(${a}deg) `),o&&(r+=`rotateY(${o}deg) `),s&&(r+=`skewX(${s}deg) `),c&&(r+=`skewY(${c}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var Vc=to.length,Hc=e=>typeof e==`string`?parseFloat(e):e,Uc=e=>typeof e==`number`||P.test(e);function Wc(e,t,n,r,i,a){i?(e.opacity=F(0,n.opacity??1,Kc(r)),e.opacityExit=F(t.opacity??1,0,qc(r))):a&&(e.opacity=F(t.opacity??1,n.opacity??1,r));for(let i=0;i<Vc;i++){let a=to[i],o=Gc(t,a),s=Gc(n,a);(o!==void 0||s!==void 0)&&(o||=0,s||=0,o===0||s===0||Uc(o)===Uc(s)?(e[a]=Math.max(F(Hc(o),Hc(s),r),0),(Nn.test(s)||Nn.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=F(t.rotate||0,n.rotate||0,r))}function Gc(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Kc=Jc(0,.5,Gt),qc=Jc(.5,.95,Dt);function Jc(e,t,n){return r=>r<e?0:r>t?1:n(kt(e,t,r))}function Yc(e,t,n){let r=Ta(e)?e:aa(e);return r.start(pa(``,r,t,n)),r.animation}function Xc(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}var Zc=(e,t)=>e.depth-t.depth,Qc=class{constructor(){this.children=[],this.isDirty=!1}add(e){yt(this.children,e),this.isDirty=!0}remove(e){bt(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Zc),this.isDirty=!1,this.children.forEach(e)}};function $c(e,t){let n=un.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(an(r),e(a-t))};return N.setup(r,!0),()=>an(r)}function el(e){return Ta(e)?e.get():e}var tl=class{constructor(){this.members=[]}add(e){yt(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(bt(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(bt(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},nl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},rl={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},il=[``,`X`,`Y`,`Z`],al=1e3,ol=0;function sl(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function cl(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=Aa(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,N,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&cl(r)}function ll({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=ol++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ho.value&&(rl.nodes=rl.calculatedTargetDeltas=rl.calculatedProjections=0),this.nodes.forEach(fl),this.nodes.forEach(bl),this.nodes.forEach(xl),this.nodes.forEach(pl),Ho.addProjectionMetrics&&Ho.addProjectionMetrics(rl)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Qc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new At),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=Do(t)&&!Uo(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;N.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=$c(i,250),nl.hasAnimatedSinceResize&&(nl.hasAnimatedSinceResize=!1,this.nodes.forEach(yl)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||Ol,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Ic(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...L(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l,t.path)}else t||yl(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),an(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Sl),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&cl(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(gl),this.nodes.forEach(hl);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(_l);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(W),this.nodes.forEach(vl),this.nodes.forEach(ul),this.nodes.forEach(dl)):this.nodes.forEach(_l),this.clearAllSnapshots();let e=un.now();on.delta=xt(0,1e3/60,e-on.timestamp),on.timestamp=e,on.isProcessing=!0,sn.update.process(on),sn.preRender.process(on),sn.render.process(on),on.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ao.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ml),this.sharedNodes.forEach(Cl)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,N.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){N.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),this.snapshot&&!_c(this.snapshot.measuredBox.x)&&!_c(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=H(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Mc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||hs(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Ml(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return H();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Pl))){let{scroll:e}=this.root;e&&(Ts(t.x,e.offset.x),Ts(t.y,e.offset.y))}return t}removeElementScroll(e){let t=H();if(dc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&dc(t,e),Ts(t.x,i.offset.x),Ts(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||H();dc(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Ts(r.x,-n.scroll.offset.x),Ts(r.y,-n.scroll.offset.y)),hs(n.latestValues)&&Os(r,n.latestValues,n.layout?.layoutBox)}return hs(this.latestValues)&&Os(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=H();dc(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!hs(n.latestValues))continue;let r;n.instance&&(ms(n.latestValues)&&n.updateSnapshot(),r=H(),dc(r,n.measurePageBox())),Ac(t,n.latestValues,n.snapshot?.layoutBox,r)}return hs(this.latestValues)&&Ac(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==on.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=on.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),(this.relativeTarget||this.targetDelta)&&(this.target||(this.target=H(),this.targetWithTransforms=H()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sc(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):dc(this.target,this.layout.layoutBox),xs(this.target,this.targetDelta)):dc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),Ho.value&&rl.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||ms(this.parent.latestValues)||gs(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=H(),this.relativeTargetOrigin=H(),wc(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),dc(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===on.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;dc(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;ws(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=H());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fc(this.prevProjectionDelta.x,this.projectionDelta.x),fc(this.prevProjectionDelta.y,this.projectionDelta.y)),bc(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Rc(this.projectionDelta.x,this.prevProjectionDelta.x)||!Rc(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),Ho.value&&rl.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=V(),this.projectionDelta=V(),this.projectionDeltaWithTransform=V()}setAnimationOrigin(e,t=!1,n){let r=this.snapshot,i=r?r.latestValues:{},a={...this.latestValues},o=V();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let s=H(),c=(r?r.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,d=!(!c||u||this.options.crossfade!==!0||this.path.some(Dl));this.animationProgress=0;let f,p=n?.interpolateProjection(e);this.mixTargetDelta=t=>{let n=t/1e3,r=p?.(n);r?(o.x.translate=r.x,o.x.scale=F(e.x.scale,1,n),o.x.origin=e.x.origin,o.x.originPoint=e.x.originPoint,o.y.translate=r.y,o.y.scale=F(e.y.scale,1,n),o.y.origin=e.y.origin,o.y.originPoint=e.y.originPoint):(wl(o.x,e.x,n),wl(o.y,e.y,n)),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wc(s,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),El(this.relativeTarget,this.relativeTargetOrigin,s,n),f&&Pc(this.relativeTarget,f)&&(this.isProjectionDirty=!1),f||=H(),dc(f,this.relativeTarget)),c&&(this.animationValues=a,Wc(a,i,this.latestValues,n,d,u)),r&&r.rotate!==void 0&&(this.animationValues||=a,this.animationValues.pathRotation=r.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(an(this.pendingAnimation),void 0),this.pendingAnimation=N.update(()=>{nl.hasAnimatedSinceResize=!0,this.motionValue||=aa(0),this.motionValue.jump(0,!1),this.currentAnimation=Yc(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(al),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Nl(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||H();let t=_c(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=_c(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}dc(t,n),Os(t,i),bc(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new tl),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&sl(`z`,e,r,this.animationValues);for(let t=0;t<il.length;t++)sl(`rotate${il[t]}`,e,r,this.animationValues),sl(`skew${il[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=el(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=el(t?.pointerEvents)||``),this.hasProjected&&!hs(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Bc(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,e.opacity=r.animationValues?r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in zs){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=zs[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?el(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(hl),this.root.sharedNodes.clear()}}}function ul(e){e.updateLayout()}function dl(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)zc(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=_c(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;uc(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Nl(i,t.layoutBox,n)&&zc(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=_c(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=V();bc(o,n,t.layoutBox);let s=V();a?bc(s,e.applyTransform(r,!0),t.measuredBox):bc(s,n,t.layoutBox);let c=!Mc(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=H();wc(s,t.layoutBox,i.layoutBox,o);let c=H();wc(c,n,a.layoutBox,o),Ic(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function fl(e){Ho.value&&rl.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function pl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ml(e){e.clearSnapshot()}function hl(e){e.clearMeasurements()}function gl(e){e.isLayoutDirty=!0,e.updateLayout()}function _l(e){e.isLayoutDirty=!1}function W(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function vl(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function yl(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function bl(e){e.resolveTargetDelta()}function xl(e){e.calcProjection()}function Sl(e){e.resetSkewAndRotation()}function Cl(e){e.removeLeadSnapshot()}function wl(e,t,n){e.translate=F(t.translate,0,n),e.scale=F(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tl(e,t,n,r){e.min=F(t.min,n.min,r),e.max=F(t.max,n.max,r)}function El(e,t,n,r){Tl(e.x,t.x,n.x,r),Tl(e.y,t.y,n.y,r)}function Dl(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var Ol={duration:.45,ease:[.4,0,.1,1]},kl=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Al=kl(`applewebkit/`)&&!kl(`chrome/`)?Math.round:Dt;function jl(e){e.min=Al(e.min),e.max=Al(e.max)}function Ml(e){jl(e.x),jl(e.y)}function Nl(e,t,n){return e===`position`||e===`preserve-aspect`&&!vc(Lc(t),Lc(n),.2)}function Pl(e){return e!==e.root&&e.scroll?.wasRoot}var Fl=ll({attachResizeListener:(e,t)=>Xc(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Il={current:void 0},Ll=ll({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Il.current){let e=new Fl({});e.mount(window),e.setOptions({layoutScroll:!0}),Il.current=e}return Il.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Rl=(0,T.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function zl(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Bl(...e){return t=>{let n=!1,r=e.map(e=>{let r=zl(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():zl(e[t],null)}}}}function Vl(...e){return T.useCallback(Bl(...e),e)}var Hl=class extends T.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(io(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=io(e)&&e.offsetWidth||0,r=io(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top,a.direction=i.direction}return null}componentDidUpdate(){}render(){return this.props.children}};function Ul({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,T.useId)(),s=(0,T.useRef)(null),c=(0,T.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:`ltr`}),{nonce:l}=(0,T.useContext)(Rl),u=Vl(s,a===!1?void 0:e.props?.ref??e?.ref);return(0,T.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m,direction:h}=c.current;if(t||a===!1||!s.current||!e||!u)return;let g=h===`rtl`,_=n===`left`?g?`right: ${p}`:`left: ${f}`:g?`left: ${f}`:`right: ${p}`,v=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let y=document.createElement(`style`);l&&(y.nonce=l);let b=i??document.head;return b.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),b.contains(y)&&b.removeChild(y)}},[t]),(0,A.jsx)(Hl,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:T.cloneElement(e,{ref:u})})}var Wl=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=gt(Gl),d=(0,T.useId)(),f=(0,T.useRef)(n),p=(0,T.useRef)(r);_t(()=>{f.current=n,p.current=r});let m=!0,h=(0,T.useMemo)(()=>(m=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>{u.delete(e),!f.current&&!u.size&&p.current?.()})}),[n,u,r]);return a&&m&&(h={...h}),(0,T.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),T.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,A.jsx)(Ul,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,A.jsx)(vt.Provider,{value:h,children:e})};function Gl(){return new Map}function Kl(e=!0){let t=(0,T.useContext)(vt);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,T.useId)();(0,T.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,T.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var ql=e=>e.key||``;function Jl(e){let t=[];return T.Children.forEach(e,e=>{(0,T.isValidElement)(e)&&t.push(e)}),t}var Yl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Kl(o),f=(0,T.useMemo)(()=>Jl(e),[e]),p=o&&!u?[]:f.map(ql),m=(0,T.useRef)(!0),h=(0,T.useRef)(f),g=gt(()=>new Map),_=(0,T.useRef)(new Set),[v,y]=(0,T.useState)(f),[b,x]=(0,T.useState)(f);_t(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=ql(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=ql(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Jl(e)),y(f),null}let{forceRender:ee}=(0,T.useContext)(ht);return(0,A.jsx)(A.Fragment,{children:b.map(e=>{let v=ql(e),y=o&&!u?!1:f===b||p.includes(v);return(0,A.jsx)(Wl,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(ee?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Xl=(0,T.createContext)({strict:!1}),Zl={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Ql=!1;function $l(){if(Ql)return;let e={};for(let t in Zl)e[t]={isEnabled:e=>Zl[t].some(t=>!!e[t])};as(e),Ql=!0}function eu(){return $l(),os()}function tu(e){let t=eu();for(let n in e)t[n]={...t[n],...e[n]};as(t)}var nu=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function ru(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||nu.has(e)}var iu=c({default:()=>G}),G,au=o((()=>{throw G={},Error(`Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`)})),ou=e=>!ru(e);function su(e){typeof e==`function`&&(ou=t=>t.startsWith(`on`)?!ru(t):e(t))}try{su((au(),d(iu)).default)}catch{}function cu(e,t,n){let r={};for(let i in e)(i!==`values`||typeof e.values!=`object`)&&(Ta(e[i])||(ou(i)||n===!0&&ru(i)||!t&&!ru(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]));return r}function lu({children:e,isValidProp:t,...n}){t&&su(t);let r=(0,T.useContext)(Rl);n={...r,...n},n.transition=oa(n.transition,r.transition),n.isStatic=gt(()=>n.isStatic);let i=(0,T.useMemo)(()=>n,[JSON.stringify(n.transition),n.transformPagePoint,n.reducedMotion,n.skipAnimations]);return(0,A.jsx)(Rl.Provider,{value:i,children:e})}var uu=(0,T.createContext)({});function du(e,t){if(U(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Jo(t)?t:void 0,animate:Jo(n)?n:void 0}}return e.inherit===!1?{}:t}function fu(e){let{initial:t,animate:n}=du(e,(0,T.useContext)(uu));return(0,T.useMemo)(()=>({initial:t,animate:n}),[pu(t),pu(n)])}function pu(e){return Array.isArray(e)?e.join(` `):e}var mu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function hu(e,t,n){for(let r in t)!Ta(t[r])&&!Bs(r,n)&&(e[r]=t[r])}function gu({transformTemplate:e},t){return(0,T.useMemo)(()=>{let n=mu();return Ps(n,t,e),Object.assign({},n.vars,n.style)},[t])}function _u(e,t){let n=e.style||{},r={};return hu(r,n,e),Object.assign(r,gu(e,t)),r}function vu(e,t){let n={},r=_u(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var yu=()=>({...mu(),attrs:{}});function bu(e,t,n,r){let i=(0,T.useMemo)(()=>{let n=yu();return Js(n,t,Xs(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};hu(t,e.style,e),i.style={...t,...i.style}}return i}var xu=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Su(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(xu.indexOf(e)>-1||/[A-Z]/u.test(e))}function Cu(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Su(e)?bu:vu)(t,r,i,e),c=cu(t,typeof e==`string`,a),l=e===T.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,T.useMemo)(()=>Ta(u)?u.get():u,[u]);return(0,T.createElement)(e,{...l,children:d})}function wu({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:Tu(n,r,i,e),renderState:t()}}function Tu(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=el(a[e]);let{initial:o,animate:s}=e,c=U(e),l=Zo(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!qo(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=va(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var Eu=e=>(t,n)=>{let r=(0,T.useContext)(uu),i=(0,T.useContext)(vt),a=()=>wu(e,t,r,i);return n?a():gt(a)},Du=Eu({scrapeMotionValuesFromProps:Vs,createRenderState:mu}),Ou=Eu({scrapeMotionValuesFromProps:Qs,createRenderState:yu}),ku=Symbol.for(`motionComponentSymbol`);function Au(e,t,n){let r=(0,T.useRef)(n);(0,T.useInsertionEffect)(()=>{r.current=n});let i=(0,T.useRef)(null);return(0,T.useCallback)(n=>{n&&e.onMount?.(n),t&&(n?t.mount(n):t.unmount());let a=r.current;if(typeof a==`function`){if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n)}else a&&(a.current=n)},[t])}var ju=(0,T.createContext)({});function Mu(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function Nu(e,t,n,r,i,a){let{visualElement:o}=(0,T.useContext)(uu),s=(0,T.useContext)(Xl),c=(0,T.useContext)(vt),l=(0,T.useContext)(Rl),u=l.reducedMotion,d=l.skipAnimations,f=(0,T.useRef)(null),p=(0,T.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,T.useContext)(ju);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&Pu(f.current,n,i,h);let g=(0,T.useRef)(!1);(0,T.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[ka],v=(0,T.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return _t(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,T.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function Pu(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Fu(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&Mu(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Fu(e){if(e)return e.options.allowProjection===!1?Fu(e.parent):e.projection}function Iu(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&tu(r);let a=n?n===`svg`:Su(e),o=a?Ou:Du;function s(n,s){let c,l={...(0,T.useContext)(Rl),...n,layoutId:Lu(n)},{isStatic:u}=l,d=fu(n),f=o(n,u);if(!u&&typeof window<`u`){Ru(l,r);let t=zu(l);c=t.MeasureLayout,d.visualElement=Nu(e,f,l,i,t.ProjectionNode,a)}return(0,A.jsxs)(uu.Provider,{value:d,children:[c&&d.visualElement?(0,A.jsx)(c,{visualElement:d.visualElement,...l}):null,Cu(e,n,Au(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,T.forwardRef)(s);return c[ku]=e,c}function Lu({layoutId:e}){let t=(0,T.useContext)(ht).id;return t&&e!==void 0?t+`-`+e:e}function Ru(e,t){(0,T.useContext)(Xl).strict}function zu(e){let{drag:t,layout:n}=eu();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Bu(e,t){if(typeof Proxy>`u`)return Iu;let n=new Map,r=(n,r)=>Iu(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Iu(a,void 0,e,t)),n.get(a))})}var Vu=(e,t)=>t.isSVG??Su(e)?new $s(t):new Us(t,{allowProjection:e!==T.Fragment}),Hu=class extends ls{constructor(e){super(e),e.animationState||=oc(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();qo(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Uu=0,Wu={animation:{Feature:Hu},exit:{Feature:class extends ls{constructor(){super(...arguments),this.id=Uu++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`||typeof e==`object`&&e&&!Array.isArray(e)){let n=ya(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Gu(e){return{point:{x:e.pageX,y:e.pageY}}}var Ku=e=>t=>ho(t)&&e(t,Gu(t));function qu(e,t,n,r){return Xc(e,t,Ku(n),r)}var Ju=({current:e})=>e?e.ownerDocument.defaultView:null,Yu=(e,t)=>Math.abs(e-t);function Xu(e,t){let n=Yu(e.x,t.x),r=Yu(e.y,t.y);return Math.sqrt(n**2+r**2)}var Zu=new Set([`auto`,`scroll`]),Qu=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=$u(this.lastRawMoveEventInfo,this.transformPagePoint));let e=q(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Xu(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=on;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=$u(t,this.transformPagePoint),N.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=q(e.type===`pointercancel`?this.lastMoveEventInfo:$u(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!ho(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=$u(Gu(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=on;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,q(s,this.history));let d={passive:!0,capture:!0};this.removeListeners=Ot(qu(this.contextWindow,`pointermove`,this.handlePointerMove,d),qu(this.contextWindow,`pointerup`,this.handlePointerUp,d),qu(this.contextWindow,`pointercancel`,this.handlePointerUp,d)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Zu.has(e.overflowX)||Zu.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};(i.x!==0||i.y!==0)&&(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),N.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),an(this.updatePoint)}};function $u(e,t){return t?{point:t(e.point)}:e}function K(e,t){return{x:e.x-t.x,y:e.y-t.y}}function q({point:e},t){return{point:e,delta:K(e,Y(t)),offset:K(e,J(t)),velocity:X(t,.1)}}function J(e){return e[0]}function Y(e){return e[e.length-1]}function X(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Y(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>j(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>j(t)*2&&(r=e[1]);let a=jt(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function ed(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?F(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?F(n,e,r.max):Math.min(e,n)),e}function td(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function nd(e,{top:t,left:n,bottom:r,right:i}){return{x:td(e.x,n,i),y:td(e.y,t,r)}}function rd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function id(e,t){return{x:rd(e.x,t.x),y:rd(e.y,t.y)}}function ad(e,t){let n=.5,r=_c(e),i=_c(t);return i>r?n=kt(t.min,t.max-r,e.min):r>i&&(n=kt(e.min,e.max-i,t.min)),xt(0,1,n)}function od(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var sd=.35;function cd(e=sd){return e===!1?e=0:e===!0&&(e=sd),{x:ld(e,`left`,`right`),y:ld(e,`top`,`bottom`)}}function ld(e,t,n){return{min:ud(e,t),max:ud(e,n)}}function ud(e,t){return typeof e==`number`?e:e[t]||0}var dd=new WeakMap,fd=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=H(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Gu(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=lo(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zc(e=>{let t=this.getAxisMotionValue(e).get()||0;if(Nn.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=_c(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&N.update(()=>i(e,t),!1,!0),Da(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=gd(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&N.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new Qu(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Ju(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&N.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!hd(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=ed(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Mu(e)?this.constraints||=this.resolveRefConstraints():this.constraints=e&&n?nd(n.layoutBox,e):!1,this.elastic=cd(t),r!==this.constraints&&!Mu(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&zc(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=od(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Mu(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());let i=As(n,r.root,this.visualElement.getTransformPagePoint()),a=id(r.layout.layoutBox,i);if(t){let e=t(ds(a));this.hasMutatedConstraints=!!e,e&&(a=us(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=zc(o=>{if(!hd(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return Da(this.visualElement,e),n.start(pa(e,n,0,t,this.visualElement,!1))}stopAnimation(){zc(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`;return this.visualElement.getProps()[t]||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){zc(t=>{let{drag:n}=this.getProps();if(!hd(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-F(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Mu(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};zc(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=ad({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),zc(t=>{if(!hd(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(F(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;dd.set(this.visualElement,this);let e=this.visualElement.current,t=qu(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&yo(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();Mu(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=md(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),N.read(r);let o=Xc(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(zc(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=sd,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function pd(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function md(e,t,n){let r=Vo(e,pd(n)),i=Vo(t,pd(n));return()=>{r(),i()}}function hd(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function gd(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var _d=class extends ls{constructor(e){super(e),this.removeGroupControls=Dt,this.removeListeners=Dt,this.controls=new fd(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Dt}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},vd=e=>(t,n)=>{e&&N.update(()=>e(t,n),!1,!0)},yd=class extends ls{constructor(){super(...arguments),this.removePointerDownListener=Dt}onPointerDown(e){this.session=new Qu(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ju(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:vd(e),onStart:vd(t),onMove:vd(n),onEnd:(e,t)=>{delete this.session,r&&N.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=qu(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},bd=!1,xd=class extends T.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),bd&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),nl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),bd=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||N.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),ao.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;bd=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function Sd(e){let[t,n]=Kl(),r=(0,T.useContext)(ht);return(0,A.jsx)(xd,{...e,layoutGroup:r,switchLayoutGroup:(0,T.useContext)(ju),isPresent:t,safeToRemove:n})}var Cd={pan:{Feature:yd},drag:{Feature:_d,ProjectionNode:Ll,MeasureLayout:Sd}};function wd(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&N.postRender(()=>i(t,Gu(t)))}var Td=class extends ls{mount(){let{current:e}=this.node;e&&(this.unmount=po(e,(e,t)=>(wd(this.node,t,`Start`),e=>wd(this.node,e,`End`))))}unmount(){}},Ed=class extends ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}e&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ot(Xc(this.node.current,`focus`,()=>this.onFocus()),Xc(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function Dd(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&N.postRender(()=>i(t,Gu(t)))}var Od=class extends ls{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=Eo(e,(e,t)=>(Dd(this.node,t,`Start`),(e,{success:t})=>Dd(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},kd=new WeakMap,Ad=new WeakMap,jd=e=>{let t=kd.get(e.target);t&&t(e)},Md=e=>{e.forEach(jd)};function Nd({root:e,...t}){let n=e||document;Ad.has(n)||Ad.set(n,{});let r=Ad.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Md,{root:e,...t})),r[i]}function Pd(e,t,n){let r=Nd(t);return kd.set(e,n),r.observe(e),()=>{kd.delete(e),r.unobserve(e)}}var Fd={some:0,all:1},Id=class extends ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Fd[r]},o=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)};this.stopObserver=Pd(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(Ld(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function Ld({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Rd={inView:{Feature:Id},tap:{Feature:Od},focus:{Feature:Ed},hover:{Feature:Td}},zd={layout:{ProjectionNode:Ll,MeasureLayout:Sd}},Bd=Bu({...Wu,...Rd,...Cd,...zd},Vu),Vd=({paint:e})=>(0,A.jsxs)(`svg`,{viewBox:`4.5 1.5 15 21`,width:`46`,height:`46`,fill:`none`,"aria-hidden":`true`,children:[(0,A.jsx)(`path`,{d:`M12 2.6C9.3 2.6 8.1 4.8 8.1 6.75c0 2.05 1.3 4.05 2.55 5.95L6.3 19.95l2.55 1.25L12 15.75l3.15 5.45 2.55-1.25-4.35-7.25c1.25-1.9 2.55-3.9 2.55-5.95C15.9 4.8 14.7 2.6 12 2.6Zm0 2.5c1.2 0 1.8.9 1.8 1.9 0 1.2-.75 2.6-1.8 4.1-1.05-1.5-1.8-2.9-1.8-4.1 0-1 .6-1.9 1.8-1.9Z`,fill:e,fillOpacity:`0.18`,fillRule:`evenodd`,stroke:e,strokeWidth:`1.35`,strokeLinejoin:`round`}),(0,A.jsx)(`path`,{d:`M10.65 12.7l2.4 4.1`,stroke:e,strokeWidth:`1.35`,strokeLinecap:`round`})]}),Hd=({paint:e})=>(0,A.jsx)(`svg`,{viewBox:`1.5 1.5 21 21`,width:`46`,height:`46`,fill:`none`,"aria-hidden":`true`,children:(0,A.jsxs)(`g`,{stroke:e,strokeWidth:`1.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,A.jsx)(`path`,{d:`M4.5 21V10.5A1.5 1.5 0 0 1 6 9h12a1.5 1.5 0 0 1 1.5 1.5V21`,fill:e,fillOpacity:`0.14`}),(0,A.jsx)(`rect`,{x:`8.5`,y:`2.75`,width:`7`,height:`6.25`,rx:`1.3`,fill:`#fff`}),(0,A.jsx)(`path`,{d:`M12 4.1v3.5M10.25 5.85h3.5`}),(0,A.jsx)(`path`,{d:`M7.25 12.25h2M14.75 12.25h2M7.25 15.25h2M14.75 15.25h2`}),(0,A.jsx)(`path`,{d:`M10.4 21v-2.9a1.6 1.6 0 0 1 3.2 0V21`}),(0,A.jsx)(`path`,{d:`M2.5 21h19`})]})}),Ud=({kind:e,className:t=``})=>{let n=(0,T.useId)().replace(/:/g,``),r=`url(#${n})`,i={brain:(0,A.jsx)(_e,{size:46,strokeWidth:1.2,color:r,"aria-hidden":`true`}),ribbon:(0,A.jsx)(Vd,{paint:r}),hospital:(0,A.jsx)(Hd,{paint:r})}[e];return(0,A.jsxs)(`span`,{className:`hh-emblem ${t}`,"aria-hidden":`true`,children:[(0,A.jsx)(`svg`,{width:`0`,height:`0`,style:{position:`absolute`},focusable:`false`,children:(0,A.jsx)(`defs`,{children:(0,A.jsxs)(`linearGradient`,{id:n,gradientUnits:`userSpaceOnUse`,x1:`3`,y1:`2`,x2:`21`,y2:`22`,children:[(0,A.jsx)(`stop`,{offset:`0`,style:{stopColor:`var(--c-accent-2)`}}),(0,A.jsx)(`stop`,{offset:`1`,style:{stopColor:`var(--c-accent)`}})]})})}),i]})},Wd=(e,t,n,r=e)=>({"--c-accent":e,"--c-accent-2":t,"--c-accent-rgb":n,"--c-btn":r}),Gd=[Wd(`#7B6FCD`,`#a99ff0`,`123, 111, 205`),Wd(`#3A82C4`,`#7fb3e6`,`58, 130, 196`),Wd(`#2aaa72`,`#6fd1a4`,`42, 170, 114`),Wd(`#D4891E`,`#f0b866`,`212, 137, 30`),Wd(`#b52a6b`,`#e67aa6`,`181, 42, 107`)],Kd=[{Icon:Te,label:`Early Detection`,vars:Gd[1]},{Icon:De,label:`Precision Diagnosis`,vars:Gd[0]},{Icon:xe,label:`Genomic Insights`,vars:Gd[2]},{Icon:Me,label:`Better Outcomes`,vars:Gd[4]},{Icon:nt,label:`Accessible to All`,vars:Gd[3]}],qd=[{id:`stroke`,title:`Stroke AI`,tagline:`AI for Faster Detection and Better Outcomes`,emblem:`brain`,image:`/stroke-brain.webp`,imageSize:[425,460],cutout:!0,features:[{Icon:Je,label:`CT / MRI Analysis`},{Icon:Te,label:`Stroke Detection`},{Icon:O,label:`AI Assessment`},{Icon:xe,label:`Monitoring & Follow-up`}],cta:`Open Stroke AI Module`,href:`https://stroke-ai.org`,external:!0,vars:{...Wd(`#2a6db5`,`#6aa6e8`,`42, 109, 181`),"--c-tint-1":`#dbe8fb`,"--c-tint-2":`#f1f6ff`}},{id:`oncotrace`,title:`OncoTrace AI`,tagline:`AI Imaging + NGS for Early Detection and Personalized Care`,emblem:`ribbon`,image:`/oncotrace-breast.webp`,imageSize:[358,460],cutout:!0,features:[{Icon:Ke,label:`AI MRI Analysis`},{Icon:Xe,label:`Mammography AI`},{Icon:De,label:`NGS & Molecular Profiling`},{Icon:le,label:`Risk Assessment`}],cta:`Open OncoTrace AI`,href:`https://oncotrace-ai.org`,external:!0,vars:{...Wd(`#b52a6b`,`#e67aa6`,`181, 42, 107`),"--c-tint-1":`#fbe1ee`,"--c-tint-2":`#f5ecfc`}},{id:`shri-health`,title:`SHRI HEALTH`,tagline:`AI Imaging + NGS for Precision Oncology`,emblem:`hospital`,image:`/shri-health-lung.webp`,imageSize:[376,406],features:[{Icon:Je,label:`CT Imaging AI`},{Icon:De,label:`NGS & Molecular Profiling`},{Icon:le,label:`Biomarker Analysis`},{Icon:O,label:`Treatment Monitoring`}],cta:`Open SHRI Health Module`,href:`/dev`,vars:{...Wd(`#1f9163`,`#5cc79a`,`31, 145, 99`,`#167a52`),"--c-tint-1":`#dcf2e8`,"--c-tint-2":`#eef8f6`}}],Jd=[.22,1,.36,1],Yd=(e=0)=>({initial:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.75,delay:e*.09,ease:Jd}}),Xd=()=>(0,A.jsxs)(lu,{reducedMotion:`user`,children:[(0,A.jsx)(`style`,{children:`
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
          padding: var(--bpad) clamp(1.5rem, 3vw, 3rem);
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
        /* contain, not cover: the whole building always shows. The render is
           a cut-out with a clear sky, so it fades out at the left and right
           and only along the bottom, where the road is cut straight; the
           roofline stays crisp. The two fades are intersected, and the whole
           image sits slightly translucent so it reads as part of the banner. */
        .hh-banner-media img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          /* Sits on the banner's bottom edge, not centred in it. */
          object-position: 50% 100%;
          opacity: 0.85;
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
          grid-template-columns: repeat(3, minmax(0, 1fr));
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
        .hh-corner:hover { transform: translateX(2px); background: var(--c-btn); color: #fff; }

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
        .hh-art { display: block; width: 100%; height: 100%; overflow: visible; }
        /* Motion for the vector illustrations in HeroArt.jsx — not used on the
           page right now (the cards show images); kept so they can be
           switched back in without redoing the art. */
        .hh-art-spin { transform-box: view-box; transform-origin: 120px 120px; animation: hhArtSpin 28s linear infinite; }
        .hh-art-orbit { transform-box: view-box; transform-origin: 120px 120px; animation: hhArtSpin 46s linear infinite; }
        @keyframes hhArtSpin { to { transform: rotate(360deg); } }
        .hh-art-ping { transform-box: fill-box; transform-origin: center; animation: hhArtPing 2.4s ease-out infinite; }
        @keyframes hhArtPing {
          0% { transform: scale(0.7); opacity: 0.9; }
          100% { transform: scale(2); opacity: 0; }
        }
        .hh-art-trace { stroke-dasharray: 100; animation: hhArtTrace 3.4s ease-in-out infinite; }
        @keyframes hhArtTrace {
          0% { stroke-dashoffset: 100; opacity: 0; }
          15% { opacity: 1; }
          60% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        .hh-art-bob { animation: hhArtBob 6s ease-in-out infinite; }
        .hh-art-bob--late { animation-delay: -3s; }
        @keyframes hhArtBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .hh-art-bar { transform-box: fill-box; transform-origin: bottom; animation: hhArtBar 3.2s ease-in-out infinite alternate; }
        @keyframes hhArtBar { from { transform: scaleY(0.72); } to { transform: scaleY(1); } }
        .hh-art-node { transform-box: fill-box; transform-origin: center; animation: hhArtNode 3s ease-in-out infinite; }
        @keyframes hhArtNode {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.6); opacity: 1; }
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
          box-shadow: 0 10px 22px -12px rgba(var(--c-accent-rgb), 0.8);
          transition: filter 0.25s ease, box-shadow 0.25s ease;
        }
        .hh-btn svg { transition: transform 0.25s ease; }
        .hh-btn:hover { color: #fff; filter: brightness(1.08); box-shadow: 0 14px 28px -12px rgba(var(--c-accent-rgb), 0.9); }
        .hh-btn:hover svg { transform: translateX(3px); }
        .hh-card .hh-btn {
          align-self: stretch;
          justify-content: center;
          min-height: 46px;
          border-radius: 8px;
          font-size: var(--fs-sm);
        }

        .hh-btn:focus-visible, .hh-corner:focus-visible { outline: 2px solid #3A82C4; outline-offset: 3px; }

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
          /* Text and chips stacked left, building on the right. */
          .hh-banner-inner { grid-template-columns: minmax(0, 1fr) minmax(0, 0.8fr); }
          .hh-points { grid-column: 1; flex-direction: row; flex-wrap: wrap; }
          .hh-banner-media { grid-column: 2; grid-row: 1 / span 2; }
          .hh-modules { grid-template-columns: minmax(0, 1fr); }
          .hh-card-main { grid-template-columns: minmax(0, 1fr) clamp(150px, 36%, 300px); }
        }
        @media (max-width: 640px) {
          /* Phones: no room for a building beside the heading, so it goes
             rather than sitting under the text. */
          .hh-banner-inner { grid-template-columns: minmax(0, 1fr); }
          .hh-banner-media { display: none; }
          .hh-point { white-space: normal; }
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
          .hh-modules > .hh-card:first-child { padding-top: 0.5rem; }
          .hh-card-main { margin-right: 0; }
        }
        @media (max-width: 480px) {
          .hh-card-main { grid-template-columns: minmax(0, 1fr) 104px; }
          .hh-features li { gap: 0.7rem; font-size: var(--fs-xs); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hh-banner::after, .hh-title-em,
          .hh-art-spin, .hh-art-orbit, .hh-art-ping, .hh-art-trace,
          .hh-art-bob, .hh-art-bar, .hh-art-node { animation: none; }
          .hh-corner, .hh-btn, .hh-btn svg, .hh-feat-icon { transition: none; }
          .hh-features li:hover .hh-feat-icon { transform: none; }
          .hh-corner:hover, .hh-btn:hover svg { transform: none; }
        }
      `}),(0,A.jsx)(`div`,{className:`hh-root`,children:(0,A.jsxs)(`div`,{className:`hh-wrap hh-body`,children:[(0,A.jsx)(`section`,{className:`hh-banner`,children:(0,A.jsxs)(`div`,{className:`hh-banner-inner`,children:[(0,A.jsxs)(Bd.div,{className:`hh-banner-text`,...Yd(0),children:[(0,A.jsxs)(`h1`,{className:`hh-title`,children:[`AI-Powered `,(0,A.jsx)(`span`,{className:`hh-title-em`,children:`Healthcare`})]}),(0,A.jsx)(`p`,{className:`hh-sub`,children:`Intelligence across diagnosis, genomics and patient care`}),(0,A.jsxs)(`p`,{className:`hh-org`,children:[`A California-based `,(0,A.jsx)(`span`,{className:`hh-org-em`,children:`501(c)(3)`}),` nonprofit organization`]})]}),(0,A.jsx)(Bd.div,{className:`hh-banner-media`,"aria-hidden":`true`,...Yd(1),children:(0,A.jsx)(`img`,{src:`/banner-hospital.webp`,alt:``,draggable:!1,width:1600,height:782})}),(0,A.jsx)(`ul`,{className:`hh-points`,children:Kd.map(({Icon:e,label:t,vars:n},r)=>(0,A.jsxs)(Bd.li,{className:`hh-point`,style:n,...Yd(r+1),children:[(0,A.jsx)(`span`,{"aria-hidden":`true`,children:(0,A.jsx)(e,{size:14,strokeWidth:1.75})}),t]},t))})]})}),(0,A.jsx)(`section`,{className:`hh-modules`,"aria-label":`AI modules`,children:qd.map((e,t)=>{let n=e.external?{href:e.href,target:`_blank`,rel:`noopener noreferrer`}:{href:e.href};return(0,A.jsxs)(Bd.article,{className:`hh-card hh-surface`,style:e.vars,...Yd(t),whileHover:{y:-4,transition:{duration:.35,ease:Jd}},children:[(0,A.jsxs)(`div`,{className:`hh-card-head`,children:[(0,A.jsx)(Ud,{kind:e.emblem}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h2`,{className:`hh-card-title`,children:e.title}),(0,A.jsx)(`p`,{className:`hh-card-tagline`,children:e.tagline})]}),(0,A.jsx)(`a`,{className:`hh-corner`,"aria-label":e.cta+(e.external?` (opens in new tab)`:``),...n,children:(0,A.jsx)(Ce,{size:18,strokeWidth:1.75,"aria-hidden":`true`})})]}),(0,A.jsxs)(`div`,{className:`hh-card-main`,children:[(0,A.jsx)(`ul`,{className:`hh-features`,children:e.features.map(({Icon:e,label:t})=>(0,A.jsxs)(`li`,{children:[(0,A.jsx)(`span`,{className:`hh-feat-icon`,"aria-hidden":`true`,children:(0,A.jsx)(e,{size:20,strokeWidth:1.6})}),t]},t))}),(0,A.jsx)(`div`,{className:`hh-card-img`,"aria-hidden":`true`,children:(0,A.jsx)(`img`,{className:e.cutout?`is-cutout`:void 0,src:e.image,alt:``,loading:`lazy`,draggable:!1,width:e.imageSize[0],height:e.imageSize[1]})})]}),(0,A.jsxs)(`a`,{className:`hh-btn`,...n,children:[e.cta,(0,A.jsx)(pe,{size:16,strokeWidth:1.75,"aria-hidden":`true`})]})]},e.id)})})]})})]}),Zd=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
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

        .icon-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: middle;
          position: relative;
          top: -0.06em;
          margin-left: 0.22em;
          flex-shrink: 0;
        }

        .icon-chip svg {
          display: block;
        }

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
      `}),(0,A.jsxs)(`section`,{className:`about-section relative w-full overflow-hidden`,children:[(0,A.jsxs)(`div`,{style:{position:`absolute`,inset:0,overflow:`hidden`,pointerEvents:`none`,zIndex:0},children:[(0,A.jsx)(`div`,{style:{position:`absolute`,width:`65%`,height:`60%`,bottom:`-15%`,left:`-10%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(255,140,30,0.30) 0%, rgba(255,180,80,0.12) 40%, transparent 70%)`,filter:`blur(90px)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,width:`60%`,height:`60%`,bottom:`-10%`,left:`20%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(160,100,255,0.25) 0%, rgba(200,160,255,0.10) 40%, transparent 70%)`,filter:`blur(100px)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,width:`65%`,height:`60%`,bottom:`-15%`,right:`-10%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(50,130,255,0.30) 0%, rgba(100,170,255,0.12) 40%, transparent 70%)`,filter:`blur(90px)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,width:`40%`,height:`50%`,bottom:`0%`,right:`5%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(20,90,220,0.20) 0%, transparent 70%)`,filter:`blur(80px)`}})]}),(0,A.jsx)(`div`,{className:`content-wrapper relative z-10 w-full px-6 sm:px-10 md:px-16 lg:px-24`,children:(0,A.jsxs)(`div`,{className:`about-text flex flex-col`,style:{fontSize:`clamp(1.2rem, 2.6vw, 2.2rem)`,gap:`clamp(0.15rem, 0.5vw, 0.35rem)`},children:[(0,A.jsxs)(`p`,{className:`text-center pb-4 max-w-[1400px] mx-auto`,children:[(0,A.jsx)(`span`,{style:{color:`#888`,fontWeight:300,fontSize:`0.92em`,letterSpacing:`0.02em`,marginRight:`0.28em`},children:`→`}),`SHRI-AI is a California-based 501(c)(3) nonprofit advancing `,(0,A.jsx)(`span`,{className:`accent-purple`,style:{fontWeight:400},children:`earlier detection`}),` and `,(0,A.jsx)(`span`,{className:`accent-gold`,style:{fontWeight:400},children:`precision care`}),` across `,(0,A.jsx)(`span`,{className:`accent-blue`,style:{fontWeight:400},children:`oncology and stroke`}),`.`]}),(0,A.jsxs)(`p`,{className:`text-center max-w-[1400px] mx-auto`,children:[`We build and fund `,(0,A.jsx)(`span`,{className:`accent-green`,style:{fontWeight:400},children:`open-source AI`}),`, pairing `,(0,A.jsx)(`span`,{className:`accent-blue`,style:{fontWeight:400},children:`genomics and liquid biopsy`}),` with medical imaging — reaching hospitals and communities everywhere.`]})]})}),(0,A.jsx)(`div`,{className:`footer-tagline-wrapper`,children:(0,A.jsxs)(`p`,{className:`footer-tagline`,children:[(0,A.jsx)(`span`,{className:`highlight`,children:`AI`}),` for health, `,(0,A.jsx)(`span`,{className:`highlight`,children:`Care`}),` for `,(0,A.jsx)(`span`,{className:`highlight`,children:`ALL`})]})})]})]}),Qd=[{Icon:he,title:`Agentic AI Systems`,desc:`Developing autonomous, reasoning-capable agents and complex LLM architectures.`,items:[`LLM-Powered Applications`,`Multi-Agent Architectures`,`Intelligent Process Automation`,`Conversational AI Assistants`],accent:`#7B6FCD`,accentRgb:`123, 111, 205`},{Icon:et,title:`Healthcare AI`,desc:`Translating high-volume clinical data into precise, actionable decision support.`,items:[`Clinical Decision Support Systems`,`Predictive Health Analytics`,`AI-Powered Diagnostic Support`,`Automated Risk Stratification`],accent:`#3A82C4`,accentRgb:`58, 130, 196`},{Icon:Be,title:`Precision Oncology`,desc:`Architecting robust pipelines for variant analysis and molecular monitoring.`,items:[`Liquid Biopsy Data Pipelines`,`ctDNA Detection & Analysis`,`Next-Gen Sequencing (NGS) Pipelines`,`Molecular Response Monitoring`],accent:`#c0392b`,accentRgb:`192, 57, 43`},{Icon:De,title:`Genomics`,desc:`Processing massive-scale sequencing data into accessible, annotated structures.`,items:[`FASTQ & BAM Processing`,`VCF Variant Analysis`,`Biomarker Discovery Pipelines`,`Automated Variant Annotation`],accent:`#2aaa72`,accentRgb:`42, 170, 114`}],$d=()=>{let[e,t]=(0,T.useState)(0),n=[{icon:(0,A.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,A.jsx)(`circle`,{cx:`20`,cy:`20`,r:`4`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`path`,{d:`M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,transform:`rotate(60 20 20)`}),(0,A.jsx)(`path`,{d:`M20 4C20 4 20 8 20 12M20 28C20 28 20 32 20 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,transform:`rotate(120 20 20)`}),(0,A.jsx)(`circle`,{cx:`20`,cy:`4`,r:`2`,fill:`currentColor`,opacity:`0.5`}),(0,A.jsx)(`circle`,{cx:`20`,cy:`36`,r:`2`,fill:`currentColor`,opacity:`0.5`}),(0,A.jsx)(`circle`,{cx:`4`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(60 20 20)`}),(0,A.jsx)(`circle`,{cx:`36`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(60 20 20)`}),(0,A.jsx)(`circle`,{cx:`4`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(120 20 20)`}),(0,A.jsx)(`circle`,{cx:`36`,cy:`20`,r:`2`,fill:`currentColor`,opacity:`0.5`,transform:`rotate(120 20 20)`})]}),accent:`#7B6FCD`,accentRgb:`123,111,205`,number:`01`,title:`Precision Oncology & Genomics`,subtitle:`From Sequence to Treatment Decision`,description:`Turning genomic and molecular data into decisions clinicians can act on — earlier detection, better-matched treatment, and monitoring that continues through the course of care.`,features:[`Next-generation sequencing and multi-omic interpretation`,`Liquid biopsy and ctDNA for non-invasive monitoring`,`Biomarker discovery and treatment-response modelling`]},{icon:(0,A.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,A.jsx)(`path`,{d:`M20 5 C13 5 8 11 8 18 C8 24 12 28 12 32 L12 34 L28 34 L28 32 C28 28 32 24 32 18 C32 11 27 5 20 5 Z`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`path`,{d:`M14 19 L18 19 L20 14 L23 24 L25 19 L28 19`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,A.jsx)(`path`,{d:`M15 34 L15 36 M25 34 L25 36`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#c0392b`,accentRgb:`192,57,43`,number:`02`,title:`Medical Imaging & Stroke AI`,subtitle:`Reading Scans at the Speed of Care`,description:`Imaging AI built for the clock that actually governs outcomes. Stroke is where we prove it, and the same methods extend to any diagnosis where minutes and subtle findings decide the result.`,features:[`AI-assisted CT and MRI interpretation`,`Risk stratification and early-warning models`,`Decision support for time-critical pathways`]},{icon:(0,A.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,A.jsx)(`rect`,{x:`6`,y:`12`,width:`28`,height:`20`,rx:`3`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`path`,{d:`M13 22 L16 18 L19 23 L22 16 L25 22 L28 19`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,A.jsx)(`circle`,{cx:`20`,cy:`8`,r:`3`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`path`,{d:`M17 10.5 L16 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M23 10.5 L24 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#3A82C4`,accentRgb:`58,130,196`,number:`03`,title:`AI Across the Care Continuum`,subtitle:`Prediction, Diagnosis, Monitoring`,description:`AI applied wherever clinical data is generated — not a single condition, but the whole arc from risk prediction and screening through diagnosis, treatment selection, and long-term monitoring.`,features:[`Predictive and risk-stratification models across conditions`,`Clinical decision support embedded in real workflows`,`Multimodal learning across imaging, genomics, and records`,`Foundation models adapted to clinical and biomedical data`]},{icon:(0,A.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,A.jsx)(`path`,{d:`M20 6 L20 18`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`circle`,{cx:`20`,cy:`21`,r:`4`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`path`,{d:`M8 14 L14 17.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M32 14 L26 17.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M8 28 L14 24.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M32 28 L26 24.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`circle`,{cx:`8`,cy:`13`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`circle`,{cx:`32`,cy:`13`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`circle`,{cx:`8`,cy:`29`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`circle`,{cx:`32`,cy:`29`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`circle`,{cx:`20`,cy:`35`,r:`2.5`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`path`,{d:`M20 25 L20 32.5`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#D4891E`,accentRgb:`212,137,30`,number:`04`,title:`Translation & Clinical Validation`,subtitle:`From Promising to Proven`,description:`Most health AI never reaches a patient. We treat the path from model to bedside as part of the research itself — validated on real populations, evaluated for bias, and built to survive clinical reality.`,features:[`Prospective validation with hospitals, labs, and academic centres`,`Evaluation across diverse populations and care settings`,`Regulatory, safety, and clinical-evidence pathways`,`Integration with existing clinical systems and workflows`]},{icon:(0,A.jsxs)(`svg`,{viewBox:`0 0 40 40`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,children:[(0,A.jsx)(`circle`,{cx:`20`,cy:`20`,r:`13`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`ellipse`,{cx:`20`,cy:`20`,rx:`6`,ry:`13`,stroke:`currentColor`,strokeWidth:`1.5`}),(0,A.jsx)(`path`,{d:`M7 20 Q13 17 20 20 Q27 23 33 20`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M9 14 Q14 12 20 13 Q26 14 31 12`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`}),(0,A.jsx)(`path`,{d:`M9 26 Q14 28 20 27 Q26 26 31 28`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`})]}),accent:`#2aaa72`,accentRgb:`42,170,114`,number:`05`,title:`Open Infrastructure & Global Access`,subtitle:`Built to Be Adopted, Not Licensed`,description:`Advanced diagnostics are worth little if only well-funded systems can run them. We build in the open so hospitals, labs, and researchers anywhere can deploy, inspect, and extend the work themselves.`,features:[`Open-source tooling hospitals and labs can adopt directly`,`Solutions designed for constrained infrastructure and budgets`,`Research capacity building in India, Southeast Asia, and Africa`,`Transparent, auditable models rather than closed black boxes`]}],r=[{title:`Clinical Studies`,desc:`Collaborative research initiatives and trial design`,accent:`#7B6FCD`,accentRgb:`123,111,205`},{title:`Data Partnerships`,desc:`Shared datasets and analytics pipelines`,accent:`#3A82C4`,accentRgb:`58,130,196`},{title:`Technology Validation`,desc:`Real-world testing and verification`,accent:`#2aaa72`,accentRgb:`42,170,114`},{title:`Grant-Funded Research`,desc:`Joint funding and co-authorship`,accent:`#D4891E`,accentRgb:`212,137,30`}],i={fontFamily:`var(--font-sans)`},a={...i,fontWeight:300,fontSize:`0.68rem`,letterSpacing:`0.12em`,opacity:.35,marginRight:`1.25rem`,minWidth:`2rem`};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`

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

        /* ── partner pills ── */
        .fa2-partner-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.1rem;
          border-radius: 100px;
          font-size: 0.82rem;
          font-weight: 500;
          font-family: var(--font-sans);
          letter-spacing: 0.01em;
          border: 1px solid transparent;
          background: #fff;
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
        .fa2-partners-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
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
      `}),(0,A.jsx)(`section`,{className:`fa2-root relative w-full`,style:{background:`#f8f7f5`,minHeight:`100vh`},children:(0,A.jsxs)(`div`,{style:{maxWidth:`1600px`,margin:`0 auto`,padding:`clamp(4rem, 8vw, 8rem) clamp(2rem, 5vw, 4rem)`,position:`relative`,zIndex:1},children:[(0,A.jsxs)(Bd.div,{className:`fa2-sponsor`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.08},transition:{duration:.7,ease:[.22,1,.36,1]},children:[(0,A.jsxs)(`div`,{className:`fa2-sponsor-main`,children:[(0,A.jsx)(`a`,{href:`https://visolve.com/portfolio/`,target:`_blank`,rel:`noopener noreferrer`,className:`fa2-sponsor-logo-link`,"aria-label":`ViSolve portfolio (opens in a new tab)`,children:(0,A.jsx)(`img`,{src:`/visolve-logo.webp`,alt:`ViSolve`,className:`fa2-sponsor-logo`,width:`201`,height:`110`,loading:`lazy`,decoding:`async`})}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{style:i,className:`fa2-sponsor-label`,children:`Sponsored by`}),(0,A.jsxs)(`p`,{style:i,className:`fa2-sponsor-text`,children:[`Founded in 1995 and headquartered in San Jose, California,`,` `,(0,A.jsx)(`a`,{href:`https://visolve.com/portfolio/`,target:`_blank`,rel:`noopener noreferrer`,className:`fa2-sponsor-link`,children:`ViSolve`}),` `,`is a product development, software services, and consulting firm focused on Healthcare IT and Enterprise IT using open source and leading-edge technologies. ViSolve sponsors`,` `,(0,A.jsx)(`span`,{className:`fa2-sponsor-name`,children:`SHRI-AI`}),`, supporting the research and engineering behind our work in precision oncology, stroke imaging, and AI for healthcare.`]}),(0,A.jsxs)(Bd.a,{href:`https://visolve.com/portfolio/`,target:`_blank`,rel:`noopener noreferrer`,className:`fa2-sponsor-btn`,whileHover:{backgroundColor:`#0a0a0a`,color:`#fff`},whileTap:{scale:.98},transition:{duration:.18},children:[`View ViSolve’s Portfolio`,(0,A.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,A.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})})]})]})]}),(0,A.jsxs)(`div`,{className:`fa2-ai`,children:[(0,A.jsx)(`p`,{style:i,className:`fa2-sponsor-label`,children:`ViSolve AI Services`}),(0,A.jsxs)(`p`,{className:`fa2-ai-headline`,children:[`AI engineered for `,(0,A.jsx)(`strong`,{className:`fa2-ai-kw-blue`,children:`healthcare`}),`,`,` `,(0,A.jsx)(`strong`,{className:`fa2-ai-kw-red`,children:`precision oncology`}),` and`,` `,(0,A.jsx)(`strong`,{className:`fa2-ai-kw-green`,children:`genomics`}),`.`]}),(0,A.jsx)(`ol`,{className:`fa2-ai-index`,children:Qd.map(({Icon:e,title:t,desc:n,items:r,accent:i,accentRgb:a},o)=>(0,A.jsxs)(Bd.li,{className:`fa2-ai-row`,style:{"--ai-accent":i,"--ai-accent-rgb":a},initial:{opacity:0,y:14},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.3},transition:{delay:o*.06,duration:.6,ease:[.22,1,.36,1]},children:[(0,A.jsx)(`span`,{className:`fa2-ai-num`,"aria-hidden":`true`,children:String(o+1).padStart(2,`0`)}),(0,A.jsxs)(`h3`,{className:`fa2-ai-title`,children:[(0,A.jsx)(e,{size:22,strokeWidth:1.5,"aria-hidden":`true`}),t]}),(0,A.jsx)(`p`,{className:`fa2-ai-desc`,children:n}),(0,A.jsx)(`ul`,{className:`fa2-ai-items`,children:r.map(e=>(0,A.jsx)(`li`,{children:e},e))})]},t))})]})]}),(0,A.jsxs)(`div`,{className:`fa2-focus-grid`,children:[(0,A.jsxs)(Bd.div,{className:`fa2-sticky-left`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},children:[(0,A.jsx)(`p`,{style:{...i,fontWeight:300,letterSpacing:`0.18em`,fontSize:`0.68rem`,textTransform:`uppercase`,color:`#999`,marginBottom:`2rem`},children:`Services`}),(0,A.jsxs)(`h2`,{className:`fa2-hero-title`,style:{fontSize:`clamp(2.6rem, 4.5vw, 4.2rem)`,color:`#0a0a0a`,marginBottom:`2rem`},children:[`Where`,` `,(0,A.jsx)(`span`,{className:`fa2-hero-em fa2-shimmer`,children:`science`}),(0,A.jsx)(`br`,{}),`meets`,` `,(0,A.jsx)(`span`,{className:`fa2-hero-em fa2-shimmer`,children:`impact`})]}),(0,A.jsx)(`div`,{style:{width:`2rem`,height:`1px`,background:`#0a0a0a`,marginBottom:`1.5rem`}})]}),(0,A.jsx)(Bd.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,delay:.15,ease:[.22,1,.36,1]},children:(0,A.jsx)(`div`,{className:`fa2-accordion`,children:n.map((n,r)=>{let o=e===r;return(0,A.jsxs)(`div`,{className:`fa2-accordion-item`,style:{background:o?`#fff`:`#fdfdfd`},children:[(0,A.jsx)(Bd.div,{initial:{scaleY:0,opacity:0},animate:{scaleY:+!!o,opacity:+!!o},transition:{duration:.4,ease:[.16,1,.3,1]},style:{position:`absolute`,left:0,top:0,bottom:0,width:2,background:n.accent,transformOrigin:`top`,zIndex:2}}),(0,A.jsxs)(`button`,{type:`button`,className:`fa2-accordion-btn`,onClick:()=>t(o?null:r),children:[(0,A.jsx)(`span`,{style:a,children:n.number}),(0,A.jsx)(Bd.span,{animate:{color:o?n.accent:`#bbb`},transition:{duration:.25},style:{display:`flex`,alignItems:`center`,marginRight:`1.25rem`,flexShrink:0},children:n.icon}),(0,A.jsxs)(`span`,{style:{flex:1,minWidth:0},children:[(0,A.jsx)(`span`,{style:{...i,display:`block`,fontSize:`clamp(0.875rem, 1.5vw, 1rem)`,fontWeight:500,color:o?`#0a0a0a`:`#444`,letterSpacing:`-0.01em`,transition:`color 0.2s ease`,lineHeight:1.3},children:n.title}),(0,A.jsx)(`span`,{style:{...i,display:`block`,fontSize:`0.68rem`,color:`#bbb`,fontWeight:300,letterSpacing:`0.1em`,marginTop:`0.25rem`,textTransform:`uppercase`},children:n.subtitle})]}),(0,A.jsx)(Bd.span,{animate:{rotate:o?45:0},transition:{duration:.35,ease:[.16,1,.3,1]},style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:28,height:28,flexShrink:0,marginLeft:`1rem`,color:o?n.accent:`#ccc`,transition:`color 0.2s ease`},children:(0,A.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,children:(0,A.jsx)(`path`,{d:`M12 5v14M5 12h14`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})})})]}),(0,A.jsx)(Yl,{initial:!1,children:o&&(0,A.jsx)(Bd.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{height:{duration:.5,ease:[.16,1,.3,1]},opacity:{duration:.3}},style:{overflow:`hidden`},children:(0,A.jsxs)(`div`,{style:{paddingLeft:`clamp(1.25rem, 3vw, 2.5rem)`,paddingRight:`clamp(1.25rem, 3vw, 2.5rem)`,paddingBottom:`clamp(1.5rem, 3vw, 2.25rem)`},children:[(0,A.jsx)(`p`,{style:{...i,fontSize:`0.875rem`,color:`#666`,lineHeight:1.7,fontWeight:300,marginBottom:`1.25rem`,maxWidth:`58ch`},children:n.description}),(0,A.jsx)(`div`,{style:{borderTop:`1px solid rgba(0,0,0,0.05)`},children:n.features.map((e,t)=>(0,A.jsxs)(Bd.div,{initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{delay:t*.07+.1,duration:.4},style:{display:`flex`,alignItems:`flex-start`,gap:`1rem`,padding:`0.9rem 0`,borderBottom:t<n.features.length-1?`1px solid rgba(0,0,0,0.05)`:`none`,...i,fontSize:`0.875rem`,color:`#555`,fontWeight:400,lineHeight:1.55},children:[(0,A.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0,marginTop:`0.18rem`},children:[(0,A.jsx)(`path`,{d:`M9 12l2 2 4-4`,stroke:n.accent,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,A.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`,stroke:n.accent,strokeWidth:`1.5`,opacity:`0.3`})]}),e]},e))})]})},`content`)})]},n.title)})})})]}),(0,A.jsx)(`div`,{className:`fa2-divider`,style:{margin:`clamp(4rem, 8vw, 7rem) 0`}}),(0,A.jsxs)(Bd.div,{id:`partnership`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},style:{marginBottom:`clamp(3rem, 5vw, 5rem)`},children:[(0,A.jsxs)(`h2`,{className:`fa2-hero-title`,style:{fontSize:`clamp(2rem, 4vw, 3.5rem)`,color:`#0a0a0a`,marginBottom:`1rem`},children:[`Collaborating`,` `,(0,A.jsx)(`span`,{className:`fa2-hero-em fa2-shimmer`,children:`Opportunities`})]}),(0,A.jsx)(`p`,{style:{...i,fontSize:`0.875rem`,color:`#888`,fontWeight:300,maxWidth:`50ch`,lineHeight:1.7},children:`Accelerating healthcare innovation through diverse global collaborations.`})]}),(0,A.jsxs)(Bd.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,delay:.1,ease:[.22,1,.36,1]},style:{marginBottom:`clamp(3rem, 5vw, 5rem)`},children:[(0,A.jsx)(`p`,{style:{...i,fontSize:`0.68rem`,letterSpacing:`0.2em`,textTransform:`uppercase`,color:`#bbb`,fontWeight:300,marginBottom:`1.25rem`},children:`Areas of Collaboration`}),(0,A.jsx)(`div`,{className:`fa2-collab-grid`,children:r.map((e,t)=>(0,A.jsxs)(Bd.div,{className:`fa2-collab-card`,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},whileHover:{backgroundColor:`rgba(${e.accentRgb}, 0.03)`},transition:{delay:t*.08,duration:.6,ease:[.22,1,.36,1]},children:[(0,A.jsx)(`div`,{style:{width:28,height:2,background:e.accent,marginBottom:`1.5rem`,borderRadius:1}}),(0,A.jsx)(`h4`,{style:{...i,fontSize:`0.95rem`,fontWeight:500,color:`#0a0a0a`,letterSpacing:`-0.01em`,marginBottom:`0.5rem`,marginTop:0},children:e.title}),(0,A.jsx)(`p`,{style:{...i,fontSize:`0.8rem`,color:`#999`,fontWeight:300,lineHeight:1.6,margin:0},children:e.desc})]},e.title))})]}),(0,A.jsx)(Bd.div,{className:`fa2-cta-block`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},children:(0,A.jsxs)(`div`,{className:`fa2-cta-inner`,children:[(0,A.jsx)(`p`,{style:{...i,fontSize:`0.65rem`,letterSpacing:`0.22em`,textTransform:`uppercase`,color:`rgba(255,255,255,0.28)`,fontWeight:300,marginBottom:`1rem`,marginTop:0},children:`Support Our Mission`}),(0,A.jsxs)(`h3`,{className:`fa2-hero-title`,style:{fontSize:`clamp(1.6rem, 3vw, 2.8rem)`,color:`#fff`,marginBottom:`0.75rem`},children:[`Drive breakthroughs in`,` `,(0,A.jsx)(`span`,{className:`fa2-hero-em`,style:{color:`rgba(255,255,255,0.45)`},children:`precision healthcare`})]}),(0,A.jsxs)(`div`,{className:`fa2-cta-lede`,children:[(0,A.jsx)(`p`,{style:{...i,fontSize:`0.85rem`,color:`rgba(255,255,255,0.38)`,fontWeight:300,lineHeight:1.7,maxWidth:`55ch`,margin:0},children:`As a nonprofit, SHRI-AI relies on strategic partnerships and philanthropic contributions.`}),(0,A.jsxs)(Bd.a,{href:`#contact`,onClick:e=>{e.preventDefault(),dt(`contact`),window.dispatchEvent(new CustomEvent(`open-contact-form`))},className:`fa2-btn-primary`,whileHover:{backgroundColor:`#f0f0f0`,y:-2},whileTap:{scale:.99},transition:{duration:.18},children:[`Become a collaborator`,(0,A.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,children:(0,A.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})})]})]})]})}),(0,A.jsxs)(Bd.div,{className:`fa2-org`,initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!1,amount:.1},transition:{duration:.8,ease:[.22,1,.36,1]},children:[(0,A.jsx)(`figure`,{className:`fa2-org-visual`,children:(0,A.jsx)(`img`,{src:`/indostateshealth.webp`,alt:`The Indo States Health hospital campus`})}),(0,A.jsxs)(`div`,{className:`fa2-org-panel`,children:[(0,A.jsx)(`p`,{className:`fa2-org-eyebrow`,children:`Collaborating Organization`}),(0,A.jsx)(`h4`,{className:`fa2-org-name`,children:`Indo States Health`}),(0,A.jsx)(`p`,{className:`fa2-org-vision`,children:`“Every human being gets state-of-the-art medical treatment regardless of their background.”`}),(0,A.jsx)(`p`,{className:`fa2-org-mission`,children:`Advancing equitable healthcare by making state-of-the-art medical treatment accessible to every individual, regardless of background.`})]})]})]})})]})},ef=[{id:`sena`,initials:`SP`,name:`Sena Palanisami`,role:`Founder & Technology Leader`,bio:`Open-source healthcare technology · Ex-Chairman of OpenEMR`,image:`/Sena-Palanisami.webp`,cardSummary:`Open-source healthcare technology and AI.`,objectPosition:`50% 22%`,accent:`#7B6FCD`,accentSoft:`rgba(123, 111, 205, 0.12)`,summary:`Technology entrepreneur and healthcare technology leader with more than four decades of experience across software, open-source technology, and healthcare IT.`,quote:`Technology should make healthcare more accessible — not more complicated or more expensive.`,sections:[{heading:`Open Source in Healthcare`,paragraphs:[`As former Chairman of OpenEMR, one of the world's leading open-source Electronic Medical Record platforms, Sena helped advance the goal of making healthcare technology more accessible, affordable, and interoperable.`,`That work shaped a conviction that healthcare innovation should not be limited by proprietary technology or geography: open source can put high-quality clinical software in the hands of organisations and communities that would otherwise have no route to it.`]},{heading:`AI for Precision Medicine`,paragraphs:[`Sena now applies the same philosophy through SHRI-AI, developing and supporting open-source AI for cancer detection, precision oncology, genomic medicine, stroke care, and preventive health.`,`SHRI-AI combines AI, medical imaging, genomics, and clinical data to build solutions meant for real deployment in partnership with hospitals, laboratories, researchers, and clinicians.`]},{heading:`Current Focus`,list:[`NGS and liquid biopsy data with AI, for earlier cancer detection, disease monitoring, and personalised treatment strategies`,`Stroke-AI — applying AI to medical imaging for early detection, risk assessment, and clinical decision support`,`Genomic medicine and preventive healthcare`,`Open-source tooling that hospitals and labs can adopt directly`]},{heading:`Vision`,paragraphs:[`His long-term aim is an open healthcare technology ecosystem in which advanced AI and precision medicine reach not only major medical centres, but hospitals, laboratories, and communities in underserved regions.`]},{heading:`Earlier Career & Education`,paragraphs:[`Sena founded the ViSolve US operation in 1998 and became its Chairman and CEO in 2001, growing it into a 50+ member organisation. Before that he spent nearly 20 years at Hewlett-Packard, moving from software engineering into leadership across development, operations, product planning, and business development, and helping establish international software operations in Australia and India.`,`He holds a Master's degree in Mathematics and a Master's degree in Computer Science from the University of Minnesota, Minneapolis.`]}]},{id:`manoj`,initials:`MM`,name:`Manoj Mittal`,role:`Group Vice President, FP&A — Gartner`,bio:`Finance leader specializing in FP&A, M&A, and corporate growth strategy.`,image:`/manoj.webp`,cardSummary:`Group Vice President, FP&A at Gartner.`,objectPosition:`50% 30%`,accent:`#D4891E`,accentSoft:`rgba(212, 137, 30, 0.12)`,summary:`Senior business and technology executive based in Palo Alto, California, with extensive experience in strategy, corporate development, financial planning, executive communication, deal structures, and strategic negotiations.`,sections:[{heading:`Professional Overview`,paragraphs:[`He has held senior leadership positions at Gartner, along with earlier experience at HP and Troba.`]},{heading:`Professional Experience`,paragraphs:[`Manoj has been with Gartner in senior leadership roles for more than two decades:`],list:[`Group Vice President, FP&A — 2017–Present`,`Managing Vice President, Strategy & Corporate Development — 2007–2017`,`Director, Strategy & Corporate Development — 2001–2007`],footer:`His career combines strategic planning, corporate development, financial leadership, and executive-level decision-making.`},{heading:`Education`,list:[`MBA in Finance, General — Harvard Business School`,`MS in Computer Science — University of Wisconsin`,`B.Tech in Mechanical Engineering — Indian Institute of Technology, Delhi`]},{heading:`Core Expertise`,list:[`Strategy`,`Corporate Development`,`Executive-Level Communication`,`Strategic Negotiations`,`Deal Structures`,`Financial Planning & Analysis`]}]},{id:`rajesh`,initials:`RR`,name:`Dr. Rajesh Rangaswamy`,role:`MD, DABR, CAQ(NR), CAST(EVN)`,bio:`MD, DABR, CAQ(NR), CAST(EVN)`,image:`/Rajesh-Rangaswamy.webp`,cardSummary:`Founder of Indostates Health · Neuroradiology.`,objectPosition:`50% 20%`,accent:`#3A82C4`,accentSoft:`rgba(58, 130, 196, 0.12)`,tag:`Founder of Indostates Health`,summary:`Clinical expertise spans NeuroIntervention, Neuroradiology, and Vascular & Interventional Radiology, with extensive experience across clinical practice, academic medicine, teaching, and specialized interventional care.`,sections:[{heading:`Medical Education & Training`,list:[`Medical School: Coimbatore Medical College, Tamil Nadu, India`,`Internship: Coimbatore Medical College Hospital, Tamil Nadu, India`,`Residency: Gujarat Cancer & Research Institute, B.J. Medical College, India`,`Fellowship in Neuroradiology: Rush University Medical Center, Chicago, USA`,`Fellowship in Vascular & Interventional Radiology — Body and Neuro-Intervention: University of Florida & Shands, Jacksonville, USA`]},{heading:`Academic & Clinical Appointments`,list:[`Director, Neuro-Interventional Service — Renown Regional Medical Center`,`Associate Clinical Professor — University of Nevada School of Medicine, Reno`,`Adjunct Assistant Professor — Texas A&M University, Texas`,`Assistant Professor of Radiology — Texas A&M University, 2008–2010`,`Clinical Assistant Professor of Radiology — University of Florida, Jacksonville, 2005–2008`]},{heading:`Honors & Recognition`,list:[`Outstanding Teacher, 2008–2009 — Department of Radiology, Scott & White Clinic, Texas A&M University, Temple, Texas`,`Teacher of the Year, 2007–2008 — Department of Radiology, University of Florida & Shands, Jacksonville`]},{heading:`Board Certifications & Professional Memberships`,list:[`Gujarat University — Radiology`,`American Board of Radiology — Diagnostic Radiology`,`American Board of Radiology — Certificate of Added Qualification in Neuroradiology`,`American Board of Vascular Medicine — Endovascular Diplomat`,`Society of Neuro-Interventional Surgery — Senior Member`,`American Society of Neuroradiology — Senior Member`,`American Medical Association`]}]},{id:`balasubramaniam`,initials:`BA`,name:`Dr. Balasubramaniam A V`,role:`MBBS, MD (PGI, Chandigarh), DNB, FRCR (UK)`,bio:`MBBS, MD (PGI, Chandigarh), DNB, FRCR (UK)`,image:`/Balasubramaniam-AV.webp`,cardSummary:`Diagnostic Radiology and stroke imaging AI.`,objectPosition:`44% 6%`,accent:`#2aaa72`,accentSoft:`rgba(42, 170, 114, 0.12)`,summary:`Diagnostic Radiologist with more than 15 years of experience interpreting a broad range of medical imaging subspecialities, and a strong interest in integrating AI and machine learning into diagnostic radiology.`,sections:[{heading:`Clinical Focus`,paragraphs:[`Dr. Balasubramaniam applies clinical and imaging expertise to support the development, validation, and refinement of AI-driven solutions for medical imaging.`,`His work includes stroke imaging protocols and imaging-based decision support, contributing to the assessment of findings relevant to acute ischemic stroke, intracranial hemorrhage, large-vessel occlusion, and treatment planning — with a particular interest in optimising imaging workflows for timely diagnosis in emergency neurological care.`]},{heading:`Artificial Intelligence Projects`,paragraphs:[`More than five years of experience across AI projects, collaborating with AI researchers, data scientists, software engineers, and healthcare technology teams to provide clinical and radiological expertise in the development, evaluation, and clinical application of AI-driven medical imaging solutions.`],list:[`Defining clinically relevant use cases`,`Reviewing imaging datasets, and supporting annotation and validation`,`Evaluating algorithm performance`,`Providing expert feedback to improve the clinical relevance and usability of AI products`]},{heading:`Medical Education & Training`,list:[`MBBS — Madras Medical College, Chennai`,`MD — PGIMER, Chandigarh`,`DNB — PGIMER, Chandigarh`,`FRCR — Royal College of Radiologists, UK`]},{heading:`Professional Experience`,list:[`Senior Resident — PGIMER, Chandigarh`,`Consultant Radiologist — Anderson Diagnostics and Labs, Chennai`,`Consultant Radiologist — Avitis Superspeciality Hospital, Palakkad, Kerala`,`Senior Consultant Radiologist — Gleneagles Hospital (Fortis Network), Chennai`]},{heading:`Professional Memberships`,list:[`Indian Medical Association`,`Indian Radiological and Imaging Association`,`Radiological Society of North America`,`Indian Academy of Cardiac Imaging`]}]},{id:`muruganand`,initials:`SM`,name:`Dr. S. K. Muruganand`,role:`MBBS, DMRD`,bio:`MBBS, DMRD`,image:`/SK-Muruganand.webp`,objectPosition:`50% 15%`,accent:`#1F8A8A`,accentSoft:`rgba(31, 138, 138, 0.12)`,tag:`Founder of The Scan Point`,cardSummary:`Founder of The Scan Point · Diagnostic Radiology.`,summary:`Diagnostic radiologist with three decades in radiology, and founder of The Scan Point, a diagnostic imaging centre offering X-ray, ultrasound, and CT services. His career spans academic radiology as faculty and independent practice building and running a full-service imaging centre.`,sections:[{heading:`Medical Education & Training`,paragraphs:[`Dr. Muruganand completed his MBBS (Bachelor of Medicine, Bachelor of Surgery) before going on to specialise in diagnostic imaging with a DMRD (Diploma in Medical Radio-Diagnosis).`],list:[`MBBS — PSG Medical College`,`DMRD — JJM Medical College, Davangere, Karnataka`]},{heading:`Professional Experience`,paragraphs:[`Dr. Muruganand began his career in academic radiology, working as an Assistant Professor at SRMC, Chennai, from 1996 to 1998.`,`In 1998, he moved from academic practice to independent practice, founding his own diagnostic imaging centre, The Scan Point — a step that shifted his focus from teaching radiology to building and running a diagnostic imaging service of his own.`]},{heading:`The Scan Point — Diagnostic Imaging Centre`,paragraphs:[`The Scan Point provides diagnostic imaging services built around X-ray, ultrasound, and CT technology.`,`Together, this equipment allows the centre to offer radiography, ultrasonography, and cross-sectional CT imaging under one roof, supporting a broad range of everyday diagnostic imaging needs.`],list:[`500mA X-ray unit`,`Three ultrasound machines`,`Multi-slice CT scanner`]}]},{id:`gowrishankar`,initials:`GP`,name:`Dr. Gowrishankar Palaniswamy`,role:`Internal Medicine Resident — MUSC Health`,bio:`Physician-researcher advancing AI-driven oncology diagnostics and equitable cancer care.`,image:`/Gowrishankar-Palaniswamy.webp`,objectPosition:`50% 15%`,accent:`#c0392b`,accentSoft:`rgba(192, 57, 43, 0.12)`,cardSummary:`Oncology AI Research & Healthcare Equity.`,summary:`Internal Medicine resident at MUSC Health Lancaster Medical Center and an emerging physician-researcher at the intersection of oncology, artificial intelligence, and healthcare equity. His research spans AI-assisted cancer detection, leukemia imaging, circulating tumour DNA (ctDNA) and minimal residual disease, and emerging cancer therapies, with presentations at ASH, SOHO, Rice University, and other major scientific forums, and multiple peer-reviewed publications. He also has direct experience providing healthcare to underserved rural communities in India. At SHRI-AI, he contributes clinical and research expertise to our precision oncology and equitable healthcare initiatives.`,sections:[{heading:`Medical Education & Training`,list:[`MBBS — Saveetha Medical College and Hospital, India`,`Internal Medicine Residency (PGY-2) — Medical University of South Carolina, MUSC Health Lancaster Medical Center`]},{heading:`Oncology & AI Research`,paragraphs:[`Dr. Palaniswamy's research applies artificial intelligence to some of oncology's hardest diagnostic problems — leukemia imaging, ctDNA for minimal residual disease, and emerging cancer therapies including CAR-T cell therapy.`],list:[`LIVE — an AI-powered virtual examiner for rapid, accurate diagnosis of acute lymphoblastic leukemia`,`RADIANT — a residual-network-assisted diagnostic and analytic tool for acute lymphoblastic leukemia`,`Deep learning models (EfficientNetB1, ResNet18) for leukemia diagnosis and prognosis through computer vision`,`ctDNA as a biomarker for minimal residual disease and relapse detection in diffuse large B-cell lymphoma`]},{heading:`Presentations & Publications`,paragraphs:[`He has presented at the American Society of Hematology (ASH), the Society of Hematology and Oncology (SOHO), the Ken Kennedy Institute at Rice University, and the Endocrine Society's Annual Meeting, with an Oral Podium & Achievement Award at ASH and multiple peer-reviewed publications, including in Blood Journal.`]},{heading:`Community & Global Health`,paragraphs:[`Alongside his research, Dr. Palaniswamy has provided direct medical care to underserved rural communities in India — delivering free consultations and vaccination drives as a Voluntary Duty Medical Officer, and supporting COVID-19 relief efforts as a medical student intern.`]},{heading:`Honors & Recognition`,list:[`Resident of the Quarter — MUSC Health network`,`Excellence in Research Award — MUSC Health Lancaster Medical Center`,`Top 20 Best Outgoing Medical Student — Saveetha Medical College`]}]}],tf=({member:e,onClose:t})=>{let n=(0,T.useRef)(null),r=(0,T.useRef)(null);return(0,T.useEffect)(()=>{let e=document.activeElement;n.current?.focus(),document.body.style.overflow=`hidden`;let r=e=>{if(e.key===`Escape`){t();return}if(e.key===`Tab`&&n.current){let t=n.current.querySelectorAll(`a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])`);if(!t.length)return;let r=t[0],i=t[t.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())}};return document.addEventListener(`keydown`,r),()=>{document.removeEventListener(`keydown`,r),document.body.style.overflow=``,e instanceof HTMLElement&&e.focus()}},[t]),(0,A.jsx)(Bd.div,{className:`team-modal-overlay`,onClick:e=>{e.target===e.currentTarget&&t()},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:(0,A.jsxs)(Bd.div,{ref:n,className:`team-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`modal-title-${e.id}`,tabIndex:-1,initial:{opacity:0,y:24,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:16,scale:.98},transition:{duration:.3,ease:[.4,0,.2,1]},children:[(0,A.jsx)(`button`,{ref:r,className:`team-modal-close`,onClick:t,"aria-label":`Close profile`,children:(0,A.jsx)(it,{size:20,strokeWidth:1.8})}),(0,A.jsx)(`figure`,{className:`team-modal-figure`,children:(0,A.jsx)(`img`,{src:e.image,alt:`Portrait of ${e.name}`,className:`team-modal-photo`,style:{objectPosition:e.objectPosition}})}),(0,A.jsxs)(`div`,{className:`team-modal-scroll`,children:[(0,A.jsxs)(`div`,{className:`team-modal-identity`,children:[(0,A.jsx)(`h3`,{id:`modal-title-${e.id}`,className:`team-modal-name`,children:e.name}),(0,A.jsx)(`span`,{className:`team-role team-modal-role`,style:{color:e.accent,background:e.accentSoft},children:e.role}),e.tag&&(0,A.jsx)(`p`,{className:`team-modal-tag`,style:{color:e.accent},children:e.tag})]}),(0,A.jsx)(`p`,{className:`team-modal-summary`,children:e.summary}),e.quote&&(0,A.jsx)(`blockquote`,{className:`team-modal-quote`,style:{borderColor:e.accent},children:e.quote}),(0,A.jsx)(`div`,{className:`team-modal-body`,children:e.sections.map(t=>(0,A.jsxs)(`div`,{className:`team-modal-section`,children:[(0,A.jsx)(`h4`,{className:`team-modal-heading`,style:{color:e.accent},children:t.heading}),t.paragraphs?.map((e,t)=>(0,A.jsx)(`p`,{className:`team-modal-paragraph`,children:e},t)),t.list&&(0,A.jsx)(`ul`,{className:`team-modal-list`,children:t.list.map((e,t)=>(0,A.jsx)(`li`,{children:e},t))}),t.footer&&(0,A.jsx)(`p`,{className:`team-modal-paragraph`,children:t.footer})]},t.heading))})]})]})})},nf=()=>{let[e,t]=(0,T.useState)(null),n=(0,T.useCallback)(e=>t(e),[]),r=(0,T.useCallback)(()=>t(null),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`

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
      `}),(0,A.jsx)(`section`,{className:`team-section`,id:`team`,children:(0,A.jsxs)(`div`,{className:`team-inner`,children:[(0,A.jsxs)(`div`,{className:`team-header`,children:[(0,A.jsx)(`p`,{className:`team-label`,children:`Our Team`}),(0,A.jsx)(`h2`,{className:`team-heading`,children:`Leadership`}),(0,A.jsx)(`p`,{className:`team-subtext`,children:`Guided by experienced leaders in medicine, radiology, technology, and finance, committed to advancing equitable precision healthcare worldwide.`})]}),(0,A.jsx)(`div`,{className:`team-grid`,children:ef.map(e=>(0,A.jsx)(`button`,{type:`button`,className:`team-card`,onClick:()=>n(e),"aria-haspopup":`dialog`,"aria-label":`View full profile of ${e.name}`,children:(0,A.jsxs)(`div`,{className:`team-card-media`,children:[(0,A.jsx)(`img`,{src:e.image,alt:`Portrait of ${e.name}`,className:`team-card-photo`,style:{objectPosition:e.objectPosition},loading:`lazy`}),(0,A.jsxs)(`div`,{className:`team-card-overlay`,"aria-hidden":`true`,children:[(0,A.jsxs)(`h3`,{className:`team-name`,children:[(0,A.jsx)(`span`,{children:e.name}),(0,A.jsxs)(`svg`,{className:`team-badge`,viewBox:`0 0 24 24`,"aria-hidden":`true`,focusable:`false`,children:[(0,A.jsx)(`path`,{transform:`translate(0.5, -0.5)`,fill:`#3A82C4`,d:`M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.494 0-.964.084-1.4.238C14.545 2.472 13.17 1.5 11.5 1.5s-3.045.972-3.69 2.238C7.374 3.584 6.904 3.5 6.41 3.5c-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.375 9.55.5 10.92.5 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .494 0 .964-.084 1.4-.238.645 1.266 2.02 2.238 3.69 2.238s3.045-.972 3.69-2.238c.436.154.906.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6z`}),(0,A.jsx)(`path`,{d:`M8.3 12.3l2.6 2.6 4.9-5.1`,fill:`none`,stroke:`#ffffff`,strokeWidth:`2.1`,strokeLinecap:`round`,strokeLinejoin:`round`})]})]}),(0,A.jsx)(`p`,{className:`team-card-summary`,children:e.cardSummary})]})]})},e.id))})]})}),(0,A.jsx)(Yl,{children:e&&(0,A.jsx)(tf,{member:e,onClose:r})})]})},rf=`role`,af=`/`,of={"/careers":`careers`,"/team":`team`},sf={"/dev":`shri-health`};function cf(){try{let e=window.location.pathname.replace(/\/+$/,``);return sf[e.slice(e.lastIndexOf(`/`))||`/`]||null}catch{return null}}var lf=`shri:route`,uf=null;function df(){try{return new URLSearchParams(window.location.search).get(rf)||null}catch{return null}}function ff(e){return`/?role=`+encodeURIComponent(e)}function pf(){try{let e=window.location.pathname.replace(/\/+$/,``),t=e.slice(e.lastIndexOf(`/`))||`/`;if(of[t])return of[t];let n=window.location.hash.replace(`#`,``);return n&&document.getElementById(n)?n:null}catch{return null}}function Z(e){let t=document.documentElement,n=t.style.scrollBehavior;t.style.scrollBehavior=`auto`,getComputedStyle(t).scrollBehavior,window.scrollTo(0,e),t.style.scrollBehavior=n}function mf(e){uf=window.scrollY,Z(0),window.history.pushState({role:e},``,ff(e)),window.dispatchEvent(new CustomEvent(lf))}function hf(){window.history.pushState({role:null},``,af),window.dispatchEvent(new CustomEvent(lf))}function gf(){return uf}var _f=[`SHRI-AI is developing an AI-powered healthcare platform designed to support stroke-care workflows through medical imaging analysis, clinical decision support, and rapid identification and prioritisation of potentially critical cases.`,`SHRI-AI is a California-based 501(c)(3) nonprofit. Alongside the stroke platform, we build and fund open-source work in precision oncology — genomics, liquid biopsy and ctDNA — so that earlier detection and precision care reach hospitals, laboratories and communities everywhere, not only the largest medical centres.`],vf={project:`SHRI-AI`,location:`Coimbatore, Tamil Nadu, India`,market:`India & USA`,compensation:`As per industry standard`},yf=[{slug:`mba-healthcare-partnerships-ai-business-development`,discipline:`Business & Strategy`,title:`MBA — Healthcare Partnerships & AI Business Development`,focus:`Intern to full-time · India & USA`,accent:`#7B6FCD`,summary:`Build hospital, laboratory and technology partnerships across India and the United States, and bridge clinical and AI teams.`,position:{...vf,title:`MBA — Healthcare Partnerships & AI Business Development (Intern)`,employment:`Full-time / Internship-to-full-time`},pipeline:`Build healthcare partnerships → Identify AI opportunities → Coordinate technical solutions → Deploy pilots → Develop long-term business`,intro:[`We are looking for an MBA candidate with strong AI and technology knowledge and excellent business-development skills, to help build partnerships with hospitals, diagnostic laboratories, healthcare organisations and technology partners in India and the United States.`,`This person will serve as a bridge between healthcare professionals, business partners and our AI and technical team. The position combines healthcare business development, AI product development, partnership management and project coordination.`,`This is not a traditional sales position. We are looking for someone who understands both AI and the healthcare business, and who can communicate effectively with doctors, hospital administrators, laboratory professionals, customers and AI engineers.`],responsibilities:[{title:`Hospital & laboratory partnerships — India`,items:[`Identify and develop relationships with hospitals, diagnostic laboratories, imaging centres, neurologists, radiologists and healthcare organisations.`,`Present the SHRI-AI platform to potential partners.`,`Identify hospitals suitable for pilot deployments.`,`Understand existing stroke-care and radiology workflows.`,`Coordinate hospital onboarding and pilot implementation.`,`Gather feedback from clinicians and hospital administrators.`,`Help establish partnerships for appropriate clinical and imaging data for research and AI development.`,`Develop long-term relationships with healthcare institutions.`]},{title:`U.S. healthcare & AI partnerships`,items:[`Identify potential hospitals, imaging centres, radiology groups, healthcare organisations, laboratories and technology companies in the United States.`,`Identify organisations interested in healthcare AI and AI-as-a-service.`,`Understand their business, clinical and technology requirements.`,`Identify opportunities where SHRI-AI or our AI capabilities can provide value.`,`Coordinate discussions between U.S. partners and our technical team.`,`Assist in developing proposals, pilot programmes, pricing models and partnership structures.`,`Develop a pipeline of potential U.S. customers and strategic partners.`]},{title:`AI services & business development`,lead:`You will help identify opportunities for providing AI services to healthcare organisations, including:`,items:[`Medical imaging AI.`,`AI model development and AI model validation.`,`Healthcare data analysis.`,`AI workflow automation.`,`Custom healthcare AI solutions.`,`AI integration with existing healthcare systems.`,`Research and development projects.`],note:`You will work closely with the technical team to determine what can be built, how it can be deployed, and what business value it can deliver.`},{title:`AI & technology knowledge`,lead:`Strong working knowledge of AI is an important requirement for this position. You should understand, at a practical level:`,items:[`Artificial intelligence and machine-learning fundamentals.`,`Deep learning and neural networks.`,`Computer vision and medical imaging AI.`,`Generative AI and large language models.`,`AI model training and validation.`,`Accuracy, sensitivity, specificity, precision, recall and ROC/AUC.`,`AI datasets and data quality.`,`Model performance and clinical validation.`,`AI deployment and monitoring.`,`APIs and healthcare software integration.`,`Basic concepts of CT, MRI, DICOM and medical imaging workflows.`],note:`You do not need to be an AI programmer or data scientist. You should be able to follow technical discussions, ask intelligent questions, communicate requirements to engineers, and explain AI capabilities to healthcare and business stakeholders.`},{title:`Bridge between clinical & technical teams`,items:[`Understand requirements from doctors, hospitals, laboratories and customers.`,`Convert clinical and business requirements into clear product requirements.`,`Work closely with AI engineers, software developers and data scientists.`,`Coordinate product demonstrations and technical discussions.`,`Communicate technical limitations and capabilities to business partners.`,`Collect structured feedback from users and translate it into actionable requirements.`,`Help prioritise product improvements based on clinical and commercial needs.`]},{title:`AI product & market development`,items:[`Research the global healthcare-AI market.`,`Study competing stroke-AI and medical-imaging AI products.`,`Identify emerging AI technologies and potential applications.`,`Identify new healthcare-AI opportunities.`,`Evaluate potential partnerships and commercial opportunities.`,`Assist in developing pricing and AI-as-a-service models.`,`Help develop business cases and ROI presentations for hospitals and healthcare organisations.`]},{title:`Pilot programme & project management`,items:[`Coordinate SHRI-AI pilot projects.`,`Manage communication between hospitals and the technical team.`,`Track requirements, milestones, deliverables and partner feedback.`,`Coordinate demonstrations and testing.`,`Help identify implementation problems and coordinate solutions.`,`Prepare pilot reports and presentations.`,`Help develop a repeatable deployment model for additional hospitals and healthcare organisations.`]},{title:`Business development & relationship management`,items:[`Build and maintain a pipeline of potential partners and customers.`,`Conduct business-development meetings.`,`Prepare presentations, proposals and partnership documents.`,`Assist with MoUs, pilot agreements and commercial proposals.`,`Represent SHRI-AI at healthcare, AI and technology conferences.`,`Develop relationships with healthcare executives, clinicians, technology companies and potential strategic partners.`]}],education:[`MBA in healthcare management, hospital administration, business development, marketing, technology management or a related field.`,`MBA candidates with a strong technology or AI background are encouraged to apply.`],requiredSkills:[`Strong understanding of AI/ML and emerging AI technologies.`,`Excellent communication and presentation skills.`,`Strong business-development and relationship-building skills.`,`Ability to communicate with doctors and hospital executives.`,`Ability to communicate effectively with AI engineers and technical teams.`,`Strong analytical and problem-solving abilities.`,`Understanding of healthcare technology and digital health.`,`Ability to learn complex technical concepts quickly.`,`Entrepreneurial and self-driven mindset.`,`Excellent presentation, spreadsheet and documentation skills.`],preferredExp:[`Healthcare AI.`,`Medical imaging.`,`Healthcare IT.`,`Hospital business development.`,`Diagnostic laboratories.`,`Medical devices.`,`AI or technology startups.`,`Healthcare consulting.`,`Clinical research.`,`The U.S. healthcare market, or international business development.`],lookingFor:[{title:`Healthcare`,text:`Understand doctors, hospitals, laboratories, clinical workflows and healthcare needs.`},{title:`AI & technology`,text:`Understand AI/ML, medical imaging, data, model validation and technology deployment.`},{title:`Business`,text:`Identify opportunities, develop partnerships, create business models, and convert pilots into sustainable relationships.`}],lookingForNote:`The ideal candidate should be able to sit in a meeting with a neurologist in the morning, an AI engineer in the afternoon and a U.S. healthcare executive in the evening — and communicate effectively with all three.`,success:[`Establish strong hospital and laboratory partnerships in India.`,`Identify and develop healthcare-AI opportunities in the USA.`,`Bring qualified AI-service opportunities to the technical team.`,`Help convert hospital pilots into long-term partnerships.`,`Build a strong business-development pipeline.`,`Help translate real-world healthcare needs into AI products.`,`Contribute to the expansion of SHRI-AI into an international healthcare-AI platform.`],opportunity:[`This is an opportunity for an MBA candidate who wants to build a career at the intersection of healthcare, artificial intelligence, business development and international technology.`,`You will work directly with clinicians, hospitals, laboratories, AI engineers, data scientists, healthcare organisations and technology partners, while helping build SHRI-AI from its pilot stage towards an international platform.`]},{slug:`stroke-neurologist-clinical-lead`,discipline:`Clinical · Stroke`,title:`Stroke Neurologist — Clinical Lead, Stroke AI`,focus:`Clinical direction for the stroke platform`,accent:`#2a6db5`,summary:`Set the clinical direction of the stroke platform, from triage definitions through validation with partner hospitals.`,position:{...vf,title:`Stroke Neurologist — Clinical Lead, Stroke AI`,employment:`Full-time / consulting`},pipeline:`Define clinical need → Specify the decision → Validate the model → Fit the hospital workflow → Monitor real-world performance`,intro:[`We are looking for a stroke neurologist to own the clinical direction of the SHRI-AI stroke platform: what the system should detect, how confident it must be before it says anything, and where in the stroke pathway its output belongs.`,`You will work alongside AI engineers, neuroradiologists and data scientists, translating acute stroke care into requirements an engineering team can build against — and then holding the result to a clinical standard rather than a benchmark score.`,`This is a clinical leadership position rather than a purely advisory one. We are looking for someone who wants to shape how AI enters the stroke pathway, and who is comfortable saying that a model is not yet good enough to be in front of a clinician.`],responsibilities:[{title:`Clinical direction & use-case definition`,items:[`Define the clinical problems the platform should address across the acute stroke pathway.`,`Specify what the system must detect, prioritise or flag, and what it must deliberately not claim.`,`Set the clinical acceptance criteria a model must meet before it reaches a clinician.`,`Define how uncertain or low-confidence outputs should be presented.`,`Prioritise the clinical roadmap alongside the technical and product teams.`,`Review each release for clinical safety before deployment.`]},{title:`Imaging & triage requirements`,items:[`Specify the imaging inputs the platform should support across CT, CT angiography, CT perfusion and MRI.`,`Define triage and prioritisation logic in terms clinicians recognise.`,`Advise on ASPECTS, core and penumbra assessment, and large-vessel-occlusion identification.`,`Define how findings should be summarised for a treating team under time pressure.`,`Advise on the handling of artefact, poor-quality studies and incidental findings.`]},{title:`Model validation & clinical evidence`,items:[`Design the clinical validation strategy: reference standard, cohort definition and endpoints.`,`Adjudicate ground truth and resolve disagreements between readers.`,`Interpret sensitivity, specificity, predictive values and ROC/AUC in clinical rather than statistical terms.`,`Identify failure modes and the patient groups in which the model underperforms.`,`Contribute to publications, abstracts and conference presentations.`,`Help prepare the clinical evidence needed for regulatory and institutional review.`]},{title:`Hospital workflow integration`,items:[`Map existing stroke-care and radiology workflows at partner hospitals.`,`Define where platform output belongs in the pathway, and who acts on it.`,`Advise on alerting and escalation so the system helps rather than adds noise.`,`Support clinical onboarding and training at pilot sites.`,`Collect and structure clinician feedback after deployment.`]},{title:`Clinical & scientific knowledge`,lead:`You will bring practical command of:`,items:[`Acute ischaemic and haemorrhagic stroke management.`,`Thrombolysis and mechanical thrombectomy selection criteria.`,`Neuroimaging interpretation across CT, CTA, CT perfusion and MRI.`,`NIHSS, mRS and the outcome measures used in stroke research.`,`Stroke pathway design, door-to-needle and door-to-groin metrics.`,`Clinical research methodology and evidence appraisal.`,`A working understanding of how imaging AI models are trained and validated.`],note:`You do not need to write code. You do need to be able to challenge a model result, ask what the training population was, and explain to an engineer why a metric that looks good is clinically unsafe.`},{title:`Bridge between clinical & technical teams`,items:[`Convert clinical requirements into clear, testable product requirements.`,`Review annotation protocols and adjudicate difficult cases.`,`Explain clinical constraints and limitations to engineers and data scientists.`,`Explain model behaviour and its limits to clinicians and hospital leadership.`,`Help prioritise improvements based on clinical impact rather than metric gain.`]},{title:`Partnerships & representation`,items:[`Support conversations with neurologists, radiologists and hospital leadership at prospective sites.`,`Represent SHRI-AI in clinical and academic settings.`,`Contribute to research collaborations with hospitals and academic centres.`,`Advise on ethics-committee and institutional-review submissions.`]}],education:[`MD or DM/DNB in neurology, with training or substantial clinical experience in stroke medicine.`,`Fellowship in vascular neurology, stroke or neurocritical care is an advantage.`,`Current or recent clinical practice in an acute stroke service.`],requiredSkills:[`Deep expertise in acute stroke diagnosis and management.`,`Confident interpretation of stroke neuroimaging.`,`Ability to define clinical requirements precisely and in writing.`,`Strong grasp of diagnostic-accuracy concepts and study design.`,`Ability to communicate effectively with AI engineers and data scientists.`,`Sound judgement about clinical safety and appropriate use of automated output.`,`Excellent written and verbal communication.`,`Collaborative approach in a small, fast-moving team.`,`Willingness to learn how the models are built and evaluated.`],preferredExp:[`Stroke AI or medical imaging AI.`,`Clinical validation of diagnostic software.`,`Imaging-based clinical research.`,`Stroke registries or quality-improvement programmes.`,`Clinical trials in acute stroke.`,`Teaching or training clinical teams.`,`Regulatory or ethics-committee submissions.`,`Working with hospital IT, PACS or radiology informatics.`,`Publication record in stroke or neuroimaging.`],lookingFor:[{title:`Clinical`,text:`Real command of the acute stroke pathway, and of what a treating team actually needs at the moment of decision.`},{title:`Scientific`,text:`Rigour about evidence: reference standards, cohorts, endpoints, and the difference between a good metric and a safe system.`},{title:`Collaborative`,text:`Comfort working with engineers, translating clinical reality into requirements, and explaining model limits to clinicians.`}],lookingForNote:`The ideal candidate can review a difficult CT with a radiologist in the morning, redefine an acceptance threshold with an engineer in the afternoon, and explain the platform to a hospital director in the evening.`,success:[`Clinical acceptance criteria are defined, documented and applied to every release.`,`The validation strategy produces evidence clinicians and reviewers accept.`,`Platform output fits the stroke pathway at pilot sites without adding noise.`,`Failure modes are identified and understood rather than discovered in production.`,`Clinicians at partner hospitals trust the system enough to use it, and know when not to.`,`SHRI-AI has a defensible clinical evidence base for its stroke work.`],opportunity:[`This is an opportunity to define how AI enters stroke care rather than to inherit someone else’s definition — at the stage where the clinical questions are still open.`,`You will work directly with AI engineers, neuroradiologists, data scientists and partner hospitals across India and the United States, and your clinical judgement will set the standard the platform is held to.`]},{slug:`neuroradiologist-stroke-neurovascular-imaging`,discipline:`Clinical Imaging`,title:`Neuroradiologist — Stroke & Neurovascular Imaging`,focus:`Reference-standard reading and imaging validation`,accent:`#3A82C4`,summary:`Establish the imaging reference standard for stroke models, and validate what they see against expert reading.`,position:{...vf,title:`Neuroradiologist — Stroke & Neurovascular Imaging`,employment:`Full-time / consulting`},pipeline:`Define the read → Establish ground truth → Measure reader agreement → Validate the model → Report the finding usefully`,intro:[`We are looking for a neuroradiologist to establish and defend the imaging reference standard behind the SHRI-AI stroke platform. Every claim the platform makes rests on how carefully its ground truth was read.`,`You will define reading protocols across CT, CT angiography, CT perfusion and MRI, adjudicate difficult studies, quantify reader agreement, and assess model output against expert interpretation rather than against a benchmark.`,`This is a position for a radiologist who is interested in how imaging AI is evaluated, and who wants the evaluation done properly — including being the person who says a dataset is not clean enough to train on.`],responsibilities:[{title:`Reading protocols & reference standard`,items:[`Define the reading protocol for each imaging task the platform supports.`,`Specify the reference standard, including which modality and timepoint settles a case.`,`Adjudicate disagreements between readers and document the reasoning.`,`Define inclusion and exclusion criteria for training and validation cohorts.`,`Set explicit rules for artefact, motion and technically inadequate studies.`,`Review annotation guidelines before any large labelling effort begins.`]},{title:`Expert reading & adjudication`,items:[`Read stroke and neurovascular studies to reference-standard quality.`,`Provide structured labels, segmentations or scores as each task requires.`,`Assess ASPECTS, infarct core, penumbra and vessel occlusion consistently.`,`Identify incidental and confounding findings that affect interpretation.`,`Maintain reading consistency over time and across readers.`]},{title:`Model validation & reader studies`,items:[`Design and run reader studies comparing model output with expert interpretation.`,`Quantify inter-reader and intra-reader agreement, and report it honestly.`,`Review false positives and false negatives case by case.`,`Characterise performance across scanners, protocols, sites and patient groups.`,`Identify systematic bias introduced by acquisition or reconstruction.`,`Contribute imaging methodology to publications and regulatory documentation.`]},{title:`Imaging data quality & curation`,items:[`Review incoming imaging data for completeness, quality and protocol consistency.`,`Advise on DICOM handling, series selection and de-identification requirements.`,`Flag data that should not be used, and explain why.`,`Define the metadata that must accompany every study.`,`Work with the data team on curation, versioning and traceability of cohorts.`]},{title:`Imaging & technical knowledge`,lead:`You will bring practical command of:`,items:[`Non-contrast CT, CT angiography and CT perfusion in acute stroke.`,`MRI including DWI, ADC, FLAIR, SWI and MR angiography.`,`ASPECTS, core/penumbra quantification and collateral assessment.`,`Haemorrhage classification and stroke mimics.`,`DICOM, PACS and radiology reporting workflows.`,`Diagnostic-accuracy statistics and agreement measures such as kappa and Dice.`,`A working understanding of how segmentation and classification models are trained.`],note:`You do not need to write code. You do need to be able to look at a model output and say precisely why it is wrong, in terms an engineer can act on.`},{title:`Bridge between clinical & technical teams`,items:[`Translate imaging requirements into specifications the engineering team can build to.`,`Review model output routinely and give structured, reproducible feedback.`,`Explain imaging constraints, variability and limits to engineers.`,`Explain model behaviour to radiologists and referring clinicians.`,`Advise on how findings should be displayed alongside the images.`]},{title:`Collaboration & representation`,items:[`Support imaging-data partnerships with hospitals and imaging centres.`,`Represent SHRI-AI in radiology and imaging-AI settings.`,`Contribute to research collaborations and multi-centre studies.`,`Help train partner-site readers on the agreed protocols.`]}],education:[`MD/DNB in radiology, with fellowship training or substantial subspecialty experience in neuroradiology.`,`Experience reading acute stroke imaging in a working service.`,`Interest or prior involvement in imaging research is an advantage.`],requiredSkills:[`Expert interpretation of stroke and neurovascular imaging.`,`Rigour and consistency in structured reading and annotation.`,`Strong grasp of diagnostic-accuracy and agreement statistics.`,`Ability to specify reading protocols clearly in writing.`,`Ability to work closely with engineers and data scientists.`,`Sound judgement on imaging data quality and its limits.`,`Attention to detail sustained across large case volumes.`,`Clear written and verbal communication.`,`Willingness to learn how imaging models are built and evaluated.`],preferredExp:[`Imaging AI development or validation.`,`Reader studies or multi-centre imaging trials.`,`Image annotation or segmentation at scale.`,`Stroke imaging research.`,`PACS, DICOM or radiology informatics.`,`Quantitative imaging and perfusion post-processing.`,`Regulatory submissions for imaging software.`,`Teaching radiology trainees.`,`Publication record in neuroradiology or imaging AI.`],lookingFor:[{title:`Imaging`,text:`Expert, consistent reading of acute stroke studies across CT and MRI, including the difficult and the technically imperfect.`},{title:`Methodological`,text:`Care about reference standards, agreement and bias — the parts of imaging AI that decide whether a result means anything.`},{title:`Collaborative`,text:`Willingness to sit with engineers over failure cases and turn radiological judgement into specifications.`}],lookingForNote:`The ideal candidate can adjudicate a contested study in the morning, quantify reader agreement in the afternoon, and explain to an engineer in the evening why the model is right for the wrong reason.`,success:[`Reading protocols and the reference standard are documented and followed.`,`Reader agreement is measured, reported and defensible.`,`Model performance is characterised across scanners, sites and patient groups.`,`Poor-quality data is caught before it reaches training rather than after.`,`Findings are displayed in a form radiologists find usable.`,`The imaging evidence behind the platform withstands external review.`],opportunity:[`This is an opportunity to build the imaging evidence base for a stroke platform from the beginning, and to set the standard by which its claims are judged.`,`You will work directly with stroke neurologists, AI engineers and data scientists, and with imaging partners across India and the United States, on work that is published and externally reviewed rather than kept internal.`]},{slug:`clinical-imaging-data-specialist-stroke`,discipline:`Clinical Data`,title:`Clinical Imaging Data Specialist — Stroke Annotation & Curation`,focus:`Datasets, annotation and traceability`,accent:`#2aaa72`,summary:`Build and maintain the annotated stroke imaging datasets every model is trained and validated on.`,position:{...vf,title:`Clinical Imaging Data Specialist — Stroke Annotation & Curation`,employment:`Full-time`},pipeline:`Ingest studies → De-identify → Curate and annotate → Adjudicate and QC → Release a versioned, traceable dataset`,intro:[`We are looking for a clinical imaging data specialist to own the datasets behind the SHRI-AI stroke platform: how studies arrive, how they are de-identified, how they are annotated, and how a released cohort can be traced back to the cases it came from.`,`You will run annotation projects with clinical readers, keep quality measurable, and make sure every dataset used for training or validation is reproducible months later.`,`This is the least visible and most load-bearing role on the platform. If the datasets are wrong, everything built on them is wrong — and no amount of modelling recovers it.`],responsibilities:[{title:`Imaging data ingestion & de-identification`,items:[`Coordinate the transfer of imaging studies from partner hospitals and imaging centres.`,`Verify DICOM completeness, series composition and protocol consistency on arrival.`,`Run and verify de-identification, including burned-in text and private tags.`,`Maintain the linkage between de-identified studies and their source records under agreed governance.`,`Track provenance, consent basis and permitted use for every dataset.`,`Escalate anything that does not meet the agreed data-sharing terms.`]},{title:`Annotation projects & protocols`,items:[`Write annotation guidelines with the clinical leads, including worked examples and edge cases.`,`Configure annotation tasks, tooling and label schemas.`,`Recruit, onboard and train clinical readers on each protocol.`,`Run calibration rounds before production annotation begins.`,`Track throughput, backlog and reader workload.`,`Manage adjudication of disagreements and record the resolution.`]},{title:`Quality control & agreement`,items:[`Define and monitor quality metrics for every annotation task.`,`Measure inter-reader and intra-reader agreement continuously, not just at the start.`,`Audit samples of completed work against the protocol.`,`Detect and correct label drift as projects run.`,`Report quality honestly to the clinical and technical leads.`]},{title:`Dataset curation & versioning`,items:[`Define training, validation and test splits, and keep them separated.`,`Version every released dataset and record exactly what changed.`,`Document cohort composition: sites, scanners, protocols and patient characteristics.`,`Prevent leakage between splits at the patient rather than the study level.`,`Maintain the metadata the technical team needs to slice performance by subgroup.`,`Keep every released cohort reproducible from its source records.`]},{title:`Technical knowledge`,lead:`You will bring practical command of:`,items:[`DICOM structure, tags, series organisation and de-identification.`,`PACS and clinical imaging workflows.`,`CT and MRI acquisition basics, and how protocol differences show up in data.`,`Annotation tooling for classification, segmentation and measurement.`,`Agreement and overlap metrics such as kappa and Dice.`,`Scripting, ideally Python, for validation and reporting.`,`Data governance, de-identification standards and audit requirements.`],note:`You do not need to train models. You do need to understand what a model will do with a badly built dataset, and to refuse to release one.`},{title:`Bridge between clinical & technical teams`,items:[`Turn clinical reading protocols into workable annotation tasks.`,`Give the technical team clear documentation of every dataset they use.`,`Raise data problems that explain model behaviour rather than letting them be debugged blindly.`,`Support clinical readers so annotation fits around clinical work.`,`Keep the clinical leads informed on quality and progress.`]},{title:`Partner sites & compliance`,items:[`Support onboarding of new data-contributing sites.`,`Maintain records required for ethics-committee and institutional review.`,`Help prepare data-sharing documentation with partner institutions.`,`Keep the audit trail complete for regulatory and research review.`]}],education:[`Degree in radiography, medical imaging technology, biomedical engineering, health informatics, life sciences or a related field.`,`Clinical imaging experience, or demonstrable experience running imaging data projects.`,`Additional training in health informatics or data management is an advantage.`],requiredSkills:[`Working knowledge of DICOM and clinical imaging data.`,`Exceptional attention to detail and documentation discipline.`,`Ability to write clear protocols and follow them exactly.`,`Comfort with agreement metrics and simple statistics.`,`Basic scripting ability for validation and reporting.`,`Strong organisation and project coordination across multiple readers.`,`Sound judgement about data governance and privacy.`,`Ability to work with both clinicians and engineers.`,`Willingness to be the person who blocks a release.`],preferredExp:[`Medical image annotation or segmentation projects.`,`Radiography or imaging-department work.`,`Clinical research data management.`,`PACS administration or radiology informatics.`,`De-identification of clinical data at scale.`,`Working with AI or research teams.`,`Multi-centre imaging studies.`,`Python for data validation.`,`Regulatory or audit documentation.`],lookingFor:[{title:`Clinical data`,text:`Real familiarity with how imaging studies are produced, stored and moved, and with what goes wrong in practice.`},{title:`Methodological`,text:`Discipline about protocols, agreement, versioning and provenance — the things that make a result reproducible.`},{title:`Operational`,text:`Ability to run annotation projects with clinical readers to a schedule, and keep quality measurable while doing it.`}],lookingForNote:`The ideal candidate can debug a DICOM header in the morning, run a reader calibration session in the afternoon, and explain in the evening exactly which cases went into version three of the dataset.`,success:[`Every released dataset is versioned, documented and reproducible.`,`Annotation quality is measured continuously and stays within agreed bounds.`,`No patient-level leakage exists between training, validation and test splits.`,`De-identification and governance records survive external audit.`,`The technical team can slice performance by site, scanner and subgroup.`,`Data problems are found before training rather than blamed on the model.`],opportunity:[`This is an opportunity to build the data foundation of a clinical AI platform properly from the start, instead of repairing it later.`,`You will work directly with stroke neurologists, neuroradiologists, AI engineers and partner hospitals, and own the datasets that everything the platform claims will ultimately rest on.`]},{slug:`molecular-biologist-genomics-liquid-biopsy`,discipline:`Laboratory Science`,title:`Molecular Biologist — Genomics & Liquid Biopsy`,focus:`NGS, ctDNA and assay development`,accent:`#D4891E`,summary:`Develop and validate the liquid-biopsy assays behind our precision-oncology work, from extraction to reportable result.`,position:{...vf,title:`Molecular Biologist — Genomics & Liquid Biopsy`,employment:`Full-time`},pipeline:`Design the assay → Optimise the wet lab → Validate analytically → Confirm clinically → Transfer to routine use`,intro:[`We are looking for a molecular biologist to develop and validate the liquid-biopsy and genomics assays behind our precision-oncology work: circulating tumour DNA, cell-free DNA and exosome-based approaches to earlier detection.`,`You will own the wet-lab side end to end — extraction, library preparation, sequencing and quality control — and work with the bioinformatics team so that what comes off the sequencer is analysable and what comes out of the pipeline is trustworthy.`,`This is a development position rather than a routine testing one. We are looking for someone who wants to build assays that hold up under validation, and who is rigorous about the difference between a promising result and a reproducible one.`],responsibilities:[{title:`Assay development`,items:[`Design and optimise cell-free DNA and circulating tumour DNA workflows.`,`Develop extraction protocols for plasma, tissue and exosome fractions.`,`Optimise NGS library preparation, including low-input and UMI-based approaches.`,`Select and evaluate panel content with the clinical and computational teams.`,`Troubleshoot yield, contamination, duplication and coverage problems.`,`Document every protocol to a standard another laboratory can follow.`]},{title:`Sequencing & laboratory operations`,items:[`Run and maintain sequencing workflows and the associated instrumentation.`,`Define and monitor quality-control metrics at each step of the process.`,`Manage reagents, consumables, vendors and inventory.`,`Maintain equipment calibration, servicing and records.`,`Keep the laboratory compliant with safety and biosafety requirements.`]},{title:`Analytical & clinical validation`,items:[`Design validation studies covering sensitivity, specificity, precision and reproducibility.`,`Establish limits of detection and quantitation with appropriate reference materials.`,`Assess pre-analytical variables, including tube type, transport and storage.`,`Run repeatability and inter-operator studies.`,`Confirm assay performance against clinical samples with known status.`,`Prepare validation reports for internal, regulatory and publication use.`]},{title:`Biomarker & translational work`,items:[`Evaluate candidate biomarkers for earlier detection and monitoring.`,`Support studies correlating molecular findings with clinical outcome.`,`Work with partner hospitals and laboratories on sample collection protocols.`,`Contribute to study design alongside the clinical research team.`,`Contribute to publications, abstracts and conference presentations.`]},{title:`Technical knowledge`,lead:`You will bring practical command of:`,items:[`Nucleic acid extraction and quantification, including low-input material.`,`NGS library preparation, target enrichment and amplicon approaches.`,`Illumina or comparable sequencing chemistry and instrument operation.`,`ctDNA and cell-free DNA biology, fragmentation and background noise.`,`ddPCR or qPCR for orthogonal confirmation.`,`Variant classes in solid tumours: SNVs, indels, CNVs and fusions.`,`Analytical validation frameworks and laboratory quality systems.`],note:`You do not need to build pipelines. You do need to understand what the pipeline can and cannot recover from a library, and to design the wet lab accordingly.`},{title:`Bridge between laboratory & computational teams`,items:[`Define the data and metadata the bioinformatics team needs from every run.`,`Investigate whether an anomalous result is wet-lab or analytical in origin.`,`Feed sequencing quality metrics back into assay design.`,`Translate computational constraints into laboratory requirements.`,`Review pipeline output against expected assay behaviour.`]},{title:`Open science & collaboration`,items:[`Publish protocols and validation data so other laboratories can reproduce them.`,`Support open-source and open-protocol work alongside the wider team.`,`Train and mentor junior laboratory staff and students.`,`Represent the laboratory in scientific collaborations and at conferences.`]}],education:[`MSc or PhD in molecular biology, biotechnology, genetics, biochemistry or a related field.`,`Hands-on laboratory experience with NGS workflows.`,`Experience with liquid biopsy or low-input samples is a strong advantage.`],requiredSkills:[`Strong practical NGS library preparation skills.`,`Experience with nucleic acid extraction and quality assessment.`,`Rigorous experimental design and record keeping.`,`Ability to troubleshoot assays systematically rather than by trial and error.`,`Understanding of analytical validation requirements.`,`Basic data handling and statistics.`,`Clear scientific writing.`,`Ability to work closely with clinicians and computational scientists.`,`Careful, methodical approach to contamination control.`],preferredExp:[`ctDNA or cell-free DNA assay development.`,`Exosome or extracellular vesicle work.`,`Target enrichment panel design.`,`ddPCR or digital PCR.`,`Single-cell or spatial methods.`,`Accredited or regulated laboratory environments.`,`Method transfer between laboratories.`,`Biobanking and sample-handling protocols.`,`Publication record in molecular oncology.`],lookingFor:[{title:`Laboratory`,text:`Genuine hands-on command of NGS and low-input workflows, including what fails and why.`},{title:`Scientific`,text:`Rigour about validation: limits of detection, reproducibility, and pre-analytical variables that quietly ruin results.`},{title:`Collaborative`,text:`Ability to work with computational and clinical colleagues, and to publish protocols others can reproduce.`}],lookingForNote:`The ideal candidate can optimise a library preparation in the morning, design a limit-of-detection study in the afternoon, and work out with a bioinformatician in the evening whether a variant is real.`,success:[`Assays are validated to a documented, defensible standard.`,`Limits of detection are established and hold up on clinical samples.`,`Run-to-run quality is stable and monitored.`,`Wet-lab and analytical causes of anomalies can be told apart quickly.`,`Protocols are published clearly enough for others to reproduce.`,`The laboratory can support both research studies and partner collaborations.`],opportunity:[`This is an opportunity to build a liquid-biopsy capability from assay design through validation, in an organisation whose output is intended to be open rather than proprietary.`,`You will work directly with oncopathologists, bioinformaticians, clinical researchers and partner laboratories, on work aimed at making earlier detection affordable well beyond large medical centres.`]},{slug:`oncopathologist-molecular-pathology`,discipline:`Clinical · Oncology`,title:`Oncopathologist — Molecular Pathology`,focus:`Diagnostic ground truth and molecular correlation`,accent:`#c0392b`,summary:`Provide the diagnostic ground truth and molecular correlation that our oncology models are built and judged against.`,position:{...vf,title:`Oncopathologist — Molecular Pathology`,employment:`Full-time / consulting`},pipeline:`Define the diagnosis → Establish ground truth → Correlate molecular findings → Validate the model → Report interpretably`,intro:[`We are looking for an oncopathologist to provide the diagnostic reference standard behind our precision-oncology work, and to correlate histopathological findings with the molecular results coming out of the laboratory.`,`You will define what counts as ground truth for each diagnostic task, review cases where model output and pathology disagree, and make sure molecular findings are interpreted in the context of the tissue they came from.`,`This is a position for a pathologist who wants a hand in how diagnostic AI is validated, and who is prepared to be the reason a claim gets withdrawn as well as the reason it gets made.`],responsibilities:[{title:`Diagnostic reference standard`,items:[`Define the diagnostic reference standard for each task the models address.`,`Specify case selection, inclusion criteria and exclusions for study cohorts.`,`Review and sign out cases used as ground truth.`,`Adjudicate discordant cases and document the reasoning.`,`Set rules for handling limited, degraded or ambiguous material.`,`Review labelling protocols before any large annotation effort begins.`]},{title:`Histopathology & molecular correlation`,items:[`Correlate histological findings with sequencing and liquid-biopsy results.`,`Interpret immunohistochemistry alongside molecular data.`,`Assess tumour content, heterogeneity and sampling adequacy for molecular testing.`,`Advise on which tissue and which block should go for which assay.`,`Investigate discordance between tissue and plasma findings.`]},{title:`Model validation & interpretation`,items:[`Define clinical acceptance criteria for diagnostic model output.`,`Review false positives and false negatives case by case.`,`Assess whether model behaviour is clinically plausible, not merely accurate.`,`Characterise performance across tumour types, grades and preparation quality.`,`Advise on how model output should be reported so it is interpretable.`,`Contribute pathology methodology to publications and regulatory documentation.`]},{title:`Reporting & clinical integration`,items:[`Advise on integrated reporting of morphological and molecular findings.`,`Define how uncertainty and limitations must appear in any report.`,`Support molecular tumour board discussions with partner institutions.`,`Advise on variant interpretation and clinical actionability alongside the computational team.`,`Help align reporting with the practice of partner laboratories.`]},{title:`Clinical & scientific knowledge`,lead:`You will bring practical command of:`,items:[`Surgical pathology and cytopathology of solid tumours.`,`Immunohistochemistry panels and their diagnostic limits.`,`Molecular pathology: SNVs, indels, copy number, fusions and methylation.`,`Tumour staging, grading and classification systems.`,`Variant classification and clinical actionability frameworks.`,`Pre-analytical effects of fixation, storage and tumour content.`,`Diagnostic-accuracy statistics and reader agreement measures.`],note:`You do not need to write code. You do need to be able to say why a model result is diagnostically implausible, and what would have to be true for it to be believed.`},{title:`Bridge between clinical & technical teams`,items:[`Translate diagnostic requirements into specifications the technical team can build to.`,`Review model output routinely and give structured feedback.`,`Explain pathological variability and its limits to engineers.`,`Explain model behaviour to pathologists and treating clinicians.`,`Help prioritise development by diagnostic impact.`]},{title:`Collaboration & representation`,items:[`Support pathology and data partnerships with hospitals and laboratories.`,`Represent SHRI-AI in pathology and molecular oncology settings.`,`Contribute to research collaborations and multi-centre studies.`,`Train and mentor trainees and junior staff involved in case review.`]}],education:[`MD/DNB in pathology, with subspecialty training or substantial experience in oncopathology.`,`Training or demonstrable experience in molecular pathology.`,`Current or recent diagnostic practice is an advantage.`],requiredSkills:[`Expert diagnostic pathology in solid tumours.`,`Working command of molecular pathology and variant interpretation.`,`Consistency and rigour in structured case review.`,`Ability to specify diagnostic criteria clearly in writing.`,`Understanding of diagnostic-accuracy concepts and study design.`,`Ability to work closely with laboratory and computational teams.`,`Sound judgement on the limits of automated diagnostic output.`,`Clear written and verbal communication.`,`Willingness to learn how diagnostic models are built and evaluated.`],preferredExp:[`Digital pathology or whole-slide imaging.`,`Diagnostic AI validation.`,`Molecular tumour boards.`,`NGS-based diagnostic reporting.`,`Biobanking and research case selection.`,`Multi-centre pathology studies.`,`Accredited laboratory quality systems.`,`Teaching pathology trainees.`,`Publication record in oncopathology or molecular pathology.`],lookingFor:[{title:`Diagnostic`,text:`Expert, consistent pathology across solid tumours, including limited and imperfect material.`},{title:`Molecular`,text:`Real fluency in correlating tissue findings with sequencing and liquid-biopsy results.`},{title:`Collaborative`,text:`Willingness to work through failure cases with engineers and turn diagnostic judgement into specifications.`}],lookingForNote:`The ideal candidate can sign out a difficult case in the morning, reconcile it with a plasma result in the afternoon, and explain to an engineer in the evening why the model is confidently wrong.`,success:[`Diagnostic reference standards are documented and applied consistently.`,`Tissue and molecular findings are correlated rather than reported in parallel.`,`Model performance is characterised across tumour types and preparation quality.`,`Reporting conveys uncertainty and limitation honestly.`,`Pathologists at partner institutions find the output interpretable.`,`The diagnostic evidence behind the work withstands external review.`],opportunity:[`This is an opportunity to shape how diagnostic AI is validated in oncology, at the stage where the diagnostic questions are still being defined.`,`You will work directly with molecular biologists, bioinformaticians, clinical researchers and partner laboratories, on open work intended to make precision diagnosis reachable well beyond major centres.`]},{slug:`bioinformatics-scientist`,discipline:`Computational Biology`,title:`Bioinformatics Scientist`,focus:`Variant calling, ctDNA pipelines and multi-omics`,accent:`#7B6FCD`,summary:`Build the analysis pipelines that turn sequencing output into results clinicians and researchers can rely on.`,position:{...vf,title:`Bioinformatics Scientist`,employment:`Full-time`},pipeline:`Design the pipeline → Benchmark against truth sets → Tune for low-frequency signal → Validate → Release reproducibly`,intro:[`We are looking for a bioinformatics scientist to build and validate the analysis pipelines behind our precision-oncology work: variant calling from tissue and plasma, ctDNA detection at low allele fraction, and interpretation across multiple data types.`,`You will work between the laboratory and the clinical teams, turning sequencing output into results that can be defended — with benchmarks, error models and versioning rather than a single set of parameters that happened to work.`,`This is a development and validation position. We are looking for someone who treats a pipeline as a scientific instrument that has to be characterised, not as a script that produces a file.`],responsibilities:[{title:`Pipeline development`,items:[`Build and maintain pipelines for alignment, variant calling and quality control.`,`Develop ctDNA analysis workflows capable of detecting low-frequency variants.`,`Implement UMI-aware deduplication and error suppression.`,`Call and interpret copy-number changes, structural variants and fusions.`,`Containerise and version every workflow so results are reproducible.`,`Automate quality-control reporting for each sequencing run.`]},{title:`Benchmarking & error modelling`,items:[`Benchmark pipelines against reference materials and established truth sets.`,`Characterise sensitivity and specificity as a function of allele fraction and depth.`,`Build background error models for the panels and assays in use.`,`Quantify the effect of input amount, coverage and library complexity.`,`Compare tools honestly and document why each choice was made.`,`Re-benchmark whenever the assay or reference data changes.`]},{title:`Interpretation & multi-omics`,items:[`Annotate variants against population, clinical and cancer databases.`,`Support variant classification and actionability assessment with the clinical team.`,`Integrate genomic data with expression, methylation or imaging-derived features where studies require it.`,`Build analyses for biomarker discovery and monitoring over time.`,`Produce interpretable outputs for pathologists and clinicians rather than raw tables.`]},{title:`Data engineering & infrastructure`,items:[`Manage sequencing data storage, organisation and lifecycle.`,`Run workloads efficiently on local or cloud compute.`,`Maintain sample and run metadata so any result can be traced to its inputs.`,`Keep dependencies, references and annotation sources pinned and documented.`,`Monitor cost, runtime and failure rates.`]},{title:`Technical knowledge`,lead:`You will bring practical command of:`,items:[`Python and R, and comfort on the command line.`,`A workflow manager such as Nextflow or Snakemake.`,`Alignment and variant-calling tooling, and their failure modes.`,`ctDNA and cell-free DNA analysis at low allele fraction.`,`Statistical concepts underlying detection limits and multiple testing.`,`Containers, version control and reproducible environments.`,`Variant annotation resources and clinical interpretation frameworks.`],note:`You do not need to run the wet lab. You do need to understand how library preparation shapes the data, and to say when an assay change invalidates a benchmark.`},{title:`Bridge between laboratory & clinical teams`,items:[`Define the metadata and quality metrics the pipeline requires from every run.`,`Work out whether an anomaly is wet-lab or analytical in origin.`,`Explain analytical limits clearly to laboratory and clinical colleagues.`,`Translate clinical interpretation needs into pipeline output.`,`Support validation studies with the analyses they need.`]},{title:`Open science & collaboration`,items:[`Release pipelines and analysis code as open source with usable documentation.`,`Contribute to publications, preprints and methods papers.`,`Support external groups reproducing our analyses.`,`Mentor students and junior computational staff.`]}],education:[`MSc or PhD in bioinformatics, computational biology, genomics, computer science or a related field.`,`Demonstrable experience analysing NGS data end to end.`,`Experience with low-frequency variant detection is a strong advantage.`],requiredSkills:[`Strong Python and solid R.`,`Practical experience with alignment and variant-calling workflows.`,`Workflow management and containerisation.`,`Sound statistics, particularly around detection limits.`,`Rigorous benchmarking and documentation habits.`,`Version control and reproducible analysis practice.`,`Ability to explain analytical limits to non-computational colleagues.`,`Clear scientific writing.`,`Careful, sceptical approach to surprising results.`],preferredExp:[`ctDNA or liquid-biopsy analysis.`,`UMI-based error suppression.`,`Panel design and evaluation.`,`Copy-number or structural-variant calling.`,`Multi-omics integration.`,`Cloud compute for genomics.`,`Clinical reporting pipelines.`,`Open-source project maintenance.`,`Publication record in computational genomics.`],lookingFor:[{title:`Computational`,text:`Real engineering ability: pipelines that are reproducible, versioned and understood rather than merely working.`},{title:`Scientific`,text:`Rigour about benchmarks, error models and detection limits, especially at low allele fraction.`},{title:`Collaborative`,text:`Ability to work with wet-lab and clinical colleagues, and to publish code others can actually run.`}],lookingForNote:`The ideal candidate can debug an alignment problem in the morning, characterise a detection limit in the afternoon, and explain to a pathologist in the evening how confident the call really is.`,success:[`Pipelines are versioned, containerised and reproducible from raw data.`,`Sensitivity and specificity are characterised across allele fraction and depth.`,`Analytical and wet-lab causes of anomalies can be separated quickly.`,`Output is interpretable to clinical colleagues without translation.`,`Released code can be run by external groups.`,`Benchmarks are maintained as assays and references evolve.`],opportunity:[`This is an opportunity to build clinical-grade genomics analysis in the open, where the pipelines and benchmarks are published rather than kept behind a product.`,`You will work directly with molecular biologists, oncopathologists, clinical researchers and the AI team, on analysis intended to make precision oncology affordable in far more places than it currently reaches.`]},{slug:`clinical-research-associate`,discipline:`Clinical Research`,title:`Clinical Research Associate`,focus:`Validation studies across partner sites`,accent:`#3A82C4`,summary:`Run the validation studies that decide whether our stroke and oncology work holds up at partner sites.`,position:{...vf,title:`Clinical Research Associate`,employment:`Full-time`},pipeline:`Write the protocol → Obtain approvals → Open the sites → Collect clean data → Report the result honestly`,intro:[`We are looking for a clinical research associate to run the validation studies behind both SHRI-AI platforms: the stroke imaging work and the precision-oncology work, across partner hospitals and laboratories in India and the United States.`,`You will take studies from protocol and ethics submission through site activation, data collection, monitoring and reporting — and keep the documentation in a state that survives audit rather than being reconstructed afterwards.`,`This is a hands-on coordination position with real scientific responsibility. The credibility of everything the organisation claims rests on how these studies are run.`],responsibilities:[{title:`Protocol & study design`,items:[`Draft protocols, case report forms and informed consent documents with the clinical leads.`,`Define endpoints, cohort criteria and sample-size expectations with the statistical team.`,`Define the data to be collected, and collect nothing that is not needed.`,`Write standard operating procedures for each study activity.`,`Maintain protocol version control and manage amendments.`]},{title:`Regulatory & ethics submissions`,items:[`Prepare and submit ethics-committee and institutional-review applications.`,`Maintain approvals, renewals and amendment records across all sites.`,`Keep trial-master-file documentation complete and current.`,`Track and report adverse events and deviations as required.`,`Ensure studies comply with applicable regulations and data-protection requirements.`]},{title:`Site activation & management`,items:[`Assess and qualify prospective partner sites.`,`Coordinate site initiation, training and activation.`,`Act as day-to-day contact for investigators and site coordinators.`,`Coordinate sample and imaging transfer with the laboratory and data teams.`,`Track recruitment, and address the reasons a site is behind.`,`Run monitoring visits and follow up on findings.`]},{title:`Data quality & monitoring`,items:[`Perform source-data verification against the agreed plan.`,`Raise, track and resolve data queries.`,`Monitor protocol compliance and document deviations.`,`Reconcile clinical data with laboratory and imaging records.`,`Prepare datasets for analysis and lock them appropriately.`]},{title:`Technical knowledge`,lead:`You will bring practical command of:`,items:[`Good Clinical Practice and the applicable regulatory framework.`,`Protocol and case-report-form design.`,`Ethics-committee and institutional-review processes.`,`Electronic data capture systems.`,`Informed consent requirements and documentation.`,`Basic biostatistics: endpoints, sample size and diagnostic-accuracy measures.`,`A working understanding of imaging and molecular study workflows.`],note:`You do not need to build models or run assays. You do need to understand what each study is testing well enough to notice when the data being collected will not answer it.`},{title:`Bridge between sites & internal teams`,items:[`Translate protocol requirements into practical site procedures.`,`Keep clinical, laboratory and technical teams aligned on study status.`,`Escalate operational problems early rather than at the analysis stage.`,`Collect structured investigator feedback on feasibility.`,`Support the clinical leads in interpreting and reporting findings.`]},{title:`Reporting & collaboration`,items:[`Prepare study reports, progress updates and partner-facing summaries.`,`Contribute to publications, abstracts and conference submissions.`,`Maintain records supporting regulatory and external review.`,`Help build repeatable study procedures for additional sites.`]}],education:[`Degree in life sciences, nursing, pharmacy, medicine or a related field.`,`Formal training or certification in clinical research is an advantage.`,`Prior experience coordinating clinical studies.`],requiredSkills:[`Working knowledge of Good Clinical Practice and regulatory requirements.`,`Meticulous documentation and record keeping.`,`Strong coordination across multiple sites and stakeholders.`,`Clear written and verbal communication with clinical staff.`,`Comfort with electronic data capture and study databases.`,`Basic statistical literacy.`,`Ability to work independently and travel to sites as required.`,`Sound judgement about consent, privacy and data protection.`,`Willingness to escalate problems rather than absorb them.`],preferredExp:[`Diagnostic or device studies.`,`Imaging-based clinical research.`,`Oncology or neurology studies.`,`Multi-centre study coordination.`,`Ethics-committee submissions in India.`,`Studies involving U.S. sites or sponsors.`,`Biobanking and sample logistics.`,`Monitoring or auditing experience.`,`Registry or quality-improvement programmes.`],lookingFor:[{title:`Operational`,text:`Ability to open sites, keep them recruiting, and hold documentation to a standard that survives audit.`},{title:`Scientific`,text:`Enough understanding of what each study tests to notice when the data will not answer the question.`},{title:`Collaborative`,text:`Credibility with investigators and site staff, and clear communication back to internal teams.`}],lookingForNote:`The ideal candidate can run a monitoring visit in the morning, resolve an ethics-committee query in the afternoon, and tell the clinical lead in the evening that recruitment at one site is not going to work.`,success:[`Studies open on schedule with approvals and documentation in place.`,`Recruitment is tracked, and shortfalls are surfaced early.`,`Data is clean, queried and reconciled before analysis.`,`Deviations and adverse events are documented and reported correctly.`,`Study records withstand audit without reconstruction.`,`Findings are reported honestly, including the negative ones.`],opportunity:[`This is an opportunity to run the validation work behind two clinical AI platforms, at the point where the evidence base is being built rather than defended.`,`You will work directly with stroke neurologists, neuroradiologists, oncopathologists, laboratory and computational teams, and with partner hospitals across India and the United States.`]}];function bf(e){if(e)return yf.find(t=>t.slug===e)}var xf=()=>{let e=()=>{dt(`contact`),window.dispatchEvent(new CustomEvent(`open-contact-form`))},t=(e,t)=>{e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button===0&&(e.preventDefault(),mf(t))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
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
      `}),(0,A.jsx)(`section`,{className:`careers-section`,id:`careers`,children:(0,A.jsxs)(`div`,{className:`careers-inner`,children:[(0,A.jsxs)(`div`,{className:`careers-header`,children:[(0,A.jsx)(`p`,{className:`careers-label`,children:`Careers`}),(0,A.jsx)(`h2`,{className:`careers-heading`,children:`Work with us`}),(0,A.jsx)(`p`,{className:`careers-subtext`,children:`We are building AI for stroke care and precision oncology, across the clinic, the laboratory and engineering. Open a role for its full description.`})]}),(0,A.jsx)(`div`,{className:`careers-grid`,children:yf.map(e=>(0,A.jsxs)(`a`,{className:`careers-card`,href:ff(e.slug),onClick:n=>t(n,e.slug),"aria-label":`Read the full job description for `+e.title,children:[(0,A.jsx)(`span`,{className:`careers-rule`,style:{background:e.accent},"aria-hidden":`true`}),(0,A.jsx)(`span`,{className:`careers-card-label`,style:{color:e.accent},children:e.discipline}),(0,A.jsx)(`span`,{className:`careers-card-title`,children:e.title}),e.focus&&(0,A.jsx)(`span`,{className:`careers-card-focus`,children:e.focus}),(0,A.jsx)(`p`,{className:`careers-card-desc`,children:e.summary}),(0,A.jsxs)(`span`,{className:`careers-card-apply`,children:[`View role`,(0,A.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,"aria-hidden":`true`,children:(0,A.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})})]})]},e.slug))}),(0,A.jsxs)(`p`,{className:`careers-note`,children:[`Do not see your discipline listed? We are always glad to hear from clinicians, researchers and engineers working on accessible healthcare technology —`,` `,(0,A.jsx)(`button`,{type:`button`,className:`careers-note-link`,onClick:e,children:`write to us`}),`.`]})]})})]})};function Sf(e){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e||``);return t?`${Number(t[3])}.${Number(t[2])}.${t[1].slice(2)}`:e||``}var Cf=Sf(`2026-09-29`),wf=()=>{let e=new Date().getFullYear(),[t,n]=(0,T.useState)(!1),[r,i]=(0,T.useState)(!1),[a,o]=(0,T.useState)(!1),s=(0,T.useRef)(null),c=()=>{n(!0),i(!1),setTimeout(()=>{s.current?.focus({preventScroll:!0})},400)};return(0,T.useEffect)(()=>{let e=()=>{setTimeout(()=>{c()},250)};return window.addEventListener(`open-contact-form`,e),()=>window.removeEventListener(`open-contact-form`,e)},[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`

        @keyframes subtle-drift1 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-10px) translateZ(0);} }
        @keyframes subtle-drift2 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-7px) translateZ(0);} }
        @keyframes subtle-drift3 { 0%{transform:translateY(0) translateZ(0);} 100%{transform:translateY(-13px) translateZ(0);} }

        .sd1 { animation: subtle-drift1 12s ease-in-out infinite alternate; }
        .sd2 { animation: subtle-drift2 14s ease-in-out infinite alternate; }
        .sd3 { animation: subtle-drift3 16s ease-in-out infinite alternate; }

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
      `}),(0,A.jsxs)(`section`,{id:`contact`,style:{position:`relative`,minHeight:`70vh`,overflow:`hidden`,display:`flex`,flexDirection:`column`,background:`linear-gradient(135deg, #fce8cc 0%, #ede4f8 35%, #cfe3ff 65%, #daeeff 100%)`},children:[(0,A.jsxs)(`div`,{style:{position:`absolute`,inset:0,overflow:`hidden`,pointerEvents:`none`,zIndex:0},children:[(0,A.jsx)(`div`,{style:{position:`absolute`,width:`55%`,height:`65%`,top:`-20%`,left:`-8%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(255,140,30,0.55) 0%, rgba(255,180,80,0.25) 35%, transparent 70%)`,filter:`blur(52px)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,width:`50%`,height:`60%`,top:`-15%`,left:`22%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(160,100,255,0.45) 0%, rgba(200,160,255,0.22) 40%, transparent 70%)`,filter:`blur(58px)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,width:`55%`,height:`65%`,top:`-20%`,right:`-8%`,borderRadius:`50%`,background:`radial-gradient(ellipse, rgba(50,130,255,0.50) 0%, rgba(100,170,255,0.25) 35%, transparent 70%)`,filter:`blur(52px)`}})]}),(0,A.jsxs)(`div`,{style:{position:`absolute`,inset:0,overflow:`hidden`,pointerEvents:`none`,zIndex:2},children:[(0,A.jsx)(`div`,{className:`fgl-shape fl1-shape sd1`,style:{left:t?`13%`:`35%`,background:`linear-gradient(155deg, rgba(215,180,255,0.48) 0%, rgba(185,145,248,0.34) 45%, rgba(152,112,232,0.20) 100%)`,boxShadow:`0 32px 100px rgba(130,70,220,0.55), inset 0 2px 0 rgba(255,255,255,0.65)`,opacity:.88}}),(0,A.jsx)(`div`,{className:`fgl-shape fl2-shape sd2`,style:{left:t?`21%`:`44%`,background:`linear-gradient(158deg, rgba(225,200,255,0.54) 0%, rgba(195,165,252,0.44) 45%, rgba(162,122,238,0.26) 100%)`,boxShadow:`0 36px 110px rgba(120,70,218,0.60), inset 0 2px 0 rgba(255,255,255,0.72)`}}),(0,A.jsx)(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,height:`40%`,background:`linear-gradient(to top, rgba(244,243,250,0.97) 0%, rgba(244,243,250,0.78) 38%, transparent 100%)`,zIndex:10}})]}),(0,A.jsxs)(`div`,{className:`cta-content ${t?`slide-out`:``}`,style:{position:`relative`,zIndex:20,display:`flex`,flexDirection:`column`,flex:1},children:[(0,A.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,padding:`clamp(20px, 3vw, 40px) 4vw`},children:(0,A.jsxs)(`button`,{className:`git-btn`,onClick:c,children:[`Get in touch`,(0,A.jsx)(`svg`,{width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,strokeWidth:2.5,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})}),(0,A.jsxs)(`div`,{style:{flex:1,display:`flex`,flexDirection:`column`,justifyContent:`center`,padding:`0 4vw`},children:[(0,A.jsx)(`p`,{className:`fcta-label`,children:`Partner With Us`}),(0,A.jsxs)(`h2`,{className:`fcta-heading`,children:[`Advance Precision`,(0,A.jsx)(`br`,{}),`Health Research`,(0,A.jsx)(`br`,{}),(0,A.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:`16px`,flexWrap:`wrap`},children:[`In Just`,(0,A.jsxs)(`span`,{className:`fcta-badge`,children:[`One Email`,(0,A.jsx)(`svg`,{width:`32`,height:`32`,fill:`none`,stroke:`#1a1a24`,viewBox:`0 0 24 24`,strokeWidth:1.8,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M17 8l4 4m0 0l-4 4m4-4H3`})})]})]})]})]}),(0,A.jsxs)(`div`,{className:`cta-bottom`,children:[(0,A.jsxs)(`div`,{className:`cta-bottom-divider`,style:{padding:`32px 4vw`},children:[(0,A.jsx)(`p`,{style:{fontSize:`var(--fs-eyebrow)`,fontFamily:`var(--font-ui)`,fontWeight:500,letterSpacing:`var(--ls-eyebrow)`,textTransform:`uppercase`,color:`#888`,margin:`0 0 12px`},children:`Our Mission`}),(0,A.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`#555`,lineHeight:`var(--lh-body)`,margin:0},children:`California-based 501(c)(3) nonprofit advancing equitable access to AI-driven diagnostics worldwide.`})]}),(0,A.jsxs)(`div`,{style:{padding:`32px 4vw`},children:[(0,A.jsx)(`p`,{style:{fontSize:`var(--fs-eyebrow)`,fontFamily:`var(--font-ui)`,fontWeight:500,letterSpacing:`var(--ls-eyebrow)`,textTransform:`uppercase`,color:`#888`,margin:`0 0 12px`},children:`Vision`}),(0,A.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`#555`,lineHeight:`var(--lh-body)`,margin:0},children:`Moving innovations from lab to clinic — translational research powered by AI and genomic precision.`})]})]})]}),(0,A.jsxs)(`div`,{className:`form-container ${t?`visible`:``}`,id:`contact-form-overlay`,children:[(0,A.jsxs)(`button`,{className:`back-arrow-btn`,onClick:()=>{n(!1),i(!1)},"aria-label":`Go back`,children:[(0,A.jsx)(`div`,{className:`back-arrow-icon`,children:(0,A.jsx)(`svg`,{className:`back-arrow-svg`,width:`14`,height:`14`,fill:`none`,viewBox:`0 0 24 24`,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M19 12H5m7-7l-7 7 7 7`})})}),(0,A.jsx)(`span`,{className:`back-arrow-label`,children:`Back`})]}),(0,A.jsx)(`div`,{className:`form-inner`,children:r?(0,A.jsxs)(`div`,{className:`success-notification`,style:{background:`#fff`,padding:`60px`,borderRadius:24,textAlign:`center`,boxShadow:`0 20px 60px rgba(0,0,0,0.1)`},children:[(0,A.jsx)(`div`,{style:{width:80,height:80,margin:`0 auto 32px`,borderRadius:`50%`,background:`#10b981`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,A.jsx)(`svg`,{width:`32`,height:`32`,fill:`none`,stroke:`#fff`,viewBox:`0 0 24 24`,strokeWidth:3,children:(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M5 13l4 4L19 7`})})}),(0,A.jsx)(`h3`,{style:{fontSize:`var(--fs-h4)`,fontWeight:400,margin:`0 0 16px`},children:`Message Sent!`}),(0,A.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`#6b6b80`},children:`We'll get back to you within 24 hours`})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`h3`,{className:`form-title`,children:`Get in Touch`}),(0,A.jsx)(`p`,{className:`form-desc`,children:`Discuss how we can collaborate to advance precision health research.`}),(0,A.jsxs)(`form`,{className:`contact-form`,onSubmit:e=>{e.preventDefault(),i(!0),setTimeout(()=>{i(!1),n(!1)},2500)},children:[(0,A.jsxs)(`div`,{className:`name-grid`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{className:`form-label`,htmlFor:`fname`,children:`First Name`}),(0,A.jsx)(`input`,{ref:s,className:`form-input`,type:`text`,id:`fname`,required:!0})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`label`,{className:`form-label`,htmlFor:`lname`,children:`Last Name`}),(0,A.jsx)(`input`,{className:`form-input`,type:`text`,id:`lname`,required:!0})]})]}),(0,A.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`24px`},children:[(0,A.jsx)(`label`,{className:`form-label`,htmlFor:`email`,children:`Email Address`}),(0,A.jsx)(`input`,{className:`form-input`,type:`email`,id:`email`,required:!0})]}),(0,A.jsxs)(`div`,{className:`form-group`,style:{marginBottom:`32px`},children:[(0,A.jsx)(`label`,{className:`form-label`,htmlFor:`message`,children:`Message`}),(0,A.jsx)(`textarea`,{className:`form-textarea`,id:`message`,required:!0})]}),(0,A.jsx)(`button`,{type:`submit`,className:`form-submit`,children:`Send Message`})]})]})})]})]}),(0,A.jsxs)(`footer`,{className:`shri-footer`,children:[(0,A.jsx)(`div`,{className:`shri-footer-inner`,children:(0,A.jsxs)(`div`,{className:`shri-footer-grid`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:16,marginBottom:32},children:[(0,A.jsx)(`img`,{src:`/shri-ai-logo.webp`,alt:`SHRI-AI logo`,width:`48`,height:`48`,className:`shri-brand-mark`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{style:{fontWeight:500,fontSize:`var(--fs-body)`,letterSpacing:`0.02em`,margin:0,color:`#fff`},children:`SHRI-AI`}),(0,A.jsx)(`p`,{style:{fontSize:`var(--fs-xs)`,color:`rgba(255,255,255,0.62)`,margin:0},children:`Senus Healthcare Research Institute`})]})]}),(0,A.jsx)(`p`,{style:{fontSize:`var(--fs-sm)`,color:`rgba(255,255,255,0.62)`,lineHeight:`var(--lh-body)`,margin:`0 0 40px`},children:`Advancing equitable access to AI-driven diagnostics and genomic medicine in cancer and stroke care worldwide.`}),(0,A.jsxs)(`div`,{className:`shri-contact-info`,children:[(0,A.jsxs)(`a`,{href:`mailto:info@shri-ai.org`,className:`shri-contact-item`,onClick:()=>{navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(`info@shri-ai.org`),o(!0),setTimeout(()=>o(!1),2e3)},children:[(0,A.jsxs)(`svg`,{width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,strokeWidth:2,children:[(0,A.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,A.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),`info@shri-ai.org`,a&&(0,A.jsx)(`span`,{className:`shri-copy-badge`,children:`Copied!`})]}),(0,A.jsxs)(`a`,{href:`tel:+14086664320`,className:`shri-contact-item`,children:[(0,A.jsx)(`svg`,{width:`24`,height:`24`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,strokeWidth:2,children:(0,A.jsx)(`path`,{d:`M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z`})}),`+1 408 666 4320`]})]})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`p`,{className:`shri-col-label`,children:`Quick Links`}),(0,A.jsxs)(`nav`,{children:[(0,A.jsx)(`a`,{href:`#about`,className:`shri-flink`,onClick:e=>{e.preventDefault(),dt(`about`)},children:`About Us`}),(0,A.jsx)(`a`,{href:`#focus`,className:`shri-flink`,onClick:e=>{e.preventDefault(),dt(`focus`)},children:`Focus Areas`}),(0,A.jsx)(`a`,{href:`#partnership`,className:`shri-flink`,onClick:e=>{e.preventDefault(),dt(`partnership`)},children:`Collaborate`}),(0,A.jsx)(`a`,{href:`#team`,className:`shri-flink`,onClick:e=>{e.preventDefault(),dt(`team`)},children:`Team`}),(0,A.jsx)(`a`,{href:`#careers`,className:`shri-flink`,onClick:e=>{e.preventDefault(),dt(`careers`)},children:`Careers`}),(0,A.jsx)(`a`,{href:`#contact`,className:`shri-flink`,onClick:e=>{e.preventDefault(),dt(`contact`),c()},children:`Contact`})]})]}),(0,A.jsxs)(`div`,{className:`shri-footer-col-map`,children:[(0,A.jsx)(`p`,{className:`shri-col-label`,children:`Global Reach`}),(0,A.jsx)(`div`,{className:`shri-map-wrap`,children:(0,A.jsx)(`iframe`,{src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4558.947129299513!2d-121.88439919999999!3d37.219291600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e313c74a19941%3A0xec4c74b0157b91b1!2s6559%20Springpath%20Ln%2C%20San%20Jose%2C%20CA%2095120%2C%20USA!5e1!3m2!1sen!2sin!4v1777609086171!5m2!1sen!2sin`,width:`100%`,height:`100%`,style:{border:0},allowFullScreen:``,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,title:`Global Reach`})}),(0,A.jsxs)(`div`,{className:`shri-address-box`,children:[(0,A.jsxs)(`svg`,{width:`28`,height:`28`,fill:`none`,stroke:`#ff8c1e`,viewBox:`0 0 24 24`,strokeWidth:2,style:{flexShrink:0,marginTop:4},children:[(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z`}),(0,A.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),(0,A.jsxs)(`div`,{className:`shri-address-text`,children:[(0,A.jsx)(`strong`,{style:{display:`block`,marginBottom:4,color:`#ff8c1e`},children:`USA Headquarters`}),`6559 Springpath Lane, San Jose, CA 95120, USA`]})]}),(0,A.jsxs)(`div`,{className:`shri-address-box`,children:[(0,A.jsxs)(`svg`,{width:`28`,height:`28`,fill:`none`,stroke:`#a064ff`,viewBox:`0 0 24 24`,strokeWidth:2,style:{flexShrink:0,marginTop:4},children:[(0,A.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z`}),(0,A.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),(0,A.jsxs)(`div`,{className:`shri-address-text`,children:[(0,A.jsx)(`strong`,{style:{display:`block`,marginBottom:4,color:`#a064ff`},children:`Globally Available`}),`Advancing precision health and genomic research through worldwide collaboration.`]})]})]})]})}),(0,A.jsxs)(`div`,{className:`shri-footer-bottom`,children:[(0,A.jsxs)(`p`,{children:[`© `,e,` Senus Healthcare Research Institute · 501(c)(3) Nonprofit`]}),(0,A.jsxs)(`p`,{className:`shri-build-info`,children:[`Version `,Cf]}),(0,A.jsxs)(`div`,{className:`shri-legal-links`,children:[(0,A.jsx)(`a`,{href:`#`,style:{color:`#fff`,textDecoration:`none`},children:`Privacy Policy`}),(0,A.jsx)(`a`,{href:`#`,style:{color:`#fff`,textDecoration:`none`},children:`Terms of Service`})]})]})]})]})},Tf=[{id:`jd-about`,label:`About SHRI-AI`},{id:`jd-role`,label:`The role`},{id:`jd-responsibilities`,label:`Key responsibilities`},{id:`jd-candidate`,label:`Ideal candidate`},{id:`jd-fit`,label:`What we look for`},{id:`jd-success`,label:`Success in this role`},{id:`jd-opportunity`,label:`Opportunity`}],Ef=()=>(0,A.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,A.jsx)(`path`,{d:`M19 12H5M12 19l-7-7 7-7`})}),Df=()=>(0,A.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:[(0,A.jsx)(`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`}),(0,A.jsx)(`path`,{d:`m2 7 10 6 10-6`})]}),Of=()=>(0,A.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,children:(0,A.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})}),kf=`hr@shri-ai.org`,Af=({job:e})=>{let t=(0,T.useRef)(null);(0,T.useEffect)(()=>{let n=document.title;return document.title=e?e.title+` — Careers | SHRI-AI`:`Role not found — Careers | SHRI-AI`,t.current?.focus({preventScroll:!0}),()=>{document.title=n}},[e]);let n=()=>hf(),r=e?`mailto:`+kf+`?subject=`+encodeURIComponent(`Application: `+e.title):`mailto:`+kf,i=(0,A.jsx)(`style`,{children:`
      .jd-root {
        min-height: 100dvh;
        background: var(--surface);
        font-family: var(--font-sans);
        color: var(--ink);
        display: flex;
        flex-direction: column;
      }

      /* ── Fixed bar ── */
      .jd-bar {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.8rem var(--gutter);
        background: rgba(255, 255, 255, 0.84);
        -webkit-backdrop-filter: blur(18px) saturate(140%);
        backdrop-filter: blur(18px) saturate(140%);
        border-bottom: 1px solid rgba(20, 20, 30, 0.07);
      }
      .jd-brand {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        background: none;
        border: 0;
        padding: 0;
        margin: 0;
        font: inherit;
        color: var(--ink);
        cursor: pointer;
        min-width: 0;
      }
      .jd-brand-mark {
        width: 30px; height: 30px;
        object-fit: contain;
        display: block;
        flex-shrink: 0;
      }
      .jd-brand-name {
        font-size: 0.95rem;
        font-weight: var(--fw-medium);
        letter-spacing: 0.01em;
        white-space: nowrap;
      }
      .jd-brand:focus-visible, .jd-back:focus-visible,
      .jd-apply:focus-visible, .jd-toc-link:focus-visible {
        outline: 2px solid #3A82C4;
        outline-offset: 3px;
        border-radius: 6px;
      }

      .jd-back {
        display: inline-flex;
        align-items: center;
        gap: 0.45rem;
        padding: 0.52rem 1rem;
        border-radius: 999px;
        border: 1px solid rgba(20, 20, 30, 0.14);
        background: var(--surface);
        color: var(--ink);
        font: inherit;
        font-size: var(--fs-xs);
        font-weight: var(--fw-medium);
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background 0.25s ease, border-color 0.25s ease;
      }
      .jd-back:hover {
        background: #f2f1ee;
        border-color: rgba(20, 20, 30, 0.24);
      }
      .jd-back svg { transition: transform 0.25s ease; }
      .jd-back:hover svg { transform: translateX(-2px); }

      /* ── Header band ──
       * Top padding clears the fixed bar (its own height plus its padding),
       * measured rather than guessed at: 30px mark + 0.8rem x 2 = ~56px.
       */
      .jd-hero {
        padding: calc(56px + clamp(2.25rem, 5vw, 4rem)) var(--gutter) clamp(2rem, 4vw, 3rem);
        background: var(--surface-alt);
        border-bottom: 1px solid rgba(20, 20, 30, 0.06);
      }
      .jd-hero-inner { max-width: 1100px; margin: 0 auto; }

      .jd-eyebrow {
        font-size: var(--fs-eyebrow);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        font-weight: var(--fw-medium);
        margin: 0 0 0.95rem;
      }
      .jd-title {
        font-size: clamp(1.6rem, 3.3vw, 2.85rem);
        font-weight: var(--fw-light);
        letter-spacing: -0.025em;
        line-height: 1.14;
        color: var(--ink);
        margin: 0 0 0.65rem;
        max-width: 32ch;
        text-wrap: balance;
      }
      .jd-title:focus { outline: none; }
      .jd-focus {
        font-size: var(--fs-lead);
        font-weight: var(--fw-light);
        color: var(--ink-soft);
        margin: 0 0 1.1rem;
      }
      .jd-summary {
        font-size: var(--fs-lead);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        margin: 0;
        max-width: var(--measure);
        text-wrap: pretty;
      }

      .jd-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 1.1rem clamp(1.5rem, 3vw, 2.75rem);
        margin-top: clamp(1.75rem, 3vw, 2.5rem);
        padding-top: clamp(1.25rem, 2.5vw, 1.75rem);
        border-top: 1px solid rgba(20, 20, 30, 0.09);
      }
      .jd-fact { min-width: 0; }
      .jd-fact-k {
        display: block;
        font-size: var(--fs-2xs);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        color: var(--ink-muted);
        margin-bottom: 0.3rem;
      }
      .jd-fact-v {
        display: block;
        font-size: var(--fs-sm);
        font-weight: var(--fw-regular);
        color: var(--ink);
      }

      /* ── Body ── */
      .jd-body {
        /* The gutter is added to the cap rather than eaten out of it, so the
           content box is the same 1100px as .jd-hero-inner and the index and
           the title share a left edge. */
        max-width: calc(1100px + var(--gutter) * 2);
        margin: 0 auto;
        width: 100%;
        padding: clamp(2.25rem, 5vw, 3.75rem) var(--gutter) clamp(3rem, 6vw, 5rem);
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: clamp(2rem, 4vw, 3.5rem);
      }
      /* The in-page index only appears where there is room for it beside the
         measure; below that it would push the text column too narrow. */
      .jd-toc { display: none; }
      @media (min-width: 1080px) {
        .jd-body { grid-template-columns: 190px minmax(0, 1fr); }
        .jd-toc {
          display: block;
          position: sticky;
          top: 96px;
          align-self: start;
        }
      }
      .jd-toc-title {
        font-size: var(--fs-2xs);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        color: var(--ink-muted);
        margin: 0 0 0.85rem;
      }
      .jd-toc-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.55rem;
      }
      .jd-toc-link {
        font-size: var(--fs-xs);
        font-weight: var(--fw-light);
        color: var(--ink-muted);
        text-decoration: none;
        line-height: 1.35;
        transition: color 0.22s ease;
      }
      .jd-toc-link:hover { color: var(--ink); }

      .jd-main { min-width: 0; }
      .jd-section {
        /* Matches the fixed bar so an index link never lands under it. */
        scroll-margin-top: 88px;
        margin: 0 0 clamp(2.25rem, 4vw, 3.25rem);
      }
      .jd-section:last-child { margin-bottom: 0; }
      .jd-h2 {
        font-size: clamp(1.1rem, 1.9vw, 1.45rem);
        font-weight: var(--fw-medium);
        letter-spacing: -0.015em;
        color: var(--ink);
        margin: 0 0 clamp(0.85rem, 1.6vw, 1.2rem);
      }
      .jd-p {
        font-size: var(--fs-body);
        font-weight: var(--fw-light);
        line-height: var(--lh-relaxed);
        color: var(--ink-soft);
        margin: 0 0 0.85rem;
        max-width: var(--measure);
        text-wrap: pretty;
      }
      .jd-p:last-child { margin-bottom: 0; }

      .jd-pipeline {
        display: block;
        font-size: var(--fs-sm);
        font-weight: var(--fw-regular);
        line-height: 1.7;
        color: var(--ink);
        margin: 0 0 1.3rem;
        padding: 0.85rem 1.05rem;
        border-radius: 12px;
        background: var(--surface-alt);
        border: 1px solid rgba(20, 20, 30, 0.07);
        max-width: var(--measure);
      }

      .jd-group { margin-bottom: clamp(1.5rem, 2.6vw, 2.1rem); }
      .jd-group:last-child { margin-bottom: 0; }
      .jd-group-head {
        display: flex;
        align-items: baseline;
        gap: 0.7rem;
        margin-bottom: 0.6rem;
      }
      .jd-group-n {
        font-size: var(--fs-xs);
        font-weight: var(--fw-medium);
        font-variant-numeric: tabular-nums;
        flex-shrink: 0;
      }
      .jd-group-t {
        font-size: 1rem;
        font-weight: var(--fw-medium);
        letter-spacing: -0.01em;
        color: var(--ink);
        line-height: 1.35;
      }
      .jd-lead {
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-soft);
        margin: 0 0 0.6rem;
        max-width: var(--measure);
      }

      /* Tailwind preflight already removes list markers; the dot is drawn so it
         stays aligned to the first line of a wrapped item. */
      .jd-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.42rem;
        max-width: var(--measure);
      }
      .jd-list li {
        position: relative;
        padding-left: 1.05rem;
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-soft);
      }
      .jd-list li::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.62em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: currentColor;
        opacity: 0.34;
      }

      .jd-note {
        margin: 0.85rem 0 0;
        padding-left: 0.9rem;
        border-left: 2px solid rgba(20, 20, 30, 0.14);
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        max-width: var(--measure);
      }

      .jd-sub {
        font-size: var(--fs-2xs);
        letter-spacing: var(--ls-eyebrow);
        text-transform: uppercase;
        color: var(--ink-muted);
        margin: clamp(1.35rem, 2.4vw, 1.9rem) 0 0.6rem;
      }
      .jd-sub:first-of-type { margin-top: 0; }

      .jd-fit {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: clamp(0.9rem, 1.8vw, 1.35rem);
        max-width: 780px;
      }
      .jd-fit-card {
        padding: clamp(1rem, 1.8vw, 1.35rem);
        border-radius: 14px;
        background: var(--surface-alt);
        border: 1px solid rgba(20, 20, 30, 0.07);
      }
      .jd-fit-rule {
        /* display:block is required: this is a span, and .jd-fit-card is not a
           flex container, so width/height would be ignored on an inline box.
           The same span works in Careers.jsx only because the card there is
           display:flex, which blockifies its children. */
        display: block;
        width: 24px; height: 2px;
        border-radius: 1px;
        margin-bottom: 0.8rem;
      }
      .jd-fit-t {
        display: block;
        font-size: var(--fs-sm);
        font-weight: var(--fw-medium);
        color: var(--ink);
        margin-bottom: 0.35rem;
      }
      .jd-fit-x {
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        margin: 0;
      }

      /* ── Closing call to action ── */
      .jd-cta {
        margin-top: clamp(2.25rem, 4.5vw, 3.5rem);
        padding: clamp(1.4rem, 3vw, 2.25rem);
        border-radius: 18px;
        background: var(--surface-alt);
        border: 1px solid rgba(20, 20, 30, 0.07);
        max-width: 780px;
      }
      .jd-cta-h {
        font-size: 1.05rem;
        font-weight: var(--fw-medium);
        color: var(--ink);
        margin: 0 0 0.5rem;
      }
      .jd-cta-p {
        font-size: var(--fs-sm);
        font-weight: var(--fw-light);
        line-height: var(--lh-body);
        color: var(--ink-muted);
        margin: 0 0 1.2rem;
        max-width: 56ch;
      }
      .jd-cta-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.7rem;
      }
      /* The address itself is the button: it is a credential to copy or click,
         not a call to action, so it keeps the monospace-ish tracking of an
         address rather than sentence styling. */
      .jd-apply {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.68rem 1.35rem;
        border-radius: 999px;
        border: 1px solid #23232e;
        background: #23232e;
        color: #ffffff;
        font: inherit;
        font-size: var(--fs-xs);
        font-weight: var(--fw-medium);
        letter-spacing: 0.015em;
        text-decoration: none;
        cursor: pointer;
        /* An address must never be broken across lines by a container. */
        white-space: nowrap;
        max-width: 100%;
        transition: background 0.25s ease, border-color 0.25s ease;
      }
      .jd-apply:hover { background: #35354a; border-color: #35354a; }
      .jd-apply svg { flex-shrink: 0; }

      .jd-foot {
        border-top: 1px solid rgba(20, 20, 30, 0.07);
        padding: clamp(1.1rem, 2.2vw, 1.6rem) var(--gutter);
        text-align: center;
        font-size: var(--fs-2xs);
        font-weight: var(--fw-light);
        color: var(--ink-muted);
        letter-spacing: 0.02em;
        margin-top: auto;
      }

      @media (max-width: 480px) {
        .jd-brand-name { display: none; }
        .jd-facts { gap: 0.95rem 1.5rem; }
      }

      @media (prefers-reduced-motion: reduce) {
        .jd-back, .jd-apply, .jd-back svg, .jd-toc-link {
          transition: none;
        }
        .jd-back:hover svg { transform: none; }
      }
    `}),a=(0,A.jsxs)(`div`,{className:`jd-bar`,children:[(0,A.jsxs)(`button`,{type:`button`,className:`jd-brand`,onClick:n,"aria-label":`SHRI-AI home`,children:[(0,A.jsx)(`img`,{className:`jd-brand-mark`,src:`/shri-ai-logo.webp`,alt:``,draggable:!1}),(0,A.jsx)(`span`,{className:`jd-brand-name`,children:`SHRI-AI`})]}),(0,A.jsxs)(`button`,{type:`button`,className:`jd-back`,onClick:n,children:[(0,A.jsx)(Ef,{}),`Back to home`]})]});if(!e)return(0,A.jsxs)(A.Fragment,{children:[i,(0,A.jsxs)(`div`,{className:`jd-root`,children:[a,(0,A.jsx)(`div`,{className:`jd-hero`,children:(0,A.jsxs)(`div`,{className:`jd-hero-inner`,children:[(0,A.jsx)(`p`,{className:`jd-eyebrow`,style:{color:`#9a9aab`},children:`Careers`}),(0,A.jsx)(`h1`,{className:`jd-title`,ref:t,tabIndex:-1,children:`This role is no longer listed`}),(0,A.jsx)(`p`,{className:`jd-summary`,children:`The link may be out of date. Return to the home page to see every role that is currently open.`}),(0,A.jsx)(`div`,{className:`jd-cta-row`,style:{marginTop:`1.75rem`},children:(0,A.jsxs)(`button`,{type:`button`,className:`jd-apply`,onClick:n,children:[`Back to home`,(0,A.jsx)(Of,{})]})})]})}),(0,A.jsx)(`p`,{className:`jd-foot`,children:`SHRI-AI — Senus Healthcare Research Institute`})]})]});let{position:o}=e,s=[[`Project`,o.project],[`Location`,o.location],[`Market`,o.market],[`Employment`,o.employment],[`Compensation`,o.compensation]];return(0,A.jsxs)(A.Fragment,{children:[i,(0,A.jsxs)(`div`,{className:`jd-root`,children:[a,(0,A.jsx)(`header`,{className:`jd-hero`,children:(0,A.jsxs)(`div`,{className:`jd-hero-inner`,children:[(0,A.jsx)(`p`,{className:`jd-eyebrow`,style:{color:e.accent},children:e.discipline}),(0,A.jsx)(`h1`,{className:`jd-title`,ref:t,tabIndex:-1,children:e.title}),e.focus&&(0,A.jsx)(`p`,{className:`jd-focus`,children:e.focus}),(0,A.jsx)(`p`,{className:`jd-summary`,children:e.summary}),(0,A.jsx)(`dl`,{className:`jd-facts`,children:s.map(([e,t])=>(0,A.jsxs)(`div`,{className:`jd-fact`,children:[(0,A.jsx)(`dt`,{className:`jd-fact-k`,children:e}),(0,A.jsx)(`dd`,{className:`jd-fact-v`,style:{margin:0},children:t})]},e))})]})}),(0,A.jsxs)(`div`,{className:`jd-body`,children:[(0,A.jsxs)(`nav`,{className:`jd-toc`,"aria-label":`On this page`,children:[(0,A.jsx)(`p`,{className:`jd-toc-title`,children:`On this page`}),(0,A.jsx)(`ul`,{className:`jd-toc-list`,children:Tf.map(e=>(0,A.jsx)(`li`,{children:(0,A.jsx)(`a`,{className:`jd-toc-link`,href:`#`+e.id,children:e.label})},e.id))})]}),(0,A.jsxs)(`main`,{className:`jd-main`,children:[(0,A.jsxs)(`section`,{className:`jd-section`,id:`jd-about`,children:[(0,A.jsx)(`h2`,{className:`jd-h2`,children:`About SHRI-AI`}),_f.map(e=>(0,A.jsx)(`p`,{className:`jd-p`,children:e},e.slice(0,24)))]}),(0,A.jsxs)(`section`,{className:`jd-section`,id:`jd-role`,children:[(0,A.jsx)(`h2`,{className:`jd-h2`,children:`The role`}),e.pipeline&&(0,A.jsx)(`span`,{className:`jd-pipeline`,style:{borderLeft:`3px solid `+e.accent},children:e.pipeline}),e.intro.map(e=>(0,A.jsx)(`p`,{className:`jd-p`,children:e},e.slice(0,24)))]}),(0,A.jsxs)(`section`,{className:`jd-section`,id:`jd-responsibilities`,children:[(0,A.jsx)(`h2`,{className:`jd-h2`,children:`Key responsibilities`}),e.responsibilities.map((t,n)=>(0,A.jsxs)(`div`,{className:`jd-group`,children:[(0,A.jsxs)(`div`,{className:`jd-group-head`,children:[(0,A.jsx)(`span`,{className:`jd-group-n`,style:{color:e.accent},children:String(n+1).padStart(2,`0`)}),(0,A.jsx)(`span`,{className:`jd-group-t`,children:t.title})]}),t.lead&&(0,A.jsx)(`p`,{className:`jd-lead`,children:t.lead}),(0,A.jsx)(`ul`,{className:`jd-list`,children:t.items.map(e=>(0,A.jsx)(`li`,{children:e},e))}),t.note&&(0,A.jsx)(`p`,{className:`jd-note`,children:t.note})]},t.title))]}),(0,A.jsxs)(`section`,{className:`jd-section`,id:`jd-candidate`,children:[(0,A.jsx)(`h2`,{className:`jd-h2`,children:`Ideal candidate`}),(0,A.jsx)(`p`,{className:`jd-sub`,children:`Education`}),(0,A.jsx)(`ul`,{className:`jd-list`,children:e.education.map(e=>(0,A.jsx)(`li`,{children:e},e))}),(0,A.jsx)(`p`,{className:`jd-sub`,children:`Required skills`}),(0,A.jsx)(`ul`,{className:`jd-list`,children:e.requiredSkills.map(e=>(0,A.jsx)(`li`,{children:e},e))}),(0,A.jsx)(`p`,{className:`jd-sub`,children:`Preferred experience`}),(0,A.jsx)(`p`,{className:`jd-lead`,children:`Experience in one or more of the following is an advantage:`}),(0,A.jsx)(`ul`,{className:`jd-list`,children:e.preferredExp.map(e=>(0,A.jsx)(`li`,{children:e},e))})]}),(0,A.jsxs)(`section`,{className:`jd-section`,id:`jd-fit`,children:[(0,A.jsx)(`h2`,{className:`jd-h2`,children:`What we are looking for`}),(0,A.jsx)(`div`,{className:`jd-fit`,children:e.lookingFor.map(t=>(0,A.jsxs)(`div`,{className:`jd-fit-card`,children:[(0,A.jsx)(`span`,{className:`jd-fit-rule`,style:{background:e.accent},"aria-hidden":`true`}),(0,A.jsx)(`span`,{className:`jd-fit-t`,children:t.title}),(0,A.jsx)(`p`,{className:`jd-fit-x`,children:t.text})]},t.title))}),e.lookingForNote&&(0,A.jsx)(`p`,{className:`jd-note`,children:e.lookingForNote})]}),(0,A.jsxs)(`section`,{className:`jd-section`,id:`jd-success`,children:[(0,A.jsx)(`h2`,{className:`jd-h2`,children:`Success in this role`}),(0,A.jsx)(`p`,{className:`jd-lead`,children:`You will be successful in this role if you can:`}),(0,A.jsx)(`ul`,{className:`jd-list`,children:e.success.map(e=>(0,A.jsx)(`li`,{children:e},e))})]}),(0,A.jsxs)(`section`,{className:`jd-section`,id:`jd-opportunity`,children:[(0,A.jsx)(`h2`,{className:`jd-h2`,children:`Opportunity`}),e.opportunity.map(e=>(0,A.jsx)(`p`,{className:`jd-p`,children:e},e.slice(0,24))),(0,A.jsxs)(`div`,{className:`jd-cta`,children:[(0,A.jsx)(`p`,{className:`jd-cta-h`,children:`Interested in this role?`}),(0,A.jsx)(`p`,{className:`jd-cta-p`,children:`Send your CV and a short note about your background to our recruitment address. Please keep the role in the subject line.`}),(0,A.jsxs)(`div`,{className:`jd-cta-row`,children:[(0,A.jsxs)(`a`,{className:`jd-apply`,href:r,children:[(0,A.jsx)(Df,{}),kf]}),(0,A.jsxs)(`button`,{type:`button`,className:`jd-back`,onClick:n,children:[(0,A.jsx)(Ef,{}),`Back to home`]})]})]})]})]})]}),(0,A.jsx)(`p`,{className:`jd-foot`,children:`SHRI-AI — Senus Healthcare Research Institute`})]})]})},jf=[{id:`doctor`,label:`Doctor`,desc:`Patient records, consultations and care notes.`,Icon:et,accent:`#3A82C4`,accentRgb:`58, 130, 196`,demoUrl:null},{id:`pharma`,label:`Pharma`,desc:`Prescriptions, dispensing and medicine stock.`,Icon:We,accent:`#7B6FCD`,accentRgb:`123, 111, 205`,demoUrl:null},{id:`procurement`,label:`Procurement`,desc:`Purchase orders, vendors and supply tracking.`,Icon:He,accent:`#a8690f`,accentRgb:`168, 105, 15`,demoUrl:null},{id:`laboratory`,label:`Laboratory Management`,desc:`Samples, tests and result reporting.`,Icon:k,accent:`#1f9163`,accentRgb:`31, 145, 99`,demoUrl:null}],Mf=()=>{let[e,t]=(0,T.useState)(()=>new Set),n=(0,T.useRef)(null);(0,T.useEffect)(()=>{let e=document.title;return document.title=`SHRI-Health | SHRI-AI`,n.current?.focus({preventScroll:!0}),()=>{document.title=e}},[]);let r=e=>t(t=>new Set(t).add(e));return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`style`,{children:`
        .sh-root {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(ellipse 70% 50% at 50% 0%, rgba(31, 145, 99, 0.07), transparent 70%),
            var(--surface);
          font-family: var(--font-sans);
          color: var(--ink);
        }

        .sh-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem var(--gutter);
          border-bottom: 1px solid rgba(20, 20, 30, 0.07);
        }
        .sh-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--ink);
          text-decoration: none;
          min-width: 0;
        }
        .sh-brand img { width: 30px; height: 30px; object-fit: contain; display: block; flex-shrink: 0; }
        .sh-brand span {
          font-size: 0.95rem;
          font-weight: var(--fw-medium);
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .sh-back {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.52rem 1rem;
          border-radius: 999px;
          border: 1px solid rgba(20, 20, 30, 0.14);
          color: var(--ink);
          text-decoration: none;
          font-size: var(--fs-xs);
          font-weight: var(--fw-medium);
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .sh-back:hover { background: #f2f1ee; border-color: rgba(20, 20, 30, 0.24); }

        .sh-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: clamp(3rem, 8vw, 6rem) var(--gutter);
        }
        .sh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #1f9163;
          font-weight: var(--fw-medium);
          margin: 0 0 1rem;
          padding: 0.4rem 0.85rem;
          border-radius: 999px;
          background: rgba(31, 145, 99, 0.08);
        }
        .sh-title {
          font-weight: 300;
          font-size: clamp(2.4rem, 6vw, 4rem);
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin: 0 0 1rem;
          outline: none;
        }
        .sh-lede {
          font-weight: 300;
          font-size: clamp(0.95rem, 1.4vw, 1.1rem);
          line-height: 1.65;
          color: var(--ink-muted);
          max-width: 44ch;
          margin: 0 0 clamp(2.5rem, 5vw, 3.5rem);
        }

        .sh-modules {
          width: min(100%, 1180px);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(0.85rem, 1.6vw, 1.25rem);
        }
        .sh-module {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          overflow: hidden;
          padding: calc(clamp(1.35rem, 2.2vw, 1.7rem) + 5px) clamp(1.25rem, 2vw, 1.6rem) clamp(1.35rem, 2.2vw, 1.7rem);
          text-align: left;
          background:
            linear-gradient(to bottom, rgba(var(--m-accent-rgb), 0.07), rgba(var(--m-accent-rgb), 0) 50%),
            #fff;
          border: 1px solid rgba(20, 20, 30, 0.08);
          border-radius: 18px;
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 10px 26px rgba(20, 20, 30, 0.05);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
        }
        .sh-module::before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          height: 5px;
          background: var(--m-accent);
        }
        .sh-module:hover {
          transform: translateY(-4px);
          box-shadow: 0 1px 2px rgba(20, 20, 30, 0.04), 0 20px 44px rgba(var(--m-accent-rgb), 0.16);
        }
        .sh-module-icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--m-accent);
          background: rgba(var(--m-accent-rgb), 0.12);
          margin-bottom: 1.1rem;
        }
        .sh-module-label {
          font-size: clamp(1.05rem, 1.35vw, 1.2rem);
          font-weight: var(--fw-medium);
          letter-spacing: -0.015em;
          line-height: 1.25;
          margin: 0 0 0.4rem;
          overflow-wrap: anywhere;
        }
        .sh-module-desc {
          font-size: 0.84rem;
          font-weight: 300;
          color: var(--ink-muted);
          line-height: 1.55;
          margin: 0 0 1.4rem;
        }
        .sh-demo {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.6rem 1.05rem;
          border-radius: 999px;
          border: 0;
          font: inherit;
          font-size: 0.8rem;
          font-weight: var(--fw-medium);
          color: #fff;
          background: var(--m-accent);
          text-decoration: none;
          cursor: pointer;
          transition: filter 0.25s ease, background 0.25s ease, color 0.25s ease;
        }
        .sh-demo svg { transition: transform 0.25s ease; }
        .sh-demo:hover { filter: brightness(1.08); }
        .sh-demo:hover svg { transform: translateX(3px); }
        .sh-demo[data-soon='true'] {
          color: color-mix(in srgb, var(--m-accent) 72%, #000);
          background: rgba(var(--m-accent-rgb), 0.12);
          cursor: default;
        }
        .sh-demo[data-soon='true']:hover { filter: none; }
        .sh-demo[data-soon='true']:hover svg { transform: none; }
        /* The button's own label already changes, so the status line is
           for screen readers only. */
        .sh-note {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }

        .sh-demo:focus-visible, .sh-back:focus-visible, .sh-brand:focus-visible {
          outline: 2px solid #3A82C4;
          outline-offset: 3px;
        }

        .sh-foot {
          padding: 1.25rem var(--gutter);
          text-align: center;
          font-size: 0.75rem;
          color: #9a9aab;
          border-top: 1px solid rgba(20, 20, 30, 0.06);
        }

        @media (max-width: 1000px) {
          .sh-modules { grid-template-columns: repeat(2, minmax(0, 1fr)); width: min(100%, 720px); }
        }
        @media (max-width: 560px) {
          .sh-modules { grid-template-columns: minmax(0, 1fr); width: min(100%, 420px); }
        }
        @media (max-width: 380px) {
          .sh-brand span { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sh-module, .sh-back, .sh-demo, .sh-demo svg { transition: none; }
          .sh-module:hover, .sh-demo:hover svg { transform: none; }
        }
      `}),(0,A.jsxs)(`div`,{className:`sh-root`,children:[(0,A.jsxs)(`header`,{className:`sh-bar`,children:[(0,A.jsxs)(`a`,{className:`sh-brand`,href:`/`,"aria-label":`SHRI-AI home`,children:[(0,A.jsx)(`img`,{src:`/shri-ai-logo.webp`,alt:``,draggable:!1}),(0,A.jsx)(`span`,{children:`SHRI-AI`})]}),(0,A.jsxs)(`a`,{className:`sh-back`,href:`/`,children:[(0,A.jsx)(de,{size:14,strokeWidth:2,"aria-hidden":`true`}),`Back to SHRI-AI`]})]}),(0,A.jsxs)(`main`,{className:`sh-main`,children:[(0,A.jsx)(`p`,{className:`sh-eyebrow`,children:`A product of SHRI-AI`}),(0,A.jsx)(`h1`,{className:`sh-title`,ref:n,tabIndex:-1,children:`SHRI-Health`}),(0,A.jsx)(`p`,{className:`sh-lede`,children:`One connected care platform for doctors, pharma, procurement and laboratory management.`}),(0,A.jsx)(`div`,{className:`sh-modules`,children:jf.map(({id:t,label:n,desc:i,Icon:a,accent:o,accentRgb:s,demoUrl:c})=>{let l=e.has(t);return(0,A.jsxs)(`article`,{className:`sh-module`,style:{"--m-accent":o,"--m-accent-rgb":s},children:[(0,A.jsx)(`span`,{className:`sh-module-icon`,"aria-hidden":`true`,children:(0,A.jsx)(a,{size:22,strokeWidth:1.7})}),(0,A.jsx)(`h2`,{className:`sh-module-label`,children:n}),(0,A.jsx)(`p`,{className:`sh-module-desc`,children:i}),c?(0,A.jsxs)(`a`,{className:`sh-demo`,href:c,"aria-label":`View ${n} demo`,children:[`View Demo`,(0,A.jsx)(pe,{size:14,strokeWidth:2,"aria-hidden":`true`})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(`button`,{type:`button`,className:`sh-demo`,"data-soon":l,"aria-label":`View ${n} demo`,onClick:()=>r(t),children:[l?`Demo coming soon`:`View Demo`,!l&&(0,A.jsx)(pe,{size:14,strokeWidth:2,"aria-hidden":`true`})]}),(0,A.jsx)(`p`,{className:`sh-note`,role:`status`,"aria-live":`polite`,children:l&&`Demo launching soon.`})]})]},t)})})]}),(0,A.jsx)(`footer`,{className:`sh-foot`,children:`SHRI-Health is a product of SHRI-AI, Senus Healthcare Research Institute.`})]})]})};function Nf(){let e=(0,T.useRef)(null),t=(0,T.useRef)(null),n=(0,T.useRef)(null),[r,i]=(0,T.useState)(df),[a]=(0,T.useState)(cf),o=(0,T.useRef)(!1);return(0,T.useEffect)(()=>{let e=()=>i(df());window.addEventListener(lf,e),window.addEventListener(`popstate`,e);let t=window.history.scrollRestoration;return t&&(window.history.scrollRestoration=`manual`),()=>{window.removeEventListener(lf,e),window.removeEventListener(`popstate`,e),t&&(window.history.scrollRestoration=t)}},[]),(0,T.useEffect)(()=>{let r=e.current,i=t.current,a=n.current;if(!r||!i||!a)return;let o=null,s=0,c=()=>{let e=i.offsetHeight+a.offsetHeight;e!==s&&(r.style.height=`${e}px`,s=e)},l=()=>{o=null,c();let e=r.getBoundingClientRect(),t=i.offsetHeight,n=Math.max(0,-e.top),s=Math.min(1,n/t);a.style.transform=`translateY(${(1-s)*100}%)`},u=()=>{o||=requestAnimationFrame(l)},d=()=>{c(),l()},f=new ResizeObserver(()=>{o||=requestAnimationFrame(l)});return f.observe(i),f.observe(a),c(),l(),window.addEventListener(`scroll`,u,{passive:!0}),window.addEventListener(`resize`,d,{passive:!0}),()=>{window.removeEventListener(`scroll`,u),window.removeEventListener(`resize`,d),f.disconnect(),o&&cancelAnimationFrame(o)}},[r]),(0,T.useEffect)(()=>{if(r){Z(0);return}let e=gf();e!==null&&Z(e)},[r]),(0,T.useEffect)(()=>{if(r||o.current)return;let e=pf();if(!e)return;o.current=!0;let t=!1,n=null,i=()=>{let t=ut(e);t!==null&&(n=t,Z(t))},a=()=>{t=!0},s=()=>{n!==null&&Math.abs(window.scrollY-n)>40&&(t=!0)},c={passive:!0};return window.addEventListener(`wheel`,a,c),window.addEventListener(`touchstart`,a,c),window.addEventListener(`keydown`,a,c),window.addEventListener(`scroll`,s,c),i(),document.fonts.ready.then(()=>{t||requestAnimationFrame(()=>{t||i()})}),()=>{window.removeEventListener(`wheel`,a,c),window.removeEventListener(`touchstart`,a,c),window.removeEventListener(`keydown`,a,c),window.removeEventListener(`scroll`,s,c)}},[r]),a===`shri-health`?(0,A.jsx)(Mf,{}):r?(0,A.jsx)(Af,{job:bf(r)}):(0,A.jsxs)(`div`,{className:`min-h-screen bg-white`,children:[(0,A.jsx)(mt,{}),(0,A.jsx)(`section`,{id:`hero`,children:(0,A.jsx)(Xd,{})}),(0,A.jsxs)(`div`,{ref:e,style:{position:`relative`,overflow:`clip`},children:[(0,A.jsx)(`div`,{ref:t,id:`about`,style:{position:`sticky`,top:0,zIndex:1},children:(0,A.jsx)(Zd,{})}),(0,A.jsx)(`div`,{ref:n,id:`focus`,style:{position:`sticky`,top:0,zIndex:2,willChange:`transform`,minHeight:`max-content`},children:(0,A.jsx)($d,{})})]}),(0,A.jsx)(nf,{}),(0,A.jsx)(xf,{}),(0,A.jsx)(`footer`,{id:`footer`,children:(0,A.jsx)(wf,{})})]})}at.createRoot(document.getElementById(`root`)).render((0,A.jsx)(T.StrictMode,{children:(0,A.jsx)(Nf,{})}));