(this.webpackJsonpnameapplication=this.webpackJsonpnameapplication||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),r=n(14),s=n.n(r),i=n(19),o=n(13),j=n(18),l=function(e){return Object(a.jsx)(j.a,{classname:"searchform",children:Object(a.jsx)(j.a.Control,{type:"search",placeholder:"Search for...",value:e.newSearch,onChange:e.handleSearch})})},u=function(e){var t=e.nameentry;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.name}),Object(a.jsxs)("td",{children:[" ",t.amount]})]},t.name)},h=n(28),d=function(e){var t=""===e.search?e.names:e.names.filter((function(t){return t.name.toUpperCase().includes(e.search.toUpperCase())}));return Object(a.jsxs)(h.a,{striped:!0,variant:"info",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Amount"})]})}),Object(a.jsx)("tbody",{children:t.map((function(e){return Object(a.jsx)(u,{nameentry:e})}))})]})},b=n(29),m=n.n(b),O=function(){return m.a.get("/api/names").then((function(e){return e.data}))},f=n(9),p=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),j=Object(o.a)(s,2),u=j[0],h=j[1],b=Object(c.useState)("amount"),m=Object(o.a)(b,2),p=m[0],x=m[1],S=Object(c.useState)(""),g=Object(o.a)(S,2),v=g[0],y=g[1],w=n.reduce((function(e,t){return e+t.amount}),0);return Object(c.useEffect)((function(){O().then((function(e){r(e)}))}),[]),Object(c.useEffect)((function(){!function(e){var t;"name"===e?t=Object(i.a)(n).sort((function(e,t){return e.name.localeCompare(t.name)})):"amount"===e&&(t=Object(i.a)(n).sort((function(e,t){return t.amount-e.amount}))),h(t)}(p)}),[n,p]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{class:"display-1",children:"Name Application"}),Object(a.jsxs)("p",{class:"lead",children:["This list contains the top-10 of both male and female names in Solita. The amount of people included in the list is ",w,"."]}),Object(a.jsx)("p",{children:"Want to find someone in particular? Try typing their name in the searchbox below."}),Object(a.jsx)(l,{newSearch:v,handleSearch:function(e){y(e.target.value)}}),Object(a.jsx)("h2",{children:"List of names"}),Object(a.jsxs)(f.a,{classname:"ddmenu",children:[Object(a.jsx)(f.a.Toggle,{variant:"info",id:"order-dropdown","vertical-align":"middle",children:"Order list"}),Object(a.jsxs)(f.a.Menu,{children:[Object(a.jsx)(f.a.Item,{onSelect:function(e){return x("amount")},children:"Most popular first"}),Object(a.jsx)(f.a.Item,{onSelect:function(e){return x("name")},children:"Alphabetically"})]})]}),Object(a.jsx)(d,{search:v,names:u}),Object(a.jsx)("footer",{class:"bg-light text-center",children:Object(a.jsxs)("div",{class:"text-center p-3",children:["\xa9 2021 Copyright:",Object(a.jsx)("a",{href:"https://github.com/SusannaV/",children:"Susanna Veijalainen"})]})})]})};s.a.render(Object(a.jsx)(p,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.463b1472.chunk.js.map