(function(e){function t(t){for(var r,i,l=t[0],s=t[1],m=t[2],u=0,p=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,m||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,l=1;l<a.length;l++){var s=a[l];0!==o[s]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},o={index:0},n=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var m=0;m<l.length;m++)t(l[m]);var c=s;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),o=a.n(r);o.a},1:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("ffc1"),a("0fae");var r=a("2b0e"),o=a("5c96"),n=a.n(o),i=a("28dd"),l=a("a1fc"),s=a.n(l),m=a("755e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-main",[a("SignupForm")],1)],1)},u=[],p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",[a("h1",{staticClass:"h1"},[e._v("Brokalys pingeris")]),a("p",[e._v("\n      Aizpildi formu un saņem paziņojumus e-pastā par jauniem nekustamā\n      īpašuma sludinājumiem.\n    ")]),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left",disabled:e.loading}},[a("el-form-item",{attrs:{label:"E-pasta adrese",prop:"email"}},[a("el-col",{attrs:{span:11}},[a("el-input",{attrs:{placeholder:"demo@brokalys.com","suffix-icon":"el-icon-message"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),a("el-row",[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{label:"Nekustamā īpašuma tips",prop:"category"}},[a("el-select",{model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}},[a("el-option",{attrs:{label:"Dzīvoklis",value:"apartment"}}),a("el-option",{attrs:{label:"Māja",value:"house"}}),a("el-option",{attrs:{label:"Zeme",value:"land"}})],1)],1)],1),a("el-col",{attrs:{span:11,offset:2}},[a("el-form-item",{attrs:{label:"Darījuma veids",prop:"type"}},[a("el-select",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-option",{attrs:{label:"Pārdod",value:"sell"}}),a("el-option",{attrs:{label:"Īrē",value:"rent"}})],1)],1)],1)],1),a("el-form-item",{attrs:{label:"Cena (no, līdz)",required:""}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"price_min"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.price_min,callback:function(t){e.$set(e.form,"price_min",e._n(t))},expression:"form.price_min"}},[a("template",{slot:"append"},[e._v("EUR")])],2)],1)],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"price_max"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.price_max,callback:function(t){e.$set(e.form,"price_max",e._n(t))},expression:"form.price_max"}},[a("template",{slot:"append"},[e._v("EUR")])],2)],1)],1)],1),a("el-form-item",{attrs:{label:"Istabas (no, līdz)"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"rooms_min"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.rooms_min,callback:function(t){e.$set(e.form,"rooms_min",e._n(t))},expression:"form.rooms_min"}})],1)],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"rooms_max"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.rooms_max,callback:function(t){e.$set(e.form,"rooms_max",e._n(t))},expression:"form.rooms_max"}})],1)],1)],1),a("el-form-item",{attrs:{label:"Platība (no, līdz)"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"area_m2_min"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.area_m2_min,callback:function(t){e.$set(e.form,"area_m2_min",e._n(t))},expression:"form.area_m2_min"}},[a("template",{slot:"append"},[e._v("m2")])],2)],1)],1),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"area_m2_max"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.area_m2_max,callback:function(t){e.$set(e.form,"area_m2_max",e._n(t))},expression:"form.area_m2_max"}},[a("template",{slot:"append"},[e._v("m2")])],2)],1)],1)],1),a("el-form-item",{attrs:{label:"Reģions",required:""}},[a("el-col",[a("gmap-map",{ref:"map",staticStyle:{width:"100%",height:"300px"},attrs:{center:e.center,zoom:10}},[a("gmap-polygon",{ref:"polygon",attrs:{paths:e.paths,editable:!0},on:{paths_changed:function(t){return e.updateEdited(t)},rightclick:e.handleClickForDelete}})],1)],1)],1),a("el-form-item",{attrs:{label:"Komentāri",prop:"comments"}},[a("el-col",[a("el-input",{attrs:{type:"textarea",placeholder:"Ieteikumi, atsauksmes","suffix-icon":"el-icon-message"},model:{value:e.form.comments,callback:function(t){e.$set(e.form,"comments",t)},expression:"form.comments"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.submitForm()}}},[e._v("\n          Saņemt nek.īp. paziņojumus\n        ")])],1)],1)],1)],1)},f=[];function g(e){return e.concat(e.slice(0,1))}var d={name:"SignupForm",data:function(){var e=this,t=function(t){return function(a,r,o){return r&&e.form[t]>=r?o(new Error("Lauciņam /no/ ir jābūt lielākam par lauciņu /līdz/.")):o()}};return{center:{lat:56.98,lng:24.105078},paths:[[{lng:24.1366192486729,lat:56.9922942350075},{lng:23.995789971634395,lat:56.976393666616254},{lng:24.005336060806712,lat:56.92490408641493},{lng:24.108466782852588,lat:56.889287904181955},{lng:24.291935029312526,lat:56.93221057479092},{lng:24.24517618684422,lat:56.99650208638349}]],mvcPaths:null,loading:!1,form:{email:"",category:"apartment",type:"sell",price_min:"",price_max:"",rooms_min:null,rooms_max:null,area_m2_min:null,area_m2_max:null,optin:!1},rules:{email:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"},{type:"email",message:"Pārbaudi e-pasta adresi.",trigger:"blur"}],category:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"}],type:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"}],price_min:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"},{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus.",trigger:"blur"}],price_max:[{required:!0,message:"Šis lauciņš ir obligāti aizpildāms.",trigger:"blur"},{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus.",trigger:"blur"},{validator:t("price_min"),trigger:"blur"}],rooms_min:[{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus.",trigger:"blur"}],rooms_max:[{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus.",trigger:"blur"},{validator:t("rooms_min"),trigger:"blur"}],area_m2_min:[{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus.",trigger:"blur"}],area_m2_max:[{type:"integer",message:"Šajā lauciņā var ievadīt tikai skaitļus.",trigger:"blur"},{validator:t("area_m2_min"),trigger:"blur"}]}}},watch:{polygonPaths:function(e){e&&(this.paths=e,this.polygonGeojson=JSON.stringify({type:"Polygon",coordinates:this.paths.map(function(e){return g(e.map(function(e){var t=e.lat,a=e.lng;return[a,t]}))})},null,2))}},computed:{polygonPaths:function(){if(!this.mvcPaths)return null;for(var e=[],t=0;t<this.mvcPaths.getLength();t++){for(var a=[],r=0;r<this.mvcPaths.getAt(t).getLength();r++){var o=this.mvcPaths.getAt(t).getAt(r);a.push({lat:o.lat(),lng:o.lng()})}e.push(a)}return e}},methods:{submitForm:function(){var e=this;this.$refs.form.validate(function(t){if(!1!==t){var a=e.paths[0].slice(0,-1),r=a.map(function(e){return"".concat(e.lat.toFixed(6)," ").concat(e.lng.toFixed(6))});e.loading=!0,e.$http.post("https://api.brokalys.com/",{query:'mutation {\n              createPinger(\n                email: "'.concat(e.form.email,'",\n                category: ').concat(e.form.category.toUpperCase(),",\n                type: ").concat(e.form.type.toUpperCase(),",\n                price_min: ").concat(e.form.price_min,",\n                price_max: ").concat(e.form.price_max,",\n                ").concat(e.form.rooms_min?"rooms_min: ".concat(e.form.rooms_min,","):"","\n                ").concat(e.form.rooms_max?"rooms_max: ".concat(e.form.rooms_max,","):"","\n                ").concat(e.form.area_m2_min?"area_m2_min: ".concat(e.form.area_m2_min,","):"","\n                ").concat(e.form.area_m2_max?"area_m2_max: ".concat(e.form.area_m2_max,","):"","\n                ").concat(e.form.comments?"comments: ".concat(JSON.stringify(e.form.comments),","):"",'\n                region: "').concat(r.join(", "),'"\n              )\n            }')}).then(function(t){if(t.body.errors)throw t;e.loading=!1,e.$message({message:"Turpmāk e-pastā saņemsi NĪ paziņojumus, kas atbilst tevis izvēlētajiem kritērijiem.",type:"success",duration:2e4})}).catch(function(t){e.loading=!1,e.$message({message:"Oops, kaut kas nogāja greizi. Centīsimies atrisināt problēmu tuvākajā laikā.",type:"error",duration:2e4}),window.bugsnagClient&&(window.bugsnagClient.metaData={response:t},window.bugsnagClient.notify("Unexpected error occurred when creating a new pinger."))})}})},updateEdited:function(e){this.mvcPaths=e},handleClickForDelete:function(e){e.vertex&&this.$refs.polygon.$polygonObject.getPaths().getAt(e.path).removeAt(e.vertex)}}},_=d,b=(a("8afd"),a("2877")),v=Object(b["a"])(_,p,f,!1,null,null,null),h=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n  Hello\n")])},x=[],k={name:"SideMenu"},j=k,w=Object(b["a"])(j,y,x,!1,null,null,null),P=w.exports,$={name:"App",components:{SignupForm:h,SideMenu:P}},z=$,O=(a("034f"),Object(b["a"])(z,c,u,!1,null,null,null)),C=O.exports;r["default"].config.productionTip=!1,window.bugsnagClient&&window.bugsnagClient.use(s()(r["default"])),r["default"].use(n.a),r["default"].use(i["a"]),r["default"].use(m,{load:{key:"AIzaSyADke6h-GKt5dPB8IcjVeQ0lAaC1wL_LwY"}}),new r["default"]({render:function(e){return e(C)},components:{App:C}}).$mount("#app")},"64a9":function(e,t,a){},"8afd":function(e,t,a){"use strict";var r=a("babd"),o=a.n(r);o.a},babd:function(e,t,a){}});
//# sourceMappingURL=index.59286969.js.map