(this["webpackJsonpjumbo-hooks"]=this["webpackJsonpjumbo-hooks"]||[]).push([[122],{1902:function(e){e.exports=JSON.parse('[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]')},2422:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(798),s=a(1900),o=a.n(s),c=a(1902),i=window.google,m=Object(n.withGoogleMap)((function(e){return r.a.createElement(n.GoogleMap,{defaultZoom:11,defaultCenter:e.center,defaultOptions:{styles:c}},r.a.createElement(o.a,{defaultPosition:e.center,options:{closeBoxURL:"",enableEventPropagation:!0}},r.a.createElement("div",{style:{backgroundColor:"yellow",opacity:.75,padding:"20px"},onClick:e.onClickFromChildrenOfInfoBox},r.a.createElement("div",{style:{fontSize:"16px",fontColor:"#08233B"}},"Taipei"))))})),y=function(){return r.a.createElement(m,{containerElement:r.a.createElement("div",{className:"embed-responsive embed-responsive-21by9"}),mapElement:r.a.createElement("div",{className:"embed-responsive-item"}),center:new i.maps.LatLng(44.8799929,21.3190073),onClickFromChildrenOfInfoBox:function(e){console.log(e)}})},d=a(436),p=a(432),u=a(4);t.default=function(e){var t=e.match;return r.a.createElement("div",{className:"animated slideInUpTiny animation-duration-3"},r.a.createElement(p.a,{title:r.a.createElement(u.a,{id:"sidebar.map.styled"}),match:t}),r.a.createElement("div",{className:"row"},r.a.createElement(d.a,{styleName:"col-lg-12",cardStyle:"mb-0"},r.a.createElement(y,null))))}},432:function(e,t,a){"use strict";var l=a(0),r=a.n(l),n=a(474),s=a(475),o=function(e,t,a){return 0===a?"#/":"#/"+e.split(t)[0]+t};t.a=function(e){var t=e.title,a=e.match.path.substr(1),l=a.split("/");return r.a.createElement("div",{className:"page-heading d-sm-flex justify-content-sm-between align-items-sm-center"},r.a.createElement("h2",{className:"title mb-3 mb-sm-0"},t),r.a.createElement(n.a,{className:"mb-0",tag:"nav"},l.map((function(e,t){return r.a.createElement(s.a,{active:l.length===t+1,tag:l.length===t+1?"span":"a",key:t,href:o(a,e,t)},function(e){var t=e.split("-");return t.length>1?t[0].charAt(0).toUpperCase()+t[0].slice(1)+" "+t[1].charAt(0).toUpperCase()+t[1].slice(1):e.charAt(0).toUpperCase()+e.slice(1)}(e))}))))}},436:function(e,t,a){"use strict";var l=a(0),r=a.n(l),n=function(e){var t=e.heading,a=e.children,l=e.styleName,n=e.cardStyle,s=e.childrenStyle,o=e.headerOutside,c=e.headingStyle;return r.a.createElement("div",{className:"".concat(l)},o&&r.a.createElement("div",{className:"jr-entry-header"},r.a.createElement("h3",{className:"entry-heading"},t),a.length>1&&r.a.createElement("div",{className:"entry-description"},a[0])),r.a.createElement("div",{className:"jr-card ".concat(n)},!o&&t&&r.a.createElement("div",{className:"jr-card-header ".concat(c)},r.a.createElement("h3",{className:"card-heading"},t),a.length>1&&r.a.createElement("div",{className:"sub-heading"},a[0])),r.a.createElement("div",{className:"jr-card-body ".concat(s)},a.length>1?a[1]:a)))};t.a=n,n.defaultProps={cardStyle:"",headingStyle:"",childrenStyle:"",styleName:"col-lg-6 col-sm-12"}}}]);