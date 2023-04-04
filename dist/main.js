/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/media-queries.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/media-queries.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media only screen and (max-width: 1200px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    .content {\r\n        padding: 5rem 5rem;\r\n    }\r\n\r\n    #headline {\r\n        padding: 5rem;\r\n    }\r\n\r\n    /** BUTTON PROPERTIES **/\r\n    .btn-lg {\r\n        font-size: 1rem;\r\n        font-weight: 400;\r\n        text-transform: uppercase;\r\n        letter-spacing: 0.1rem;\r\n        padding: 0.75rem;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    #content {\r\n        margin-top: 4rem;\r\n    }\r\n\r\n    /** HEADER PROPERTIES **/\r\n    header {\r\n        display: block;\r\n        padding: 0rem 1rem;\r\n    }\r\n\r\n    .header-logo {\r\n        height: 4rem;\r\n    }\r\n\r\n    #headline {\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n    nav ul {\r\n        flex-direction: column;\r\n        align-items: flex-end;\r\n        gap: 1rem;\r\n    }\r\n\r\n    #nav {\r\n        display: none;\r\n        padding: 1rem 0rem;\r\n\r\n        text-align: right;\r\n    }\r\n\r\n    nav {\r\n        padding: 1rem 0rem;\r\n    }\r\n\r\n    #mobile-nav {\r\n        display: flex;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n\r\n    #mobile-nav-icon {\r\n        width: 1.5rem;\r\n    }\r\n\r\n    /** FOOTER PROPERTIES **/\r\n    #footer-top {\r\n        justify-content: center;\r\n        padding: 2rem 1rem;\r\n    }\r\n\r\n    #footer-bottom {\r\n        padding: 1rem;\r\n    }\r\n\r\n    #footer-right {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    .headline {\r\n        padding: 3rem;\r\n    }\r\n\r\n    .content {\r\n        display: flex;\r\n        justify-content: center;\r\n        height: 100%;\r\n        padding: 3rem;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    /** HOME PAGE **/\r\n    #headline {\r\n        padding: 3rem;\r\n    }\r\n\r\n    #message-from-us {\r\n        flex-direction: column-reverse;\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n    #view-menu {\r\n        flex-direction: column;\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n\r\n    /** MENU PAGE **/\r\n    #menu-section {\r\n        padding: 3rem;\r\n        gap: 3rem;\r\n    }\r\n\r\n    #grid-container {\r\n        grid-template-columns: auto;\r\n    }\r\n\r\n    .menu-container-grid {\r\n        grid-template-columns: auto;\r\n    }\r\n\r\n    /** CONTACT PAGE **/\r\n    #contact-section {\r\n        flex-direction: column-reverse;\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n    /** FOOTER **/\r\n    #footer-left div:first-child {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    .content {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .headline {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** HEADER PROPERTIES **/\r\n    #headline {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** MENU PAGE PROPERTIES **/\r\n    #menu-section {\r\n        padding: 1.5rem;\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .menu-container {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** ABOUT PAGE **/\r\n    #about-section {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** FOOTER PROPERTIES **/\r\n    #footer-left {\r\n        flex-direction: column;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/media-queries.css"],"names":[],"mappings":"AAAA;;IAEI,wBAAwB;IACxB;QACI,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA,wBAAwB;IACxB;QACI,eAAe;QACf,gBAAgB;QAChB,yBAAyB;QACzB,sBAAsB;QACtB,gBAAgB;IACpB;;;AAGJ;;AAEA;;IAEI,wBAAwB;IACxB;QACI,gBAAgB;IACpB;;IAEA,wBAAwB;IACxB;QACI,cAAc;QACd,kBAAkB;IACtB;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,0BAA0B;IAC9B;;IAEA;QACI,sBAAsB;QACtB,qBAAqB;QACrB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,kBAAkB;;QAElB,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,MAAM;QACN,QAAQ;IACZ;;IAEA;QACI,aAAa;IACjB;;IAEA,wBAAwB;IACxB;QACI,uBAAuB;QACvB,kBAAkB;IACtB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;AACJ;;AAEA;;IAEI,wBAAwB;IACxB;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,uBAAuB;QACvB,YAAY;QACZ,aAAa;QACb,sBAAsB;IAC1B;;IAEA,gBAAgB;IAChB;QACI,aAAa;IACjB;;IAEA;QACI,8BAA8B;QAC9B,0BAA0B;IAC9B;;IAEA;QACI,sBAAsB;QACtB,0BAA0B;IAC9B;;;IAGA,gBAAgB;IAChB;QACI,aAAa;QACb,SAAS;IACb;;IAEA;QACI,2BAA2B;IAC/B;;IAEA;QACI,2BAA2B;IAC/B;;IAEA,mBAAmB;IACnB;QACI,8BAA8B;QAC9B,0BAA0B;IAC9B;;IAEA,aAAa;IACb;QACI,aAAa;IACjB;AACJ;;AAEA;;IAEI,wBAAwB;IACxB;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA,wBAAwB;IACxB;QACI,eAAe;IACnB;;IAEA,2BAA2B;IAC3B;QACI,eAAe;QACf,WAAW;IACf;;IAEA;QACI,eAAe;IACnB;;IAEA,iBAAiB;IACjB;QACI,eAAe;IACnB;;IAEA,wBAAwB;IACxB;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":["@media only screen and (max-width: 1200px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    .content {\r\n        padding: 5rem 5rem;\r\n    }\r\n\r\n    #headline {\r\n        padding: 5rem;\r\n    }\r\n\r\n    /** BUTTON PROPERTIES **/\r\n    .btn-lg {\r\n        font-size: 1rem;\r\n        font-weight: 400;\r\n        text-transform: uppercase;\r\n        letter-spacing: 0.1rem;\r\n        padding: 0.75rem;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1024px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    #content {\r\n        margin-top: 4rem;\r\n    }\r\n\r\n    /** HEADER PROPERTIES **/\r\n    header {\r\n        display: block;\r\n        padding: 0rem 1rem;\r\n    }\r\n\r\n    .header-logo {\r\n        height: 4rem;\r\n    }\r\n\r\n    #headline {\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n    nav ul {\r\n        flex-direction: column;\r\n        align-items: flex-end;\r\n        gap: 1rem;\r\n    }\r\n\r\n    #nav {\r\n        display: none;\r\n        padding: 1rem 0rem;\r\n\r\n        text-align: right;\r\n    }\r\n\r\n    nav {\r\n        padding: 1rem 0rem;\r\n    }\r\n\r\n    #mobile-nav {\r\n        display: flex;\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n    }\r\n\r\n    #mobile-nav-icon {\r\n        width: 1.5rem;\r\n    }\r\n\r\n    /** FOOTER PROPERTIES **/\r\n    #footer-top {\r\n        justify-content: center;\r\n        padding: 2rem 1rem;\r\n    }\r\n\r\n    #footer-bottom {\r\n        padding: 1rem;\r\n    }\r\n\r\n    #footer-right {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    .headline {\r\n        padding: 3rem;\r\n    }\r\n\r\n    .content {\r\n        display: flex;\r\n        justify-content: center;\r\n        height: 100%;\r\n        padding: 3rem;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    /** HOME PAGE **/\r\n    #headline {\r\n        padding: 3rem;\r\n    }\r\n\r\n    #message-from-us {\r\n        flex-direction: column-reverse;\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n    #view-menu {\r\n        flex-direction: column;\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n\r\n    /** MENU PAGE **/\r\n    #menu-section {\r\n        padding: 3rem;\r\n        gap: 3rem;\r\n    }\r\n\r\n    #grid-container {\r\n        grid-template-columns: auto;\r\n    }\r\n\r\n    .menu-container-grid {\r\n        grid-template-columns: auto;\r\n    }\r\n\r\n    /** CONTACT PAGE **/\r\n    #contact-section {\r\n        flex-direction: column-reverse;\r\n        height: calc(100vh - 4rem);\r\n    }\r\n\r\n    /** FOOTER **/\r\n    #footer-left div:first-child {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 425px) {\r\n\r\n    /** GENERAL PROPERTIES**/\r\n    .content {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    .headline {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** HEADER PROPERTIES **/\r\n    #headline {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** MENU PAGE PROPERTIES **/\r\n    #menu-section {\r\n        padding: 1.5rem;\r\n        gap: 1.5rem;\r\n    }\r\n\r\n    .menu-container {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** ABOUT PAGE **/\r\n    #about-section {\r\n        padding: 1.5rem;\r\n    }\r\n\r\n    /** FOOTER PROPERTIES **/\r\n    #footer-left {\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/InriaSerif-Regular.ttf */ "./src/assets/fonts/InriaSerif-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/InriaSans-Regular.ttf */ "./src/assets/fonts/InriaSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/clark-douglas-unsplash-resized.jpg */ "./src/assets/img/clark-douglas-unsplash-resized.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/hoja-studio-unsplash.jpg */ "./src/assets/img/hoja-studio-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/shakti-rajpurohit-unsplash.jpg */ "./src/assets/img/shakti-rajpurohit-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/jason-leung-unsplash.jpg */ "./src/assets/img/jason-leung-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/img/anima-visual-unsplash.jpg */ "./src/assets/img/anima-visual-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n/** ROOT VARIABLES **/\r\n\r\n:root {\r\n    --black: #222222;\r\n    --black-transparent: rgba(34,34,34,0.8);\r\n    --white: #F2F2F2;\r\n    --farina-blue: #141337;\r\n    --farina-dark-blue: #09081B;\r\n    --gold: #A87908;\r\n    --cream: #EFE1C2;\r\n    --orange: #A04210;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inria Serif';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inria Sans';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n\r\nbody {\r\n    font-family: 'Inria Sans', 'Times New Roman', serif;\r\n    letter-spacing: 0.05rem;\r\n    color: var(--cream);\r\n}\r\n\r\nhtml {\r\n    background-color: var(--orange);\r\n}\r\n\r\n.content-padding {\r\n    padding: 10rem;\r\n}\r\n\r\nhr {\r\n    border: 0.125rem solid var(--gold);\r\n    border-radius: 0.5rem;\r\n    width: 5rem;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n\r\n    padding: 5rem 10rem;\r\n    text-align: center;\r\n}\r\n\r\n#content {\r\n    margin-top: 6rem;\r\n}\r\n\r\n.headline {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    height: 25vh;\r\n    padding: 5rem 10rem;\r\n}\r\n\r\n.attribute {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n\r\n\r\n/** HEADER PROPERTIES **/\r\n\r\nheader {\r\n    position: fixed;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    top: 0;\r\n\r\n    background-color: var(--orange);\r\n    padding: 0rem 5rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n}\r\n\r\n#nav {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\nnav {\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    color: var(--cream);\r\n}\r\n\r\nnav ul {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n}\r\n\r\nnav a.nav-link {\r\n    -webkit-transition: ease-out 0.2s;\r\n    -moz-transition: ease-out 0.2s;\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\na.nav-link {\r\n    color: var(--cream);\r\n}\r\n\r\nnav a.nav-link:hover {\r\n    color: var(--gold);\r\n    cursor: pointer;\r\n}\r\n\r\n.header-logo {\r\n    height: 6rem;\r\n\r\n    transition: 0.2s;\r\n}\r\n\r\n#mobile-nav {\r\n    display: none;\r\n    padding: 1rem;\r\n}\r\n\r\n#mobile-nav-icon {\r\n    filter: invert(90%) sepia(22%) saturate(411%) hue-rotate(334deg) brightness(105%) contrast(87%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL - TEXT PROPERTIES **/\r\n\r\np {\r\n    line-height: 200%;\r\n}\r\n\r\np.attrHighlight {\r\n    background-color: var(--farina-blue);\r\n}\r\n\r\np.attrLowlight {\r\n    background-color: var(--black-transparent);\r\n}\r\n\r\nstrong {\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n\r\na {\r\n    color: var(--orange);\r\n    text-decoration: none;\r\n}\r\n\r\nb {\r\n    font-weight: 700;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n    font-size: 3rem;\r\n    color: var(--cream);\r\n}\r\n\r\nh2 {\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n    font-size: 2rem;\r\n    font-weight: 200;\r\n}\r\n\r\nh2.bold {\r\n    font-weight: 700;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Inria Sans', 'Arial', sans-serif;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: var(--gold);\r\n    text-transform: uppercase;\r\n}\r\n\r\nh5 {\r\n    font-weight: 400;\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.orange {\r\n    color: var(--orange);\r\n}\r\n\r\n\r\n\r\n/** GENERAL - BUTTON PROPERTIES **/\r\n\r\nbutton {\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n    border-style: none;\r\n}\r\n\r\n.btn-lg {\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.btn-outline {\r\n    border: solid 0.125rem;\r\n}\r\n\r\n.btn-cream-outline {\r\n    border-color: var(--cream);\r\n    background-color: transparent;\r\n    color: var(--cream);\r\n\r\n    box-shadow: inset 0 0 0 0 var(--cream);\r\n\r\n    -webkit-transition: ease-out 0.7s;\r\n    -moz-transition: ease-out 0.7s;\r\n    transition: ease-out 0.7s;\r\n}\r\n\r\n.btn-cream-outline:hover {\r\n    color: var(--farina-blue);\r\n    box-shadow: inset 400px 0 0 0 var(--cream);\r\n}\r\n\r\n.btn-blue, .btn-orange {\r\n    -webkit-transition: ease-out 0.2s;\r\n    -moz-transition: ease-out 0.2s;\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\n.btn-blue {\r\n    background-color: var(--farina-blue);\r\n    color: var(--cream);\r\n}\r\n\r\n.btn-blue:hover {\r\n    background-color: var(--gold);\r\n}\r\n\r\n.btn-orange {\r\n    background-color: var(--orange);\r\n    color: var(--cream);\r\n}\r\n\r\n.btn-orange:hover {\r\n    background-color: var(--gold);\r\n}\r\n\r\n.btn-gold {\r\n    background-color: var(--gold);\r\n    color: var(--white);\r\n\r\n    box-shadow: inset 0 0 0 0 var(--cream);\r\n}\r\n\r\n.btn-gold:hover {\r\n    color: var(--farina-blue);\r\n    box-shadow: inset 400px 0 0 0 var(--cream);\r\n}\r\n\r\n.btn-blue:hover, .btn-orange:hover, .btn-cream-outline:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/** HEADER SECTION **/\r\n\r\n#headline {\r\n    height: calc(100vh - 6rem);\r\n    padding: 5rem 10rem;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1591459034470-d1e05d7b05d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80') 20% 80%/cover no-repeat;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/** MESSAGE FROM US SECTION **/\r\n\r\n#message-from-us {\r\n    display: flex;\r\n}\r\n  \r\n#message-from-us .left {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") center center/cover no-repeat;\r\n    flex: 1;\r\n}\r\n  \r\n#message-from-us .right {\r\n    background-color: var(--gold);\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n/** VIEW MENU SECTION **/\r\n\r\n#view-menu {\r\n    display: flex;\r\n}\r\n\r\n#view-menu .left {\r\n    background-color: var(--orange);\r\n    flex: 1;\r\n}\r\n\r\n#view-menu .right {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center center/cover no-repeat;\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n/** MENU PAGE **/\r\n#menu-headline {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") top center/cover no-repeat;\r\n}\r\n\r\n/** MENU SECTION **/\r\n#menu-section {\r\n    background-color: var(--cream);\r\n    color: var(--black);\r\n    padding: 5rem 5rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n}\r\n\r\n#menu-section h2 {\r\n    text-align: center;\r\n}\r\n\r\n#menu-summary {\r\n    max-width: 25rem;\r\n    text-align: center;\r\n}\r\n\r\n#grid-container {\r\n    display: grid;\r\n    grid-template-columns: 3fr 5fr;\r\n    gap: 1rem;\r\n    max-width: 70rem;\r\n}\r\n\r\n.inner-grid-container {\r\n    display: grid;\r\n    grid-auto-rows: min-content;\r\n    gap: 1rem;\r\n}\r\n\r\n#pasta-sauce .inner-grid-container {\r\n    gap: 2rem;\r\n}\r\n\r\n#pasta-sauce h3 {\r\n    text-align: center;\r\n}\r\n\r\n.menu-container {\r\n    padding: 2rem;\r\n}\r\n\r\n.menu-container-grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-auto-rows: 1fr;\r\n    gap: 2rem 4rem;\r\n}\r\n\r\n.menu-container-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.menu-container-row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n}\r\n\r\n.menu-container-reg {\r\n    border: var(--gold) solid 0.0625rem;\r\n}\r\n\r\n.menu-container-spec {\r\n    background-color: var(--gold);\r\n    color: var(--cream);\r\n}\r\n\r\n.menu-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n}\r\n\r\n#menu-section p {\r\n    line-height: 150%;\r\n}\r\n\r\n\r\n\r\n\r\n/** ABOUT SECTION **/\r\n#about-headline {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") center center/cover no-repeat;\r\n}\r\n\r\n#about-section {\r\n    background-color: var(--cream);\r\n    color: var(--black);\r\n    padding: 5rem 5rem;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n#about-section div {\r\n    text-align: center;\r\n    max-width: 50rem;\r\n}\r\n\r\n\r\n\r\n/** CONTACT PAGE **/\r\n\r\n#contact-headline {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") center center/cover no-repeat;\r\n}\r\n\r\n#contact-section {\r\n    display: flex;\r\n}\r\n\r\n#contact-section .left {\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") center center/cover no-repeat;\r\n    flex: 1;\r\n}\r\n\r\n#contact-section .right {\r\n    background-color: var(--gold);\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n/** FOOTER SECTION **/\r\n\r\nfooter {\r\n    background-color: var(--farina-blue);\r\n    color: var(--cream);\r\n}\r\n\r\nfooter p {\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    line-height: 200%;\r\n}\r\n\r\n#footer-top {\r\n    display :flex;\r\n    justify-content: space-between;\r\n    gap: 3rem;\r\n    padding: 5rem;\r\n}\r\n\r\n#footer-bottom {\r\n    background-color: var(--farina-dark-blue);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 1rem 5rem;\r\n}\r\n\r\n#footer-left {\r\n    display: flex;\r\n    gap: 3rem;\r\n}\r\n\r\n#footer-left div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n#github-logo {\r\n    width: 2rem;\r\n    filter: invert(18%) sepia(98%) saturate(2515%) hue-rotate(23deg) brightness(98%) contrast(87%);\r\n}\r\n\r\n.logo {\r\n    height: 6rem;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n\r\n\r\n/** ROOT VARIABLES **/\r\n\r\n:root {\r\n    --black: #222222;\r\n    --black-transparent: rgba(34,34,34,0.8);\r\n    --white: #F2F2F2;\r\n    --farina-blue: #141337;\r\n    --farina-dark-blue: #09081B;\r\n    --gold: #A87908;\r\n    --cream: #EFE1C2;\r\n    --orange: #A04210;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inria Serif';\r\n    src: url('./assets/fonts/InriaSerif-Regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Inria Sans';\r\n    src: url('./assets/fonts/InriaSans-Regular.ttf') format('truetype');\r\n    font-weight: 400;\r\n    font-style: normal;\r\n}\r\n\r\n\r\n\r\nbody {\r\n    font-family: 'Inria Sans', 'Times New Roman', serif;\r\n    letter-spacing: 0.05rem;\r\n    color: var(--cream);\r\n}\r\n\r\nhtml {\r\n    background-color: var(--orange);\r\n}\r\n\r\n.content-padding {\r\n    padding: 10rem;\r\n}\r\n\r\nhr {\r\n    border: 0.125rem solid var(--gold);\r\n    border-radius: 0.5rem;\r\n    width: 5rem;\r\n}\r\n\r\n.content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n\r\n    padding: 5rem 10rem;\r\n    text-align: center;\r\n}\r\n\r\n#content {\r\n    margin-top: 6rem;\r\n}\r\n\r\n.headline {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    height: 25vh;\r\n    padding: 5rem 10rem;\r\n}\r\n\r\n.attribute {\r\n    display: flex;\r\n    align-items: flex-end;\r\n}\r\n\r\n\r\n\r\n/** HEADER PROPERTIES **/\r\n\r\nheader {\r\n    position: fixed;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    top: 0;\r\n\r\n    background-color: var(--orange);\r\n    padding: 0rem 5rem;\r\n    display: flex;\r\n    gap: 2rem;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n}\r\n\r\n#nav {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 2rem;\r\n}\r\n\r\nnav {\r\n    text-transform: uppercase;\r\n    font-weight: 400;\r\n    color: var(--cream);\r\n}\r\n\r\nnav ul {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n}\r\n\r\nnav a.nav-link {\r\n    -webkit-transition: ease-out 0.2s;\r\n    -moz-transition: ease-out 0.2s;\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\na.nav-link {\r\n    color: var(--cream);\r\n}\r\n\r\nnav a.nav-link:hover {\r\n    color: var(--gold);\r\n    cursor: pointer;\r\n}\r\n\r\n.header-logo {\r\n    height: 6rem;\r\n\r\n    transition: 0.2s;\r\n}\r\n\r\n#mobile-nav {\r\n    display: none;\r\n    padding: 1rem;\r\n}\r\n\r\n#mobile-nav-icon {\r\n    filter: invert(90%) sepia(22%) saturate(411%) hue-rotate(334deg) brightness(105%) contrast(87%);\r\n}\r\n\r\n\r\n\r\n/** GENERAL - TEXT PROPERTIES **/\r\n\r\np {\r\n    line-height: 200%;\r\n}\r\n\r\np.attrHighlight {\r\n    background-color: var(--farina-blue);\r\n}\r\n\r\np.attrLowlight {\r\n    background-color: var(--black-transparent);\r\n}\r\n\r\nstrong {\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n}\r\n\r\na {\r\n    color: var(--orange);\r\n    text-decoration: none;\r\n}\r\n\r\nb {\r\n    font-weight: 700;\r\n}\r\n\r\nh1 {\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n    font-size: 3rem;\r\n    color: var(--cream);\r\n}\r\n\r\nh2 {\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n    font-size: 2rem;\r\n    font-weight: 200;\r\n}\r\n\r\nh2.bold {\r\n    font-weight: 700;\r\n}\r\n\r\nh3 {\r\n    font-family: 'Inria Sans', 'Arial', sans-serif;\r\n    font-size: 1.5rem;\r\n    font-weight: 700;\r\n    color: var(--gold);\r\n    text-transform: uppercase;\r\n}\r\n\r\nh5 {\r\n    font-weight: 400;\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.orange {\r\n    color: var(--orange);\r\n}\r\n\r\n\r\n\r\n/** GENERAL - BUTTON PROPERTIES **/\r\n\r\nbutton {\r\n    font-family: 'Inria Serif', 'Times New Roman', serif;\r\n    border-style: none;\r\n}\r\n\r\n.btn-lg {\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.btn-outline {\r\n    border: solid 0.125rem;\r\n}\r\n\r\n.btn-cream-outline {\r\n    border-color: var(--cream);\r\n    background-color: transparent;\r\n    color: var(--cream);\r\n\r\n    box-shadow: inset 0 0 0 0 var(--cream);\r\n\r\n    -webkit-transition: ease-out 0.7s;\r\n    -moz-transition: ease-out 0.7s;\r\n    transition: ease-out 0.7s;\r\n}\r\n\r\n.btn-cream-outline:hover {\r\n    color: var(--farina-blue);\r\n    box-shadow: inset 400px 0 0 0 var(--cream);\r\n}\r\n\r\n.btn-blue, .btn-orange {\r\n    -webkit-transition: ease-out 0.2s;\r\n    -moz-transition: ease-out 0.2s;\r\n    transition: ease-out 0.2s;\r\n}\r\n\r\n.btn-blue {\r\n    background-color: var(--farina-blue);\r\n    color: var(--cream);\r\n}\r\n\r\n.btn-blue:hover {\r\n    background-color: var(--gold);\r\n}\r\n\r\n.btn-orange {\r\n    background-color: var(--orange);\r\n    color: var(--cream);\r\n}\r\n\r\n.btn-orange:hover {\r\n    background-color: var(--gold);\r\n}\r\n\r\n.btn-gold {\r\n    background-color: var(--gold);\r\n    color: var(--white);\r\n\r\n    box-shadow: inset 0 0 0 0 var(--cream);\r\n}\r\n\r\n.btn-gold:hover {\r\n    color: var(--farina-blue);\r\n    box-shadow: inset 400px 0 0 0 var(--cream);\r\n}\r\n\r\n.btn-blue:hover, .btn-orange:hover, .btn-cream-outline:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/** HEADER SECTION **/\r\n\r\n#headline {\r\n    height: calc(100vh - 6rem);\r\n    padding: 5rem 10rem;\r\n    background: linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1591459034470-d1e05d7b05d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80') 20% 80%/cover no-repeat;\r\n  \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-sizing: border-box;\r\n\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/** MESSAGE FROM US SECTION **/\r\n\r\n#message-from-us {\r\n    display: flex;\r\n}\r\n  \r\n#message-from-us .left {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)) , url('./assets/img/clark-douglas-unsplash-resized.jpg') center center/cover no-repeat;\r\n    flex: 1;\r\n}\r\n  \r\n#message-from-us .right {\r\n    background-color: var(--gold);\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n/** VIEW MENU SECTION **/\r\n\r\n#view-menu {\r\n    display: flex;\r\n}\r\n\r\n#view-menu .left {\r\n    background-color: var(--orange);\r\n    flex: 1;\r\n}\r\n\r\n#view-menu .right {\r\n    background: url('./assets/img/hoja-studio-unsplash.jpg') center center/cover no-repeat;\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n/** MENU PAGE **/\r\n#menu-headline {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('./assets/img/shakti-rajpurohit-unsplash.jpg') top center/cover no-repeat;\r\n}\r\n\r\n/** MENU SECTION **/\r\n#menu-section {\r\n    background-color: var(--cream);\r\n    color: var(--black);\r\n    padding: 5rem 5rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 5rem;\r\n}\r\n\r\n#menu-section h2 {\r\n    text-align: center;\r\n}\r\n\r\n#menu-summary {\r\n    max-width: 25rem;\r\n    text-align: center;\r\n}\r\n\r\n#grid-container {\r\n    display: grid;\r\n    grid-template-columns: 3fr 5fr;\r\n    gap: 1rem;\r\n    max-width: 70rem;\r\n}\r\n\r\n.inner-grid-container {\r\n    display: grid;\r\n    grid-auto-rows: min-content;\r\n    gap: 1rem;\r\n}\r\n\r\n#pasta-sauce .inner-grid-container {\r\n    gap: 2rem;\r\n}\r\n\r\n#pasta-sauce h3 {\r\n    text-align: center;\r\n}\r\n\r\n.menu-container {\r\n    padding: 2rem;\r\n}\r\n\r\n.menu-container-grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-auto-rows: 1fr;\r\n    gap: 2rem 4rem;\r\n}\r\n\r\n.menu-container-column {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\n.menu-container-row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n}\r\n\r\n.menu-container-reg {\r\n    border: var(--gold) solid 0.0625rem;\r\n}\r\n\r\n.menu-container-spec {\r\n    background-color: var(--gold);\r\n    color: var(--cream);\r\n}\r\n\r\n.menu-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 2rem;\r\n}\r\n\r\n#menu-section p {\r\n    line-height: 150%;\r\n}\r\n\r\n\r\n\r\n\r\n/** ABOUT SECTION **/\r\n#about-headline {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('./assets/img/jason-leung-unsplash.jpg') center center/cover no-repeat;\r\n}\r\n\r\n#about-section {\r\n    background-color: var(--cream);\r\n    color: var(--black);\r\n    padding: 5rem 5rem;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n\r\n#about-section div {\r\n    text-align: center;\r\n    max-width: 50rem;\r\n}\r\n\r\n\r\n\r\n/** CONTACT PAGE **/\r\n\r\n#contact-headline {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)), url('./assets/img/anima-visual-unsplash.jpg') center center/cover no-repeat;\r\n}\r\n\r\n#contact-section {\r\n    display: flex;\r\n}\r\n\r\n#contact-section .left {\r\n    background: url('./assets/img/jason-leung-unsplash.jpg') center center/cover no-repeat;\r\n    flex: 1;\r\n}\r\n\r\n#contact-section .right {\r\n    background-color: var(--gold);\r\n    flex: 1;\r\n}\r\n\r\n\r\n\r\n/** FOOTER SECTION **/\r\n\r\nfooter {\r\n    background-color: var(--farina-blue);\r\n    color: var(--cream);\r\n}\r\n\r\nfooter p {\r\n    font-size: 0.75rem;\r\n    text-transform: uppercase;\r\n    line-height: 200%;\r\n}\r\n\r\n#footer-top {\r\n    display :flex;\r\n    justify-content: space-between;\r\n    gap: 3rem;\r\n    padding: 5rem;\r\n}\r\n\r\n#footer-bottom {\r\n    background-color: var(--farina-dark-blue);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 1rem 5rem;\r\n}\r\n\r\n#footer-left {\r\n    display: flex;\r\n    gap: 3rem;\r\n}\r\n\r\n#footer-left div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n#github-logo {\r\n    width: 2rem;\r\n    filter: invert(18%) sepia(98%) saturate(2515%) hue-rotate(23deg) brightness(98%) contrast(87%);\r\n}\r\n\r\n.logo {\r\n    height: 6rem;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/media-queries.css":
/*!*******************************!*\
  !*** ./src/media-queries.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./media-queries.css */ "./node_modules/css-loader/dist/cjs.js!./src/media-queries.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_media_queries_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAboutHeadline": () => (/* binding */ createAboutHeadline),
/* harmony export */   "createAboutSection": () => (/* binding */ createAboutSection)
/* harmony export */ });
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ "./src/constructors.js");


