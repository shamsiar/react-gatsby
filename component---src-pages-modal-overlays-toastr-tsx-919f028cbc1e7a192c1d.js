/*! For license information please see component---src-pages-modal-overlays-toastr-tsx-919f028cbc1e7a192c1d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"2kYW":function(n,e,t){"use strict";t.d(e,"a",(function(){return O}));var r=t("q1tI"),o=t.n(r),c=t("vOnD"),a=t("9Ayz"),i=t("Tm36");function u(){var n=v(["\n          .native-input:disabled {\n            & + .custom-checkbox {\n              background-color: ",";\n              border-color: ",";\n\n              "," {\n                color: ",";\n              }\n            }\n            & ~ .text {\n              color: ",";\n            }\n            &:indeterminate + .custom-checkbox,\n            &:checked + .custom-checkbox {\n              background-color: ",";\n            }\n          }\n        "]);return u=function(){return n},n}function l(){var n=v(["\n            background-color: ",";\n            border-color: ",";\n          "]);return l=function(){return n},n}function d(){var n=v(["\n            background-color: ",";\n            border-color: ",";\n          "]);return d=function(){return n},n}function s(){var n=v(["\n            background-color: ",";\n            border-color: ",";\n          "]);return s=function(){return n},n}function f(){var n=v(["\n          .custom-checkbox {\n            background-color: ",";\n            border-color: ",";\n\n            "," {\n              color: ",";\n            }\n          }\n        "]);return f=function(){return n},n}function b(){var n=v(["\n          .custom-checkbox {\n            background-color: ",";\n            border-color: ",";\n\n            "," {\n              color: ",";\n            }\n          }\n        "]);return b=function(){return n},n}function h(){var n=v(["\n        .custom-checkbox {\n          background-color: ",";\n          border-color: ",";\n        }\n\n        .text {\n          color: ",";\n        }\n\n        ","\n        ","\n\n        .native-input:enabled:focus + .custom-checkbox {\n          background-color: ",";\n          border-color: ",";\n\n          ","\n        }\n\n        .custom-checkbox:hover {\n          background-color: ",";\n          border-color: ",";\n\n          ","\n        }\n\n        .native-input:enabled:active + .custom-checkbox {\n          background-color: ",";\n          border-color: ",";\n\n          ","\n        }\n        ","\n      "]);return h=function(){return n},n}function m(){var n=v(["\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    margin: 0;\n    min-height: inherit;\n    padding: ",";\n\n    .custom-checkbox {\n      width: ",";\n      height: ",";\n      border-style: ",";\n      border-width: ",";\n      border-radius: ",";\n      position: relative;\n      flex-shrink: 0;\n      ","\n    }\n\n    .native-input:focus:not(:checked) + .custom-checkbox {\n      ","\n    }\n    .native-input:focus:checked + .custom-checkbox {\n      ","\n    }\n\n    "," {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 50%;\n    }\n    .text {\n      font-family: ",";\n      font-size: ",";\n      font-weight: ",";\n      line-height: ",";\n      transition: color 0.15s ease-in;\n      &:not(:empty) {\n        padding-",": ",";\n      }\n    }\n\n    ","\n  "]);return m=function(){return n},n}function p(){var n=v(["\n  ","\n"]);return p=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var g=c.d.label(p(),(function(n){var e=n.theme,t=n.checked,r=n.disabled,o=n.status,p=n.indeterminate;return Object(c.c)(m(),e.checkboxPadding,e.checkboxWidth,e.checkboxHeight,e.checkboxBorderStyle,e.checkboxBorderWidth,e.checkboxBorderRadius,Object(a.a)("background-color, border, box-shadow"),Object(a.f)(e.checkboxOutlineWidth,e.checkboxOutlineColor,!0),Object(a.f)(e.checkboxOutlineWidth,e.checkboxOutlineColor),i.a,e.checkboxTextFontFamily,e.checkboxTextFontSize,e.checkboxTextFontWeight,e.checkboxTextLineHeight,"rtl"===e.dir?"right":"left",e.checkboxTextSpace,o&&Object(c.c)(h(),e["checkbox".concat(o,"BackgroundColor")],e["checkbox".concat(o,"BorderColor")],e["checkbox".concat(o,"TextColor")],t&&Object(c.c)(b(),e["checkbox".concat(o,"CheckedBackgroundColor")],e["checkbox".concat(o,"CheckedBorderColor")],i.a,e["checkbox".concat(o,"CheckedCheckmarkColor")]),p&&Object(c.c)(f(),e["checkbox".concat(o,"IndeterminateBackgroundColor")],e["checkbox".concat(o,"IndeterminateBorderColor")],i.a,e["checkbox".concat(o,"IndeterminateCheckmarkColor")]),e["checkbox".concat(o,"FocusBackgroundColor")],e["checkbox".concat(o,"FocusBorderColor")],(p||t)&&Object(c.c)(s(),e["checkbox".concat(o,"FocusCheckedBackgroundColor")],e["checkbox".concat(o,"FocusCheckedBorderColor")]),e["checkbox".concat(o,"HoverBackgroundColor")],e["checkbox".concat(o,"HoverBorderColor")],(p||t)&&Object(c.c)(d(),e["checkbox".concat(o,"HoverCheckedBackgroundColor")],e["checkbox".concat(o,"HoverCheckedBorderColor")]),e["checkbox".concat(o,"ActiveBackgroundColor")],e["checkbox".concat(o,"ActiveBorderColor")],(p||t)&&Object(c.c)(l(),e["checkbox".concat(o,"ActiveCheckedBackgroundColor")],e["checkbox".concat(o,"ActiveCheckedBorderColor")]),r&&Object(c.c)(u(),e["checkbox".concat(o,"DisabledBackgroundColor")],e["checkbox".concat(o,"DisabledBorderColor")],i.a,e["checkbox".concat(o,"DisabledCheckmarkColor")],e["checkbox".concat(o,"DisabledTextColor")],e["checkbox".concat(o,"DisabledCheckedBackgroundColor")])))})),y=t("BgrJ"),x=o.a.createElement(y.b,{name:"checkmark-bold-outline"}),k=o.a.createElement(y.b,{name:"minus-bold-outline"}),O=function(n){return o.a.createElement(g,{disabled:n.disabled,checked:n.checked,status:n.status,className:n.className,style:n.style},o.a.createElement("input",{type:"checkbox",className:"native-input visually-hidden",disabled:n.disabled,onBlur:n.onBlur,checked:n.checked,onChange:function(e){return n.onChange(e.target.checked)}}),o.a.createElement("span",{className:"custom-checkbox"},n.checked&&!n.indeterminate&&x,n.indeterminate&&k),o.a.createElement("span",{className:"text"},n.children))};O.defaultProps={status:"Basic"}},G9dV:function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var r=t("vOnD"),o=t("q1tI"),c=t.n(o),a=t("9Ayz");function i(){var n=f(["\n            font-size: ",";\n            font-weight: ",";\n            line-height: ",";\n            padding: ",";\n\n            ","\n\n            &::placeholder {\n              font-size: ",";\n              font-weight: ",";\n              line-height: ",";\n            }\n          "]);return i=function(){return n},n}function u(){var n=f(["\n            border-radius: ",";\n          "]);return u=function(){return n},n}function l(){var n=f(["\n            background-color: ",";\n            border-color: ",";\n            color: ",";\n\n            &::placeholder {\n              color: ",";\n            }\n\n            &:focus {\n              background-color: ",";\n              border-color: ",";\n            }\n            &:hover {\n              background-color: ",";\n              border-color: ",";\n            }\n\n            &:disabled {\n              background-color: ",";\n              border-color: ",";\n              color: ",";\n\n              &::placeholder {\n                color: ",";\n              }\n            }\n          "]);return l=function(){return n},n}function d(){var n=f(["\n      display: flex;\n      min-width: 0;\n      position: relative;\n\n      input,\n      textarea {\n        border-style: ",";\n        border-width: ",";\n        font-family: ",";\n        -webkit-appearance: none;\n\n        ","\n        \n        ","\n\n        &::placeholder {\n          font-family: ",";\n          text-overflow: ellipsis;\n        }\n        \n        &:focus {\n          outline: none;\n        }\n      \n        ","\n\n        ","\n\n        ","\n      }\n    "]);return d=function(){return n},n}function s(){var n=f(["\n  ","\n"]);return s=function(){return n},n}function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var b=r.d.div(s(),(function(n){var e=n.theme,t=n.size,o=n.status,c=n.shape,s=n.fullWidth;return Object(r.c)(d(),e.inputBorderStyle,e.inputBorderWidth,e.inputTextFontFamily,Object(a.a)("border, background-color, color, box-shadow"),s&&"width: 100%;",e.inputPlaceholderTextFontFamily,o&&Object(r.c)(l(),e["input".concat(o,"BackgroundColor")],e["input".concat(o,"BorderColor")],e["input".concat(o,"TextColor")],e["input".concat(o,"PlaceholderTextColor")],e["input".concat(o,"FocusBackgroundColor")],e["input".concat(o,"FocusBorderColor")],e["input".concat(o,"HoverBackgroundColor")],e["input".concat(o,"HoverBorderColor")],e["input".concat(o,"DisabledBackgroundColor")],e["input".concat(o,"DisabledBorderColor")],e["input".concat(o,"DisabledTextColor")],e["input".concat(o,"DisabledPlaceholderTextColor")]),c&&Object(r.c)(u(),e["input".concat(c,"BorderRadius")]),t&&Object(r.c)(i(),e["input".concat(t,"TextFontSize")],e["input".concat(t,"TextFontWeight")],e["input".concat(t,"TextLineHeight")],e["input".concat(t,"Padding")],!s&&"max-width: ".concat(e["input".concat(t,"MaxWidth")],";"),e["input".concat(t,"PlaceholderTextFontSize")],e["input".concat(t,"PlaceholderTextFontWeight")],e["input".concat(t,"PlaceholderTextLineHeight")]))})),h=function(n){return c.a.createElement(b,n,n.children)};h.defaultProps={size:"Medium",shape:"Rectangle",status:"Basic"}},eUAm:function(n,e,t){"use strict";var r=t("q1tI"),o=t.n(r),c=t("vOnD"),a=t("rZKo");function i(){var n=v(["\n      justify-content: space-between;\n    "]);return i=function(){return n},n}function u(){var n=v(["\n      justify-content: space-around;\n    "]);return u=function(){return n},n}function l(){var n=v(["\n      align-items: flex-end;\n    "]);return l=function(){return n},n}function d(){var n=v(["\n      align-items: center;\n    "]);return d=function(){return n},n}function s(){var n=v(["\n      align-items: flex-start;\n    "]);return s=function(){return n},n}function f(){var n=v(["\n      justify-content: flex-end;\n    "]);return f=function(){return n},n}function b(){var n=v(["\n      justify-content: center;\n    "]);return b=function(){return n},n}function h(){var n=v(["\n      justify-content: flex-start;\n    "]);return h=function(){return n},n}function m(){var n=v(["\n    margin-right: ","px;\n    margin-left: ","px;\n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  \n    ","\n  "]);return m=function(){return n},n}function p(){var n=v(["\n  display: flex;\n  flex-wrap: wrap;\n  ","\n"]);return p=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var g=c.d.div(p(),(function(n){return Object(c.c)(m(),Object(a.d)(n.theme)/-2,Object(a.d)(n.theme)/-2,n.reverse&&"flex-direction: row-reverse;",n.start&&Object(a.b)(n.start)(h()),n.center&&Object(a.b)(n.center)(b()),n.end&&Object(a.b)(n.end)(f()),n.top&&Object(a.b)(n.top)(s()),n.middle&&Object(a.b)(n.middle)(d()),n.bottom&&Object(a.b)(n.bottom)(l()),n.around&&Object(a.b)(n.around)(u()),n.between&&Object(a.b)(n.between)(i()))}));e.a=function(n){return o.a.createElement(g,n,n.children)}},jGo9:function(n,e,t){"use strict";t.d(e,"a",(function(){return C})),t.d(e,"d",(function(){return O})),t.d(e,"c",(function(){return y})),t.d(e,"b",(function(){return j})),t.d(e,"e",(function(){return k}));var r=t("vOnD"),o=t("9Ayz"),c=t("q1tI"),a=t.n(c);function i(){var n=g(["\n    padding: ",";\n    overflow: auto;\n    flex: 1;\n    -ms-flex: 1 1 auto;\n    position: relative;\n    ","\n  "]);return i=function(){return n},n}function u(){var n=g(["\n  ","\n"]);return u=function(){return n},n}function l(){var n=g(["\n  ","\n"]);return l=function(){return n},n}function d(){var n=g(["\n        height: ",";\n      "]);return d=function(){return n},n}function s(){var n=g(["\n        border-top-color: ",";\n        border-top-style: ",";\n        border-top-width: ",";\n      "]);return s=function(){return n},n}function f(){var n=g(["\n    display: flex;\n    flex-direction: column;\n    background-color: ",";\n    border: "," "," ",";\n    border-radius: ",";\n    box-shadow: ",";\n    color: ",";\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n    margin-bottom: ",";\n\n    ","\n\n    ","\n\n    ","\n\n    & > header {\n      ","\n    }\n    \n    ",",\n    & > footer {\n      padding: ",";\n      border-top: "," "," ",";\n      border-bottom-left-radius: ",";\n      border-bottom-right-radius: ",";\n    }\n  "]);return f=function(){return n},n}function b(){var n=g(["\n  ",";\n"]);return b=function(){return n},n}function h(){var n=g(["\n        background-color: ",";\n        border-bottom-color: ",";\n        border-bottom-width: 0;\n        color: ",";\n        a,\n        a:hover {\n          color: ",";\n        }\n      "]);return h=function(){return n},n}function m(){var n=g(["\n    padding: ",";\n    border-bottom: "," "," ",";\n    border-top-left-radius: ",";\n    border-top-right-radius: ",";\n    color: ",";\n    font-family: ",";\n    font-size: ",";\n    font-weight: ",";\n    line-height: ",";\n\n    ","\n\n    ","\n    ","\n  "]);return m=function(){return n},n}function p(){var n=g(["\n  ","\n"]);return p=function(){return n},n}function v(){var n=g([""]);return v=function(){return n},n}function g(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var y=r.d.footer(v()),x=Object(r.c)(p(),(function(n){var e=n.theme,t=n.status,c=n.accent;return Object(r.c)(m(),e.cardPadding,e.cardDividerWidth,e.cardDividerStyle,e.cardDividerColor,e.cardBorderRadius,e.cardBorderRadius,e.cardHeaderTextColor,e.cardHeaderTextFontFamily,e.cardHeaderTextFontSize,e.cardHeaderTextFontWeight,e.cardHeaderTextLineHeight,o.b,t&&Object(r.c)(h(),e["cardHeader".concat(t,"BackgroundColor")],e["cardHeader".concat(t,"BackgroundColor")],e["cardHeader".concat(t,"TextColor")],e["cardHeader".concat(t,"TextColor")]),c&&"border-radius: 0;")})),k=r.d.div(b(),(function(n){var e=n.theme,t=n.accent,c=n.size;return Object(r.c)(f(),e.cardBackgroundColor,e.cardBorderWidth,e.cardBorderStyle,e.cardBorderColor,e.cardBorderRadius,e.cardShadow,e.cardTextColor,e.cardTextFontFamily,e.cardTextFontSize,e.cardTextFontWeight,e.cardTextLineHeight,e.cardMarginBottom,Object(o.g)(e.cardScrollbarColor,e.cardScrollbarBackgroundColor,e.cardScrollbarWidth),t&&Object(r.c)(s(),e["cardHeader".concat(t,"BackgroundColor")],e.cardBorderStyle,e.cardBorderRadius),c&&Object(r.c)(d(),e["cardHeight".concat(c)]),x,y,e.cardPadding,e.cardDividerWidth,e.cardDividerStyle,e.cardDividerColor,e.cardBorderRadius,e.cardBorderRadius)})),O=r.d.header(l(),x),j=r.d.div(u(),(function(n){var e=n.theme;return Object(r.c)(i(),e.cardPadding,Object(o.g)(e.cardScrollbarColor,e.cardScrollbarBackgroundColor,e.cardScrollbarWidth))})),C=function(n){return a.a.createElement(k,n,n.children)}},paqj:function(n,e,t){"use strict";var r=t("q1tI"),o=t.n(r),c=t("vOnD"),a=t("rZKo");function i(){var n=m(["\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: ","px;\n  padding-left: ","px;\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return i=function(){return n},n}function u(){var n=m(["\n  ","\n"]);return u=function(){return n},n}function l(){var n=m(["\n          margin-",": \n          ","%;"]);return l=function(){return n},n}function d(){var n=m(["\n  ","\n"]);return d=function(){return n},n}function s(){var n=m(["display: none;"]);return s=function(){return n},n}function f(){var n=m(["\n            flex-grow: 1;\n            flex-basis: 0;\n            max-width: 100%;\n            display: block;"]);return f=function(){return n},n}function b(){var n=m(["\n            flex: 0 0 ","%;\n            max-width: ","%;\n            display: block;"]);return b=function(){return n},n}function h(){var n=m(["\n  ","\n"]);return h=function(){return n},n}function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var p=Object.keys(a.c),v=Object(c.c)(h(),(function(n){var e=n.breakPoint,t=n.theme;return e&&Object.keys(e).sort((function(n,e){return p.indexOf(n)-p.indexOf(e)})).map((function(n){return"number"==typeof e[n]?Object(a.b)(n)(b(),100/Object(a.e)(t)*e[n],100/Object(a.e)(t)*e[n]):e[n]?Object(a.b)(n)(f()):Object(a.b)(n)(s())}))})),g=Object(c.c)(d(),(function(n){var e=n.offset,t=n.theme;return e&&Object.keys(e).map((function(n){return Object(a.b)(n)(l(),"rtl"==t.dir?"right":"left",100/Object(a.e)(t)*e[n])}))})),y=c.d.div(u(),(function(n){var e=n.theme,t=n.first,r=n.last,o=n.order;return Object(c.c)(i(),Object(a.d)(e)/2,Object(a.d)(e)/2,v,g,t&&"order: -1;",r&&"order: ".concat(Object(a.e)(e)+1,";"),o&&"order: ".concat(o,";"))}));e.a=function(n){return o.a.createElement(y,n,n.children)}},zdcz:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return G}));var r=t("q1tI"),o=t.n(r),c=t("i8i4"),a=t.n(c),i=t("HXXS"),u=t("9Ayz"),l=t("vOnD");function d(){var n=v(["\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n  ","\n  .overlay-pane {\n    pointer-events: auto;\n    position: static;\n    box-sizing: border-box;\n    z-index: 1000;\n    display: flex;\n    max-width: 100%;\n    max-height: 100%;\n    flex-direction: ",";\n  }\n"]);return d=function(){return n},n}function s(){var n=v(["\n          cursor: pointer;\n\n          &:hover {\n            background: ",";\n            border-color: ",";\n          }\n        "]);return s=function(){return n},n}function f(){var n=v(["\n        background: ",";\n        border-color: ",";\n        color: ",";\n\n        .title {\n          color: ",";\n        }\n        ","\n\n        .icon {\n          background: ",";\n          color: ",";\n        }\n      "]);return f=function(){return n},n}function b(){var n=v(["\n        cursor: pointer;\n\n        &:hover {\n          opacity: 1;\n        }\n      "]);return b=function(){return n},n}function h(){var n=v(["\n          display: flex;\n          flex-direction: row;\n        "]);return h=function(){return n},n}function m(){var n=v(["\n    border-style: ",";\n    border-radius: ",";\n    border-width: ",";\n    box-shadow: ",";\n    padding: ",";\n    display: flex;\n    align-items: center;\n    width: 25rem;\n    margin: 0.5rem;\n    transition: all 150ms ease-out;\n    &&.animation{\n      transform: translateX(","110%);\n      height: 0;\n      margin: 0;\n    }\n\n    .content-container {\n      ","\n      .title {\n        font-weight: ",";\n        font-family: ",";\n        font-size: ",";\n        line-height: ",";\n        margin-right: 0.25rem;\n      }\n      .message {\n        font-family: ",";\n        font-weight: ",";\n        line-height: ",";\n        font-size: ",";\n      }\n    }\n    ","\n    .icon {\n      margin-",": 1.25rem;\n      border-radius: ",";\n      min-width: 2.5rem;\n      min-height: 2.5rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 1.5rem;\n    }\n    svg {\n      width: 2.5rem;\n      height: 2.5rem;\n    }\n\n    ","\n  "]);return m=function(){return n},n}function p(){var n=v(["\n  ","\n"]);return p=function(){return n},n}function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var g=l.d.div(p(),(function(n){var e=n.theme,t=n.status,r=n.destroyByClick,o=n.hasIcon,c=n.isRight;return Object(l.c)(m(),e.toastrBorderStyle,e.toastrBorderRadius,e.toastrBorderWidth,e.toastrShadow,e.toastrPadding,!c&&"-",!o&&Object(l.c)(h()),e.toastrTitleTextFontWeight,e.toastrTitleTextFontFamily,e.toastrTitleTextFontSize,e.toastrTitleTextLineHeight,e.toastrTextFontFamily,e.toastrTextFontWeight,e.toastrTextLineHeight,e.toastrTextFontSize,r&&Object(l.c)(b()),"rtl"===e.dir?"left":"right",e.toastrBorderRadius,t&&Object(l.c)(f(),e["toastr".concat(t,"BackgroundColor")],e["toastr".concat(t,"BorderColor")],e["toastr".concat(t,"TextColor")],e["toastr".concat(t,"TextColor")],r&&Object(l.c)(s(),e["toastrDestroyable".concat(t,"HoverBackgroundColor")],e["toastrDestroyable".concat(t,"HoverBorderColor")]),e["toastrIcon".concat(t,"BackgroundColor")],e["toastrIcon".concat(t,"Color")]))})),y=l.d.div(d(),(function(n){switch(n.position){case"topStart":return"justify-content: flex-start;align-items: flex-start;";case"topEnd":return"justify-content: flex-end;align-items: flex-start;";case"bottomStart":return"justify-content: flex-start;align-items: flex-end;";case"bottomEnd":return"justify-content: flex-end;align-items: flex-end;"}}),(function(n){return n.isTop?"column-reverse":"column"})),x=t("BgrJ");function k(){return(k=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function O(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,c=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return j(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return j(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var C=function(n){var e,t=O(o.a.useState(!0),2),r=t[0],c=t[1],l=O(o.a.useState("animation"),2),d=l[0],s=l[1],f=o.a.useContext(i.a),b=function(){s("animation"),setTimeout((function(){c(!1)}),100)};return o.a.useEffect((function(){(null==n?void 0:n.duration)&&n.duration>0&&setTimeout((function(){b()}),n.duration),"animation"===d&&setTimeout((function(){s("")}),10)}),[]),r?a.a.createPortal(o.a.createElement(g,k({isRight:Object(u.e)(null!==(e=f.dir)&&void 0!==e?e:"ltr",n.position),className:d,onClick:function(){n.destroyByClick&&b()}},n),n.icon&&n.hasIcon&&o.a.createElement(x.c,{icon:n.icon,className:"icon"}),o.a.createElement("div",{className:"content-container"},n.title&&o.a.createElement("span",{className:"title"},n.title),o.a.createElement("div",{className:"message"},n.message))),document.getElementById("toastr"+n.position)):o.a.createElement(o.a.Fragment,null)};function w(){return(w=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function B(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=D(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return a=n.done,n},e:function(n){i=!0,c=n},f:function(){try{a||null==t.return||t.return()}finally{if(i)throw c}}}}function S(n){return function(n){if(Array.isArray(n))return F(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||D(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?T(Object(t),!0).forEach((function(e){P(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function P(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function z(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],r=!0,o=!1,c=void 0;try{for(var a,i=n[Symbol.iterator]();!(r=(a=i.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return t}(n,e)||D(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(n,e){if(n){if("string"==typeof n)return F(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?F(n,e):void 0}}function F(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var I=o.a.forwardRef((function(n,e){var t=z(o.a.useState([]),2),r=t[0],c=t[1],l=z(o.a.useState(!1),2),d=l[0],s=l[1],f=o.a.useContext(i.a);return o.a.useEffect((function(){s(!0)}),[]),o.a.useImperativeHandle(e,(function(){return{add:function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=E(E({},n),a),l=S(r),d=!0;if(i.preventDuplicates){var s,b=B(l);try{for(b.s();!(s=b.n()).done;){var h=s.value;h.title===o&&h.message===e&&(d=!1)}}catch(m){b.e(m)}finally{b.f()}}d&&(i.position=Object(u.c)(null!==(t=f.dir)&&void 0!==t?t:"ltr",i.position),l.push(E(E({},i),{},{title:o,message:e,icon:i.icons?i.icons[i.status]:""})),c(l))}}}),[r]),o.a.createElement(o.a.Fragment,null,d&&["topStart","topEnd","bottomStart","bottomEnd"].map((function(n){return a.a.createPortal(o.a.createElement(y,{position:n,isTop:"topEnd"===n||"topStart"===n},o.a.createElement("div",{className:"overlay-pane",id:"toastr"+n})),document.getElementById("overlay-container"))})),r.map((function(n,e){return o.a.createElement(C,w({key:e},n))})))}));I.displayName="Toastr",I.defaultProps={position:"topEnd",status:"Primary",duration:3e3,hasIcon:!0,destroyByClick:!0,preventDuplicates:!1,icons:{Danger:"flash-outline",Success:"checkmark-outline",Info:"question-mark-outline",Warning:"alert-triangle-outline",Primary:"email-outline",Control:"email-outline",Basic:"email-outline"}};var H=t("eUAm"),A=t("paqj"),W=t("jGo9"),R=t("DAwz"),N=t("2kYW"),L=t("G9dV"),q=t("0HrA"),M=Object(l.d)(q.a).withConfig({displayName:"toastr__SelectStyled",componentId:"sc-64x25c-0"})(["margin-bottom:1rem;"]);function G(){var n=Object(r.useState)(1),e=n[0],t=n[1],c=Object(r.useState)("HI there!"),a=c[0],i=c[1],u=Object(r.useState)("cool toaster"),l=u[0],d=u[1],s=Object(r.useState)({position:"topEnd",status:"Primary",duration:2e3,hasIcon:!0,destroyByClick:!0,preventDuplicates:!1}),f=s[0],b=s[1],h=Object(r.useRef)(null),m=function(n,e){var t=Object.assign({},f);t[n]=e,b(t)},p=[{value:"topRight",label:"Top-Right"},{value:"topLeft",label:"Top-Left"},{value:"bottomRight",label:"Bottom-Right"},{value:"bottomLeft",label:"Bottom-Left"},{value:"topStart",label:"Top-Start"},{value:"topEnd",label:"Top-End"},{value:"bottomStart",label:"Bottom-Start"},{value:"bottomEnd",label:"Bottom-End"}],v=[{value:"Info",label:"Info"},{value:"Success",label:"Success"},{value:"Danger",label:"Danger"},{value:"Primary",label:"Primary"},{value:"Warning",label:"Warning"},{value:"Default",label:"Default"}];return o.a.createElement(H.a,null,o.a.createElement(A.a,{breakPoint:{xs:12}},o.a.createElement(I,{ref:h}),o.a.createElement(W.a,null,o.a.createElement("header",null,"Toaster configuration"),o.a.createElement(W.b,null,o.a.createElement(H.a,null,o.a.createElement(A.a,{breakPoint:{xs:12,md:6}},o.a.createElement(M,{fullWidth:!0,placeholder:"Place to show toast",options:p,value:p.find((function(n){return n.value===f.position})),onChange:function(n){return m("position",n.value)}}),o.a.createElement(L.a,{fullWidth:!0},o.a.createElement("input",{type:"text",placeholder:"Title",value:a,onChange:function(n){return i(n.target.value)}})),o.a.createElement(L.a,{fullWidth:!0},o.a.createElement("input",{type:"text",placeholder:"Message",value:l,onChange:function(n){return d(n.target.value)}})),o.a.createElement(L.a,{fullWidth:!0},o.a.createElement("input",{placeholder:"Time to hide toast, ms. 0 to persistent toast",type:"number",value:f.duration,onChange:function(n){return m("duration",n.target.valueAsNumber)}}))),o.a.createElement(A.a,{breakPoint:{xs:12,md:6}},o.a.createElement(M,{fullWidth:!0,placeholder:"Toast Status",options:v,value:v.find((function(n){return n.value===f.status})),onChange:function(n){return m("status",n.value)}}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},o.a.createElement(N.a,{checked:!!f.destroyByClick,onChange:function(n){return m("destroyByClick",n)}},"Hide on click"),o.a.createElement(N.a,{checked:!!f.preventDuplicates,onChange:function(n){return m("preventDuplicates",n)}},"Prevent arising of duplicate toast"),o.a.createElement(N.a,{checked:!!f.hasIcon,onChange:function(n){return m("hasIcon",n)}},"Show toast with icon"))))),o.a.createElement("footer",null,o.a.createElement(R.a,{onClick:function(){var n;t(e+1),null===(n=h.current)||void 0===n||n.add(l,a+e,Object.assign({},f))}},"Show Toastr")))))}}}]);
//# sourceMappingURL=component---src-pages-modal-overlays-toastr-tsx-919f028cbc1e7a192c1d.js.map