(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99151fca"],{1148:function(t,e,n){"use strict";var r=n("a691"),o=n("1d80");t.exports="".repeat||function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"408a":function(t,e,n){var r=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=r(t))throw TypeError("Incorrect invocation");return+t}},"6ba0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gmap-map",{ref:"map",staticStyle:{width:"100%",height:"300px"},attrs:{options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1},center:t.center,zoom:10}},[n("gmap-polygon",{ref:"polygon",attrs:{paths:t.paths,editable:!0},on:{paths_changed:function(e){return t.updateEdited(e)},rightclick:t.handleClickForDelete}})],1)},o=[],i=(n("b680"),n("755e")),a={name:"GoogleMap",created(){try{Object(i["loadGmapApi"])({key:"AIzaSyADke6h-GKt5dPB8IcjVeQ0lAaC1wL_LwY"})}catch(e){}const t=this.paths[0].map(t=>[t.lat.toFixed(6),t.lng.toFixed(6)].join(" ")).join(", ");this.$emit("update:region",t)},data(){return{center:{lat:56.98,lng:24.105078},paths:[[{lng:24.1366192486729,lat:56.9922942350075},{lng:23.995789971634395,lat:56.976393666616254},{lng:24.005336060806712,lat:56.92490408641493},{lng:24.108466782852588,lat:56.889287904181955},{lng:24.291935029312526,lat:56.93221057479092},{lng:24.24517618684422,lat:56.99650208638349}]]}},methods:{updateEdited(t){const e=t.getAt(0).getArray().map(t=>[t.lat().toFixed(6),t.lng().toFixed(6)].join(" ")).join(", ");this.$emit("update:region",e)},handleClickForDelete(t){t.vertex&&this.$refs.polygon.$polygonObject.getPaths().getAt(t.path).removeAt(t.vertex)}}},l=a,c=n("2877"),u=Object(c["a"])(l,r,o,!1,null,null,null);e["default"]=u.exports},b680:function(t,e,n){"use strict";var r=n("23e7"),o=n("a691"),i=n("408a"),a=n("1148"),l=n("d039"),c=1..toFixed,u=Math.floor,s=function(t,e,n){return 0===e?n:e%2===1?s(t,e-1,n*t):s(t*t,e/2,n)},p=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){c.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(t){var e,n,r,l,c=i(this),h=o(t),d=[0,0,0,0,0,0],f="",g="0",m=function(t,e){var n=-1,r=e;while(++n<6)r+=t*d[n],d[n]=r%1e7,r=u(r/1e7)},w=function(t){var e=6,n=0;while(--e>=0)n+=d[e],d[e]=u(n/t),n=n%t*1e7},x=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==d[t]){var n=String(d[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(e=p(c*s(2,69,1))-69,n=e<0?c*s(2,-e,1):c/s(2,e,1),n*=4503599627370496,e=52-e,e>0){m(0,n),r=h;while(r>=7)m(1e7,0),r-=7;m(s(10,r,1),0),r=e-1;while(r>=23)w(1<<23),r-=23;w(1<<r),m(1,1),w(2),g=x()}else m(0,n),m(1<<-e,0),g=x()+a.call("0",h);return h>0?(l=g.length,g=f+(l<=h?"0."+a.call("0",h-l)+g:g.slice(0,l-h)+"."+g.slice(l-h))):g=f+g,g}})}}]);
//# sourceMappingURL=chunk-99151fca.713463c1.js.map