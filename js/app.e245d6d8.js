(function(e){function n(n){for(var i,r,a=n[0],u=n[1],c=n[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);s&&s(n);while(f.length)f.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],i=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(i=!1)}i&&(l.splice(n--,1),e=r(r.s=t[0]))}return e}var i={},o={app:0},l=[];function r(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=i,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)r.d(t,i,function(n){return e[n]}.bind(null,i));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/vue-use-tinymce/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=n,a=a.slice();for(var c=0;c<a.length;c++)n(a[c]);var s=u;l.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var i=t("64a9"),o=t.n(i);o.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var i=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("HelloWorld")],1)},l=[],r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e._v("\n  "+e._s(e.msg)+"\n  "),t("tinymce-editor",{ref:"editor",attrs:{disabled:e.disabled,"base-url":e.baseUrl,language:e.language,skin:e.skin},on:{onClick:e.onClick},model:{value:e.msg,callback:function(n){e.msg=n},expression:"msg"}}),t("button",{on:{click:e.clear}},[e._v("清空内容")]),t("button",{on:{click:function(n){e.disabled=!0}}},[e._v("禁用")]),t("button",{on:{click:function(n){e.disabled=!1}}},[e._v("启用")])],1)},a=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"tinymce-editor"},[t("editor",{attrs:{init:e.init,disabled:e.disabled},on:{onClick:e.onClick},model:{value:e.myValue,callback:function(n){e.myValue=n},expression:"myValue"}})],1)},c=[],s=t("e562"),d=t.n(s),f=t("ca72"),p=(t("0d68"),t("4ea8"),t("3aea"),t("07d1"),t("84ec"),t("9434"),{components:{Editor:f["a"]},props:{value:{type:String,default:""},baseUrl:{type:String,default:""},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"lists image media table wordcount"},toolbar:{type:[String,Array],default:"undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | lists image media table | removeformat"}},data:function(){return{init:{language_url:"".concat(this.baseUrl,"/tinymce/langs/zh_CN.js"),language:"zh_CN",skin_url:"".concat(this.baseUrl,"/tinymce/skins/ui/oxide"),content_css:"".concat(this.baseUrl,"/tinymce/skins/content/default/content.css"),height:300,plugins:this.plugins,toolbar:this.toolbar,branding:!1,menubar:!1,images_upload_handler:function(e,n,t){var i="data:image/jpeg;base64,"+e.base64();n(i)}},myValue:this.value}},mounted:function(){d.a.init({})},methods:{onClick:function(e){this.$emit("onClick",e,d.a)},clear:function(){this.myValue=""}},watch:{value:function(e){this.myValue=e},myValue:function(e){this.$emit("input",e)}}}),m=p,b=t("2877"),g=Object(b["a"])(m,u,c,!1,null,null,null),y=g.exports,h={components:{TinymceEditor:y},data:function(){return{msg:"Welcome to Use Tinymce Editor-liubing.me",disabled:!1,baseUrl:"/vue-use-tinymce",language:"zh_CN",skin:"oxide"}},methods:{onClick:function(e,n){console.log("Element clicked"),console.log(e),console.log(n)},clear:function(){this.$refs.editor.clear()}}},v=h,_=Object(b["a"])(v,r,a,!1,null,null,null),k=_.exports,j={name:"app",components:{HelloWorld:k}},O=j,w=(t("034f"),Object(b["a"])(O,o,l,!1,null,null,null)),x=w.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(x)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.e245d6d8.js.map