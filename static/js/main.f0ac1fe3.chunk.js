(this["webpackJsonptest-alpha"]=this["webpackJsonptest-alpha"]||[]).push([[0],{30:function(e,t,a){},54:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(10),s=a.n(i),l=a(13),r=(a(54),a(30),a(43)),j=a(40),o=a(41),d=a(16),u=a(81),b=a(82),O=a(14),h=a(2),v=a(22),g=a(27),m=a.n(g),x=Object(v.b)({name:"allData",initialState:{value:[],like:!1,loading:!0},reducers:{liked:function(e,t){var a=t.payload;e.value.length&&e.value[a].hasOwnProperty("isLiked")&&(e.value[a].isLiked=!e.value[a].isLiked)},remove:function(e,t){var a=t.payload;return Object(h.a)(Object(h.a)({},e),{},{value:[].concat(Object(O.a)(e.value.slice(0,a)),Object(O.a)(e.value.slice(a+1)))})},setData:function(e,t){return Object(h.a)(Object(h.a)({},e),{},{value:[].concat(Object(O.a)(e.value),Object(O.a)(t.payload)),loading:!1})},toggleLike:function(e){return Object(h.a)(Object(h.a)({},e),{},{like:!e.like})}}}),f=x.actions,p=f.liked,k=f.remove,L=f.setData,N=f.toggleLike,y=function(e){return e.allData.value},D=function(e){return e.allData.like},C=function(e){return e.allData.loading},F=x.reducer,T=a(29),I=a(28),S=a(1);var w=function(){var e=Object(l.c)(y),t=Object(l.b)(),a=Object(l.c)(D);return Object(c.useEffect)((function(){return[e]})),Object(S.jsx)(j.a,{xs:1,md:2,lg:4,className:"g-4",children:e&&e.length>0&&e.map((function(e,c){var n=Object(S.jsx)(o.a,{children:Object(S.jsxs)(d.a,{className:"cardContent",children:[Object(S.jsx)(d.a.Img,{variant:"top",src:e.img,className:"cardImg"}),Object(S.jsxs)("div",{className:"blockIcons",children:[Object(S.jsx)("div",{children:Object(S.jsx)(T.a,{overlay:Object(S.jsx)(I.a,{children:"\u041b\u0430\u0439\u043a"}),children:Object(S.jsx)(u.a,{className:"iconHeart ".concat(e.isLiked&&"liked"),onClick:function(){return t(p(c))}})})}),Object(S.jsx)("div",{children:Object(S.jsx)(T.a,{overlay:Object(S.jsx)(I.a,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),children:Object(S.jsx)(b.a,{className:"iconDelete",onClick:function(){return t(k(c))}})})})]}),Object(S.jsxs)(d.a.Body,{children:[Object(S.jsx)(d.a.Title,{className:"cardTitle",children:e.anime}),Object(S.jsx)(d.a.Text,{className:"cardText",children:e.quote})]})]})},c);return a?e.isLiked&&n:n}))})},B=a(42);var P=function(){var e="bg-secondary",t="bg-success",a=Object(l.c)(D),c=Object(l.b)();return Object(S.jsx)("div",{className:"blockFilter",children:Object(S.jsx)(B.a,{pill:!0,bg:"secondary",className:"badgeFilter",onClick:function(n){a?(n.target.classList.remove(t),n.target.classList.add(e)):(n.target.classList.remove(e),n.target.classList.add(t)),c(N())},children:"Liked"})})},q=(a(74),a(44));var E=function(){var e=Object(l.c)(C);return Object(S.jsx)(r.a,{children:e?Object(S.jsx)("div",{className:"blockSpinner",children:Object(S.jsx)(q.a,{animation:"border",role:"status",children:Object(S.jsx)("span",{className:"visually-hidden",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(P,{}),Object(S.jsx)(w,{})]})})},J=Object(v.a)({reducer:{allData:F}}),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};J.dispatch((function(e){var t=null;m()({method:"get",url:"http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true"}).then((function(a){t=a,m()({method:"get",url:"https://animechan.vercel.app/api/quotes"}).then((function(a){var c=a.data.map((function(e,a){return Object(h.a)(Object(h.a)({},e),{},{img:t.data[a],isLiked:!1})}));e(L(c))}))}))})),s.a.render(Object(S.jsx)(l.a,{store:J,children:Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(E,{})})}),document.getElementById("root")),H()}},[[75,1,2]]]);
//# sourceMappingURL=main.f0ac1fe3.chunk.js.map