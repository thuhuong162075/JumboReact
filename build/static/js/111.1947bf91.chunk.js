(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[111],{2381:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(432),c=t(4),s=t(19),i=t(1171),m={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},o={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},d={display:"flex",minWidth:0,overflow:"hidden"},p={display:"block",width:"auto",height:"100%"};var u=function(e){var a=Object(l.useState)([]),t=Object(s.a)(a,2),r=t[0],c=t[1],u=Object(i.a)({accept:"image/*",onDrop:function(e){c(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),g=u.getRootProps,E=u.getInputProps,b=r.map((function(e){return n.a.createElement("div",{style:o,key:e.name},n.a.createElement("div",{style:d},n.a.createElement("img",{alt:e.name,src:e.preview,style:p})))}));return Object(l.useEffect)((function(){return function(){r.forEach((function(e){return URL.revokeObjectURL(e.preview)}))}}),[r]),n.a.createElement("div",{className:"dropzone-card"},n.a.createElement("div",{className:"dropzone"},n.a.createElement("div",g({className:"dropzone-file-btn"}),n.a.createElement("input",E()),n.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"))),n.a.createElement("div",{className:"dropzone-content",style:m},b))},g=t(436);var E=function(e){var a=Object(i.a)({accept:"image/jpeg, image/png"}),t=a.acceptedFiles,l=a.rejectedFiles,r=a.getRootProps,c=a.getInputProps,s=t.map((function(e){return n.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")})),m=l.map((function(e){return n.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")}));return n.a.createElement("div",{className:"dropzone-card"},n.a.createElement("div",{className:"dropzone"},n.a.createElement("div",r({className:"dropzone-file-btn"}),n.a.createElement("input",c()),n.a.createElement("p",null,"Drag 'n' drop some files here, or click to select files"),n.a.createElement("em",null,"(Only *.jpeg and *.png images will be accepted)"))),n.a.createElement("div",{className:"dropzone-content"},n.a.createElement("h3",null,"Accepted files"),n.a.createElement("ul",null,s),n.a.createElement("h3",null,"Rejected files"),n.a.createElement("ul",null,m)))};var b=function(e){var a=Object(i.a)({accept:".jpeg,.png,.jpg"}),t=a.getRootProps,l=a.getInputProps,r=a.isDragActive,c=a.isDragAccept,s=a.isDragReject;return n.a.createElement("div",{className:"dropzone-card"},n.a.createElement("div",{className:"dropzone"},n.a.createElement("div",t({className:"dropzone-file-btn"}),n.a.createElement("input",l()),c&&n.a.createElement("p",null,"All files will be accepted"),s&&n.a.createElement("p",null,"Some files will be rejected"),!r&&n.a.createElement("p",null,"Drop some files here ..."))))};var h=function(e){var a=Object(i.a)({noClick:!0,noKeyboard:!0}),t=a.getRootProps,l=a.getInputProps,r=a.open,c=a.acceptedFiles.map((function(e){return n.a.createElement("li",{key:e.path},e.path," - ",e.size," bytes")}));return n.a.createElement("div",{className:"dropzone-card"},n.a.createElement("div",{className:"dropzone"},n.a.createElement("div",t({className:"dropzone-file-btn"}),n.a.createElement("input",l()),n.a.createElement("p",null,"Drag 'n' drop some files here")),n.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:r},"Open File Dialog")),n.a.createElement("div",{className:"dropzone-content"},n.a.createElement("h3",null,"Accepted Files"),n.a.createElement("ul",null,c)))};a.default=function(e){return n.a.createElement("div",null,n.a.createElement(r.a,{title:n.a.createElement(c.a,{id:"sidebar.extensions.dropzone"}),match:e.match}),n.a.createElement("div",{className:"row"},n.a.createElement(g.a,{styleName:"col-sm-6",cardStyle:"",childrenStyle:"text-center"},n.a.createElement(E,null)),n.a.createElement(g.a,{styleName:"col-sm-6",cardStyle:"",childrenStyle:"text-center"},n.a.createElement(b,null)),n.a.createElement(g.a,{styleName:"col-sm-6",cardStyle:"mb-sm-0",childrenStyle:"text-center"},n.a.createElement(h,null)),n.a.createElement(g.a,{styleName:"col-sm-6",cardStyle:"mb-0",childrenStyle:"text-center"},n.a.createElement(u,null))))}},432:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(474),c=t(475),s=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),l=t.split("/");return n.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},n.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),n.a.createElement(r.a,{className:"mb-0",tag:"nav"},l.map((function(e,a){return n.a.createElement(c.a,{active:l.length===a+1,tag:l.length===a+1?"span":"a",key:a,href:s(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=function(e){var a=e.heading,t=e.children,l=e.styleName,r=e.cardStyle,c=e.childrenStyle,s=e.headerOutside,i=e.headingStyle;return n.a.createElement("div",{className:"".concat(l)},s&&n.a.createElement("div",{className:"jr-entry-header"},n.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&n.a.createElement("div",{className:"entry-description"},t[0])),n.a.createElement("div",{className:"jr-card ".concat(r)},!s&&a&&n.a.createElement("div",{className:"jr-card-header ".concat(i)},n.a.createElement("h3",{className:"card-heading"},a),t.length>1&&n.a.createElement("div",{className:"sub-heading"},t[0])),n.a.createElement("div",{className:"jr-card-body ".concat(c)},t.length>1?t[1]:t)))};a.a=r,r.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},474:function(e,a,t){"use strict";var l=t(3),n=t(25),r=t(0),c=t.n(r),s=t(2),i=t.n(s),m=t(55),o=t.n(m),d=t(20),p={tag:d.p,listTag:d.p,className:i.a.string,listClassName:i.a.string,cssModule:i.a.object,children:i.a.node,"aria-label":i.a.string},u=function(e){var a=e.className,t=e.listClassName,r=e.cssModule,s=e.children,i=e.tag,m=e.listTag,p=e["aria-label"],u=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),g=Object(d.l)(o()(a),r),E=Object(d.l)(o()("breadcrumb",t),r);return c.a.createElement(i,Object(l.a)({},u,{className:g,"aria-label":p}),c.a.createElement(m,{className:E},s))};u.propTypes=p,u.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=u},475:function(e,a,t){"use strict";var l=t(3),n=t(25),r=t(0),c=t.n(r),s=t(2),i=t.n(s),m=t(55),o=t.n(m),d=t(20),p={tag:d.p,active:i.a.bool,className:i.a.string,cssModule:i.a.object},u=function(e){var a=e.className,t=e.cssModule,r=e.active,s=e.tag,i=Object(n.a)(e,["className","cssModule","active","tag"]),m=Object(d.l)(o()(a,!!r&&"active","breadcrumb-item"),t);return c.a.createElement(s,Object(l.a)({},i,{className:m,"aria-current":r?"page":void 0}))};u.propTypes=p,u.defaultProps={tag:"li"},a.a=u}}]);