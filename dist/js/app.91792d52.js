(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},o={app:0},n=[];function s(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-2d216214":"49bf1fba","chunk-43aecaaa":"1260da8e"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=o[t]=[e,i]}));e.push(a[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",l.name="ChunkLoadError",l.type=i,l.request=n,a[1](l)}o[t]=void 0}};var d=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1338:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return o}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"},on:{click:this.$root.setTimer,mouseover:this.$root.fadeSubPage,mouseout:this.$root.fadeInSubPage}},[a("router-link",{staticClass:"showOnMobile",class:{hover:this.$root.$data.wideScreen},attrs:{id:"zach",to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"hideOnMobile",class:{hover:this.$root.$data.wideScreen},attrs:{id:"zach",to:"/"}},[t._v("Zach Eliason")]),a("router-link",{class:{hover:this.$root.$data.wideScreen},attrs:{id:"about",to:"/about"}},[t._v("About")]),a("router-link",{staticClass:"showOnMobile",class:{hover:this.$root.$data.wideScreen},attrs:{id:"portfolio",to:"/portfolio"}},[t._v("Portfolio")]),a("router-link",{staticClass:"hideOnMobile",class:{hover:this.$root.$data.wideScreen},attrs:{id:"portfolio",to:"/portfolio"}},[t._v("Design Portfolio")]),a("router-link",{class:{hover:this.$root.$data.wideScreen},attrs:{id:"coding",to:"/coding"}},[t._v("Coding")])],1),a("router-view")],1)},o=[]},"13bf":function(t,e,a){},"15b1":function(t,e,a){"use strict";a("d50a")},"199c":function(t,e){},"1be2":function(t,e,a){"use strict";a("6af2")},"23be":function(t,e,a){"use strict";var i=a("199c"),o=a.n(i);e["default"]=o.a},"27c9":function(t,e,a){"use strict";a("5ca9")},"2a43":function(t,e,a){},"2f80":function(t,e,a){},"3dfd":function(t,e,a){"use strict";var i=a("1338"),o=a("23be"),n=(a("034f"),a("2877")),s=Object(n["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=s.exports},"42f9":function(t,e,a){},"457b":function(t,e,a){"use strict";a("2f80")},4678:function(t,e,a){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=a("3dfd"),n=a("8c4f"),s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homelist",attrs:{id:"subpage"}},[a("div",{staticClass:"homebox"},[a("h1",{staticClass:"disappear"},[t._v("Hello! This is where I host my design portfolio and coding repository. Feel free to take a look around! ")])])])}],c=(a("a4d3"),a("e01a"),a("b0c0"),{name:"Home",components:{},data:function(){return{}},methods:{goTo:function(t){this.$root.$data.selectCategory=t.category[0],document.getElementById("nav").style.animation="fadeOut .5s ease forwards",setTimeout((function(){return document.getElementById("nav").style.display="none"}),500),this.$root.$data.current.id=t.id,this.$root.$data.current.name=t.name,this.$root.$data.current.description=t.description,this.$root.$data.current.category=t.category,this.$root.$data.current.img=t.image,this.$root.$data.current.date=t.date,this.$root.$data.showModal=!0},sortItems:function(){return this.$root.$data.items.sort((function(t,e){return new Date(e.date)-new Date(t.date)}))}},computed:{items:function(){return this.sortItems()}}}),l=c,d=(a("6d3f"),a("2877")),u=Object(d["a"])(l,s,r,!1,null,"7b56c12f",null),m=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lookHere",attrs:{id:"subpage"}},[a("div",{attrs:{id:"top"}},[a("ul",[a("li",{attrs:{id:"design1"}},[a("a",{attrs:{href:"#"},on:{click:function(e){return t.select("design")}}},[t._v("/01_"),a("span",{staticClass:"bold"},[t._v("Design")])])]),a("li",{attrs:{id:"photos1"}},[a("a",{attrs:{href:"#"},on:{click:function(e){return t.select("photo")}}},[t._v("/02_"),a("span",{staticClass:"bold"},[t._v("Photos")])])]),a("li",{attrs:{id:"art1"}},[a("a",{attrs:{href:"#"},on:{click:function(e){return t.select("art")}}},[t._v("/03_"),a("span",{staticClass:"bold"},[t._v("Art")])])])])]),a("imageViewer",{attrs:{items:t.items}})],1)},h=[],p=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("modalViewer",{attrs:{current:t.current}}),a("div",{ref:"items",staticClass:"items",class:{itemsHov:this.$root.$data.wideScreen},attrs:{id:"items"}},t._l(t.items,(function(e){return a("div",{key:e.id,staticClass:"itemHolder",on:{mouseover:function(a){return t.addBars(e.id)},mouseout:function(a){return t.fadeBars(e.id)}}},[a("div",{staticClass:"item",style:"background: url(/images/"+e.image[0]+") no-repeat center top;",on:{click:function(a){return t.modalSwitchOn(e)}}}),a("p",{staticClass:"caption"},[t._v(t._s(e.name))]),a("hr",{attrs:{id:e.id}}),a("p",{staticClass:"date"},[t._v(t._s(e.date))])])})),0),a("div",{staticClass:"spacer"})],1)}),g=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showModal2?a("div",{ref:"modal",staticClass:"modal",attrs:{id:"modal"}},[a("div",{staticClass:"main",attrs:{id:"main"}},[t._l(t.images,(function(e){return a("img",{key:e.id,attrs:{id:e,src:"/images/"+e},on:{load:function(a){return t.orientation(e)}}})})),a("div",{staticClass:"sidebar"},[a("div",{attrs:{id:"exit"},on:{click:t.modalOff}},[t._v(" ✕")]),a("div",{staticClass:"object"},[a("h1",[t._v(t._s(t.current.name))]),a("hr"),a("p",{staticClass:"date small"},[t._v(t._s(t.current.date)),a("span",{staticClass:"blue"},[t._v(" · ")]),t._v("files: "+t._s(t.current.img.length))]),a("p",{attrs:{id:"smallerMarg"}},[t._v(t._s(t.current.description))]),a("div",{staticClass:"tagsbox"},[a("p",{staticClass:"inline",attrs:{id:"tagline"}},[t._v("Tags:")]),t._l(t.tags,(function(e){return a("a",{key:e.id,class:"tags "+e,style:"background-color: "+t.getRandomColor(),attrs:{href:"#"},on:{click:function(a){t.select(e),t.modalOff()}}},[t._v(t._s(e))])}))],2)])]),1!=t.current.img.length?a("div",{staticClass:"spacer"}):t._e()],2)]):t._e()},y=[],b={name:"modalViewer",props:{current:Object,showModal:Boolean},computed:{showModal2:function(){return this.$root.$data.showModal},images:function(){return this.$root.$data.current.img},tags:function(){return this.$root.$data.current.category}},data:function(){return{}},methods:{modalOff:function(){document.getElementById("top").style.zIndex="999",document.getElementById("nav").style.display="block",document.getElementById("nav").style.animation="fadeIn .5s ease forwards",this.$root.$data.showModal=!1},select:function(t){this.$root.$data.selectCategory=t},getRandomColor:function(){return"hsl("+360*Math.random()+","+(70+10*Math.random())+"%,"+(50+10*Math.random())+"%)"},orientation:function(t){if(this.$root.$data.wideScreen){var e=document.getElementById(t);1==this.$root.$data.current.img.length&&e.classList.add("last");var a=document.getElementById("main").offsetWidth,i=window.innerHeight,o=e.height,n=e.width;e.id=o/n<.9||i>a?"landscape":"portrait"}}}},w=b,j=(a("1be2"),Object(d["a"])(w,v,y,!1,null,"49741032",null)),_=j.exports,k={name:"imageViewer",components:{modalViewer:_},props:{items:Array},data:function(){return{timeout1:function(){},timeout2:function(){}}},computed:{current:function(){return this.$root.$data.current},showModal:function(){return this.$root.$data.showModal}},methods:{addBars:function(t){this.$root.$data.wideScreen&&(clearTimeout(this.timeout1),document.getElementById(t).style.opacity="1",this.timeout1=setTimeout((function(){return document.getElementById(t).style.transition="1s"}),10),this.timeout2=setTimeout((function(){return document.getElementById(t).style.width="50%"}),10))},fadeBars:function(t){this.$root.$data.wideScreen&&(clearTimeout(this.timeout1),document.getElementById(t).style.transition=".3s",document.getElementById(t).style.width="0",this.timeout1=setTimeout((function(){return document.getElementById(t).style.transition="all 0s"}),250),this.timeout2=setTimeout((function(){return document.getElementById(t).style.opacity="0"}),250))},modalSwitchOn:function(t){document.getElementById("top").style.zIndex="-100",document.getElementById("nav").style.animation="fadeOut .5s ease forwards",setTimeout((function(){return document.getElementById("nav").style.display="none"}),500),this.$root.$data.current.id=t.id,this.$root.$data.current.name=t.name,this.$root.$data.current.description=t.description,this.$root.$data.current.category=t.category,this.$root.$data.current.img=t.image,this.$root.$data.current.date=t.date,this.$root.$data.showModal=!0}}},$=k,S=(a("c7fa"),Object(d["a"])($,p,g,!1,null,"57448506",null)),C=S.exports,I={name:"Portfolio",components:{imageViewer:C},data:function(){return{}},methods:{select:function(t){this.$root.$data.selectCategory=t}},computed:{items:function(){var t=this;return this.$root.$data.items.filter((function(e){return T(t.$root.$data.selectCategory,e.category)})).sort((function(t,e){return new Date(e.date)-new Date(t.date)}))},selectEmpty:function(){return""===this.$root.$data.selectCategory}}};function T(t,e){var a;for(a=0;a<e.length;a++)if(e[a]===t)return!0;return!1}var F=I,P=(a("457b"),Object(d["a"])(F,f,h,!1,null,null,null)),D=P.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"subpage"}},[a("div",{staticClass:"profile"},[a("div",{staticClass:"rightborder"},[a("img",{attrs:{src:"/images/ZachProfile3.png",alt:""}}),a("h3",[t._v("Zach Eliason")]),a("p",[t._v("Bioinformatics student, "),a("span",{staticClass:"place"},[t._v("BYU")])])])]),a("div",{staticClass:"sidebar"},[a("div",{staticClass:"righthalf"},[a("div",{staticClass:"half"}),a("h2",[t._v("Hi! I'm Zach.")]),a("p",[t._v(" I'm currently a student at "),a("span",[t._v("Brigham Young University")]),t._v(" studying bioinformatics, although I used to study graphic design so you might see some of my old portfolio pieces on this website!")]),a("br"),a("h2",[t._v("I've worked at")]),a("ul",[a("li",[a("span",{staticClass:"place"},[t._v("BYU")]),t._v(" as a computer science "),a("span",{staticClass:"place"},[t._v("TA")]),t._v(" for the web design class since January 2021,")]),a("li",[a("span",{staticClass:"place"},[t._v("BYU")]),t._v(" Continuing Education from April "),a("span",{staticClass:"place"},[t._v("2020")]),t._v(" to September "),a("span",{staticClass:"place"},[t._v("2020")]),t._v(" doing graphic design,")]),a("li",[t._v("The Ballard Center from January "),a("span",{staticClass:"place"},[t._v("2020")]),t._v(" to September "),a("span",{staticClass:"place"},[t._v("2020")]),t._v(" doing graphic design,")]),a("li",[t._v("and The Wall from September of "),a("span",{staticClass:"place"},[t._v("2019")]),t._v(" to January of "),a("span",{staticClass:"place"},[t._v("2021,")]),t._v(" also doing graphic design.")]),a("li",[t._v("During June of "),a("span",{staticClass:"place"},[t._v("2015")]),t._v(", I also interned at "),a("span",{staticClass:"place"},[t._v("BYU")]),t._v(" Publications & Graphics.")])]),a("br"),a("h2",[t._v("I am proficient in")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("Javascript, Vue.js, "),a("span",{staticClass:"place"},[t._v("HTML, CSS, ")]),t._v(" Python, Git Version Control, Adobe Illustrator, InDesign, Photoshop, Aftereffects, film photography, drawing/painting, ")]),t._v(" &"),a("span",{staticClass:"emphasis"},[t._v(" Russian, ")]),t._v("in no particular order. I also have experience using"),a("span",{staticClass:"emphasis"},[a("span",{staticClass:"place"},[t._v(" SQL")]),t._v("ite, Mongo"),a("span",{staticClass:"place"},[t._v("DB")]),t._v(", Node.js,")]),t._v(" & "),a("span",{staticClass:"emphasis"},[t._v("C++.")])]),a("br"),a("h2",[t._v("I have interests in")]),a("p",[a("span",{staticClass:"emphasis"},[t._v("Coding, ecology, biology, design, art, hiking, data visualization, music, photography, math, climbing, gardening, Russian literature, ice-skating, knitting, book-binding, ")]),t._v(" & "),a("span",{staticClass:"emphasis"},[t._v(" cheese-making.")])]),a("p",[a("span",{staticClass:"smaller place"},[t._v("Website designed and "),a("a",{attrs:{href:"https://github.com/zacheliason/z_portfolio"}},[t._v("coded")]),t._v(" by Zach Eliason © 2021")])]),a("div",{staticClass:"spacer"})])])])}],O={name:"About",components:{},computed:{about:function(){return this.$root.$data.portfolio}}},E=O,A=(a("27c9"),Object(d["a"])(E,B,x,!1,null,"68f172e4",null)),z=A.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sites",attrs:{id:"subpage"}},[a("div",{staticClass:"fill"},[a("div",{staticClass:"half"}),a("p",[t._v("While I've worked on many coding projects, most of them are difficult to display in a way that I am happy with. As such, the best examples of my programming portfolio remain this website and this slowly growing list of projects:")]),a("ul",[a("li",{staticClass:"link"},[a("router-link",{staticClass:"changed",attrs:{to:"/spotifystreamgraph"}},[t._v("Spotify Streamgraph")])],1)])])])},U=[],K={name:"Coding",components:{},computed:{}},N=K,L=(a("15b1"),Object(d["a"])(N,M,U,!1,null,"0ecae9a9",null)),W=L.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spotify"},[a("FileImport")],1)},H=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"all"}},[a("router-link",{attrs:{id:"exit",to:"/coding"},on:{click:t.revert}},[t._v(" ✕")]),t._m(0),t.demoPage?a("div",{staticClass:"demoPage"},[a("div",{},[a("h1",[t._v("Spotify Streamgraph")]),a("h2",[t._v("This is an app I made in my free time that creates a streamgraph of a user's streaming history showing how much they listened to their top 20 artists on Spotify over the course specified by the files imported. It is not finished and there are still many changes I would like to make! (i.e. a legend toolbar, ability to resize x-axis, download as PDF, various style improvements, more error handling) but here it is in its current state.")]),a("h1",[t._v("Streamgraph examples")]),a("p",{staticClass:"fixme"},[t._v(" [scroll down] ")]),a("img",{attrs:{src:"/images/Screen Shot 2021-02-21 at 15.56.03.jpg",alt:""}}),a("img",{attrs:{src:"/images/Screen Shot 2021-02-21 at 15.56.39.jpg",alt:""}}),a("img",{attrs:{src:"/images/Screen Shot 2021-02-21 at 15.56.46.png",alt:""}}),a("button",{attrs:{type:"button",name:"button"},on:{click:t.changeDemo}},[t._v("Continue")])])]):t._e(),t.frontPage&&!t.demoPage?a("div",{staticClass:"frontpage"},[a("p",[t._v("First, request your data from Spotify at the bottom of your account's "),a("a",{attrs:{target:"_blank",href:"https://www.spotify.com/us/account/privacy/"}},[t._v("Privacy Settings")]),t._v(" page. (it may take up to 30 days to gather your streaming history) You will receive an email once it is ready to download. Then, "),a("span",{staticClass:"bold",on:{click:t.changePage}},[t._v("click here.")])])]):t._e(),t.frontPage||t.demoPage?t._e():a("div",{staticClass:"backpage"},[t.importPending?a("div",{staticClass:"importStuff"},[a("div",{staticClass:"left"},[a("div",{staticClass:"box"},[a("input",{attrs:{type:"file",id:"selectFiles",value:"Import"},on:{change:t.changeFile}}),a("br"),a("label",{attrs:{for:"selectFiles"},on:{change:t.changeFile}},[t._v("Select File")]),a("button",{style:t.hoverStyle(t.fileSelected),attrs:{disabled:"",id:"import"},on:{click:function(e){t.importFile(),t.changeFile(),t.changeFileAdded()}}},[t._v(t._s(t.importText))]),a("button",{style:t.hoverStyle(t.fileAdded),attrs:{id:"gogogo"},on:{click:t.groupByArtist}},[t._v("Create")]),a("h1",[t._v("Files added: "+t._s(t.fileNum))]),a("div",{staticClass:"dot-windmill"})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"box"},[a("p",[t._v("After you've unzipped your data file, you should see a number of "),a("b",[t._v(" StreamingHistory ")]),t._v(" JSONs starting from 0 and counting up, depending on how much music you listened to. Add each of these files in order, then create your streamgraph."),a("br"),a("br"),t._v(" "),a("span",{staticClass:"bold",on:{click:t.changePage}},[t._v("Forgot how to get your Spotify data?")])])])])]):t._e(),a("div",{staticClass:"vizpage",style:t.importPending?"display: none;":"display: unset;",attrs:{id:"vizpage"}},[a("button",{staticClass:"revertButton",attrs:{type:"button",name:"button"},on:{click:t.revert}},[t._v("Reset")]),a("div",{style:t.cardinalSwitch1?"display: unset;":"display: none;",attrs:{id:"my_dataviz"}})])])],1)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mobile"},[a("p",[t._v("This app does not work on mobile. Please try a computer!")])])}],V=(a("99af"),a("caad"),a("a15b"),a("d81d"),a("45fc"),a("b680"),a("b64b"),a("d3b7"),a("2532"),a("ddb0"),a("2909")),G=a("2ef0"),q=a.n(G),Z=a("c1df"),Q=a.n(Z),X=a("5698"),tt=a("d353"),et={name:"HelloWorld",props:{msg:String},data:function(){return{demoPage:!0,fileSelected:!1,frontPage:!1,cardinalSwitch:!0,stepSwitch:!1,pointSwitch:!1,importText:"Add File",fileAdded:!1,fileNum:0,buttonHov:{backgroundcolor:"white",color:"black",transition:".3s"}}},methods:{revert:function(){this.fileAdded=!1,this.demoPage=!1,this.frontPage=!1,this.fileNum=0,this.importText="Add File",this.$root.$data.importPending=!0,this.$root.$data.importedJSON=[],this.$root.$data.artistList=[],this.$root.$data.csv="",this.$root.$data.topArtists=[],this.$root.$data.topArtistsKeys={},this.$root.$data.weekMax=0,this.$root.$data.newWidth=0;var t=document.getElementById("my_dataviz");t.remove();var e=document.createElement("div");e.id="my_dataviz",e.style.marginTop="100px",document.getElementById("vizpage").appendChild(e)},changeDemo:function(){this.demoPage=!this.demoPage,this.frontPage=!this.frontPage},downloadWithCSS:function(){var t=document.getElementById("all"),e={margin:1,filename:"myfile.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"in",format:"letter",orientation:"portrait"}};tt().set(e).from(t).save()},hoverStyle:function(t){return t?{"--button-opacity":1,"--button-color--hover":this.buttonHov.color,"--button-background-color--hover":this.buttonHov.backgroundcolor,"--button-transition--hover":this.buttonHov.transition}:{"--button-opacity":.3,"--button-color--hover":this.buttonHov.backgroundcolor,"--button-background-color--hover":this.buttonHov.color,"--button-transition--hover":this.buttonHov.transition}},changeFile:function(){this.fileSelected=!this.fileSelected,document.getElementById("import").disabled=!document.getElementById("import").disabled},changePage:function(){this.frontPage=!this.frontPage},changeFileAdded:function(){this.fileAdded=!0,this.fileNum+=1,this.importText=(this.fileAdded,"Add Another")},changeCardinal:function(){this.cardinalSwitch=!0,this.stepSwitch=!1,this.pointSwitch=!1},changeStep:function(){this.cardinalSwitch=!1,this.stepSwitch=!0,this.pointSwitch=!1},changePoint:function(){this.cardinalSwitch=!1,this.stepSwitch=!1,this.pointSwitch=!0},importFile:function(){var t=this,e=document.getElementById("selectFiles").files;if(e.length<=0)return!1;var a=new FileReader;a.onload=function(e){var a=JSON.parse(e.target.result);0==t.fileAdded?t.$root.$data.importedJSON=a:t.fileAdded&&(t.$root.$data.importedJSON=t.$root.$data.importedJSON.concat(a))},a.readAsText(e.item(0))},groupByArtist:function(){this.$root.$data.jsonSuccess=!0;var t=this.$root.$data.importedJSON;this.$root.$data.artistList=q.a.mapValues(q.a.groupBy(t,"artistName"),(function(t){return t.map((function(t){return q.a.omit(t,"artistName")}))})),this.sumPlayTime()},sumPlayTime:function(){var t=this.$root.$data.artistList,e=[];for(var a in t){var i=0;for(var o in t[a])i+=parseInt(t[a][o].msPlayed,10);i/=6e4;var n={artistName:a,minutesListened:i};e.push(n)}e.sort((function(t,e){return e.minutesListened-t.minutesListened}));for(var s={},r=0;r<20;r++)this.$root.$data.topArtists.push(e[r].artistName),s[e[r].artistName]=e[r].minutesListened.toFixed(2),this.$root.$data.topArtistsKeys=s;this.jsonToCSV()},jsonToCSV:function(){var t=this.$root.$data.importedJSON,e=[],a=this.$root.$data.topArtists;for(var i in t)a.includes(t[i].artistName)&&e.push(t[i]);var o=this.groupByWeek(e),n=[];for(var s in o){var r=0,c=o[s];for(var l in c){var d=l;"week"!=d&&(r+=c[d])}n.push(r)}var u=0;for(var m in n)n[m]>u&&(u=n[m]);this.$root.$data.weekMax=u;var f=function(t,e){return null===e?"":e},h=Object.keys(o[0]),p=[h.join(",")].concat(Object(V["a"])(o.map((function(t){return h.map((function(e){return JSON.stringify(t[e],f)})).join(",")})))).join("\r\n");this.$root.$data.csv=p,this.createStreamgraph()},groupByWeek:function(t){var e=q.a.groupBy(t,(function(t){return Q()(t["endTime"],"YYYY-MM-DD HH:mm").startOf("isoWeek")})),a=[],i=[],o=[];for(var n in e)for(var s in i=e[n],o=q.a.mapValues(q.a.groupBy(i,"artistName"),(function(t){return t.map((function(t){return q.a.omit(t,"artistName")}))})),o){var r=0;for(var c in o[s])r+=parseInt(o[s][c].msPlayed,10);r/=6e4;var l={};l[s]=r,l["week"]=n,a.push(l)}var d=q.a.mapValues(q.a.groupBy(a,"week"),(function(t){return t.map((function(t){return q.a.omit(t,"week")}))})),u=this.parseWeek(d);return u},parseWeek:function(t){var e=[],a=[],i=this.$root.$data.topArtists,o=t;for(var n in o){var s=o[n],r=function(t){var e=i[t];if(l=s.some((function(t){return e in t})),l)return"continue";var a={};a[e]=0,s.push(a)};for(var c in i){var l;r(c)}}for(var d in o){a={};var u=o[d];for(var m in u){var f=u[m],h=Object.keys(f)[0];a[h]=f[h]}a["week"]=d,e.push(a)}return e},createStreamgraph:function(){var t=.7*this.$root.$data.weekMax,e=this.$root.$data.csv,a=this.$root.$data.topArtistsKeys;window.innerWidth?console.log(window.innerWidth):console.log(920);var i={top:20,right:30,bottom:30,left:30},o=920-i.left-i.right,n=500-i.top-i.bottom;this.$root.$data.newWidth=o;var s=X["h"]("#my_dataviz").append("svg").attr("width",o+i.left+i.right).attr("height",n+i.top+i.bottom).append("g").attr("transform","translate("+i.left+","+i.top+")"),r=X["c"](e),c=r.columns;c.pop();var l=X["g"]().domain([new Date(r[0].week),new Date(r[r.length-1].week)]).range([0,o]),d=s.append("g").attr("transform","translate(0,"+n+")").call(X["b"](l).ticks(r.length-1)).call((function(t){return t.select(".domain").style("stroke","white")})).call((function(t){return t.selectAll(".tick line").style("stroke","white")})).call((function(t){return t.selectAll(".tick text").style("fill","white").style("font-family","space mono")}));console.log(d),s.append("text").attr("text-anchor","end").attr("x",o).attr("y",n-30);var u=X["e"]().domain([-t,t]).range([n,0]),m=X["f"]().domain(c).range(["#aadedd","#dc523f","#de8735","#4886af","#92a488","#4d5860","#662d91","#00a99d","#ff7bac","#d4145a","#236a87","#9e005d","#29abe2","#99815f","#8cc63f","#ffd3a0","#bdc6bc","#d9e021","#c2a089","#fdfdb8"]),f=X["j"]().offset(X["k"]).keys(c)(r),h=s.append("text").attr("class","tooltip").attr("x",0).attr("y",0).style("opacity",0).style("font-size",17).style("color","#FFFFFF").style("fill","#FFFFFF").style("font-weight","bolder").style("z-index",1e4).style("mix-blend-mode","difference"),p=s.append("text").attr("class","tooltip").attr("x",0).attr("y",20).style("opacity",0).style("font-size",17).style("color","#FFFFFF").style("fill","#FFFFFF").style("z-index",1e4),g=function(){h.style("opacity",1),p.style("opacity",1),X["i"](".myArea").transition().duration(250).style("opacity",.2),X["h"](this).transition().duration(151).style("stroke","black").style("opacity",1)},v="",y=0,b=function(t){v=t.srcElement.__data__.key,h.text(v),y=a[v];var e=Math.floor(parseInt(y)/60),i=parseInt(y)%60;p.text(e+" hours and "+i+" minutes listened")},w=function(){h.style("opacity",0),p.style("opacity",0),X["i"](".myArea").transition().duration(151).style("opacity",1).style("stroke","none")},j=X["a"]().x((function(t){return l(new Date(t.data.week))})).y0((function(t){return u(t[0])})).y1((function(t){return u(t[1])})).curve(X["d"]);function _(){s.selectAll("mylayers").data(f).transition().duration(1e3).append("path")}s.selectAll("mylayers").data(f).enter().append("path").attr("class","myArea").style("fill",(function(t){return m(t.key)})).attr("d",j).on("mouseover",g).on("mousemove",b).on("mouseleave",w),X["h"]("#buttonXlim").on("click",_),this.$root.$data.importPending=!1}},computed:{importPending:function(){return this.$root.$data.importPending},cardinalSwitch1:function(){return this.cardinalSwitch},stepSwitch1:function(){return this.stepSwitch},pointSwitch1:function(){return this.pointSwitch}},mounted:function(){document.getElementById("all").classList.add("fade")}},at=et,it=(a("f7e3"),Object(d["a"])(at,R,Y,!1,null,"ea8bdaaa",null)),ot=it.exports,nt={name:"SpotifyStreamgraph",components:{FileImport:ot}},st=nt,rt=(a("e574"),Object(d["a"])(st,J,H,!1,null,null,null)),ct=rt.exports;i["a"].use(n["a"]);var lt=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:z},{path:"/portfolio",name:"Portfolio",component:D},{path:"/coding",name:"Coding",component:W},{path:"/spotifystreamgraph",name:"SpotifyStreamgraph",component:ct},{path:"*",redirect:"/"}],dt=new n["a"]({mode:"hash",base:"/",routes:lt}),ut=dt,mt={month:"long",day:"numeric",year:"numeric"},ft=[{id:1,name:"Iceberg",category:["design","2020","digital"],image:["iceberg.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,1)),description:"Promo imagery I designed for the Ballard Brief Summit at the Ballard Center."},{id:2,name:"Bambina Poster",category:["art","digital","2019"],image:["Jacob+Elise.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2019,12)),description:"Personal project I made for my brother last Christmas."},{id:3,name:"Kiev88 Black & White Roll 1",category:["photo","film","b&w","kiev88","2020"],image:["Kiev079.jpg","Kiev080.jpg","Kiev081.jpg","Kiev084.jpg","Kiev085.jpg","Kiev088.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date("2020-5-2")),description:"The first roll I shot on my Kiev88. There were some pretty bad light leaks and a sticky focus ring but I still think they were fun."},{id:4,name:"Kiev88 Black & White Roll 2",category:["photo","film","b&w","kiev88","2020"],image:["Kiev3110.jpg","Kiev3112.jpg","Kiev3115.jpg","Kiev3119.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date("2020-6-5")),description:"I was able to seal the light leaks I'd seen in previous rolls so we thankfully saw fewer of those in these pictures."},{id:5,name:"Kiev88 Color Roll 1",category:["photo","film","color","kiev88","2020"],image:["Kiev3122.jpg","Kiev3121.jpg","Kiev3123.jpg","Kiev3125.jpg","Kiev3127.jpg","Kiev3128.jpg","Kiev3129.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,6)),description:"Pictures from trips I took in summer of 2020."},{id:6,name:"Linocut Tree",category:["art","printmaking","2017"],image:["Print2.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2017,7)),description:"This was the last piece of art I made before leaving for Ukraine in 2017."},{id:7,name:"Isolation Illo",category:["design","digital","illustration","2020"],image:["Isolation1-01.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,6)),description:"This was an illustration I did for a Ballard Center brief on the effects of isolation on mental health."},{id:8,name:"Lincoln Center",category:["photo","film","b&w","2015"],image:["Photo1.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2015,7)),description:"Taken in DC."},{id:9,name:"Postal Office",category:["photo","film","color","2015"],image:["Photo2.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2015,7)),description:"Postal Office in DC."},{id:10,name:"Linocut Peasant",category:["art","printmaking","2016"],image:["Print1.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2016,1,20)),description:"Linocut from high school."},{id:11,name:"Music Journal",category:["design","data vis","2020"],image:["Jan-May_Music-04.jpg","Jan-May_Music-02.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,5,4)),description:"Streamgraph showing my top 20 artists I listened to on Spotify during the first half of 2020, interpolated with some life events that happened along the way."},{id:13,name:"Fashion Gif",category:["design","digital","animated","2020"],image:["Final-Animation.gif"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,5)),description:"Small animation made for the Ballard Center's social media. They wanted to depict certain coping mechanisms during quarantine. This one was 'taking fashion shots of my sister's outfits every day.'"},{id:14,name:"Creative Exercise",category:["design","2020"],image:["CreativeExercises1.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,4)),description:"This was my creative exercise for entrance into the BYU graphic design pre-program. We were given a sheet of abstract shapes (outlined in cyan dots) and free reign for how we chose to use them in our design. I went with a theme of dancers."},{id:15,name:"Color Studies",category:["art","2020"],image:["Color1.jpg","Color2.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,2)),description:"Color studies done for my DSGN class."},{id:16,name:"Collages",category:["art","2020"],image:["CollageYellow.jpg","CollageOrange.jpg","B&W.JPG","CollageBlue.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,2)),description:"Collage pieces done for my DSGN class."},{id:17,name:"Overalls Illo",category:["design","digital","illustration","2020"],image:["Butterfly-01.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,5)),description:"Small illustration I did for the Ballard Center's Social Media. This was to depict a quote about happiness."},{id:19,name:"Law Report Timeline",category:["design","2015"],image:["1.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2015,6)),description:"This is a page I worked on for the BYU 2015 Annual Law Report while I was interning at BYU Publications & Graphics."},{id:21,name:"Revolution 1905, 1917",category:["design","2020"],image:["21.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,3)),description:"This is a paper cutout I designed depicting the events of the Russian Revolutions of 1905 and 1917 in silhouette."},{id:22,name:"Blue Man",category:["art","2016","painting"],image:["BlueMan.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2016,4,16)),description:"Inexplicably blue man I painted in my high school art class."},{id:23,name:"Memory Collage",category:["art","2020","painting","collage"],image:["DSGN_Final.jpeg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,4)),description:"This was one of the projects I did for my DSGN class. The theme of this collage was memory crossed with time, combining details from the home I grew up in, such as the outline of a chair, the curve of a music stand, or an old family photo, with elements from watches and other timepieces."},{id:24,name:"Sketchbook Process",category:["art","2020","sketchbook"],image:["Sketchbook-2.jpg","Sketchbook-3.jpg","Sketchbook-4.jpg","Sketchbook-5.jpg","Sketchbook-6.jpg","Sketchbook-7.jpg","Sketchbook-8.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,4)),description:"These are some sketches from my latest sketchbook to show process."},{id:25,name:"Kiev88 Color Roll 2",category:["photo","film","color","kiev88","2020"],image:["Kiev4_1.jpg","Kiev4_2.jpg","Kiev4_3.jpg","Kiev4_4.jpg","Kiev4_5.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date(2020,9,6)),description:"Photos from a roadtrip to Leavenworth, WA I took last fall."},{id:27,name:"Parents Linocut",category:["art","printmaking","2020"],image:["linoParents.jpg"],date:new Intl.DateTimeFormat("en-US",mt).format(new Date("2020-12-26")),description:"Linocut of my parents that I designed for a joint Christmas gift with my brother."}],ht=ft;i["a"].config.productionTip=!1;var pt={importPending:!0,importedJSON:[],artistList:[],csv:"",topArtists:[],topArtistsKeys:{},weekMax:0,newWidth:0,items:ht,current:{id:"",name:"",category:"",img:[],orientation:[],description:"",date:""},showModal:!1,selectCategory:"",timerOn:!1,wideScreen:window.innerWidth>800,windowWidth:window.innerWidth};new i["a"]({router:ut,data:pt,methods:{setTimer:function(){var t=this;document.getElementById("subpage").style.animation="fadeIn .3s ease forwards",this.$root.$data.timerOn=!0,setTimeout((function(){return t.$root.$data.timerOn=!1}),700)},fadeSubPage:function(){0==this.$root.$data.timerOn&&(document.getElementById("subpage").style.animation="fadeOut .5s ease forwards")},fadeInSubPage:function(){this.$root.$data.isMobile||(document.getElementById("subpage").style.animation="fadeIn .3s ease forwards")}},render:function(t){return t(o["default"])}}).$mount("#app")},"5ca9":function(t,e,a){},"6af2":function(t,e,a){},"6d3f":function(t,e,a){"use strict";a("13bf")},"85ec":function(t,e,a){},c7fa:function(t,e,a){"use strict";a("2a43")},cd1d:function(t,e,a){},d50a:function(t,e,a){},e574:function(t,e,a){"use strict";a("cd1d")},f7e3:function(t,e,a){"use strict";a("42f9")}});
//# sourceMappingURL=app.91792d52.js.map