(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[159],{1964:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a(19),l=a(0),r=a.n(l),o=a(405),i=a(232),s=a(840),d=a(18),m=a(398),u=a(1942),f=a(158),b=a(1520),p=a(893),v=a(1244),E=a(4),h=a(78),j=723812738,O=[{id:1,name:"All contacts",icon:"zmdi-menu"},{id:2,name:"Frequently contacted",icon:"zmdi-time-restore"},{id:3,name:"Starred contacts",icon:"zmdi-star"}];t.default=function(){var e=Object(l.useState)("No contact found in selected folder"),t=Object(c.a)(e,1)[0],a=Object(l.useState)(""),N=Object(c.a)(a,2),C=N[0],S=N[1],k=Object(l.useState)(!1),g=Object(c.a)(k,2),y=g[0],x=g[1],z=Object(l.useState)(1),w=Object(c.a)(z,2),q=w[0],A=w[1],D=Object(l.useState)(!1),F=Object(c.a)(D,2),J=F[0],L=F[1],M=Object(l.useState)({name:"Robert Johnson",email:"robert.johnson@example.com",avatar:"https://via.placeholder.com/150x150"}),U=Object(c.a)(M,1)[0],H=Object(l.useState)(""),I=Object(c.a)(H,2),P=I[0],R=I[1],T=Object(l.useState)("All contacts"),B=Object(c.a)(T,2),G=B[0],K=B[1],Q=Object(l.useState)(f.a),V=Object(c.a)(Q,2),W=V[0],X=V[1],Y=Object(l.useState)(f.a),Z=Object(c.a)(Y,2),$=Z[0],_=Z[1],ee=Object(l.useState)(0),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ce=Object(l.useState)(!1),le=Object(c.a)(ce,2),re=le[0],oe=le[1],ie=Object(d.e)((function(e){return e.settings})).width,se=function(e){return r.a.createElement("div",{className:"module-side"},r.a.createElement("div",{className:"module-side-header"},r.a.createElement("div",{className:"module-logo"},r.a.createElement("i",{className:"zmdi zmdi-account-box mr-4"}),r.a.createElement("span",null,r.a.createElement(E.a,{id:"chat.contacts"})))),r.a.createElement("div",{className:"module-side-content"},r.a.createElement(h.a,{className:"module-side-scroll scrollbar",style:{height:ie>=1200?"calc(100vh - 200px)":"calc(100vh - 80px)"}},r.a.createElement("div",{className:"module-add-task"},r.a.createElement(m.a,{className:"jr-btn btn-block",variant:"contained",color:"primary","aria-label":"add",onClick:de},r.a.createElement("i",{className:"zmdi zmdi-account-add zmdi-hc-fw"}),r.a.createElement("span",null,"Add New Contact"))),r.a.createElement("div",{className:"module-side-nav"},r.a.createElement("ul",{className:"module-nav"},O.map((function(e){return r.a.createElement("li",{key:e.id,className:"nav-item"},r.a.createElement("span",{className:"jr-link ".concat(e.id===q?"active":""),onClick:function(){return me(e)}},r.a.createElement("i",{className:"zmdi ".concat(e.icon)}),r.a.createElement("span",null,e.name)))})))))))},de=function(){oe(!0)},me=function(e){switch(e.name){case"All contacts":A(e.id),K(e.name),_(W);break;case"Frequently contacted":A(e.id),K(e.name),_(W.filter((function(e){return e.frequently})));break;case"Starred contacts":A(e.id),K(e.name),_(W.filter((function(e){return e.starred})));break;default:A(e.id),K(e.name),_(W)}},ue=function(e){var t=!0,a=W.map((function(a){return a.id===e.id?(t=!1,e):a}));t&&a.push(e),S(t?"Contact Added Successfully":"Contact Updated Successfully"),x(!0),_(a),X(a)},fe=function(e){S("Contact Deleted Successfully"),x(!0),X(W.filter((function(t){return t.id!==e.id}))),_(W.filter((function(t){return t.id!==e.id})))},be=function(){L(!J)};return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement("div",{className:"app-module animated slideInUpTiny animation-duration-3"},r.a.createElement("div",{className:"d-block d-xl-none"},r.a.createElement(o.a,{open:J,onClose:be},se())),r.a.createElement("div",{className:"app-module-sidenav d-none d-xl-flex"},se()),r.a.createElement("div",{className:"module-box"},r.a.createElement("div",{className:"module-box-header"},r.a.createElement(i.a,{className:"drawer-btn d-block d-xl-none","aria-label":"Menu",onClick:be},r.a.createElement("i",{className:"zmdi zmdi-menu"})),r.a.createElement(p.a,{placeholder:"Search contact",notification:!1,apps:!1,user:U,onChange:function(e){R(e.target.value),function(e){if(""===e)_(W);else{var t=W.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1}));"All contacts"===G?_(t):"Frequently contacted"===G?_(t.filter((function(e){return e.frequently}))):"Starred contacts"===G&&_(t.filter((function(e){return e.starred})))}}(e.target.value)},value:P})),r.a.createElement("div",{className:"module-box-content"},r.a.createElement("div",{className:"module-box-topbar"},r.a.createElement(s.a,{color:"primary",indeterminate:ae>0&&ae<$.length,checked:ae>0,onChange:function(){ae<$.length?function(){var e=W.map((function(e){return e?Object(n.a)({},e,{selected:!0}):e}));ne(e.length),X(e),_(e)}():function(){var e=W.map((function(e){return e?Object(n.a)({},e,{selected:!1}):e}));ne(0),X(e),_(e)}()},value:"SelectMail"}),ae>0&&r.a.createElement(i.a,{className:"icon-btn",onClick:function(){var e=W.filter((function(e){return!e.selected}));S("Contact Deleted Successfully"),x(!0),X(e),_(e),ne(0)}},r.a.createElement("i",{className:"zmdi zmdi-delete"}))),r.a.createElement(h.a,{className:"module-list-scroll scrollbar",style:{height:ie>=1200?"calc(100vh - 259px)":"calc(100vh - 240px)"}},0===$.length?r.a.createElement("div",{className:"h-100 d-flex align-items-center justify-content-center"},t):r.a.createElement(b.a,{contactList:$,addFavourite:function(e){S(e.starred?"Contact removed as star":"Contact marked as star"),x(!0),_($.map((function(t){return t.id===e.id?Object(n.a)({},t,{starred:!e.starred}):t}))),X(W.map((function(t){return t.id===e.id?Object(n.a)({},t,{starred:!e.starred}):t})))},onContactSelect:function(e){e.selected=!e.selected;var t=0,a=$.map((function(a){return a.selected&&t++,a.id===e.id?(a.selected&&t++,e):a}));ne(t),_(a)},onDeleteContact:fe,onSaveContact:ue}))))),r.a.createElement(v.a,{open:re,contact:{id:j++,name:"",thumb:"",email:"",phone:"",designation:"",selected:!1,starred:!1,frequently:!1},onSaveContact:ue,onContactClose:function(){oe(!1)},onDeleteContact:fe}),r.a.createElement(u.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:y,autoHideDuration:3e3,onClose:function(){x(!1)},ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},C)}))}}}]);