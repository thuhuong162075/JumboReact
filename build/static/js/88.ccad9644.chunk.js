(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[88],{2411:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(0),r=a.n(c),s=a(232),l=a(148),i=a(149),o=a(967),u=Object(o.c)((function(){return r.a.createElement("i",{className:"zmdi zmdi-menu draggable-icon",style:{fontSize:25}})})),m=Object(o.b)((function(e){var t=Object(c.useState)(),a=Object(n.a)(t,2),o=a[0],m=a[1],d=Object(c.useState)(),p=Object(n.a)(d,2),b=p[0],f=p[1],g=function(){f(!1)},E=e.contact,v=E.name,h=E.thumb,j=E.email,N=E.phone,O=E.designation,x=E.starred;return r.a.createElement("div",{className:"col-12 contact-item ripple row no-gutters align-items-center py-2 px-3 py-sm-4 px-sm-6"},r.a.createElement(u,null),null===h||""===h?r.a.createElement("div",{className:"rounded-circle size-40 bg-blue text-center text-white mx-4",style:{fontSize:20}},v.charAt(0).toUpperCase()):r.a.createElement("img",{className:"rounded-circle size-40 mx-4",alt:v,src:h}),r.a.createElement("div",{className:"col text-truncate font-weight-bold"},v),r.a.createElement("div",{className:"col email text-truncate px-1 d-none d-lg-flex"},j),r.a.createElement("div",{className:"col phone text-truncate px-1 d-none d-md-flex"},N),r.a.createElement("div",{className:"col job-title text-truncate px-1 d-none d-sm-flex"},O),r.a.createElement("div",{className:"col-auto actions"},r.a.createElement(s.a,{onClick:function(){}},x?r.a.createElement("i",{className:"zmdi zmdi-star"}):r.a.createElement("i",{className:"zmdi zmdi-star-outline"})),r.a.createElement(s.a,{onClick:function(e){f(!0),m(e.currentTarget)}},r.a.createElement("i",{className:"zmdi zmdi-more-vert"})),r.a.createElement(l.a,{id:"long-menu",anchorEl:o,open:b,onClose:g,MenuListProps:{style:{width:100}}},["Edit","Delete"].map((function(e){return r.a.createElement(i.a,{key:e,onClick:function(){g()}},e)})))))})),d=a(158),p=a(432),b=a(4),f=Object(o.a)((function(e){var t=e.contacts;return r.a.createElement("div",{className:"row"},t.map((function(e,t){return r.a.createElement(m,{key:t,index:t,contact:e})})))}));t.default=function(e){var t=Object(c.useState)(d.a),a=Object(n.a)(t,2),s=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(p.a,{title:r.a.createElement(b.a,{id:"sidebar.extensions.dragNDrop"}),match:e.match}),r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.a.createElement(f,{contacts:s,onSortEnd:function(e){var t=e.oldIndex,a=e.newIndex;l(Object(o.d)(s,t,a))},useDragHandle:!0})))}},432:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(474),s=a(475),l=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t};t.a=function(e){var t=e.title,a=e.match.path.substr(1),n=a.split("/");return c.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},c.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t),c.a.createElement(r.a,{className:"mb-0",tag:"nav"},n.map((function(e,t){return c.a.createElement(s.a,{active:n.length===t+1,tag:n.length===t+1?"span":"a",key:t,href:l(a,e,t)},function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},474:function(e,t,a){"use strict";var n=a(3),c=a(25),r=a(0),s=a.n(r),l=a(2),i=a.n(l),o=a(55),u=a.n(o),m=a(20),d={tag:m.p,listTag:m.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},p=function(e){var t=e.className,a=e.listClassName,r=e.cssModule,l=e.children,i=e.tag,o=e.listTag,d=e["aria-label"],p=Object(c.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),b=Object(m.l)(u()(t),r),f=Object(m.l)(u()("breadcrumb",a),r);return s.a.createElement(i,Object(n.a)({},p,{className:b,"aria-label":d}),s.a.createElement(o,{className:f},l))};p.propTypes=d,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},t.a=p},475:function(e,t,a){"use strict";var n=a(3),c=a(25),r=a(0),s=a.n(r),l=a(2),i=a.n(l),o=a(55),u=a.n(o),m=a(20),d={tag:m.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.active,l=e.tag,i=Object(c.a)(e,["className","cssModule","active","tag"]),o=Object(m.l)(u()(t,!!r&&"active","breadcrumb-item"),a);return s.a.createElement(l,Object(n.a)({},i,{className:o,"aria-current":r?"page":void 0}))};p.propTypes=d,p.defaultProps={tag:"li"},t.a=p},821:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(112),c=a(36);function r(e,t){return!t||"object"!==Object(n.a)(t)&&"function"!==typeof t?Object(c.a)(e):t}},822:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},831:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return c}))}}]);