(this["webpackJsonp@brokalys/pinger-app"]=this["webpackJsonp@brokalys/pinger-app"]||[]).push([[0],{177:function(e,a,n){e.exports={map:"RegionSelector_map__RYekW"}},179:function(e,a,n){e.exports={label:"RegionField_label__bbhIu",dropdown:"RegionField_dropdown__10xQQ"}},230:function(e,a,n){e.exports={container:"Home_container__1s89M"}},256:function(e,a,n){},363:function(e,a,n){"use strict";n.r(a);var i=n(60),r=n(0),t=n.n(r),o=n(49),l=n.n(o),m=(n(249),n(220)),c=n(102),d=n.n(c),u=Object(m.a)((function(e){var a=e.graphQLErrors,n=e.networkError;a&&a.forEach((function(e){d.a.notify("[GraphQL error]: Message: ".concat(e.message),(function(a){a.addMetadata("data",e)}))})),n&&d.a.notify("[Network error]: ".concat(n))})),s=new i.HttpLink({uri:"https://api.brokalys.com"}),p=new i.ApolloClient({cache:new i.InMemoryCache,link:Object(i.from)([u,s])}),b=n(223),j=n.n(b),v="3291a08204a007079100568b7fa44efc";d.a.start({apiKey:v,plugins:[new j.a]});var k=d.a.getPlugin("react").createErrorBoundary(t.a),g=(n(256),n(21)),x=n(377),h=n(381),f=n(379),O=n(35),_=n(378),y=n(151),N=n(229),V=n(54);Object(V.d)({mixed:{required:"\u0160is lauci\u0146\u0161 ir oblig\u0101ti j\u0101aizpilda",notType:"\u0160aj\u0101 lauci\u0146\u0101 nav ievad\u012bta pareiza v\u0113rt\u012bba"},string:{email:"\u0160aj\u0101 lauci\u0146\u0101 j\u0101b\u016bt ievad\u012btai e-pasta adresei",max:"\u0160aj\u0101 lauci\u0146\u0101 dr\u012bkst ievad\u012bt tikai ${max} simbolus"},number:{integer:"\u0160aj\u0101 lauci\u0146\u0101 var ievad\u012bt tikai veselus skait\u013cus",positive:"\u0160aj\u0101 lauci\u0146\u0101 var ievad\u012bt tikai pozit\u012bvus skait\u013cus",min:"\u0160\u012b lauci\u0146a v\u0113rt\u012bbai ir j\u0101b\u016bt liel\u0101kai vai vien\u0101dai ar ${min}",moreThan:"\u0160\u012b lauci\u0146a v\u0113rt\u012bbai ir j\u0101b\u016bt liel\u0101kai par ${more}",lessThan:"\u0160\u012b lauci\u0146a v\u0113rt\u012bbai ir j\u0101b\u016bt maz\u0101kai par ${less}"}});var C=n(376),T=n(158);var S={polygonToString:function(e){var a=e.getPath().getArray().map((function(e){return[e.lat().toFixed(6),e.lng().toFixed(6)].join(" ")}));return a.push(a[0]),a.join(", ")},polygonStringToCoords:function(e){var a=e.split(", ").map((function(e){var a=e.split(" "),n=Object(g.a)(a,2),i=n[0],r=n[1];if(void 0===i||void 0===r)throw new Error("Invalid coordinates provided");return{lat:parseFloat(i),lng:parseFloat(r)}}));return a.pop(),a}},w=n(177),A=n.n(w),I=n(4),$={rotateControl:!1,scaleControl:!1,streetViewControl:!1,panControl:!1,fullscreenControl:!1};function P(e){var a=Object(r.useState)(),n=Object(g.a)(a,2),i=n[0],t=n[1],o=Object(r.useMemo)((function(){return S.polygonStringToCoords(e.value)}),[e.value]),l=Object(T.c)({googleMapsApiKey:"AIzaSyADke6h-GKt5dPB8IcjVeQ0lAaC1wL_LwY"}),m=l.isLoaded,c=l.loadError;function d(){e.onChange(S.polygonToString(i))}return m?c?Object(I.jsxs)(f.a,{negative:!0,children:[Object(I.jsx)(f.a.Header,{children:"Probl\u0113ma iel\u0101d\u0113jot karti"}),Object(I.jsx)("p",{children:"Diem\u017e\u0113l, radusies probl\u0113ma iel\u0101d\u0113jot karti. Pa\u0161laik var izmantot tikai \u0101tro re\u0123ionu izv\u0113lni (augst\u0101k)."})]}):Object(I.jsx)(T.a,{options:$,mapContainerClassName:A.a.map,center:e.center,zoom:e.zoom,children:Object(I.jsx)(T.b,{draggable:!0,editable:!0,path:o,onLoad:t,onDragEnd:d,onMouseUp:d,onRightClick:function(e){void 0!==e.vertex&&(i.getPath().removeAt(e.vertex),d())}})}):Object(I.jsx)(h.a,{loading:!0,className:A.a.map})}var E=n(179),F=n.n(E),D=n(20),z=n.n(D),q=n(41);var L=function(e){var a=function(){var e=Object(r.useState)([]),a=Object(g.a)(e,2),i=a[0],t=a[1];return Object(r.useEffect)((function(){!function(){var e=Object(q.a)(z.a.mark((function e(){var a,i;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.t.bind(null,384,7));case 2:a=e.sent,i=a.riga,t(i.features.map((function(e){return{data:e,value:e.geometry.coordinates[0].map((function(e){return"".concat(e[1]," ").concat(e[0])})).join(", "),text:e.properties.name}})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),i}(),i=Object(r.useState)({lat:56.94,lng:24.105}),t=Object(g.a)(i,2),o=t[0],l=t[1],m=Object(r.useState)(11),c=Object(g.a)(m,2),d=c[0],u=c[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(_.a.Field,{required:!0,inline:!0,children:[Object(I.jsx)("label",{className:F.a.label,children:"Re\u0123ions"}),Object(I.jsx)("div",{className:F.a.dropdown,children:Object(I.jsx)(C.a,{deburr:!0,search:!0,loading:!a.length,placeholder:"\u0100tr\u0101 re\u0123ionu izv\u0113lne",options:a,value:e.value,onChange:function(a,n){var i=n.value,r=n.options;l(function(e){var a=e.reduce((function(a,n){return[a[0]+n[0]/e.length,a[1]+n[1]/e.length]}),[0,0]);return{lat:a[1],lng:a[0]}}(function(e,a){var n,i,r;return null===(n=e.find((function(e){return e.value===a})))||void 0===n||null===(i=n.data)||void 0===i||null===(r=i.geometry)||void 0===r?void 0:r.coordinates[0]}(r,i))),u(13),e.onChange(i)}})})]}),Object(I.jsx)(P,{center:o,zoom:d,value:e.value,onChange:e.onChange})]})},R=function(){return Object(V.b)().positive().integer().transform((function(e,a){return""===String(a).trim()?void 0:e}))},M=function(e,a){return e?a.min(e):a},G=Object(V.c)().shape({email:Object(V.e)().email().required(),category:Object(V.a)().oneOf(["APARTMENT","HOUSE","LAND"]).required(),type:Object(V.a)().oneOf(["SELL","RENT"]).required(),price_min:R().required(),price_max:R().required().when("price_min",M).lessThan(1e7),rooms_min:R(),rooms_max:R().when("rooms_min",M).lessThan(20),area_m2_min:R(),area_m2_max:R().when("area_m2_min",M).when("category",(function(e,a){return a.lessThan("LAND"===e?1e6:1e3)})),region:Object(V.e)().required().matches(/^(-?[0-9]{1,3}\.[0-9]+ -?[0-9]{1,3}\.[0-9]+(, )?)+$/,{message:"L\u016bdzu izv\u0113lies re\u0123ionu"}),comments:Object(V.e)().max(255)}),Q=[{value:"APARTMENT",text:"Dz\u012bvoklis"},{value:"HOUSE",text:"M\u0101ja"},{value:"LAND",text:"Zeme"}],H=[{value:"SELL",text:"P\u0101rdod"},{value:"RENT",text:"\u012ar\u0113"}];function B(e){return!!e&&{content:null===e||void 0===e?void 0:e.message,pointing:"below"}}function K(e){var a=Object(O.c)({resolver:Object(N.yupResolver)(G)}),n=a.control,i=a.handleSubmit,r=a.errors;return Object(I.jsxs)(_.a,{loading:e.loading,error:!!e.error,warning:!!e.warning,success:!!e.success,onSubmit:i(e.onSubmit),children:[Object(I.jsx)(O.a,{name:"email",control:n,defaultValue:"",render:function(e){return Object(I.jsx)(_.a.Field,{required:!0,id:"form-email-field",control:_.a.Input,label:"E-pasta adrese",placeholder:"john@doe.com",error:B(r.email),value:e.value,onChange:e.onChange})}}),Object(I.jsxs)(_.a.Group,{widths:"equal",children:[Object(I.jsx)(O.a,{name:"category",control:n,defaultValue:"APARTMENT",render:function(e){return Object(I.jsx)(_.a.Field,{required:!0,id:"form-category-field",control:_.a.Select,label:"Nekustam\u0101 \u012bpa\u0161uma tips",options:Q,error:B(r.category),value:e.value,onChange:function(a,n){var i=n.value;return e.onChange(i)}})}}),Object(I.jsx)(O.a,{name:"type",control:n,defaultValue:"SELL",render:function(e){return Object(I.jsx)(_.a.Field,{required:!0,id:"form-type-field",control:_.a.Select,label:"Dar\u012bjuma veids",options:H,error:B(r.type),value:e.value,onChange:function(a,n){var i=n.value;return e.onChange(i)}})}})]}),Object(I.jsxs)(_.a.Group,{widths:"equal",children:[Object(I.jsx)(O.a,{name:"price_min",control:n,defaultValue:"",render:function(e){return Object(I.jsxs)(_.a.Field,{required:!0,error:!!r.price_min,children:[Object(I.jsx)("label",{htmlFor:"form-price-min-field",children:"Cena (min)"}),Object(I.jsxs)(_.a.Input,{id:"form-price-min-field",labelPosition:"right",type:"number",placeholder:"0",children:[Object(I.jsx)("input",{value:e.value,onChange:e.onChange}),Object(I.jsx)(y.a,{basic:!0,prompt:!!r.price_min,children:"EUR"})]}),r.price_min&&Object(I.jsx)(y.a,{prompt:!0,pointing:"above",id:"form-price-min-field-error-message",children:r.price_min.message})]})}}),Object(I.jsx)(O.a,{name:"price_max",control:n,defaultValue:"",render:function(e){return Object(I.jsxs)(_.a.Field,{required:!0,error:!!r.price_max,children:[Object(I.jsx)("label",{htmlFor:"form-price-max-field",children:"Cena (max)"}),Object(I.jsxs)(_.a.Input,{id:"form-price-max-field",labelPosition:"right",type:"number",placeholder:"1000",children:[Object(I.jsx)("input",{value:e.value,onChange:e.onChange}),Object(I.jsx)(y.a,{basic:!0,prompt:!!r.price_max,children:"EUR"})]}),r.price_max&&Object(I.jsx)(y.a,{prompt:!0,pointing:"above",id:"form-price-max-field-error-message",children:r.price_max.message})]})}})]}),Object(I.jsxs)(_.a.Group,{widths:"equal",children:[Object(I.jsx)(O.a,{name:"rooms_min",control:n,defaultValue:"",render:function(e){return Object(I.jsx)(_.a.Field,{control:_.a.Input,type:"number",id:"form-rooms-min-field",label:"Istabas (min)",placeholder:"1",error:B(r.rooms_min),value:e.value,onChange:e.onChange})}}),Object(I.jsx)(O.a,{name:"rooms_max",control:n,defaultValue:"",render:function(e){return Object(I.jsx)(_.a.Field,{control:_.a.Input,type:"number",id:"form-rooms-max-field",label:"Istabas (max)",placeholder:"3",error:B(r.rooms_max),value:e.value,onChange:e.onChange})}})]}),Object(I.jsxs)(_.a.Group,{widths:"equal",children:[Object(I.jsx)(O.a,{name:"area_m2_min",control:n,defaultValue:"",render:function(e){return Object(I.jsxs)(_.a.Field,{required:!0,error:!!r.area_m2_min,children:[Object(I.jsx)("label",{htmlFor:"form-area-m2-min-field",children:"Plat\u012bba (min)"}),Object(I.jsxs)(_.a.Input,{id:"form-area-m2-min-field",labelPosition:"right",type:"number",placeholder:"30",children:[Object(I.jsx)("input",{value:e.value,onChange:e.onChange}),Object(I.jsxs)(y.a,{basic:!0,prompt:!!r.area_m2_min,children:["m",Object(I.jsx)("sup",{children:"2"})]})]}),r.area_m2_min&&Object(I.jsx)(y.a,{prompt:!0,pointing:"above",id:"form-area-m2-min-field-error-message",children:r.area_m2_min.message})]})}}),Object(I.jsx)(O.a,{name:"area_m2_max",control:n,defaultValue:"",render:function(e){return Object(I.jsxs)(_.a.Field,{required:!0,error:!!r.area_m2_max,children:[Object(I.jsx)("label",{htmlFor:"form-area-m2-max-field",children:"Plat\u012bba (max)"}),Object(I.jsxs)(_.a.Input,{id:"form-area-m2-max-field",labelPosition:"right",type:"number",placeholder:"70",children:[Object(I.jsx)("input",{value:e.value,onChange:e.onChange}),Object(I.jsxs)(y.a,{basic:!0,prompt:!!r.area_m2_max,children:["m",Object(I.jsx)("sup",{children:"2"})]})]}),r.area_m2_max&&Object(I.jsx)(y.a,{prompt:!0,pointing:"above",id:"form-area-m2-max-field-error-message",children:r.area_m2_max.message})]})}})]}),Object(I.jsx)(O.a,{name:"region",control:n,defaultValue:"56.992294 24.136619, 56.976394 23.995790, 56.924904 24.005336, 56.889288 24.108467, 56.932211 24.291935, 56.996502 24.245176, 56.992294 24.136619",render:L}),Object(I.jsx)(O.a,{name:"comments",control:n,defaultValue:"",render:function(e){return Object(I.jsx)(_.a.Field,{control:_.a.TextArea,id:"form-comments-field",label:"Koment\u0101ri",placeholder:"Ieteikumi, atsauksmes",error:B(r.comments),value:e.value,onChange:e.onChange})}}),e.error,e.warning,e.success,Object(I.jsx)(_.a.Field,{control:_.a.Button,primary:!0,type:"submit",role:"button",content:"Sa\u0146emt nek.\u012bp. pazi\u0146ojumus",formNoValidate:!0})]})}K.defaultProps={loading:!1,error:!1,success:!1};var U=n(230),J=n.n(U),Y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createPinger"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"email"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"category"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Category"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Type"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"price_min"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"price_max"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"region"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"rooms_min"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"rooms_max"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"area_m2_min"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"area_m2_max"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"comments"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createPinger"},arguments:[{kind:"Argument",name:{kind:"Name",value:"email"},value:{kind:"Variable",name:{kind:"Name",value:"email"}}},{kind:"Argument",name:{kind:"Name",value:"category"},value:{kind:"Variable",name:{kind:"Name",value:"category"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"price_min"},value:{kind:"Variable",name:{kind:"Name",value:"price_min"}}},{kind:"Argument",name:{kind:"Name",value:"price_max"},value:{kind:"Variable",name:{kind:"Name",value:"price_max"}}},{kind:"Argument",name:{kind:"Name",value:"region"},value:{kind:"Variable",name:{kind:"Name",value:"region"}}},{kind:"Argument",name:{kind:"Name",value:"rooms_min"},value:{kind:"Variable",name:{kind:"Name",value:"rooms_min"}}},{kind:"Argument",name:{kind:"Name",value:"rooms_max"},value:{kind:"Variable",name:{kind:"Name",value:"rooms_max"}}},{kind:"Argument",name:{kind:"Name",value:"area_m2_min"},value:{kind:"Variable",name:{kind:"Name",value:"area_m2_min"}}},{kind:"Argument",name:{kind:"Name",value:"area_m2_max"},value:{kind:"Variable",name:{kind:"Name",value:"area_m2_max"}}},{kind:"Argument",name:{kind:"Name",value:"comments"},value:{kind:"Variable",name:{kind:"Name",value:"comments"}}}],directives:[]}]}}],loc:{start:0,end:523,source:{body:"mutation createPinger(\n  $email: String!\n  $category: Category!\n  $type: Type!\n  $price_min: Int!\n  $price_max: Int!\n  $region: String!\n  $rooms_min: Int\n  $rooms_max: Int\n  $area_m2_min: Int\n  $area_m2_max: Int\n  $comments: String\n) {\n  createPinger(\n    email: $email\n    category: $category\n    type: $type\n    price_min: $price_min\n    price_max: $price_max\n    region: $region\n    rooms_min: $rooms_min\n    rooms_max: $rooms_max\n    area_m2_min: $area_m2_min\n    area_m2_max: $area_m2_max\n    comments: $comments\n  )\n}",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function W(e){var a,n;return(null===e||void 0===e||null===(a=e.graphQLErrors[0])||void 0===a||null===(n=a.extensions)||void 0===n?void 0:n.maxPingers)||0}var Z=function(){var e=Object(i.useMutation)(Y,{errorPolicy:"all"}),a=Object(g.a)(e,2),n=a[0],t=a[1],o=t.loading,l=t.error,m=t.data,c=Object(r.useCallback)((function(e){n({variables:e})}),[n]);return Object(I.jsx)(x.a,{text:!0,className:J.a.container,children:Object(I.jsxs)(h.a,{padded:!0,children:[Object(I.jsx)("h1",{children:"Brokalys pingeris"}),Object(I.jsx)("p",{children:"Aizpildi formu un sa\u0146em pazi\u0146ojumus e-past\u0101 par jauniem nekustam\u0101 \u012bpa\u0161uma sludin\u0101jumiem."}),Object(I.jsx)("hr",{}),Object(I.jsx)(K,{onSubmit:c,loading:o,error:l&&W(l)<=0&&Object(I.jsx)(f.a,{error:!0,header:"Kaut kas nog\u0101ja greizi",content:"Cent\u012bsimies atrisin\u0101t probl\u0113mu tuv\u0101kaj\u0101 laik\u0101."}),warning:l&&W(l)>0&&Object(I.jsxs)(f.a,{warning:!0,children:[Object(I.jsx)(f.a.Header,{children:"PINGERis nav izveidots"}),Object(I.jsxs)(f.a.Content,{children:["Diem\u017e\u0113l, vienai e-pasta adresei var pievienot tikai"," ",W(l)," N\u012a pazi\u0146ojumus"]})]}),success:m&&Object(I.jsx)(f.a,{success:!0,header:"PINGERis veiksm\u012bgi izveidots",content:"Turpm\u0101k sa\u0146emsi e-pastus par jauniem nekustamo \u012bpa\u0161umu sludin\u0101jumiem, kas atbilst tevis izv\u0113l\u0113tajiem krit\u0113rijiem."})})]})})};l.a.render(Object(I.jsx)(t.a.StrictMode,{children:Object(I.jsx)(k,{children:Object(I.jsx)(i.ApolloProvider,{client:p,children:Object(I.jsx)(Z,{})})})}),document.getElementById("root"))}},[[363,1,2]]]);
//# sourceMappingURL=main.d208b73c.chunk.js.map