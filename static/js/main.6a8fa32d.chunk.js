(this["webpackJsonpmagic-memory"]=this["webpackJsonpmagic-memory"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(5),s=c.n(a),i=(c(10),c(3)),o=c(2),u=(c(11),c(12),c(0));function m(e){var t=e.card,c=e.handleChoice,n=e.flipped,r=e.disabled;return Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:n?"flipped":"",children:[Object(u.jsx)("img",{className:"front",src:t.src,alt:"card front"}),Object(u.jsx)("img",{className:"back",src:"/reactmemory/img/cover.png",onClick:function(){r||c(t)},alt:"card back"})]})})}var d=[{src:"/reactmemory/img/helmet-1.png",matched:!1},{src:"/reactmemory/img/potion-1.png",matched:!1},{src:"/reactmemory/img/ring-1.png",matched:!1},{src:"/reactmemory/img/scroll-1.png",matched:!1},{src:"/reactmemory/img/shield-1.png",matched:!1},{src:"/reactmemory/img/sword-1.png",matched:!1}];var j=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(o.a)(a,2),j=s[0],l=s[1],b=Object(n.useState)(null),f=Object(o.a)(b,2),h=f[0],O=f[1],p=Object(n.useState)(null),g=Object(o.a)(p,2),v=g[0],x=g[1],y=Object(n.useState)(!1),N=Object(o.a)(y,2),M=N[0],S=N[1],k=Object(n.useState)(!1),C=Object(o.a)(k,2),E=C[0],w=C[1],T=function(){var e=[].concat(d,d).sort((function(){return Math.random()-.5})).map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Math.random()})}));r(e),l(0)},J=function(e){h?x(e):O(e)};Object(n.useEffect)((function(){h&&v&&(S(!0),h.src===v.src?(r((function(e){return e.map((function(e){return e.src===h.src?Object(i.a)(Object(i.a)({},e),{},{matched:!0}):e}))})),A()):setTimeout((function(){return A()}),1e3))}),[h,v]);var A=function(){O(null),x(null),l((function(e){return e+1})),S(!1)};return Object(n.useEffect)((function(){T(),O(null),x(null),l(0),w(!1)}),[]),Object(n.useEffect)((function(){c.every((function(e){return!0===e.matched}))&&(setTimeout((function(){return T()}),3e3),w(!0))}),[c]),Object(n.useEffect)((function(){E&&setTimeout((function(){return w(!1)}),3e3)}),[E]),Object(u.jsxs)("div",{className:"App",children:[!E&&Object(u.jsx)("h1",{children:"Meah Match"}),E&&Object(u.jsxs)("h1",{className:"congrats",children:["Congratulations! You completed Meah Match in ",j," turns!"," "]}),Object(u.jsx)("button",{onClick:T,children:"New Game"}),Object(u.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(u.jsx)(m,{card:e,handleChoice:J,flipped:e===h||e===v||e.matched,disabled:M},e.id)}))}),Object(u.jsxs)("p",{children:["Turns: ",j]})]})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.6a8fa32d.chunk.js.map