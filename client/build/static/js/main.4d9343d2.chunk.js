(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{167:function(e,t,a){},296:function(e,t,a){},304:function(e,t,a){},316:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(146),s=a.n(n),i=(a(167),a(16)),o=a(11),l=a(2),d=a(12),j=a(6),u=a(80),b=a(7),h=a.n(b),m=a(331),O=a(330),p=a(324),x=a(40),f=a(93),g=a(38),v=a(34),y=a(30),k=a.n(y),w=a(152);a.n(w).a.config();var N,S=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/auth/register",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.post("/auth/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},a=t.token,e.next=3,k.a.post("/auth/login",null,{headers:{authorization:"Bearer ".concat(a)}}).then((function(e){return localStorage.removeItem("auth"),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E="features/Auth/USER_LOGIN",P="features/Auth/USER_LOGOUT",_=a(67),I=a.p+"static/media/buku1.ec9b4161.jpg",T=(a(296),a(1)),G=g.a({email:g.c().email("Email harus valid").required("Email harus diisi"),password:g.c().min(8,"Password minimal 8 karakter").required("Password harus diisi")}).required(),R="idle",D="process",A="success",q="error",B=_.default.body(N||(N=Object(u.a)(["\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    position: fixed;\n    width:100%  \n"])),I);function F(){var e,t,a=Object(x.d)({resolver:Object(f.a)(G)}),c=a.register,n=a.handleSubmit,s=a.formState.errors,u=a.setError,b=r.a.useState(R),g=Object(j.a)(b,2),y=g[0],k=g[1],w=Object(v.b)(),N=Object(o.k)(),S=function(){var e=Object(d.a)(h.a.mark((function e(t){var a,c,r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(D),e.next=3,C(t);case 3:a=e.sent,(c=a.data).error?(u("password",{type:"invalidCredential",message:c.message}),k(q)):(r=c.user,n=c.token,w({type:E,payload:{user:r,token:n}}),N.push("/home")),k(A);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)(B,{children:Object(T.jsxs)(m.a,{className:"card-login",children:[Object(T.jsx)(m.a.Header,{children:"Login"}),Object(T.jsxs)(m.a.Body,{children:[Object(T.jsxs)(O.a,{onSubmit:n(S),children:[Object(T.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(T.jsx)(O.a.Label,{children:"Alamat Email"}),Object(T.jsx)(O.a.Control,Object(l.a)({type:"email",placeholder:"Enter email",isInvalid:s.email},c("email"))),Object(T.jsx)(O.a.Control.Feedback,{type:"invalid",children:null===(e=s.email)||void 0===e?void 0:e.message})]}),Object(T.jsxs)(O.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(T.jsx)(O.a.Label,{children:"Password"}),Object(T.jsx)(O.a.Control,Object(l.a)({type:"password",placeholder:"Password",isInvalid:s.password},c("password"))),Object(T.jsx)(O.a.Control.Feedback,{type:"invalid",children:null===(t=s.password)||void 0===t?void 0:t.message})]}),Object(T.jsx)(p.a,{variant:"primary",type:"submit",disabled:y===D,children:y===D?"Memprosess...":"Login"})]}),Object(T.jsx)(i.Link,{to:"/register",className:"text-dark",style:{marginLeft:"40%",fontSize:"18px"},children:"Registrasi"})]})]})})}var M,H=a(325),U=a(326),z=a(327),K=a(157),J=a.p+"static/media/buku3.f9804ff1.jpg",V=(a(304),g.a({full_name:g.c().required("Nama Lengkap harus diisi"),email:g.c().email().required("Email harus valid"),password:g.c().min(8,"Minimal panjang password harus 8 karakter").required("Password Harus diisi"),password_confirmation:g.c().oneOf([g.b("password"),null],"Password konfirmasi tidak sama")}).required()),X="idle",Y="process",W="success",Q="error",Z=_.default.body(M||(M=Object(u.a)(["\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    position: fixed;\n    width:100%  \n"])),J);function $(){var e,t,a,c,n=Object(x.d)({resolver:Object(f.a)(V)}),s=n.register,u=n.handleSubmit,b=n.formState.errors,g=n.setError,v=r.a.useState(X),y=Object(j.a)(v,2),k=y[0],w=y[1],N=Object(o.k)(),C=function(){var e=Object(d.a)(h.a.mark((function e(t){var a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(Y),e.next=3,S(t);case 3:if(a=e.sent,!(c=a.data).error){e.next=10;break}return Object.keys(c.fields).forEach((function(e){var t,a;return g(e,{type:"server",message:null===(t=c.fields[e])||void 0===t||null===(a=t.properties)||void 0===a?void 0:a.message})})),w(Q),e.abrupt("return");case 10:w(W);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsx)(Z,{children:Object(T.jsxs)(H.a,{className:"card-register",children:[k===W?Object(T.jsxs)(U.a,{variant:"success",children:["Registrasi berhasil silahkan "," ",Object(T.jsx)(U.a.Link,{onClick:function(){return N.push("/login")},children:"Login"})," dengan email dan password anda"]}):null,Object(T.jsxs)(m.a,{style:{width:"100%"},children:[Object(T.jsx)(m.a.Header,{children:"Registration"}),Object(T.jsxs)(m.a.Body,{children:[Object(T.jsxs)(O.a,{onSubmit:u(C),children:[Object(T.jsxs)(z.a,{className:"mb-3",children:[Object(T.jsxs)(O.a.Group,{as:K.a,controlId:"formGridName",children:[Object(T.jsx)(O.a.Label,{children:"Nama"}),Object(T.jsx)(O.a.Control,Object(l.a)({type:"text",isInvalid:b.full_name,placeholder:"Masukan nama lengkap"},s("full_name"))),Object(T.jsx)(O.a.Control.Feedback,{type:"invalid",children:null===(e=b.full_name)||void 0===e?void 0:e.message})]}),Object(T.jsxs)(O.a.Group,{as:K.a,controlId:"formGridEmail",children:[Object(T.jsx)(O.a.Label,{children:"Email"}),Object(T.jsx)(O.a.Control,Object(l.a)({type:"email",placeholder:"Masukan email",isInvalid:b.email},s("email"))),Object(T.jsx)(O.a.Control.Feedback,{type:"invalid",children:null===(t=b.email)||void 0===t?void 0:t.message})]})]}),Object(T.jsxs)(z.a,{className:"mb-3",children:[Object(T.jsxs)(O.a.Group,{as:K.a,controlId:"formGridPassword",children:[Object(T.jsx)(O.a.Label,{children:"Password"}),Object(T.jsx)(O.a.Control,Object(l.a)({type:"password",placeholder:"Password",isInvalid:b.password},s("password"))),Object(T.jsx)(O.a.Control.Feedback,{type:"invalid",children:null===(a=b.password)||void 0===a?void 0:a.message})]}),Object(T.jsxs)(O.a.Group,{as:K.a,controlId:"formGridPasswordConfirmation",children:[Object(T.jsx)(O.a.Label,{children:"Konfirmasi Password"}),Object(T.jsx)(O.a.Control,Object(l.a)({type:"password",placeholder:"Konfirmasi Password",isInvalid:b.password_confirmation},s("password_confirmation"))),Object(T.jsx)(O.a.Control.Feedback,{type:"invalid",children:null===(c=b.password_confirmation)||void 0===c?void 0:c.message})]})]}),Object(T.jsx)(p.a,{variant:"primary",type:"submit",disabled:k===Y,children:k===Y?"Memproses...":"Mendaftar"})]}),Object(T.jsx)(i.Link,{to:"/",className:"text-dark",style:{marginLeft:"40%",fontSize:"18px"},children:"Login"})]})]})]})})}var ee=a(333),te=a(37),ae=a(158),ce=a.n(ae);function re(){var e=Object(v.c)((function(e){return e.auth}));return Object(T.jsx)(m.a,{style:{width:"100%"},children:Object(T.jsx)(m.a.Body,{children:Object(T.jsx)(ce.a,{columns:[{selector:function(e){return e.label}},{selector:function(e){return e.value}}],data:[{label:"Nama",value:e.user.full_name},{label:"Email",value:e.user.email}]})})})}var ne=a(328);function se(){var e=Object(v.b)(),t=Object(o.k)();return Object(c.useEffect)((function(){L().then((function(t){return e({type:P})})).then((function(e){return t.push("/")}))}),[e,t]),Object(T.jsx)("div",{className:"d-flex justify-content-center",children:Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)(ne.a,{animation:"grow",variant:"danger"}),Object(T.jsx)("p",{className:"text-muted",children:"Loging out..."})]})})}function ie(){var e=Object(o.n)();return Object(T.jsx)(H.a,{className:"mt-5 p-5 ",children:Object(T.jsxs)(m.a,{style:{width:"100%"},children:[Object(T.jsx)(m.a.Header,{children:"Account"}),Object(T.jsx)(m.a.Body,{children:Object(T.jsxs)(z.a,{children:[Object(T.jsx)(K.a,{md:3,children:Object(T.jsxs)(ee.a,{children:[Object(T.jsx)(te.LinkContainer,{to:"/account",exact:!0,children:Object(T.jsx)(ee.a.Item,{action:!0,children:"Profil"})}),Object(T.jsx)(te.LinkContainer,{to:"/account/logout",exact:!0,children:Object(T.jsx)(ee.a.Item,{action:!0,children:"Logout"})})]})}),Object(T.jsx)(K.a,{md:9,children:Object(T.jsxs)(o.g,{children:[Object(T.jsx)(o.d,{path:"".concat(e.url),component:re,exact:!0}),Object(T.jsx)(o.d,{path:"".concat(e.url,"/logout"),component:se,exact:!0})]})})]})})]})})}var oe=a(329),le=a(332),de=a(156),je=(a(316),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(j.a)(n,2),o=s[0],l=s[1],u=Object(c.useState)(0),b=Object(j.a)(u,2),m=b[0],p=b[1],x=Object(c.useState)(0),f=Object(j.a)(x,2),g=f[0],v=f[1],y=new Array(g).fill(null).map((function(e,t){return t}));Object(c.useEffect)((function(){w()}),[m]);var w=function(){var e=Object(d.a)(h.a.mark((function e(){var t,a,c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/products?page=".concat(m));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=a.totalPages,n=a.data,v(c),r(n),console.log(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("/api/products/".concat(t));case 2:w();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=a.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())}));return Object(T.jsxs)("div",{children:[Object(T.jsx)(oe.a,{variant:"dark",bg:"danger",expand:"lg",style:{width:"100%"},children:Object(T.jsxs)(H.a,{fluid:!0,children:[Object(T.jsx)(oe.a.Brand,{href:"#",children:"MERN Blog"}),Object(T.jsx)(oe.a.Toggle,{"aria-controls":"navbarScroll"}),Object(T.jsxs)(oe.a.Collapse,{id:"navbarScroll",children:[Object(T.jsxs)(le.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(T.jsx)(te.LinkContainer,{to:"/home",children:Object(T.jsx)(le.a.Link,{active:!0,children:"Home"})}),Object(T.jsx)(te.LinkContainer,{to:"/tambah",children:Object(T.jsx)(le.a.Link,{active:!0,children:"Tambah"})})]}),Object(T.jsx)(O.a,{className:"d-flex search-home",children:Object(T.jsx)(de.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",onChange:function(e){return l(e.target.value)}})}),Object(T.jsx)(le.a,{children:Object(T.jsx)(te.LinkContainer,{to:"/logout",children:Object(T.jsx)(le.a.Link,{active:!0,children:"Logout"})})})]})]})}),Object(T.jsx)("div",{className:"row row-home",children:S.map&&S.map((function(e,t){return Object(T.jsx)("div",{className:"col-6 col-sm-4 col-md-3 ",children:Object(T.jsxs)("div",{className:"card ",style:{height:"400px",marginTop:"10px"},children:[Object(T.jsx)(i.Link,{to:"/detail/".concat(e._id),style:{textDecoration:"none",color:"black",cursor:"pointer"},children:Object(T.jsx)("img",{src:"/images/upload/".concat(e.image_url),className:"card-img-top",alt:"..."})}),Object(T.jsxs)("div",{className:"card-body card-home",children:[Object(T.jsxs)("h5",{className:"card-title title",children:[Object(T.jsx)(i.Link,{to:"/detail/".concat(e._id),style:{textDecoration:"none",color:"black",cursor:"pointer"},children:e.name})," "]}),Object(T.jsxs)("small",{className:"text-muted",children:[" ",new Date(e.createdAt).toDateString()," "]}),Object(T.jsxs)("p",{className:"card-text text1",children:[" ",e.description]})]}),Object(T.jsxs)("div",{className:"card-footer",children:[Object(T.jsx)("span",{style:{cursor:"pointer"},onClick:function(){!0===window.confirm("Apakah anda ingin menghapus?")&&N(e._id)},children:Object(T.jsx)("button",{className:"btn btn-sm btn-outline-warning",children:Object(T.jsx)("i",{className:"fa fa-lg fa-trash text-danger"})})}),Object(T.jsx)("span",{style:{cursor:"pointer"},children:Object(T.jsx)(i.Link,{to:"/edit/".concat(e._id),className:"btn btn-sm btn-outline-success",children:Object(T.jsx)("i",{className:"fa fa-lg fa-edit text-primary"})})}),Object(T.jsx)("span",{style:{cursor:"pointer"},children:Object(T.jsx)(i.Link,{to:"/tambah",className:"btn btn-sm btn-outline-primary",children:Object(T.jsx)("i",{className:"fa fa-lg fa-plus text-success "})})})]})]})},t)}))}),Object(T.jsxs)("div",{className:"pagination",children:[Object(T.jsx)("button",{className:"page-link",onClick:function(){p(Math.max(0,m-1))},children:"Previous"}),y.map((function(e){return Object(T.jsx)("button",{className:"page-link",onClick:function(){return p(e)},children:e+1},e)})),Object(T.jsx)("button",{className:"page-link",onClick:function(){p(Math.min(g-1,m+1))},children:"Next"})]})]})}),ue=function(){return Object(T.jsx)("div",{children:Object(T.jsx)(oe.a,{variant:"dark",bg:"danger",expand:"lg",children:Object(T.jsxs)(H.a,{fluid:!0,children:[Object(T.jsx)(oe.a.Brand,{href:"#",children:"MERN Blog"}),Object(T.jsx)(oe.a.Toggle,{"aria-controls":"navbarScroll"}),Object(T.jsxs)(oe.a.Collapse,{id:"navbarScroll",children:[Object(T.jsxs)(le.a,{className:"me-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(T.jsx)(te.LinkContainer,{to:"/home",children:Object(T.jsx)(le.a.Link,{active:!0,children:"Home"})}),Object(T.jsx)(te.LinkContainer,{to:"/tambah",children:Object(T.jsx)(le.a.Link,{active:!0,children:"Tambah"})})]}),Object(T.jsx)(O.a,{className:"d-flex",style:{marginRight:"400px",width:"600px"},children:Object(T.jsx)(de.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"})}),Object(T.jsx)(le.a,{children:Object(T.jsx)(te.LinkContainer,{to:"/logout",children:Object(T.jsx)(le.a.Link,{active:!0,children:"Logout"})})})]})]})})})},be=(a(319),function(){var e=Object(v.c)((function(e){return e.auth})),t=Object(c.useState)(""),a=Object(j.a)(t,2),r=a[0],n=a[1],s=Object(c.useState)(""),l=Object(j.a)(s,2),u=l[0],b=l[1],m=Object(c.useState)(""),O=Object(j.a)(m,2),p=O[0],x=O[1],f=Object(c.useState)(e.user.full_name),g=Object(j.a)(f,2),y=g[0],w=g[1],N=Object(c.useState)(!1),S=Object(j.a)(N,2),C=S[0],L=S[1],E=Object(o.k)(),P=function(){var e=Object(d.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(r.length<3||""===r)){e.next=4;break}return L(!0),e.abrupt("return",!1);case 4:return(a=new FormData).append("name",r),a.append("description",u),a.append("image",p),a.append("author",y),e.next=11,k.a.post("/api/products/",a).then((function(){E.push("/home")})).catch((function(e){console.log(e)}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(ue,{}),Object(T.jsx)("div",{className:"container container-tambah",children:Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("div",{className:"card-header",children:"Tambah Article"}),Object(T.jsx)("div",{className:"card-body",children:Object(T.jsxs)("form",{onSubmit:P,autoComplete:"off",children:[Object(T.jsx)("div",{className:"row",style:{width:"100%"},children:Object(T.jsxs)("div",{className:"form-group col mb-2",children:[Object(T.jsx)("label",{children:"Name"}),Object(T.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Enter name",onChange:function(e){var t=e.target.value;n(t)}}),Object(T.jsx)("small",{className:"form-text text-danger",children:C&&""===r?"nama tidak boleh kosong":C&&r.length<3&&"nama minimal 3 karakter"})]})}),Object(T.jsx)("div",{className:"row",style:{width:"100%"},children:Object(T.jsxs)("div",{className:"form-group col",children:[Object(T.jsx)("label",{children:"Description"}),Object(T.jsx)("textarea",{name:"description",style:{width:"100%",height:"80px",resize:"none"},onChange:function(e){b(e.target.value)}}),Object(T.jsx)("small",{className:"form-text text-danger",children:C&&""===u?"description tidak boleh kosong":C&&u.length<5&&"description minimal 5 karakter"})]})}),Object(T.jsx)("input",{type:"hidden",name:"author",className:"form-control",placeholder:"Enter description",onChange:function(e){var t=e.target.value;w(t)}}),Object(T.jsx)("div",{className:"row",style:{width:"100%"},children:Object(T.jsxs)("div",{className:"form-group col",children:[Object(T.jsx)("label",{children:"Image"}),Object(T.jsx)("input",{type:"file",className:"form-control",placeholder:"Gambar",onChange:function(e){var t=e.target.files[0];x(t)}})]})}),Object(T.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Simpan"}),Object(T.jsx)(i.Link,{to:"/home",className:"btn btn-success mt-3",style:{marginLeft:"5px"},children:"Kembali"})]})})]})})]})}),he=(a(320),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(j.a)(n,2),l=s[0],u=s[1],b=Object(c.useState)(""),m=Object(j.a)(b,2),O=m[0],p=m[1],x=Object(c.useState)(""),f=Object(j.a)(x,2),g=f[0],v=f[1],y=Object(o.m)().id;Object(c.useEffect)((function(){w()}),[]);var w=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/products/".concat(y));case 2:t=e.sent,r(t.data.description),u(t.data.name),p(t.data.image_url),v(t.data.author),console.log(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(ue,{}),Object(T.jsx)("div",{className:"container-fluid container-detail",children:Object(T.jsxs)("div",{className:"card card-detail",children:[Object(T.jsx)("img",{src:"/images/products/".concat(O),className:"card-img-top img-detail",alt:"..."}),Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsx)("h5",{className:"card-title title text-center",children:l}),Object(T.jsxs)("label",{className:"text-muted",style:{whiteSpace:"nowrap"},children:["Author: ",g,Object(T.jsx)("span",{className:"publish-detail",children:(new Date).toDateString()})]}),Object(T.jsx)("br",{}),Object(T.jsxs)("p",{className:"card-text description-detail",children:[" ",a]}),Object(T.jsx)(i.Link,{to:"/home",className:"btn btn-primary ",style:{marginLeft:"10px"},children:"Kembali"})]})]})})]})}),me=(a(321),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(""),s=Object(j.a)(n,2),l=s[0],u=s[1],b=Object(c.useState)(""),m=Object(j.a)(b,2),O=m[0],p=m[1],x=Object(o.m)().id,f=Object(o.k)(),g=function(){var e=Object(d.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(c=new FormData).append("name",a),c.append("description",l),c.append("image",O),e.next=7,k.a.put("/api/products/".concat(x),c).then((function(){f.push("/home")})).catch((function(e){console.log(e)}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){v()}),[]);var v=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("/api/products/".concat(x));case 2:t=e.sent,r(t.data.name),u(t.data.description),console.log(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(T.jsxs)("div",{children:[Object(T.jsx)(ue,{}),Object(T.jsx)("div",{className:"container container-edit",children:Object(T.jsxs)("div",{className:"card",children:[Object(T.jsx)("div",{className:"card-header",children:"Edit Article"}),Object(T.jsx)("div",{className:"card-body",children:Object(T.jsxs)("form",{onSubmit:g,autoComplete:"off",children:[Object(T.jsx)("div",{className:"row",style:{width:"100%"},children:Object(T.jsxs)("div",{className:"form-group col mb-2",children:[Object(T.jsx)("label",{children:"Name"}),Object(T.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"Enter name",value:a,onChange:function(e){var t=e.target.value;r(t)}})]})}),Object(T.jsx)("div",{className:"row",style:{width:"100%"},children:Object(T.jsxs)("div",{className:"form-group col mb-2",children:[Object(T.jsx)("label",{children:"Description"}),Object(T.jsx)("textarea",{name:"description",style:{width:"100%",height:"80px",resize:"none"},value:l,onChange:function(e){u(e.target.value)}})]})}),Object(T.jsx)("div",{className:"row",style:{width:"100%"},children:Object(T.jsxs)("div",{className:"form-group col",children:[Object(T.jsx)("label",{children:"Image"}),Object(T.jsx)("input",{type:"file",className:"form-control",placeholder:"Gambar",onChange:function(e){var t=e.target.files[0];p(t)}})]})}),Object(T.jsx)("button",{type:"submit",className:"btn btn-primary mt-3",children:"Simpan"}),Object(T.jsx)(i.Link,{to:"/home",className:"btn btn-success mt-3",style:{marginLeft:"5px"},children:"Kembali"})]})})]})})]})});var Oe=function(){var e=Object(v.c)((function(e){return e.auth}));return Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(i.BrowserRouter,{children:Object(T.jsxs)(o.g,{children:[Object(T.jsx)(o.d,{exact:!0,path:"/",children:Object(T.jsx)(F,{})}),Object(T.jsx)(o.d,{path:"/logout",children:Object(T.jsx)(se,{})}),Object(T.jsx)(o.d,{path:"/home",children:e.user?Object(T.jsx)(je,{}):Object(T.jsx)(o.c,{to:"/"})}),Object(T.jsx)(o.d,{path:"/tambah",children:e.user?Object(T.jsx)(be,{}):Object(T.jsx)(o.c,{to:"/"})}),Object(T.jsx)(o.d,{path:"/detail/:id",children:Object(T.jsx)(he,{})}),Object(T.jsx)(o.d,{path:"/edit/:id",children:Object(T.jsx)(me,{})}),Object(T.jsx)(o.d,{path:"/account",component:ie}),Object(T.jsx)(o.d,{path:"/account",component:ie}),Object(T.jsx)(o.d,{path:"/register",component:$}),Object(T.jsx)(o.d,{path:"/login",children:e.user?Object(T.jsx)(o.c,{to:"/home"}):Object(T.jsx)(F,{})})]})})})},pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,334)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))},xe=a(70),fe=a(159),ge=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{user:null,token:null};var ve=a(8),ye="features/Cart/ADD_ITEM",ke="features/Cart/REMOVE_ITEM",we="features/Cart/CLEAR_ITEM",Ne=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];var Se="features/Product/START_FETCHING_PRODUCT",Ce="features/Product/ERROR_FETCHING_PRODUCT",Le="features/Product/SUCCESS_FETCHING_PRODUCT",Ee="features/Product/SET_PAGE",Pe="features/Product/NEXT_PAGE",_e="features/Product/PREV_PAGE",Ie="features/Product/SET_CATEGORY",Te="features/Product/TOGGLE_TAGS",Ge="features/Product/SET_KEYWORD",Re="process",De="success",Ae="error",qe={data:[],currentPage:1,totalItems:-1,perPage:8,keyword:"",category:"",tags:[],status:"idle"};var Be=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||xe.c,Fe=Object(xe.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case E:return{user:c.user,token:c.token};case P:return{user:null,token:null};default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case Se:return Object(l.a)(Object(l.a)({},e),{},{status:Re});case Ce:return Object(l.a)(Object(l.a)({},e),{},{status:Ae});case Le:return Object(l.a)(Object(l.a)({},e),{},{status:De,data:c.data,totalItems:c.count});case Ee:return Object(l.a)(Object(l.a)({},e),{},{currentPage:c.currentPage});case Pe:return Object(l.a)(Object(l.a)({},e),{},{currentPage:e.currentPage+1});case _e:return Object(l.a)(Object(l.a)({},e),{},{currentPage:e.currentPage-1});case Ie:return Object(l.a)(Object(l.a)({},e),{},{currentPage:1,category:c.category,keyword:"",tags:[]});case Te:return e.tags.includes(c.tag)?Object(l.a)(Object(l.a)({},e),{},{currentPage:1,tags:e.tags.filter((function(e){return e!==c.tag}))}):Object(l.a)(Object(l.a)({},e),{},{currentPage:1,tags:[].concat(Object(ve.a)(e.tags),[c.tag])});case Ge:return Object(l.a)(Object(l.a)({},e),{},{keyword:c.keyword});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case ye:return e.find((function(e){return e._id===c.item._id}))?e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{qty:e._id===c.item._id?e.qty+1:e.qty})})):[].concat(Object(ve.a)(e),[Object(l.a)(Object(l.a)({},c.item),{},{qty:1})]);case ke:return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{qty:e._id===c.item._id?e.qty-1:e.qty})})).filter((function(e){return e.qty>0}));case we:return[];default:return e}}}),Me=Object(xe.d)(Fe,Be(Object(xe.a)(fe.a)));s.a.createRoot(document.getElementById("root")).render(Object(T.jsx)(i.BrowserRouter,{children:Object(T.jsx)(v.a,{store:Me,children:Object(T.jsx)(Oe,{})})})),pe()}},[[322,1,2]]]);
//# sourceMappingURL=main.4d9343d2.chunk.js.map