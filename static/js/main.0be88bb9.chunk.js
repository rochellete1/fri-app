(this["webpackJsonpfri-app"]=this["webpackJsonpfri-app"]||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(13),i=a.n(n),l=(a(24),a(25),a(6)),r=a(0);var j=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("nav",{className:"navbar navbar-expand-lg bg-primary",children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(l.b,{className:"navbar-brand",to:"/home",children:"Website"}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link active","aria-current":"page",to:"/home",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link",to:"/features",children:"Features"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link",to:"/pricing",children:"Pricing"})})]})})]})})})},d=a(3);var b=function(e){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(r.jsx)("img",{src:e.img,className:"card-img-top",alt:"text"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:"Card title"}),Object(r.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(r.jsx)(l.b,{to:"/",className:"btn btn-primary",children:"Go somewhere"})]})]})})},o=a.p+"static/media/pic1.0761262b.jpg",p=a.p+"static/media/pic2.0761262b.jpg",m=a.p+"static/media/pic3.0761262b.jpg",h=a.p+"static/media/pic4.0761262b.jpg",x=a.p+"static/media/pic5.e9ec0534.jpg",u=a.p+"static/media/pic6.e9ec0534.jpg",O=a.p+"static/media/pic7.e9ec0534.jpg",g=a.p+"static/media/pic8.e9ec0534.jpg";var v=function(){return Object(r.jsxs)("center",{children:[Object(r.jsx)("h1",{children:"Welcome Shoppers!"}),Object(r.jsx)("div",{className:"container col-sm-4"}),Object(r.jsxs)("div",{className:"tex-align-center",style:{display:"inline-flex"},children:[Object(r.jsx)(b,{img:o,alt:"pic1"}),Object(r.jsx)(b,{img:p,alt:"pic2"}),Object(r.jsx)(b,{img:m,alt:"pic3"}),Object(r.jsx)(b,{img:h,alt:"pic4"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"tex-align-center",style:{display:"inline-flex"},children:[Object(r.jsx)(b,{img:x,alt:"pic5"}),Object(r.jsx)(b,{img:u,alt:"pic6"}),Object(r.jsx)(b,{img:O,alt:"pic7"}),Object(r.jsx)(b,{img:g,alt:"pic8"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("nav",{"aria-label":"Page navigation example",children:Object(r.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(r.jsx)("li",{className:"page-item disabled",children:Object(r.jsx)(l.b,{className:"page-link",to:"/",tabindex:"-1","aria-disabled":"true",children:"Previous"})}),Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)(l.b,{className:"page-link",to:"/",children:"1"})}),Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)(l.b,{className:"page-link",to:"/",children:"2"})}),Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)(l.b,{className:"page-link",to:"/",children:"3"})}),Object(r.jsx)("li",{className:"page-item",children:Object(r.jsx)(l.b,{className:"page-link",to:"/",children:"Next"})})]})}),Object(r.jsx)("div",{className:"container col-sm-4"}),Object(r.jsxs)("div",{className:"tex-align-center",style:{display:"inline-flex"},children:[Object(r.jsx)(b,{img:o,alt:"pic1"}),Object(r.jsx)(b,{img:p,alt:"pic2"}),Object(r.jsx)(b,{img:m,alt:"pic3"}),Object(r.jsx)(b,{img:h,alt:"pic4"})]})]})};var f=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(v,{})})},N=a(7),y=a(33);var k=function(e){var t=Object(c.useState)(),a=Object(N.a)(t,2),s=a[0],n=a[1],i=Object(c.useState)(),l=Object(N.a)(i,2),j=l[0],d=l[1],b=Object(c.useState)(),o=Object(N.a)(b,2),p=o[0],m=o[1],h=Object(c.useState)([]),x=Object(N.a)(h,2),u=x[0],O=x[1];Object(c.useEffect)((function(){y.a.get("http://localhost/sat-app/db.php").then((function(e){O(e.data),console.log(u)}))}),[]);var g=function(e){var t=new FormData;t.append("stud_id",e.currentTarget.id),t.append("function","delete"),Object(y.a)({method:"POST",url:"http://localhost/sat-app/db.php",data:t,config:'Content-Type ="multipart/form-data"'}).then((function(e){y.a.get("http://localhost/sat-app/db.php").then((function(e){O(e.data),console.log(u)}))})).catch((function(e){alert("mali"),console.log(e)}))},v=function(e){var t=new FormData;t.append("stud_id",e.currentTarget.title),t.append("fname",document.getElementById("fname"+e.currentTarget.title).value),t.append("lname",document.getElementById("lname"+e.currentTarget.title).value),t.append("age",document.getElementById("age"+e.currentTarget.title).value),t.append("function","update"),Object(y.a)({method:"POST",url:"http://localhost/sat-app/db.php",data:t,config:'Content-Type ="multipart/form-data"'}).then((function(e){alert("successfully updated!")})).catch((function(e){alert("mali"),console.log(e)}))};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Student's List"}),Object(r.jsxs)("form",{action:"",children:[Object(r.jsx)("input",{type:"text",name:"fname",value:s,onChange:function(e){return n(e.target.value)}}),Object(r.jsx)("input",{type:"text",name:"lname",value:j,onChange:function(e){return d(e.target.value)}}),Object(r.jsx)("input",{type:"number",name:"age",value:p,onChange:function(e){return m(e.target.value)}}),Object(r.jsx)("input",{type:"submit",onClick:function(e){e.preventDefault();var t=new FormData;t.append("fname",s),t.append("lname",j),t.append("age",p),t.append("function","insert"),Object(y.a)({method:"POST",url:"http://localhost/sat-app/db.php",data:t,config:'Content-Type ="multipart/form-data"'}).then((function(e){y.a.get("http://localhost/sat-app/db.php").then((function(e){O(e.data),console.log(u)}))}))}})]}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:" First Name"}),Object(r.jsx)("th",{children:" Last Name"}),Object(r.jsx)("th",{children:" Age"})]})}),Object(r.jsx)("tbody",{children:u.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("input",{defaultValue:e.firstname,id:"fname"+e.stud_id})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{defaultValue:e.lastname,id:"lname"+e.stud_id})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{defaultValue:e.age,id:"age"+e.stud_id})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{id:e.stud_id,onClick:g,children:"Delete"})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{title:e.stud_id,onClick:v,children:"Update"})})]},e.stud_id)}))})]})]})};var w=function(e){return Object(r.jsxs)("center",{children:[Object(r.jsx)("h1",{children:"Features"}),Object(r.jsx)("div",{children:Object(r.jsx)(k,{})})]})},T=a.p+"static/media/dog1.083a9647.jpg",D=a.p+"static/media/dog2.07f2697b.jpg",S=a.p+"static/media/dog3.6f9dcd4b.jpg";var C=function(){return Object(r.jsxs)("center",{children:[Object(r.jsx)("h1",{children:"Pricing"}),Object(r.jsx)("div",{className:"container-fluid d-flex",style:{height:"800px"},children:Object(r.jsx)("div",{className:"container d-flex",children:Object(r.jsx)("div",{id:"carouselKo",className:"carousel slide carousel-dark text-align-center justify-content-center d-flex","data-bs-interval":"2000","data-bs-ride":"carousel",children:Object(r.jsxs)("div",{className:"carousel-inner",children:[Object(r.jsxs)("div",{className:"carousel-item active",children:[Object(r.jsx)("img",{src:T,alt:"dog1",className:"d-block w-auto"}),Object(r.jsxs)("div",{className:"carousel-caption d-none d-md-block text-black",children:[Object(r.jsx)("h5",{children:" Dog 1 "}),Object(r.jsx)("p",{children:"Mysteries of the ancestral home of the Locke Family located in Matheson, Massachusetts were discovered by the Three siblings."})]})]}),Object(r.jsxs)("div",{className:"carousel-item active",children:[Object(r.jsx)("img",{src:D,alt:"dog2",className:"d-block w-auto"}),Object(r.jsxs)("div",{className:"carousel-caption d-none d-md-block text-black background-color: skyblue;",children:[Object(r.jsx)("h5",{children:" Dog 2 "}),Object(r.jsx)("p",{children:"Unlocking more secrets to the unknown"})]})]}),Object(r.jsxs)("div",{className:"carousel-item active",children:[Object(r.jsx)("img",{src:S,alt:"dog3",className:"d-block w-auto"}),Object(r.jsxs)("div",{className:"carousel-caption d-none d-md-block text-black",children:[Object(r.jsx)("h5",{children:" Dog 3 "}),Object(r.jsx)("p",{children:"To finally close it"})]})]})]})})})}),Object(r.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselKo","data-bs-slide":"prev",children:[Object(r.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(r.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(r.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselKo","data-bs-slide":"next",children:[Object(r.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(r.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})};var P=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)("div",{children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{path:"/fri-app",element:Object(r.jsx)(f,{})}),Object(r.jsx)(d.a,{path:"/",element:Object(r.jsx)(f,{})}),Object(r.jsx)(d.a,{path:"/home",element:Object(r.jsx)(f,{})}),Object(r.jsx)(d.a,{path:"/features",element:Object(r.jsx)(w,{})}),Object(r.jsx)(d.a,{path:"/pricing",element:Object(r.jsx)(C,{})})]})})]})};i.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(P,{})})}))}},[[31,1,2]]]);
//# sourceMappingURL=main.0be88bb9.chunk.js.map