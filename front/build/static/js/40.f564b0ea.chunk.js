(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[40],{392:function(e,t,r){"use strict";r.d(t,"e",(function(){return u})),r.d(t,"a",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"d",(function(){return f}));var a=r(13),n=r.n(a),o=r(24),l=r(23),i=r.n(l),c=r(16),s="https://manage-commerce.herokuapp.com",u=function(){return function(){var e=Object(o.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:c.j}),e.prev=1,e.next=4,i.a.get("".concat(s,"/api/spending/all"));case 4:r=e.sent,a=r.data,t({type:c.k,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:c.i,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a,o;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:c.b}),t.prev=1,t.next=4,i.a.post("".concat(s,"/api/spending/add"),e);case 4:a=t.sent,o=a.data,r({type:c.c,payload:o}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r({type:c.a,payload:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(t){t({type:c.h,payload:e})}},b=function(e){return function(){var t=Object(o.a)(n.a.mark((function t(r){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:c.e}),t.prev=1,t.next=4,i.a.delete("".concat(s,"/api/spending/delete/").concat(e));case 4:a=t.sent,r({type:c.f,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r({type:c.d,payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},f=function(){return function(e){e({type:c.g})}}},993:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var a=r(0),n=r(36),o=r(1),l=r(938),i=r(118),c=r(953),s=r(967),u=r(4),p=r(151),d=r(150),b=r.n(d),f=r(28),g=r(374),j=r(392),h=r(114),x=r(3),y=Object(i.a)((function(e){return{container:{width:"95%",margin:e.spacing(0,"auto")},paper:{padding:e.spacing(2),marginBottom:e.spacing(1)},title:{fontWeight:700},subtitle:{color:e.palette.primary.light},details:{padding:e.spacing(2),marginBottom:e.spacing(1)},progress:{padding:e.spacing(2)},flex:{display:"flex",justifyContent:"space-between",alignItems:"center"},salesSubtitle:{color:e.palette.success.light,margin:0},salesTitle:{fontWeight:700,fontSize:22},earningTitle:{color:e.palette.success.dark,fontWeight:700,fontSize:22},spendingsSubtitle:{color:e.palette.error.light,margin:0},spendingsTitle:{color:e.palette.error.dark,fontWeight:700,fontSize:22}}}));function m(){var e=Object(u.g)(),t=y(),r=Object(f.b)(),i=Object(f.c)((function(e){return e.salesReducer})),d=i.sales,m=i.error,v=Object(f.c)((function(e){return e.spendingsReducer})).spendings,O=Object(h.a)();Object(o.useEffect)((function(){r(Object(g.f)()),r(Object(j.e)())}),[r]);var C={credits:{enabled:!1},rangeSelector:{selected:1},title:{text:"Earnings",align:"left",style:{fontSize:"20px",color:"#5c5c5c"}},series:[{name:"Earning",data:Object(n.a)(d.map((function(e){return[new Date(e.createdAt).getTime(),e.soldPrice-e.price]}))),dataGrouping:{approximation:"sum",forced:!0,groupAll:!0,units:[["day",[1]]]},color:"green",type:"areaspline",threshold:null,tooltip:{valueDecimals:2},fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[1,b.a.getOptions().colors[1]],[1,b.a.color(b.a.getOptions().colors[1]).setOpacity(0).get("rgba")]]}}]},k=Object(a.a)(Object(a.a)({},C),{},{colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"},plotBorderColor:"#606063"},title:Object(a.a)(Object(a.a)({},C.title),{},{style:{color:"#E0E0E3",textTransform:"uppercase",fontSize:"20px"}}),subtitle:{style:{color:"#E0E0E3",textTransform:"uppercase"}},xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",title:{style:{color:"#A0A0A3"}}},yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},lineColor:"#707073",minorGridLineColor:"#505053",tickColor:"#707073",tickWidth:1,title:{style:{color:"#A0A0A3"}}},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",style:{color:"#F0F0F0"}},plotOptions:{series:{dataLabels:{color:"#F0F0F3",style:{fontSize:"13px"}},marker:{lineColor:"#333"}},boxplot:{fillColor:"#505053"},candlestick:{lineColor:"white"},errorbar:{color:"white"}},legend:{backgroundColor:"rgba(0, 0, 0, 0.5)",itemStyle:{color:"#E0E0E3"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#606063"},title:{style:{color:"#C0C0C0"}}},labels:{style:{color:"#707073"}},drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},activeDataLabelStyle:{color:"#F0F0F3"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:"#505053"}}},rangeSelector:Object(a.a)(Object(a.a)({},C.rangeSelector),{},{buttonTheme:{fill:"#505053",stroke:"#000000",style:{color:"#CCC"},states:{hover:{fill:"#707073",stroke:"#000000",style:{color:"white"}},select:{fill:"#000003",stroke:"#000000",style:{color:"white"}}}},inputBoxBorderColor:"#505053",inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}}),navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",buttonBorderColor:"#606063",rifleColor:"#FFF",trackBackgroundColor:"#404043",trackBorderColor:"#404043"}});if(m)return Object(x.jsx)("div",{children:m});var F=null===d||void 0===d?void 0:d.reduce((function(e,t){return e+t.soldPrice}),0),S=null===v||void 0===v?void 0:v.reduce((function(e,t){return e+t}),0),E=null===d||void 0===d?void 0:d.reduce((function(e,t){return e+(t.soldPrice-t.price)}),0),B=F-S;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(p.k,{handleBack:function(){e.push("/admin")}}),Object(x.jsxs)("div",{className:t.container,children:[Object(x.jsxs)(c.a,{className:t.paper,children:[Object(x.jsx)(s.a,{variant:"h6",component:"h2",className:t.subtitle,align:"center",children:"Total Balance"}),Object(x.jsx)(s.a,{variant:"h5",component:"h3",align:"center",children:Object(x.jsx)(l.a,{value:B,displayType:"text",thousandSeparator:!0,suffix:"DH",className:t.title})})]}),Object(x.jsx)(c.a,{className:t.paper,children:Object(x.jsxs)("div",{className:t.flex,children:[Object(x.jsx)(s.a,{variant:"h6",className:t.title,children:"Sales"}),Object(x.jsx)(s.a,{className:t.salesTitle,variant:"subtitle2",children:Object(x.jsx)(l.a,{value:F,displayType:"text",thousandSeparator:!0,suffix:"DH"})})]})}),Object(x.jsx)(c.a,{className:t.paper,children:Object(x.jsxs)("div",{className:t.flex,children:[Object(x.jsx)(s.a,{className:t.title,variant:"h6",children:"Spendings"}),v&&Object(x.jsx)(s.a,{className:t.spendingsTitle,variant:"subtitle2",children:Object(x.jsx)(l.a,{value:S,displayType:"text",thousandSeparator:!0,suffix:"DH"})})]})}),Object(x.jsx)(c.a,{className:t.paper,children:Object(x.jsxs)("div",{className:t.flex,children:[Object(x.jsx)(s.a,{className:t.title,variant:"h6",children:"Earnings"}),Object(x.jsx)(s.a,{className:t.earningTitle,variant:"subtitle2",children:Object(x.jsx)(l.a,{value:E,displayType:"text",thousandSeparator:!0,suffix:"DH"})})]})}),Object(x.jsx)(p.g,{options:"light"===O.palette.type?C:k})]})]})}}}]);
//# sourceMappingURL=40.f564b0ea.chunk.js.map