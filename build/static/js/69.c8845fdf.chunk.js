(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[69],{1356:function(e,a,t){e.exports=t.p+"static/media/camera.4d027af8.jpeg"},1906:function(e,a,t){e.exports=t.p+"static/media/cardboard.c2c62dba.jpg"},1907:function(e,a,t){e.exports=t.p+"static/media/macbook-40.782837b0.jpeg"},1908:function(e,a,t){e.exports=t.p+"static/media/iphone.acd63f12.jpeg"},1909:function(e,a,t){e.exports=t.p+"static/media/headphone.c252ba38.jpeg"},1910:function(e,a,t){e.exports=t.p+"static/media/alarm.d989e664.jpeg"},1911:function(e,a,t){e.exports=t.p+"static/media/office-40.13345828.jpeg"},2396:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(436),i=t(432),o=t(398),c=t(4),l=function(e){var a=e.styleName,t=e.callout,r=t.image,s=t.title,i=t.description;return n.a.createElement("div",{className:"product-row ".concat(a)},n.a.createElement("div",{className:"product-col product-thumb "},n.a.createElement("div",{className:"grid-thumb-equal"},n.a.createElement("span",{className:"jr-link grid-thumb-cover"},n.a.createElement("img",{alt:"Special Edition Party Spas",src:r})))),n.a.createElement("div",{className:"product-col product-content"},n.a.createElement("div",{className:"product-content-inner"},n.a.createElement("h2",{className:"fw-regular"},s),n.a.createElement("p",null,i),n.a.createElement(o.a,{color:"primary"},n.a.createElement(c.a,{id:"callouts.viewRange"})))))},m=[{image:t(1906),title:"Cedar Barrel Sauna",description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."},{image:t(1907),title:"Traditional Saunas",description:'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},{image:t(1908),title:"Traditional Saunas",description:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'},{image:t(1909),title:"Cedar Barrel Sauna",description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "},{image:t(1356),title:"Traditional Saunas",description:" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."},{image:t(1910),title:"Infrared Saunas",description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},{image:t(1911),title:"Infrared Saunas",description:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}],d=function(){return n.a.createElement("div",{id:"callouts"},m.map((function(e,a){return n.a.createElement(l,{key:a,styleName:a%2===0?"odd":"even",callout:e})})))};a.default=function(e){var a=e.match;return n.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},n.a.createElement(i.a,{title:n.a.createElement(c.a,{id:"extraElements.callouts"}),match:a}),n.a.createElement("div",{className:"row"},n.a.createElement(s.a,{cardStyle:"mb-0",childrenStyle:"p-0",styleName:"col-lg-12"},n.a.createElement(d,null))))}},432:function(e,a,t){"use strict";var r=t(0),n=t.n(r),s=t(474),i=t(475),o=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),r=t.split("/");return n.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},n.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),n.a.createElement(s.a,{className:"mb-0",tag:"nav"},r.map((function(e,a){return n.a.createElement(i.a,{active:r.length===a+1,tag:r.length===a+1?"span":"a",key:a,href:o(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,a,t){"use strict";var r=t(0),n=t.n(r),s=function(e){var a=e.heading,t=e.children,r=e.styleName,s=e.cardStyle,i=e.childrenStyle,o=e.headerOutside,c=e.headingStyle;return n.a.createElement("div",{className:"".concat(r)},o&&n.a.createElement("div",{className:"jr-entry-header"},n.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&n.a.createElement("div",{className:"entry-description"},t[0])),n.a.createElement("div",{className:"jr-card ".concat(s)},!o&&a&&n.a.createElement("div",{className:"jr-card-header ".concat(c)},n.a.createElement("h3",{className:"card-heading"},a),t.length>1&&n.a.createElement("div",{className:"sub-heading"},t[0])),n.a.createElement("div",{className:"jr-card-body ".concat(i)},t.length>1?t[1]:t)))};a.a=s,s.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}},474:function(e,a,t){"use strict";var r=t(3),n=t(25),s=t(0),i=t.n(s),o=t(2),c=t.n(o),l=t(55),m=t.n(l),d=t(20),u={tag:d.p,listTag:d.p,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,children:c.a.node,"aria-label":c.a.string},p=function(e){var a=e.className,t=e.listClassName,s=e.cssModule,o=e.children,c=e.tag,l=e.listTag,u=e["aria-label"],p=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),h=Object(d.l)(m()(a),s),g=Object(d.l)(m()("breadcrumb",t),s);return i.a.createElement(c,Object(r.a)({},p,{className:h,"aria-label":u}),i.a.createElement(l,{className:g},o))};p.propTypes=u,p.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=p},475:function(e,a,t){"use strict";var r=t(3),n=t(25),s=t(0),i=t.n(s),o=t(2),c=t.n(o),l=t(55),m=t.n(l),d=t(20),u={tag:d.p,active:c.a.bool,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,s=e.active,o=e.tag,c=Object(n.a)(e,["className","cssModule","active","tag"]),l=Object(d.l)(m()(a,!!s&&"active","breadcrumb-item"),t);return i.a.createElement(o,Object(r.a)({},c,{className:l,"aria-current":s?"page":void 0}))};p.propTypes=u,p.defaultProps={tag:"li"},a.a=p}}]);