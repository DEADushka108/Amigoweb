!function(e){function t(t){for(var n,o,c=t[0],s=t[1],i=t[2],u=0,p=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(m&&m(t);p.length;)p.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var m=s;l.push([34,1]),a()}({31:function(e,t,a){var n={"./check.svg":32,"./dropdown.svg":33};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=31},32:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a.n(n),l=a(14),o=a.n(l),c=new r.a({id:"check",use:"check-usage",viewBox:"0 0 16 12",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" id="check"><path d="M14.634.634a.8.8 0 011.132 1.132l-9.6 9.6a.8.8 0 01-1.132 0l-4-4a.8.8 0 011.132-1.132L5.6 9.67 14.634.634z" /></symbol>'});o.a.add(c);t.default=c},33:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a.n(n),l=a(14),o=a.n(l),c=new r.a({id:"dropdown",use:"dropdown-usage",viewBox:"0 0 16 9",content:'<symbol viewBox="0 0 16 9" xmlns="http://www.w3.org/2000/svg" id="dropdown"><path d="M8 6.586L14.293.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 011.707.293L8 6.586z" /></symbol>'});o.a.add(c);t.default=c},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(36),s=a(6);var i=Object(s.a)(),m=a(2),u=a.n(m);const p={ROOT:"/",INFO:"/info"},_="Язык",f=[{id:1,lang:"Русский"},{id:2,lang:"English"},{id:3,lang:"中文"},{id:4,lang:"Español"}],d={userInfo:{name:"",email:"",phone:"",language:""}},g={SET_USER_INFO:"SET_USER_INFO"},b=e=>({type:g.SET_USER_INFO,payload:e}),E={REDIRECT_TO_ROUTE:"REDIRECT_TO_ROUTE"};var h=a(8);const O=e=>{const{onFormSubmit:t,onSuccessFormSubmit:a}=e,l=Object(n.useRef)(!0),o=Object(n.useRef)(),c=Object(n.useRef)(),[s,i]=Object(n.useState)(!1),[m,u]=Object(n.useState)(!0),[d,g]=Object(n.useState)(_),[b,E]=Object(n.useState)(!0),[h,O]=Object(n.useState)(""),[v,N]=Object(n.useState)(!0),[S,y]=Object(n.useState)(""),[w,j]=Object(n.useState)(!0),[R,x]=Object(n.useState)(""),[k,T]=Object(n.useState)(!0),[I,F]=Object(n.useState)(!0),C=Object(n.useCallback)((e=>{u(!0),O(e.target.value),i(w&&v&&k)}),[h,S,R]),U=Object(n.useCallback)((e=>{u(!0),y(e.target.value),i(w&&v&&k)}),[S,h,R]),q=Object(n.useCallback)((e=>{u(!0),x(e.target.value),i(w&&v&&k)}),[R,h,S]),D=Object(n.useCallback)((e=>{if(e.preventDefault(),d!==_&&c.current.checked)s&&(t({name:h,phone:R,email:S,language:d}),a(p.INFO));else{if(d===_)return void E(!1);if(!c.checked)return void F(!1)}}),[h,R,S,d,I,s]);return Object(n.useEffect)((()=>{l.current?l.current=!1:(u(!0),N((e=>{const t=e.toString(),a=new RegExp("[a-zA-Zа-яА-Я -]+","g");return!!t.match(a)&&t.match(a).toString().length===t.length})(h)),j((e=>/\S+@\S+\.\S+/.test(e.toString()))(S)),T((e=>/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(e.toString()))(R)),i(w&&v&&k))}),[h,S,R,w,v,k]),r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"visually-hidden"},"Форма регистрации"),r.a.createElement("form",{className:"login-form",ref:o,onSubmit:D},r.a.createElement("fieldset",{className:"login-form__fieldset"},r.a.createElement("legend",{className:"login-form__title"},"Регистрация"),r.a.createElement("p",{className:"login-form__text"},r.a.createElement("span",null,"Уже есть аккаунт?"),r.a.createElement("a",{href:"#",className:"login-form__link"},"Войти")),r.a.createElement("ul",{className:"login-form__list"},r.a.createElement("li",{className:"login-form__item"},r.a.createElement("label",{className:"login-form__label",htmlFor:"user-name"},"Имя"),r.a.createElement("input",{className:"login-form__input",id:"user-name",type:"text",name:"name",placeholder:"Введите Ваше имя",required:!0,tabIndex:"1",onChange:C}),!v&&r.a.createElement("p",{className:"login-form__text-warning"},"Введено некорректное значение")),r.a.createElement("li",{className:"login-form__item"},r.a.createElement("label",{className:"login-form__label",htmlFor:"user-email"},"Email"),r.a.createElement("input",{className:"login-form__input",id:"user-email",type:"email",name:"email",placeholder:"Введите ваш email",required:!0,tabIndex:"2",onChange:U}),!w&&r.a.createElement("p",{className:"login-form__text-warning"},"Введено некорректное значение")),r.a.createElement("li",{className:"login-form__item"},r.a.createElement("label",{className:"login-form__label",htmlFor:"user-phone"},"Номер телефона"),r.a.createElement("input",{className:"login-form__input",id:"user-phone",type:"tel",name:"phone",placeholder:"Введите номер телефона",required:!0,tabIndex:"3",onChange:q}),!k&&r.a.createElement("p",{className:"login-form__text-warning"},"Введено некорректное значение")),r.a.createElement("li",{className:"login-form__item"},r.a.createElement("span",{className:"login-form__label"},"Язык"),r.a.createElement("div",{className:"login-form__select select",id:"lang",tabIndex:"4",onClick:()=>{u(!m)}},r.a.createElement("p",{className:"Язык"!==d?"select__current-option select__current-option--active":"select__current-option"},d),r.a.createElement("svg",{className:"login-form__dropdown-icon",width:"16",height:"9"},r.a.createElement("use",{xlinkHref:"#dropdown"}))),!b&&r.a.createElement("p",{className:"login-form__text-warning"},"Выберите из списка"),r.a.createElement("div",{className:m?"select__options select__options--hide":"select__options"},f.map((e=>r.a.createElement("p",{key:e.id,className:d===e.lang?"select__option select__option--active":"select__option",onClick:()=>{g(e.lang),E(!0),u(!0)}},e.lang))))),r.a.createElement("li",{className:"login-form__item"},r.a.createElement("input",{className:"login-form__checkbox",ref:c,id:"agreement",type:"checkbox",onClick:e=>F(e.target.checked)}),r.a.createElement("label",{className:"login-form__checkbox-label",htmlFor:"agreement"},"Принимаю ",r.a.createElement("a",{href:"#",className:"login-form__link"},"условия")," использования"),r.a.createElement("svg",{className:"login-form__check-icon",width:"22",height:"16"},r.a.createElement("use",{xlinkHref:"#check"})),!I&&r.a.createElement("p",{className:"login-form__text-warning login-form__text-warning--checkbox"},"Необходимо подтверждение"))),r.a.createElement("button",{className:"login-form__button",disabled:!s},"Зарегистрироваться"))))};O.propTypes={onFormSubmit:u.a.func.isRequired,onSuccessFormSubmit:u.a.func.isRequired};var v=Object(h.b)(null,(e=>({onFormSubmit(t){e(b(t))},onSuccessFormSubmit(t){e({type:E.REDIRECT_TO_ROUTE,payload:t})}})))(O);var N={USER:"USER"};const S=N.USER,y=e=>e[S].userInfo,w=e=>{const{userInfo:t}=e;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Отправленные данные"),r.a.createElement("div",{className:"select__options"},r.a.createElement("p",{className:"select__option"},"Имя: ",t.name),r.a.createElement("p",{className:"select__option"},"Почта: ",t.email),r.a.createElement("p",{className:"select__option"},"Телефон: ",t.phone),r.a.createElement("p",{className:"select__option"},"Язык: ",t.language)))};w.propTypes={userInfo:u.a.shape({name:u.a.string.isRequired,phone:u.a.string.isRequired,email:u.a.string.isRequired,language:u.a.string.isRequired}).isRequired};var j=Object(h.b)((e=>({userInfo:y(e)})))(w);var R=()=>r.a.createElement(c.b,{history:i},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:`${p.ROOT}`},r.a.createElement(v,null)),r.a.createElement(c.a,{exact:!0,path:`${p.INFO}`},r.a.createElement(j,null)))),x=a(7),k=a(21),T=Object(x.combineReducers)({[N.USER]:(e=d,t)=>{switch(t.type){case g.SET_USER_INFO:return a=e,n={userInfo:t.payload},Object.assign({},a,n)}var a,n;return e}});var I=Object(x.createStore)(T,Object(k.composeWithDevTools)(Object(x.applyMiddleware)((e=>e=>t=>(t.type===E.REDIRECT_TO_ROUTE&&i.push(t.payload),e(t))))));var F;(F=a(31)).keys().forEach(F);const C=document.querySelector("#root");o.a.render(r.a.createElement(h.a,{store:I},r.a.createElement(R,null)),C)}});
//# sourceMappingURL=bundle.js.map