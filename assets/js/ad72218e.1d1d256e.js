"use strict";(self.webpackChunkgmetri_xracademy=self.webpackChunkgmetri_xracademy||[]).push([[495],{9613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=a,v=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(v,o(o({ref:t},m),{},{components:r})):n.createElement(v,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1730:function(e,t,r){var n=r(9496);t.Z=function(e){var t=e.link,r=e.type,a=e.thumbnail,i=e.heading;e.onClick;return console.log(r),n.createElement("div",{className:"asset_card_base",onClick:function(){return window.open(t,"_blank")}},"image"===r&&n.createElement("div",{className:"asset_card_image"},n.createElement("img",{src:t})),"video"===r&&(a?n.createElement("div",{className:"asset_card_image"},n.createElement("img",{src:a})):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},n.createElement("g",null,n.createElement("rect",{fill:"none",height:"24",width:"24",y:"0"})),n.createElement("g",null,n.createElement("path",{d:"M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z"})))),"audio"===r&&n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"})),"model"===r&&n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M18.25 7.6l-5.5-3.18c-.46-.27-1.04-.27-1.5 0L5.75 7.6c-.46.27-.75.76-.75 1.3v6.35c0 .54.29 1.03.75 1.3l5.5 3.18c.46.27 1.04.27 1.5 0l5.5-3.18c.46-.27.75-.76.75-1.3V8.9c0-.54-.29-1.03-.75-1.3zM7 14.96v-4.62l4 2.32v4.61l-4-2.31zm5-4.03L8 8.61l4-2.31 4 2.31-4 2.32zm1 6.34v-4.61l4-2.32v4.62l-4 2.31zM7 2H3.5C2.67 2 2 2.67 2 3.5V7h2V4h3V2zm10 0h3.5c.83 0 1.5.67 1.5 1.5V7h-2V4h-3V2zM7 22H3.5c-.83 0-1.5-.67-1.5-1.5V17h2v3h3v2zm10 0h3.5c.83 0 1.5-.67 1.5-1.5V17h-2v3h-3v2z"})),n.createElement("div",{className:"asset_card_meta"},i&&n.createElement("div",{className:"asset_card_heading"},i),n.createElement("a",{href:t,target:"_blank",download:!0,onClick:function(e){return e.preventDefault()}},n.createElement("svg",{className:"asset_card_icon",xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#1A222E"},n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),n.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})))))}},8559:function(e,t,r){var n=r(9496);t.Z=function(e){var t=e.children;return n.createElement("div",{className:"assets_base"},t)}},3196:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return p},default:function(){return v}});var n=r(98),a=r(6862),i=(r(9496),r(9613)),o=r(8559),c=r(1730),l=["components"],s={sidebar_label:"Videos",sidebar_position:3},m="Videos",d={unversionedId:"asset-library/videos",id:"asset-library/videos",isDocsHomePage:!1,title:"Videos",description:"",source:"@site/docs/04-asset-library/03_videos.md",sourceDirName:"04-asset-library",slug:"/asset-library/videos",permalink:"/xracademy/asset-library/videos",editUrl:"https://github.com/gmetrixr/xracademy/edit/main/gmetri-xracademy/docs/04-asset-library/03_videos.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Videos",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Images",permalink:"/xracademy/asset-library/images"},next:{title:"Panoramic Images",permalink:"/xracademy/asset-library/pano_images"}},p=[],u={toc:p};function v(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"videos"},"Videos"),(0,i.kt)(o.Z,{mdxType:"Assets"},(0,i.kt)(c.Z,{type:"video",heading:"Video",link:"https://s.vrgmetri.com/gb-web/portal-docs/asset-library/videos/bodyStretch_loop.mp4",mdxType:"AssetCard"}),(0,i.kt)(c.Z,{type:"video",heading:"Video",link:"https://s.vrgmetri.com/gb-web/portal-docs/asset-library/videos/spaceship_v01.mp4",mdxType:"AssetCard"})))}v.isMDXComponent=!0}}]);