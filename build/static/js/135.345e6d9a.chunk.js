(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[135],{2416:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(798),c=Object(l.withGoogleMap)((function(e){return r.a.createElement(l.GoogleMap,{defaultZoom:8,defaultCenter:{lat:41.876,lng:-87.624}},r.a.createElement(l.KmlLayer,{url:"http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml",options:{preserveViewport:!0}}))})),s=function(){return r.a.createElement(c,{containerElement:r.a.createElement("div",{className:"embed-responsive embed-responsive-21by9"}),mapElement:r.a.createElement("div",{className:"embed-responsive-item"})})},m=t(436),i=t(432),o=t(4);a.default=function(e){var a=e.match;return r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.a.createElement(i.a,{title:r.a.createElement(o.a,{id:"sidebar.map.kmLayer"}),match:a}),r.a.createElement("div",{className:"row"},r.a.createElement(m.a,{styleName:"col-lg-12",cardStyle:"mb-0"},r.a.createElement(s,null))))}},432:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(474),c=t(475),s=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),r.a.createElement(l.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return r.a.createElement(c.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:s(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=function(e){var a=e.heading,t=e.children,n=e.styleName,l=e.cardStyle,c=e.childrenStyle,s=e.headerOutside,m=e.headingStyle;return r.a.createElement("div",{className:"".concat(n)},s&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&r.a.createElement("div",{className:"entry-description"},t[0])),r.a.createElement("div",{className:"jr-card ".concat(l)},!s&&a&&r.a.createElement("div",{className:"jr-card-header ".concat(m)},r.a.createElement("h3",{className:"card-heading"},a),t.length>1&&r.a.createElement("div",{className:"sub-heading"},t[0])),r.a.createElement("div",{className:"jr-card-body ".concat(c)},t.length>1?t[1]:t)))};a.a=l,l.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);