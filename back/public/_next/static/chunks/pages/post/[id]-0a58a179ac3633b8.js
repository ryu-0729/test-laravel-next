(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{2050:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[id]",function(){return e(247)}])},2500:function(t,n,e){"use strict";e.d(n,{o:function(){return i}});var r=e(9669),i=e.n(r)().create({baseURL:"http://localhost:8000",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0})},9248:function(t,n,e){"use strict";e.d(n,{NO:function(){return d},u_:function(){return l},Bn:function(){return v},C8:function(){return f}});var r=e(4051),i=e.n(r),o=e(7294),u=e(8100),a=e(2500);function c(t,n,e,r,i,o,u){try{var a=t[o](u),c=a.value}catch(s){return void e(s)}a.done?n(c):Promise.resolve(c).then(r,i)}function s(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function u(t){c(o,r,i,u,a,"next",t)}function a(t){c(o,r,i,u,a,"throw",t)}u(void 0)}))}}var d=function(){var t=(0,u.ZP)("/api/posts",(function(t){return a.o.get(t).then((function(t){return t}))})),n=t.data,e=t.error;return{data:e||null===n||void 0===n?void 0:n.data,error:e||void 0}},l=function(){return{addPostRequest:(0,o.useCallback)(function(){var t=s(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.o.post("/api/posts",n);case 2:return e=t.sent.data,t.abrupt("return",{data:e});case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[])}},v=function(){return{editPostRequest:(0,o.useCallback)(function(){var t=s(i().mark((function t(n){var e,r,o,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.id,r=n.title,o=n.body,t.next=3,a.o.put("/api/posts/".concat(e),{title:r,body:o});case 3:return u=t.sent.data,t.abrupt("return",{data:u});case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[])}},f=function(t){var n=(0,u.ZP)(t?["/api/posts/".concat(t)]:null,(function(t){return a.o.get(t).then((function(t){return t}))})),e=n.data,r=n.error,i=null===e||void 0===e?void 0:e.data;return{data:r?void 0:i,error:r||void 0}}},2117:function(t,n,e){"use strict";e.d(n,{$:function(){return p}});var r=e(4051),i=e.n(r),o=e(5893),u=e(7294),a=e(1163),c=e(2175),s=e(4231),d=function(){var t=s.Z_().required("\u30bf\u30a4\u30c8\u30eb\u306f\u5fc5\u9808\u3067\u3059"),n=s.Z_().required("\u6295\u7a3f\u5185\u5bb9\u306f\u5fc5\u9808\u3067\u3059");return s.Ry().shape({title:t,body:n})},l=e(9248),v=e(6764);function f(t,n,e,r,i,o,u){try{var a=t[o](u),c=a.value}catch(s){return void e(s)}a.done?n(c):Promise.resolve(c).then(r,i)}function h(t){return function(){var n=this,e=arguments;return new Promise((function(r,i){var o=t.apply(n,e);function u(t){f(o,r,i,u,a,"next",t)}function a(t){f(o,r,i,u,a,"throw",t)}u(void 0)}))}}var p=function(t){var n,e,r=t.isEdit,s=void 0!==r&&r,f=t.post,p=(0,a.useRouter)().push,b=(0,l.u_)().addPostRequest,x=(0,l.Bn)().editPostRequest,y=(0,u.useMemo)((function(){return s?"\u66f4\u65b0":"\u4f5c\u6210"}),[s]),k=(0,u.useCallback)(function(){var t=h(i().mark((function t(n){var e,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.title,r=n.body,s){t.next=7;break}return t.next=4,b({title:e,body:r});case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,x({id:null===f||void 0===f?void 0:f.id,title:e,body:r});case 9:t.t0=t.sent;case 10:(o=t.t0)&&!("error"in o)&&p("/post");case 12:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[s,f,b,x,p]),j=(0,c.TA)({initialValues:{title:null!==(n=null===f||void 0===f?void 0:f.title)&&void 0!==n?n:"",body:null!==(e=null===f||void 0===f?void 0:f.body)&&void 0!==e?e:""},validationSchema:d().pick(["title","body"]),onSubmit:k}),m=j.values,w=j.errors,C=j.touched,_=j.handleSubmit,P=j.handleChange,R=j.handleBlur,q=(0,u.useCallback)(function(){var t=h(i().mark((function t(n){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n);case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[_]),E=(0,u.useCallback)((function(t){P(t)}),[P]),g=(0,u.useCallback)((function(t){R(t)}),[R]);return(0,o.jsxs)("form",{onSubmit:q,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"title",children:"title"}),(0,o.jsx)("input",{id:"title",type:"text",onChange:E,onBlur:g,value:m.title}),C.title?(0,o.jsx)("div",{children:w.title}):void 0]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"body",children:"body"}),(0,o.jsx)("input",{id:"body",type:"text",onChange:E,onBlur:g,value:m.body}),C.body?(0,o.jsx)("div",{children:w.body}):void 0]}),(0,o.jsx)(v.Z,{variant:"contained",type:"submit",children:y})]})}},247:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return s}});var r=e(5893),i=e(7294),o=e(1163),u=e(9248),a=e(2117),c=e(6764),s=function(){var t=(0,o.useRouter)(),n=t.query,e=t.push,s=(0,i.useState)(!1),d=s[0],l=s[1],v=function(t,n){var e,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=null!==(e=t[n])&&void 0!==e?e:r,u=Array.isArray(o)?o[0]:o;return i?i.includes(u)?u:r:u}(n,"id",""),f=(0,u.C8)(v),h=f.data,p=f.error;(0,i.useEffect)((function(){p&&e("/post")}),[p,e]);var b=(0,i.useMemo)((function(){return d?"\u7de8\u96c6":"\u8a73\u7d30"}),[d]),x=(0,i.useCallback)((function(){return e("/post")}),[e]),y=(0,i.useCallback)((function(){l(!1),e("/post/".concat(null===h||void 0===h?void 0:h.id))}),[e,h]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:b}),d?(0,r.jsxs)("div",{children:[(0,r.jsx)(a.$,{isEdit:d,post:h}),(0,r.jsx)(c.Z,{variant:"contained",color:"secondary",onClick:y,children:"\u30ad\u30e3\u30f3\u30bb\u30eb"})]}):(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["\u30bf\u30a4\u30c8\u30eb\uff1a",null===h||void 0===h?void 0:h.title]}),(0,r.jsxs)("p",{children:["\u6295\u7a3f\u5185\u5bb9\uff1a",null===h||void 0===h?void 0:h.body]}),(0,r.jsxs)("p",{children:["\u4f5c\u6210\u65e5\uff1a",null===h||void 0===h?void 0:h.created_at]}),(0,r.jsx)(c.Z,{variant:"contained",disableElevation:!0,onClick:function(){return l(!0)},children:"\u7de8\u96c6"}),(0,r.jsx)(c.Z,{variant:"contained",color:"secondary",onClick:x,children:"\u4e00\u89a7\u306b\u623b\u308b"})]})]})}}},function(t){t.O(0,[145,600,774,888,179],(function(){return n=2050,t(t.s=n);var n}));var n=t.O();_N_E=n}]);