(function(e){function a(a){for(var i,l,o=a[0],m=a[1],s=a[2],d=0,c=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(t,l)&&t[l]&&c.push(t[l][0]),t[l]=0;for(i in m)Object.prototype.hasOwnProperty.call(m,i)&&(e[i]=m[i]);u&&u(a);while(c.length)c.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],i=!0,l=1;l<n.length;l++){var m=n[l];0!==t[m]&&(i=!1)}i&&(r.splice(a--,1),e=o(o.s=n[0]))}return e}var i={},t={index:0},r=[];function l(e){return o.p+"js/"+({}[e]||e)+"-legacy."+{"chunk-2d0da8d1":"586d59e2"}[e]+".js"}function o(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var a=[],n=t[e];if(0!==n)if(n)a.push(n[2]);else{var i=new Promise((function(a,i){n=t[e]=[a,i]}));a.push(n[2]=i);var r,m=document.createElement("script");m.charset="utf-8",m.timeout=120,o.nc&&m.setAttribute("nonce",o.nc),m.src=l(e);var s=new Error;r=function(a){m.onerror=m.onload=null,clearTimeout(d);var n=t[e];if(0!==n){if(n){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,n[1](s)}t[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:m})}),12e4);m.onerror=m.onload=r,document.head.appendChild(m)}return Promise.all(a)},o.m=e,o.c=i,o.d=function(e,a,n){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)o.d(n,i,function(a){return e[a]}.bind(null,i));return n},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/",o.oe=function(e){throw console.error(e),e};var m=window["webpackJsonp"]=window["webpackJsonp"]||[],s=m.push.bind(m);m.push=a,m=m.slice();for(var d=0;d<m.length;d++)a(m[d]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";n("85ec")},"267e":function(e,a,n){e.exports=n.p+"img/diagram.5444b0e0.svg"},4397:function(e,a){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"getPingerStats"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"category"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"price_min"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"price_max"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"rooms_min"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"rooms_max"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"area_m2_min"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"area_m2_max"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"published_at_start"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"published_at_end"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"properties"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"category"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"eq"},value:{kind:"Variable",name:{kind:"Name",value:"category"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"type"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"eq"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"region"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"in"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"price"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"gte"},value:{kind:"Variable",name:{kind:"Name",value:"price_min"}}},{kind:"ObjectField",name:{kind:"Name",value:"lte"},value:{kind:"Variable",name:{kind:"Name",value:"price_max"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"rooms"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"gte"},value:{kind:"Variable",name:{kind:"Name",value:"rooms_min"}}},{kind:"ObjectField",name:{kind:"Name",value:"lte"},value:{kind:"Variable",name:{kind:"Name",value:"rooms_max"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"area"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"gte"},value:{kind:"Variable",name:{kind:"Name",value:"area_m2_min"}}},{kind:"ObjectField",name:{kind:"Name",value:"lte"},value:{kind:"Variable",name:{kind:"Name",value:"area_m2_max"}}}]}},{kind:"ObjectField",name:{kind:"Name",value:"published_at"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"gte"},value:{kind:"Variable",name:{kind:"Name",value:"published_at_start"}}},{kind:"ObjectField",name:{kind:"Name",value:"lt"},value:{kind:"Variable",name:{kind:"Name",value:"published_at_end"}}}]}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"summary"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:737}};n.loc.source={body:"query getPingerStats(\n  $category: String!\n  $type: String!\n  $price_min: Int!\n  $price_max: Int!\n  $region: [String!]!\n  $rooms_min: Int\n  $rooms_max: Int\n  $area_m2_min: Int\n  $area_m2_max: Int\n  $published_at_start: String!\n  $published_at_end: String!\n) {\n  properties(\n    filter: {\n      category: { eq: $category }\n      type: { eq: $type }\n      region: { in: $region }\n      price: {\n        gte: $price_min\n        lte: $price_max\n      }\n      rooms: {\n        gte: $rooms_min\n        lte: $rooms_max\n      }\n      area: {\n        gte: $area_m2_min\n        lte: $area_m2_max\n      }\n      published_at: {\n        gte: $published_at_start\n        lt: $published_at_end\n      }\n    }\n  ) {\n    summary {\n      count\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&a.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,a)})),e.definitions&&e.definitions.forEach((function(e){i(e,a)}))}var t={};function r(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function l(e,a){var n={kind:e.kind,definitions:[r(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var i=t[a]||new Set,l=new Set,o=new Set;i.forEach((function(e){o.add(e)}));while(o.size>0){var m=o;o=new Set,m.forEach((function(e){if(!l.has(e)){l.add(e);var a=t[e]||new Set;a.forEach((function(e){o.add(e)}))}}))}return l.forEach((function(a){var i=r(e,a);i&&n.definitions.push(i)})),n}(function(){n.definitions.forEach((function(e){if(e.name){var a=new Set;i(e,a),t[e.name.value]=a}}))})(),e.exports=n,e.exports["getPingerStats"]=l(n,"getPingerStats")},4678:function(e,a,n){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function t(e){var a=r(e);return n(a)}function r(e){if(!n.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}t.keys=function(){return Object.keys(i)},t.resolve=r,e.exports=t,t.id="4678"},"56d7":function(e,a,n){"use strict";n.r(a);n("1f1a"),n("450d");var i=n("4e4b"),t=n.n(i),r=(n("7a0f"),n("0f6c")),l=n.n(r),o=(n("6b30"),n("c284")),m=n.n(o),s=(n("6611"),n("e772")),d=n.n(s),u=(n("de31"),n("c69e")),c=n.n(u),f=(n("be4f"),n("896a")),p=n.n(f),b=(n("10cb"),n("f3ad")),k=n.n(b),v=(n("eca7"),n("3787")),g=n.n(v),j=(n("425f"),n("4105")),y=n.n(j),_=(n("e3ea"),n("7bc3")),N=n.n(_),h=(n("adec"),n("3d2d")),x=n.n(h),V=(n("f4f9"),n("c2cc")),O=n.n(V),S=(n("1951"),n("eedf")),$=n.n(S),w=(n("915d"),n("e04d")),T=n.n(w),z=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2d26"),n("96cf"),n("0fae"),n("2b0e")),E=n("755e"),D=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("el-container",[n("el-main",[n("SignupForm")],1)],1)},F=[],P=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("el-row",[i("el-col",[i("h1",{staticClass:"h1"},[e._v("Brokalys pingeris")]),i("p",[e._v(" Aizpildi formu un saņem paziņojumus e-pastā par jauniem nekustamā īpašuma sludinājumiem. ")]),i("img",{attrs:{src:n("267e"),alt:"Diagram"}}),i("el-divider"),i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left",disabled:e.loading}},[i("el-form-item",{attrs:{label:"E-pasta adrese",prop:"email"}},[i("el-col",{attrs:{span:11}},[i("el-input",{attrs:{placeholder:"demo@brokalys.com"},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}})],1)],1),i("el-row",[i("el-col",{attrs:{span:11}},[i("el-form-item",{attrs:{label:"Nekustamā īpašuma tips",prop:"category"}},[i("el-select",{model:{value:e.form.category,callback:function(a){e.$set(e.form,"category",a)},expression:"form.category"}},[i("el-option",{attrs:{label:"Dzīvoklis",value:"APARTMENT"}}),i("el-option",{attrs:{label:"Māja",value:"HOUSE"}}),i("el-option",{attrs:{label:"Zeme",value:"LAND"}})],1)],1)],1),i("el-col",{attrs:{span:11,offset:2}},[i("el-form-item",{attrs:{label:"Darījuma veids",prop:"type"}},[i("el-select",{model:{value:e.form.type,callback:function(a){e.$set(e.form,"type",a)},expression:"form.type"}},[i("el-option",{attrs:{label:"Pārdod",value:"SELL"}}),i("el-option",{attrs:{label:"Īrē",value:"RENT"}})],1)],1)],1)],1),i("el-form-item",{attrs:{label:"Cena (no, līdz)",required:""}},[i("el-col",{attrs:{span:11}},[i("el-form-item",{attrs:{prop:"price_min"}},[i("el-input",{attrs:{type:"number",min:"0","auto-complete":"off"},model:{value:e.form.price_min,callback:function(a){e.$set(e.form,"price_min",e._n(a))},expression:"form.price_min"}},[i("template",{slot:"append"},[e._v("EUR")])],2)],1)],1),i("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),i("el-col",{attrs:{span:11}},[i("el-form-item",{attrs:{prop:"price_max"}},[i("el-input",{attrs:{type:"number",min:"0","auto-complete":"off"},model:{value:e.form.price_max,callback:function(a){e.$set(e.form,"price_max",e._n(a))},expression:"form.price_max"}},[i("template",{slot:"append"},[e._v("EUR")])],2)],1)],1)],1),i("el-form-item",{attrs:{label:"Istabas (no, līdz)"}},[i("el-col",{attrs:{span:11}},[i("el-form-item",{attrs:{prop:"rooms_min"}},[i("el-input",{attrs:{type:"number",min:"0","auto-complete":"off"},model:{value:e.form.rooms_min,callback:function(a){e.$set(e.form,"rooms_min",e._n(a))},expression:"form.rooms_min"}})],1)],1),i("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),i("el-col",{attrs:{span:11}},[i("el-form-item",{attrs:{prop:"rooms_max"}},[i("el-input",{attrs:{type:"number",min:"0","auto-complete":"off"},model:{value:e.form.rooms_max,callback:function(a){e.$set(e.form,"rooms_max",e._n(a))},expression:"form.rooms_max"}})],1)],1)],1),i("el-form-item",{attrs:{label:"Platība (no, līdz)"}},[i("el-col",{attrs:{span:11}},[i("el-form-item",{attrs:{prop:"area_m2_min"}},[i("el-input",{attrs:{type:"number",min:"0","auto-complete":"off"},model:{value:e.form.area_m2_min,callback:function(a){e.$set(e.form,"area_m2_min",e._n(a))},expression:"form.area_m2_min"}},[i("template",{slot:"append"},[e._v("m2")])],2)],1)],1),i("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),i("el-col",{attrs:{span:11}},[i("el-form-item",{attrs:{prop:"area_m2_max"}},[i("el-input",{attrs:{type:"number",min:"0","auto-complete":"off"},model:{value:e.form.area_m2_max,callback:function(a){e.$set(e.form,"area_m2_max",e._n(a))},expression:"form.area_m2_max"}},[i("template",{slot:"append"},[e._v("m2")])],2)],1)],1)],1),i("el-form-item",{attrs:{label:"Reģions",required:""}},[i("el-col",[i("GoogleMap",{attrs:{region:e.region},on:{"update:region":function(a){e.region=a}}})],1)],1),i("el-form-item",{attrs:{label:"Komentāri",prop:"comments"}},[i("el-col",[i("el-input",{attrs:{type:"textarea",placeholder:"Ieteikumi, atsauksmes"},model:{value:e.form.comments,callback:function(a){e.$set(e.form,"comments",a)},expression:"form.comments"}})],1)],1),void 0!==e.freeLimit?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.$apollo.queries.freeLimit.loading,expression:"$apollo.queries.freeLimit.loading"}]},[i("el-progress",{attrs:{percentage:e.freeLimit.percentage}}),i("el-alert",{attrs:{title:e.selectedMonthlyEmailsTitle,type:"info",closable:!1}}),e.freeLimit.percentage>=90?[i("el-alert",{attrs:{title:e.maxMonthlyEmailsTitle,description:e.maxMonthlyEmailsDescription,type:"warning",closable:!1}})]:e._e()],2):e._e(),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(a){return e.submitForm()}}},[e._v(" Saņemt nek.īp. paziņojumus ")])],1)],1)],1)],1)},I=[],L=(n("99af"),n("4de4"),n("4160"),n("13d5"),n("b64b"),n("d3b7"),n("159b"),n("0fb7"),n("f529")),A=n.n(L),q=n("ade3"),M=n("5530"),C=n("c1df"),R=n.n(C),U=n("353a"),G=n.n(U),K=n("3181"),Q=n.n(K);G.a.start({apiKey:"3291a08204a007079100568b7fa44efc",plugins:[new Q.a(z["default"])]});var B=G.a,H=n("4397"),J=n.n(H),Z=n("97a2"),W=n.n(Z),X=100,Y=function(e){return Object.keys(e).forEach((function(a){return!e[a]&&void 0!==e[a]&&delete e[a]})),e},ee={name:"SignupForm",components:{GoogleMap:function(){return n.e("chunk-2d0da8d1").then(n.bind(null,"6ba0"))}},apollo:{freeLimit:{query:J.a,variables:function(){var e=Object(M["a"])({},this.form);return delete e.email,Y(Object(M["a"])(Object(M["a"])({},e),{},{region:this.region,published_at_start:R()().utc().startOf("month").subtract(1,"month").toISOString(),published_at_end:R()().utc().endOf("month").subtract(1,"month").toISOString()}))},debounce:500,update:function(e){if(e.properties){var a=e.properties.summary.count;return{amount:a,percentage:a>X?100:a/X*100}}},skip:function(){return!(this.form.category&&this.form.type&&void 0!==this.form.price_min&&void 0!==this.form.price_max&&this.region)}}},data:function(){var e=this,a=function(a){return function(n,i,t){return i&&e.form[a]>=i?t(new Error("Lauciņam /no/ ir jābūt lielākam par lauciņu /līdz/.")):t()}},n=function(){return function(e,a,n){return a&&a<0?n(new Error("Šajā lauciņā var ievadīt tikai pozitīvus skaitļus.")):n()}};return{loading:!1,region:"",form:{email:"",category:"APARTMENT",type:"SELL",price_min:void 0,price_max:void 0,rooms_min:void 0,rooms_max:void 0,area_m2_min:void 0,area_m2_max:void 0,optin:!1},rules:{email:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"},{type:"email",message:"Pārbaudi e-pasta adresi.",trigger:"blur"}],category:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"}],type:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"}],price_min:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"},{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus.",trigger:"blur",min:1}],price_max:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"},{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus zem 10000000.",trigger:"blur",max:1e7},{validator:a("price_min"),trigger:"blur"}],rooms_min:[{validator:n(),trigger:"blur"}],rooms_max:[{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus līds 20.",trigger:"blur",max:20},{validator:a("rooms_min"),trigger:"blur"}],area_m2_min:[{validator:n(),trigger:"blur"}],area_m2_max:[{validator:function(a,n,i){if(!n)return i();var t="LAND"===e.form["category"]?1e6:1e3;return n>t?i(new Error("Šajā lauciņā var ievadīt tikai skaitļus līdz ".concat(t))):i()},trigger:"blur"},{validator:a("area_m2_min"),trigger:"blur"}]}}},computed:{selectedMonthlyEmailsTitle:function(e){if(e.freeLimit)return"Pēc tevis izvēlētajiem kritērijiem - pagājušajā mēnesī atrasti ".concat(e.freeLimit.amount," sludinājumi, kas ir ").concat(e.freeLimit.percentage,"% no bezmaksas limita.")},maxMonthlyEmailsTitle:function(){return"Maksimālais bezmaksas e-pastu skaits mēnesī: ".concat(X)},maxMonthlyEmailsDescription:function(){return"Katru mēnesi vairāki simti lietotāji saņem bezmaksas e-pastus no Brokalys par aktuālajiem nekustāmajiem īpašumiem Latvijā. Lai nodrošinātu tik pat augstu servisu kā līdz šim,  esam spiesti ierobežot nosūtītu e-pastu skaitu katram lietotājam. Citiem vārdiem sakot - mēneša laikā nesaņemsi vairāk par  ".concat(X," e-pastiem.")}},methods:{submitForm:function(){var e=this;this.$refs.form.validate((function(a){if(!1!==a){var n=Object.keys(e.form).filter((function(a){return!e.form[a]}));e.loading=!0,e.$apollo.mutate({mutation:W.a,variables:Object(M["a"])(Object(M["a"])(Object(M["a"])({},e.form),n.reduce((function(e,a){return Object(M["a"])(Object(M["a"])({},e),{},Object(q["a"])({},a,void 0))}),{})),{},{region:e.region})}).then((function(){A()({message:"Turpmāk e-pastā saņemsi NĪ paziņojumus, kas atbilst tevis izvēlētajiem kritērijiem.",type:"success",duration:2e4})})).catch((function(e){var a;if(a=e.networkError?e.networkError.result.errors:e.graphQLErrors,!(a.length>0&&a[0].extensions.exception&&a[0].extensions.exception.maxPingers))throw e;var n=a[0].extensions.exception.maxPingers;A()({message:"Diemžēl, vienai e-pasta adresei var pievienot tikai ".concat(n," NĪ paziņojumus."),type:"error",duration:2e4})})).catch((function(e){A()({message:"Oops, kaut kas nogāja greizi. Centīsimies atrisināt problēmu tuvākajā laikā.",type:"error",duration:2e4}),B.addMetadata("Errors",Object(M["a"])({},e)),B.notify("Unexpected error occurred when creating a new pinger.")})).finally((function(){e.loading=!1}))}}))}}},ae=ee,ne=(n("8afd"),n("2877")),ie=Object(ne["a"])(ae,P,I,!1,null,null,null),te=ie.exports,re={name:"App",components:{SignupForm:te}},le=re,oe=(n("034f"),Object(ne["a"])(le,D,F,!1,null,null,null)),me=oe.exports,se=n("522d"),de=n("efe7");z["default"].use(se["a"]);var ue="apollo-token",ce="https://api.brokalys.com",fe={httpEndpoint:ce,tokenName:ue,persisting:!1,websocketsOnly:!1,ssr:!1};function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(de["createApolloClient"])(Object(M["a"])(Object(M["a"])({},fe),e)),n=a.apolloClient,i=a.wsClient;n.wsClient=i;var t=new se["a"]({defaultClient:n,defaultOptions:{$query:{}},errorHandler:function(e){console.log("%cError","background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;",e.message)}});return t}z["default"].config.productionTip=!1,z["default"].use(T.a),z["default"].use($.a),z["default"].use(O.a),z["default"].use(x.a),z["default"].use(N.a),z["default"].use(y.a),z["default"].use(g.a),z["default"].use(k.a),z["default"].use(p.a),z["default"].use(c.a),z["default"].use(d.a),z["default"].use(m.a),z["default"].use(l.a),z["default"].use(t.a),z["default"].use(E),new z["default"]({render:function(e){return e(me)},apolloProvider:pe(),components:{App:me}}).$mount("#app")},"85ec":function(e,a,n){},"8afd":function(e,a,n){"use strict";n("e979")},"97a2":function(e,a){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createPinger"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"category"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Category"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Type"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"price_min"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"price_max"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"rooms_min"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"rooms_max"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"area_m2_min"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"area_m2_max"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"comments"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createPinger"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"category"},value:{kind:"Variable",name:{kind:"Name",value:"category"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"price_min"},value:{kind:"Variable",name:{kind:"Name",value:"price_min"}}},{kind:"Argument",name:{kind:"Name",value:"price_max"},value:{kind:"Variable",name:{kind:"Name",value:"price_max"}}},{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}},{kind:"Argument",name:{kind:"Name",value:"rooms_min"},value:{kind:"Variable",name:{kind:"Name",value:"rooms_min"}}},{kind:"Argument",name:{kind:"Name",value:"rooms_max"},value:{kind:"Variable",name:{kind:"Name",value:"rooms_max"}}},{kind:"Argument",name:{kind:"Name",value:"area_m2_min"},value:{kind:"Variable",name:{kind:"Name",value:"area_m2_min"}}},{kind:"Argument",name:{kind:"Name",value:"area_m2_max"},value:{kind:"Variable",name:{kind:"Name",value:"area_m2_max"}}},{kind:"Argument",name:{kind:"Name",value:"comments"},value:{kind:"Variable",name:{kind:"Name",value:"comments"}}}],directives:[]}]}}],loc:{start:0,end:524}};n.loc.source={body:"mutation createPinger(\n  $email: String!\n  $category: Category!\n  $type: Type!\n  $price_min: Int!\n  $price_max: Int!\n  $region: String!\n  $rooms_min: Int\n  $rooms_max: Int\n  $area_m2_min: Int\n  $area_m2_max: Int\n  $comments: String\n) {\n  createPinger(\n    email: $email\n    category: $category\n    type: $type\n    price_min: $price_min\n    price_max: $price_max\n    region: $region\n    rooms_min: $rooms_min\n    rooms_max: $rooms_max\n    area_m2_min: $area_m2_min\n    area_m2_max: $area_m2_max\n    comments: $comments\n  )\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function i(e,a){if("FragmentSpread"===e.kind)a.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&a.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){i(e,a)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){i(e,a)})),e.definitions&&e.definitions.forEach((function(e){i(e,a)}))}var t={};function r(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}function l(e,a){var n={kind:e.kind,definitions:[r(e,a)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var i=t[a]||new Set,l=new Set,o=new Set;i.forEach((function(e){o.add(e)}));while(o.size>0){var m=o;o=new Set,m.forEach((function(e){if(!l.has(e)){l.add(e);var a=t[e]||new Set;a.forEach((function(e){o.add(e)}))}}))}return l.forEach((function(a){var i=r(e,a);i&&n.definitions.push(i)})),n}(function(){n.definitions.forEach((function(e){if(e.name){var a=new Set;i(e,a),t[e.name.value]=a}}))})(),e.exports=n,e.exports["createPinger"]=l(n,"createPinger")},e979:function(e,a,n){}});
//# sourceMappingURL=index-legacy.00ded5cd.js.map