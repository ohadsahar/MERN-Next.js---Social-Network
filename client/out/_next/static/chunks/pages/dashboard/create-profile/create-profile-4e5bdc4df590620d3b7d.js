_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"4kJL":function(e,t,n){"use strict";n.r(t),n.d(t,"RegisterFormWrapper",(function(){return o})),n.d(t,"RegisterFormInfo",(function(){return i})),n.d(t,"FormWrapper",(function(){return c})),n.d(t,"FormGroup",(function(){return a})),n.d(t,"FormTitle",(function(){return l})),n.d(t,"FormHeader",(function(){return s})),n.d(t,"UserIcon",(function(){return u})),n.d(t,"Paragraph",(function(){return p})),n.d(t,"Input",(function(){return d})),n.d(t,"Button",(function(){return m})),n.d(t,"FormFooter",(function(){return f})),n.d(t,"Span",(function(){return h}));var r=n("vOnD"),o=r.c.div.withConfig({displayName:"styledLogin__RegisterFormWrapper",componentId:"k5m70v-0"})(["height:100vh;"]),i=r.c.div.withConfig({displayName:"styledLogin__RegisterFormInfo",componentId:"k5m70v-1"})(["height:100%;display:flex;align-items:flex-start;justify-content:start;"]),c=r.c.form.withConfig({displayName:"styledLogin__FormWrapper",componentId:"k5m70v-2"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]),a=r.c.div.withConfig({displayName:"styledLogin__FormGroup",componentId:"k5m70v-3"})(["display:flex;flex-direction:column;width:100%;"]),l=r.c.h1.withConfig({displayName:"styledLogin__FormTitle",componentId:"k5m70v-4"})(["color:",";font-weight:400;font-size:3.25rem;letter-spacing:0.4rem;"],(function(e){return e.theme.colors.main})),s=r.c.div.withConfig({displayName:"styledLogin__FormHeader",componentId:"k5m70v-5"})(["display:flex;"]),u=r.c.i.withConfig({displayName:"styledLogin__UserIcon",componentId:"k5m70v-6"})(["color:",";font-size:1.25rem;"],(function(e){return e.theme.colors.black})),p=r.c.p.withConfig({displayName:"styledLogin__Paragraph",componentId:"k5m70v-7"})(["color:",";font-size:1.25rem;"],(function(e){return e.theme.colors.black})),d=r.c.input.withConfig({displayName:"styledLogin__Input",componentId:"k5m70v-8"})(["margin-bottom:1rem;width:100%;display:block;padding:0.4rem;font-size:1.2rem;border:1px solid #ccc;"]),m=r.c.button.withConfig({displayName:"styledLogin__Button",componentId:"k5m70v-9"})(["background-color:",";outline:none;color:white;border:none;padding:0.4rem;width:6rem;"],(function(e){return e.theme.colors.main})),f=r.c.footer.withConfig({displayName:"styledLogin__FormFooter",componentId:"k5m70v-10"})(["font-size:0.8rem ","{font-size:0.8rem;}"],p),h=r.c.span.withConfig({displayName:"styledLogin__Span",componentId:"k5m70v-11"})(["color:",";"],(function(e){return e.theme.colors.main}))},"I2p/":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n("o0o1"),o=n.n(r),i=n("HaE+"),c=n("vDqi"),a=n.n(c),l=n("2YA2"),s=n("xHYb"),u=n("7Iux"),p=function(){return function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,localStorage.getItem("token")&&Object(l.a)(localStorage.getItem("token")),e.next=4,a.a.get("http://localhost:3000/profile/userProfile");case 4:null!==(n=e.sent).data&&t({type:s.a,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:s.b,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t){return function(){var n=Object(i.a)(o.a.mark((function n(r){var i,c,l;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e),i={headers:{"Content-Type":"application/json"}},c=JSON.stringify(e),n.next=6,a.a.put("http://localhost:3000/profile",c,i);case 6:null!==(l=n.sent).data&&r({type:s.c,payload:l.data}),r(Object(u.a)(t?"Profile Updated":"Profile Created","success")),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(0),r(Object(u.a)("Cannot update the profile","error")),r({type:s.b});case 15:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e){return n.apply(this,arguments)}}()}},"Ta/0":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/create-profile/create-profile",function(){return n("elfD")}])},elfD:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),i=n("NKCw"),c=function(e){var t=e.type,n=e.errors;return Object(r.jsx)(o.Fragment,{children:n&&"required"===t?Object(r.jsx)("p",{children:"This is field is required"}):null})},a=n("4kJL"),l=n("nJ55"),s=n("/MKj"),u=n("I2p/");t.default=function(){var e=Object(s.b)(),t=Object(i.a)(),n=t.register,p=t.handleSubmit,d=t.errors,m=Object(o.useState)(!1),f=m[0],h=m[1];return Object(r.jsxs)("form",{onSubmit:p((function(t){e(Object(u.b)(t,!1))})),children:[Object(r.jsxs)("select",{ref:n,name:"status",children:[Object(r.jsx)("option",{value:"0",children:"* Select Professional Status"}),Object(r.jsx)("option",{value:"Developer",children:"Developer"}),Object(r.jsx)("option",{value:"Junior Developer",children:"Junior Developer"}),Object(r.jsx)("option",{value:"Senior Developer",children:"Senior Developer"})]}),Object(r.jsx)(l.Input,{ref:n({required:!0}),name:"company",placeholder:"Insert your company name"}),d.company?Object(r.jsx)(c,{errors:d.company,type:d.company.type}):null,Object(r.jsx)(l.Input,{ref:n,name:"website",placeholder:"Insert your website(if you have)"}),Object(r.jsx)(l.Input,{ref:n,name:"location",placeholder:"Location"}),Object(r.jsx)(l.Input,{ref:n({required:!0}),name:"skills",placeholder:"Enter your skills with comma (javascript, angular, react)"}),d.skills?Object(r.jsx)(c,{errors:d.skills,type:d.skills.type}):null,Object(r.jsx)(l.Input,{ref:n,name:"Bio",placeholder:"Some description"}),Object(r.jsx)(l.Input,{ref:n,name:"githubusername",placeholder:"Your github username"}),Object(r.jsx)("button",{type:"button",onClick:function(){h(!f)},children:f?Object(r.jsx)("p",{children:"Hide social links"}):Object(r.jsx)("p",{children:"Add social links"})}),f?Object(r.jsxs)("div",{children:[Object(r.jsx)(l.Input,{ref:n,name:"facebook",placeholder:"Facebook url"}),Object(r.jsx)(l.Input,{ref:n,name:"twitter",placeholder:"Twitter url"}),Object(r.jsx)(l.Input,{ref:n,name:"instagram",placeholder:"Instagram url"}),Object(r.jsx)(l.Input,{ref:n,name:"youtube",placeholder:"Youtube url"}),Object(r.jsx)(l.Input,{ref:n,name:"linkedin",placeholder:"Linkedin url"})]}):null,Object(r.jsx)(a.Button,{children:"Submit"})]})}},nJ55:function(e,t,n){"use strict";n.r(t),n.d(t,"Input",(function(){return r}));var r=n("vOnD").c.input.withConfig({displayName:"styledCreateProfile__Input",componentId:"sc-1cgzkyw-0"})(["margin-bottom:1rem;width:100%;display:block;padding:0.4rem;font-size:1.2rem;border:1px solid #ccc;"])},xHYb:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));var r="GET_PROFILE",o="PROFILE_ERROR",i="UPDATE_PROFILE"}},[["Ta/0",0,1,2,3,5,6]]]);