function createAboutHeadline() {
  const attribute = 'Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Jason Leung</a> on <a href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';

  const aboutHeadlineDiv = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createHeadline)('about-headline', attribute, 'About Us');

  return aboutHeadlineDiv;
}

function createAboutSection() {
  const aboutSection = document.createElement('div');
  const aboutSectionDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  aboutSection.id = 'about-section';
  h2.classList.add('bold');

  h2.innerHTML = 'Sharing our love for Neopolitan food<br><br>';

  p1.innerHTML = 'This website is a project of The Odin Project and is part of the Full Stack Javascript curriculum. The purpose of this website is to demonstrate knowledge and skills of Classes, ES6 Modules, and Webpack.<br><br>';

  p2.innerHTML = 'The restaurant described in this website is fictional and inspired by real restaurants that serve authentic Italian dishes. The names of the dishes mentioned in this site are not intended to be an accurate representation of Itailan food, namely Neopolitan dishes.';

  aboutSectionDiv.appendChild(h2);
  aboutSectionDiv.appendChild(p1);
  aboutSectionDiv.appendChild(p2);

  aboutSection.appendChild(aboutSectionDiv);

  return aboutSection;
}




/***/ }),

/***/ "./src/constructors.js":
/*!*****************************!*\
  !*** ./src/constructors.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAttributePara": () => (/* binding */ createAttributePara),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createHeadline": () => (/* binding */ createHeadline)
/* harmony export */ });
function createAttribute(attributeInnerHTML) {
  const attributeDiv = document.createElement('div');
  const pAttribute = document.createElement('p');

  pAttribute.classList.add('attrLowlight');

  pAttribute.innerHTML = attributeInnerHTML;
  attributeDiv.appendChild(pAttribute);

  return attributeDiv;
}

function createAttributePara(attributeInnerHTML) {
  const pAttribute = document.createElement('p');

  pAttribute.classList.add('attrHighlight');

  pAttribute.innerHTML = attributeInnerHTML;

  return pAttribute;
}

function createHeader(headerName) {
  const headerDiv = document.createElement('div');
  const h1Header = document.createElement('h1');

  h1Header.innerHTML = headerName;
  headerDiv.appendChild(h1Header);

  return headerDiv;
}

function createHeadline(idName, attributeInnerHTML, headerName) {
  const headlineDiv = document.createElement('div');
  const attributeDiv = createAttribute(attributeInnerHTML);
  const headerDiv = createHeader(headerName);

  headlineDiv.id = idName;
  headlineDiv.classList.add('headline');

  headlineDiv.appendChild(headerDiv);
  headlineDiv.appendChild(attributeDiv);

  return headlineDiv;
}

function createButton(classArray, buttonContent) {
  const button = document.createElement('button');

  for (let i = 0; i < classArray.length; i += 1) {
    button.classList.add(classArray[i]);
  }

  button.innerHTML = buttonContent;

  return button;
}




/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContactHeadline": () => (/* binding */ createContactHeadline),
/* harmony export */   "createContactSection": () => (/* binding */ createContactSection)
/* harmony export */ });
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ "./src/constructors.js");


