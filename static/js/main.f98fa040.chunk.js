(this.webpackJsonpproject_aqua=this.webpackJsonpproject_aqua||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var c={};a.r(c),a.d(c,"fetchProducts",(function(){return g})),a.d(c,"updateProducts",(function(){return v})),a.d(c,"updateCart",(function(){return h})),a.d(c,"logOut",(function(){return b})),a.d(c,"checkUser",(function(){return y}));var n=a(0),r=a.n(n),l=a(17),o=a.n(l);a(32);var s=function(){return r.a.createElement("div",{style:{backgroundColor:"#fff"},class:"hide-on-small-only water-back col col-lg-6 col-md-6"},r.a.createElement("img",{class:"responsive-img",src:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80"}))},i=a(19),u=a(6),m=a(28),d=a.n(m),p=a(36),f=a(37),E=a.n(f),g=function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://project-aqua.herokuapp.com/data");case 2:a=e.sent,t({type:"fetch_products",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return function(t){t({type:"update_products",payload:e})}},h=function(e){return function(t){var a=[],c=0;e.map((function(e,t){e.quantity>0&&(c+=e.totalPrice,a.push(e))})),t({type:"update_cart",payload:{cart:a,totalPrice:c}})}},b=function(){return function(e){e({type:"logout"})}},y=function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("https://project-aqua.herokuapp.com/glogin",e);case 3:"success"===(c=t.sent).data.info?(console.log(c.data.msg),a({type:"success",payload:c.data.msg}),a({type:"check_user",payload:c.data.content})):(console.log(c.data.msg),a({type:"failed",payload:c.data.msg}),a({type:"check_user",payload:c.data.content})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:"failed",payload:"Server Error!"}),a({type:"check_user",payload:null});case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},k=a(54),w=a.n(k),j=a(20),x=a.n(j);var O=Object(u.b)((function(e){return console.log(e.authReducer.task),{task:e.authReducer.task}}),c)((function(e){var t=Object(i.f)(),a=Object(n.useRef)(),c=Object(n.useRef)(),l=function(t){var a={name:t.profileObj.givenName,mail:t.profileObj.email,userId:t.profileObj.googleId,dp:t.profileObj.imageUrl};e.checkUser(a)},o=Object(n.useRef)();return Object(n.useEffect)((function(){if(o.current){console.log("update");try{e.task;console.log(e.task.info),"Success"===e.task.info?(x.a.toast({html:e.task.msg}),t.push("/")):x.a.toast({html:e.task.msg})}catch(a){console.log("error")}}else o.current=!0})),r.a.createElement("div",{style:{backgroundColor:"#405C69"},class:"full-width col col-lg-6 col-md-6"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"white-text"},"Login"),r.a.createElement("form",{style:{padding:"5px 25px",backgroundColor:"#EAEFF9"}},r.a.createElement(w.a,{className:"m-1",clientId:"661529233526-e260b5p3gdrbklsm0pc877l9rnc7n57v.apps.googleusercontent.com",buttonText:"Login With Google",onSuccess:l,onFailure:l}),r.a.createElement("div",{style:{height:"20px",position:"relative"}},r.a.createElement("div",{style:{zIndex:1,height:"1px",backgroundColor:"#000",width:"100%",position:"absolute",left:0,top:"50%",bottom:"50%"}}),r.a.createElement("p",{style:{position:"absolute",left:"45%",width:"10%",zIndex:12,backgroundColor:"#EAEFF9"},class:"center"}," OR")),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"input-field"},r.a.createElement("i",{class:"material-icons prefix"},"account_circle"),r.a.createElement("input",{ref:a,type:"text",class:"validate"}),r.a.createElement("label",{for:"icon_prefix"},"Username"))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"input-field"},r.a.createElement("i",{class:"material-icons prefix"},"account_circle"),r.a.createElement("input",{ref:c,type:"password",class:"validate"}),r.a.createElement("label",{for:"icon_prefix"},"Password"))),r.a.createElement("a",{onClick:function(){return function(){if(console.log(a.current.value),"skywalker"===a.current.value.trim()&&"asdf"===c.current.value.trim()){e.checkUser({name:"marees",mail:"mareesdroid@gmail.com",userId:"687ada9853",dp:"test"})}else""===a.current.value.trim()&&""===c.current.value.trim()?x.a.toast({html:"Username or password cannot be empty!"}):x.a.toast({html:"User not found try Google login.."})}()},style:{backgroundColor:"#405C69"},class:"waves-effect waves-light white-text btn"},"Login"))))}));var S=function(){return r.a.createElement("div",null,r.a.createElement("nav",{class:"black"},r.a.createElement("div",{class:"container nav-wrapper"},r.a.createElement("a",{href:"#",class:"brand-logo"},"Logo"),r.a.createElement("ul",{id:"nav-mobile",class:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"sass.html"},"Login"))))),r.a.createElement("div",{class:"container mt-5 center"},r.a.createElement("div",{class:"row"},r.a.createElement(s,null),r.a.createElement(O,null))))},q=a(12),C=a(18),P=a(122),R=a(59),_=a.n(R),D=a(121);var L=Object(u.b)((function(e){return{products:e.authReducer.products,user:e.authReducer.user,cart:e.authReducer.cart}}),c)((function(e){var t=Object(i.f)(),a=function(e){t.push(e)},c=null;Object(n.useEffect)((function(){console.log(e);var t=document.querySelector(".sidenav");c=x.a.Sidenav.init(t)}),[]);var l,o=function(){console.log("hey"),c&&c.close()};return l=e.cart,function(){var t,n,s;try{t=e.user.dp,n=e.user.name,s=e.user.mail}catch(i){t="",n="",s=""}return r.a.createElement("div",null,r.a.createElement("ul",{id:"slide-out",className:"sidenav"},r.a.createElement("li",null,r.a.createElement("div",{className:"user-view"},r.a.createElement("div",{className:"background blue"},r.a.createElement("a",null,r.a.createElement("i",{style:{float:"right",padding:"15px"},class:"material-icons white"},"close"))),r.a.createElement("a",null,r.a.createElement("img",{className:"circle",src:t})),r.a.createElement("a",{href:"#name"},r.a.createElement("span",{className:"black-text name"},n)),r.a.createElement("a",{href:"#email"},r.a.createElement("span",{className:"black-text email"},s)))),r.a.createElement(q.b,{onClick:function(){return o()},to:"/"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"material-icons"},"cloud"),"Home"))),r.a.createElement(q.b,{onClick:function(){return o()},to:"/order"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},r.a.createElement("i",{className:"material-icons"},"cloud"),"My Orders"))),r.a.createElement(q.b,{onClick:function(){return o()},to:"/cart"},r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement("i",{className:"material-icons"},"cloud"),"Cart"))),r.a.createElement("li",null,r.a.createElement("div",{class:"divider"})),r.a.createElement("li",null,r.a.createElement("a",{class:"subheader"},"More")),r.a.createElement("li",null,r.a.createElement("a",{class:"waves-effect",href:"#!"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{class:"waves-effect",href:"#!"},"Help")),r.a.createElement("li",null,r.a.createElement("a",{class:"waves-effect",onClick:function(){return o(),e.logOut(),void a("login")}},"Logout"))),r.a.createElement("nav",{class:"blue darken-5"},r.a.createElement("div",{class:"nav-wrapper"},r.a.createElement("a",{onClick:function(){return function(){if(console.log("test"),c)c.open();else{var e=document.querySelector(".sidenav");(c=x.a.Sidenav.init(e)).open()}}()},style:{padding:"0 35px",float:"left"},class:"brand-logo left"},r.a.createElement("i",{class:"material-icons "},"menu")),r.a.createElement(P.a,{style:{position:"absolute",top:"10%",right:"2%",bottom:"10%"},"aria-label":"cart",onClick:function(){return a("cart")}},r.a.createElement(D.a,{badgeContent:"undefined"===typeof l?0:l.length,color:"secondary"},r.a.createElement(_.a,{style:{color:"#FFFFFF"}}))))))}()}));var I=Object(u.b)((function(e){return console.log(e.authReducer.products),{products:e.authReducer.products}}),c)((function(e){var t=Object(n.useState)(!1),a=Object(C.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),s=Object(C.a)(o,2),i=s[0],u=s[1],m=Object(n.useState)(),d=Object(C.a)(m,2),p=d[0],f=d[1],E=(Object(n.useRef)(null),[]);Object(n.useEffect)((function(){try{if(e.products.length>0)return void console.log(e.products)}catch(t){console.log(t)}e.fetchProducts(),console.log(e)}),[]);var g=function(t,a){console.log(a),E.map((function(c){c._id===a&&(console.log(c),"add"===t?(c.quantity++,console.log(c)):c.quantity>0?(c.quantity--,0===c.quantity&&(c.totalPrice=0,v())):(c.totalPrice=0,v()),c.totalPrice=c.quantity*c.price),u(!i),console.log(E),e.updateProducts(E),e.updateCart(E)}))},v=function(e){f(e),u(!i)},h=function(e,t){return""===t&&i?"hide":e===p?"cart"===t||""===t?"hide":"show":"cart"===t?"show":"hide"};return r.a.createElement("div",{class:"row"},function(){E=e.products;var t=e.mode,a=[];try{return"all"===t?a=E:E.map((function(e,c){console.log(e.type),e.type===t&&a.push(e)})),console.log("test"),a.map((function(e,t){return r.a.createElement("div",{class:"card p-2 col-lg-4 col-md-6 col-sm-12"},r.a.createElement("div",{style:{position:"relative",height:"200px"},class:"m-3 card-body"},r.a.createElement("span",{class:"".concat((a=e.quantity,a>0?"show":"hide")," my-badge white-text badge red badge-").concat(t)},e.quantity),r.a.createElement("img",{class:"product-img card-img-top",src:e.img,alt:"..."}),r.a.createElement("div",{class:"product-detail"},r.a.createElement("h5",{class:"name-text"},e.name),r.a.createElement("p",{class:"sub-text"},"\u20b9",e.price," - ",e.type)),r.a.createElement("div",{class:"cart-btn"},r.a.createElement("a",{onClick:function(){return function(e,t){console.log(t),g("add",t),l(!c),f(e)}(t,e._id)},class:"".concat(h(t,"cart")," bg-dark blue-text d-block btn btn-primary cart-").concat(t)},"Add To Cart"),r.a.createElement("div",{className:"".concat(h(t,"qnt")," add-menu-").concat(t)},r.a.createElement("div",{class:"justify-content-center d-flex p-3"},r.a.createElement("a",{onClick:function(){return g("remove",e._id)},class:"m-1 valign-wrapper col col-lg-3 col-md-3 col-sm-4 waves-effect waves-light btn"},r.a.createElement("i",{class:"material-icons tiny"},"remove")),r.a.createElement("p",{class:"m-1 btn white black-text text-center center col col-lg-3 col-md-3 col-sm-4 quant-".concat(t)},e.quantity),r.a.createElement("a",{onClick:function(){return g("add",e._id)},class:"m-1 valign-wrapper col col-lg-3 col-md-3 col-sm-4 waves-effect waves-light btn"},r.a.createElement("i",{class:"material-icons tiny"},"add")))))));var a}))}catch(n){return r.a.createElement("h1",null,"Oops! Something wen Wrong..")}}())}));var N=Object(u.b)((function(e){return console.log(e.authReducer.user),{user:e.authReducer.user}}),c)((function(e){var t=Object(i.f)();Object(n.useEffect)((function(){try{e.user.userId&&console.log("signed")}catch(a){t.push("login")}}),[]);var a=Object(n.useState)("all"),c=Object(C.a)(a,2),l=c[0],o=c[1],s=function(e){return console.log(l),console.log(e),l===e?"blue text-white":"grey"};return r.a.createElement("div",{class:"home"},r.a.createElement(L,null),r.a.createElement("div",{style:{backgroundColor:"#fff"},class:"container mt-5 mb-5"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{onClick:function(){return o("all")},class:"".concat(s("all")," chip chipWs")},r.a.createElement("img",{class:"circle",src:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",alt:"Contact Person"}),"All"),r.a.createElement("div",{onClick:function(){return o("10ltr")},class:"".concat(s("10ltr")," chip chipWs")},r.a.createElement("img",{src:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",alt:"Contact Person"}),"10Ltrs"),r.a.createElement("div",{onClick:function(){return o("5ltr")},class:"".concat(s("5ltr")," chip chipWs")},r.a.createElement("img",{src:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",alt:"Contact Person"}),"5Ltrs"),r.a.createElement("div",{onClick:function(){return o("1ltr")},class:"".concat(s("1ltr")," chip chipWs")},r.a.createElement("img",{src:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",alt:"Contact Person"}),"1Ltr")),r.a.createElement(I,{mode:l})))}));var T=Object(u.b)((function(e){return console.log(e.authReducer.products),{products:e.authReducer.products,price:e.authReducer.price}}),c)((function(e){var t=Object(n.useState)(!1),a=Object(C.a)(t,2),c=a[0],l=a[1],o=e.price,s=[],i=function(t,a){console.log(a),s.map((function(n){n._id===a&&(console.log(n),"add"===t?n.quantity++:n.quantity>0?n.quantity--:n.totalPrice=0,n.totalPrice=n.quantity*n.price),l(!c),console.log(s),e.updateProducts(s),e.updateCart(s)}))},u=function(e){return e.map((function(e,t){return r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{class:"card col-xl-6 col-md-6 col-lg-6 col-sm-12"},r.a.createElement("div",{class:"card-image cart-img"},r.a.createElement("img",{src:e.img})),r.a.createElement("div",{style:{float:"right"},class:"card-content"},r.a.createElement("div",{class:"contents"},r.a.createElement("div",{style:{width:"50%"},class:"head-content center"},r.a.createElement("h6",{class:"name-text center"},e.name),r.a.createElement("h7",{class:"sub-text center"},e.type)),r.a.createElement("div",{style:{width:"50%"},class:"my-holder center"},r.a.createElement("div",{className:"add-menu"},r.a.createElement("div",{class:"btn-group",role:"group","aria-label":"..."},r.a.createElement("button",{onClick:function(){return i("remove",e._id)},type:"button",class:"btn btn-lg btn-secondary"},"-"),r.a.createElement("button",{type:"button",class:"btn text-dark btn-lg bg-white btn-secondary"},e.quantity),r.a.createElement("button",{onClick:function(){return i("add",e._id)},type:"button",class:"btn btn-lg btn-secondary"},"+"))),r.a.createElement("h4",{class:"text-center"},"\u20b9",e.totalPrice))))))}))};return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("div",{class:"my-container container mt-5"},function(){s=e.products;var t=[];return s.map((function(e,a){e.quantity>0&&t.push(e)})),s=t,console.log(s),s.length>0?r.a.createElement("div",null,u(s),r.a.createElement("div",{style:{width:"100%"},class:"mt-3 mb-3 btn"},"Checkout \u20b9",o)):r.a.createElement("h1",null,"Cart is Empty")}()))}));var F=function(){var e=[{date:"19/4/2020",orderId:"#2345",price:"100",status:"Delivered",products:[{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:2,totalPrice:"200"},{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:4,totalPrice:"400"}]},{date:"19/4/2020",orderId:"#2345",price:"100",status:"Delivered",products:[{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:2,totalPrice:"200"},{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:4,totalPrice:"400"}]},{date:"19/4/2020",orderId:"#2345",price:"100",status:"Delivered",products:[{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:2,totalPrice:"200"},{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:4,totalPrice:"400"}]},{date:"19/4/2020",orderId:"#2345",price:"100",status:"Delivered",products:[{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:2,totalPrice:"200"},{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:4,totalPrice:"400"}]},{date:"19/4/2020",orderId:"#2345",price:"100",status:"Delivered",products:[{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:2,totalPrice:"200"},{name:"aquafina",type:"10L",price:"100",img:"https://cdn3.vectorstock.com/i/1000x1000/07/67/small-water-bottle-vector-3300767.jpg",qty:4,totalPrice:"400"}]}];return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("div",{style:{backgroundColor:"#fff"},class:"container mt-5 mb-5"},r.a.createElement("table",{class:"responsive-table centered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{class:"center"},"Date"),r.a.createElement("th",{class:"center"},"Order ID"),r.a.createElement("th",{class:"center"},"Order Amount"),r.a.createElement("th",{class:"center"},"Status"),r.a.createElement("th",{class:"center"},"Receipt"))),r.a.createElement("tbody",null,function(){var t=[];return e.map((function(e,a){t.push(r.a.createElement("tr",{class:"tab-row row-".concat(a)},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.orderId),r.a.createElement("td",null,"\u20b9",e.price),r.a.createElement("td",null,e.status),r.a.createElement("td",null,r.a.createElement("a",{onClick:function(){return function(e){console.log(e)}(a)},class:"waves-effect blue text-white waves-light btn btn-small"},"View"))))})),t}()))))};var A=Object(u.b)((function(e){return console.log(e),"init"===e.authReducer.auth?(console.log("--\x3e>> STEP 1.4: @HEADER ///STORE UPDATED///"),console.log("--\x3e>> STEP 1.5: @HEADER Store updated... Initail state Mapping")):(console.log("--\x3e>> STEP 7: @HEADER ///STORE UPDATED///"),console.log("--\x3e>> STEP 7.1: @HEADER Store updated... Mapping states to props")),{auth:e.authReducer.auth}}),c)((function(e){return Object(n.useEffect)((function(){})),r.a.createElement(q.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(i.a,{exact:!0,path:"/order"},r.a.createElement(F,null)),r.a.createElement(i.a,{exact:!0,path:"/cart"},r.a.createElement(T,null)),r.a.createElement(i.a,{exact:!0,path:"/login"},r.a.createElement(S,null))))})),U=a(34),W=(a(93),a(60)),H=a(40),M=a(16),J=a(25),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[],cart:[]},t=arguments.length>1?arguments[1]:void 0,a={msg:t.payload};switch(t.type){case"fetch_products":var c=[];return console.log(t.payload),t.payload&&t.payload.map((function(e){e.quantity||(e.quantity=0,e.totalPrice=0),c.push(e)})),e=Object(J.a)({},e,{products:c||!1});case"update_products":return e;case"update_cart":return e=Object(J.a)({},e,{cart:t.payload.cart||!1,price:t.payload.totalPrice||!1});case"get_cart":return e;case"check_user":return e=Object(J.a)({},e,{user:t.payload||!1});case"success":return a.info="Success",e=Object(J.a)({},e,{task:a||!1});case"failed":return a.info="Failed",e=Object(J.a)({},e,{task:a||!1});case"logout":return e=[];default:return console.log("--\x3e>> STEP 1.1: @REDUCER Initial State is assigned to store our state is :"),console.log("--\x3e>> STEP 1.2: @REDUCER State is sent to store"),console.log(e),e}},G=Object(M.combineReducers)({authReducer:z,surveys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_surveys":return t.payload;default:return e}}}),B=a(61),Q=function(){function e(){Object(W.a)(this,e),this._store=null,this.initStore()}return Object(H.a)(e,null,[{key:"getDefaultStore",value:function(){return null===e.DefaultStore&&(e.DefaultStore=new e),e.DefaultStore}}]),Object(H.a)(e,[{key:"initStore",value:function(){var t=this;this._store=Object(M.createStore)(G,e.loadState(),Object(B.composeWithDevTools)(Object(M.applyMiddleware)(U.a))),this._store.subscribe((function(){e.saveState(t._store.getState())}))}},{key:"store",get:function(){return this._store}}],[{key:"loadState",value:function(){try{var t=localStorage.getItem("localData");return null===t?e.initialState():JSON.parse(t)}catch(a){return e.initialState()}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("localData",t)}catch(a){}}},{key:"initialState",value:function(){return{}}}]),e}();Q.DefaultStore=null;var V=Q;a(103);o.a.render(r.a.createElement(u.a,{store:V.getDefaultStore().store},r.a.createElement(A,null)),document.querySelector("#root"))},32:function(e,t,a){},63:function(e,t,a){e.exports=a(104)}},[[63,1,2]]]);
//# sourceMappingURL=main.f98fa040.chunk.js.map