(function(t){function s(s){for(var e,l,n=s[0],c=s[1],_=s[2],o=0,u=[];o<n.length;o++)l=n[o],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&u.push(i[l][0]),i[l]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);v&&v(s);while(u.length)u.shift()();return r.push.apply(r,_||[]),a()}function a(){for(var t,s=0;s<r.length;s++){for(var a=r[s],e=!0,l=1;l<a.length;l++){var c=a[l];0!==i[c]&&(e=!1)}e&&(r.splice(s--,1),t=n(n.s=a[0]))}return t}var e={},i={app:0},r=[];function l(t){return n.p+"js/"+({}[t]||t)+"."+{"chunk-1f16bf16":"be5e4ba1","chunk-2d0d7876":"121defd4","chunk-2d216979":"38524848","chunk-2d21b262":"e0ffeee4","chunk-46465e42":"b4ade51a","chunk-71713ebe":"d0b3ab8b"}[t]+".js"}function n(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var s=[],a=i[t];if(0!==a)if(a)s.push(a[2]);else{var e=new Promise((function(s,e){a=i[t]=[s,e]}));s.push(a[2]=e);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=l(t);var _=new Error;r=function(s){c.onerror=c.onload=null,clearTimeout(o);var a=i[t];if(0!==a){if(a){var e=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;_.message="Loading chunk "+t+" failed.\n("+e+": "+r+")",_.name="ChunkLoadError",_.type=e,_.request=r,a[1](_)}i[t]=void 0}};var o=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(s)},n.m=t,n.c=e,n.d=function(t,s,a){n.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,s){if(1&s&&(t=n(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)n.d(a,e,function(s){return t[s]}.bind(null,e));return a},n.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(s,"a",s),s},n.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],_=c.push.bind(c);c.push=s,c=c.slice();for(var o=0;o<c.length;o++)s(c[o]);var v=_;r.push([0,"chunk-vendors"]),a()})({0:function(t,s,a){t.exports=a("56d7")},"56d7":function(t,s,a){"use strict";a.r(s);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("8c32");var e=a("2b0e"),i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrapper",attrs:{id:"app wrapper"}},[a("Header"),a("router-view"),a("Footer")],1)},r=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"footer",attrs:{id:"footer"}},[a("div",{staticClass:"footer__inner"},[a("div",{staticClass:"footer__container"},[t._m(0),a("div",{staticClass:"footer__text footer__subtitle footer__text--grey"},[t._v(" Заказ выписок из ЕГРН, предоставление онлайн-сведений ")]),a("router-link",{staticClass:"footer__link",attrs:{to:"/privacy"}},[t._v(" Обработка персональных данных ")]),a("router-link",{staticClass:"footer__link",attrs:{to:"/oferta"}},[t._v(" Публичная оферта ")])],1),t._m(1),t._m(2)])])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"logo footer__logo",attrs:{href:"/"}},[a("img",{staticClass:"logo__img",attrs:{src:"images/logo.svg",alt:""}}),a("span",{staticClass:"logo__text"},[t._v(" Россегрн ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer__container"},[a("p",{staticClass:"footer__text"},[t._v(" Время получения выписки: "),a("br"),t._v(" от 5 минут до 3 суток ")]),a("p",{staticClass:"footer__text footer__text--medium"},[t._v(" Время получения выписки зависит "),a("br"),t._v(" от скорости обработки запроса Росреестром ")]),a("p",{staticClass:"footer__text"},[t._v(" Если Вы не получили выписку "),a("br"),t._v(" по прошествии 3 рабочих дней, "),a("br"),t._v(" мы вернём Вам деньги ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer__container"},[a("p",{staticClass:"footer__text"},[t._v(" Техническия поддержка сервиса: "),a("br"),a("a",{staticClass:"footer__link",attrs:{href:"mailto:support@rossegrn.info"}},[t._v(" support@rossegrn.info ")])]),a("p",{staticClass:"footer__text"},[t._v(" Сервис не является органом государственной власти "),a("br"),t._v(" или ее ведомственным подразделением. ")]),a("p",{staticClass:"footer__text"},[t._v(" Сервис не изготавливает выписки из ЕГРН, а оказывает "),a("br"),t._v(" услугу онлайн-заказа выписок из Росреестра. ")])])}],c=a("2877"),_={},o=Object(c["a"])(_,l,n,!1,null,null,null),v=o.exports,u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"header",class:{"header--white":t.addClassHeaderWhite},attrs:{id:"header"}},[t._m(0),a("nav",{staticClass:"menu"},[a("ul",{staticClass:"menu__list"},[a("li",{staticClass:"menu__list-item"},[a("router-link",{staticClass:"menu__list-link",attrs:{to:"/",exact:"","active-class":"active"}},[a("img",{attrs:{src:"images/icons/search-header.svg",alt:""}}),t._v(" Найти объект ")])],1),a("li",{staticClass:"menu__list-item"},[a("router-link",{staticClass:"menu__list-link",attrs:{to:"/price","active-class":"active"}},[t._v(" Выписки и цены ")])],1),a("li",{staticClass:"menu__list-item"},[a("router-link",{staticClass:"menu__list-link",attrs:{to:"/questions","active-class":"active"}},[t._v(" Вопросы и ответы ")])],1),a("li",{staticClass:"menu__list-item "},[a("router-link",{staticClass:"menu__list-link",attrs:{to:"/order-login","active-class":"active"}},[t._v(" Мои заказы ")])],1),a("li",{staticClass:"menu__list-item"},[a("router-link",{staticClass:"menu__list-link",attrs:{to:"/basket","active-class":"active"}},[a("div",{staticClass:"menu__basket-img-block"},[a("div",{staticClass:"basket-mobile__total"},[t._v("2")]),a("img",{staticClass:"menu__basket-img",attrs:{src:"images/basket.svg",alt:""}})]),a("span",[t._v("Корзина")])])],1)]),t._m(1)]),t._m(2),t._m(3)])},d=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("a",{staticClass:"logo",attrs:{href:"/"}},[a("img",{staticClass:"logo__img",attrs:{src:"images/logo.svg",alt:""}}),a("span",{staticClass:"logo__text"},[t._v(" Россегрн ")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"menu__support"},[t._v(" Техническия поддержка сервиса: "),a("br"),a("a",{staticClass:"menu__support-link",attrs:{href:"mailto:support@rossegrn.info"}},[t._v("support@rossegrn.info")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mobile-icons"},[a("a",{staticClass:"search-header",attrs:{href:"#"}},[a("img",{staticClass:"search-header__img",attrs:{src:"images/icons/search-header.svg",alt:""}})]),a("a",{staticClass:"basket-mobile basket-tab",attrs:{href:"#"}},[a("div",{staticClass:"basket-mobile__total"},[t._v("2")]),a("img",{staticClass:"basket-mobile__img",attrs:{src:"images/basket.svg",alt:""}})])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"nav-toggle"},[a("span",{staticClass:"bar-top"}),a("span",{staticClass:"bar-mid"}),a("span",{staticClass:"bar-bot"})])}];e["a"].directive("scroll",{inserted:function(t,s){var a=function a(e){s.value(e,t)&&window.removeEventListener("scroll",a)};window.addEventListener("scroll",a)}});var m={data:function(){return{addClassHeaderWhite:!1}},methods:{handleScroll:function(t,s){window.scrollY>50?this.addClassHeaderWhite=!0:this.addClassHeaderWhite=!1}}},C=m,h=Object(c["a"])(C,u,d,!1,null,null,null),p=h.exports,f={components:{Footer:v,Header:p}},g=f,b=Object(c["a"])(g,i,r,!1,null,null,null),k=b.exports,x=(a("d3b7"),a("8c4f")),y=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"hero content"},[a("div",{staticClass:"hero__inner"},[a("div",{staticClass:"container"},[a("h2",{staticClass:"section-title hero__title"},[t._v(" Срочные выписки из ФГИС ЕГРН онлайн ")]),a("p",{staticClass:"hero__subtitle"},[t._v(" Закажите срочную выписку из Росреестра за 5 минут на квартиру, дом или земельный участок в форматах PDF, ZIP с электронной подписью Росреестра ")]),a("form",{staticClass:"search-form hero__form"},[a("div",{staticClass:"search-form__inner"},[a("div",{staticClass:"search-form__form-block"},[a("div",{staticClass:"search-form__input-block"},[a("input",{staticClass:"search-form__input",attrs:{name:"search",type:"text",placeholder:"Введите кадастровый номер или адрес объекта"}}),a("ul",{staticClass:"search-form__input-list"},[a("li",[t._v("г. "),a("span",[t._v("Ярославль")]),t._v(", проспект "),a("span",[t._v("Ленина")]),t._v(", д. "),a("span",[t._v("10")]),t._v(", стр. 1")]),a("li",[t._v("г. "),a("span",[t._v("Ярославль")]),t._v(", проспект "),a("span",[t._v("Ленина")]),t._v(", д. "),a("span",[t._v("10")]),t._v(", стр. 1")]),a("li",[t._v("г. "),a("span",[t._v("Ярославль")]),t._v(", проспект "),a("span",[t._v("Ленина")]),t._v(", д. "),a("span",[t._v("10")]),t._v(", стр. 1")]),a("li",[t._v("г. "),a("span",[t._v("Ярославль")]),t._v(", проспект "),a("span",[t._v("Ленина")]),t._v(", д. "),a("span",[t._v("10")]),t._v(", стр. 1")]),a("li",[t._v("г. "),a("span",[t._v("Ярославль")]),t._v(", проспект "),a("span",[t._v("Ленина")]),t._v(", д. "),a("span",[t._v("10")]),t._v(", стр. 1")]),a("li",[t._v("г. "),a("span",[t._v("Ярославль")]),t._v(", проспект "),a("span",[t._v("Ленина")]),t._v(", д. "),a("span",[t._v("10")]),t._v(", стр. 1")])])]),a("button",{staticClass:"button button--green search-form__button",attrs:{type:"button"}},[a("img",{staticClass:"search-form__button-img",attrs:{src:"images/icons/search.svg",alt:""}}),t._v(" Найти объект ")])]),a("p",{staticClass:"search-form__example"},[t._v(" Например, 47:14:1203001:814 или г Москва, ул Кремль, д 1 ")])])])])]),a("section",{staticClass:"address content dn"},[a("div",{staticClass:"container"},[a("ul",{staticClass:"address__list"},[a("li",{staticClass:"address__title"},[t._v(" Уточните адрес ")]),a("li",{staticClass:"address__list-item"},[t._v(" г. Ярославль, проспект Ленина, д. 10, стр. 1а "),a("span",{staticClass:"address__list-item-number"},[t._v(" 23:33:0907011:9 ")])]),a("li",{staticClass:"address__list-item"},[t._v(" г. Ярославль, проспект Ленина, д. 10, стр. 1а "),a("span",{staticClass:"address__list-item-number"},[t._v(" 23:33:0907011:9 ")])]),a("li",{staticClass:"address__list-item"},[t._v(" г. Ярославль, проспект Ленина, д. 10, стр. 1а "),a("span",{staticClass:"address__list-item-number"},[t._v(" 23:33:0907011:9 ")])]),a("li",{staticClass:"address__list-item"},[t._v(" г. Ярославль, проспект Ленина, д. 10, стр. 1а "),a("span",{staticClass:"address__list-item-number"},[t._v(" 23:33:0907011:9 ")])]),a("li",{staticClass:"address__list-item"},[t._v(" г. Ярославль, проспект Ленина, д. 10, стр. 1а "),a("span",{staticClass:"address__list-item-number"},[t._v(" 23:33:0907011:9 ")])]),a("li",{staticClass:"address__list-item"},[t._v(" г. Ярославль, проспект Ленина, д. 10, стр. 1а "),a("span",{staticClass:"address__list-item-number"},[t._v(" 23:33:0907011:9 ")])]),a("li",{staticClass:"address__list-item"},[t._v(" г. Ярославль, проспект Ленина, д. 10, стр. 1а "),a("span",{staticClass:"address__list-item-number"},[t._v(" 23:33:0907011:9 ")])])])])]),a("div",{staticClass:"advantages content"},[a("div",{staticClass:"advantages__row"},[a("div",{staticClass:"advantages__container"},[a("div",{staticClass:"advantages__item"},[a("div",{staticClass:"advantages__img-block"},[a("img",{staticClass:"advantages__item-img",attrs:{src:"images/advantages/1.svg",alt:""}})]),a("p",{staticClass:"advantages__title"},[t._v(" Быстро ")]),a("p",{staticClass:"advantages__text"},[t._v(" 90% заказов готовы в течение двух часов ")])])]),a("div",{staticClass:"advantages__container"},[a("div",{staticClass:"advantages__item"},[a("div",{staticClass:"advantages__img-block"},[a("img",{staticClass:"advantages__item-img",attrs:{src:"images/advantages/2.svg",alt:""}})]),a("p",{staticClass:"advantages__title"},[t._v(" Просто ")]),a("p",{staticClass:"advantages__text"},[t._v(" Оформление заказа в пару кликов и без регистрации ")])])]),a("div",{staticClass:"advantages__container"},[a("div",{staticClass:"advantages__item"},[a("div",{staticClass:"advantages__img-block"},[a("img",{staticClass:"advantages__item-img",attrs:{src:"images/advantages/3.svg",alt:""}})]),a("p",{staticClass:"advantages__title"},[t._v(" Надежно ")]),a("p",{staticClass:"advantages__text"},[t._v(" Гарантия возврата средств в случае отсутствия выписки ")])])]),a("div",{staticClass:"advantages__container"},[a("div",{staticClass:"advantages__item"},[a("div",{staticClass:"advantages__img-block"},[a("img",{staticClass:"advantages__item-img",attrs:{src:"images/advantages/4.svg",alt:""}})]),a("p",{staticClass:"advantages__title"},[t._v(" Безопасно ")]),a("p",{staticClass:"advantages__text"},[t._v(" Только официальные данные с ЭЦП Росреестра ")])])])])]),a("div",{staticClass:"search-result"},[a("div",{staticClass:"container"},[a("div",{staticClass:"search-result__inner"},[a("div",{staticClass:"search-result__number title--underline"},[t._v(" 23:33:0907011:9 "),a("span",{staticClass:"search-result__type"},[t._v(" Земельный участок ")])]),a("div",{staticClass:"search-result__address"},[t._v(" р-н Туапсинский, тер Небугское сельское поселение, с Агой, тер СТ Машиностроитель, д уч.№198 ")]),a("div",{staticClass:"search-result__row"},[a("div",{staticClass:"search-result__container"},[a("div",{staticClass:"search-result-item"},[a("div",{staticClass:"search-result-item__img-block"},[a("img",{staticClass:"search-result-item__img",attrs:{src:"images/search-result/1.svg",alt:""}})]),a("div",{staticClass:"search-result-item__text-block"},[a("div",{staticClass:"search-result-item__title"},[t._v(" Площадь ")]),a("div",{staticClass:"search-result-item__value"},[t._v(" 620 кв. м. ")])])])]),a("div",{staticClass:"search-result__container"},[a("div",{staticClass:"search-result-item"},[a("div",{staticClass:"search-result-item__img-block"},[a("img",{staticClass:"search-result-item__img",attrs:{src:"images/search-result/2.svg",alt:""}})]),a("div",{staticClass:"search-result-item__text-block"},[a("div",{staticClass:"search-result-item__title"},[t._v(" Статус ")]),a("div",{staticClass:"search-result-item__value"},[t._v(" Ранее учтенный ")])])])]),a("div",{staticClass:"search-result__container"},[a("div",{staticClass:"search-result-item"},[a("div",{staticClass:"search-result-item__img-block"},[a("img",{staticClass:"search-result-item__img",attrs:{src:"images/search-result/3.svg",alt:""}})]),a("div",{staticClass:"search-result-item__text-block"},[a("div",{staticClass:"search-result-item__title"},[t._v(" Дата учета ")]),a("div",{staticClass:"search-result-item__value"},[t._v(" 12.05.2012 ")])])])])]),a("table",{staticClass:"search-result__table"},[a("tr",{staticClass:"search-result__tr"},[a("td",{staticClass:"search-result__td"},[t._v(" Кадастровый номер ")]),a("td",{staticClass:"search-result__td"},[t._v(" 23:33:0907011:9 ")])]),a("tr",{staticClass:"search-result__tr"},[a("td",{staticClass:"search-result__td"},[t._v(" Адрес ")]),a("td",{staticClass:"search-result__td"},[t._v(" р-н Туапсинский, тер Небугское сельское поселение, с Агой, тер СТ Машиностроитель, д уч.№198 ")])]),a("tr",{staticClass:"search-result__tr"},[a("td",{staticClass:"search-result__td"},[t._v(" Кадастровая стоимость ")]),a("td",{staticClass:"search-result__td"},[t._v(" 1700089.6 руб. (Земля) ")])]),a("tr",{staticClass:"search-result__tr"},[a("td",{staticClass:"search-result__td"},[t._v(" Категория ")]),a("td",{staticClass:"search-result__td"},[t._v(" Земли сельскохозяйственного назначения ")])]),a("tr",{staticClass:"search-result__tr"},[a("td",{staticClass:"search-result__td"},[t._v(" Разрешенное использование ")]),a("td",{staticClass:"search-result__td"},[t._v(" Для садоводства (для ведения гражданами садоводства и огородничества) ")])]),a("tr",{staticClass:"search-result__tr"},[a("td",{staticClass:"search-result__td"},[t._v(" Дата определения стоимости ")]),a("td",{staticClass:"search-result__td"},[t._v(" - ")])])])])])])])])}],E={},O=Object(c["a"])(E,y,w,!1,null,null,null),j=O.exports;e["a"].use(x["a"]);var P=[{path:"/",name:"Home",component:j},{path:"/price",name:"PriceContent",component:function(){return a.e("chunk-2d21b262").then(a.bind(null,"bf19"))}},{path:"/questions",name:"QuestionsContent",component:function(){return a.e("chunk-46465e42").then(a.bind(null,"0aa5"))}},{path:"/order-login",name:"OrderLoginContent",component:function(){return a.e("chunk-71713ebe").then(a.bind(null,"619d"))}},{path:"/basket",name:"BasketContent",component:function(){return a.e("chunk-1f16bf16").then(a.bind(null,"7376"))}},{path:"/privacy",name:"PrivacyContent",component:function(){return a.e("chunk-2d216979").then(a.bind(null,"c2b6"))}},{path:"/oferta",name:"OfertaContent",component:function(){return a.e("chunk-2d0d7876").then(a.bind(null,"76cd"))}}],$=new x["a"]({mode:"history",base:"/",routes:P}),S=$;e["a"].config.productionTip=!1,new e["a"]({router:S,render:function(t){return t(k)}}).$mount("#app")},"8c32":function(t,s,a){}});
//# sourceMappingURL=app.07459123.js.map