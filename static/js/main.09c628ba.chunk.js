(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),s=c.n(r),i=(c(10),c(3)),o=c(2),d=(c(11),c(12),c.p+"static/media/cover.67ea26b1.png"),u=c(0);function j(e){var t=e.card,c=e.handleChoice,n=e.flipped,a=e.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:t.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:d,onClick:function(){a||c(t)},alt:"card back"})]})})}var l=c.p+"static/media/helmet-1.4802ee0c.png",b=c.p+"static/media/potion-1.a25b4a45.png",h=c.p+"static/media/ring-1.2199f03a.jpg",m=c.p+"static/media/shield-1.80631786.jpg",f=c.p+"static/media/sword-1.2dfc105c.png",O=[{src:l,matched:!1},{src:b,matched:!1},{src:h,matched:!1},{src:c.p+"static/media/scroll-1.142dd095.jpg",matched:!1},{src:m,matched:!1},{src:f,matched:!1}];var p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),d=s[0],l=s[1],b=Object(n.useState)(null),h=Object(o.a)(b,2),m=h[0],f=h[1],p=Object(n.useState)(null),g=Object(o.a)(p,2),x=g[0],v=g[1],k=Object(n.useState)(!1),w=Object(o.a)(k,2),N=w[0],S=w[1],M=Object(n.useState)(!1),C=Object(o.a)(M,2),E=C[0],y=C[1],T=function(){var e=[].concat(O,O).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));a(e),l(0)},J=function(e){m?v(e):f(e)};Object(n.useEffect)((function(){m&&x&&(S(!0),m.src===x.src?(a((function(e){return e.map((function(e){return e.src===m.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),A()):setTimeout((function(){return A()}),1e3))}),[m,x]);var A=function(){f(null),v(null),l((function(e){return e+1})),S(!1)};return Object(n.useEffect)((function(){T(),f(null),v(null),l(0),y(!1)}),[]),Object(n.useEffect)((function(){c.length>0&&c.every((function(e){return!0===e.matched}))&&(setTimeout((function(){return T()}),3e3),y(!0))}),[c]),Object(n.useEffect)((function(){E&&setTimeout((function(){return y(!1)}),3e3)}),[E]),Object(u.jsxs)("div",{className:"App",children:[!E&&Object(u.jsx)("h1",{children:"Meah Match"}),E&&Object(u.jsxs)("h1",{className:"congrats",children:["Congratulations! You completed Meah Match in ",d," turns!"," "]}),Object(u.jsx)("button",{onClick:T,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(j,{card:e,handleChoice:J,flipped:e===m||e===x||e.matched,disabled:N},e.id)}))}),Object(u.jsxs)("p",{children:["Turns: ",d]}),Object(u.jsxs)("h3",{children:["Learn to code with ",Object(u.jsx)("a",{href:"https://www.schoolofcode.co.uk/",target:"_blank",rel:"noreferrer",children:"School of Code"})," "]})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.09c628ba.chunk.js.map