function createContactHeadline() {
  const attribute = 'Photo by <a href="https://unsplash.com/@animavisual?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Anima Visual</a> on <a href="https://unsplash.com/photos/RAw5_TwkaBI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';

  const contactHeadlineDiv = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createHeadline)('contact-headline', attribute, 'Contact Us');

  return contactHeadlineDiv;
}

function createContactSection() {
  const contactSection = document.createElement('div');
  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const contentDiv = document.createElement('div');
  const addressDiv = document.createElement('div');
  const servicesDiv = document.createElement('div');
  const summaryDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const pAddress = document.createElement('p');
  const pServices = document.createElement('p');
  const pSummary = document.createElement('p');
  const bServices = document.createElement('b');

  const attribute = 'Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Jason Leung</a> on <a href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';
  const pAttribute = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createAttributePara)(attribute);

  contactSection.id = 'contact-section';
  leftDiv.classList.add('left');
  leftDiv.classList.add('attribute');

  leftDiv.appendChild(pAttribute);

  rightDiv.classList.add('right');
  contentDiv.classList.add('content');

  h2.classList.add('orange');
  h2.classList.add('bold');
  h2.innerHTML = 'Italia Farina';

  pAddress.innerHTML = '2775 Coleman Avenue<br>San Marcos, CA 92078<br>(760) 653-3230<br>info@italiafarina.com';

  addressDiv.appendChild(h2);
  addressDiv.appendChild(pAddress);

  bServices.classList.add('orange');
  bServices.innerHTML = 'Catering • Private Events • Reservations';
  pServices.appendChild(bServices);

  servicesDiv.appendChild(pServices);

  pSummary.innerHTML = 'Have a private event you\'d like to host at our restaurant? Need us to cater for your next party? Please email us for inquiries!';

  summaryDiv.appendChild(pSummary);

  contentDiv.appendChild(addressDiv);
  contentDiv.appendChild(servicesDiv);
  contentDiv.appendChild(summaryDiv);

  rightDiv.appendChild(contentDiv);

  contactSection.appendChild(leftDiv);
  contactSection.appendChild(rightDiv);

  return contactSection;
}




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeadline": () => (/* binding */ createHeadline),
/* harmony export */   "createMessageFromUs": () => (/* binding */ createMessageFromUs),
/* harmony export */   "createViewMenu": () => (/* binding */ createViewMenu)
/* harmony export */ });
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructors */ "./src/constructors.js");


function createHeadline() {
  const headlineDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const pAttribute = document.createElement('p');

  headlineDiv.id = 'headline';
  headlineDiv.classList.add('attribute');

  h1.innerHTML = 'Italian dishes with a Napoletano essence<br><br>';

  pAttribute.classList.add('attrLowlight');

  pAttribute.innerHTML = 'Photo by <a href="https://unsplash.com/@allthestories?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Storiès</a> on <a href="https://unsplash.com/photos/v1rUvnVMMkM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';

  headlineDiv.appendChild(h1);
  headlineDiv.appendChild(pAttribute);

  return headlineDiv;
}

function createMessageFromUs() {
  const messageFromUsDiv = document.createElement('div');

  messageFromUsDiv.id = 'message-from-us';

  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const contentDiv = document.createElement('div');

  const attribute = 'Photo by <a href="https://unsplash.com/@clark_douglas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Clark Douglas</a> on <a href="https://unsplash.com/photos/17ZU9BPy_Q4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';
  const pAttribute = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createAttributePara)(attribute);

  leftDiv.classList.add('left');
  leftDiv.classList.add('attribute');
  leftDiv.appendChild(pAttribute);

  rightDiv.classList.add('right');
  contentDiv.classList.add('content');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = 'Buon Appetito!';
  p.innerText = 'At Italia Farina, we bring the flavors of Napoli to you. We give you a wide variety of dishes to experience the unique culinary history of Napoli, Italy.';

  const buttonClasses = ['btn-lg', 'btn-outline', 'btn-cream-outline'];
  const learnMoreButton = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createButton)(buttonClasses, 'Learn More');

  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
  contentDiv.appendChild(learnMoreButton);

  rightDiv.appendChild(contentDiv);

  messageFromUsDiv.appendChild(leftDiv);
  messageFromUsDiv.appendChild(rightDiv);

  return messageFromUsDiv;
}

function createViewMenu() {
  const viewMenuDiv = document.createElement('div');
  viewMenuDiv.id = 'view-menu';

  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const contentDiv = document.createElement('div');

  const attribute = 'Photo by <a href="https://unsplash.com/@hojastudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Hoja Studio</a> on <a href="https://unsplash.com/photos/Thw3nleO3cM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';
  const pAttribute = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createAttributePara)(attribute);

  leftDiv.classList.add('left');

  rightDiv.classList.add('right');
  rightDiv.classList.add('attribute');
  rightDiv.appendChild(pAttribute);

  contentDiv.classList.add('content');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = 'Tastes Like Home';
  p.innerText = 'Discover our carefully crafted Napolitano dishes.';

  const buttonClasses = ['btn-lg', 'btn-outline', 'btn-cream-outline'];
  const exploreMenuButton = (0,_constructors__WEBPACK_IMPORTED_MODULE_0__.createButton)(buttonClasses, 'Explore Our Menu');

  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
  contentDiv.appendChild(exploreMenuButton);

  leftDiv.appendChild(contentDiv);

  viewMenuDiv.appendChild(leftDiv);
  viewMenuDiv.appendChild(rightDiv);

  return viewMenuDiv;
}




/***/ }),

/***/ "./src/menu-list.js":
/*!**************************!*\
  !*** ./src/menu-list.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "antipastoArray": () => (/* binding */ antipastoArray),
/* harmony export */   "dolceArray": () => (/* binding */ dolceArray),
/* harmony export */   "insalataArray": () => (/* binding */ insalataArray),
/* harmony export */   "pastaArray": () => (/* binding */ pastaArray),
/* harmony export */   "pizzaArray": () => (/* binding */ pizzaArray),
/* harmony export */   "sauceArray": () => (/* binding */ sauceArray),
/* harmony export */   "specialArray": () => (/* binding */ specialArray)
/* harmony export */ });
class MenuItem {
  constructor(name, description, price) {
    this.instanceName = name;
    this.instanceDescription = description;
    this.instancePrice = price;
  }

  get name() {
    return this.instanceName;
  }

  get description() {
    return this.instanceDescription;
  }

  get price() {
    return this.instancePrice;
  }
}

const calamari = new MenuItem('Calamari Fritti', 'Fried calamari served with marinara', '$9');
const bruschetta = new MenuItem('Bruschetta Alla Caprese', 'Toasted bruschetta with tomato, basil, evoo, balsamic glaze', '$7');
const polpette = new MenuItem('Polpette', 'Beef and pork meatballs in marinara', '$10');
const zuppa = new MenuItem('Zuppa Del Giorno', 'Soup of the day', '$6');

const antipastoArray = [calamari, bruschetta, polpette, zuppa];

const caprese = new MenuItem('Caprese', 'Mozzarella, basil, tomatoes, evoo, and balsamic vinegar', '$7');
const toscana = new MenuItem('Toscana', 'Chicken, pine nuts, goat cheese, spinach', '$9');
const panzanella = new MenuItem('Panezenla', 'Basil, red onions, tomatoes, evoo, balsamic vinegar, bread', '$7');
const rucola = new MenuItem('Rucola', 'Arugula, tomatoes, walnuts, shaved parmigiano', '$9');

const insalataArray = [caprese, toscana, panzanella, rucola];

const gelato = new MenuItem('Gelato', 'Strawberry, chocolate, or vanilla ice cream', '$3');
const tiramisu = new MenuItem('Tiramisu', 'Ladyfingers dipped in coffee, topped with cream, mascarpone, and cocoa powder', '$6');
const cannoli = new MenuItem('Cannoli', 'Pastry shell filled with sweet ricotta cream and cocoa chips', '$6');
const pannacotta = new MenuItem('Panna Cotta', 'Sweet, creamy gelatin topped with berry mix and berry glaze', '$5');

const dolceArray = [gelato, tiramisu, cannoli, pannacotta];

const pastaSpecial = new MenuItem('Pasta Of The Day', 'Chef\'s creation', '$12');
const seafoodSpecial = new MenuItem('Seafood Of The Day', 'Chef\'s creation with catch of the day', 'M/P');
const pizzaSpecial = new MenuItem('Pizza Of The Day', 'Chef\'s creation', '$12');
const risottoSpecial = new MenuItem('Risotto Of The Day', 'Chef\'s creation', '$12');

const specialArray = [pastaSpecial, seafoodSpecial, pizzaSpecial, risottoSpecial];

const margherita = new MenuItem('Margherita', 'Mozzarella, marinara, basil, evoo', '$12');
const pesto = new MenuItem('Pesto', 'Pesto, tomatoes, burrata', '$12');
const sergio = new MenuItem('Sergio', 'Mozzarella, brie, smoked proscuitto', '$12');
const marinara = new MenuItem('Marinara', 'Marinara, oregano, garlic, tomatoes', '$12');
const puttanesca = new MenuItem('Puttanesca', 'Mozzarella, capers, anchovies, olives, tomatoes', '$12');
const diavola = new MenuItem('Diavola', 'Tomatoes, basil, spicy salame', '$12');

const pizzaArray = [margherita, pesto, sergio, marinara, puttanesca, diavola];

const penne = new MenuItem('Penne', '', '$1');
const gnocchi = new MenuItem('Gnocchi', '', '$1');
const spaghetti = new MenuItem('Spaghetti', '', '$1');
const fettuccine = new MenuItem('Fettuccine', '', '$1');

const pastaArray = [penne, gnocchi, spaghetti, fettuccine];

const amatriciana = new MenuItem('Amatriciana', 'Tomatoes, guanciale, onions, pecorino romano', '$10');
const pestoSauce = new MenuItem('Pesto', 'Basil, pine nuts, parmigiano reggiano, evoo', '$10');
const carbonara = new MenuItem('Carbonara', 'Egg, pecorino romano, guanciale', '$10');
const cacioepepe = new MenuItem('Cacio E Pepe', 'Pecorino romano, black pepper', '$10');

const sauceArray = [amatriciana, pestoSauce, carbonara, cacioepepe];




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenuHeadline": () => (/* binding */ createMenuHeadline),
/* harmony export */   "createMenuSection": () => (/* binding */ createMenuSection)
/* harmony export */ });
/* harmony import */ var _menu_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-list */ "./src/menu-list.js");
/* harmony import */ var _constructors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructors */ "./src/constructors.js");




class TableInfo {
  constructor(name, menuItemsArray) {
    this.instanceTableName = name;
    this.instanceItems = menuItemsArray;
  }

  get tableName() {
    return this.instanceTableName;
  }

  get items() {
    return this.instanceItems;
  }
}

function createMenuHeadline() {
  const attribute = 'Photo by <a href="https://unsplash.com/@shaktirajpurohit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Shakti Rajpurohit</a> on <a href="https://unsplash.com/photos/FvOGEAL2GPE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';

  const menuHeadlineDiv = (0,_constructors__WEBPACK_IMPORTED_MODULE_1__.createHeadline)('menu-headline', attribute, 'Menu');

  return menuHeadlineDiv;
}

function createMenuItemDiv(itemName, itemDescription, itemPrice) {
  const menuItemDiv = document.createElement('div');
  const nameDescDiv = document.createElement('div');
  const priceDiv = document.createElement('div');
  const nameDescP = document.createElement('p');
  const priceP = document.createElement('p');
  const nameStrong = document.createElement('strong');
  const priceStrong = document.createElement('strong');
  const descTextNode = document.createTextNode(itemDescription);
  const br = document.createElement('br');

  menuItemDiv.classList.add('menu-item');

  nameStrong.innerHTML = itemName;

  nameDescP.appendChild(nameStrong);
  nameDescP.appendChild(br);
  nameDescP.appendChild(descTextNode);
  nameDescDiv.appendChild(nameDescP);

  priceStrong.innerHTML = itemPrice;
  priceP.appendChild(priceStrong);
  priceDiv.appendChild(priceP);

  menuItemDiv.appendChild(nameDescDiv);
  menuItemDiv.appendChild(priceDiv);

  return menuItemDiv;
}

function createMenuHeaderDiv(headerName) {
  const headerDiv = document.createElement('div');
  const h2 = document.createElement('h2');

  h2.innerHTML = headerName;
  headerDiv.appendChild(h2);
  headerDiv.classList.add('menu-header');

  return headerDiv;
}

function createMenuTableDiv(id, classArray, menuType, headerName, menuItemArray, menuItemArray2) {
  const table = document.createElement('div');

  table.id = id;
  const menuItems = [];
  const menuItems2 = [];

  for (let i = 0; i < classArray.length; i += 1) {
    table.classList.add(classArray[i]);
  }

  table.appendChild(createMenuHeaderDiv(headerName));

  for (let i = 0; i < menuItemArray.length; i += 1) {
    const menuName = menuItemArray[i].name;
    const menuDescription = menuItemArray[i].description;
    const menuPrice = menuItemArray[i].price;
    const menuItemDiv = createMenuItemDiv(menuName, menuDescription, menuPrice);

    menuItems.push(menuItemDiv);
  }

  if (menuItemArray2 !== undefined) {
    for (let i = 0; i < menuItemArray2.length; i += 1) {
      const menuName = menuItemArray2[i].name;
      const menuDescription = menuItemArray2[i].description;
      const menuPrice = menuItemArray2[i].price;
      const menuItemDiv = createMenuItemDiv(menuName, menuDescription, menuPrice);

      menuItems2.push(menuItemDiv);
    }
  }

  if (menuType === 'menu-table-grid') {
    const menuContainerGrid = document.createElement('div');

    menuContainerGrid.classList.add('menu-container-grid');

    for (let i = 0; i < menuItems.length; i += 1) {
      menuContainerGrid.appendChild(menuItems[i]);
    }

    table.appendChild(menuContainerGrid);
  } else if (menuType === 'pasta-and-sauce') {
    const innerGridContainer = document.createElement('div');
    const menuContainerColumnPasta = document.createElement('div');
    const menuContainerColumnSauce = document.createElement('div');
    const pastaMenuContainerGrid = document.createElement('div');
    const sauceMenuContainerGrid = document.createElement('div');
    const pastaDiv = document.createElement('div');
    const sauceDiv = document.createElement('div');
    const pastaH3 = document.createElement('h3');
    const sauceH3 = document.createElement('h3');

    innerGridContainer.classList.add('inner-grid-container');
    menuContainerColumnPasta.classList.add('menu-container-column');
    menuContainerColumnSauce.classList.add('menu-container-column');
    pastaMenuContainerGrid.classList.add('menu-container-grid');
    sauceMenuContainerGrid.classList.add('menu-container-grid');

    pastaH3.innerHTML = 'Pasta';
    sauceH3.innerHTML = 'Sauce';

    pastaDiv.appendChild(pastaH3);
    sauceDiv.appendChild(sauceH3);

    menuContainerColumnPasta.appendChild(pastaDiv);
    menuContainerColumnSauce.appendChild(sauceDiv);

    for (let i = 0; i < menuItems.length; i += 1) {
      pastaMenuContainerGrid.appendChild(menuItems[i]);
    }

    for (let i = 0; i < menuItemArray2.length; i += 1) {
      sauceMenuContainerGrid.appendChild(menuItems2[i]);
    }

    menuContainerColumnPasta.appendChild(pastaMenuContainerGrid);
    menuContainerColumnSauce.appendChild(sauceMenuContainerGrid);

    innerGridContainer.appendChild(menuContainerColumnPasta);
    innerGridContainer.appendChild(menuContainerColumnSauce);

    table.appendChild(innerGridContainer);
  } else {
    for (let i = 0; i < menuItems.length; i += 1) {
      table.appendChild(menuItems[i]);
    }
  }

  return table;
}

function createMenuSummarySection() {
  const summaryDiv = document.createElement('div');
  const p = document.createElement('p');

  summaryDiv.id = 'menu-summary';

  p.innerHTML = '<b>Our menu is simple and serves the same dishes for lunch and dinner. This ensures we can provide quality dishes.</b>';
  summaryDiv.appendChild(p);

  return summaryDiv;
}

