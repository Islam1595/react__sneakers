(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__2jr9s",overlayVisible:"Drawer_overlayVisible__1Cxjq",drawer:"Drawer_drawer__22aYZ",items:"Drawer_items__1y-ya"}},20:function(e,t,c){e.exports={card:"Card_card__2ieUt",plus:"Card_plus__kACHO",favorite:"Card_favorite__35ugW"}},42:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(14),s=c(34),i=c.n(s),o=(c(42),c(43),c(11)),l=c(12),d=c(7),j=c.n(d),u=c(13),b=c(4),x=c(2),m=c(5),h=c.n(m),f=a.a.createContext({}),p=function(){var e=a.a.useContext(f),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},O=c(1);var v=function(e){var t=p().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(O.jsx)(n.b,{to:"/",children:Object(O.jsxs)("div",{className:"d-flex align-center",children:[Object(O.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:"\u041e\u0448\u0438\u0431\u043a\u0430!"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"REACT SNEAKERS"}),Object(O.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u0430\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(O.jsxs)("ul",{className:"d-flex",children:[Object(O.jsxs)("li",{onClick:e.onClickCart,className:"mr-30 cu-p",children:[Object(O.jsx)("img",{width:18,height:18,src:"img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(O.jsxs)("span",{children:[t," \u0440\u0443\u0431"]})]}),Object(O.jsx)("li",{className:"mr-20 cu-p",children:Object(O.jsx)(n.b,{to:"/favorites",children:Object(O.jsx)("img",{width:18,height:18,src:"img/heart.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/orders",children:Object(O.jsx)("img",{width:18,height:18,src:"img/User.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c!"})})})]})]})},g=function(e){var t=e.title,c=e.image,r=e.description,n=a.a.useContext(f).setCartOpened;return Object(O.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(O.jsx)("img",{className:"mb-20",width:"120px",height:"120px",src:c,alt:"Empty"}),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{className:"opacity-6",children:r}),Object(O.jsxs)("button",{onClick:function(){return n(!1)},className:"greenbutton",children:[Object(O.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},N=c(19),k=c.n(N),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var C=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=p(),o=i.cartItems,l=i.setCartItems,d=i.totalPrice,x=a.a.useState(!1),m=Object(b.a)(x,2),f=m[0],v=m[1],N=a.a.useState(null),C=Object(b.a)(N,2),y=C[0],I=C[1],S=a.a.useState(!1),_=Object(b.a)(S,2),A=_[0],T=_[1],F=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T(!0),e.next=4,h.a.post("https://610805f6d73c6400170d37b0.mockapi.io/orders",{items:o});case 4:t=e.sent,c=t.data,I(c.id),v(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return a=o[r],e.next=14,h.a.delete("https://610805f6d73c6400170d37b0.mockapi.io/carts/"+a.id);case 14:return e.next=16,w(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 :(");case 24:T(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"".concat(k.a.overlay," ").concat(s?k.a.overlayVisible:""),children:Object(O.jsxs)("div",{className:k.a.drawer,children:[Object(O.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(O.jsx)("img",{className:"cu-p",src:"img/btn-remove.svg",alt:"Remove",onClick:t})]}),n.length>0?Object(O.jsxs)("div",{className:"d-flex flex-column flex",children:[Object(O.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(O.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("p",{className:"mb-5",children:e.title}),Object(O.jsxs)("b",{children:[e.price," "]})]}),Object(O.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.id)}))}),Object(O.jsxs)("div",{className:"cartTotalBlock",children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{className:"d-flex",children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d," \u0440\u0443\u0431. "]})]}),Object(O.jsxs)("li",{className:"d-flex",children:[Object(O.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%: "}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d/100*5," \u0440\u0443\u0431. "]})]})]}),Object(O.jsxs)("button",{disabled:A,onClick:F,className:"greenbutton",children:[" \u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437",Object(O.jsx)("img",{src:"img/arrow.svg",alt:"arrow"})]})]})]}):Object(O.jsx)(g,{title:f?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:f?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(y," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.",image:f?"img/complete-order.jpg":"img/empty-cart.jpg"})]})})},y=c(36),I=c(37),S=c(20),_=c.n(S);var A=function(e){var t=e.id,c=e.title,r=e.imageUrl,n=e.price,s=e.onFavorite,i=e.onPlus,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(f).isItemAdded,x=a.a.useState(l),m=Object(b.a)(x,2),h=m[0],p=m[1],v={id:t,title:c,parentId:t,imageUrl:r,price:n};return Object(O.jsx)("div",{className:_.a.card,children:j?Object(O.jsxs)(I.a,{speed:2,width:170,height:217,viewBox:"0 0 170 217",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"91"}),Object(O.jsx)("rect",{x:"0",y:"107",rx:"10",ry:"10",width:"150",height:"15"}),Object(O.jsx)("rect",{x:"-2",y:"181",rx:"10",ry:"10",width:"80",height:"24"}),Object(O.jsx)("rect",{x:"121",y:"181",rx:"10",ry:"10",width:"32",height:"32"}),Object(O.jsx)("rect",{x:"0",y:"133",rx:"10",ry:"10",width:"100",height:"15"})]}):Object(O.jsxs)(O.Fragment,{children:[s&&Object(O.jsx)("div",{classnName:_.a.favorite,onClick:function(){s(v),p(!h)},children:Object(O.jsx)("img",{src:h?"img/unliked.svg":"img/liked.svg",alt:"\u041e\u0448\u0438\u0431\u043a\u0430!"})}),Object(O.jsx)("img",{width:133,height:112,src:r,alt:"Sneakers"}),Object(O.jsx)("h5",{children:c}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"}),Object(O.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(O.jsx)("img",{className:_.a.plus,onClick:function(){i(v)},src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus!"})]})]})})};var T=function(e){Object(y.a)(e);var t=a.a.useContext(f),c=t.favorites,r=t.onAddToFavorite;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:c.map((function(e,t){return Object(O.jsx)(A,Object(o.a)({favorited:!0,onFavorite:r},e),t)}))})]})};var F=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(O.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"img/sneakers/search.svg",alt:"Search"}),c&&Object(O.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(O.jsx)("input",{onChange:a,value:c,placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(l.a)(Array(8)):e).map((function(e,t){return Object(O.jsx)(A,Object(o.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var P=function(){var e=a.a.useContext(f),t=(e.onAddToFavorite,e.onAddToCart,a.a.useState([])),c=Object(b.a)(t,2),r=c[0],n=c[1],s=a.a.useState(!0),i=Object(b.a)(s,2),d=i[0],x=i[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://610805f6d73c6400170d37b0.mockapi.io/orders");case 3:t=e.sent,c=t.data,n(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),x(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(O.jsxs)("div",{className:"content p-40",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap",children:(d?Object(l.a)(Array(8)):r).map((function(e,t){return Object(O.jsx)(A,Object(o.a)({loading:d},e),t)}))})]})};var E=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=a.a.useState([]),p=Object(b.a)(m,2),g=p[0],N=p[1],k=a.a.useState(""),w=Object(b.a)(k,2),y=w[0],I=w[1],S=a.a.useState(!1),_=Object(b.a)(S,2),A=_[0],E=_[1],V=a.a.useState(!0),R=Object(b.a)(V,2),U=R[0],B=R[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://610805f6d73c6400170d37b0.mockapi.io/carts"),h.a.get("https://610805f6d73c6400170d37b0.mockapi.io/favorite"),h.a.get("https://610805f6d73c6400170d37b0.mockapi.io/Items")]);case 3:t=e.sent,c=Object(b.a)(t,3),a=c[0],n=c[1],s=c[2],B(!1),d(a.data),N(n.data),r(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ;("),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,h.a.delete("https://610805f6d73c6400170d37b0.mockapi.io/carts/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,h.a.post("https://610805f6d73c6400170d37b0.mockapi.io/carts",t);case 11:r=e.sent,a=r.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(o.a)(Object(o.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}h.a.delete("https://610805f6d73c6400170d37b0.mockapi.io/favorite/".concat(t.id)),N((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,h.a.post("https://610805f6d73c6400170d37b0.mockapi.io/favorite",t);case 8:c=e.sent,r=c.data,N((function(e){return[].concat(Object(l.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(f.Provider,{value:{items:c,cartItems:i,favorites:g,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToCart:D,onAddToFavorite:L,setCartOpened:E,setCartItems:d},children:Object(O.jsxs)("div",{className:"wrapper clear",children:[Object(O.jsx)(C,{items:i,onClose:function(){return E(!1)},onRemove:function(e){try{h.a.delete("https://610805f6d73c6400170d37b0.mockapi.io/carts/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.parentId)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:A}),Object(O.jsx)(v,{onClickCart:function(){return E(!0)}}),Object(O.jsx)(x.a,{path:"",exact:!0,children:Object(O.jsx)(F,{cartItems:i,items:c,searchValue:y,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToFavorite:L,onAddToCart:D,isLoading:U})}),Object(O.jsx)(x.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(x.a,{path:"/orders",exact:!0,children:Object(O.jsx)(P,{})})]})})};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(n.a,{children:Object(O.jsx)(E,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.fb54447c.chunk.js.map