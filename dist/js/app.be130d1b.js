(function(e){function t(t){for(var a,n,i=t[0],l=t[1],u=t[2],m=0,p=[];m<i.length;m++)n=i[m],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==s[l]&&(a=!1)}a&&(o.splice(t--,1),e=n(n.s=r[0]))}return e}var a={},s={app:0},o=[];function n(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=a,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0149":function(e,t,r){},"034f":function(e,t,r){"use strict";var a=r("85ec"),s=r.n(a);s.a},"0f40":function(e,t,r){},"2b01":function(e,t,r){},"44e1":function(e,t,r){"use strict";var a=r("789b"),s=r.n(a);s.a},"56d7":function(e,t,r){"use strict";r.r(t);var a,s,o,n,i=r("2b0e"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"header"}},[r("h1",[r("router-link",{attrs:{to:"/",exact:""}},[e._v("Ask Away!")])],1),e.signedIn?r("div",{staticClass:"link"},[r("router-link",{attrs:{to:"/profile",exact:""}},[e._v("My Profile")])],1):r("div",[r("div",{staticClass:"link"},[r("router-link",{attrs:{to:"/login",exact:""}},[e._v("Login/Register")])],1)]),r("div",{staticClass:"link"},[r("router-link",{attrs:{to:"/topics",exact:""}},[e._v("Topics")])],1),r("div",{staticClass:"link"},[r("router-link",{attrs:{to:"/general",exact:""}},[e._v("General")])],1)]),r("div",{staticStyle:{width:"100%"}},[r("router-view",{attrs:{signedIn:e.signedIn},on:{toggleSignIn:e.toggleSignIn,toggleSignOut:e.toggleSignOut}})],1),r("div",{attrs:{id:"copyright"}},[e._v("© BT3103 Octopus 2020")])])},u=[],d={name:"App",components:{},data(){return{signedIn:!1}},methods:{toggleSignIn(e){this.signedIn=!0,this.username=", "+e,this.$router.push("/")},toggleSignOut(){this.signedIn=!1}}},m=d,p=(r("034f"),r("2877")),c=Object(p["a"])(m,l,u,!1,null,null,null),v=c.exports,f=r("8c4f"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"login"}},[r("h1",[e._v("Sign In")]),r("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("label",{attrs:{for:"email"}},[e._v("Email:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",value:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("br"),r("label",{attrs:{for:"password"}},[e._v("Password:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",value:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("router-link",{attrs:{to:"/forgot"}},[e._v("Forgot Password?")]),r("br"),r("button",{attrs:{type:"submit"}},[e._v("Sign In")]),e.errors.length?r("ul",e._l(e.errors,(function(t){return r("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0):e._e()],1),r("hr"),r("h3",[e._v(" New to AskAway?")]),r("a",[r("router-link",{attrs:{to:"/register"}},[e._v("Register Here")])],1)])},h=[],w=r("3ac8"),b=r.n(w),_={name:"Login",data(){return{email:"",password:"",errors:[],username:""}},methods:{toggleSignIn(e){this.$emit("toggleSignIn",e)},login(){this.errors=[],b.a.auth().signInWithEmailAndPassword(this.email,this.password).then(e=>{this.toggleSignIn(e.user.displayName),this.$router.push("/")}).catch(e=>{this.errors.push(e.message)})}}},y=_,x=(r("9227"),Object(p["a"])(y,g,h,!1,null,"92f6a28e",null)),P=x.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"default"}})},E=[],N={name:"Home",components:{}},O=N,S=(r("715a"),Object(p["a"])(O,k,E,!1,null,"d2429142",null)),A=S.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"container"}},[r("div",{attrs:{id:"tab"}},[r("h1",[e._v("My Profile")]),e._v(" "),r("br"),r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/profile"}},[r("button",[e._v("Profile Info")])]),r("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/profile/settings"}},[r("button",[e._v("Settings")])]),r("button",{attrs:{type:"submit"},on:{click:e.logOut}},[e._v("Sign Out")])],1),r("div",{staticClass:"content"},[r("router-view")],1)])},j=[],C={methods:{}},F=C,T=(r("8127"),Object(p["a"])(F,$,j,!1,null,"bf05fb4e",null)),I=T.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"fitb"}},[r("h1",[e._v("Preferences:")]),r("label",{attrs:{for:"name"}},[e._v("Language: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"languages"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}}),r("option",[e._v("English")]),r("option",[e._v("Chinese")]),r("option",[e._v("Malay")]),r("option",[e._v("Tamil")])]),r("br"),r("br"),r("br"),r("button",{staticClass:"end"},[e._v("Save Changes")])]),r("br"),r("br"),r("br"),r("h1",[e._v("Delete Account:")]),r("p",[e._v("Your account will be permanently deleted")]),r("br"),r("button",{staticClass:"end",on:{click:e.deleteAcc}},[e._v("Delete My Account")])])},L=[],R={data:function(){return{selected:"English"}},methods:{deleteAcc:function(){}}},z=R,D=(r("5f87"),Object(p["a"])(z,M,L,!1,null,"4a65d2a6",null)),q=D.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"fitb"}},[r("h1",[e._v("Personal Info:")]),r("h4",[e._v("You may update your personal information here!")]),r("div",[r("label",{attrs:{for:"name"}},[e._v("First Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.fname,expression:"fname"}],attrs:{type:"text",value:"fname"},domProps:{value:e.fname},on:{input:function(t){t.target.composing||(e.fname=t.target.value)}}})]),r("br"),r("br"),r("label",{attrs:{for:"name"}},[e._v("Last Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lname,expression:"lname"}],attrs:{type:"text",value:"lname"},domProps:{value:e.lname},on:{input:function(t){t.target.composing||(e.lname=t.target.value)}}})]),r("br"),r("br"),r("label",{attrs:{for:"name"}},[e._v("Gender: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.gender=t.target.multiple?r:r[0]}}},[r("option",{attrs:{disabled:"",value:""}}),r("option",[e._v("Male")]),r("option",[e._v("Female")])])]),r("br"),r("br"),r("label",{attrs:{for:"name"}},[e._v("Age: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"number",value:"age"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),r("br"),r("br"),r("label",{attrs:{for:"name"}},[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",value:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),r("br"),r("br"),r("br")]),r("button",{staticClass:"end"},[e._v("Save All Changes")]),r("br"),r("br"),r("br"),r("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.newPassword(t)}}},[r("h1",[e._v("Change Password:")]),r("label",{attrs:{for:"resetEmail"}},[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.resetEmail,expression:"resetEmail"}],attrs:{type:"email",value:"resetEmail",id:"resetEmail"},domProps:{value:e.resetEmail},on:{input:function(t){t.target.composing||(e.resetEmail=t.target.value)}}})]),r("br"),r("br"),r("button",{staticClass:"end",attrs:{type:"submit"}},[e._v("Send Reset Email")]),r("br")]),r("br")])},H=[],V={name:"Account",data(){return{rules:[{message:"One lowercase letter required.",regex:/[a-z]+/},{message:"One uppercase letter required.",regex:/[A-Z]+/},{message:"8 characters minimum.",regex:/.{8,}/},{message:"One number required.",regex:/[0-9]+/}],fname:"",lname:"",gender:"",age:"",email:"",passwordFieldType:"password",cpassword:"",npassword:"",cnpassword:"",submitted:!1,resetEmail:""}},methods:{switchVisibility(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"},resetPasswords(){this.cpassword="",this.npassword="",this.cnpassword="",this.submitted=!0,setTimeout(()=>{this.submitted=!1},2e3)},newPassword(){}},computed:{notSamePasswords(){return!!this.passwordsFilled&&this.npassword!==this.cnpassword},passwordsFilled(){return""!==this.cpassword&&""!==this.npassword&&""!==this.cnpassword},passwordValidation(){let e=[];for(let t of this.rules)t.regex.test(this.npassword)||e.push(t.message);return 0===e.length?{valid:!0,errors:e}:{valid:!1,errors:e}}}},Z=V,J=(r("dca4"),Object(p["a"])(Z,G,H,!1,null,"60720f9a",null)),U=J.exports,W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"register"}},[r("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("h1",[e._v("Personal Information:")]),r("div",[r("label",{attrs:{for:"fname"}},[e._v("First Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.fname,expression:"form.fname"}],attrs:{type:"text",value:"fname",id:"fname"},domProps:{value:e.form.fname},on:{input:function(t){t.target.composing||e.$set(e.form,"fname",t.target.value)}}})]),r("br"),r("br"),r("label",{attrs:{for:"lname"}},[e._v("Last Name: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lname,expression:"form.lname"}],attrs:{type:"text",value:"lname",id:"lname"},domProps:{value:e.form.lname},on:{input:function(t){t.target.composing||e.$set(e.form,"lname",t.target.value)}}})]),r("br"),r("br"),r("label",{attrs:{for:"gender"}},[e._v("Gender: "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.gender,expression:"form.gender"}],attrs:{id:"gender"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.form,"gender",t.target.multiple?r:r[0])}}},[r("option",{attrs:{disabled:"",value:""}}),r("option",[e._v("Male")]),r("option",[e._v("Female")])])]),r("br"),r("br"),r("label",{attrs:{for:"age"}},[e._v("Age: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.age,expression:"form.age"}],attrs:{type:"number",value:"age",id:"age"},domProps:{value:e.form.age},on:{input:function(t){t.target.composing||e.$set(e.form,"age",t.target.value)}}})]),r("br"),r("br"),r("label",{attrs:{for:"email"}},[e._v("Email: "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"text",value:"email",id:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}})]),e._v(" "),r("br"),r("br"),r("br")]),r("h1",[e._v("Password:")]),r("div",{staticClass:"items"},[r("label",{attrs:{for:"password"}},[r("b",[e._v("Password: ")]),"checkbox"===e.passwordFieldType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{value:"password",id:"password",type:"checkbox"},domProps:{checked:Array.isArray(e.form.password)?e._i(e.form.password,"password")>-1:e.form.password},on:{change:function(t){var r=e.form.password,a=t.target,s=!!a.checked;if(Array.isArray(r)){var o="password",n=e._i(r,o);a.checked?n<0&&e.$set(e.form,"password",r.concat([o])):n>-1&&e.$set(e.form,"password",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.form,"password",s)}}}):"radio"===e.passwordFieldType?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{value:"password",id:"password",type:"radio"},domProps:{checked:e._q(e.form.password,"password")},on:{change:function(t){return e.$set(e.form,"password","password")}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{value:"password",id:"password",type:e.passwordFieldType},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),e._v(" "),r("br"),r("br"),r("label",{attrs:{for:"cpassword"}},[r("b",[e._v("Confirm Password: ")]),r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.form.cpassword,expression:"form.cpassword",modifiers:{lazy:!0}}],attrs:{type:e.passwordFieldType,value:"cpassword",id:"cpassword"},domProps:{value:e.form.cpassword},on:{change:function(t){return e.$set(e.form,"cpassword",t.target.value)}}})]),e._v(" "),r("br"),r("br"),r("button",{attrs:{type:"button"},on:{click:e.switchVisibility}},[e._v("Show / Hide Password")]),r("br"),r("br"),e.errors.length?r("div",{attrs:{id:"errors"}},[r("ul",e._l(e.errors,(function(t){return r("li",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]):e._e()]),r("h4",[e._v("Please make sure your Password fulfils the following criterias!")]),e._l(e.rules,(function(t){return r("ul",{key:t},[r("li",[e._v(e._s(t.message))])])})),r("br"),e._m(0)],2)])},Y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"special"},[r("button",{attrs:{type:"submit"}},[e._v(" Register ")])])}],B={email:function(e){var t=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)},password:function(e){return e.length>0}},K={name:"Register",data:function(){return{rules:[{message:"At Least 1 Lowercase Letter",regex:/.*[a-z].*/},{message:"At Least 1 Uppercase Letter",regex:/.*[A-Z].*/},{message:"Min. 8 Characters",regex:/.{8,}/},{message:"Min. 1 Number",regex:/.*[0-9].*/}],form:{fname:"",lname:"",gender:"",age:"",email:"",riskSelected:[],password:"",cpassword:""},submitted:!1,passwordFieldType:"password",errors:[]}},methods:{switchVisibility(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"},resetPasswords(){this.password="",this.cpassword="",this.submitted=!0,setTimeout(()=>{this.submitted=!1},2e3)},submit(){if(this.errors=[],B.password(this.form.password)){for(let e of this.rules)e.regex.test(this.form.password)||this.errors.push(e.message);this.form.password!==this.form.cpassword&&this.errors.push("Passwords don't match")}else this.errors.push("Please enter a password");B.email(this.form.email)||this.errors.push("Please enter a valid email address"),0===this.errors.length?(console.log("in"),b.a.auth().createUserWithEmailAndPassword(this.form.email,this.form.password).then(e=>{e.user.updateProfile({displayName:this.form.fname}).then(()=>{const t=e.user.uid,r=e.user.email,a=e.user.displayName,s={userid:t,email:r,firstName:a,lastName:this.form.lname,calendarEvents:[],risks:this.form.riskSelected};b.a.firestore().collection("accounts").doc(t).set(s).then(()=>{}),this.$router.push("/login")})}).catch(e=>{console.log(e.message)})):console.log(this.errors.length)}}},Q=K,X=(r("6071"),Object(p["a"])(Q,W,Y,!1,null,"9907c340",null)),ee=X.exports,te={},re=Object(p["a"])(te,a,s,!1,null,null,null),ae=re.exports,se={},oe=Object(p["a"])(se,o,n,!1,null,null,null),ne=oe.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"forgot"}},[r("h1",[e._v("Reset Password")]),r("form",{attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.forgotPassword(t)}}},[r("label",{attrs:{for:"email"}},[e._v("Email:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticStyle:{padding:"7px",margin:"10px"},attrs:{type:"text",value:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("br"),r("br"),r("button",{staticClass:"end",attrs:{type:"submit"}},[e._v("Send Link to Reset Password")])])])},le=[],ue={name:"ForgotPassword",data(){return{email:""}},methods:{forgotPassword(){b.a.auth().sendPasswordResetEmail(this.email).then(()=>{alert("Check your Registered Email to Reset Password!")}).catch(e=>{alert(e)})}}},de=ue,me=(r("44e1"),Object(p["a"])(de,ie,le,!1,null,"016fb038",null)),pe=me.exports;i["a"].use(f["a"]);var ce=new f["a"]({routes:[{path:"/general",name:"General",component:ae},{path:"/topics",name:"Topics",component:ne},{path:"/profile",name:"Profile",component:I,children:[{path:"",component:U},{path:"settings",component:q}]},{path:"/login",component:P},{path:"/",name:"Home",component:A},{path:"/register",name:"Register",component:ee},{path:"/forgot",name:"Forgot",component:pe}]});i["a"].config.productionTip=!1,new i["a"]({render:e=>e(v),router:ce}).$mount("#app")},"5f87":function(e,t,r){"use strict";var a=r("2b01"),s=r.n(a);s.a},6071:function(e,t,r){"use strict";var a=r("f284"),s=r.n(a);s.a},"715a":function(e,t,r){"use strict";var a=r("0f40"),s=r.n(a);s.a},"789b":function(e,t,r){},8127:function(e,t,r){"use strict";var a=r("d45f"),s=r.n(a);s.a},"85ec":function(e,t,r){},9227:function(e,t,r){"use strict";var a=r("c271"),s=r.n(a);s.a},c271:function(e,t,r){},d45f:function(e,t,r){},dca4:function(e,t,r){"use strict";var a=r("0149"),s=r.n(a);s.a},f284:function(e,t,r){}});
//# sourceMappingURL=app.be130d1b.js.map