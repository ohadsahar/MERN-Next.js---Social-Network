_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{M6Mn:function(e,r,t){"use strict";t.r(r),t.d(r,"ProfilesWrapper",(function(){return c})),t.d(r,"ProfileWrapper",(function(){return o})),t.d(r,"UserInfo",(function(){return i})),t.d(r,"Skills",(function(){return s}));var n=t("vOnD"),c=n.c.div.withConfig({displayName:"styledProfile__ProfilesWrapper",componentId:"sc-1bqyt2h-0"})(["padding-top:60px;"]),o=n.c.div.withConfig({displayName:"styledProfile__ProfileWrapper",componentId:"sc-1bqyt2h-1"})(["background-color:",";display:grid;grid-template-columns:2fr 4fr 2fr;align-items:center;grid-gap:2rem;padding:1rem;line-height:1.8;margin-bottom:1rem;"],(function(e){return e.theme.colors.profileColor})),i=n.c.section.withConfig({displayName:"styledProfile__UserInfo",componentId:"sc-1bqyt2h-2"})([">h2{font-size:1.25rem;font-weight:700;}>p{font-size:1rem;font-weight:300;}>a{color:",";}"],(function(e){return e.theme.colors.main})),s=n.c.section.withConfig({displayName:"styledProfile__Skills",componentId:"sc-1bqyt2h-3"})([">ul{>li{color:","}}"],(function(e){return e.theme.colors.main}))},VQWF:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/developers/developers",function(){return t("lsSm")}])},YFqc:function(e,r,t){e.exports=t("cTJO")},cTJO:function(e,r,t){"use strict";var n=t("J4zp"),c=t("284h");r.__esModule=!0,r.default=void 0;var o=c(t("q1tI")),i=t("elyg"),s=t("nOHt"),a=t("vNVm"),l={};function f(e,r,t,n){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,t,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[r+"%"+t+(c?"%"+c:"")]=!0}}var u=function(e){var r=!1!==e.prefetch,t=(0,s.useRouter)(),c=t&&t.pathname||"/",u=o.default.useMemo((function(){var r=(0,i.resolveHref)(c,e.href,!0),t=n(r,2),o=t[0],s=t[1];return{href:o,as:e.as?(0,i.resolveHref)(c,e.as):s||o}}),[c,e.href,e.as]),d=u.href,p=u.as,h=e.children,j=e.replace,v=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var O=o.Children.only(h),g=O&&"object"===typeof O&&O.ref,x=(0,a.useIntersection)({rootMargin:"200px"}),y=n(x,2),w=y[0],_=y[1],N=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,o.useEffect)((function(){var e=_&&r&&(0,i.isLocalURL)(d),n="undefined"!==typeof m?m:t&&t.locale,c=l[d+"%"+p+(n?"%"+n:"")];e&&!c&&f(t,d,p,{locale:n})}),[p,d,_,m,r,t]);var k={ref:N,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,r,t,n,c,o,s,a){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),r[c?"replace":"push"](t,n,{shallow:o,locale:a,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,d,p,j,v,b,m)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),f(t,d,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var I="undefined"!==typeof m?m:t&&t.locale,M=(0,i.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);k.href=M||(0,i.addBasePath)((0,i.addLocale)(p,I,t&&t.defaultLocale))}return o.default.cloneElement(O,k)};r.default=u},lsSm:function(e,r,t){"use strict";t.r(r);var n=t("nKUr"),c=(t("q1tI"),t("M6Mn")),o=t("YFqc"),i=t.n(o);r.default=function(){return Object(n.jsxs)(c.ProfilesWrapper,{children:[Object(n.jsx)("h1",{children:"Developers"}),Object(n.jsx)("p",{children:"Browse and connect with developers"}),Object(n.jsxs)(c.ProfileWrapper,{children:[Object(n.jsx)("img",{src:"//www.gravatar.com/avatar/6c85cc9d4f646f8e9cd581a470e803eb?s=200&r=pg&d=mm",alt:"profile-image"}),Object(n.jsxs)(c.UserInfo,{children:[Object(n.jsx)("h2",{children:"Ohad Sahar"}),Object(n.jsx)("p",{children:"Developer At AnyApp"}),Object(n.jsx)("p",{children:"Beer Sheva, Israel"}),Object(n.jsx)(i.a,{href:"profile/profile",children:"View Profile"})]}),Object(n.jsx)(c.Skills,{children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"fas fa-check"}),"HTML"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"fas fa-check"}),"CSS"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"fas fa-check"}),"Javascript"]})]})})]}),Object(n.jsxs)(c.ProfileWrapper,{children:[Object(n.jsx)("img",{src:"//www.gravatar.com/avatar/6c85cc9d4f646f8e9cd581a470e803eb?s=200&r=pg&d=mm",alt:"profile-image"}),Object(n.jsxs)(c.UserInfo,{children:[Object(n.jsx)("h2",{children:"Ohad Sahar"}),Object(n.jsx)("p",{children:"Developer At AnyApp"}),Object(n.jsx)("p",{children:"Beer Sheva, Israel"}),Object(n.jsx)(i.a,{href:"profile/profile",children:"View Profile"})]}),Object(n.jsx)(c.Skills,{children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"fas fa-check"}),"HTML"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"fas fa-check"}),"CSS"]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{className:"fas fa-check"}),"Javascript"]})]})})]})]})}},vNVm:function(e,r,t){"use strict";var n=t("J4zp"),c=t("TqRt");r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!s,c=(0,o.useRef)(),l=(0,o.useState)(!1),f=n(l,2),u=f[0],d=f[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||u||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=a.get(r);if(t)return t;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return a.set(r,t={id:r,observer:c,elements:n}),t}(t),c=n.id,o=n.observer,i=n.elements;return i.set(e,r),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),a.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,u]);return(0,o.useEffect)((function(){s||u||(0,i.default)((function(){return d(!0)}))}),[u]),[p,u]};var o=t("q1tI"),i=c(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var a=new Map}},[["VQWF",0,1,2,3,4]]]);