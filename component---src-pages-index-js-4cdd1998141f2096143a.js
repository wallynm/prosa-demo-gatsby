(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),l=a.n(i),s=a("7oih"),M=a("obyI"),c=a.n(M),o=a("dwco"),n=a.n(o);var L=function(e){return e.children},u=function(e){var t,a;function i(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=i.prototype;return s.componentDidMount=function(){n.a.polyfill()},s.handleClick=function(e){e.preventDefault();var t=this.props.onClick,a=void 0===t?function(){}:t,i=0,l=!0,s=this.props,M=s.type,c=s.element,o=s.offset,n=s.timeout;if(M&&c)switch(M){case"class":l=!!(i=document.getElementsByClassName(c)[0]);break;case"id":l=!!(i=document.getElementById(c))}l?this.scrollTo(i,o,n):console.log("Element not found: "+c),a(e)},s.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var i=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:i+t,left:0,behavior:"smooth"})}),a):window.scroll({top:i+t,left:0,behavior:"smooth"})},s.render=function(){return l.a.createElement(L,null,"object"==typeof this.props.children?l.a.cloneElement(this.props.children,{onClick:this.handleClick}):l.a.createElement("span",{onClick:this.handleClick},this.props.children))},i}(l.a.Component);var r=function(e){var t,a;function i(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(e){a.setState({openMenu:e})},a.handleScroll=function(){var e=a.state.visibilityClass;window.pageYOffset>300?"navbar-shrink"!==e&&a.setState({visibilityClass:"navbar-shrink"}):"navbar-shrink"===e&&a.setState({visibilityClass:""})},a.state={openMenu:!1,visibilityClass:""},a}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=i.prototype;return s.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},s.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},s.render=function(){var e=this,t=this.state,a=t.openMenu,i=t.visibilityClass;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top "+i,id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},c.a.siteTitle),l.a.createElement("button",{onClick:function(t){return e.toggleMenu(!a)},className:"navbar-toggler navbar-toggler-right "+(a?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":a,"aria-label":"Toggle navigation"},"Menu",l.a.createElement("i",{className:"fas fa-bars"})),l.a.createElement("div",{className:"collapse navbar-collapse "+(a?"show":""),id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(u,{onClick:function(t){return e.toggleMenu(!a)},type:"id",element:"download"},l.a.createElement("a",{className:"nav-link",href:"#download"},"Download"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u,{onClick:function(t){return e.toggleMenu(!a)},type:"id",element:"features"},l.a.createElement("a",{className:"nav-link",href:"#features"},"Features"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(u,{onClick:function(t){return e.toggleMenu(!a)},type:"id",element:"contact"},l.a.createElement("a",{className:"nav-link",href:"#contact"},"Contact")))))))},i}(i.Component),w=a("JwsL");function j(){return l.a.createElement("ul",{className:"list-inline list-social"},c.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return l.a.createElement("li",{key:a,className:"list-inline-item  "},l.a.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("i",{className:"fab  "+t})))})))}var N=a("jM66"),C=a.n(N),m=a("uHrw"),I=a.n(m),d=a("d4CT"),y=a.n(d);t.default=function(){return l.a.createElement(s.a,null,l.a.createElement(r,null),l.a.createElement("header",{className:"masthead"},l.a.createElement("div",{className:"container h-100"},l.a.createElement("div",{className:"row h-100"},l.a.createElement("div",{className:"col-lg-7 my-auto"},l.a.createElement("div",{className:"header-content mx-auto"},l.a.createElement("h1",{className:"mb-5"},"New Age is an gatsby starter for app landing page that will help you beautifully showcase your new mobile app, or anything else!"),l.a.createElement(u,{type:"id",element:"download"},l.a.createElement("a",{href:"#download",className:"btn btn-outline btn-xl"},"Start Now for Free!")))),l.a.createElement("div",{className:"col-lg-5 my-auto"},l.a.createElement("div",{className:"device-container"},l.a.createElement("div",{className:"device-mockup iphone6_plus portrait white"},l.a.createElement("div",{className:"device"},l.a.createElement("div",{className:"screen"},l.a.createElement("img",{src:C.a,className:"img-fluid",alt:""})),l.a.createElement("div",{className:"button"})))))))),l.a.createElement("section",{className:"download bg-primary text-center",id:"download"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 mx-auto"},l.a.createElement("h2",{className:"section-heading"},"Discover what all the buzz is about!"),l.a.createElement("p",null,"Our app is available on any mobile device! Download now to get started!"),l.a.createElement("div",{className:"badges"},l.a.createElement("a",{className:"badge-link",href:"/#"},l.a.createElement("img",{src:I.a,alt:""})),l.a.createElement("a",{className:"badge-link",href:"/#"},l.a.createElement("img",{src:y.a,alt:""}))))))),l.a.createElement("section",{className:"features",id:"features"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section-heading text-center"},l.a.createElement("h2",null,"Unlimited Features, Unlimited Fun"),l.a.createElement("p",{className:"text-muted"},"Check out what you can do with this app theme!"),l.a.createElement("hr",null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 my-auto"},l.a.createElement("div",{className:"device-container"},l.a.createElement("div",{className:"device-mockup iphone6_plus portrait white"},l.a.createElement("div",{className:"device"},l.a.createElement("div",{className:"screen"},l.a.createElement("img",{src:C.a,className:"img-fluid",alt:""})),l.a.createElement("div",{className:"button"}))))),l.a.createElement("div",{className:"col-lg-8 my-auto"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"feature-item"},l.a.createElement("i",{className:"icon-screen-smartphone text-primary"}),l.a.createElement("h3",null,"Device Mockups"),l.a.createElement("p",{className:"text-muted"},"Ready to use HTML/CSS device mockups, no Photoshop required!"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"feature-item"},l.a.createElement("i",{className:"icon-camera text-primary"}),l.a.createElement("h3",null,"Flexible Use"),l.a.createElement("p",{className:"text-muted"},"Put an image, video, animation, or anything else in the screen!")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"feature-item"},l.a.createElement("i",{className:"icon-present text-primary"}),l.a.createElement("h3",null,"Free to Use"),l.a.createElement("p",{className:"text-muted"},"As always, this theme is free to download and use for any purpose!"))),l.a.createElement("div",{className:"col-lg-6"},l.a.createElement("div",{className:"feature-item"},l.a.createElement("i",{className:"icon-lock-open text-primary"}),l.a.createElement("h3",null,"Open Source"),l.a.createElement("p",{className:"text-muted"},"Since this theme is MIT licensed, you can use it commercially!"))))))))),l.a.createElement("section",{className:"cta"},l.a.createElement("div",{className:"cta-content"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Stop waiting.",l.a.createElement("br",null),"Start building."),l.a.createElement(u,{type:"id",element:"contact"},l.a.createElement("a",{href:"#contact",className:"btn btn-outline btn-xl"},"Let's Get Started!")))),l.a.createElement("div",{className:"overlay"})),l.a.createElement("section",{className:"contact bg-primary",id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"We",l.a.createElement("i",{className:"fas fa-heart"}),"new friends!"),l.a.createElement(j,null))),l.a.createElement(w.a,null))}},d4CT:function(e,t,a){e.exports=a.p+"static/app-store-badge-d0558d91063038236b60e3ef71fdc1fd.svg"},dwco:function(e,t,a){a("Oyvg"),a("eM6i"),a("2Spj"),function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,i=e.HTMLElement||e.Element,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:i.prototype.scroll||c,scrollIntoView:i.prototype.scrollIntoView},s=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,M=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?j.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(o(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):j.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},i.prototype.scroll=i.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==o(arguments[0])){var e=arguments[0].left,t=arguments[0].top;j.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},i.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==o(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},i.prototype.scrollIntoView=function(){if(!0!==o(arguments[0])){var a=r(this),i=a.getBoundingClientRect(),s=this.getBoundingClientRect();a!==t.body?(j.call(this,a,a.scrollLeft+s.left-i.left,a.scrollTop+s.top-i.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})):e.scrollBy({left:s.left,top:s.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function o(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function n(e,t){return"Y"===t?e.clientHeight+M<e.scrollHeight:"X"===t?e.clientWidth+M<e.scrollWidth:void 0}function L(t,a){var i=e.getComputedStyle(t,null)["overflow"+a];return"auto"===i||"scroll"===i}function u(e){var t=n(e,"Y")&&L(e,"Y"),a=n(e,"X")&&L(e,"X");return t||a}function r(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function w(t){var a,i,l,M,c=(s()-t.startTime)/468;M=c=c>1?1:c,a=.5*(1-Math.cos(Math.PI*M)),i=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,i,l),i===t.x&&l===t.y||e.requestAnimationFrame(w.bind(e,t))}function j(a,i,M){var o,n,L,u,r=s();a===t.body?(o=e,n=e.scrollX||e.pageXOffset,L=e.scrollY||e.pageYOffset,u=l.scroll):(o=a,n=a.scrollLeft,L=a.scrollTop,u=c),w({scrollable:o,method:u,startTime:r,startX:n,startY:L,x:i,y:M})}}}}()},jM66:function(e,t,a){e.exports=a.p+"static/demo-screen-1-82bcf3c843c811de878424e8d8307250.jpg"},obyI:function(e,t){e.exports={siteTitle:"Gatsby Starter New age",manifestName:"newage",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"/prosa-demo-gatsby/",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/anubhavsrivastava"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://linkedin.com/in/theanubhav/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/onlyanubhav"},{icon:"fa-facebook-f",name:"Facebook",url:"https://facebook.com/theanubhav"}]}},uHrw:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIwLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImFydHdvcmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMzUgNDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzNSA0MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7ZmlsbC1vcGFjaXR5OjA7fQoJLnN0MXtmaWxsOiNBNkE2QTY7fQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qze2ZpbGw6I0ZGRkZGRjt9Cgkuc3Q0e2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0NXtmaWxsOnVybCgjU1ZHSURfMl8pO30KCS5zdDZ7ZmlsbDp1cmwoI1NWR0lEXzNfKTt9Cgkuc3Q3e2ZpbGw6dXJsKCNTVkdJRF80Xyk7fQoJLnN0OHtvcGFjaXR5OjAuMjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDl7b3BhY2l0eTowLjEyO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLnN0MTB7b3BhY2l0eTowLjI1O2ZpbGw6I0ZGRkZGRjtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KPC9zdHlsZT4KPGc+Cgk8cmVjdCB4PSItMTAiIHk9Ii0xMCIgY2xhc3M9InN0MCIgd2lkdGg9IjE1NSIgaGVpZ2h0PSI2MCIvPgoJPGc+CgkJPHBhdGggZD0iTTEzMCw0MEg1Yy0yLjgsMC01LTIuMi01LTVWNWMwLTIuOCwyLjItNSw1LTVoMTI1YzIuOCwwLDUsMi4yLDUsNXYzMEMxMzUsMzcuOCwxMzIuOCw0MCwxMzAsNDB6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzMCwwLjhjMi4zLDAsNC4yLDEuOSw0LjIsNC4ydjMwYzAsMi4zLTEuOSw0LjItNC4yLDQuMkg1Yy0yLjMsMC00LjItMS45LTQuMi00LjJWNWMwLTIuMywxLjktNC4yLDQuMi00LjIKCQkJCUgxMzAgTTEzMCwwSDVDMi4yLDAsMCwyLjMsMCw1djMwYzAsMi44LDIuMiw1LDUsNWgxMjVjMi44LDAsNS0yLjIsNS01VjVDMTM1LDIuMywxMzIuOCwwLDEzMCwwTDEzMCwweiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik00Ny40LDEwLjJjMCwwLjgtMC4yLDEuNS0wLjcsMmMtMC42LDAuNi0xLjMsMC45LTIuMiwwLjljLTAuOSwwLTEuNi0wLjMtMi4yLTAuOWMtMC42LTAuNi0wLjktMS4zLTAuOS0yLjIKCQkJYzAtMC45LDAuMy0xLjYsMC45LTIuMmMwLjYtMC42LDEuMy0wLjksMi4yLTAuOWMwLjQsMCwwLjgsMC4xLDEuMiwwLjNjMC40LDAuMiwwLjcsMC40LDAuOSwwLjdsLTAuNSwwLjUKCQkJYy0wLjQtMC41LTAuOS0wLjctMS42LTAuN2MtMC42LDAtMS4yLDAuMi0xLjYsMC43Yy0wLjUsMC40LTAuNywxLTAuNywxLjdzMC4yLDEuMywwLjcsMS43YzAuNSwwLjQsMSwwLjcsMS42LDAuNwoJCQljMC43LDAsMS4yLTAuMiwxLjctMC43YzAuMy0wLjMsMC41LTAuNywwLjUtMS4yaC0yLjJWOS44aDIuOUM0Ny40LDkuOSw0Ny40LDEwLjEsNDcuNCwxMC4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01Miw3LjdoLTIuN3YxLjloMi41djAuN2gtMi41djEuOUg1MlYxM2gtMy41VjdINTJWNy43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01NS4zLDEzaC0wLjhWNy43aC0xLjdWN0g1N3YwLjdoLTEuN1YxM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTkuOSwxM1Y3aDAuOHY2SDU5Ljl6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY0LjEsMTNoLTAuOFY3LjdoLTEuN1Y3aDQuMXYwLjdoLTEuN1YxM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzMuNiwxMi4yYy0wLjYsMC42LTEuMywwLjktMi4yLDAuOWMtMC45LDAtMS42LTAuMy0yLjItMC45Yy0wLjYtMC42LTAuOS0xLjMtMC45LTIuMnMwLjMtMS42LDAuOS0yLjIKCQkJYzAuNi0wLjYsMS4zLTAuOSwyLjItMC45YzAuOSwwLDEuNiwwLjMsMi4yLDAuOWMwLjYsMC42LDAuOSwxLjMsMC45LDIuMkM3NC41LDEwLjksNzQuMiwxMS42LDczLjYsMTIuMnogTTY5LjgsMTEuNwoJCQljMC40LDAuNCwxLDAuNywxLjYsMC43YzAuNiwwLDEuMi0wLjIsMS42LTAuN2MwLjQtMC40LDAuNy0xLDAuNy0xLjdTNzMuNSw4LjcsNzMsOC4zYy0wLjQtMC40LTEtMC43LTEuNi0wLjcKCQkJYy0wLjYsMC0xLjIsMC4yLTEuNiwwLjdjLTAuNCwwLjQtMC43LDEtMC43LDEuN1M2OS4zLDExLjMsNjkuOCwxMS43eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik03NS42LDEzVjdoMC45bDIuOSw0LjdoMGwwLTEuMlY3aDAuOHY2aC0wLjhsLTMuMS00LjloMGwwLDEuMlYxM0g3NS42eiIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0MyIgZD0iTTY4LjEsMjEuOGMtMi40LDAtNC4zLDEuOC00LjMsNC4zYzAsMi40LDEuOSw0LjMsNC4zLDQuM2MyLjQsMCw0LjMtMS44LDQuMy00LjMKCQlDNzIuNCwyMy41LDcwLjUsMjEuOCw2OC4xLDIxLjh6IE02OC4xLDI4LjZjLTEuMywwLTIuNC0xLjEtMi40LTIuNmMwLTEuNSwxLjEtMi42LDIuNC0yLjZjMS4zLDAsMi40LDEsMi40LDIuNgoJCUM3MC41LDI3LjUsNjkuNCwyOC42LDY4LjEsMjguNnogTTU4LjgsMjEuOGMtMi40LDAtNC4zLDEuOC00LjMsNC4zYzAsMi40LDEuOSw0LjMsNC4zLDQuM2MyLjQsMCw0LjMtMS44LDQuMy00LjMKCQlDNjMuMSwyMy41LDYxLjIsMjEuOCw1OC44LDIxLjh6IE01OC44LDI4LjZjLTEuMywwLTIuNC0xLjEtMi40LTIuNmMwLTEuNSwxLjEtMi42LDIuNC0yLjZjMS4zLDAsMi40LDEsMi40LDIuNgoJCUM2MS4yLDI3LjUsNjAuMSwyOC42LDU4LjgsMjguNnogTTQ3LjcsMjMuMXYxLjhoNC4zYy0wLjEsMS0wLjUsMS44LTEsMi4zYy0wLjYsMC42LTEuNiwxLjMtMy4zLDEuM2MtMi43LDAtNC43LTIuMS00LjctNC44CgkJczIuMS00LjgsNC43LTQuOGMxLjQsMCwyLjUsMC42LDMuMywxLjNsMS4zLTEuM2MtMS4xLTEtMi41LTEuOC00LjUtMS44Yy0zLjYsMC02LjcsMy02LjcsNi42YzAsMy42LDMuMSw2LjYsNi43LDYuNgoJCWMyLDAsMy40LTAuNiw0LjYtMS45YzEuMi0xLjIsMS42LTIuOSwxLjYtNC4yYzAtMC40LDAtMC44LTAuMS0xLjFINDcuN3ogTTkzLjEsMjQuNWMtMC40LTEtMS40LTIuNy0zLjYtMi43Yy0yLjIsMC00LDEuNy00LDQuMwoJCWMwLDIuNCwxLjgsNC4zLDQuMiw0LjNjMS45LDAsMy4xLTEuMiwzLjUtMS45bC0xLjQtMWMtMC41LDAuNy0xLjEsMS4yLTIuMSwxLjJjLTEsMC0xLjYtMC40LTIuMS0xLjNsNS43LTIuNEw5My4xLDI0LjV6CgkJIE04Ny4zLDI1LjljMC0xLjYsMS4zLTIuNSwyLjItMi41YzAuNywwLDEuNCwwLjQsMS42LDAuOUw4Ny4zLDI1Ljl6IE04Mi42LDMwaDEuOVYxNy41aC0xLjlWMzB6IE03OS42LDIyLjdMNzkuNiwyMi43CgkJYy0wLjUtMC41LTEuMy0xLTIuMy0xYy0yLjEsMC00LjEsMS45LTQuMSw0LjNjMCwyLjQsMS45LDQuMiw0LjEsNC4yYzEsMCwxLjgtMC41LDIuMi0xaDAuMXYwLjZjMCwxLjYtMC45LDIuNS0yLjMsMi41CgkJYy0xLjEsMC0xLjktMC44LTIuMS0xLjVsLTEuNiwwLjdjMC41LDEuMSwxLjcsMi41LDMuOCwyLjVjMi4yLDAsNC0xLjMsNC00LjRWMjJoLTEuOFYyMi43eiBNNzcuNCwyOC42Yy0xLjMsMC0yLjQtMS4xLTIuNC0yLjYKCQljMC0xLjUsMS4xLTIuNiwyLjQtMi42YzEuMywwLDIuMywxLjEsMi4zLDIuNkM3OS43LDI3LjUsNzguNywyOC42LDc3LjQsMjguNnogTTEwMS44LDE3LjVoLTQuNVYzMGgxLjl2LTQuN2gyLjYKCQljMi4xLDAsNC4xLTEuNSw0LjEtMy45UzEwMy45LDE3LjUsMTAxLjgsMTcuNXogTTEwMS45LDIzLjVoLTIuN3YtNC4zaDIuN2MxLjQsMCwyLjIsMS4yLDIuMiwyLjFDMTA0LDIyLjQsMTAzLjIsMjMuNSwxMDEuOSwyMy41egoJCSBNMTEzLjQsMjEuN2MtMS40LDAtMi44LDAuNi0zLjMsMS45bDEuNywwLjdjMC40LTAuNywxLTAuOSwxLjctMC45YzEsMCwxLjksMC42LDIsMS42djAuMWMtMC4zLTAuMi0xLjEtMC41LTEuOS0wLjUKCQljLTEuOCwwLTMuNiwxLTMuNiwyLjhjMCwxLjcsMS41LDIuOCwzLjEsMi44YzEuMywwLDEuOS0wLjYsMi40LTEuMmgwLjF2MWgxLjh2LTQuOEMxMTcuMiwyMywxMTUuNSwyMS43LDExMy40LDIxLjd6IE0xMTMuMiwyOC42CgkJYy0wLjYsMC0xLjUtMC4zLTEuNS0xLjFjMC0xLDEuMS0xLjMsMi0xLjNjMC44LDAsMS4yLDAuMiwxLjcsMC40QzExNS4yLDI3LjgsMTE0LjIsMjguNiwxMTMuMiwyOC42eiBNMTIzLjcsMjJsLTIuMSw1LjRoLTAuMQoJCWwtMi4yLTUuNGgtMmwzLjMsNy42bC0xLjksNC4yaDEuOWw1LjEtMTEuOEgxMjMuN3ogTTEwNi45LDMwaDEuOVYxNy41aC0xLjlWMzB6Ii8+Cgk8Zz4KCQkKCQkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMS43OTk2IiB5MT0iMTczLjI5MDQiIHgyPSI1LjAxNzIiIHkyPSIxNTYuNTA4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMTgyLjAwMDIpIj4KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwQTBGRiIvPgoJCQk8c3RvcCAgb2Zmc2V0PSI2LjU3NDQ1MGUtMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEExRkYiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC4yNjAxIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBCRUZGIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuNTEyMiIgc3R5bGU9InN0b3AtY29sb3I6IzAwRDJGRiIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjc2MDQiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMERGRkYiLz4KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwRTNGRiIvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHBhdGggY2xhc3M9InN0NCIgZD0iTTEwLjQsNy41QzEwLjEsNy44LDEwLDguMywxMCw4Ljl2MjIuMWMwLDAuNiwwLjIsMS4xLDAuNSwxLjRsMC4xLDAuMWwxMi40LTEyLjRWMjB2LTAuMUwxMC40LDcuNUwxMC40LDcuNXoiCgkJCS8+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzMuODM0MyIgeTE9IjE2MS45OTg3IiB4Mj0iOS42Mzc0IiB5Mj0iMTYxLjk5ODciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxODIuMDAwMikiPgoJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZFMDAwIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuNDA4NyIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQkQwMCIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjc3NTQiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkE1MDAiLz4KCQkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGOUMwMCIvPgoJCTwvbGluZWFyR3JhZGllbnQ+CgkJPHBhdGggY2xhc3M9InN0NSIgZD0iTTI3LDI0LjNsLTQuMS00LjFWMjB2LTAuMWw0LjEtNC4xbDAuMSwwLjFsNC45LDIuOGMxLjQsMC44LDEuNCwyLjEsMCwyLjlMMjcsMjQuM0wyNywyNC4zeiIvPgoJCQoJCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI0LjgyNjkiIHkxPSIxNTkuNzA0IiB4Mj0iMi4wNjg2IiB5Mj0iMTM2Ljk0NTciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxODIuMDAwMikiPgoJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkYzQTQ0Ii8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNDMzExNjIiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGNsYXNzPSJzdDYiIGQ9Ik0yNy4xLDI0LjJMMjIuOSwyMEwxMC40LDMyLjVjMC41LDAuNSwxLjIsMC41LDIuMSwwLjFMMjcuMSwyNC4yIi8+CgkJCgkJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNF8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNy4yOTcyIiB5MT0iMTgxLjgyMzkiIHgyPSIxNy40NTk4IiB5Mj0iMTcxLjY2MTQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCAxODIuMDAwMikiPgoJCQk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMzJBMDcxIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjYuODUwMDAwZS0wMiIgc3R5bGU9InN0b3AtY29sb3I6IzJEQTc3MSIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjQ3NjIiIHN0eWxlPSJzdG9wLWNvbG9yOiMxNUNGNzQiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC44MDA5IiBzdHlsZT0ic3RvcC1jb2xvcjojMDZFNzc1Ii8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEYwNzYiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGNsYXNzPSJzdDciIGQ9Ik0yNy4xLDE1LjhMMTIuNSw3LjVjLTAuOS0wLjUtMS42LTAuNC0yLjEsMC4xTDIyLjksMjBMMjcuMSwxNS44eiIvPgoJCTxnPgoJCQk8cGF0aCBjbGFzcz0ic3Q4IiBkPSJNMjcsMjQuMWwtMTQuNSw4LjJjLTAuOCwwLjUtMS41LDAuNC0yLDBsMCwwbC0wLjEsMC4xbDAsMGwwLjEsMC4xbDAsMGMwLjUsMC40LDEuMiwwLjUsMiwwTDI3LDI0LjFMMjcsMjQuMQoJCQkJeiIvPgoJCQk8cGF0aCBjbGFzcz0ic3Q5IiBkPSJNMTAuNCwzMi4zQzEwLjEsMzIsMTAsMzEuNSwxMCwzMC45djAuMWMwLDAuNiwwLjIsMS4xLDAuNSwxLjRWMzIuM0wxMC40LDMyLjN6Ii8+CgkJPC9nPgoJCTxwYXRoIGNsYXNzPSJzdDkiIGQ9Ik0zMiwyMS4zbC01LDIuOGwwLjEsMC4xbDQuOS0yLjhjMC43LTAuNCwxLTAuOSwxLTEuNGwwLDBDMzMsMjAuNSwzMi42LDIwLjksMzIsMjEuM3oiLz4KCQk8cGF0aCBjbGFzcz0ic3QxMCIgZD0iTTEyLjUsNy42TDMyLDE4LjdjMC42LDAuNCwxLDAuOCwxLDEuM2wwLDBjMC0wLjUtMC4zLTEtMS0xLjRMMTIuNSw3LjVDMTEuMSw2LjcsMTAsNy4zLDEwLDguOXYwLjEKCQkJQzEwLDcuNSwxMS4xLDYuOCwxMi41LDcuNnoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=component---src-pages-index-js-4cdd1998141f2096143a.js.map