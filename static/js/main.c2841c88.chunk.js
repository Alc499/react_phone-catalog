(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(62)},33:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(25),i=a.n(l),s=a(3),r=a(16),o=a(8),m=a(9),u=a(11),h=a(10),p=a(12),d=(a(33),a(13)),E=a(7),f=a.n(E),_=a(14),g=a(17),b=a.n(g),y=(a(59),function(){var e=Object(_.a)(f.a.mark(function e(){var t,a=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"","https://mate-academy.github.io","/phone-catalogue-static/api/phones",e.abrupt("return",fetch("".concat("https://mate-academy.github.io").concat("/phone-catalogue-static/api/phones").concat(t,".json")).then(function(e){return e.json()}));case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),v=function(e){var t=e.phones,a=e.addPhone,n=e.selectedPhones,l=e.increaseQuantity,i=e.decreaseQuantity;return c.a.createElement("div",{className:"phones-catalog"},c.a.createElement("h1",null,"Phones"),t.map(function(e){return c.a.createElement("article",{key:e.id,className:"phone-card"},c.a.createElement(s.b,{to:"/details/".concat(e.id)},c.a.createElement("img",{src:e.imageUrl,alt:"phone",className:"phone-card__img"})),c.a.createElement(s.b,{to:"/details/".concat(e.id)},e.name),c.a.createElement("p",null,e.snippet),n.find(function(t){return t.id===e.id})?c.a.createElement(c.a.Fragment,null,n.filter(function(t){return t.id===e.id}).map(function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("button",{type:"button",name:"-",className:"cart-btn phone-card__minus-btn quantity-btn",onClick:function(){return i(e.id)}},"-"),c.a.createElement("div",{className:"phone-card__quantity"},"".concat(e.quantity,"\n                        ").concat(e.quantity>1?"items":"item","\n                      ")),c.a.createElement("button",{type:"button",name:"+",className:"cart-btn phone-card__plus-btn quantity-btn",onClick:function(){return l(e.id)}},"+"))})):c.a.createElement("button",{type:"button",className:"cart-btn",onClick:function(){return a(e)}},"Add to basket"))}))},N=function(e){var t=e.filterValue,a=e.handleFilter,n=e.getSortedPhones;return c.a.createElement("div",{className:"filter"},c.a.createElement("div",null,c.a.createElement("label",{htmlFor:"filter-input"},"Search:",c.a.createElement("input",{type:"text",id:"filter-input",className:"filter__input",value:t,onChange:a}))),c.a.createElement("div",{className:"filter__selector"},c.a.createElement("label",{htmlFor:"sort-field"},"Sort by:",c.a.createElement("select",{id:"sort-field",name:"sort-field",className:"filter__selector-sorting",onChange:n},c.a.createElement("option",{value:"age"},"Newest"),c.a.createElement("option",{value:"alphabet"},"Alphabetical")))))},P=function(e){for(var t=e.phonesPerPage,a=e.totalPhones,n=e.changeCurrentPage,l=Math.ceil(a/t),i=[],s=1;s<=l;s+=1)i.push(s);return c.a.createElement("ul",{className:"pagination"},i.map(function(e){return c.a.createElement("li",{key:e},c.a.createElement("button",{type:"button",className:"pagination__page",value:e,onClick:n},e))}))},k=function(e){var t=e.changePerPageAmmount;return c.a.createElement("label",{htmlFor:"posts-ammount"},"Posts Ammount:",c.a.createElement("select",{id:"posts-ammount",onChange:t,className:"pagination__posts-ammount",defaultValue:5},c.a.createElement("option",{value:5},"5"),c.a.createElement("option",{value:10},"10"),c.a.createElement("option",{value:20},"20")))},S=function(e,t){switch(t){case"age":return Object(r.a)(e).sort(function(e,t){return e.age-t.age});case"alphabet":return Object(r.a)(e).sort(function(e,t){return e.name.localeCompare(t.name)});default:return e}},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={phones:[],isLoaded:!1},a.loadData=Object(_.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,a.setState({phones:t,isLoaded:!0});case 4:case"end":return e.stop()}},e)})),a.handleFilter=function(e){var t=e.target.value,n=a.props,c=n.location,l=n.history,i=new URLSearchParams(c.search);""===t?i.delete("querry"):i.set("querry",t),i.set("page",1),l.push({pathname:"/phones",search:"?".concat(i.toString())})},a.filterPhones=function(e){return a.state.phones.filter(function(t){return(t.id+t.snippet).toLowerCase().includes(e.trim())})},a.handleSort=function(e){var t=e.target.value,n=a.props,c=n.location,l=n.history,i=new URLSearchParams(c.search);i.set("sort",t),l.push({pathname:"/phones",search:"?".concat(i.toString())})},a.changeCurrentPage=function(e){var t=e.target.value,n=a.props,c=n.location,l=n.history,i=new URLSearchParams(c.search);i.set("page",t),l.push({pathname:"/phones",search:"?".concat(i.toString())})},a.changePerPageAmmount=function(e){var t=e.target.value,n=a.props,c=n.location,l=n.history,i=new URLSearchParams(c.search);i.set("perPage",t),i.set("page",1),l.push({pathname:"/phones",search:"?".concat(i.toString())})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this.state.isLoaded,t=this.props,a=t.addPhone,n=t.selectedPhones,l=t.increaseQuantity,i=t.decreaseQuantity,s=t.location,r=new URLSearchParams(s.search),o=r.get("perPage"),m=r.get("page"),u=r.get("querry")?r.get("querry"):"",h=r.get("sort"),p=this.filterPhones(u),d=S(p,h),E=m*o-o,f=m*o;return c.a.createElement("div",null,e?c.a.createElement("main",{className:"page-content"},c.a.createElement(N,{filterValue:u,handleFilter:this.handleFilter,getSortedPhones:this.SortPhones}),c.a.createElement("div",{className:"page-content__catalog"},c.a.createElement("div",{className:"pagination-and-selector"},c.a.createElement(P,{phonesPerPage:o,totalPhones:d.length,changeCurrentPage:this.changeCurrentPage}),c.a.createElement(k,{changePerPageAmmount:this.changePerPageAmmount})),c.a.createElement(v,{phones:d.slice(E,f),addPhone:a,selectedPhones:n,increaseQuantity:l,decreaseQuantity:i}),c.a.createElement(P,{phonesPerPage:o,totalPhones:d.length,changeCurrentPage:this.changeCurrentPage}),c.a.createElement("div",{className:"page-content__with-info"},"".concat(E+1," - ").concat(f<=d.length?f:d.length," of ").concat(d.length," posts")))):c.a.createElement(b.a,{type:"ThreeDots",color:"#049dfcde"}))}}]),t}(c.a.Component),C=Object(d.f)(w),j=function(){return c.a.createElement("h1",{className:"home-page-title"},"Welcome!")},O=a(21),q=a.n(O),Q=function(e){var t=e.isVisible,a=e.toggleParams,n=e.details;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",{className:"phone__params"},c.a.createElement("button",{type:"button",onClick:a,className:"cart-btn params-toggle-btn"},"Hide specifications"),c.a.createElement("ul",{className:"phone__params-list"},c.a.createElement("li",null,c.a.createElement("h3",null,"Availability"),c.a.createElement("ul",{className:"phone__specifications"},n.availability.filter(function(e){return""!==e}).length>0?n.availability.map(function(e){return c.a.createElement("li",null,e.replace(",",""))}):"-")),c.a.createElement("li",null,c.a.createElement("h3",null,"Battery"),c.a.createElement("ul",null,c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Stand by time:"),c.a.createElement("div",null,n.battery.standbyTime)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Talk-time: "),c.a.createElement("div",null,n.battery.talkTime)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Type: "),c.a.createElement("div",null,n.battery.type)))),c.a.createElement("li",null,c.a.createElement("h3",null,"Camera"),c.a.createElement("ul",null,c.a.createElement(c.a.Fragment,null,n.camera.features.filter(function(e){return""!==e}).length>0?c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Features:"),c.a.createElement("ul",{className:"phone__specifications-list"},n.camera.features.map(function(e){return c.a.createElement("li",null,e)}))):"-"),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Primary: "),c.a.createElement("div",null,n.camera.primary?"".concat(n.camera.primary):"-")))),c.a.createElement("li",null,c.a.createElement("h3",null,"Connectivity"),c.a.createElement("ul",null,c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Bluetooth: "),c.a.createElement("div",null,n.connectivity.bluetooth)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Cell: "),c.a.createElement("div",null,n.connectivity.cell)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"GPS: "),c.a.createElement("div",null,n.connectivity.gps?"Yes":"No")),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"infrared: "),c.a.createElement("div",null,n.connectivity.infrared?"Yes":"No")),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Wi-Fi: "),c.a.createElement("div",null,n.connectivity.wifi)))),c.a.createElement("li",null,c.a.createElement("h3",null,"Display"),c.a.createElement("ul",null,c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Screen resolution:"),c.a.createElement("div",null,n.display.screenResolution)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Screen size: "),c.a.createElement("div",null,n.display.screenSize)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"TouchScreen: "),c.a.createElement("div",null,n.display.touchScreen)))),c.a.createElement("li",null,c.a.createElement("h3",null,"Hardware"),c.a.createElement("ul",null,c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Accelerometer:"),c.a.createElement("div",null,n.hardware.accelerometer?"Yes":"No")),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Audio Jack: "),c.a.createElement("div",null,n.hardware.audioJack)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"CPU: "),c.a.createElement("div",null,n.hardware.cpu)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"FM-radio: "),c.a.createElement("div",null,n.hardware.fmRadio?"Yes":"No")),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Physical keyboard:"),c.a.createElement("div",null,n.hardware.physicalKeyboard?"Yes":"No")),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"USB: "),c.a.createElement("div",null,n.hardware.usb)))),c.a.createElement("li",null,c.a.createElement("h3",null,"Storage"),c.a.createElement("ul",null,c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Flash: "),c.a.createElement("div",null,n.storage.flash)),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"RAM: "),c.a.createElement("div",null,n.storage.ram)))),c.a.createElement("li",null,c.a.createElement("h3",null,"Size and weigth"),c.a.createElement("ul",null,c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Dimensions: "),c.a.createElement("ul",{className:"phone__specifications-list"},n.sizeAndWeight.dimensions.map(function(e){return c.a.createElement("li",{key:e},e)}))),c.a.createElement("li",{className:"phone__specifications"},c.a.createElement("h4",{className:"phone__specifications-title"},"Weight: "),c.a.createElement("div",null,n.sizeAndWeight.weight)))))):c.a.createElement("div",{className:"phone__params"},c.a.createElement("button",{type:"button",onClick:a,className:"cart-btn params-toggle-btn"},"Show specifications")))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={imageNumber:0,isVisible:!1},a.switchImage=function(e){a.setState({imageNumber:e})},a.toggleParams=function(){a.setState(function(e){return{isVisible:!e.isVisible}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.details,n=t.addPhone,l=t.selectedPhones,i=t.history,s=t.increaseQuantity,r=t.decreaseQuantity,o=this.state,m=o.imageNumber,u=o.isVisible;return c.a.createElement("div",{className:"phone"},c.a.createElement("div",{className:"phone__main-info"},c.a.createElement("div",{className:"phone__images"},a.images.map(function(e,t){return c.a.createElement("img",{className:q()("phone__images-img",{"phone__images-img-selected":m===t}),src:e,alt:"phone",key:e})})),c.a.createElement("h2",{className:"phone__title"},a.name),c.a.createElement("p",{className:"phone__description"},a.description),c.a.createElement("ul",{className:"phone-thumbs"},a.images.map(function(t,a){return c.a.createElement("li",{key:t},c.a.createElement("img",{onClick:function(){return e.switchImage(a)},className:q()("phone-thumbs__img",{"phone-thumbs__img-selected":m===a}),src:t,alt:"phone"}))})),l.find(function(e){return e.id===a.id})?c.a.createElement(c.a.Fragment,null,l.filter(function(e){return e.id===a.id}).map(function(e){return c.a.createElement("div",{key:e.id,className:"phone__quantity-btns-wrapper"},c.a.createElement("div",{className:"quantity-btns"},c.a.createElement("button",{type:"button",name:"-",className:" cart-btn phone-card__minus-btn quantity-btns__btn ",onClick:function(){return r(e.id)}},"-"),c.a.createElement("div",{className:"phone__quantity"},"".concat(e.quantity,"\n                            ").concat(e.quantity>1?"items":"item","\n                          ")),c.a.createElement("button",{type:"button",name:"+",className:" cart-btn phone-card__plus-btn quantity-btns__btn ",onClick:function(){return s(e.id)}},"+")))})):c.a.createElement("button",{type:"button",className:"cart-btn return-and-add-btn",onClick:function(){return n(a)}},"Add to basket"),c.a.createElement("button",{type:"button",className:"cart-btn return-and-add-btn",onClick:function(){return i.goBack()}},"Return to catalog")),c.a.createElement(Q,{isVisible:u,toggleParams:this.toggleParams,details:a}))}}]),t}(c.a.Component),F=Object(d.f)(A),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={phoneDetails:{},isLoaded:!1,error:""},a.loadData=Object(_.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.phoneId,e.prev=1,e.next=4,y("/".concat(t));case 4:n=e.sent,a.setState({phoneDetails:n,isLoaded:!0}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a.setState({error:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])})),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"render",value:function(){var e=this.state,t=e.phoneDetails,a=e.isLoaded,n=e.error,l=this.props,i=l.addPhone,s=l.selectedPhones,r=l.increaseQuantity,o=l.decreaseQuantity;return c.a.createElement("div",null,n?c.a.createElement("h2",null,"Phone was not found"):c.a.createElement(c.a.Fragment,null,a?c.a.createElement(F,{details:t,addPhone:i,selectedPhones:s,increaseQuantity:r,decreaseQuantity:o}):c.a.createElement(b.a,{type:"ThreeDots",color:"#049dfcde"})))}}]),t}(c.a.Component),D=function(e){var t=e.selectedPhones,a=e.removePhone,n=e.decreaseQuantity,l=e.increaseQuantity;return c.a.createElement("div",null,c.a.createElement("h1",{className:"basket-page__title"},"Added items"),t.length<1?c.a.createElement("p",{className:"basket-page__text"},"Shopping Cart is empty"):c.a.createElement("ul",{className:"basket-page__shopping-list"},t.map(function(e){return c.a.createElement("li",{className:"phone-card"},c.a.createElement(s.b,{to:"/".concat(e.id)},c.a.createElement("img",{src:e.image,alt:"phone",className:"basket-page__shopping-list-img"})),c.a.createElement(s.b,{to:"/details/".concat(e.id),className:"basket-page__shopping-list-item-link"},e.id),c.a.createElement("div",{className:"basket-page__change-quantity-btns"},c.a.createElement("button",{type:"button",name:"-",className:" cart-btn basket-page__change-quantity-btns-btn quantity-btn ",onClick:function(){return n(e.id)}},"-"),c.a.createElement("div",{className:"basket-page__shopping-list-quantity"},"".concat(e.quantity,"\n                    ").concat(e.quantity>1?"items":"item","\n                  ")),c.a.createElement("button",{type:"button",name:"+",className:" cart-btn basket-page__change-quantity-btns-btn quantity-btn ",onClick:function(){return l(e.id)}},"+")),c.a.createElement("button",{type:"button",className:"cart-btn basket-page__shopping-list-remove-btn",onClick:function(){return a(e.id)}},"remove"))})))},L=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Page is not found"),c.a.createElement("p",null,"Please, return to the "),c.a.createElement(s.c,{to:"/"},"Home page"))},I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={selectedPhones:[]},a.addPhone=function(e){a.setState(function(t){return{selectedPhones:[].concat(Object(r.a)(t.selectedPhones),[{id:e.id,quantity:1,image:e.imageUrl||e.images[0]}])}})},a.removePhone=function(e){a.setState(function(t){return{selectedPhones:t.selectedPhones.filter(function(t){return t.id!==e})}})},a.increaseQuantity=function(e){return a.setState(function(t){return t.selectedPhones.filter(function(t){return t.id===e})[0].quantity+=1,{selectedPhones:t.selectedPhones}})},a.decreaseQuantity=function(e){return a.setState(function(t){return t.selectedPhones.filter(function(t){return t.id===e})[0].quantity-=1,{selectedPhones:t.selectedPhones.filter(function(e){return e.quantity>0})}})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("selectedPhones")&&this.setState({selectedPhones:JSON.parse(localStorage.getItem("selectedPhones"))})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("selectedPhones",JSON.stringify(this.state.selectedPhones))}},{key:"render",value:function(){var e=this,t=this.state.selectedPhones;return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("nav",{className:"navigation"},c.a.createElement("ul",null,c.a.createElement("li",{className:"navigation__list-paragraph"},c.a.createElement(s.c,{to:"/",exact:!0,className:"navigation__link",activeClassName:"is-active"},"Home")),c.a.createElement("li",{className:"navigation__list-paragraph"},c.a.createElement(s.c,{to:{pathname:"/phones",search:"page=1&perPage=5&sort=age"},exact:!0,className:"navigation__link",activeClassName:"is-active"},"Phones"))),c.a.createElement("div",{className:"navigation__list-paragraph"},c.a.createElement(s.c,{to:"/basket",exact:!0,className:"navigation__link basket",activeClassName:"is-active"},c.a.createElement("img",{src:"img/basket.png",className:"basket__img",alt:"basket"})),t.length>0?c.a.createElement("span",{className:"basket__added-items-quantity"},t.length):c.a.createElement(c.a.Fragment,null)))),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0,component:j}),c.a.createElement(d.a,{path:"/phones",exact:!0,render:function(){return c.a.createElement(C,{addPhone:e.addPhone,selectedPhones:t,increaseQuantity:e.increaseQuantity,decreaseQuantity:e.decreaseQuantity})}}),c.a.createElement(d.a,{path:"/details/:phoneId",exact:!0,render:function(a){var n=a.match;return c.a.createElement(x,{phoneId:n.params.phoneId,addPhone:e.addPhone,selectedPhones:t,increaseQuantity:e.increaseQuantity,decreaseQuantity:e.decreaseQuantity})}}),c.a.createElement(d.a,{path:"/basket",exact:!0,render:function(){return c.a.createElement(D,{selectedPhones:t,removePhone:e.removePhone,increaseQuantity:e.increaseQuantity,decreaseQuantity:e.decreaseQuantity})}}),c.a.createElement(d.a,{component:L})))}}]),t}(c.a.Component);i.a.render(c.a.createElement(s.a,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c2841c88.chunk.js.map