(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),s=c.n(r),i=(c(10),c(3)),u=c(2),o=(c(11),c(12),c(0));function d(e){var t=e.card,c=e.handleChoice,n=e.flipped,a=e.disabled;return Object(o.jsx)("div",{className:"card",children:Object(o.jsxs)("div",{className:n?"flipped":"",children:[Object(o.jsx)("img",{className:"front",src:t.src,alt:"card front"}),Object(o.jsx)("img",{className:"back",src:"/img/cover.png",onClick:function(){a||c(t)},alt:"card back"})]})})}var j=[{src:"/img/helmet-1.png",matched:!1},{src:"/img/potion-1.png",matched:!1},{src:"/img/ring-1.png",matched:!1},{src:"/img/scroll-1.png",matched:!1},{src:"/img/shield-1.png",matched:!1},{src:"/img/sword-1.png",matched:!1}];var l=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(u.a)(r,2),l=s[0],m=s[1],b=Object(n.useState)(null),f=Object(u.a)(b,2),h=f[0],O=f[1],p=Object(n.useState)(null),g=Object(u.a)(p,2),v=g[0],x=g[1],N=Object(n.useState)(!1),M=Object(u.a)(N,2),S=M[0],k=M[1],C=Object(n.useState)(!1),E=Object(u.a)(C,2),w=E[0],y=E[1],T=function(){var e=[].concat(j,j).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));a(e),m(0)},J=function(e){h?x(e):O(e)};Object(n.useEffect)((function(){h&&v&&(k(!0),h.src===v.src?(a((function(e){return e.map((function(e){return e.src===h.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),A()):setTimeout((function(){return A()}),1e3))}),[h,v]);var A=function(){O(null),x(null),m((function(e){return e+1})),k(!1)};return Object(n.useEffect)((function(){T(),O(null),x(null),m(0)}),[]),Object(n.useEffect)((function(){c.every((function(e){return e.matched}))&&(setTimeout((function(){return T()}),3e3),y(!0))}),[c]),Object(n.useEffect)((function(){w&&setTimeout((function(){return y(!1)}),3e3)}),[w]),Object(o.jsxs)("div",{className:"App",children:[w&&Object(o.jsxs)("h1",{className:"congrats",children:["Congratulations! You completed Meah Match in ",l," turns! "]}),!w&&Object(o.jsx)("h1",{children:"Meah Match"}),Object(o.jsx)("button",{onClick:T,children:"New Game"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(d,{card:e,handleChoice:J,flipped:e===h||e===v||e.matched,disabled:S},e.id)}))}),Object(o.jsxs)("p",{children:["Turns: ",l]})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.40fa0cfd.chunk.js.map