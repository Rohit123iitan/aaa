"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[513],{4964:function(t,e,a){a.d(e,{Z:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg fixed-top",staticStyle:{"background-color":"rgb(56, 232, 248)"}},[e("img",{staticStyle:{"margin-left":"10px"},attrs:{src:a(4242),width:"40",height:"24"}}),e("div",{staticClass:"a"},[e("div",{staticClass:"d-flex",staticStyle:{"margin-left":"50px"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_data,expression:"search_data"}],staticClass:"form-control me-2",attrs:{type:"text",placeholder:"Search","aria-placeholder":"Search","aria-label":"Search"},domProps:{value:t.search_data},on:{input:function(e){e.target.composing||(t.search_data=e.target.value)}}}),e("button",{staticClass:"btn btn-outline-primary",on:{click:t.search}},[t._v("Search")]),t.User.length>0?e("div",{staticClass:"card card-style"},[e("ul",t._l(t.User,(function(a){return e("li",[null!==t.token?e("router-link",{attrs:{to:{name:"profile",params:{name:a.username,id:a.user_id}}}},[t._v(t._s(a.username))]):t._e()],1)})),0)]):t._e()])]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"toggleMobileMenu"}},[e("ul",{staticClass:"navbar-nav ms-auto text-center"},[e("div",{staticClass:"btn"},[e("button",{directives:[{name:"show",rawName:"v-show",value:null===t.token,expression:"token === null"}],staticClass:"btn btn-primary",on:{click:t.login}},[t._v("Login")]),e("button",{directives:[{name:"show",rawName:"v-show",value:null!==t.token,expression:"token !== null"}],staticClass:"btn btn-primary",on:{click:t.logout}},[t._v("Logout")])])])])])])},r=[function(){var t=this,e=t._self._c;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#toggleMobileMenu","aria-expanded":"false","aria-controls":"toggleMobileMenu","aria-lable":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],n=(a(7658),a(806),a(9194)),o=a(4161),l=a(4239);const i="https://blog-backend1-ev7i.onrender.com";var c={name:"Navbar",store:l.Z,data(){return{token:null,search_data:"",User:[]}},component:{Search_table:n["default"]},watch:{search_data(){this.User=[]}},created(){this.token=localStorage.getItem("access_token")||null},methods:{login(){return this.$router.push({path:"/login"})},logout(){return window.localStorage.clear(),this.$router.push({path:"/login"})},faq(){return this.$router.push({name:"faq"})},search(){if(0==this.search_data.length)this.User=[];else{const t=new FormData;t.append("username",this.search_data);const e={headers:{"Content-Type":"application/json"}},a=`${i}/api/search`;o.Z.post(a,t,e).then((t=>{this.User=t.data,console.log(t.data)})).catch((t=>{console.log(t)}))}}}},u=c,d=a(1001),h=(0,d.Z)(u,s,r,!1,null,null,null),p=h.exports},9194:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),e("table",{staticClass:"table table-hover table-bordered text-center"},[t._m(1),e("tbody",t._l(t.users,(function(a){return e("tr",[e("th",{attrs:{scope:"row"}},[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.username))])])})),0)])])},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center custom-heading"},[e("b",[t._v("Results")])])},function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("S.No")]),e("th",{attrs:{scope:"col"}},[t._v("Name")])])])}],n=a(4964),o=a(4239),l={name:"Search_table",store:o.Z,data(){return{users:this.$store.getters.getUsers,post_no:0}},components:{Navbar:n.Z}},i=l,c=a(1001),u=(0,c.Z)(i,s,r,!1,null,null,null),d=u.exports},4242:function(t,e,a){t.exports=a.p+"img/logo-ab-clair.0e2dfc0b.png"}}]);
//# sourceMappingURL=513.dbc3e724.js.map