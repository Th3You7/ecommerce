(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[37],{149:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j})),n.d(t,"e",(function(){return b}));var i=n(13),c=n.n(i),r=n(24),a=n(23),o=n.n(a),l=n(21),s="https://jabstore.herokuapp.com/",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(r.a)(c.a.mark((function t(n){var i,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.e}),t.prev=1,t.next=4,o.a.get("".concat(s,"/api/store/").concat(e));case 4:i=t.sent,r=i.data,n({type:l.f,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.d,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var i,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.h}),t.prev=1,t.next=4,o.a.get("".concat(s,"/api/product/").concat(e));case 4:i=t.sent,r=i.data,n({type:l.i,payload:r}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.g,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.b}),e.prev=1,e.next=4,o.a.get("".concat(s,"/api/admin/allproducts"));case 4:n=e.sent,i=n.data,t({type:l.c,payload:i}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:l.a,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(t){t({type:"SELECT_PROD",payload:e})}},b=function(){return function(e){e({type:l.j})}}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a}));var i=n(39),c=function(e){return function(t,n){t({type:i.a,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},r=function(e){return function(t,n){t({type:i.c,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},a=function(){return function(e){e({type:i.b}),localStorage.clear()}}},152:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"k",(function(){return z})),n.d(t,"e",(function(){return P})),n.d(t,"d",(function(){return F})),n.d(t,"j",(function(){return X})),n.d(t,"i",(function(){return M})),n.d(t,"b",(function(){return ee})),n.d(t,"a",(function(){return ne})),n.d(t,"g",(function(){return oe})),n.d(t,"f",(function(){return le})),n.d(t,"h",(function(){return ue}));var i=n(1),c=n(34),r=n(118),a=n(35),o=n(951),l=n(952),s=n(954),d=n(955),u=n(958),p=n(956),j=n(957),b=n(959),x=n(960),h=n(961),f=n(28),g=n(57),m=n(3),O=Object(r.a)((function(e){return{appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}})),y=Object(a.a)((function(e){return{badge:{right:-8,top:-9,padding:"0 4px"}}}))(o.a),v=function(){var e=O(),t=Object(f.c)((function(e){return e.cartReducer})).products,n=Object(i.useContext)(g.a),r=n.theme,a=n.toggleTheme,o=r.palette.type;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.a,{position:"fixed",color:"inherit",className:e.appBar,children:Object(m.jsxs)(s.a,{variant:"regular",children:[Object(m.jsx)(d.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:a,children:"light"===o?Object(m.jsx)(p.a,{}):Object(m.jsx)(j.a,{})}),Object(m.jsx)(u.a,{color:"secondary","aria-label":"add",className:e.fabButton,component:c.b,to:"/cart",children:Object(m.jsx)(y,{badgeContent:t.length,color:"primary",overlap:"circle",children:Object(m.jsx)(b.a,{})})}),Object(m.jsx)("div",{className:e.grow}),Object(m.jsx)(d.a,{color:"inherit",component:c.b,to:"/loan",children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(d.a,{edge:"end",color:"inherit",component:c.b,to:"/admin",children:Object(m.jsx)(h.a,{})})]})})})},w=n(4),k=n(962),N=n(963),C=n(964),T=n(965),V=n(966),I=n(967),D=n(141),S=Object(r.a)((function(e){return{root:{position:function(e){return/^\/product/.test(e.pathname)?"absolute":"static"},width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(1.5,0)},menuButton:{marginRight:e.spacing(2)},flexGrow:{flexGrow:2},flex:{display:"flex",alignItems:"center",justifyContent:"flex-end"},btn:{margin:e.spacing(0,1.2,0,0)},link:{color:e.palette.text.primary}}}));function z(e){var t=e.handleRemove,n=e.handleAdd,i=e.handleBack,r=e.handleStore,a=e.to,o=e.id,l=e.categoryId,s=e.saleId,p=e.spendingId,j=e.paymentId,b=e.productsId,x=e.invoiceId,h=S(Object(w.h)()),g=Object(w.h)().pathname,O=Object(w.i)().profileid,y=Object(f.c)((function(e){return e.currSelInvoiceReducer}));return Object(m.jsxs)("div",{className:h.root,children:[Object(m.jsx)(d.a,{"aria-label":"back",onClick:i,style:{background:/^\/product/.test(g)?"rgba(0,0,0,.3)":"inherit"},children:Object(m.jsx)(k.a,{fontSize:"inherit"})}),/^\/cart/.test(g)&&Object(m.jsx)(d.a,{color:"inherit","aria-label":"delete",onClick:t,children:Object(m.jsx)(N.a,{fontSize:"inherit"})}),/^\/product/.test(g)&&Object(m.jsx)(d.a,{color:"inherit","aria-label":"store",onClick:r,style:{background:"rgba(0,0,0,.3)"},children:Object(m.jsx)(C.a,{})}),("/admin/allproducts"===g||"/admin/categories"===g||"/admin/sales"===g||"/admin/spending"===g||"/admin/invoices"===g||"/loan"===g||g==="/loan/".concat(O,"/payments")||g==="/loan/".concat(O,"/products"))&&Object(m.jsxs)("div",{className:h.flex,children:["/admin/sales"!==g&&g!=="/loan/".concat(O,"/products")&&"/admin/invoices"!==g&&Object(m.jsx)(u.a,{color:"primary",size:"small","aria-label":"add",className:h.btn,onClick:n,children:Object(m.jsx)(T.a,{})}),x&&(null===y||void 0===y?void 0:y.invoiceId)&&Object(m.jsx)(d.a,{children:Object(m.jsx)(D.PDFDownloadLink,{className:h.link,document:Object(m.jsx)(ue,{data:y}),fileName:"".concat(null===y||void 0===y?void 0:y.invoiceId,".pdf"),children:Object(m.jsx)(V.a,{})})}),(o||l||s||p||j||b||x)&&Object(m.jsx)(u.a,{color:"secondary",size:"small","aria-label":"delete",className:h.btn,component:c.b,to:a,children:Object(m.jsx)(N.a,{})}),o&&Object(m.jsx)(u.a,{color:"default",size:"small",className:h.btn,component:c.b,"aria-label":"delete",to:{pathname:"/admin/edit/".concat(o)},children:Object(m.jsx)(I.a,{})})]})]})}var B=Object(r.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:e.spacing(2),position:"absolute",left:0,bottom:0,width:"100%",background:"transparent"},fab:{width:"100%"}}})),P=function(e){var t=e.handleCheck,n=B();return Object(m.jsx)("div",{className:n.root,children:Object(m.jsx)(u.a,{variant:"extended",className:n.fab,onClick:t,children:"Check Out"})})},R=n(953),W=n(968),A=Object(r.a)((function(e){return{paper:{display:"inline-block",margin:e.spacing(0,.5),padding:e.spacing(1),cursor:"pointer"}}})),F=function(e){var t=e.title,n=A(),i=Object(w.g)();return Object(m.jsx)(R.a,{className:n.paper,onClick:function(){return e=t,void i.push("/store/".concat(e.toLowerCase()));var e},children:Object(m.jsx)(W.a,{children:t.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})})},H=n(969),U=n(970),J=n(972),L=n(973),_=n(971),q=n(150),E=n(149),G=Object(r.a)((function(e){return{card:{overflow:"visible",flex:"0 1 48%",display:function(e){return/^\/store/.test(e.pathname)?"block":"flex"},height:function(t){return/^\/store/.test(t.pathname)?"auto":e.spacing(12)},marginBottom:e.spacing(2)},cardContent:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"70%"}},area:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"30%"}},img:{width:"100%",height:function(t){return/^\/store/.test(t.pathname)?e.spacing(20):"100%"},objectFit:"fill"},price:{color:e.palette.text.secondary}}})),Q=Object(a.a)((function(e){return{badge:{right:0,top:0,padding:"0 4px"}}}))(o.a),X=function(e){var t=e,n=t.id,i=t.title,c=t.price,r=t.img,a=t.fetching,o=t.soldPrice,l=t.size,s=Object(w.h)(),d=Object(f.b)(),u=G(e=s),p=Object(w.g)(),j=/^\/cart/,b="/product/".concat(n);return Object(m.jsxs)(H.a,{className:u.card,children:[Object(m.jsx)(U.a,{className:u.area,children:a?Object(m.jsx)(_.a,{variant:"rect",height:140,width:"100%"}):Object(m.jsx)(J.a,{className:u.img,component:"img",alt:i,image:r,title:i,onClick:function(){d(Object(E.e)()),p.push(b)}})}),Object(m.jsxs)(L.a,{className:u.cardContent,children:[a?Object(m.jsx)(_.a,{variant:"text",width:"70%"}):Object(m.jsx)(W.a,{component:"h4",variant:"body2",children:i.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),j.test(s.pathname)&&Object(m.jsxs)(W.a,{variant:"subtitle2",children:["Sizes:"," ",Object.keys(l).map((function(e){return"".concat(e.toUpperCase(),": ").concat(l[e]," ")}))]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[a?Object(m.jsx)(_.a,{variant:"text",width:"40%"}):Object(m.jsxs)(W.a,{component:"h4",variant:"body1",className:u.price,style:{marginRight:"48px"},children:[c,"DH"]}),j.test(s.pathname)&&Object(m.jsxs)(W.a,{component:"h4",variant:"body1",className:u.price,children:[o,"DH"]})]})]}),j.test(s.pathname)&&Object(m.jsx)(Q,{color:"error",badgeContent:"X",onClick:function(){d(Object(q.c)(n))},style:{cursor:"pointer"}})]})},Y=n(1022),$=n(974),K=Object(r.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"41vh",margin:e.spacing(0,"auto",1.5),position:"relative"},media:{height:e.spacing(10),width:e.spacing(10),top:"-23%",left:"3%"},title:{lineHeight:".5",fontWeight:600,fontSize:e.spacing(2.2)},cover:{width:"100%",height:e.spacing(18),background:"#ebe4e4",position:"relative",top:0},info:{padding:e.spacing(0,2),marginTop:e.spacing(-4),display:"flex"},menu:{textAlign:"right",position:"absolute",left:0,top:0,width:"100%",zIndex:100},img:{width:"100%",height:"100%",position:"absolute",top:0,left:0},subtitle:{fontWeight:700}}}));function M(e){var t,n,i=e.name,c=e.img,r=e.productsSum,a=e.paymentsSum,o=e.phone,l=K(),s=Object(w.g)(),u=Object(w.i)().profileid;return Object(m.jsxs)(R.a,{variant:"outlined",className:l.root,children:[Object(m.jsxs)("div",{className:l.cover,children:[Object(m.jsx)("div",{className:l.menu,children:Object(m.jsx)(d.a,{onClick:function(){s.push("/loan/".concat(u,"/edit"))},children:Object(m.jsx)(I.a,{})})}),(null===c||void 0===c?void 0:c.cover)&&Object(m.jsx)("img",{className:l.img,src:null===c||void 0===c||null===(t=c.cover)||void 0===t?void 0:t.url,alt:"cover"})]}),Object(m.jsx)(Y.a,{alt:"admin logo",className:l.media,src:null===c||void 0===c||null===(n=c.profile)||void 0===n?void 0:n.url}),Object(m.jsxs)("div",{className:l.info,children:[Object(m.jsxs)("div",{style:{flex:"0 1 50%"},children:[Object(m.jsx)(W.a,{variant:"h5",component:"h2",color:"textPrimary",className:l.title,children:i&&i.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(m.jsxs)(W.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:l.subtitle,children:[Number(r-a)," DH"]})]}),Object(m.jsx)("div",{style:{flex:"0 1 50%"},children:Object(m.jsxs)(W.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:l.subtitle,style:{display:"flex"},children:[Object(m.jsx)($.a,{style:{marginRight:"4px"}}),Object(m.jsx)("span",{children:"0".concat(o)})]})})]})]})}var Z=Object(r.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"35vh",margin:e.spacing(0,"auto",1.5),display:"flex",flexDirection:"column",alignItems:"center"},media:{position:"absolute",bottom:-10,left:"50%",transform:"translate(-50%, 0%)",height:e.spacing(16),width:e.spacing(16)},title:{lineHeight:".8"},edit:{position:"absolute",right:0,top:0,background:"rgba(0,0,0,0.5)"},cover:{width:"100%",height:"63%",position:"relative",backgroundImage:function(e){var t,n,i,c,r,a;return(null===e||void 0===e||null===(t=e.result)||void 0===t||null===(n=t.img)||void 0===n||null===(i=n.cover)||void 0===i?void 0:i.url)?'url("'.concat(null===(c=e.result)||void 0===c||null===(r=c.img)||void 0===r||null===(a=r.cover)||void 0===a?void 0:a.url,'")'):""},backgroundColor:"white",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},info:{marginTop:"20px"}}}));function ee(){var e,t,n,i,c=Object(f.c)((function(e){return e.getProfileReducer})).result,r=Z({result:c}),a=Object(w.g)();return Object(m.jsxs)(R.a,{variant:"outlined",className:r.root,children:[Object(m.jsxs)("div",{className:r.cover,children:[Object(m.jsx)(d.a,{onClick:function(){a.push("/admin/edit")},className:r.edit,children:Object(m.jsx)(I.a,{})}),Object(m.jsx)(Y.a,{alt:"admin logo",src:null===c||void 0===c||null===(e=c.img)||void 0===e||null===(t=e.profile)||void 0===t?void 0:t.url,className:r.media})]}),c?Object(m.jsxs)("div",{className:r.info,children:[Object(m.jsx)(W.a,{variant:"h4",component:"h2",color:"textPrimary",align:"center",className:r.title,children:null===c||void 0===c||null===(n=c.storeName)||void 0===n?void 0:n.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(m.jsx)(W.a,{variant:"subtitle1",component:"h6",color:"textSecondary",align:"center",className:r.subtitle,children:null===c||void 0===c||null===(i=c.name)||void 0===i?void 0:i.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}):Object(m.jsx)("p",{children:"loading"})]})}var te=Object(r.a)((function(e){return{paper:{width:"95%",height:e.spacing(6),margin:e.spacing(0,"auto",.5),padding:e.spacing(1),display:"flex",alignItems:"center",cursor:"pointer"},flex:{display:"flex",alignItems:"center"},p:{margin:e.spacing(0,0,0,1.5)}}}));function ne(e){var t=e.children,n=e.name,i=e.path,c=te(),r=Object(w.g)();return Object(m.jsx)(R.a,{variant:"outlined",className:c.paper,elevation:0,onClick:function(){r.push(i)},children:Object(m.jsxs)("div",{className:c.flex,children:[t,Object(m.jsx)("p",{className:c.p,children:n})]})})}var ie=n(153),ce=n.n(ie),re=n(151),ae=n.n(re);function oe(e){var t=e.options;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ce.a,{highcharts:ae.a,options:t,constructorType:"stockChart"})})}function le(e){var t=e.options;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ce.a,{highcharts:ae.a,options:t})})}function se(e){var t=e.name,n=e.qty,i=e.unitPrice;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"center"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:n})}),Object(m.jsx)(D.View,{style:{flex:"0 1 55% ",padding:"4px 8px 10px"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:t})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:i})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:i*n})})]})}var de=D.StyleSheet.create({page:{width:"100%",display:"inline-block",padding:"16px"},flex:{display:"flex",flexDirection:"row",marginBottom:48},store:{display:"flex",flexDirection:"column",flex:"0 1 50%"},logo:{flex:"0 1 50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"},billInfo:{display:"flex",flexDirection:"row"},billTo:{display:"flex",flexDirection:"column",flex:"0 1 50%",marginBottom:20},billDetails:{flex:"0 1 50%"}});function ue(e){var t=e.data,n=t.client,i=t.invoiceId,c=t.products,r=t.date,a=t.total;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(D.Document,{children:Object(m.jsxs)(D.Page,{style:de.page,size:"A4",children:[Object(m.jsxs)(D.View,{style:de.flex,children:[Object(m.jsxs)(D.View,{style:de.store,children:[Object(m.jsx)(D.Text,{style:{fontSize:"30px",fontWeight:"bold",marginBottom:12},children:"Jabri Store"}),Object(m.jsx)(D.Text,{children:"Youssef Jabri"}),Object(m.jsx)(D.Text,{children:"Bradia Centre, Fquih Ben Salah"}),Object(m.jsx)(D.Text,{children:"23302"})]}),Object(m.jsx)(D.View,{style:de.logo,children:Object(m.jsx)(D.Image,{src:"https://res.cloudinary.com/datlc9ohl/image/upload/v1630519287/437794623_cmtwlm.png",style:{height:100,width:100}})})]}),Object(m.jsxs)(D.View,{style:de.billInfo,children:[Object(m.jsxs)(D.View,{style:de.billTo,children:[Object(m.jsx)(D.Text,{style:{fontWeight:"bold",marginBottom:"5px"},children:"Bill To"}),Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:n.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}),Object(m.jsxs)(D.View,{style:{flex:"0 1 50%"},styles:de.billDetails,children:[Object(m.jsxs)(D.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 40%"},children:Object(m.jsx)(D.Text,{style:{fontWeight:"bold"},children:"Invoice"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 60%"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:i})})]}),Object(m.jsxs)(D.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 40%"},children:Object(m.jsx)(D.Text,{style:{fontWeight:"bold"},children:"Invoice Date"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 60%"},children:Object(m.jsx)(D.Text,{style:{color:"#292b2c"},children:r.slice(0,r.indexOf("T"))})})]})]})]}),Object(m.jsxs)(D.View,{style:{marginTop:"30px",backgroundColor:"#292b2c",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"center"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Qty"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 55%",padding:"4px 8px"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Description"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Unit Price"})}),Object(m.jsx)(D.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{color:"white",fontWeight:"bold"},children:"Amount"})})]}),Object(m.jsx)(D.View,{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:c.map((function(e){return Object(m.jsx)(se,{name:e.product,unitPrice:e.unitPrice,qty:Object.keys(e.sizes).reduce((function(t,n){return t+e.sizes[n]}),0)},e._id)}))}),Object(m.jsx)(D.View,{style:{justifyContent:"flex-end",textAlign:"right",display:"flex",flexDirection:"row"},children:Object(m.jsx)(D.View,{style:{flex:"0 1 40%",marginTop:"8px"},children:Object(m.jsxs)(D.View,{style:{backgroundColor:"#e3e3e3",padding:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(D.View,{style:{flex:"0 1 50%",padding:"5px",textAlign:"right"},children:Object(m.jsx)(D.Text,{style:{fontWeight:"bold"},children:"TOTAL"})}),Object(m.jsxs)(D.View,{style:{display:"flex",flexDirection:"row",flex:"0 1 50%",justifyContent:"flex-end",padding:"5px"},children:[Object(m.jsx)(D.Text,{style:{color:"#292b2c",fontWeight:"bold",marginLeft:"30px"},children:"$"}),Object(m.jsx)(D.Text,{style:{fontWeight:"bold",color:"#292b2c"},children:a})]})]})})}),Object(m.jsx)(D.View,{style:{marginTop:"30px",display:"block"},children:Object(m.jsx)(D.Text,{style:{flex:"0 1 100%",fontWeight:"bold",fontSize:"20px"},children:"Notes"})})]})})})}},186:function(e,t){},187:function(e,t){},188:function(e,t){},189:function(e,t){},190:function(e,t){},984:function(e,t,n){"use strict";n.r(t);n(1);var i=n(152),c=n(118),r=n(968),a=n(28),o=n(4),l=n(150),s=n(3),d=Object(c.a)((function(e){return{root:{minHeight:"100vh",position:"relative",paddingBottom:e.spacing(8)},product:{width:"90%",margin:"0 auto"},total:{width:"90%",margin:"8px auto 0",padding:e.spacing(2),display:"flex",alignItems:"center",justifyContent:"space-between"}}}));t.default=function(){var e=d(),t=Object(a.c)((function(e){return e.cartReducer})).products,n=Object(o.g)(),c=Object(a.b)(),u=t.reduce((function(e,t){return e+Number(t.soldPrice)*Object.keys(t.size).reduce((function(e,n){return e+t.size[n]}),0)}),0);return Object(s.jsxs)("div",{className:e.root,children:[Object(s.jsx)(i.k,{handleBack:function(){n.push("/store")},handleRemove:function(){c(Object(l.b)())}}),Object(s.jsx)("div",{children:t&&t.map((function(t,n){var c;return Object(s.jsx)("div",{className:e.product,children:Object(s.jsx)(i.j,{id:t._id,title:t.name,price:t.price,size:t.size,img:null===t||void 0===t||null===(c=t.img)||void 0===c?void 0:c.url,soldPrice:t.soldPrice})},n)}))}),Object(s.jsxs)("div",{className:e.total,children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)(r.a,{component:"span",variant:"body2",children:["Earning:"," "]}),Object(s.jsxs)(r.a,{component:"span",variant:"body1",children:[function(){var e=t.reduce((function(e,t){return e+Number(t.price)*Object.keys(t.size).reduce((function(e,n){return e+t.size[n]}),0)}),0);return u-e}(),"DH"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsxs)(r.a,{component:"span",variant:"body2",children:["Subtotal:"," "]}),Object(s.jsxs)(r.a,{component:"span",variant:"body1",children:[u,"DH"]})]})]}),Object(s.jsx)(i.e,{handleCheck:function(){t.length&&n.push("/confirm")}})]})}}}]);
//# sourceMappingURL=37.212ad176.chunk.js.map