(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[42],{1020:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c=n(1),a=n(118),i=n(953),r=n(151),o=n(4),u=n(937),l=n(169),d=Object(l.a)(c.createElement("path",{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"}),"PaymentOutlined"),s=n(28),p=n(222),m=n(3),h=Object(a.a)((function(e){return{root:{width:"100%"},container:{width:"90%",margin:e.spacing(0,"auto")},paper:{width:"95%",height:e.spacing(6),margin:e.spacing(0,"auto",.5),padding:e.spacing(1),display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"center",background:e.palette.error.light,color:e.palette.error.contrastText}}}));function v(){var e,t,n,a,l,v=h(),j=Object(o.g)(),f=Object(o.h)(),b=Object(s.c)((function(e){return e.loanProfileReducer})),O=Object(o.i)().profileid,g=f.pathname,x=Object(s.b)();Object(c.useEffect)((function(){x(Object(p.j)(O))}),[x,O]);var y=[{name:"Products",path:"/products",icon:Object(m.jsx)(u.a,{})},{name:"Payments",path:"/payments",icon:Object(m.jsx)(d,{})}],k=null===b||void 0===b||null===(e=b.data)||void 0===e?void 0:e.products.map((function(e){var t=Object.keys(e.sizes).reduce((function(t,n){return t+e.sizes[n]}),0);return Number(t*e.unitPrice)})).reduce((function(e,t){return e+t}),0),z=null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.payments.reduce((function(e,t){return e+t.payment}),0);return Object(m.jsxs)("div",{className:v.root,children:[Object(m.jsx)(r.k,{handleBack:function(){j.replace("/loan")}}),Object(m.jsx)(r.i,{name:null===b||void 0===b||null===(n=b.data)||void 0===n?void 0:n.name,phone:null===b||void 0===b||null===(a=b.data)||void 0===a?void 0:a.phone,img:null===b||void 0===b||null===(l=b.data)||void 0===l?void 0:l.img,productsSum:k,paymentsSum:z}),y.map((function(e,t){return Object(m.jsx)(r.a,{name:e.name,path:"".concat(g).concat(e.path),children:e.icon},t)})),Object(m.jsx)(i.a,{variant:"outlined",className:v.paper,elevation:0,onClick:function(){j.push("/loan/".concat(O,"/delete"))},children:"Delete"})]})}},937:function(e,t,n){"use strict";var c=n(1),a=n(169);t.a=Object(a.a)(c.createElement(c.Fragment,null,c.createElement("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}),c.createElement("circle",{cx:"6.5",cy:"6.5",r:"1.5"})),"LocalOfferOutlined")}}]);
//# sourceMappingURL=42.878db210.chunk.js.map