function createMenuSection() {
  const menuSection = document.createElement('div');
  const gridContainer = document.createElement('div');
  const classArrayColumn = ['menu-container', 'menu-container-column', 'menu-container-reg'];
  const classSpecGridColumn = ['menu-container', 'menu-container-column', 'menu-container-spec', 'menu-table-grid'];
  const classGridColumn = ['menu-container', 'menu-container-column', 'menu-container-reg', 'menu-table-grid'];
  const innerGridContainerLeft = document.createElement('div');
  const innerGridContainerRight = document.createElement('div');
  const menuSummaryDiv = createMenuSummarySection();

  innerGridContainerLeft.classList.add('inner-grid-container');
  innerGridContainerRight.classList.add('inner-grid-container');
  menuSection.id = 'menu-section';
  gridContainer.id = 'grid-container';

  const antipastoTable = new TableInfo('Antipasto', _menu_list__WEBPACK_IMPORTED_MODULE_0__.antipastoArray);
  const insalataTable = new TableInfo('Insalata', _menu_list__WEBPACK_IMPORTED_MODULE_0__.insalataArray);
  const dolceTable = new TableInfo('Dolce', _menu_list__WEBPACK_IMPORTED_MODULE_0__.dolceArray);

  const antipastoDiv = createMenuTableDiv('antipasto', classArrayColumn, 'regular', antipastoTable.tableName, antipastoTable.items);
  const insalataDiv = createMenuTableDiv('insalata', classArrayColumn, 'regular', insalataTable.tableName, insalataTable.items);
  const dolceDiv = createMenuTableDiv('dolce', classArrayColumn, 'regular', dolceTable.tableName, dolceTable.items);

  const specialTable = new TableInfo('Special Of The Day', _menu_list__WEBPACK_IMPORTED_MODULE_0__.specialArray);
  const pizzaTable = new TableInfo('Pizza', _menu_list__WEBPACK_IMPORTED_MODULE_0__.pizzaArray);

  const specialDiv = createMenuTableDiv('special', classSpecGridColumn, 'menu-table-grid', specialTable.tableName, specialTable.items);
  const pizzaDiv = createMenuTableDiv('pizza', classGridColumn, 'menu-table-grid', pizzaTable.tableName, pizzaTable.items);

  const pastaTable = new TableInfo('Pasta & Sauce', _menu_list__WEBPACK_IMPORTED_MODULE_0__.pastaArray);
  const sauceTable = new TableInfo('Pasta & Sauce', _menu_list__WEBPACK_IMPORTED_MODULE_0__.sauceArray);

  const pastaSauceDiv = createMenuTableDiv('pasta-sauce', classGridColumn, 'pasta-and-sauce', pastaTable.tableName, pastaTable.items, sauceTable.items);

  innerGridContainerLeft.appendChild(antipastoDiv);
  innerGridContainerLeft.appendChild(insalataDiv);
  innerGridContainerLeft.appendChild(dolceDiv);

  innerGridContainerRight.appendChild(specialDiv);
  innerGridContainerRight.appendChild(pizzaDiv);
  innerGridContainerRight.appendChild(pastaSauceDiv);

  gridContainer.appendChild(innerGridContainerLeft);
  gridContainer.appendChild(innerGridContainerRight);
  menuSection.appendChild(menuSummaryDiv);
  menuSection.appendChild(gridContainer);

  return menuSection;
}




/***/ }),

/***/ "./src/assets/fonts/InriaSans-Regular.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/InriaSans-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8aeafc1e24f5145aab6.ttf";

/***/ }),

/***/ "./src/assets/fonts/InriaSerif-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/InriaSerif-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f43b3e7fe0caf2aaeade.ttf";

/***/ }),

/***/ "./src/assets/img/anima-visual-unsplash.jpg":
/*!**************************************************!*\
  !*** ./src/assets/img/anima-visual-unsplash.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a825a3c31d714cb0eb9.jpg";

/***/ }),

/***/ "./src/assets/img/clark-douglas-unsplash-resized.jpg":
/*!***********************************************************!*\
  !*** ./src/assets/img/clark-douglas-unsplash-resized.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5598bb304a7ec33256fd.jpg";

/***/ }),

/***/ "./src/assets/img/hoja-studio-unsplash.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/hoja-studio-unsplash.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce21e522b256f6a93633.jpg";

/***/ }),

/***/ "./src/assets/img/jason-leung-unsplash.jpg":
/*!*************************************************!*\
  !*** ./src/assets/img/jason-leung-unsplash.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1f970303cb4db8211ab.jpg";

/***/ }),

/***/ "./src/assets/img/shakti-rajpurohit-unsplash.jpg":
/*!*******************************************************!*\
  !*** ./src/assets/img/shakti-rajpurohit-unsplash.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0c6ef5e54aabe34c801.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _media_queries_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-queries.css */ "./src/media-queries.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







