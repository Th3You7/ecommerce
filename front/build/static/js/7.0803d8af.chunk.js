(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[7],{148:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return x}));var c=n(13),r=n.n(c),i=n(24),a=n(23),o=n.n(a),l=n(21),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(){var t=Object(i.a)(r.a.mark((function t(n){var c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.e}),t.prev=1,t.next=4,o.a.get("https://manage-commerce.herokuapp.com/api/store/".concat(e));case 4:c=t.sent,i=c.data,n({type:l.f,payload:i}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.d,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.h}),t.prev=1,t.next=4,o.a.get("https://manage-commerce.herokuapp.com/api/product/".concat(e));case 4:c=t.sent,i=c.data,n({type:l.i,payload:i}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.g,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.b}),e.prev=1,e.next=4,o.a.get("https://manage-commerce.herokuapp.com/api/admin/allproducts");case 4:n=e.sent,c=n.data,t({type:l.c,payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:l.a,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},u=function(e){return function(t){t({type:"SELECT_PROD",payload:e})}},x=function(){return function(e){e({type:l.j})}}},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a}));var c=n(39),r=function(e){return function(t,n){t({type:c.a,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},i=function(e){return function(t,n){t({type:c.c,payload:e}),localStorage.setItem("products",JSON.stringify(n().cartReducer.products))}},a=function(){return function(e){e({type:c.b}),localStorage.clear()}}},151:function(e,t,n){"use strict";n.d(t,"c",(function(){return v})),n.d(t,"k",(function(){return S})),n.d(t,"e",(function(){return B})),n.d(t,"d",(function(){return P})),n.d(t,"j",(function(){return G})),n.d(t,"i",(function(){return Y})),n.d(t,"b",(function(){return K})),n.d(t,"a",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"f",(function(){return ae})),n.d(t,"h",(function(){return de}));var c=n(1),r=n(34),i=n(118),a=n(35),o=n(951),l=n(952),s=n(954),d=n(955),p=n(958),u=n(956),x=n(957),j=n(959),h=n(960),b=n(961),f=n(28),g=n(57),m=n(3),O=Object(i.a)((function(e){return{appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}})),y=Object(a.a)((function(e){return{badge:{right:-8,top:-9,padding:"0 4px"}}}))(o.a),v=function(){var e=O(),t=Object(f.c)((function(e){return e.cartReducer})).products,n=Object(c.useContext)(g.a),i=n.theme,a=n.toggleTheme,o=i.palette.type;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(l.a,{position:"fixed",color:"inherit",className:e.appBar,children:Object(m.jsxs)(s.a,{variant:"regular",children:[Object(m.jsx)(d.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:a,children:"light"===o?Object(m.jsx)(u.a,{}):Object(m.jsx)(x.a,{})}),Object(m.jsx)(p.a,{color:"secondary","aria-label":"add",className:e.fabButton,component:r.b,to:"/cart",children:Object(m.jsx)(y,{badgeContent:t.length,color:"primary",overlap:"circle",children:Object(m.jsx)(j.a,{})})}),Object(m.jsx)("div",{className:e.grow}),Object(m.jsx)(d.a,{color:"inherit",component:r.b,to:"/loan",children:Object(m.jsx)(h.a,{})}),Object(m.jsx)(d.a,{edge:"end",color:"inherit",component:r.b,to:"/admin",children:Object(m.jsx)(b.a,{})})]})})})},w=n(4),k=n(962),N=n(963),C=n(964),T=n(965),V=n(966),D=Object(i.a)((function(e){return{root:{position:function(e){return/^\/product/.test(e.pathname)?"absolute":"static"},width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:e.spacing(1.5,0)},menuButton:{marginRight:e.spacing(2)},flexGrow:{flexGrow:2},flex:{display:"flex",alignItems:"center",justifyContent:"flex-end"},btn:{margin:e.spacing(0,1.2,0,0)}}}));function S(e){var t=e.handleRemove,n=e.handleAdd,c=e.handleBack,i=e.handleStore,a=e.to,o=e.id,l=e.categoryId,s=e.saleId,u=e.spendingId,x=e.paymentId,j=e.productsId,h=D(Object(w.h)()),b=Object(w.h)().pathname,f=Object(w.i)().profileid;return Object(m.jsxs)("div",{className:h.root,children:[Object(m.jsx)(d.a,{"aria-label":"back",onClick:c,children:Object(m.jsx)(k.a,{fontSize:"inherit"})}),/^\/cart/.test(b)&&Object(m.jsx)(d.a,{color:"inherit","aria-label":"delete",onClick:t,children:Object(m.jsx)(N.a,{fontSize:"inherit"})}),/^\/product/.test(b)&&Object(m.jsx)(d.a,{color:"inherit","aria-label":"store",onClick:i,children:Object(m.jsx)(C.a,{})}),("/admin/allproducts"===b||"/admin/categories"===b||"/admin/sales"===b||"/admin/spending"===b||"/loan"===b||b==="/loan/".concat(f,"/payments")||b==="/loan/".concat(f,"/products"))&&Object(m.jsxs)("div",{className:h.flex,children:["/admin/sales"!==b&&b!=="/loan/".concat(f,"/products")&&Object(m.jsx)(p.a,{color:"primary",size:"small","aria-label":"add",className:h.btn,onClick:n,children:Object(m.jsx)(T.a,{})}),(o||l||s||u||x||j)&&Object(m.jsx)(p.a,{color:"secondary",size:"small","aria-label":"delete",className:h.btn,component:r.b,to:a,children:Object(m.jsx)(N.a,{})}),o&&Object(m.jsx)(p.a,{color:"default",size:"small",className:h.btn,component:r.b,"aria-label":"delete",to:{pathname:"/admin/edit/".concat(o)},children:Object(m.jsx)(V.a,{})})]})]})}var I=Object(i.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:e.spacing(2),position:"absolute",left:0,bottom:0,width:"100%",background:"transparent"},fab:{width:"100%"}}})),B=function(e){var t=e.handleCheck,n=I();return Object(m.jsx)("div",{className:n.root,children:Object(m.jsx)(p.a,{variant:"extended",className:n.fab,onClick:t,children:"Check Out"})})},A=n(953),z=n(967),W=Object(i.a)((function(e){return{paper:{display:"inline-block",margin:e.spacing(0,.5),padding:e.spacing(1),cursor:"pointer"}}})),P=function(e){var t=e.title,n=W(),c=Object(w.g)();return Object(m.jsx)(A.a,{className:n.paper,onClick:function(){return e=t,void c.push("/store/".concat(e.toLowerCase()));var e},children:Object(m.jsx)(z.a,{children:t.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})})},R=n(968),U=n(969),F=n(971),L=n(972),J=n(970),H=n(149),_=n(148),E=Object(i.a)((function(e){return{card:{overflow:"visible",flex:"0 1 48%",display:function(e){return/^\/store/.test(e.pathname)?"block":"flex"},height:function(t){return/^\/store/.test(t.pathname)?"auto":e.spacing(12)},marginBottom:e.spacing(2)},cardContent:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"70%"}},area:{width:function(e){return/^\/store/.test(e.pathname)?"100%":"30%"}},img:{width:"100%",height:function(t){return/^\/store/.test(t.pathname)?e.spacing(20):"100%"},objectFit:"fill"},price:{color:e.palette.text.secondary}}})),q=Object(a.a)((function(e){return{badge:{right:0,top:0,padding:"0 4px"}}}))(o.a),G=function(e){var t=e,n=t.id,c=t.title,r=t.price,i=t.img,a=t.fetching,o=t.soldPrice,l=t.size,s=Object(w.h)(),d=Object(f.b)(),p=E(e=s),u=Object(w.g)(),x=/^\/cart/,j="/product/".concat(n);return Object(m.jsxs)(R.a,{className:p.card,children:[Object(m.jsx)(U.a,{className:p.area,children:a?Object(m.jsx)(J.a,{variant:"rect",height:140,width:"100%"}):Object(m.jsx)(F.a,{className:p.img,component:"img",alt:c,image:i,title:c,onClick:function(){d(Object(_.e)()),u.push(j)}})}),Object(m.jsxs)(L.a,{className:p.cardContent,children:[a?Object(m.jsx)(J.a,{variant:"text",width:"70%"}):Object(m.jsx)(z.a,{component:"h4",variant:"body2",children:c.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),x.test(s.pathname)&&Object(m.jsxs)(z.a,{variant:"subtitle2",children:["Sizes:"," ",Object.keys(l).map((function(e){return"".concat(e.toUpperCase(),": ").concat(l[e]," ")}))]}),Object(m.jsxs)("div",{style:{display:"flex"},children:[a?Object(m.jsx)(J.a,{variant:"text",width:"40%"}):Object(m.jsxs)(z.a,{component:"h4",variant:"body1",className:p.price,style:{marginRight:"48px"},children:[r,"DH"]}),x.test(s.pathname)&&Object(m.jsxs)(z.a,{component:"h4",variant:"body1",className:p.price,children:[o,"DH"]})]})]}),x.test(s.pathname)&&Object(m.jsx)(q,{color:"error",badgeContent:"X",onClick:function(){d(Object(H.c)(n))},style:{cursor:"pointer"}})]})},M=n(1021),Q=n(973),X=Object(i.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"35vh",margin:e.spacing(0,"auto",1.5),position:"relative"},media:{height:e.spacing(10),width:e.spacing(10),top:"-23%",left:"3%"},title:{lineHeight:".5",fontWeight:600,fontSize:e.spacing(2.2)},cover:{width:"100%",height:e.spacing(18),background:"#ebe4e4",position:"relative",top:0},info:{padding:e.spacing(0,2),marginTop:e.spacing(-4),display:"flex"},menu:{textAlign:"right",position:"absolute",left:0,top:0,width:"100%",zIndex:100},img:{width:"100%",height:"100%",position:"absolute",top:0,left:0},subtitle:{fontWeight:700}}}));function Y(e){var t,n,c=e.name,r=e.img,i=e.productsSum,a=e.paymentsSum,o=e.phone,l=X(),s=Object(w.g)(),p=Object(w.i)().profileid;return Object(m.jsxs)(A.a,{variant:"outlined",className:l.root,children:[Object(m.jsxs)("div",{className:l.cover,children:[Object(m.jsx)("div",{className:l.menu,children:Object(m.jsx)(d.a,{onClick:function(){s.push("/loan/".concat(p,"/edit"))},children:Object(m.jsx)(V.a,{})})}),(null===r||void 0===r?void 0:r.cover)&&Object(m.jsx)("img",{className:l.img,src:null===r||void 0===r||null===(t=r.cover)||void 0===t?void 0:t.url,alt:"cover"})]}),Object(m.jsx)(M.a,{alt:"admin logo",className:l.media,src:null===r||void 0===r||null===(n=r.profile)||void 0===n?void 0:n.url}),Object(m.jsxs)("div",{className:l.info,children:[Object(m.jsxs)("div",{style:{flex:"0 1 50%"},children:[Object(m.jsx)(z.a,{variant:"h5",component:"h2",color:"textPrimary",className:l.title,children:c&&c.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(m.jsxs)(z.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:l.subtitle,children:[Number(i-a)," DH"]})]}),Object(m.jsx)("div",{style:{flex:"0 1 50%"},children:Object(m.jsxs)(z.a,{variant:"subtitle1",component:"h6",color:"textSecondary",className:l.subtitle,style:{display:"flex"},children:[Object(m.jsx)(Q.a,{style:{marginRight:"4px"}}),Object(m.jsx)("span",{children:o})]})})]})]})}var $=Object(i.a)((function(e){return{root:{width:"95%",background:e.palette.background.paper,borderRadius:"2px",height:"35vh",margin:e.spacing(0,"auto",1.5),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"},media:{height:e.spacing(20),width:e.spacing(20),marginBottom:e.spacing(3)},title:{lineHeight:".8"},edit:{position:"absolute",right:0,top:0},cover:{width:"100%",height:"63%",position:"absolute",top:0,left:0},img:{height:"100%",width:"100%"}}}));function K(){var e,t,n,c,r,i,a=$(),o=Object(w.g)(),l=Object(f.c)((function(e){return e.getProfileReducer})).result;return Object(m.jsxs)(A.a,{variant:"outlined",className:a.root,children:[Object(m.jsx)("div",{className:a.cover,children:Object(m.jsx)("img",{className:a.img,src:null===l||void 0===l||null===(e=l.img)||void 0===e||null===(t=e.cover)||void 0===t?void 0:t.url,alt:"cover img"})}),Object(m.jsx)(d.a,{onClick:function(){o.push("/admin/edit")},className:a.edit,children:Object(m.jsx)(V.a,{})}),Object(m.jsx)(M.a,{alt:"admin logo",src:null===l||void 0===l||null===(n=l.img)||void 0===n||null===(c=n.profile)||void 0===c?void 0:c.url,className:a.media}),l?Object(m.jsxs)("div",{className:a.info,children:[Object(m.jsx)(z.a,{variant:"h4",component:"h2",color:"textPrimary",align:"center",className:a.title,children:null===l||void 0===l||null===(r=l.storeName)||void 0===r?void 0:r.replace(/\b\w/g,(function(e){return e.toUpperCase()}))}),Object(m.jsx)(z.a,{variant:"subtitle1",component:"h6",color:"textSecondary",align:"center",className:a.subtitle,children:null===l||void 0===l||null===(i=l.name)||void 0===i?void 0:i.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}):Object(m.jsx)("p",{children:"loading"})]})}var Z=Object(i.a)((function(e){return{paper:{width:"95%",height:e.spacing(6),margin:e.spacing(0,"auto",.5),padding:e.spacing(1),display:"flex",alignItems:"center",cursor:"pointer"},flex:{display:"flex",alignItems:"center"},p:{margin:e.spacing(0,0,0,1.5)}}}));function ee(e){var t=e.children,n=e.name,c=e.path,r=Z(),i=Object(w.g)();return Object(m.jsx)(A.a,{variant:"outlined",className:r.paper,elevation:0,onClick:function(){i.push(c)},children:Object(m.jsxs)("div",{className:r.flex,children:[t,Object(m.jsx)("p",{className:r.p,children:n})]})})}var te=n(153),ne=n.n(te),ce=n(150),re=n.n(ce);function ie(e){var t=e.options;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ne.a,{highcharts:re.a,options:t,constructorType:"stockChart"})})}function ae(e){var t=e.options;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ne.a,{highcharts:re.a,options:t})})}var oe=n(152);function le(e){var t=e.name,n=e.qty,c=e.unitPrice;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(oe.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"center"},children:Object(m.jsx)(oe.Text,{style:{color:"#292b2c"},children:n})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 55% ",padding:"4px 8px 10px"},children:Object(m.jsx)(oe.Text,{style:{color:"#292b2c"},children:t})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(m.jsx)(oe.Text,{style:{color:"#292b2c"},children:c})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 15%",padding:"4px 8px 10px",textAlign:"right"},children:Object(m.jsx)(oe.Text,{style:{color:"#292b2c"},children:c*n})})]})}var se=oe.StyleSheet.create({page:{width:"100%",display:"inline-block",padding:"16px"},flex:{display:"flex",flexDirection:"row",marginBottom:48},store:{display:"flex",flexDirection:"column",flex:"0 1 50%"},logo:{flex:"0 1 50%",display:"flex",flexDirection:"row",justifyContent:"flex-end"},billInfo:{display:"flex",flexDirection:"row"},billTo:{display:"flex",flexDirection:"column",flex:"0 1 50%",marginBottom:20},billDetails:{flex:"0 1 50%"}});function de(e){var t=e.data,n=t.client,c=t.invoiceId,r=t.products,i=t.date,a=t.total,o=t.paymentMethod,l=t.advance;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(oe.Document,{children:Object(m.jsxs)(oe.Page,{style:se.page,size:"A4",children:[Object(m.jsxs)(oe.View,{style:se.flex,children:[Object(m.jsxs)(oe.View,{style:se.store,children:[Object(m.jsx)(oe.Text,{style:{fontSize:"30px",fontWeight:"bold",marginBottom:12},children:"Jabri Store"}),Object(m.jsx)(oe.Text,{children:"Youssef Jabri"}),Object(m.jsx)(oe.Text,{children:"Bradia Centre, Fquih Ben Salah"}),Object(m.jsx)(oe.Text,{children:"23302"})]}),Object(m.jsx)(oe.View,{style:se.logo,children:Object(m.jsx)(oe.Image,{src:"https://res.cloudinary.com/datlc9ohl/image/upload/v1630519287/437794623_cmtwlm.png",style:{height:100,width:100}})})]}),Object(m.jsxs)(oe.View,{style:se.billInfo,children:[Object(m.jsxs)(oe.View,{style:se.billTo,children:[Object(m.jsx)(oe.Text,{style:{fontWeight:"bold",marginBottom:"5px"},children:"Bill To"}),Object(m.jsx)(oe.Text,{style:{color:"#292b2c"},children:n.replace(/\b\w/g,(function(e){return e.toUpperCase()}))})]}),Object(m.jsxs)(oe.View,{style:{flex:"0 1 50%"},styles:se.billDetails,children:[Object(m.jsxs)(oe.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(oe.View,{style:{flex:"0 1 40%"},children:Object(m.jsx)(oe.Text,{style:{fontWeight:"bold"},children:"Invoice"})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 60%"},children:Object(m.jsx)(oe.Text,{style:{color:"#292b2c"},children:c})})]}),Object(m.jsxs)(oe.View,{style:{marginBottom:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(oe.View,{style:{flex:"0 1 40%"},children:Object(m.jsx)(oe.Text,{style:{fontWeight:"bold"},children:"Invoice Date"})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 60%"},children:Object(m.jsx)(oe.Text,{style:{color:"#292b2c"},children:i.slice(0,i.indexOf("T"))})})]})]})]}),Object(m.jsxs)(oe.View,{style:{marginTop:"30px",backgroundColor:"#292b2c",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(oe.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"center"},children:Object(m.jsx)(oe.Text,{style:{color:"white",fontWeight:"bold"},children:"Qty"})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 55%",padding:"4px 8px"},children:Object(m.jsx)(oe.Text,{style:{color:"white",fontWeight:"bold"},children:"Description"})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(m.jsx)(oe.Text,{style:{color:"white",fontWeight:"bold"},children:"Unit Price"})}),Object(m.jsx)(oe.View,{style:{flex:"0 1 15%",padding:"4px 8px",textAlign:"right"},children:Object(m.jsx)(oe.Text,{style:{color:"white",fontWeight:"bold"},children:"Amount"})})]}),Object(m.jsx)(oe.View,{style:{display:"flex",flexDirection:"row"},children:r.map((function(e){return Object(m.jsx)(le,{name:e.product,unitPrice:e.unitPrice,qty:Object.keys(e.sizes).reduce((function(t,n){return t+e.sizes[n]}),0)},e._id)}))}),Object(m.jsx)(oe.View,{style:{justifyContent:"flex-end",textAlign:"right",display:"flex",flexDirection:"row"},children:Object(m.jsx)(oe.View,{style:{flex:"0 1 40%",marginTop:"8px"},children:Object(m.jsxs)(oe.View,{style:{backgroundColor:"#e3e3e3",padding:"5px",display:"flex",flexDirection:"row"},children:[Object(m.jsx)(oe.View,{style:{flex:"0 1 50%",padding:"5px",textAlign:"right"},children:Object(m.jsx)(oe.Text,{style:{fontWeight:"bold"},children:"TOTAL"})}),Object(m.jsxs)(oe.View,{style:{display:"flex",flexDirection:"row",flex:"0 1 50%",justifyContent:"flex-end",padding:"5px"},children:[Object(m.jsx)(oe.Text,{style:{color:"#292b2c",fontWeight:"bold",marginLeft:"30px"},children:"$"}),Object(m.jsx)(oe.Text,{style:{fontWeight:"bold",color:"#292b2c"},children:a})]})]})})}),Object(m.jsxs)(oe.View,{style:{marginTop:"30px",display:"block"},children:[Object(m.jsx)(oe.Text,{style:{flex:"0 1 100%",fontWeight:"bold",fontSize:"20px"},children:"Notes"}),Object(m.jsxs)(oe.Text,{style:{flex:"0 1 100%",marginLeft:"16px",color:"#292b2c"},children:["Payment Method: ",o]}),Object(m.jsxs)(oe.Text,{style:{flex:"0 1 100%",marginLeft:"16px",color:"#292b2c"},children:["Advance: ",l]})]})]})})})}},186:function(e,t){},187:function(e,t){},188:function(e,t){},189:function(e,t){},190:function(e,t){},374:function(e,t,n){"use strict";n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return u}));var c=n(13),r=n.n(c),i=n(24),a=n(23),o=n.n(a),l=n(11),s=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:l.l}),e.prev=1,e.next=4,o.a.get("https://manage-commerce.herokuapp.com/api/sales/all");case 4:n=e.sent,c=n.data,t({type:l.m,payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:l.k,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var c,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.b}),t.prev=1,c=e.map((function(e){return Object.keys(e).filter((function(e){return"_id"!==e&&"createdAt"!==e&&"updatedAt"!==e})).reduce((function(t,n){return t[n]=e[n],t}),{})})),t.next=5,o.a.post("https://manage-commerce.herokuapp.com/api/sales/add",c);case 5:i=t.sent,n({type:l.c,payload:i}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:l.a,payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.h}),t.prev=1,t.next=4,o.a.delete("https://manage-commerce.herokuapp.com/api/sales/delete/".concat(e));case 4:c=t.sent,n({type:l.i,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:l.g,payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:l.e}),t.prev=1,t.next=4,o.a.put("https://manage-commerce.herokuapp.com/api/sales/confirm",e);case 4:c=t.sent,n({type:l.f,payload:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:l.d,payload:t.t0.message});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(t){t({type:"SELECT_PROD",payload:e})}},j=function(){return function(e){e({type:l.j})}}}}]);
//# sourceMappingURL=7.0803d8af.chunk.js.map