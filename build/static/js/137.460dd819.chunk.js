(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[137],{2418:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t(398),i=t(798),s={mapContainer:{height:500},overlayView:{background:"#fff",border:"1px solid #ccc",padding:15}};function m(e,a){return{x:-e/2,y:-a/2}}var o=Object(i.withGoogleMap)((function(e){return c.a.createElement(i.GoogleMap,{defaultZoom:15,defaultCenter:{lat:47.646935,lng:-122.303763}},c.a.createElement(i.OverlayView,{position:{lat:47.646935,lng:-122.303763},mapPaneName:i.OverlayView.OVERLAY_MOUSE_TARGET,getPixelPositionOffset:m},c.a.createElement("div",{style:s.overlayView},c.a.createElement("h1",null,"OverlayView"),c.a.createElement(l.a,{variant:"contained",color:"primary",onClick:e.onClick},"I have been clicked ",e.count," time",1===e.count?"":"s"))))})),d=function(){var e=Object(n.useState)(0),a=Object(r.a)(e,2),t=a[0],l=a[1];return c.a.createElement(o,{containerElement:c.a.createElement("div",{className:"embed-responsive embed-responsive-21by9"}),mapElement:c.a.createElement("div",{className:"embed-responsive-item"}),count:t,onClick:function(){l(t+1)}})},u=t(436),h=t(432),v=t(4);a.default=function(e){var a=e.match;return c.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},c.a.createElement(h.a,{title:c.a.createElement(v.a,{id:"sidebar.map.overlay"}),match:a}),c.a.createElement("div",{className:"row"},c.a.createElement(u.a,{styleName:"col-lg-12",cardStyle:"mb-0"},c.a.createElement(d,null))))}},432:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=t(474),l=t(475),i=function(e,a,t){return 0===t?"#/":"#/"+e.split(a)[0]+a};a.a=function(e){var a=e.title,t=e.match.path.substr(1),n=t.split("/");return c.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},c.a.createElement("h2",{className:"title mb-3 mb-sm-0"},a),c.a.createElement(r.a,{className:"mb-0",tag:"nav"},n.map((function(e,a){return c.a.createElement(l.a,{active:n.length===a+1,tag:n.length===a+1?"span":"a",key:a,href:i(t,e,a)},function(e){var a=e.split("-");return a.length>1?a[0].charAt(0).toUpperCase()+a[0].slice(1)+" "+a[1].charAt(0).toUpperCase()+a[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=function(e){var a=e.heading,t=e.children,n=e.styleName,r=e.cardStyle,l=e.childrenStyle,i=e.headerOutside,s=e.headingStyle;return c.a.createElement("div",{className:"".concat(n)},i&&c.a.createElement("div",{className:"jr-entry-header"},c.a.createElement("h3",{className:"entry-heading"},a),t.length>1&&c.a.createElement("div",{className:"entry-description"},t[0])),c.a.createElement("div",{className:"jr-card ".concat(r)},!i&&a&&c.a.createElement("div",{className:"jr-card-header ".concat(s)},c.a.createElement("h3",{className:"card-heading"},a),t.length>1&&c.a.createElement("div",{className:"sub-heading"},t[0])),c.a.createElement("div",{className:"jr-card-body ".concat(l)},t.length>1?t[1]:t)))};a.a=r,r.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);