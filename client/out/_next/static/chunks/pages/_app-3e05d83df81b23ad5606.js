_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t);var n=r("nKUr");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=r("q1tI"),i=r("/MKj"),a=r("vOnD"),l=a.c.p.withConfig({displayName:"styledAlert__AlertParagraph",componentId:"mnttl2-0"})(["background-color:",";color:",";margin:0.5rem .5rem;border-radius:.4rem;padding:.5rem;"],(function(e){return e.danger?"red":"green"}),(function(e){return e.theme.colors.white})),s=function(){var e=Object(i.c)((function(e){return e.alerts}));return null!==e&&e.length>0&&e.map((function(e){return Object(n.jsx)(l,{danger:"error"===e.alertType,children:e.msg},e.id)}))},u=r("YFqc"),d=r.n(u),f=a.c.nav.withConfig({displayName:"StyledNavbar__NavbarWrapper",componentId:"sc-15hxfc3-0"})(["background-color:",";display:flex;align-items:center;justify-content:flex-end;position:fixed;padding:0.7rem 2rem;z-index:1;width:100%;border-bottom:1px solid ",";opacity:0.9;"],(function(e){return e.theme.colors.black}),(function(e){return e.theme.colors.main})),p=a.c.ul.withConfig({displayName:"StyledNavbar__MenuWrapper",componentId:"sc-15hxfc3-1"})(["margin-right:0.95rem;width:100%;display:flex;justify-content:space-between;align-items:center;"]),b=a.c.a.withConfig({displayName:"StyledNavbar__HomeLogo",componentId:"sc-15hxfc3-2"})(["color:white;font-size:1.25rem;font-weight:400;cursor:pointer;"]),O=a.c.i.withConfig({displayName:"StyledNavbar__Logo",componentId:"sc-15hxfc3-3"})(["color:",";font-size:1.25rem;margin-right:0.35rem;"],(function(e){return e.theme.colors.white})),h=a.c.ul.withConfig({displayName:"StyledNavbar__NavbarLinkWrapper",componentId:"sc-15hxfc3-4"})(["display:flex;"]),j=a.c.li.withConfig({displayName:"StyledNavbar__NavbarLink",componentId:"sc-15hxfc3-5"})(["color:",";margin-left:0.95rem;&:hover{color:",";}"],(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.main})),g=r("/tNO"),m=r("20a2"),y=function(){var e=Object(m.useRouter)(),t=Object(i.b)(),r=Object(i.c)((function(e){return e.register}));return Object(n.jsx)(f,{children:Object(n.jsxs)(p,{children:[Object(n.jsxs)(b,{children:[Object(n.jsx)(d.a,{href:"/",children:Object(n.jsx)(O,{children:Object(n.jsx)("i",{className:"fas fa-code"})})}),"Dev Connector"]}),!r.loading&&r.isAuth?Object(n.jsxs)(h,{children:[Object(n.jsx)(j,{children:Object(n.jsx)(d.a,{href:"/dashboard/dashboard",children:"Dashboard"})}),Object(n.jsx)(j,{onClick:function(){t(Object(g.a)()),e.replace("/")},children:Object(n.jsx)("p",{children:"Logout"})})]}):Object(n.jsxs)(h,{children:[Object(n.jsx)(j,{children:Object(n.jsx)(d.a,{href:"/developers/developers",children:"Developers"})}),Object(n.jsx)(j,{children:Object(n.jsx)(d.a,{href:"/auth/register/register",children:"Register"})}),Object(n.jsx)(j,{children:Object(n.jsx)(d.a,{href:"/auth/login/login",children:"Login"})})]})]})})},v=r("SLWo"),w=a.c.main.withConfig({displayName:"styledLayout__MainWrapper",componentId:"sc-168pnge-0"})(["padding-top:3.46rem;"]),_=function(e){var t=e.children;return Object(n.jsxs)("div",{children:[Object(n.jsx)(v.a,{}),Object(n.jsx)(y,{}),Object(n.jsx)(w,{children:t})]})},x=r("ANjH"),S=r("5HXA");function E(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var P=E();P.withExtraArgument=E;var N=P;function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function I(e){return function(e){if(Array.isArray(e))return D(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=r("6Pby"),A=[],T=r("+XJc");function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={token:localStorage.getItem("token"),isAuth:null,loading:!0,user:null},X=r("xHYb");function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={profile:null,profiles:[],repos:[],loading:!0,error:{}},U=[N],W=Object(x.combineReducers)({alerts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case k.b:return[].concat(I(e),[n]);case k.a:return e.filter((function(e){return e.id!==n}));default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case T.c:return localStorage.setItem("token",n.data),L(L({},e),{},{token:n.data,loading:!1,isAuth:!0});case T.g:return L(L({},e),{},{isAuth:!0,loading:!1,user:n.data});case T.f:return localStorage.setItem("token",n.data),L(L(L({},e),n),{},{isAuth:!0,loading:!1});case T.e:return localStorage.removeItem("token"),L(L({},e),{},{token:null,isAuth:!1,loading:!1});case T.d:return localStorage.removeItem("token"),L(L({},e),{},{token:null,isAuth:!1,loading:!1,user:null});case T.a:return localStorage.removeItem("token"),L(L({},e),{},{token:null,isAuth:!1,loading:!1});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,r=t.type,n=t.payload;switch(r){case X.a:return H(H({},e),{},{profile:n.data,loading:!1});case X.b:return H(H({},e),{},{profile:null,loading:!1,error:n});case T.b:return H(H({},e),{},{profile:null,loading:!1});case X.c:return H(H({},e),{},{profile:n,loading:!1});default:return e}}}),F=Object(x.createStore)(W,{},Object(S.composeWithDevTools)(x.applyMiddleware.apply(void 0,U)));function V(){var e,t,r=(e=["\nhtml,\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n    height:100%;\n}\n\nbody {\n  font-size:1rem;\n  line-height:1.6;\n  background-color:white;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nul {\n  list-style:none;\n}\n\nimg {\n  width:100%;\n}\n\n* {\n  box-sizing: border-box;\n  margin:0;\n}\n\n.text-primary {\n  color:",";\n}\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return V=function(){return r},r}var Y=Object(a.b)(V(),(function(e){return e.theme.colors.main})),G={colors:{main:"#1ba2ce",white:"#fff",profileColor:"#d3d3d361",black:"#000"}},J=r("2YA2");function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps;return Object(c.useEffect)((function(){localStorage.getItem("token")&&Object(J.a)(localStorage.getItem("token")),F.dispatch(Object(g.b)())}),[]),Object(n.jsx)(i.a,{store:F,children:Object(n.jsxs)(a.a,{theme:G,children:[Object(n.jsx)(Y,{}),Object(n.jsxs)(_,{children:[Object(n.jsx)(s,{}),Object(n.jsx)(t,K({},r))]})]})})}},"5HXA":function(e,t,r){"use strict";var n=r("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?n:n.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},xHYb:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c}));var n="GET_PROFILE",o="PROFILE_ERROR",c="UPDATE_PROFILE"}},[[0,0,1,2,3,4,5,7]]]);