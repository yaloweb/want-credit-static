(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"credit-selection",class:{disabled:!t.canGetCredit}},[s("div",{staticClass:"credit-selection-header"},[s("div",{staticClass:"h2"},[t._v("Подбор кредитного продукта")]),t.canGetCredit?s("a",{staticClass:"clear-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$store.commit("resetStateParameters")}}},[s("span",{staticClass:"icon-refresh"}),t._v("Сбросить фильтр ")]):t._e()]),s("div",{staticClass:"credit-selection-body"},[s("CreditSelection",{attrs:{disabled:!t.canGetCredit}})],1)]),t.canGetCredit?s("section",{staticClass:"s-suits-you"},[t._m(0),s("CreditInfoBlock")],1):t._e(),s("section",{staticClass:"s-orders"},[s("div",{staticClass:"title-row"},[s("div",{staticClass:"h2"},[t._v("Ваши заявки")]),s("div",{staticClass:"title-link"},[s("router-link",{attrs:{to:"/orders"}},[t._v("Все заявки")])],1)]),s("OrdersTable",{attrs:{withBtn:!1,quantity:3}})],1),s("section",{staticClass:"s-other-offers"},[t._m(1),s("OtherOffers")],1),t.regbankModal?s("Popup",{on:{"close-modal":function(e){t.regbankModal=!1}}},[s("div",{staticClass:"popup-title"},[s("div",{staticClass:"h2",domProps:{innerHTML:t._s(t.$t("home.reg_modal_title"))}})]),s("div",{staticClass:"popup-body"},[s("button",{staticClass:"btn btn-lg btn-block close-modal"},[t._v("Понятно")])])]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-title"},[s("div",{staticClass:"h2"},[t._v("Вам подходит")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-title"},[s("div",{staticClass:"h2"},[t._v("Другие предложения банка")])])}],n=s("5530"),r=s("0eb7"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"credit-info-block-wrapper"},[t._l(t.tariffs,(function(e){return s("div",{key:e.id,staticClass:"credit-info-block"},[s("div",{staticClass:"credit-info-block-container"},[s("div",{staticClass:"h2"},[t._v("Кредит «"+t._s(e.name)+"»")]),s("p",[t._v("Кредит на обеспечение исполнения обязательств по контракту в рамках 44-ФЗ, 223-ФЗ")]),s("div",{staticClass:"rate-info"},[t._v("Ставка: 1.5%")]),s("div",{staticClass:"credit-info-block-footer"},[s("div",{staticClass:"credit-info-block-list"},[s("ul",[s("li",[t._v("Макс. срок кредита "),s("span",[t._v("32 "+t._s(t.$options.filters.declensionNumbers(32,["месяц","месяца","месяцев"])))])]),s("li",[t._v("Мин. сумма кредита "),s("span",[t._v(t._s(t.$options.filters.numberFilter(25e4))+" "+t._s(t.$options.filters.declensionNumbers(25e4,["рубль","рубля","рублей"])))])]),s("li",[t._v("Принятие решения "),s("span",[t._v("до "+t._s(t.returnDate(120)))])])])]),s("div",{staticClass:"credit-info-block-btn"},[s("button",{staticClass:"btn btn-border",on:{click:function(s){return t.openDetailModal(e)}}},[t._v("Подробнее")]),s("button",{staticClass:"btn",class:{loading:t.load},attrs:{disabled:t.load},on:{click:function(s){return t.createOrder(e.guid)}}},[t._v("Оформить")])])])])])})),t.detailModal?s("Popup",{on:{"close-modal":function(e){t.detailModal=!1}}},[s("div",{staticClass:"popup-title"},[s("div",{staticClass:"h2"},[t._v("Кредит «"+t._s(t.detailTarrif.name)+"»")])]),s("div",{staticClass:"popup-body"},[s("div",{staticClass:"detail-tarif-info"},[s("p",[t._v("Кредит на обеспечение исполнения обязательств по контракту в рамках 44-ФЗ, 223-ФЗ")]),s("ul",[s("li",[t._v("Процентная ставка "),s("span",[t._v("1.5%")])]),s("li",[t._v("Макс. срок кредита "),s("span",[t._v("32 "+t._s(t.$options.filters.declensionNumbers(32,["месяц","месяца","месяцев"])))])]),s("li",[t._v("Мин. сумма кредита "),s("span",[t._v(t._s(t.$options.filters.numberFilter(25e4))+" "+t._s(t.$options.filters.declensionNumbers(25e4,["рубль","рубля","рублей"])))])]),s("li",[t._v("Принятие решения "),s("span",[t._v("до "+t._s(t.returnDate(120)))])])])]),s("button",{staticClass:"btn btn-lg btn-block close-modal"},[t._v("Закрыть")])])]):t._e()],2)},c=[],l=(s("4de4"),s("ac1f"),s("5319"),s("d3b7"),s("25f0"),s("99af"),s("2f62")),d=s("8acc"),u={name:"CreditInfoBlock",components:{Popup:d["a"]},computed:Object(n["a"])(Object(n["a"])({},Object(l["b"])({orderInfo:function(t){return t.createOrder},tariffs:function(t){return t.tariffs.tariffs}})),{},{filteredCreditItems:function(){var t=this;return this.credits.filter((function(e){var s=!0,i=parseInt(t.orderInfo.creditSum.value.toString().replace(/\s/g,""));return e.minSum>i&&(s=!1),e.maxTerm<t.orderInfo.creditTerm.value&&(s=!1),s}))}}),data:function(){return{load:!1,detailModal:!1,detailTarrif:{}}},methods:{returnDate:function(t){var e,s;return t>24?(e=t/24,s=["день","дня","дней"]):(e=t,s=["час","часа","часов"]),"".concat(e," ").concat(this.$options.filters.declensionNumbers(e,s))},createOrder:function(t){var e=this;this.load=!0,this.$store.dispatch("createOrder",t).then((function(t){e.$router.push("/create-order/".concat(t)).then((function(){e.load=!1}))})).catch((function(){e.load=!1}))},openDetailModal:function(t){this.detailTarrif=t,this.detailModal=!0}},mounted:function(){this.$store.dispatch("getTariffs")}},f=u,v=s("2877"),p=Object(v["a"])(f,o,c,!1,null,null,null),b=p.exports,_=s("9936"),C=s("e2e0"),m={name:"Home",components:{Popup:d["a"],OtherOffers:C["a"],CreditSelection:r["a"],CreditInfoBlock:b,OrdersTable:_["a"]},computed:Object(n["a"])({},Object(l["b"])({company:function(t){return t.users.company}})),data:function(){return{regbankModal:!1,canGetCredit:!0}},mounted:function(){var t,e=this;t=setInterval((function(){e.company.regbank||(e.regbankModal=!0),e.regbankModal?clearInterval(t):e.regbankModal=!0}),100)}},h=m,k=Object(v["a"])(h,i,a,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d21a3d2.a096683b.js.map