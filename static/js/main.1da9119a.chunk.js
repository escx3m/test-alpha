(this["webpackJsonptest-alpha"]=this["webpackJsonptest-alpha"]||[]).push([[0],{30:function(e,t,a){},54:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(10),s=a.n(i),r=a(13),l=(a(54),a(30),a(43)),o=a(40),j=a(41),d=a(16),u=a(81),b=a(82),O=a(14),h=a(2),v=a(22),g=a(27),m=a.n(g),x="https://thingproxy.freeboard.io/fetch/",f=Object(v.b)({name:"allData",initialState:{value:[],like:!1,loading:!0},reducers:{liked:function(e,t){var a=t.payload;e.value.length&&e.value[a].hasOwnProperty("isLiked")&&(e.value[a].isLiked=!e.value[a].isLiked)},remove:function(e,t){var a=t.payload;return Object(h.a)(Object(h.a)({},e),{},{value:[].concat(Object(O.a)(e.value.slice(0,a)),Object(O.a)(e.value.slice(a+1)))})},setData:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{value:[].concat(Object(O.a)(e.value),Object(O.a)(t.payload)),loading:!1})},toggleLike:function(e){return Object(h.a)(Object(h.a)({},e),{},{like:!e.like})}}}),p=f.actions,k=p.liked,L=p.remove,y=p.setData,N=p.toggleLike,D=function(e){return e.allData.value},C=function(e){return e.allData.like},F=function(e){return e.allData.loading},T=f.reducer,I=a(29),S=a(28),w=a(1);var B=function(){var e=Object(r.c)(D),t=Object(r.b)(),a=Object(r.c)(C);return Object(c.useEffect)((function(){return[e]})),Object(w.jsx)(o.a,{xs:1,md:2,lg:4,className:"g-4",children:e&&e.length>0&&e.map((function(e,c){var n=Object(w.jsx)(j.a,{children:Object(w.jsxs)(d.a,{className:"cardContent",children:[Object(w.jsx)(d.a.Img,{variant:"top",src:e.img,className:"cardImg"}),Object(w.jsxs)("div",{className:"blockIcons",children:[Object(w.jsx)("div",{children:Object(w.jsx)(I.a,{overlay:Object(w.jsx)(S.a,{children:"\u041b\u0430\u0439\u043a"}),children:Object(w.jsx)(u.a,{className:"iconHeart ".concat(e.isLiked&&"liked"),onClick:function(){return t(k(c))}})})}),Object(w.jsx)("div",{children:Object(w.jsx)(I.a,{overlay:Object(w.jsx)(S.a,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),children:Object(w.jsx)(b.a,{className:"iconDelete",onClick:function(){return t(L(c))}})})})]}),Object(w.jsxs)(d.a.Body,{children:[Object(w.jsx)(d.a.Title,{className:"cardTitle",children:e.anime}),Object(w.jsx)(d.a.Text,{className:"cardText",children:e.quote})]})]})},c);return a?e.isLiked&&n:n}))})},P=a(42);var q=function(){var e="bg-secondary",t="bg-success",a=Object(r.c)(C),c=Object(r.b)();return Object(w.jsx)("div",{className:"blockFilter",children:Object(w.jsx)(P.a,{pill:!0,bg:"secondary",className:"badgeFilter",onClick:function(n){a?(n.target.classList.remove(t),n.target.classList.add(e)):(n.target.classList.remove(e),n.target.classList.add(t)),c(N())},children:"Liked"})})},E=(a(74),a(44));var J=function(){var e=Object(r.c)(F);return Object(w.jsx)(l.a,{children:e?Object(w.jsx)("div",{className:"blockSpinner",children:Object(w.jsx)(E.a,{animation:"border",role:"status",children:Object(w.jsx)("span",{className:"visually-hidden",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(q,{}),Object(w.jsx)(B,{})]})})},H=Object(v.a)({reducer:{allData:T}}),M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};H.dispatch((function(e){var t=null;m()({method:"get",url:x+"https://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true"}).then((function(a){t=a,m()({method:"get",url:x+"https://animechan.vercel.app/api/quotes"}).then((function(a){var c=a.data.map((function(e,a){return Object(h.a)(Object(h.a)({},e),{},{img:t.data[a],isLiked:!1})}));e(y(c))}))}))})),s.a.render(Object(w.jsx)(r.a,{store:H,children:Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(J,{})})}),document.getElementById("root")),M()}},[[75,1,2]]]);
//# sourceMappingURL=main.1da9119a.chunk.js.map