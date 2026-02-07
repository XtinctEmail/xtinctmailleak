(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,233525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},998183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={assign:function(){return l},searchParamsToUrlQuery:function(){return a},urlQueryToSearchParams:function(){return s}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});function a(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,i(e));else t.set(r,i(o));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}},195057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(190809)._(e.r(998183)),i=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,o=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(a.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||i.test(o))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${o}${c}${n}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(271645);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,o)),t&&(n.current=a(t,o))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},718967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return k},NormalizeError:function(){return x},PageNotFoundError:function(){return j},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return a},execOnce:function(){return i},getDisplayName:function(){return p},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return m},stringifyError:function(){return y}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let t,r=!1;return(...o)=>(r||(r=!0,t=e(...o)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function d(){let{href:e}=window.location,t=c();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function m(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&u(r))return o;if(!o)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class x extends Error{}class j extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class k extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},573668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let o=e.r(718967),n=e.r(652817);function a(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},284508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},522016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return b},useLinkStatus:function(){return j}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(190809),i=e.r(843476),s=a._(e.r(271645)),l=e.r(195057),c=e.r(8372),d=e.r(818581),p=e.r(718967),u=e.r(405550);e.r(233525);let m=e.r(91949),f=e.r(573668),h=e.r(509396);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function b(t){var r;let o,n,a,[l,b]=(0,s.useOptimistic)(m.IDLE_LINK_STATUS),j=(0,s.useRef)(null),{href:k,as:v,children:y,prefetch:w=null,passHref:E,replace:S,shallow:N,scroll:P,onClick:T,onMouseEnter:M,onTouchStart:O,legacyBehavior:_=!1,onNavigate:C,ref:L,unstable_dynamicOnHover:R,...z}=t;o=y,_&&("string"==typeof o||"number"==typeof o)&&(o=(0,i.jsx)("a",{children:o}));let A=s.default.useContext(c.AppRouterContext),F=!1!==w,J=!1!==w?null===(r=w)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:$,as:I}=s.default.useMemo(()=>{let e=g(k);return{href:e,as:v?g(v):e}},[k,v]);if(_){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let D=_?n&&"object"==typeof n&&n.ref:L,U=s.default.useCallback(e=>(null!==A&&(j.current=(0,m.mountLinkInstance)(e,$,A,J,F,b)),()=>{j.current&&((0,m.unmountLinkForCurrentNavigation)(j.current),j.current=null),(0,m.unmountPrefetchableInstance)(e)}),[F,$,A,J,b]),B={ref:(0,d.useMergedRef)(U,D),onClick(t){_||"function"!=typeof T||T(t),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!A||t.defaultPrevented||function(t,r,o,n,a,i,l){if("undefined"!=typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(699781);s.default.startTransition(()=>{p(o||r,a?"replace":"push",i??!0,n.current)})}}(t,$,I,j,S,P,C)},onMouseEnter(e){_||"function"!=typeof M||M(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){_||"function"!=typeof O||O(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&F&&(0,m.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,p.isAbsoluteUrl)(I)?B.href=I:_&&!E&&("a"!==n.type||"href"in n.props)||(B.href=(0,u.addBasePath)(I)),a=_?s.default.cloneElement(n,B):(0,i.jsx)("a",{...z,...B,children:o}),(0,i.jsx)(x.Provider,{value:l,children:a})}e.r(284508);let x=(0,s.createContext)(m.IDLE_LINK_STATUS),j=()=>(0,s.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},95187,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={callServer:function(){return a.callServer},createServerReference:function(){return s.createServerReference},findSourceMapURL:function(){return i.findSourceMapURL}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let a=e.r(132120),i=e.r(92245),s=e.r(235326)},875296,e=>{"use strict";e.s(["FEATURE_ATTACHMENTS",0,!0,"FEATURE_JEDDIT",0,!1,"FEATURE_JEMINI",0,!0,"FEATURE_YAHOO_INBOX",0,!0])},240588,e=>{"use strict";var t=e.i(843476),r=e.i(522016),o=e.i(618566),n=e.i(271645),a=e.i(875296);let i=(0,n.createContext)({setImmersiveMode:()=>{},isImmersive:!1});function s(){return(0,n.useContext)(i)}let l=[{name:"Jmail",icon:"/app-icons/jmail-app.png",href:"/",isNew:!1},{name:"JPhotos",icon:"/app-icons/jphotos-app.png",href:"/photos",isNew:!1},{name:"JDrive",icon:"/app-icons/jdrive-app.png",href:"/drive/new-only",isNew:!1},{name:"JFlights",icon:"/app-icons/jflights-app.png",href:"/flights",isNew:!1},{name:"JVR",icon:"/app-icons/jvr-app.png",href:"/vr",isNew:!1},{name:"Jamazon",icon:"/app-icons/jamazon-app.png",href:"/jamazon",isNew:!1},{name:"Jemini",icon:"/app-icons/jemini.png",href:"/jemini",isNew:!1},{name:"Jotify",icon:"/app-icons/jotify-app.png",href:"/jotify",isNew:!1},{name:"JMessage",icon:"/app-icons/jmessage_final.png",href:"/messages",isNew:!0},{name:"Jacebook",icon:"/jacebook-logo.png",href:"/jacebook",isNew:!1},{name:"Jeddit",icon:"/app-icons/jeddit-app.svg",href:"/jeddit",isNew:!1,flag:a.FEATURE_JEDDIT}].filter(e=>!1!==e.flag),c=l.slice(0,4),d=l.slice(4),p=`
  .jmail-dock {
    position: fixed;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 12px;
    background: rgba(200, 200, 210, 0.35);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border-radius: 20px;
    box-shadow: 
      inset 0 0.5px 0 0 rgba(255, 255, 255, 0.4),
      0 0 0 0.5px rgba(0, 0, 0, 0.08);
    z-index: 9999;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  }
  
  .jmail-dock.collapsed {
    transform: translateX(-50%) translateY(calc(100% + 20px));
    opacity: 0;
    pointer-events: none;
  }
  
  .jmail-dock-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    padding: 2px;
  }
  
  .jmail-dock-item:hover {
    transform: translateY(-6px) scale(1.15);
  }
  
  .jmail-dock-icon-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: transparent;
  }
  
  /* macOS-style icons */
  .jmail-dock-icon {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    object-fit: contain;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.08));
    transition: all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  /* Active/selected icon is larger */
  .jmail-dock-item.active .jmail-dock-icon {
    width: 48px;
    height: 48px;
    border-radius: 11px;
  }
  
  .jmail-dock-new-tag {
    position: absolute;
    top: -4px;
    right: -6px;
    background: #ff3b30;
    color: white;
    font-size: 10px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    line-height: 1;
    border: 2px solid rgba(245, 245, 247, 0.9);
  }
  
  /* macOS indicator dot - inside dock below icon */
  .jmail-dock-indicator {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    margin-top: 4px;
    opacity: 0;
    transition: opacity 0.15s ease;
  }
  
  .jmail-dock-item.active .jmail-dock-indicator {
    opacity: 1;
  }
  
  /* Desktop labels - exact macOS Sonoma style tooltip */
  .jmail-dock-label {
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%) translateY(2px);
    background: rgba(40, 40, 40, 0.95);
    color: rgba(255, 255, 255, 0.95);
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.1s ease-out;
    box-shadow: 
      0 0 0 0.5px rgba(255, 255, 255, 0.1),
      0 2px 12px rgba(0, 0, 0, 0.4),
      0 0 1px rgba(0, 0, 0, 0.3);
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    border: 0.5px solid rgba(255, 255, 255, 0.08);
  }
  
  .jmail-dock-label::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: rgba(40, 40, 40, 0.95);
  }
  
  .jmail-dock-item:hover .jmail-dock-label {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  
  /* Hide labels on mobile - dock no longer needs horizontal scroll with folder */
  @media (max-width: 900px) {
    .jmail-dock-label {
      display: none;
    }
  }
  
  /* Safe area padding for devices with home indicator */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    .jmail-dock {
      bottom: max(4px, calc(env(safe-area-inset-bottom) + 2px));
    }
  }
  
  /* Mobile adjustments */
  @media (max-width: 900px) {
    .jmail-dock {
      bottom: 6px;
      gap: 6px;
      padding: 4px 8px;
      border-radius: 16px;
    }
    
    .jmail-dock-item:hover {
      transform: none;
    }
    
    .jmail-dock-icon {
      width: 34px;
      height: 34px;
      border-radius: 8px;
    }
    
    .jmail-dock-item.active .jmail-dock-icon {
      width: 40px;
      height: 40px;
      border-radius: 9px;
    }
    
    .jmail-dock-new-tag {
      font-size: 9px;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      border-radius: 8px;
      top: -3px;
      right: -5px;
      border-width: 1.5px;
    }
    
    .jmail-dock-indicator {
      width: 3px;
      height: 3px;
      margin-top: 3px;
    }
    
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
      .jmail-dock {
        bottom: max(8px, calc(env(safe-area-inset-bottom) + 2px));
      }
    }
  }
  
  /* Extra small mobile */
  @media (max-width: 380px) {
    .jmail-dock {
      gap: 4px;
      padding: 3px 6px;
    }
    
    .jmail-dock-icon {
      width: 30px;
      height: 30px;
      border-radius: 7px;
    }
    
    .jmail-dock-item.active .jmail-dock-icon {
      width: 34px;
      height: 34px;
      border-radius: 8px;
    }
  }
  
  /* Hover zone for auto-hide mode (macOS-style) */
  .jmail-dock-hover-zone {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 15px;
    z-index: 9998;
    pointer-events: auto;
  }

  /* iOS-style home indicator for mobile immersive mode */
  .jmail-dock-home-indicator {
    position: fixed;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 134px;
    height: 5px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
    z-index: 9998;
    cursor: pointer;
    display: none;
    transition: opacity 0.2s ease;
  }

  .jmail-dock-home-indicator:active {
    opacity: 0.6;
  }

  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    .jmail-dock-home-indicator {
      bottom: max(8px, calc(env(safe-area-inset-bottom) + 4px));
    }
  }

  /* Invisible backdrop to dismiss dock on mobile tap-away */
  .jmail-dock-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9997;
    background: transparent;
  }

  /* More Apps folder button */
  .jmail-dock-more-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    padding: 2px;
    cursor: pointer;
    background: none;
    border: none;
  }

  .jmail-dock-more-button:hover {
    transform: translateY(-6px) scale(1.15);
  }

  .jmail-dock-more-icon {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    background: linear-gradient(145deg, rgba(120, 120, 140, 0.7), rgba(80, 80, 100, 0.8));
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 3px;
    padding: 8px;
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .jmail-dock-more-button.open .jmail-dock-more-icon {
    background: linear-gradient(145deg, rgba(100, 100, 120, 0.9), rgba(60, 60, 80, 0.95));
  }

  .jmail-dock-more-dot {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    background: rgba(255, 255, 255, 0.85);
  }

  .jmail-dock-more-button:hover .jmail-dock-label {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .jmail-dock-more-button.open .jmail-dock-label {
    opacity: 0 !important;
    pointer-events: none;
  }

  /* Folder popover container */
  .jmail-dock-folder-container {
    position: relative;
  }

  /* Folder popover */
  .jmail-dock-folder-popover {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) scale(0.9);
    transform-origin: bottom center;
    background: rgba(220, 220, 225, 0.95);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border-radius: 16px;
    padding: 12px;
    box-shadow: 
      inset 0 0.5px 0 0 rgba(255, 255, 255, 0.5),
      0 0 0 0.5px rgba(0, 0, 0, 0.1),
      0 8px 32px rgba(0, 0, 0, 0.25),
      0 2px 8px rgba(0, 0, 0, 0.15);
    opacity: 0;
    pointer-events: none;
    transition: 
      opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 10000;
  }

  .jmail-dock-folder-popover.open {
    opacity: 1;
    transform: translateX(-50%) scale(1);
    pointer-events: auto;
  }

  /* Arrow pointing to folder icon */
  .jmail-dock-folder-arrow {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(220, 220, 225, 0.75);
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
  }

  /* Grid layout for apps */
  .jmail-dock-folder-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
  }

  /* Folder item styling */
  .jmail-dock-folder-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    padding: 8px 6px;
    border-radius: 10px;
    transition: background 0.15s ease;
    min-width: 64px;
  }

  .jmail-dock-folder-item:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .jmail-dock-folder-item:active {
    background: rgba(255, 255, 255, 0.3);
  }

  .jmail-dock-folder-icon-wrapper {
    position: relative;
    margin-bottom: 4px;
  }

  .jmail-dock-folder-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
  }

  .jmail-dock-folder-item.active .jmail-dock-folder-icon {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  .jmail-dock-folder-name {
    font-size: 11px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 60px;
    text-shadow: 0 0.5px 0 rgba(255, 255, 255, 0.5);
  }

  .jmail-dock-folder-new-tag {
    position: absolute;
    top: -3px;
    right: -5px;
    background: #ff3b30;
    color: white;
    font-size: 8px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
    min-width: 14px;
    height: 14px;
    padding: 0 3px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    line-height: 1;
    border: 1.5px solid rgba(245, 245, 247, 0.9);
  }

  /* Badge on more button showing new apps count */
  .jmail-dock-more-badge {
    position: absolute;
    top: -4px;
    right: -6px;
    background: #ff3b30;
    color: white;
    font-size: 10px;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif;
    min-width: 18px;
    height: 18px;
    padding: 0 5px;
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    line-height: 1;
    border: 2px solid rgba(245, 245, 247, 0.9);
  }

  /* Mobile styles for folder */
  @media (max-width: 900px) {
    .jmail-dock-more-button:hover {
      transform: none;
    }

    .jmail-dock-more-icon {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      gap: 2px;
      padding: 6px;
    }

    .jmail-dock-more-badge {
      font-size: 9px;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      border-radius: 8px;
      top: -3px;
      right: -5px;
      border-width: 1.5px;
    }

    .jmail-dock-folder-popover {
      padding: 10px;
      border-radius: 14px;
      bottom: calc(100% + 10px);
    }

    .jmail-dock-folder-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
    }

    .jmail-dock-folder-item {
      padding: 6px 4px;
      border-radius: 8px;
      min-width: 56px;
    }

    .jmail-dock-folder-icon {
      width: 38px;
      height: 38px;
      border-radius: 8px;
    }

    .jmail-dock-folder-name {
      font-size: 10px;
      max-width: 52px;
    }

    .jmail-dock-folder-new-tag {
      font-size: 7px;
      min-width: 12px;
      height: 12px;
      padding: 0 2px;
      border-radius: 6px;
      top: -2px;
      right: -4px;
    }
  }

  /* Extra small mobile */
  @media (max-width: 380px) {
    .jmail-dock-more-icon {
      width: 30px;
      height: 30px;
      border-radius: 7px;
      gap: 2px;
      padding: 5px;
    }

    .jmail-dock-folder-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
    }

    .jmail-dock-folder-item {
      min-width: 48px;
      padding: 5px 3px;
    }

    .jmail-dock-folder-icon {
      width: 32px;
      height: 32px;
    }

    .jmail-dock-folder-name {
      font-size: 9px;
      max-width: 46px;
    }
  }

  /* Backdrop for folder popover */
  .jmail-dock-folder-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9998;
    background: transparent;
  }
`;function u({children:e}){let r=(0,o.usePathname)(),a=e=>e.startsWith("/messages")||e.startsWith("/jemini"),[s,l]=(0,n.useState)(a(r));(0,n.useEffect)(()=>{l(a(r))},[r]);let c=(0,n.useCallback)(e=>{l(e)},[]);return(0,t.jsx)(i.Provider,{value:{setImmersiveMode:c,isImmersive:s},children:e})}function m(){let e=(0,o.usePathname)(),{isImmersive:a}=(0,n.useContext)(i),[s,l]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1),[f,h]=(0,n.useState)(!1),[g,b]=(0,n.useState)(!1),x=(0,n.useRef)(0),j=(0,n.useRef)(null),k=(0,n.useRef)(null),v=(0,n.useRef)(null);(0,n.useEffect)(()=>{let e=()=>{h(window.matchMedia("(max-width: 900px)").matches)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.useEffect)(()=>()=>{j.current&&clearTimeout(j.current)},[]);let y=(0,n.useCallback)(()=>{a&&(j.current&&(clearTimeout(j.current),j.current=null),m(!0))},[a]),w=(0,n.useCallback)(()=>{a&&(j.current=setTimeout(()=>{m(!1)},300))},[a]);(0,n.useEffect)(()=>{if(a)return;let e=new Map,t=t=>{let r;if("isTrusted"in t&&!t.isTrusted)return;let o=t.target;if(o===document||o===document.documentElement)r=window.scrollY||document.documentElement.scrollTop;else{if(!(o instanceof HTMLElement))return;r=o.scrollTop}let n=r-(e.get(o)||0);Math.abs(n)>10&&(n>0&&r>50?l(!0):n<0&&l(!1),e.set(o,r))},r=e=>{if(!e.isTrusted||2>Math.abs(e.deltaY))return;let t=(e=>{let t=e instanceof HTMLElement?e:e?.parentElement??null;for(;t&&t!==document.body;){let e=window.getComputedStyle(t).overflowY;if(("auto"===e||"scroll"===e)&&t.scrollHeight>t.clientHeight+1)return t;t=t.parentElement}return document.scrollingElement??null})(e.target),r=t?t.scrollTop:window.scrollY||0;e.deltaY>0&&r>50?l(!0):e.deltaY<0&&l(!1)};window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("wheel",r,{passive:!0}),document.addEventListener("scroll",t,{passive:!0,capture:!0});let o=[],n=()=>{o.forEach(e=>e.removeEventListener("scroll",t)),o.length=0,document.querySelectorAll(".gmail-content,.jemini-panel-content,.jemini-messages,.jemini-fullscreen-layout").forEach(e=>{o.push(e),e.addEventListener("scroll",t,{passive:!0})})};n();let i=new MutationObserver(()=>n());return i.observe(document.body,{childList:!0,subtree:!0}),()=>{window.removeEventListener("scroll",t),window.removeEventListener("wheel",r),document.removeEventListener("scroll",t,{capture:!0}),o.forEach(e=>e.removeEventListener("scroll",t)),i.disconnect()}},[a]),(0,n.useEffect)(()=>{l(!1),m(!1),b(!1),x.current=0},[e]),(0,n.useEffect)(()=>{if(!g)return;let e=e=>{let t=e.target;k.current&&!k.current.contains(t)&&v.current&&!v.current.contains(t)&&b(!1)},t=e=>{"Escape"===e.key&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("keydown",t)}},[g]);let E=a?!u:s,S=e.startsWith("/photos")?"JPhotos":e.startsWith("/drive")?"JDrive":e.startsWith("/messages")?"JMessage":e.startsWith("/flights")?"JFlights":e.startsWith("/jamazon")?"Jamazon":e.startsWith("/vr")?"JVR":e.startsWith("/jotify")?"Jotify":e.startsWith("/jemini")?"Jemini":e.startsWith("/jacebook")?"Jacebook":e.startsWith("/jeddit")?"Jeddit":"Jmail",N=d.some(e=>e.name===S),P=d.filter(e=>e.isNew).length,T=(0,n.useCallback)(()=>{m(e=>!e)},[]),M=(0,n.useCallback)(()=>{b(e=>!e)},[]),O=(0,n.useCallback)(()=>{b(!1)},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:p}),a&&!f&&(0,t.jsx)("div",{className:"jmail-dock-hover-zone",onMouseEnter:y,onMouseLeave:w}),a&&f&&E&&(0,t.jsx)("div",{className:"jmail-dock-home-indicator",style:{display:"block"},onClick:T,role:"button","aria-label":"Show app dock"}),a&&f&&!E&&(0,t.jsx)("div",{className:"jmail-dock-backdrop",onClick:()=>m(!1)}),g&&(0,t.jsx)("div",{className:"jmail-dock-folder-backdrop",onClick:()=>b(!1)}),(0,t.jsxs)("nav",{className:`jmail-dock ${E?"collapsed":""}`,role:"navigation","aria-label":"App navigation",onMouseEnter:y,onMouseLeave:w,style:{viewTransitionName:"dock"},children:[c.map(e=>{let o=S===e.name;return(0,t.jsxs)(r.default,{href:e.href,className:`jmail-dock-item ${o?"active":""}`,"aria-label":e.name,"aria-current":o?"page":void 0,prefetch:!1,children:[(0,t.jsx)("span",{className:"jmail-dock-label",children:e.name}),(0,t.jsxs)("span",{className:"jmail-dock-icon-wrapper",children:[(0,t.jsx)("img",{src:e.icon,alt:"",className:"jmail-dock-icon",draggable:!1}),e.isNew&&(0,t.jsx)("span",{className:"jmail-dock-new-tag",children:"New"})]}),(0,t.jsx)("span",{className:"jmail-dock-indicator"})]},e.name)}),d.length>0&&(0,t.jsxs)("div",{className:"jmail-dock-folder-container",children:[(0,t.jsxs)("button",{ref:k,className:`jmail-dock-more-button ${g?"open":""} ${N?"active":""}`,onClick:M,"aria-label":"More apps","aria-expanded":g,children:[(0,t.jsx)("span",{className:"jmail-dock-label",children:"More"}),(0,t.jsxs)("span",{className:"jmail-dock-icon-wrapper",children:[(0,t.jsx)("span",{className:"jmail-dock-more-icon",children:[...Array(9)].map((e,r)=>(0,t.jsx)("span",{className:"jmail-dock-more-dot"},r))}),P>0&&(0,t.jsx)("span",{className:"jmail-dock-more-badge",children:P})]}),(0,t.jsx)("span",{className:"jmail-dock-indicator",style:N?{opacity:1}:void 0})]}),(0,t.jsxs)("div",{ref:v,className:`jmail-dock-folder-popover ${g?"open":""}`,children:[(0,t.jsx)("div",{className:"jmail-dock-folder-arrow"}),(0,t.jsx)("div",{className:"jmail-dock-folder-grid",children:d.map(e=>{let o=S===e.name;return(0,t.jsxs)(r.default,{href:e.href,className:`jmail-dock-folder-item ${o?"active":""}`,onClick:O,"aria-label":e.name,"aria-current":o?"page":void 0,prefetch:!1,children:[(0,t.jsxs)("span",{className:"jmail-dock-folder-icon-wrapper",children:[(0,t.jsx)("img",{src:e.icon,alt:"",className:"jmail-dock-folder-icon",draggable:!1}),e.isNew&&(0,t.jsx)("span",{className:"jmail-dock-folder-new-tag",children:"New"})]}),(0,t.jsx)("span",{className:"jmail-dock-folder-name",children:e.name})]},e.name)})})]})]})]})]})}e.s(["Dock",()=>m,"DockProvider",()=>u,"apps",0,l,"useDockImmersive",()=>s])},504383,e=>{"use strict";var t=e.i(843476),r=e.i(618566),o=e.i(875296);function n({contentType:e,contentId:n,title:i,variant:s="icon"}){let l=(0,r.useRouter)();if(!o.FEATURE_JEDDIT)return null;let c=t=>{t.preventDefault(),t.stopPropagation();let r=new URLSearchParams({share:"1",url:function(e,t){let r=window.location.origin;switch(e){case"email":return`${r}/thread/${t}`;case"photo":return`${r}/photos?id=${t}`;case"document":return`${r}/drive/${t}`;case"flight":return`${r}/flights?id=${t}`;case"message":return`${r}/messages/${t}`;default:return r}}(e,n)});i&&r.set("title",i),l.push(`/jeddit?${r.toString()}`)};return"text"===s?(0,t.jsxs)("button",{onClick:c,style:{background:"transparent",border:"none",cursor:"pointer",color:"#336699",fontSize:"12px",padding:"4px 8px",display:"flex",alignItems:"center",gap:"4px"},title:"Share to Jeddit",children:[(0,t.jsx)(a,{size:14}),"Share to Jeddit"]}):(0,t.jsx)("button",{className:"action-btn jeddit-share-btn",onClick:c,title:"Share to Jeddit",style:{background:"transparent",border:"none",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",opacity:.7},onMouseEnter:e=>e.currentTarget.style.opacity="1",onMouseLeave:e=>e.currentTarget.style.opacity="0.7",children:(0,t.jsx)(a,{size:16})})}function a({size:e=16}){return(0,t.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"10",fill:"#FF4500"}),(0,t.jsx)("text",{x:"12",y:"17",textAnchor:"middle",fontSize:"14",fontWeight:"bold",fill:"white",fontFamily:"Arial, sans-serif",children:"J"})]})}e.s(["ShareToJedditButton",()=>n])},668371,e=>{"use strict";var t=e.i(95187);let r=(0,t.createServerReference)("70a6abcde6dedb119efa79c1b98ab8980056ac2e8e",t.callServer,void 0,t.findSourceMapURL,"setStar");e.s(["setStar",()=>r])},71829,e=>{"use strict";e.s(["CONFIRMED_PEOPLE",0,{"jeffrey-epstein":{name:"Jeffrey Epstein",thumbnail:"/people-thumbnails/jeffrey-epstein.png"},"ghislaine-maxwell":{name:"Ghislaine Maxwell",thumbnail:"/people-thumbnails/ghislaine-maxwell.png"},"bill-clinton":{name:"Bill Clinton",thumbnail:"/people-thumbnails/bill-clinton.png"},"steve-bannon":{name:"Steve Bannon",thumbnail:"/people-thumbnails/steve-bannon.png"},"walter-cronkite":{name:"Walter Cronkite",thumbnail:"/people-thumbnails/walter-cronkite.png"},"kevin-spacey":{name:"Kevin Spacey",thumbnail:"/people-thumbnails/kevin-spacey.png"},"bill-gates":{name:"Bill Gates",thumbnail:"/people-thumbnails/bill-gates.png"},"mick-jagger":{name:"Mick Jagger",thumbnail:"/people-thumbnails/mick-jagger.png"},"donald-trump":{name:"Donald Trump",thumbnail:"/people-thumbnails/donald-trump.png"},"noam-chomsky":{name:"Noam Chomsky",thumbnail:"/people-thumbnails/noam-chomsky.png"},"richard-branson":{name:"Richard Branson",thumbnail:"/people-thumbnails/richard-branson.png"},"woody-allen":{name:"Woody Allen",thumbnail:"/people-thumbnails/woody-allen.png"},"alan-dershowitz":{name:"Alan Dershowitz",thumbnail:"/people-thumbnails/alan-dershowitz.png"}},"CONFIRMED_PEOPLE_NAMES",0,{"sergey-brin":"Sergey Brin","david-brooks":"David Brooks","ehud-barak":"Ehud Barak","lawrence-summers":"Lawrence Summers","jean-luc-brunel":"Jean-Luc Brunel","michael-jackson":"Michael Jackson","chris-tucker":"Chris Tucker","david-copperfield":"David Copperfield"},"NEW_RELEASE_BATCHES",0,["VOL00009","VOL00010","VOL00011","VOL00012"],"SEARCH_INDEX_VERSION",0,"v2"])},912601,e=>{"use strict";var t=e.i(95187);let r=(0,t.createServerReference)("6009d86f535ae1a3eb8a964f33c48c7e4ad08ca332",t.callServer,void 0,t.findSourceMapURL,"getPeopleWithAvatars");e.s(["getPeopleWithAvatars",()=>r])}]);