(function runPage() {
  /** MINIMIZE NAVBAR ON SCROLL * */
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName('header-logo')[0].style.height = '4rem';
    } else {
      document.getElementsByClassName('header-logo')[0].style.height = '6rem';
    }
  }

  function forcePaddingHeaderSmall() {
    document.getElementsByTagName('header')[0].style.padding = '0rem 1rem';
  }

  function forceHeaderLogoSmall() {
    document.getElementsByClassName('header-logo')[0].style.height = '4rem';
  }

  function forceShowNav() {
    document.getElementById('nav').style.display = 'flex';
  }

  function forceHideNav() {
    document.getElementById('nav').style.display = 'none';
  }

  function setNavDisplayNone() {
    const x = document.getElementById('nav');

    x.style.display = 'none';
  }

  function addCloseMenu() {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].addEventListener('click', setNavDisplayNone);
    }
  }

  function removeCloseMenu() {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].removeEventListener('click', setNavDisplayNone);
    }
  }

  function forceOnScroll() {
    if (window.innerWidth > 1024) {
      scrollFunction();
    }
  }

  function forceOnResize() {
    if (window.innerWidth <= 1024) {
      forcePaddingHeaderSmall();
      forceHeaderLogoSmall();
      forceHideNav();
      addCloseMenu();
    } else {
      removeCloseMenu();
      forceShowNav();
      scrollFunction();
    }
  }

  window.onscroll = () => {
    if (window.innerWidth > 1024) {
      scrollFunction();
    }
  };

  window.onresize = () => {
    if (window.innerWidth <= 1024) {
      forcePaddingHeaderSmall();
      forceHeaderLogoSmall();
      forceHideNav();
      addCloseMenu();
    } else {
      removeCloseMenu();
      forceShowNav();
      scrollFunction();
    }
  };

  function openMenu() {
    const x = document.getElementById('nav');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

  function clearContents() {
    document.getElementById('content').innerHTML = '';
  }

  function loadHomePage() {
    clearContents();

    document.getElementById('content').appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.createHeadline)());
    document.getElementById('content').appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.createMessageFromUs)());
    document.getElementById('content').appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.createViewMenu)());
  }

  function loadMenuPage() {
    clearContents();

    document.getElementById('content').appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuHeadline)());
    document.getElementById('content').appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenuSection)());
  }

  function loadAboutPage() {
    clearContents();

    document.getElementById('content').appendChild((0,_about__WEBPACK_IMPORTED_MODULE_4__.createAboutHeadline)());
    document.getElementById('content').appendChild((0,_about__WEBPACK_IMPORTED_MODULE_4__.createAboutSection)());
  }

  function loadContactPage() {
    clearContents();

    document.getElementById('content').appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_5__.createContactHeadline)());
    document.getElementById('content').appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_5__.createContactSection)());
  }

  document.getElementById('home').addEventListener('click', loadHomePage);
  document.getElementById('menu').addEventListener('click', loadMenuPage);
  document.getElementById('about').addEventListener('click', loadAboutPage);
  document.getElementById('contact').addEventListener('click', loadContactPage);
  document.getElementById('mobile-nav-icon').addEventListener('click', openMenu);

  forceOnScroll();
  forceOnResize();

  clearContents();
  loadHomePage();
}());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFNBQVMsYUFBYSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxTQUFTLGFBQWEsTUFBTSxZQUFZLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxTQUFTLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFL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ZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVkaWEtcXVlcmllcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lZGlhLXF1ZXJpZXMuY3NzPzQzNmIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb25zdHJ1Y3RvcnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtbGlzdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qKiBHRU5FUkFMIFBST1BFUlRJRVMqKi9cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZzogNXJlbSA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNoZWFkbGluZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qKiBCVVRUT04gUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgLmJ0bi1sZyB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qKiBHRU5FUkFMIFBST1BFUlRJRVMqKi9cXHJcXG4gICAgI2NvbnRlbnQge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiogSEVBREVSIFBST1BFUlRJRVMgKiovXFxyXFxuICAgIGhlYWRlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDByZW0gMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGVyLWxvZ28ge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNoZWFkbGluZSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYgdWwge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgICAgIGdhcDogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmF2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDByZW07XFxyXFxuXFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBuYXYge1xcclxcbiAgICAgICAgcGFkZGluZzogMXJlbSAwcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtb2JpbGUtbmF2IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICByaWdodDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbW9iaWxlLW5hdi1pY29uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyoqIEZPT1RFUiBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAjZm9vdGVyLXRvcCB7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZm9vdGVyLWJvdHRvbSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNmb290ZXItcmlnaHQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qKiBHRU5FUkFMIFBST1BFUlRJRVMqKi9cXHJcXG4gICAgLmhlYWRsaW5lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyoqIEhPTUUgUEFHRSAqKi9cXHJcXG4gICAgI2hlYWRsaW5lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21lc3NhZ2UtZnJvbS11cyB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdmlldy1tZW51IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAvKiogTUVOVSBQQUdFICoqL1xcclxcbiAgICAjbWVudS1zZWN0aW9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgICAgICBnYXA6IDNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2dyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1jb250YWluZXItZ3JpZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyoqIENPTlRBQ1QgUEFHRSAqKi9cXHJcXG4gICAgI2NvbnRhY3Qtc2VjdGlvbiB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxyXFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0cmVtKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiogRk9PVEVSICoqL1xcclxcbiAgICAjZm9vdGVyLWxlZnQgZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcclxcblxcclxcbiAgICAvKiogR0VORVJBTCBQUk9QRVJUSUVTKiovXFxyXFxuICAgIC5jb250ZW50IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZGxpbmUge1xcclxcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qKiBIRUFERVIgUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgI2hlYWRsaW5lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiogTUVOVSBQQUdFIFBST1BFUlRJRVMgKiovXFxyXFxuICAgICNtZW51LXNlY3Rpb24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICAgICAgZ2FwOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiogQUJPVVQgUEFHRSAqKi9cXHJcXG4gICAgI2Fib3V0LXNlY3Rpb24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qKiBGT09URVIgUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgI2Zvb3Rlci1sZWZ0IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21lZGlhLXF1ZXJpZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHdCQUF3QjtJQUN4QjtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUEsd0JBQXdCO0lBQ3hCO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtJQUNwQjs7O0FBR0o7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBLHdCQUF3QjtJQUN4QjtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCOztRQUVsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixRQUFRO0lBQ1o7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBLHdCQUF3QjtJQUN4QjtRQUNJLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QjtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztJQUVBLGdCQUFnQjtJQUNoQjtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLDBCQUEwQjtJQUM5Qjs7O0lBR0EsZ0JBQWdCO0lBQ2hCO1FBQ0ksYUFBYTtRQUNiLFNBQVM7SUFDYjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLDJCQUEyQjtJQUMvQjs7SUFFQSxtQkFBbUI7SUFDbkI7UUFDSSw4QkFBOEI7UUFDOUIsMEJBQTBCO0lBQzlCOztJQUVBLGFBQWE7SUFDYjtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEI7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQSx3QkFBd0I7SUFDeEI7UUFDSSxlQUFlO0lBQ25COztJQUVBLDJCQUEyQjtJQUMzQjtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBLGlCQUFpQjtJQUNqQjtRQUNJLGVBQWU7SUFDbkI7O0lBRUEsd0JBQXdCO0lBQ3hCO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG5cXHJcXG4gICAgLyoqIEdFTkVSQUwgUFJPUEVSVElFUyoqL1xcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cmVtIDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hlYWRsaW5lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyoqIEJVVFRPTiBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAuYnRuLWxnIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXHJcXG5cXHJcXG4gICAgLyoqIEdFTkVSQUwgUFJPUEVSVElFUyoqL1xcclxcbiAgICAjY29udGVudCB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qKiBIRUFERVIgUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgaGVhZGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcGFkZGluZzogMHJlbSAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkZXItbG9nbyB7XFxyXFxuICAgICAgICBoZWlnaHQ6IDRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2hlYWRsaW5lIHtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG5hdiB1bCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuYXYge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMHJlbTtcXHJcXG5cXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG5hdiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDByZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21vYmlsZS1uYXYge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtb2JpbGUtbmF2LWljb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiogRk9PVEVSIFBST1BFUlRJRVMgKiovXFxyXFxuICAgICNmb290ZXItdG9wIHtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNmb290ZXItYm90dG9tIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Zvb3Rlci1yaWdodCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyoqIEdFTkVSQUwgUFJPUEVSVElFUyoqL1xcclxcbiAgICAuaGVhZGxpbmUge1xcclxcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGVudCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiogSE9NRSBQQUdFICoqL1xcclxcbiAgICAjaGVhZGxpbmUge1xcclxcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVzc2FnZS1mcm9tLXVzIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN2aWV3LW1lbnUge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC8qKiBNRU5VIFBBR0UgKiovXFxyXFxuICAgICNtZW51LXNlY3Rpb24ge1xcclxcbiAgICAgICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgICAgIGdhcDogM3JlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZ3JpZC1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51LWNvbnRhaW5lci1ncmlkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKiogQ09OVEFDVCBQQUdFICoqL1xcclxcbiAgICAjY29udGFjdC1zZWN0aW9uIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXHJcXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDRyZW0pO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qKiBGT09URVIgKiovXFxyXFxuICAgICNmb290ZXItbGVmdCBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxyXFxuXFxyXFxuICAgIC8qKiBHRU5FUkFMIFBST1BFUlRJRVMqKi9cXHJcXG4gICAgLmNvbnRlbnQge1xcclxcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5oZWFkbGluZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyoqIEhFQURFUiBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAjaGVhZGxpbmUge1xcclxcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qKiBNRU5VIFBBR0UgUFJPUEVSVElFUyAqKi9cXHJcXG4gICAgI21lbnUtc2VjdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgICAgICBnYXA6IDEuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudS1jb250YWluZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qKiBBQk9VVCBQQUdFICoqL1xcclxcbiAgICAjYWJvdXQtc2VjdGlvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyoqIEZPT1RFUiBQUk9QRVJUSUVTICoqL1xcclxcbiAgICAjZm9vdGVyLWxlZnQge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL0lucmlhU2VyaWYtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9JbnJpYVNhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvY2xhcmstZG91Z2xhcy11bnNwbGFzaC1yZXNpemVkLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9ob2phLXN0dWRpby11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9pbWcvc2hha3RpLXJhanB1cm9oaXQtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1nL2phc29uLWxldW5nLXVuc3BsYXNoLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ltZy9hbmltYS12aXN1YWwtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0Ym9yZGVyOiAwO1xcclxcblxcdGZvbnQtc2l6ZTogMTAwJTtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCwgdWwge1xcclxcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGUsIHEge1xcclxcblxcdHF1b3Rlczogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxyXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcclxcblxcdGNvbnRlbnQ6ICcnO1xcclxcblxcdGNvbnRlbnQ6IG5vbmU7XFxyXFxufVxcclxcbnRhYmxlIHtcXHJcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogUk9PVCBWQVJJQUJMRVMgKiovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWJsYWNrOiAjMjIyMjIyO1xcclxcbiAgICAtLWJsYWNrLXRyYW5zcGFyZW50OiByZ2JhKDM0LDM0LDM0LDAuOCk7XFxyXFxuICAgIC0td2hpdGU6ICNGMkYyRjI7XFxyXFxuICAgIC0tZmFyaW5hLWJsdWU6ICMxNDEzMzc7XFxyXFxuICAgIC0tZmFyaW5hLWRhcmstYmx1ZTogIzA5MDgxQjtcXHJcXG4gICAgLS1nb2xkOiAjQTg3OTA4O1xcclxcbiAgICAtLWNyZWFtOiAjRUZFMUMyO1xcclxcbiAgICAtLW9yYW5nZTogI0EwNDIxMDtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW5yaWEgU2VyaWYnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0lucmlhIFNhbnMnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0lucmlhIFNhbnMnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtcGFkZGluZyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cmVtIDEwcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMjV2aDtcXHJcXG4gICAgcGFkZGluZzogNXJlbSAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhFQURFUiBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHRvcDogMDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgcGFkZGluZzogMHJlbSA1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnJpYSBTZXJpZicsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGEubmF2LWxpbmsge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuYS5uYXYtbGluayB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbm5hdiBhLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nbyB7XFxyXFxuICAgIGhlaWdodDogNnJlbTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI21vYmlsZS1uYXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlLW5hdi1pY29uIHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTAlKSBzZXBpYSgyMiUpIHNhdHVyYXRlKDQxMSUpIGh1ZS1yb3RhdGUoMzM0ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDg3JSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIC0gVEVYVCBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbnAge1xcclxcbiAgICBsaW5lLWhlaWdodDogMjAwJTtcXHJcXG59XFxyXFxuXFxyXFxucC5hdHRySGlnaGxpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFyaW5hLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG5wLmF0dHJMb3dsaWdodCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXRyYW5zcGFyZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmIge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW5yaWEgU2VyaWYnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0lucmlhIFNlcmlmJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbmgyLmJvbGQge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW5yaWEgU2FucycsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JhbmdlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIC0gQlVUVE9OIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnJpYSBTZXJpZicsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxnIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW91dGxpbmUge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNyZWFtLW91dGxpbmUge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgdmFyKC0tY3JlYW0pO1xcclxcblxcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuN3M7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogZWFzZS1vdXQgMC43cztcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jcmVhbS1vdXRsaW5lOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZhcmluYS1ibHVlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWJsdWUsIC5idG4tb3JhbmdlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLW91dCAwLjJzO1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5idG4tYmx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhcmluYS1ibHVlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ibHVlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3JhbmdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vcmFuZ2U6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1nb2xkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdvbGQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZmFyaW5hLWJsdWUpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tYmx1ZTpob3ZlciwgLmJ0bi1vcmFuZ2U6aG92ZXIsIC5idG4tY3JlYW0tb3V0bGluZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhFQURFUiBTRUNUSU9OICoqL1xcclxcblxcclxcbiNoZWFkbGluZSB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDEwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLHJnYmEoMCwgMCwgMCwgMC40KSksIHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTE0NTkwMzQ0NzAtZDFlMDVkN2IwNWQ0P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNTg3JnE9ODAnKSAyMCUgODAlL2NvdmVyIG5vLXJlcGVhdDtcXHJcXG4gIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUVTU0FHRSBGUk9NIFVTIFNFQ1RJT04gKiovXFxyXFxuXFxyXFxuI21lc3NhZ2UtZnJvbS11cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiAgXFxyXFxuI21lc3NhZ2UtZnJvbS11cyAubGVmdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMikscmdiYSgwLCAwLCAwLCAwLjIpKSAsIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcbiAgXFxyXFxuI21lc3NhZ2UtZnJvbS11cyAucmlnaHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIFZJRVcgTUVOVSBTRUNUSU9OICoqL1xcclxcblxcclxcbiN2aWV3LW1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jdmlldy1tZW51IC5sZWZ0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpZXctbWVudSAucmlnaHQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUVOVSBQQUdFICoqL1xcclxcbiNtZW51LWhlYWRsaW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSxyZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIHRvcCBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiogTUVOVSBTRUNUSU9OICoqL1xcclxcbiNtZW51LXNlY3Rpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICAgIHBhZGRpbmc6IDVyZW0gNXJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1zZWN0aW9uIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1zdW1tYXJ5IHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jZ3JpZC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA1ZnI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyLWdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNwYXN0YS1zYXVjZSAuaW5uZXItZ3JpZC1jb250YWluZXIge1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNwYXN0YS1zYXVjZSBoMyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxuICAgIGdhcDogMnJlbSA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXItY29sdW1uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXItcm93IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lci1yZWcge1xcclxcbiAgICBib3JkZXI6IHZhcigtLWdvbGQpIHNvbGlkIDAuMDYyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyLXNwZWMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudS1zZWN0aW9uIHAge1xcclxcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEFCT1VUIFNFQ1RJT04gKiovXFxyXFxuI2Fib3V0LWhlYWRsaW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSxyZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4jYWJvdXQtc2VjdGlvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcXHJcXG4gICAgcGFkZGluZzogNXJlbSA1cmVtO1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNhYm91dC1zZWN0aW9uIGRpdiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIENPTlRBQ1QgUEFHRSAqKi9cXHJcXG5cXHJcXG4jY29udGFjdC1oZWFkbGluZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMykscmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRhY3Qtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXNlY3Rpb24gLmxlZnQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1zZWN0aW9uIC5yaWdodCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogRk9PVEVSIFNFQ1RJT04gKiovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFyaW5hLWJsdWUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDIwMCU7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItdG9wIHtcXHJcXG4gICAgZGlzcGxheSA6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDVyZW07XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItYm90dG9tIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFyaW5hLWRhcmstYmx1ZSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci1sZWZ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyLWxlZnQgZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZ2l0aHViLWxvZ28ge1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg5OCUpIHNhdHVyYXRlKDI1MTUlKSBodWUtcm90YXRlKDIzZGVnKSBicmlnaHRuZXNzKDk4JSkgY29udHJhc3QoODclKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBoZWlnaHQ6IDZyZW07XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7OztBQUlBLHFCQUFxQjs7QUFFckI7SUFDSSxnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLCtEQUFvRTtJQUNwRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtEQUFtRTtJQUNuRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxtREFBbUQ7SUFDbkQsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7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O0lBQ25CLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7OztBQUlBLG1CQUFtQjs7QUFFbkI7SUFDSSx5SUFBK0k7QUFDbko7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUZBQXNGO0lBQ3RGLE9BQU87QUFDWDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixPQUFPO0FBQ1g7Ozs7QUFJQSxxQkFBcUI7O0FBRXJCO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsOEZBQThGO0FBQ2xHOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXHJcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXHJcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcclxcbiovXFxyXFxuXFxyXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXHJcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxyXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcclxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxyXFxuYiwgdSwgaSwgY2VudGVyLFxcclxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxyXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxyXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcclxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxyXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxyXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBST09UIFZBUklBQkxFUyAqKi9cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmxhY2s6ICMyMjIyMjI7XFxyXFxuICAgIC0tYmxhY2stdHJhbnNwYXJlbnQ6IHJnYmEoMzQsMzQsMzQsMC44KTtcXHJcXG4gICAgLS13aGl0ZTogI0YyRjJGMjtcXHJcXG4gICAgLS1mYXJpbmEtYmx1ZTogIzE0MTMzNztcXHJcXG4gICAgLS1mYXJpbmEtZGFyay1ibHVlOiAjMDkwODFCO1xcclxcbiAgICAtLWdvbGQ6ICNBODc5MDg7XFxyXFxuICAgIC0tY3JlYW06ICNFRkUxQzI7XFxyXFxuICAgIC0tb3JhbmdlOiAjQTA0MjEwO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnJpYSBTZXJpZic7XFxyXFxuICAgIHNyYzogdXJsKCcuL2Fzc2V0cy9mb250cy9JbnJpYVNlcmlmLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ0lucmlhIFNhbnMnO1xcclxcbiAgICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvSW5yaWFTYW5zLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBmb250LWZhbWlseTogJ0lucmlhIFNhbnMnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtcGFkZGluZyB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGJvcmRlcjogMC4xMjVyZW0gc29saWQgdmFyKC0tZ29sZCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiA1cmVtIDEwcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRsaW5lIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMjV2aDtcXHJcXG4gICAgcGFkZGluZzogNXJlbSAxMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmF0dHJpYnV0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhFQURFUiBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHRvcDogMDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgcGFkZGluZzogMHJlbSA1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnJpYSBTZXJpZicsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuI25hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGEubmF2LWxpbmsge1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuYS5uYXYtbGluayB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbm5hdiBhLm5hdi1saW5rOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbG9nbyB7XFxyXFxuICAgIGhlaWdodDogNnJlbTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuI21vYmlsZS1uYXYge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9iaWxlLW5hdi1pY29uIHtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoOTAlKSBzZXBpYSgyMiUpIHNhdHVyYXRlKDQxMSUpIGh1ZS1yb3RhdGUoMzM0ZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDg3JSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIC0gVEVYVCBQUk9QRVJUSUVTICoqL1xcclxcblxcclxcbnAge1xcclxcbiAgICBsaW5lLWhlaWdodDogMjAwJTtcXHJcXG59XFxyXFxuXFxyXFxucC5hdHRySGlnaGxpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmFyaW5hLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG5wLmF0dHJMb3dsaWdodCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLXRyYW5zcGFyZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuc3Ryb25nIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmIge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW5yaWEgU2VyaWYnLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBmb250LWZhbWlseTogJ0lucmlhIFNlcmlmJywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxufVxcclxcblxcclxcbmgyLmJvbGQge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSW5yaWEgU2FucycsICdBcmlhbCcsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JhbmdlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW9yYW5nZSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBHRU5FUkFMIC0gQlVUVE9OIFBST1BFUlRJRVMgKiovXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdJbnJpYSBTZXJpZicsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWxnIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW91dGxpbmUge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDAuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNyZWFtLW91dGxpbmUge1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgdmFyKC0tY3JlYW0pO1xcclxcblxcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuN3M7XFxyXFxuICAgIC1tb3otdHJhbnNpdGlvbjogZWFzZS1vdXQgMC43cztcXHJcXG4gICAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC43cztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jcmVhbS1vdXRsaW5lOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWZhcmluYS1ibHVlKTtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNDAwcHggMCAwIDAgdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWJsdWUsIC5idG4tb3JhbmdlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBlYXNlLW91dCAwLjJzO1xcclxcbiAgICAtbW96LXRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5idG4tYmx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZhcmluYS1ibHVlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ibHVlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxufVxcclxcblxcclxcbi5idG4tb3JhbmdlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNyZWFtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vcmFuZ2U6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1nb2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1nb2xkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuXFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDAgdmFyKC0tY3JlYW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdvbGQ6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZmFyaW5hLWJsdWUpO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCA0MDBweCAwIDAgMCB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbi5idG4tYmx1ZTpob3ZlciwgLmJ0bi1vcmFuZ2U6aG92ZXIsIC5idG4tY3JlYW0tb3V0bGluZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqIEhFQURFUiBTRUNUSU9OICoqL1xcclxcblxcclxcbiNoZWFkbGluZSB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDZyZW0pO1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDEwcmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjQpLHJnYmEoMCwgMCwgMCwgMC40KSksIHVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1OTE0NTkwMzQ0NzAtZDFlMDVkN2IwNWQ0P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xNTg3JnE9ODAnKSAyMCUgODAlL2NvdmVyIG5vLXJlcGVhdDtcXHJcXG4gIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUVTU0FHRSBGUk9NIFVTIFNFQ1RJT04gKiovXFxyXFxuXFxyXFxuI21lc3NhZ2UtZnJvbS11cyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbiAgXFxyXFxuI21lc3NhZ2UtZnJvbS11cyAubGVmdCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMikscmdiYSgwLCAwLCAwLCAwLjIpKSAsIHVybCgnLi9hc3NldHMvaW1nL2NsYXJrLWRvdWdsYXMtdW5zcGxhc2gtcmVzaXplZC5qcGcnKSBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuICBcXHJcXG4jbWVzc2FnZS1mcm9tLXVzIC5yaWdodCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvbGQpO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogVklFVyBNRU5VIFNFQ1RJT04gKiovXFxyXFxuXFxyXFxuI3ZpZXctbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbiN2aWV3LW1lbnUgLmxlZnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdmlldy1tZW51IC5yaWdodCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvaW1nL2hvamEtc3R1ZGlvLXVuc3BsYXNoLmpwZycpIGNlbnRlciBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogTUVOVSBQQUdFICoqL1xcclxcbiNtZW51LWhlYWRsaW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSxyZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoJy4vYXNzZXRzL2ltZy9zaGFrdGktcmFqcHVyb2hpdC11bnNwbGFzaC5qcGcnKSB0b3AgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIE1FTlUgU0VDVElPTiAqKi9cXHJcXG4jbWVudS1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDVyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtc2VjdGlvbiBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtc3VtbWFyeSB7XFxyXFxuICAgIG1heC13aWR0aDogMjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2dyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgNWZyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1heC13aWR0aDogNzByZW07XFxyXFxufVxcclxcblxcclxcbi5pbm5lci1ncmlkLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFzdGEtc2F1Y2UgLmlubmVyLWdyaWQtY29udGFpbmVyIHtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jcGFzdGEtc2F1Y2UgaDMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lci1ncmlkIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgICBnYXA6IDJyZW0gNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyLWNvbHVtbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyLXJvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXItcmVnIHtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1nb2xkKSBzb2xpZCAwLjA2MjVyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lci1zcGVjIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUtc2VjdGlvbiBwIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBBQk9VVCBTRUNUSU9OICoqL1xcclxcbiNhYm91dC1oZWFkbGluZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMykscmdiYSgwLCAwLCAwLCAwLjMpKSwgdXJsKCcuL2Fzc2V0cy9pbWcvamFzb24tbGV1bmctdW5zcGxhc2guanBnJykgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1zZWN0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3JlYW0pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xcclxcbiAgICBwYWRkaW5nOiA1cmVtIDVyZW07XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2Fib3V0LXNlY3Rpb24gZGl2IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiogQ09OVEFDVCBQQUdFICoqL1xcclxcblxcclxcbiNjb250YWN0LWhlYWRsaW5lIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4zKSxyZ2JhKDAsIDAsIDAsIDAuMykpLCB1cmwoJy4vYXNzZXRzL2ltZy9hbmltYS12aXN1YWwtdW5zcGxhc2guanBnJykgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXNlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFjdC1zZWN0aW9uIC5sZWZ0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2V0cy9pbWcvamFzb24tbGV1bmctdW5zcGxhc2guanBnJykgY2VudGVyIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNjb250YWN0LXNlY3Rpb24gLnJpZ2h0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ29sZCk7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qKiBGT09URVIgU0VDVElPTiAqKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYXJpbmEtYmx1ZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jcmVhbSk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci10b3Age1xcclxcbiAgICBkaXNwbGF5IDpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Rlci1ib3R0b20ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYXJpbmEtZGFyay1ibHVlKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyLWxlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNmb290ZXItbGVmdCBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNnaXRodWItbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDk4JSkgc2F0dXJhdGUoMjUxNSUpIGh1ZS1yb3RhdGUoMjNkZWcpIGJyaWdodG5lc3MoOTglKSBjb250cmFzdCg4NyUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICAgIGhlaWdodDogNnJlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lZGlhLXF1ZXJpZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZWRpYS1xdWVyaWVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGxpbmUgfSBmcm9tICcuL2NvbnN0cnVjdG9ycyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dEhlYWRsaW5lKCkge1xyXG4gIGNvbnN0IGF0dHJpYnV0ZSA9ICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG5pbmphc29uP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPkphc29uIExldW5nPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3BvSTdEZWxGaVZBP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlVuc3BsYXNoPC9hPic7XHJcblxyXG4gIGNvbnN0IGFib3V0SGVhZGxpbmVEaXYgPSBjcmVhdGVIZWFkbGluZSgnYWJvdXQtaGVhZGxpbmUnLCBhdHRyaWJ1dGUsICdBYm91dCBVcycpO1xyXG5cclxuICByZXR1cm4gYWJvdXRIZWFkbGluZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRTZWN0aW9uKCkge1xyXG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGFib3V0U2VjdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgYWJvdXRTZWN0aW9uLmlkID0gJ2Fib3V0LXNlY3Rpb24nO1xyXG4gIGgyLmNsYXNzTGlzdC5hZGQoJ2JvbGQnKTtcclxuXHJcbiAgaDIuaW5uZXJIVE1MID0gJ1NoYXJpbmcgb3VyIGxvdmUgZm9yIE5lb3BvbGl0YW4gZm9vZDxicj48YnI+JztcclxuXHJcbiAgcDEuaW5uZXJIVE1MID0gJ1RoaXMgd2Vic2l0ZSBpcyBhIHByb2plY3Qgb2YgVGhlIE9kaW4gUHJvamVjdCBhbmQgaXMgcGFydCBvZiB0aGUgRnVsbCBTdGFjayBKYXZhc2NyaXB0IGN1cnJpY3VsdW0uIFRoZSBwdXJwb3NlIG9mIHRoaXMgd2Vic2l0ZSBpcyB0byBkZW1vbnN0cmF0ZSBrbm93bGVkZ2UgYW5kIHNraWxscyBvZiBDbGFzc2VzLCBFUzYgTW9kdWxlcywgYW5kIFdlYnBhY2suPGJyPjxicj4nO1xyXG5cclxuICBwMi5pbm5lckhUTUwgPSAnVGhlIHJlc3RhdXJhbnQgZGVzY3JpYmVkIGluIHRoaXMgd2Vic2l0ZSBpcyBmaWN0aW9uYWwgYW5kIGluc3BpcmVkIGJ5IHJlYWwgcmVzdGF1cmFudHMgdGhhdCBzZXJ2ZSBhdXRoZW50aWMgSXRhbGlhbiBkaXNoZXMuIFRoZSBuYW1lcyBvZiB0aGUgZGlzaGVzIG1lbnRpb25lZCBpbiB0aGlzIHNpdGUgYXJlIG5vdCBpbnRlbmRlZCB0byBiZSBhbiBhY2N1cmF0ZSByZXByZXNlbnRhdGlvbiBvZiBJdGFpbGFuIGZvb2QsIG5hbWVseSBOZW9wb2xpdGFuIGRpc2hlcy4nO1xyXG5cclxuICBhYm91dFNlY3Rpb25EaXYuYXBwZW5kQ2hpbGQoaDIpO1xyXG4gIGFib3V0U2VjdGlvbkRpdi5hcHBlbmRDaGlsZChwMSk7XHJcbiAgYWJvdXRTZWN0aW9uRGl2LmFwcGVuZENoaWxkKHAyKTtcclxuXHJcbiAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbkRpdik7XHJcblxyXG4gIHJldHVybiBhYm91dFNlY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUFib3V0SGVhZGxpbmUsIGNyZWF0ZUFib3V0U2VjdGlvbiB9O1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGUoYXR0cmlidXRlSW5uZXJIVE1MKSB7XHJcbiAgY29uc3QgYXR0cmlidXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcEF0dHJpYnV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgcEF0dHJpYnV0ZS5jbGFzc0xpc3QuYWRkKCdhdHRyTG93bGlnaHQnKTtcclxuXHJcbiAgcEF0dHJpYnV0ZS5pbm5lckhUTUwgPSBhdHRyaWJ1dGVJbm5lckhUTUw7XHJcbiAgYXR0cmlidXRlRGl2LmFwcGVuZENoaWxkKHBBdHRyaWJ1dGUpO1xyXG5cclxuICByZXR1cm4gYXR0cmlidXRlRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBdHRyaWJ1dGVQYXJhKGF0dHJpYnV0ZUlubmVySFRNTCkge1xyXG4gIGNvbnN0IHBBdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIHBBdHRyaWJ1dGUuY2xhc3NMaXN0LmFkZCgnYXR0ckhpZ2hsaWdodCcpO1xyXG5cclxuICBwQXR0cmlidXRlLmlubmVySFRNTCA9IGF0dHJpYnV0ZUlubmVySFRNTDtcclxuXHJcbiAgcmV0dXJuIHBBdHRyaWJ1dGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcihoZWFkZXJOYW1lKSB7XHJcbiAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaDFIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICBoMUhlYWRlci5pbm5lckhUTUwgPSBoZWFkZXJOYW1lO1xyXG4gIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoMUhlYWRlcik7XHJcblxyXG4gIHJldHVybiBoZWFkZXJEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRsaW5lKGlkTmFtZSwgYXR0cmlidXRlSW5uZXJIVE1MLCBoZWFkZXJOYW1lKSB7XHJcbiAgY29uc3QgaGVhZGxpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBhdHRyaWJ1dGVEaXYgPSBjcmVhdGVBdHRyaWJ1dGUoYXR0cmlidXRlSW5uZXJIVE1MKTtcclxuICBjb25zdCBoZWFkZXJEaXYgPSBjcmVhdGVIZWFkZXIoaGVhZGVyTmFtZSk7XHJcblxyXG4gIGhlYWRsaW5lRGl2LmlkID0gaWROYW1lO1xyXG4gIGhlYWRsaW5lRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRsaW5lJyk7XHJcblxyXG4gIGhlYWRsaW5lRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XHJcbiAgaGVhZGxpbmVEaXYuYXBwZW5kQ2hpbGQoYXR0cmlidXRlRGl2KTtcclxuXHJcbiAgcmV0dXJuIGhlYWRsaW5lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24oY2xhc3NBcnJheSwgYnV0dG9uQ29udGVudCkge1xyXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzQXJyYXkubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaV0pO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmlubmVySFRNTCA9IGJ1dHRvbkNvbnRlbnQ7XHJcblxyXG4gIHJldHVybiBidXR0b247XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUJ1dHRvbiwgY3JlYXRlSGVhZGxpbmUsIGNyZWF0ZUF0dHJpYnV0ZVBhcmEgfTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlSGVhZGxpbmUsIGNyZWF0ZUF0dHJpYnV0ZVBhcmEgfSBmcm9tICcuL2NvbnN0cnVjdG9ycyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SGVhZGxpbmUoKSB7XHJcbiAgY29uc3QgYXR0cmlidXRlID0gJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYW5pbWF2aXN1YWw/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+QW5pbWEgVmlzdWFsPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1JBdzVfVHdrYUJJP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlVuc3BsYXNoPC9hPic7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RIZWFkbGluZURpdiA9IGNyZWF0ZUhlYWRsaW5lKCdjb250YWN0LWhlYWRsaW5lJywgYXR0cmlidXRlLCAnQ29udGFjdCBVcycpO1xyXG5cclxuICByZXR1cm4gY29udGFjdEhlYWRsaW5lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcclxuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBhZGRyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3Qgc2VydmljZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzdW1tYXJ5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0IHBBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHBTZXJ2aWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBwU3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBjb25zdCBiU2VydmljZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdiJyk7XHJcblxyXG4gIGNvbnN0IGF0dHJpYnV0ZSA9ICdQaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG5pbmphc29uP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPkphc29uIExldW5nPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3BvSTdEZWxGaVZBP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlVuc3BsYXNoPC9hPic7XHJcbiAgY29uc3QgcEF0dHJpYnV0ZSA9IGNyZWF0ZUF0dHJpYnV0ZVBhcmEoYXR0cmlidXRlKTtcclxuXHJcbiAgY29udGFjdFNlY3Rpb24uaWQgPSAnY29udGFjdC1zZWN0aW9uJztcclxuICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2F0dHJpYnV0ZScpO1xyXG5cclxuICBsZWZ0RGl2LmFwcGVuZENoaWxkKHBBdHRyaWJ1dGUpO1xyXG5cclxuICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xyXG4gIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xyXG5cclxuICBoMi5jbGFzc0xpc3QuYWRkKCdvcmFuZ2UnKTtcclxuICBoMi5jbGFzc0xpc3QuYWRkKCdib2xkJyk7XHJcbiAgaDIuaW5uZXJIVE1MID0gJ0l0YWxpYSBGYXJpbmEnO1xyXG5cclxuICBwQWRkcmVzcy5pbm5lckhUTUwgPSAnMjc3NSBDb2xlbWFuIEF2ZW51ZTxicj5TYW4gTWFyY29zLCBDQSA5MjA3ODxicj4oNzYwKSA2NTMtMzIzMDxicj5pbmZvQGl0YWxpYWZhcmluYS5jb20nO1xyXG5cclxuICBhZGRyZXNzRGl2LmFwcGVuZENoaWxkKGgyKTtcclxuICBhZGRyZXNzRGl2LmFwcGVuZENoaWxkKHBBZGRyZXNzKTtcclxuXHJcbiAgYlNlcnZpY2VzLmNsYXNzTGlzdC5hZGQoJ29yYW5nZScpO1xyXG4gIGJTZXJ2aWNlcy5pbm5lckhUTUwgPSAnQ2F0ZXJpbmcg4oCiIFByaXZhdGUgRXZlbnRzIOKAoiBSZXNlcnZhdGlvbnMnO1xyXG4gIHBTZXJ2aWNlcy5hcHBlbmRDaGlsZChiU2VydmljZXMpO1xyXG5cclxuICBzZXJ2aWNlc0Rpdi5hcHBlbmRDaGlsZChwU2VydmljZXMpO1xyXG5cclxuICBwU3VtbWFyeS5pbm5lckhUTUwgPSAnSGF2ZSBhIHByaXZhdGUgZXZlbnQgeW91XFwnZCBsaWtlIHRvIGhvc3QgYXQgb3VyIHJlc3RhdXJhbnQ/IE5lZWQgdXMgdG8gY2F0ZXIgZm9yIHlvdXIgbmV4dCBwYXJ0eT8gUGxlYXNlIGVtYWlsIHVzIGZvciBpbnF1aXJpZXMhJztcclxuXHJcbiAgc3VtbWFyeURpdi5hcHBlbmRDaGlsZChwU3VtbWFyeSk7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzc0Rpdik7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChzZXJ2aWNlc0Rpdik7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChzdW1tYXJ5RGl2KTtcclxuXHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcblxyXG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKGxlZnREaXYpO1xyXG4gIGNvbnRhY3RTZWN0aW9uLmFwcGVuZENoaWxkKHJpZ2h0RGl2KTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RTZWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWN0SGVhZGxpbmUsIGNyZWF0ZUNvbnRhY3RTZWN0aW9uIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUJ1dHRvbiwgY3JlYXRlQXR0cmlidXRlUGFyYSB9IGZyb20gJy4vY29uc3RydWN0b3JzJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRsaW5lKCkge1xyXG4gIGNvbnN0IGhlYWRsaW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGNvbnN0IHBBdHRyaWJ1dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGhlYWRsaW5lRGl2LmlkID0gJ2hlYWRsaW5lJztcclxuICBoZWFkbGluZURpdi5jbGFzc0xpc3QuYWRkKCdhdHRyaWJ1dGUnKTtcclxuXHJcbiAgaDEuaW5uZXJIVE1MID0gJ0l0YWxpYW4gZGlzaGVzIHdpdGggYSBOYXBvbGV0YW5vIGVzc2VuY2U8YnI+PGJyPic7XHJcblxyXG4gIHBBdHRyaWJ1dGUuY2xhc3NMaXN0LmFkZCgnYXR0ckxvd2xpZ2h0Jyk7XHJcblxyXG4gIHBBdHRyaWJ1dGUuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AYWxsdGhlc3Rvcmllcz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TdG9yacOoczwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy92MXJVdm5WTU1rTT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VbnNwbGFzaDwvYT4nO1xyXG5cclxuICBoZWFkbGluZURpdi5hcHBlbmRDaGlsZChoMSk7XHJcbiAgaGVhZGxpbmVEaXYuYXBwZW5kQ2hpbGQocEF0dHJpYnV0ZSk7XHJcblxyXG4gIHJldHVybiBoZWFkbGluZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZUZyb21VcygpIHtcclxuICBjb25zdCBtZXNzYWdlRnJvbVVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIG1lc3NhZ2VGcm9tVXNEaXYuaWQgPSAnbWVzc2FnZS1mcm9tLXVzJztcclxuXHJcbiAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBjb25zdCBhdHRyaWJ1dGUgPSAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BjbGFya19kb3VnbGFzP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPkNsYXJrIERvdWdsYXM8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvMTdaVTlCUHlfUTQ/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VW5zcGxhc2g8L2E+JztcclxuICBjb25zdCBwQXR0cmlidXRlID0gY3JlYXRlQXR0cmlidXRlUGFyYShhdHRyaWJ1dGUpO1xyXG5cclxuICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcclxuICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2F0dHJpYnV0ZScpO1xyXG4gIGxlZnREaXYuYXBwZW5kQ2hpbGQocEF0dHJpYnV0ZSk7XHJcblxyXG4gIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XHJcbiAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XHJcblxyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBoMS5pbm5lclRleHQgPSAnQnVvbiBBcHBldGl0byEnO1xyXG4gIHAuaW5uZXJUZXh0ID0gJ0F0IEl0YWxpYSBGYXJpbmEsIHdlIGJyaW5nIHRoZSBmbGF2b3JzIG9mIE5hcG9saSB0byB5b3UuIFdlIGdpdmUgeW91IGEgd2lkZSB2YXJpZXR5IG9mIGRpc2hlcyB0byBleHBlcmllbmNlIHRoZSB1bmlxdWUgY3VsaW5hcnkgaGlzdG9yeSBvZiBOYXBvbGksIEl0YWx5Lic7XHJcblxyXG4gIGNvbnN0IGJ1dHRvbkNsYXNzZXMgPSBbJ2J0bi1sZycsICdidG4tb3V0bGluZScsICdidG4tY3JlYW0tb3V0bGluZSddO1xyXG4gIGNvbnN0IGxlYXJuTW9yZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbihidXR0b25DbGFzc2VzLCAnTGVhcm4gTW9yZScpO1xyXG5cclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGgxKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHApO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobGVhcm5Nb3JlQnV0dG9uKTtcclxuXHJcbiAgcmlnaHREaXYuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcblxyXG4gIG1lc3NhZ2VGcm9tVXNEaXYuYXBwZW5kQ2hpbGQobGVmdERpdik7XHJcbiAgbWVzc2FnZUZyb21Vc0Rpdi5hcHBlbmRDaGlsZChyaWdodERpdik7XHJcblxyXG4gIHJldHVybiBtZXNzYWdlRnJvbVVzRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVWaWV3TWVudSgpIHtcclxuICBjb25zdCB2aWV3TWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHZpZXdNZW51RGl2LmlkID0gJ3ZpZXctbWVudSc7XHJcblxyXG4gIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgY29uc3QgYXR0cmlidXRlID0gJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AaG9qYXN0dWRpbz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5Ib2phIFN0dWRpbzwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9UaHczbmxlTzNjTT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5VbnNwbGFzaDwvYT4nO1xyXG4gIGNvbnN0IHBBdHRyaWJ1dGUgPSBjcmVhdGVBdHRyaWJ1dGVQYXJhKGF0dHJpYnV0ZSk7XHJcblxyXG4gIGxlZnREaXYuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xyXG5cclxuICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xyXG4gIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2F0dHJpYnV0ZScpO1xyXG4gIHJpZ2h0RGl2LmFwcGVuZENoaWxkKHBBdHRyaWJ1dGUpO1xyXG5cclxuICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGgxLmlubmVyVGV4dCA9ICdUYXN0ZXMgTGlrZSBIb21lJztcclxuICBwLmlubmVyVGV4dCA9ICdEaXNjb3ZlciBvdXIgY2FyZWZ1bGx5IGNyYWZ0ZWQgTmFwb2xpdGFubyBkaXNoZXMuJztcclxuXHJcbiAgY29uc3QgYnV0dG9uQ2xhc3NlcyA9IFsnYnRuLWxnJywgJ2J0bi1vdXRsaW5lJywgJ2J0bi1jcmVhbS1vdXRsaW5lJ107XHJcbiAgY29uc3QgZXhwbG9yZU1lbnVCdXR0b24gPSBjcmVhdGVCdXR0b24oYnV0dG9uQ2xhc3NlcywgJ0V4cGxvcmUgT3VyIE1lbnUnKTtcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChoMSk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChwKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGV4cGxvcmVNZW51QnV0dG9uKTtcclxuXHJcbiAgbGVmdERpdi5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuXHJcbiAgdmlld01lbnVEaXYuYXBwZW5kQ2hpbGQobGVmdERpdik7XHJcbiAgdmlld01lbnVEaXYuYXBwZW5kQ2hpbGQocmlnaHREaXYpO1xyXG5cclxuICByZXR1cm4gdmlld01lbnVEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhlYWRsaW5lLCBjcmVhdGVNZXNzYWdlRnJvbVVzLCBjcmVhdGVWaWV3TWVudSB9O1xyXG4iLCJjbGFzcyBNZW51SXRlbSB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKSB7XHJcbiAgICB0aGlzLmluc3RhbmNlTmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmluc3RhbmNlRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuaW5zdGFuY2VQcmljZSA9IHByaWNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZU5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZURlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHByaWNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VQcmljZTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNhbGFtYXJpID0gbmV3IE1lbnVJdGVtKCdDYWxhbWFyaSBGcml0dGknLCAnRnJpZWQgY2FsYW1hcmkgc2VydmVkIHdpdGggbWFyaW5hcmEnLCAnJDknKTtcclxuY29uc3QgYnJ1c2NoZXR0YSA9IG5ldyBNZW51SXRlbSgnQnJ1c2NoZXR0YSBBbGxhIENhcHJlc2UnLCAnVG9hc3RlZCBicnVzY2hldHRhIHdpdGggdG9tYXRvLCBiYXNpbCwgZXZvbywgYmFsc2FtaWMgZ2xhemUnLCAnJDcnKTtcclxuY29uc3QgcG9scGV0dGUgPSBuZXcgTWVudUl0ZW0oJ1BvbHBldHRlJywgJ0JlZWYgYW5kIHBvcmsgbWVhdGJhbGxzIGluIG1hcmluYXJhJywgJyQxMCcpO1xyXG5jb25zdCB6dXBwYSA9IG5ldyBNZW51SXRlbSgnWnVwcGEgRGVsIEdpb3JubycsICdTb3VwIG9mIHRoZSBkYXknLCAnJDYnKTtcclxuXHJcbmNvbnN0IGFudGlwYXN0b0FycmF5ID0gW2NhbGFtYXJpLCBicnVzY2hldHRhLCBwb2xwZXR0ZSwgenVwcGFdO1xyXG5cclxuY29uc3QgY2FwcmVzZSA9IG5ldyBNZW51SXRlbSgnQ2FwcmVzZScsICdNb3p6YXJlbGxhLCBiYXNpbCwgdG9tYXRvZXMsIGV2b28sIGFuZCBiYWxzYW1pYyB2aW5lZ2FyJywgJyQ3Jyk7XHJcbmNvbnN0IHRvc2NhbmEgPSBuZXcgTWVudUl0ZW0oJ1Rvc2NhbmEnLCAnQ2hpY2tlbiwgcGluZSBudXRzLCBnb2F0IGNoZWVzZSwgc3BpbmFjaCcsICckOScpO1xyXG5jb25zdCBwYW56YW5lbGxhID0gbmV3IE1lbnVJdGVtKCdQYW5lemVubGEnLCAnQmFzaWwsIHJlZCBvbmlvbnMsIHRvbWF0b2VzLCBldm9vLCBiYWxzYW1pYyB2aW5lZ2FyLCBicmVhZCcsICckNycpO1xyXG5jb25zdCBydWNvbGEgPSBuZXcgTWVudUl0ZW0oJ1J1Y29sYScsICdBcnVndWxhLCB0b21hdG9lcywgd2FsbnV0cywgc2hhdmVkIHBhcm1pZ2lhbm8nLCAnJDknKTtcclxuXHJcbmNvbnN0IGluc2FsYXRhQXJyYXkgPSBbY2FwcmVzZSwgdG9zY2FuYSwgcGFuemFuZWxsYSwgcnVjb2xhXTtcclxuXHJcbmNvbnN0IGdlbGF0byA9IG5ldyBNZW51SXRlbSgnR2VsYXRvJywgJ1N0cmF3YmVycnksIGNob2NvbGF0ZSwgb3IgdmFuaWxsYSBpY2UgY3JlYW0nLCAnJDMnKTtcclxuY29uc3QgdGlyYW1pc3UgPSBuZXcgTWVudUl0ZW0oJ1RpcmFtaXN1JywgJ0xhZHlmaW5nZXJzIGRpcHBlZCBpbiBjb2ZmZWUsIHRvcHBlZCB3aXRoIGNyZWFtLCBtYXNjYXJwb25lLCBhbmQgY29jb2EgcG93ZGVyJywgJyQ2Jyk7XHJcbmNvbnN0IGNhbm5vbGkgPSBuZXcgTWVudUl0ZW0oJ0Nhbm5vbGknLCAnUGFzdHJ5IHNoZWxsIGZpbGxlZCB3aXRoIHN3ZWV0IHJpY290dGEgY3JlYW0gYW5kIGNvY29hIGNoaXBzJywgJyQ2Jyk7XHJcbmNvbnN0IHBhbm5hY290dGEgPSBuZXcgTWVudUl0ZW0oJ1Bhbm5hIENvdHRhJywgJ1N3ZWV0LCBjcmVhbXkgZ2VsYXRpbiB0b3BwZWQgd2l0aCBiZXJyeSBtaXggYW5kIGJlcnJ5IGdsYXplJywgJyQ1Jyk7XHJcblxyXG5jb25zdCBkb2xjZUFycmF5ID0gW2dlbGF0bywgdGlyYW1pc3UsIGNhbm5vbGksIHBhbm5hY290dGFdO1xyXG5cclxuY29uc3QgcGFzdGFTcGVjaWFsID0gbmV3IE1lbnVJdGVtKCdQYXN0YSBPZiBUaGUgRGF5JywgJ0NoZWZcXCdzIGNyZWF0aW9uJywgJyQxMicpO1xyXG5jb25zdCBzZWFmb29kU3BlY2lhbCA9IG5ldyBNZW51SXRlbSgnU2VhZm9vZCBPZiBUaGUgRGF5JywgJ0NoZWZcXCdzIGNyZWF0aW9uIHdpdGggY2F0Y2ggb2YgdGhlIGRheScsICdNL1AnKTtcclxuY29uc3QgcGl6emFTcGVjaWFsID0gbmV3IE1lbnVJdGVtKCdQaXp6YSBPZiBUaGUgRGF5JywgJ0NoZWZcXCdzIGNyZWF0aW9uJywgJyQxMicpO1xyXG5jb25zdCByaXNvdHRvU3BlY2lhbCA9IG5ldyBNZW51SXRlbSgnUmlzb3R0byBPZiBUaGUgRGF5JywgJ0NoZWZcXCdzIGNyZWF0aW9uJywgJyQxMicpO1xyXG5cclxuY29uc3Qgc3BlY2lhbEFycmF5ID0gW3Bhc3RhU3BlY2lhbCwgc2VhZm9vZFNwZWNpYWwsIHBpenphU3BlY2lhbCwgcmlzb3R0b1NwZWNpYWxdO1xyXG5cclxuY29uc3QgbWFyZ2hlcml0YSA9IG5ldyBNZW51SXRlbSgnTWFyZ2hlcml0YScsICdNb3p6YXJlbGxhLCBtYXJpbmFyYSwgYmFzaWwsIGV2b28nLCAnJDEyJyk7XHJcbmNvbnN0IHBlc3RvID0gbmV3IE1lbnVJdGVtKCdQZXN0bycsICdQZXN0bywgdG9tYXRvZXMsIGJ1cnJhdGEnLCAnJDEyJyk7XHJcbmNvbnN0IHNlcmdpbyA9IG5ldyBNZW51SXRlbSgnU2VyZ2lvJywgJ01venphcmVsbGEsIGJyaWUsIHNtb2tlZCBwcm9zY3VpdHRvJywgJyQxMicpO1xyXG5jb25zdCBtYXJpbmFyYSA9IG5ldyBNZW51SXRlbSgnTWFyaW5hcmEnLCAnTWFyaW5hcmEsIG9yZWdhbm8sIGdhcmxpYywgdG9tYXRvZXMnLCAnJDEyJyk7XHJcbmNvbnN0IHB1dHRhbmVzY2EgPSBuZXcgTWVudUl0ZW0oJ1B1dHRhbmVzY2EnLCAnTW96emFyZWxsYSwgY2FwZXJzLCBhbmNob3ZpZXMsIG9saXZlcywgdG9tYXRvZXMnLCAnJDEyJyk7XHJcbmNvbnN0IGRpYXZvbGEgPSBuZXcgTWVudUl0ZW0oJ0RpYXZvbGEnLCAnVG9tYXRvZXMsIGJhc2lsLCBzcGljeSBzYWxhbWUnLCAnJDEyJyk7XHJcblxyXG5jb25zdCBwaXp6YUFycmF5ID0gW21hcmdoZXJpdGEsIHBlc3RvLCBzZXJnaW8sIG1hcmluYXJhLCBwdXR0YW5lc2NhLCBkaWF2b2xhXTtcclxuXHJcbmNvbnN0IHBlbm5lID0gbmV3IE1lbnVJdGVtKCdQZW5uZScsICcnLCAnJDEnKTtcclxuY29uc3QgZ25vY2NoaSA9IG5ldyBNZW51SXRlbSgnR25vY2NoaScsICcnLCAnJDEnKTtcclxuY29uc3Qgc3BhZ2hldHRpID0gbmV3IE1lbnVJdGVtKCdTcGFnaGV0dGknLCAnJywgJyQxJyk7XHJcbmNvbnN0IGZldHR1Y2NpbmUgPSBuZXcgTWVudUl0ZW0oJ0ZldHR1Y2NpbmUnLCAnJywgJyQxJyk7XHJcblxyXG5jb25zdCBwYXN0YUFycmF5ID0gW3Blbm5lLCBnbm9jY2hpLCBzcGFnaGV0dGksIGZldHR1Y2NpbmVdO1xyXG5cclxuY29uc3QgYW1hdHJpY2lhbmEgPSBuZXcgTWVudUl0ZW0oJ0FtYXRyaWNpYW5hJywgJ1RvbWF0b2VzLCBndWFuY2lhbGUsIG9uaW9ucywgcGVjb3Jpbm8gcm9tYW5vJywgJyQxMCcpO1xyXG5jb25zdCBwZXN0b1NhdWNlID0gbmV3IE1lbnVJdGVtKCdQZXN0bycsICdCYXNpbCwgcGluZSBudXRzLCBwYXJtaWdpYW5vIHJlZ2dpYW5vLCBldm9vJywgJyQxMCcpO1xyXG5jb25zdCBjYXJib25hcmEgPSBuZXcgTWVudUl0ZW0oJ0NhcmJvbmFyYScsICdFZ2csIHBlY29yaW5vIHJvbWFubywgZ3VhbmNpYWxlJywgJyQxMCcpO1xyXG5jb25zdCBjYWNpb2VwZXBlID0gbmV3IE1lbnVJdGVtKCdDYWNpbyBFIFBlcGUnLCAnUGVjb3Jpbm8gcm9tYW5vLCBibGFjayBwZXBwZXInLCAnJDEwJyk7XHJcblxyXG5jb25zdCBzYXVjZUFycmF5ID0gW2FtYXRyaWNpYW5hLCBwZXN0b1NhdWNlLCBjYXJib25hcmEsIGNhY2lvZXBlcGVdO1xyXG5cclxuZXhwb3J0IHtcclxuICBhbnRpcGFzdG9BcnJheSwgaW5zYWxhdGFBcnJheSwgZG9sY2VBcnJheSwgc3BlY2lhbEFycmF5LCBwaXp6YUFycmF5LCBwYXN0YUFycmF5LCBzYXVjZUFycmF5LFxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIGFudGlwYXN0b0FycmF5LCBpbnNhbGF0YUFycmF5LCBkb2xjZUFycmF5LCBzcGVjaWFsQXJyYXksIHBpenphQXJyYXksIHBhc3RhQXJyYXksIHNhdWNlQXJyYXksXHJcbn0gZnJvbSAnLi9tZW51LWxpc3QnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlSGVhZGxpbmUgfSBmcm9tICcuL2NvbnN0cnVjdG9ycyc7XHJcblxyXG5jbGFzcyBUYWJsZUluZm8ge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIG1lbnVJdGVtc0FycmF5KSB7XHJcbiAgICB0aGlzLmluc3RhbmNlVGFibGVOYW1lID0gbmFtZTtcclxuICAgIHRoaXMuaW5zdGFuY2VJdGVtcyA9IG1lbnVJdGVtc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhYmxlTmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlVGFibGVOYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VJdGVtcztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVIZWFkbGluZSgpIHtcclxuICBjb25zdCBhdHRyaWJ1dGUgPSAnUGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BzaGFrdGlyYWpwdXJvaGl0P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlNoYWt0aSBSYWpwdXJvaGl0PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0Z2T0dFQUwyR1BFP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiIHRhcmdldD1cIl9ibGFua1wiPlVuc3BsYXNoPC9hPic7XHJcblxyXG4gIGNvbnN0IG1lbnVIZWFkbGluZURpdiA9IGNyZWF0ZUhlYWRsaW5lKCdtZW51LWhlYWRsaW5lJywgYXR0cmlidXRlLCAnTWVudScpO1xyXG5cclxuICByZXR1cm4gbWVudUhlYWRsaW5lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbURpdihpdGVtTmFtZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtUHJpY2UpIHtcclxuICBjb25zdCBtZW51SXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG5hbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgcHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBuYW1lRGVzY1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgY29uc3QgcHJpY2VQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IG5hbWVTdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICBjb25zdCBwcmljZVN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gIGNvbnN0IGRlc2NUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGl0ZW1EZXNjcmlwdGlvbik7XHJcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xyXG5cclxuICBtZW51SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcclxuXHJcbiAgbmFtZVN0cm9uZy5pbm5lckhUTUwgPSBpdGVtTmFtZTtcclxuXHJcbiAgbmFtZURlc2NQLmFwcGVuZENoaWxkKG5hbWVTdHJvbmcpO1xyXG4gIG5hbWVEZXNjUC5hcHBlbmRDaGlsZChicik7XHJcbiAgbmFtZURlc2NQLmFwcGVuZENoaWxkKGRlc2NUZXh0Tm9kZSk7XHJcbiAgbmFtZURlc2NEaXYuYXBwZW5kQ2hpbGQobmFtZURlc2NQKTtcclxuXHJcbiAgcHJpY2VTdHJvbmcuaW5uZXJIVE1MID0gaXRlbVByaWNlO1xyXG4gIHByaWNlUC5hcHBlbmRDaGlsZChwcmljZVN0cm9uZyk7XHJcbiAgcHJpY2VEaXYuYXBwZW5kQ2hpbGQocHJpY2VQKTtcclxuXHJcbiAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQobmFtZURlc2NEaXYpO1xyXG4gIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKHByaWNlRGl2KTtcclxuXHJcbiAgcmV0dXJuIG1lbnVJdGVtRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51SGVhZGVyRGl2KGhlYWRlck5hbWUpIHtcclxuICBjb25zdCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblxyXG4gIGgyLmlubmVySFRNTCA9IGhlYWRlck5hbWU7XHJcbiAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGgyKTtcclxuICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXInKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlckRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVRhYmxlRGl2KGlkLCBjbGFzc0FycmF5LCBtZW51VHlwZSwgaGVhZGVyTmFtZSwgbWVudUl0ZW1BcnJheSwgbWVudUl0ZW1BcnJheTIpIHtcclxuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICB0YWJsZS5pZCA9IGlkO1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtdO1xyXG4gIGNvbnN0IG1lbnVJdGVtczIgPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0FycmF5Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKGNsYXNzQXJyYXlbaV0pO1xyXG4gIH1cclxuXHJcbiAgdGFibGUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUhlYWRlckRpdihoZWFkZXJOYW1lKSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1BcnJheS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgY29uc3QgbWVudU5hbWUgPSBtZW51SXRlbUFycmF5W2ldLm5hbWU7XHJcbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBtZW51SXRlbUFycmF5W2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgbWVudVByaWNlID0gbWVudUl0ZW1BcnJheVtpXS5wcmljZTtcclxuICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gY3JlYXRlTWVudUl0ZW1EaXYobWVudU5hbWUsIG1lbnVEZXNjcmlwdGlvbiwgbWVudVByaWNlKTtcclxuXHJcbiAgICBtZW51SXRlbXMucHVzaChtZW51SXRlbURpdik7XHJcbiAgfVxyXG5cclxuICBpZiAobWVudUl0ZW1BcnJheTIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbUFycmF5Mi5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBjb25zdCBtZW51TmFtZSA9IG1lbnVJdGVtQXJyYXkyW2ldLm5hbWU7XHJcbiAgICAgIGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IG1lbnVJdGVtQXJyYXkyW2ldLmRlc2NyaXB0aW9uO1xyXG4gICAgICBjb25zdCBtZW51UHJpY2UgPSBtZW51SXRlbUFycmF5MltpXS5wcmljZTtcclxuICAgICAgY29uc3QgbWVudUl0ZW1EaXYgPSBjcmVhdGVNZW51SXRlbURpdihtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uLCBtZW51UHJpY2UpO1xyXG5cclxuICAgICAgbWVudUl0ZW1zMi5wdXNoKG1lbnVJdGVtRGl2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtZW51VHlwZSA9PT0gJ21lbnUtdGFibGUtZ3JpZCcpIHtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbWVudUNvbnRhaW5lckdyaWQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXItZ3JpZCcpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIG1lbnVDb250YWluZXJHcmlkLmFwcGVuZENoaWxkKG1lbnVJdGVtc1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lckdyaWQpO1xyXG4gIH0gZWxzZSBpZiAobWVudVR5cGUgPT09ICdwYXN0YS1hbmQtc2F1Y2UnKSB7XHJcbiAgICBjb25zdCBpbm5lckdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXJDb2x1bW5QYXN0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lckNvbHVtblNhdWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYXN0YU1lbnVDb250YWluZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzYXVjZU1lbnVDb250YWluZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwYXN0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgc2F1Y2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHBhc3RhSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3Qgc2F1Y2VIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgaW5uZXJHcmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lubmVyLWdyaWQtY29udGFpbmVyJyk7XHJcbiAgICBtZW51Q29udGFpbmVyQ29sdW1uUGFzdGEuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXItY29sdW1uJyk7XHJcbiAgICBtZW51Q29udGFpbmVyQ29sdW1uU2F1Y2UuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXItY29sdW1uJyk7XHJcbiAgICBwYXN0YU1lbnVDb250YWluZXJHcmlkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyLWdyaWQnKTtcclxuICAgIHNhdWNlTWVudUNvbnRhaW5lckdyaWQuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXItZ3JpZCcpO1xyXG5cclxuICAgIHBhc3RhSDMuaW5uZXJIVE1MID0gJ1Bhc3RhJztcclxuICAgIHNhdWNlSDMuaW5uZXJIVE1MID0gJ1NhdWNlJztcclxuXHJcbiAgICBwYXN0YURpdi5hcHBlbmRDaGlsZChwYXN0YUgzKTtcclxuICAgIHNhdWNlRGl2LmFwcGVuZENoaWxkKHNhdWNlSDMpO1xyXG5cclxuICAgIG1lbnVDb250YWluZXJDb2x1bW5QYXN0YS5hcHBlbmRDaGlsZChwYXN0YURpdik7XHJcbiAgICBtZW51Q29udGFpbmVyQ29sdW1uU2F1Y2UuYXBwZW5kQ2hpbGQoc2F1Y2VEaXYpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHBhc3RhTWVudUNvbnRhaW5lckdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtQXJyYXkyLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHNhdWNlTWVudUNvbnRhaW5lckdyaWQuYXBwZW5kQ2hpbGQobWVudUl0ZW1zMltpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVudUNvbnRhaW5lckNvbHVtblBhc3RhLmFwcGVuZENoaWxkKHBhc3RhTWVudUNvbnRhaW5lckdyaWQpO1xyXG4gICAgbWVudUNvbnRhaW5lckNvbHVtblNhdWNlLmFwcGVuZENoaWxkKHNhdWNlTWVudUNvbnRhaW5lckdyaWQpO1xyXG5cclxuICAgIGlubmVyR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyQ29sdW1uUGFzdGEpO1xyXG4gICAgaW5uZXJHcmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXJDb2x1bW5TYXVjZSk7XHJcblxyXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQoaW5uZXJHcmlkQ29udGFpbmVyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGFibGUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zW2ldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0YWJsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTWVudVN1bW1hcnlTZWN0aW9uKCkge1xyXG4gIGNvbnN0IHN1bW1hcnlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBzdW1tYXJ5RGl2LmlkID0gJ21lbnUtc3VtbWFyeSc7XHJcblxyXG4gIHAuaW5uZXJIVE1MID0gJzxiPk91ciBtZW51IGlzIHNpbXBsZSBhbmQgc2VydmVzIHRoZSBzYW1lIGRpc2hlcyBmb3IgbHVuY2ggYW5kIGRpbm5lci4gVGhpcyBlbnN1cmVzIHdlIGNhbiBwcm92aWRlIHF1YWxpdHkgZGlzaGVzLjwvYj4nO1xyXG4gIHN1bW1hcnlEaXYuYXBwZW5kQ2hpbGQocCk7XHJcblxyXG4gIHJldHVybiBzdW1tYXJ5RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcclxuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjbGFzc0FycmF5Q29sdW1uID0gWydtZW51LWNvbnRhaW5lcicsICdtZW51LWNvbnRhaW5lci1jb2x1bW4nLCAnbWVudS1jb250YWluZXItcmVnJ107XHJcbiAgY29uc3QgY2xhc3NTcGVjR3JpZENvbHVtbiA9IFsnbWVudS1jb250YWluZXInLCAnbWVudS1jb250YWluZXItY29sdW1uJywgJ21lbnUtY29udGFpbmVyLXNwZWMnLCAnbWVudS10YWJsZS1ncmlkJ107XHJcbiAgY29uc3QgY2xhc3NHcmlkQ29sdW1uID0gWydtZW51LWNvbnRhaW5lcicsICdtZW51LWNvbnRhaW5lci1jb2x1bW4nLCAnbWVudS1jb250YWluZXItcmVnJywgJ21lbnUtdGFibGUtZ3JpZCddO1xyXG4gIGNvbnN0IGlubmVyR3JpZENvbnRhaW5lckxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpbm5lckdyaWRDb250YWluZXJSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG1lbnVTdW1tYXJ5RGl2ID0gY3JlYXRlTWVudVN1bW1hcnlTZWN0aW9uKCk7XHJcblxyXG4gIGlubmVyR3JpZENvbnRhaW5lckxlZnQuY2xhc3NMaXN0LmFkZCgnaW5uZXItZ3JpZC1jb250YWluZXInKTtcclxuICBpbm5lckdyaWRDb250YWluZXJSaWdodC5jbGFzc0xpc3QuYWRkKCdpbm5lci1ncmlkLWNvbnRhaW5lcicpO1xyXG4gIG1lbnVTZWN0aW9uLmlkID0gJ21lbnUtc2VjdGlvbic7XHJcbiAgZ3JpZENvbnRhaW5lci5pZCA9ICdncmlkLWNvbnRhaW5lcic7XHJcblxyXG4gIGNvbnN0IGFudGlwYXN0b1RhYmxlID0gbmV3IFRhYmxlSW5mbygnQW50aXBhc3RvJywgYW50aXBhc3RvQXJyYXkpO1xyXG4gIGNvbnN0IGluc2FsYXRhVGFibGUgPSBuZXcgVGFibGVJbmZvKCdJbnNhbGF0YScsIGluc2FsYXRhQXJyYXkpO1xyXG4gIGNvbnN0IGRvbGNlVGFibGUgPSBuZXcgVGFibGVJbmZvKCdEb2xjZScsIGRvbGNlQXJyYXkpO1xyXG5cclxuICBjb25zdCBhbnRpcGFzdG9EaXYgPSBjcmVhdGVNZW51VGFibGVEaXYoJ2FudGlwYXN0bycsIGNsYXNzQXJyYXlDb2x1bW4sICdyZWd1bGFyJywgYW50aXBhc3RvVGFibGUudGFibGVOYW1lLCBhbnRpcGFzdG9UYWJsZS5pdGVtcyk7XHJcbiAgY29uc3QgaW5zYWxhdGFEaXYgPSBjcmVhdGVNZW51VGFibGVEaXYoJ2luc2FsYXRhJywgY2xhc3NBcnJheUNvbHVtbiwgJ3JlZ3VsYXInLCBpbnNhbGF0YVRhYmxlLnRhYmxlTmFtZSwgaW5zYWxhdGFUYWJsZS5pdGVtcyk7XHJcbiAgY29uc3QgZG9sY2VEaXYgPSBjcmVhdGVNZW51VGFibGVEaXYoJ2RvbGNlJywgY2xhc3NBcnJheUNvbHVtbiwgJ3JlZ3VsYXInLCBkb2xjZVRhYmxlLnRhYmxlTmFtZSwgZG9sY2VUYWJsZS5pdGVtcyk7XHJcblxyXG4gIGNvbnN0IHNwZWNpYWxUYWJsZSA9IG5ldyBUYWJsZUluZm8oJ1NwZWNpYWwgT2YgVGhlIERheScsIHNwZWNpYWxBcnJheSk7XHJcbiAgY29uc3QgcGl6emFUYWJsZSA9IG5ldyBUYWJsZUluZm8oJ1BpenphJywgcGl6emFBcnJheSk7XHJcblxyXG4gIGNvbnN0IHNwZWNpYWxEaXYgPSBjcmVhdGVNZW51VGFibGVEaXYoJ3NwZWNpYWwnLCBjbGFzc1NwZWNHcmlkQ29sdW1uLCAnbWVudS10YWJsZS1ncmlkJywgc3BlY2lhbFRhYmxlLnRhYmxlTmFtZSwgc3BlY2lhbFRhYmxlLml0ZW1zKTtcclxuICBjb25zdCBwaXp6YURpdiA9IGNyZWF0ZU1lbnVUYWJsZURpdigncGl6emEnLCBjbGFzc0dyaWRDb2x1bW4sICdtZW51LXRhYmxlLWdyaWQnLCBwaXp6YVRhYmxlLnRhYmxlTmFtZSwgcGl6emFUYWJsZS5pdGVtcyk7XHJcblxyXG4gIGNvbnN0IHBhc3RhVGFibGUgPSBuZXcgVGFibGVJbmZvKCdQYXN0YSAmIFNhdWNlJywgcGFzdGFBcnJheSk7XHJcbiAgY29uc3Qgc2F1Y2VUYWJsZSA9IG5ldyBUYWJsZUluZm8oJ1Bhc3RhICYgU2F1Y2UnLCBzYXVjZUFycmF5KTtcclxuXHJcbiAgY29uc3QgcGFzdGFTYXVjZURpdiA9IGNyZWF0ZU1lbnVUYWJsZURpdigncGFzdGEtc2F1Y2UnLCBjbGFzc0dyaWRDb2x1bW4sICdwYXN0YS1hbmQtc2F1Y2UnLCBwYXN0YVRhYmxlLnRhYmxlTmFtZSwgcGFzdGFUYWJsZS5pdGVtcywgc2F1Y2VUYWJsZS5pdGVtcyk7XHJcblxyXG4gIGlubmVyR3JpZENvbnRhaW5lckxlZnQuYXBwZW5kQ2hpbGQoYW50aXBhc3RvRGl2KTtcclxuICBpbm5lckdyaWRDb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKGluc2FsYXRhRGl2KTtcclxuICBpbm5lckdyaWRDb250YWluZXJMZWZ0LmFwcGVuZENoaWxkKGRvbGNlRGl2KTtcclxuXHJcbiAgaW5uZXJHcmlkQ29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQoc3BlY2lhbERpdik7XHJcbiAgaW5uZXJHcmlkQ29udGFpbmVyUmlnaHQuYXBwZW5kQ2hpbGQocGl6emFEaXYpO1xyXG4gIGlubmVyR3JpZENvbnRhaW5lclJpZ2h0LmFwcGVuZENoaWxkKHBhc3RhU2F1Y2VEaXYpO1xyXG5cclxuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyR3JpZENvbnRhaW5lckxlZnQpO1xyXG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJHcmlkQ29udGFpbmVyUmlnaHQpO1xyXG4gIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVTdW1tYXJ5RGl2KTtcclxuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIG1lbnVTZWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNZW51SGVhZGxpbmUsIGNyZWF0ZU1lbnVTZWN0aW9uIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi9tZWRpYS1xdWVyaWVzLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUhlYWRsaW5lLCBjcmVhdGVNZXNzYWdlRnJvbVVzLCBjcmVhdGVWaWV3TWVudSB9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCB7IGNyZWF0ZU1lbnVIZWFkbGluZSwgY3JlYXRlTWVudVNlY3Rpb24gfSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgeyBjcmVhdGVBYm91dEhlYWRsaW5lLCBjcmVhdGVBYm91dFNlY3Rpb24gfSBmcm9tICcuL2Fib3V0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFjdEhlYWRsaW5lLCBjcmVhdGVDb250YWN0U2VjdGlvbiB9IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG4oZnVuY3Rpb24gcnVuUGFnZSgpIHtcclxuICAvKiogTUlOSU1JWkUgTkFWQkFSIE9OIFNDUk9MTCAqICovXHJcbiAgZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiA4MCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gODApIHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyLWxvZ28nKVswXS5zdHlsZS5oZWlnaHQgPSAnNHJlbSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFkZXItbG9nbycpWzBdLnN0eWxlLmhlaWdodCA9ICc2cmVtJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZvcmNlUGFkZGluZ0hlYWRlclNtYWxsKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdLnN0eWxlLnBhZGRpbmcgPSAnMHJlbSAxcmVtJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZvcmNlSGVhZGVyTG9nb1NtYWxsKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyLWxvZ28nKVswXS5zdHlsZS5oZWlnaHQgPSAnNHJlbSc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmb3JjZVNob3dOYXYoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZvcmNlSGlkZU5hdigpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0TmF2RGlzcGxheU5vbmUoKSB7XHJcbiAgICBjb25zdCB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpO1xyXG5cclxuICAgIHguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZENsb3NlTWVudSgpIHtcclxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2LWxpbmsnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlua3MubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgbmF2TGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZXROYXZEaXNwbGF5Tm9uZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVDbG9zZU1lbnUoKSB7XHJcbiAgICBjb25zdCBuYXZMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdi1saW5rJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkxpbmtzLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIG5hdkxpbmtzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2V0TmF2RGlzcGxheU5vbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm9yY2VPblNjcm9sbCgpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpIHtcclxuICAgICAgc2Nyb2xsRnVuY3Rpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZvcmNlT25SZXNpemUoKSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gMTAyNCkge1xyXG4gICAgICBmb3JjZVBhZGRpbmdIZWFkZXJTbWFsbCgpO1xyXG4gICAgICBmb3JjZUhlYWRlckxvZ29TbWFsbCgpO1xyXG4gICAgICBmb3JjZUhpZGVOYXYoKTtcclxuICAgICAgYWRkQ2xvc2VNZW51KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW1vdmVDbG9zZU1lbnUoKTtcclxuICAgICAgZm9yY2VTaG93TmF2KCk7XHJcbiAgICAgIHNjcm9sbEZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XHJcbiAgICAgIHNjcm9sbEZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjQpIHtcclxuICAgICAgZm9yY2VQYWRkaW5nSGVhZGVyU21hbGwoKTtcclxuICAgICAgZm9yY2VIZWFkZXJMb2dvU21hbGwoKTtcclxuICAgICAgZm9yY2VIaWRlTmF2KCk7XHJcbiAgICAgIGFkZENsb3NlTWVudSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVtb3ZlQ2xvc2VNZW51KCk7XHJcbiAgICAgIGZvcmNlU2hvd05hdigpO1xyXG4gICAgICBzY3JvbGxGdW5jdGlvbigpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG4gICAgY29uc3QgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYnKTtcclxuICAgIGlmICh4LnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcclxuICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsZWFyQ29udGVudHMoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9hZEhvbWVQYWdlKCkge1xyXG4gICAgY2xlYXJDb250ZW50cygpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGxpbmUoKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZU1lc3NhZ2VGcm9tVXMoKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZVZpZXdNZW51KCkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9hZE1lbnVQYWdlKCkge1xyXG4gICAgY2xlYXJDb250ZW50cygpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUhlYWRsaW5lKCkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbigpKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvYWRBYm91dFBhZ2UoKSB7XHJcbiAgICBjbGVhckNvbnRlbnRzKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVBYm91dEhlYWRsaW5lKCkpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFNlY3Rpb24oKSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2FkQ29udGFjdFBhZ2UoKSB7XHJcbiAgICBjbGVhckNvbnRlbnRzKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SGVhZGxpbmUoKSk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkpO1xyXG4gIH1cclxuXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRIb21lUGFnZSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51UGFnZSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQWJvdXRQYWdlKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRhY3RQYWdlKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW5hdi1pY29uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSk7XHJcblxyXG4gIGZvcmNlT25TY3JvbGwoKTtcclxuICBmb3JjZU9uUmVzaXplKCk7XHJcblxyXG4gIGNsZWFyQ29udGVudHMoKTtcclxuICBsb2FkSG9tZVBhZ2UoKTtcclxufSgpKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9