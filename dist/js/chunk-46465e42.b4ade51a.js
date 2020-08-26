(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46465e42"],{"0aa5":function(s,t,i){"use strict";i.r(t);var e=function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("main",{staticClass:"main",attrs:{id:"main"}},[i("section",{staticClass:"questions content"},[i("div",{staticClass:"container"},[i("h2",{staticClass:"section-title questions__title"},[s._v(" Вопросы и ответы ")]),i("div",{staticClass:"questions__inner"},[i("div",{staticClass:"questions__tabs"},[i("a",{staticClass:"questions__tab tab",class:{active:0===s.questionsTab},on:{click:function(t){s.switchTabWithQuestion(0)}}},[i("span",[s._v("Вопросы")]),s._v(" "),i("span",[s._v("о выписке")])]),i("a",{staticClass:"questions__tab tab",class:{active:1===s.questionsTab},on:{click:function(t){s.switchTabWithQuestion(1)}}},[i("span",[s._v("Оформление")]),s._v(" "),i("span",[s._v("заказа")])]),i("a",{staticClass:"questions__tab tab",class:{active:2===s.questionsTab},on:{click:function(t){s.switchTabWithQuestion(2)}}},[i("span",[s._v("Работа")]),s._v(" "),i("span",[s._v("сайта")])])]),i("div",{staticClass:"questions__tab-container"},[i("div",{staticClass:"questions__tab-content tab-content",class:{active:0===s.questionsTab}},[i("div",{staticClass:"questions__item",class:{active:s.answer[0]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(0)}}},[s._v(" Как быстро я получу выписку? "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[0],expression:"answer[0]"}],staticClass:"questions__item-content"},[i("p",[s._v("Сроки зависят от загруженности сайта и количества обрабатываемых заявок. Если выписка не получена, то это значит, что запрос не был обработан Росреестром. Максимальный срок обработки запроса составляет три дня (согласно п.9 ст. 62 закона No 218-ФЗ). Если выписка не будет получена по окончание срока, то деньги вернутся. ")]),i("p",[s._v(' Проверьте почту, не забудьте про папку "Спам" и "Рассылки". Возможно, почтовый сервис ошибочно определил письмо в неподходящую категорию. Так как файлы в больших количествах отправляются ежедневно, вероятность не заметить письмо и не прочесть велика. С помощью нашего сервиса вы можете самостоятельно следить за заказом и степенью его готовности после обработки Росреестром. Чтобы получить выписку, выберите "Мои заказы" (кнопка находится в панели меню). ')])])]),i("div",{staticClass:"questions__item",class:{active:s.answer[1]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(1)}}},[s._v(" Почему в полученной выписке нет сведений о собственнике? "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[1],expression:"answer[1]"}],staticClass:"questions__item-content"},[s._m(0),s._m(1),i("p",[s._v(" Вся информация, находящаяся в выписке, берется из актуальной на данный момент базы Росреестра. В системе есть данные только по сделкам, заключённым до наступления 1998. При этом информация доступна исключительно о приватизированных объектах, находящихся в распоряжении законных владельцев. ")]),i("p",[s._v(" Наиболее частые ситуации, которые способствуют отсутствию информации о правообладателях: 1. Отсутствует регистрация прав владельца. ")]),i("p",[s._v(" В основном, препятствием служит то, что владелец не думал о необходимости регистрации своих прав на имущество в Росреестре. Рассмотрим следующую ситуацию. Человек получает от государства земельный участок, становится членом некоммерческого садового товарищества. У него есть документы, подтверждающие право на недвижимость (свидетельство или членская книжка НСТ). Человек наивно полагает, что собственность находится в его законном владении. Только вот в документах госреестра он не укажется как собственник, хотя имущество действительно будет находиться на официальном кадастровом учёте. ")]),i("p",[s._v(" 2. Новые действия с объектом не предпринимались с 31 января 1998 года. ")]),i("p",[s._v(" Так как в базе находятся лишь зарегистрированные после окончания 1998 года данные, то вся нужная информация, касающаяся собственников, до 1998 года запрашивается в Бюро технической инвентаризации, Департаменте городского имущества или в Департаменте жилищной политики и жилищного фонда. ")]),i("p",[s._v(" 3. Выписка на коммунальную квартиру. ")]),i("p",[s._v(" Несмотря на то, что каждому собственнику принадлежит та или иная часть квартиры, она, являясь объектом недвижимости, не сможет содержать записи о владельце. Поэтому производить заказ выписок следует для каждой комнаты отдельно. ")]),i("p",[s._v(" 4. Недавно оформленные права на недвижимость. ")]),i("p",[s._v(" Чтобы база ЕГРН обновилась, требуется время, поэтому произведенные две-три недели назад сделки могут не отображаться. Это происходит из-за того, что местные офисы Росреестра сначала передают данные в Москву. Следовательно, данные и информация появляется в онлайн-базе ЕГРН немного позже. ")]),i("p",[s._v(" 5. Наследство. ")]),i("p",[s._v(" Подразумевается, что в выписке правообладатели не указаны или указаны, но неверно. Произойти это может по многим причинам. Рассмотрим несколько из них. Во-первых, собственник мог законно приватизировать жилплощадь прежде, чем наступил 1998 год. Затем, должной регистрации прав не последовало. Спустя время квартира переходит кому-либо в качестве наследства. Новый владелец тоже не регистрирует собственность. Несмотря на то, что он имеет все основания на получение наследства, в выписке не укажут ни одного владельца. Во-вторых, в необходимом документе может присутствовать исключительно предыдущий владелец. Здесь он смог зарегистрировать имущество в Росреестре, но вот его наследник этого не сделал. В такой ситуации в нужной выписке отобразится только предыдущий владелец. ")]),i("p",[s._v(" 6. По одному адресу существует не один номер кадастра. ")]),i("p",[s._v(" Несостыковка в базе реестра могла возникнуть, как во время разделения объекта, так и из-за сложного адреса, который был указан неправильно. ")]),i("p",[s._v(" 7. Ошибка сайта или неточность номера кадастра. ")]),i("p",[s._v(" Иногда владелец оказывается невиновным в отсутствии верных и актуальных сведений в реестре Ошибки происходят из-за проведенных кадастровых работ или при передаче информации из БТИ. Даже в самом Росреестре возникают сбои. Информация, которая должна поступить в реестр недвижимости из этого портала, может оказаться неверной. При обнаружении несоответствий необходимо написать обращение в Росреестр или МФЦ. После обращения будут исправлены и технические, и кадастровые ошибки. ")])])]),i("div",{staticClass:"questions__item",class:{active:s.answer[2]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(2)}}},[s._v(" Как убедиться в подлинности и наличии ЭЦП? "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[2],expression:"answer[2]"}],staticClass:"questions__item-content"},[i("p",{staticClass:"questions__text--mb"},[s._v(" Согласно нормативным актам проверка любых ЭЦП должна осуществляться в удостоверяющих центрах, прошедших аккредитацию. К ним относится сайт Госуслуг и некоторые другие. ")]),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6)])]),i("div",{staticClass:"questions__item",class:{active:s.answer[3]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(3)}}},[s._v(" Почему в выписке нет печати и подписи? "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[3],expression:"answer[3]"}],staticClass:"questions__item-content"},[i("p",[s._v(" Важно обратить внимание на различие электронных и бумажных справок и выписок, полученных из ЕГРН. Выписка, полученная электронно, имеет не обычную, а электронно-цифровую подпись Росреестра. Она располагается в обособленном ZIP-документе, имеет SIG формат. Такая ЭЦП — официальная подпись Росреестра. Правовая сила электронной и бумажной выписки равнозначна, поэтому ЭЦП успешно идентифицируется многими организациями, которым выписку необходима. выписок, полученных из ЕГРН. Выписка, полученная электронно, имеет не обычную, а электронно-цифровую подпись Росреестра. Она располагается в обособленном ZIP-документе, имеет SIG формат. Такая ЭЦП — официальная подпись Росреестра. Правовая сила электронной и бумажной выписки равнозначна, поэтому ЭЦП успешно идентифицируется многими организациями, которым выписку необходима. ")])])]),i("div",{staticClass:"questions__item",class:{active:s.answer[4]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(4)}}},[s._v(" В чем отличия электронной выписки из ЕГРН от обычной бумажной? "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[4],expression:"answer[4]"}],staticClass:"questions__item-content"},[i("p",[s._v(" Сейчас доступно 2 варианта получения необходимого документа — электронный и бумажный. Их правовая сила одинакова. Чтобы заказать бумажную справку, обращаемся в ближайший офис МФЦ/Росреестра, предварительно узнав приемные часы. Время готовности справок варьируется от двух до семи суток. Намного оперативнее выписка ЕГРН поступит к заказчику, если запросить ее онлайн. Уполномоченный сотрудник регистрационного органа поставит электронную подпись, которая и будет подтверждать достоверность документа. Подводя итог, получаем, что электронная выписка — это лучший вариант, ведь ее можно заказать без сложностей и получить намного быстрее, чем бумажный аналог. ")])])])]),i("div",{staticClass:"questions__tab-content tab-content",class:{active:1===s.questionsTab}},[i("div",{staticClass:"questions__item",class:{active:s.answer[5]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(5)}}},[s._v(" Сколько выписок может быть в одном заказе? "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[5],expression:"answer[5]"}],staticClass:"questions__item-content"},[i("p",[s._v(" Заказывайте столько документов, сколько вам нужно. Их количество не ограничено. ")])])])]),i("div",{staticClass:"questions__tab-content tab-content",class:{active:2===s.questionsTab}},[i("div",{staticClass:"questions__item",class:{active:s.answer[6]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(6)}}},[s._v(" Сколько длится поиск нужного мне объекта? "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[6],expression:"answer[6]"}],staticClass:"questions__item-content"},[i("p",[s._v(" Длительность процесса зависит от загруженности базы данных. Чаще всего, действие не занимает больше двух минут. При проведении технических работ следует повторять поиск через каждые 10-60 минут. ")])])]),i("div",{staticClass:"questions__item",class:{active:s.answer[7]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(7)}}},[s._v(" Как найти нужный объект. Залог успешного поиска "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[7],expression:"answer[7]"}],staticClass:"questions__item-content"},[i("p",[s._v(" Чтобы найти определенный объект как можно быстрее, необходимо узнать его кадастровый номер. Сделать это можно, заглянув в документы на объект недвижимости. Такой подход гарантирует точный результат. ")])])]),i("div",{staticClass:"questions__item",class:{active:s.answer[8]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(8)}}},[s._v(" Поиск объекта по кадастровому номеру "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[8],expression:"answer[8]"}],staticClass:"questions__item-content"},[i("p",[s._v(" Такой способ поиска наиболее удобный. Помните, что кадастровый номер имеет следующую структуру: (две цифры):(две цифры):(шесть или семь цифр):(любое кол-во цифр). Схематично это выглядит так: AA:AA:AAAAAAA:AAAA ")]),i("p",[s._v(" Важно: количество двоеточий строго определено (их ровно 3), в поле для ввода вносятся только двоеточия и цифры (никаких пробелов или посторонних символов). ")])])]),i("div",{staticClass:"questions__item",class:{active:s.answer[9]}},[i("div",{staticClass:"questions__item-title",on:{click:function(t){s.showAdditionalInformation(9)}}},[s._v(" Как проверить статус заказа "),i("div",{staticClass:"questions__icon-plus"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:s.answer[9],expression:"answer[9]"}],staticClass:"questions__item-content"},[s._m(7),i("p",[s._v(" Внимание! Письмо с выпиской может попасть в папку «спам» или «рассылки». ")])])])])])])])])])},a=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"questions__link-block"},[i("a",{staticClass:"questions__img--center fancybox",attrs:{href:"images/questions/screen1.jpg","data-fancybox":""}},[i("img",{attrs:{src:"images/questions/screen1.jpg",alt:""}})])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("p",{staticClass:"questions__text questions__text--center questions__text--grey"},[s._v(" (Если сведений о собственнике в ЕГРН нет, то в графе «Особые отметки» указывается "),i("br"),s._v(" «Сведения, необходимы для заполнения раздела 2 отсутствуют») ")])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("p",[i("b",[s._v("Как осуществить проверку:")])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"questions__step"},[i("p",[s._v(" 1. С почты или сайта (раздел "),i("b",[s._v("«Мои заказы»")]),s._v(" ) скачиваем архив, где находится выписка. ")]),i("a",{staticClass:"fancybox",attrs:{href:"images/questions/screen2.jpg","data-fancybox":""}},[i("img",{attrs:{src:"images/questions/screen2.jpg",alt:""}})])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"questions__step"},[i("p",[s._v(" 2. Распаковываем "),i("b",[s._v("zip-файл")]),s._v(". ")]),i("a",{staticClass:"fancybox",attrs:{href:"images/questions/screen3.jpg","data-fancybox":""}},[i("img",{attrs:{src:"images/questions/screen3.jpg",alt:""}})])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"questions__step"},[i("p",[s._v(" 3. Открываем Госуслуги здесь: "),i("a",{attrs:{href:"#"}},[s._v("https://www.gosuslugi.ru/eds")]),s._v(". ")]),i("a",{staticClass:"fancybox",attrs:{href:"images/questions/screen4.jpg","data-fancybox":""}},[i("img",{attrs:{src:"images/questions/screen4.jpg",alt:""}})])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"questions__step"},[i("p",[s._v(" 4. В распакованном архиве находим объект названием "),i("b",[s._v("«out_docs_*****************.zip»")]),s._v(", выбираем его и вставляем в поле "),i("b",[s._v("«Электронный документ, подлинность подписи которого нужно проверить»")]),s._v(". ")]),i("a",{staticClass:"fancybox",attrs:{href:"images/questions/screen5.jpg","data-fancybox":""}},[i("img",{attrs:{src:"images/questions/screen5.jpg",alt:""}})])])},function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("p",[s._v(" Сразу же после оплаты заказ отправляется в работу. Готовность выписок можно отследить на странице "),i("a",{attrs:{href:"#"}},[s._v("«Мои заказы»")]),s._v(", также уведомление о готовности будет отправлено на Ваш e-mail. ")])}],n=(i("d3b7"),i("25f0"),{name:"QuestionsContent",data:function(){return{questionsTab:0,answer:{0:!1,1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1}}},methods:{switchTabWithQuestion:function(s){this.questionsTab=s},showAdditionalInformation:function(s){var t=s.toString();this.answer[t]=!this.answer[t]}}}),o=n,c=i("2877"),_=Object(c["a"])(o,e,a,!1,null,null,null);t["default"]=_.exports},"25f0":function(s,t,i){"use strict";var e=i("6eeb"),a=i("825a"),n=i("d039"),o=i("ad6d"),c="toString",_=RegExp.prototype,l=_[c],r=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),v=l.name!=c;(r||v)&&e(RegExp.prototype,c,(function(){var s=a(this),t=String(s.source),i=s.flags,e=String(void 0===i&&s instanceof RegExp&&!("flags"in _)?o.call(s):i);return"/"+t+"/"+e}),{unsafe:!0})},ad6d:function(s,t,i){"use strict";var e=i("825a");s.exports=function(){var s=e(this),t="";return s.global&&(t+="g"),s.ignoreCase&&(t+="i"),s.multiline&&(t+="m"),s.dotAll&&(t+="s"),s.unicode&&(t+="u"),s.sticky&&(t+="y"),t}}}]);
//# sourceMappingURL=chunk-46465e42.b4ade51a.js.map