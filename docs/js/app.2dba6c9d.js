(function(t){function e(e){for(var n,a,o=e[0],u=e[1],l=e[2],c=0,p=[];c<o.length;c++)a=o[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);h&&h(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var u=i[a];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function a(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1e61a3aa"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],i=r[t];if(0!==i)if(i)e.push(i[2]);else{var n=new Promise((function(e,n){i=r[t]=[e,n]}));e.push(i[2]=n);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=a(t);var l=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(c);var i=r[t];if(0!==i){if(i){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,i[1](l)}r[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/domainSearch/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var h=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0649":function(t,e,i){"use strict";i("819d")},"819d":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.63a7d78d.svg"},cd49:function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),r=i("7496"),s=i("a523"),a=i("f6c4"),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(r["a"],[e(a["a"],[e(s["a"],{staticClass:"container"},[e("dataTable")],1)],1)],1)},u=[],l=i("8336"),c=i("b0af"),h=i("99d9"),p=i("62ad"),y=i("8fea"),d=i("0fd9"),f=i("2fa4"),m=i("8654"),v=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(d["a"],{attrs:{dense:""}},[e(p["a"],{attrs:{cols:"4"}},[e(m["a"],{attrs:{label:"query",outlined:""},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1),e(c["a"],[e(h["a"],[t._v(" Search by multiple "),e(f["a"])],1),e(y["a"],{attrs:{headers:t.headers,items:t.batch,"items-per-page":-1},scopedSlots:t._u([{key:"item.university",fn:function({item:e}){return[t._v(" "+t._s(e.university)+" ")]}},{key:"item.action",fn:function({item:i}){return[e(l["a"],{attrs:{color:"primary"},on:{click:function(e){return t.searchByAllDomain(i.url)}}},[t._v("Search")])]}}],null,!0)})],1),e("div",{staticClass:"spacing-playground pa-6"}),e(c["a"],[e(h["a"],[t._v(" Search individually "),e(f["a"]),e(m["a"],{attrs:{"append-icon":"mdi-magnify",label:"search for the registrered institution","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(y["a"],{attrs:{headers:t.headers,items:t.domains,search:t.search,"items-per-page":-1},scopedSlots:t._u([{key:"item.university",fn:function({item:i}){return[e("a",{attrs:{href:i.url,target:"_blank"}},[t._v(" "+t._s(i.university))])]}},{key:"item.action",fn:function({item:i}){return[!1===i.university.includes("google")?e("div",[e(l["a"],{attrs:{color:"primary"},on:{click:function(e){return t.searchByDomain(i.url)}}},[t._v("Search")])],1):t._e()]}}],null,!0)})],1)],1)},_=[],g=(i("14d9"),n["a"].extend({data:()=>({query:"",search:"",headers:[{text:"Homepage",align:"start",sortable:!1,value:"university"},{text:"search",value:"action"}],batch:[{university:"from Central China Normal University to National Taiwan Normal University",url:"from1to18"},{university:"from National Taiwan University to Zhengzhou University",url:"from19to36"}],domains:[{university:"Central China Normal University (google translate)",url:"https://imd-ccnu-edu-cn.translate.goog/szdw2/zrjs.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"Central China Normal University",url:"http://imd.ccnu.edu.cn/szdw2/zrjs.htm"},{university:"University of the Chinese Academy of Sciences (google translate)",url:"https://www-las-cas-cn.translate.goog/yjsjy2021/dsdw2021/dsjs2021/?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"University of the Chinese Academy of Sciences",url:"http://www.las.cas.cn/yjsjy2021/dsdw2021/dsjs2021/"},{university:"Chung-Ang University (google translate)",url:"https://society-cau-ac-kr.translate.goog/class/sub04.asp?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"Chung-Ang University",url:"http://lis.cau.ac.kr/01_info/info_03a.php"},{university:"Curtin University",url:"https://www.curtin.edu.au/about/learning-teaching/humanities/school-of-media-creative-arts-and-social-inquiry/our-people/"},{university:"Ewha Womans University (google translate)",url:"https://cms-ewha-ac-kr.translate.goog/user/indexSub.action?codyMenuSeq=6335770&siteId=elis1959&menuUIType=top&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"Ewha Womans University",url:"https://cms.ewha.ac.kr/user/indexSub.action?codyMenuSeq=6335770&siteId=elis1959&menuUIType=top"},{university:"Hong Kong, University of",url:"https://web.edu.hku.hk/unit/human-communication-development-and-information-sciences/Staff%20List"},{university:"Jeonbuk National University",url:"https://wz3.jbnu.ac.kr/liseng/11004/subview.do"},{university:"Jilin University",url:"http://gl.jlu.edu.cn/English/Faculty__Research/Faculty.htm"},{university:"Khon Kaen University",url:"https://home.kku.ac.th/icm/main/index.php/teachers-en"},{university:"Kyungpook National University (google translate)",url:"https://widit-knu-ac-kr.translate.goog/lis/Professors.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"Kyungpook National University",url:"http://widit.knu.ac.kr/lis/Professors.htm"},{university:"Kyushu University",url:"https://www.ifs.kyushu-u.ac.jp/eng/lss/lss-eng-01/lss-eng-01-04/"},{university:"Melbourne, University of",url:"https://cis.unimelb.edu.au/#people"},{university:"Monash University",url:"https://www.monash.edu/it/about-us/our-people"},{university:"Multimedia University (MMU)",url:"https://www.mmu.edu.my/fci/prof-assoc-prof/"},{university:"Nanjing University",url:"https://im.nju.edu.cn/imeng/36559/list.htm"},{university:"Nanjing University of Science and Technology",url:"https://english.njust.edu.cn/2d/40/c600a273728/page.htm"},{university:"Nankai University",url:"https://bs.nankai.edu.cn/InformationResourcesManagement/list.htm"},{university:"National Chengchi University",url:"https://ncculias.nccu.edu.tw/eng/PageStaffing?fid=10075"},{university:"National Taiwan Normal University",url:"https://www.glis.ntnu.edu.tw/index.php/en/faculty-2/"},{university:"National Taiwan University",url:"https://www.lis.ntu.edu.tw/english/?page_id=71"},{university:"Peking University (google translate)",url:"https://www-im-pku-edu-cn.translate.goog/szll/syry/index.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"Peking University",url:"http://www.im.pku.edu.cn/szll/syry/index.htm"},{university:"Philippines, University of the",url:"https://upslis.info/faculty"},{university:"Renmin University of China",url:"http://sirm.ruc.edu.cn/people/faculty"},{university:"Seoul National University",url:"https://convergence.snu.ac.kr/page/professor.php?lang=en"},{university:"Shanghai University (google translate)",url:"https://ischool-shu-edu-cn.translate.goog/xscy/zyjs.htm?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"Shanghai University",url:"https://ischool.shu.edu.cn/xscy/zyjs.htm"},{university:"Soochow University (google translate)",url:"https://shxy-suda-edu-cn.translate.goog/15323/list.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp"},{university:"Soochow University",url:"http://shxy.suda.edu.cn/15323/list.htm"},{university:"Sukhothai Thammathirat Open University",url:"https://liberalarts.stou.ac.th/eng/"},{university:"Sun Yat-sen University, Guangzhou",url:"https://ischool.sysu.edu.cn/en/staff-information/academic"},{university:"Sungkyunkwan University",url:"https://liberalarts.skku.edu/eng_liberal/intro/faculty_library.do"},{university:"Te Herenga Waka -- Victoria University of Wellington",url:"https://www.wgtn.ac.nz/business/about/staff"},{university:"Teknologi MARA, Universiti",url:"https://fim.uitm.edu.my/index.php/corporate/staff-directory/academic-staff"},{university:"Tsukuba, University of",url:"http://www.slis.tsukuba.ac.jp/grad/english/research/staff_e/"},{university:"Universitas Indonesia",url:"https://scholar.ui.ac.id/en/organisations/department-of-library-and-information-science/persons/"},{university:"Waikato, University of",url:"https://www.cms.waikato.ac.nz/people"},{university:"Wuhan University",url:"http://sim.whu.edu.cn/English/People/Faculty.htm"},{university:"Yonsei University",url:"https://yonsei.pure.elsevier.com/en/organisations/department-of-library-and-information-science/persons/"},{university:"Zhengzhou University(google translate)",url:"https://www5-zzu-edu-cn.translate.goog/xxgl/info/1011/1476.htm?_x_tr_sch=http&_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ja&_x_tr_pto=wapp4"},{university:"Zhengzhou University",url:"http://www5.zzu.edu.cn/xxgl/info/1011/1476.htm"}]}),methods:{createForm(t){var e=document.createElement("form");e.setAttribute("action","https://www.google.com/search"),e.setAttribute("method","get"),e.setAttribute("target","_blank"),e.style.display="none",document.body.appendChild(e);var i="site:";const n=Object.values(t).pop();for(const a of Object.values(t))""!==a.url&&(a.url!==(null===n||void 0===n?void 0:n.url)?i+=a.url+" OR site:":i+=a.url);const r="( "+i+" ) "+this.query;var s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","query"),s.setAttribute("value",r),e.appendChild(s),e.submit()},validQuery(){return""!==this.query||(alert("Please enter a query."),!1)},searchByDomain(t){if(this.validQuery()){const e=`https://www.google.com/search?q=site:${t} ${this.query}`;window.open(e,"_blank")}},searchByAllDomain(t){if(this.validQuery())if("from1to18"===t){const t=[];for(let e=this.domains.findIndex(t=>"Central China Normal University"===t.university);e<this.domains.length;e++)if(-1===this.domains[e].url.indexOf("translate.goog")){if(!(t.length<19))break;t.push(this.domains[e])}this.createForm(t)}else if("from19to36"===t){const t=[];for(let e=this.domains.findIndex(t=>"National Taiwan University"===t.university);e<this.domains.length;e++)if(-1===this.domains[e].url.indexOf("translate.goog")){if(!(t.length<18))break;t.push(this.domains[e])}this.createForm(t)}}}})),w=g,b=i("2877"),x=Object(b["a"])(w,v,_,!1,null,null,null),k=x.exports,j=n["a"].extend({components:{dataTable:k}}),U=j,C=(i("0649"),Object(b["a"])(U,o,u,!1,null,null,null)),S=C.exports,O=i("8c4f"),N=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[e("img",{attrs:{alt:"Vue logo",src:i("cf05")}}),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},P=[],T=i("9ab4"),z=i("1b40"),A=i("adda"),q=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(s["a"],[e(d["a"],{staticClass:"text-center"},[e(p["a"],{attrs:{cols:"12"}},[e(A["a"],{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),e(p["a"],{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(p["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(d["a"],{attrs:{justify:"center"}},t._l(t.whatsNext,(function(i,n){return e("a",{key:n,staticClass:"subheading mx-3",attrs:{href:i.href,target:"_blank"}},[t._v(" "+t._s(i.text)+" ")])})),0)],1),e(p["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(d["a"],{attrs:{justify:"center"}},t._l(t.importantLinks,(function(i,n){return e("a",{key:n,staticClass:"subheading mx-3",attrs:{href:i.href,target:"_blank"}},[t._v(" "+t._s(i.text)+" ")])})),0)],1),e(p["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(d["a"],{attrs:{justify:"center"}},t._l(t.ecosystem,(function(i,n){return e("a",{key:n,staticClass:"subheading mx-3",attrs:{href:i.href,target:"_blank"}},[t._v(" "+t._s(i.text)+" ")])})),0)],1)],1)],1)},M=[],W=n["a"].extend({name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})}),E=W,I=Object(b["a"])(E,q,M,!1,null,null,null),F=I.exports;let H=class extends z["b"]{};H=Object(T["a"])([Object(z["a"])({components:{HelloWorld:F}})],H);var D=H,K=D,L=Object(b["a"])(K,N,P,!1,null,null,null),V=L.exports;n["a"].use(O["a"]);const R=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:()=>i.e("about").then(i.bind(null,"f820"))}],B=new O["a"]({mode:"history",base:"/domainSearch/",routes:R});var J=B,Q=i("2f62");n["a"].use(Q["a"]);var Y=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=i("f309");n["a"].use(Z["a"]);var $=new Z["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:J,store:Y,vuetify:$,render:t=>t(S)}).$mount("#app")},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2dba6c9d.js.map