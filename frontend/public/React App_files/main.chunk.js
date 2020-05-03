(this["webpackJsonpfrontend"] = this["webpackJsonpfrontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800);"]);
// Module
exports.push([module.i, ".header {\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(56, 0, 54, 0.5), rgba(12, 186, 186, 0.8)), url(/hero.jpg);\n  background-size: cover;\n  background-position: top;\n  position: relative;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);\n  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%); }\n  @media screen and (max-width: 600px) {\n    .header {\n      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); } }\n  .header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n  .header__logo {\n    height: 3.5rem; }\n  .header__text-box {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center; }\n\n.heading-primary {\n  color: #fff;\n  text-transform: uppercase;\n  margin-bottom: 5rem;\n  font-size: 40px;\n  letter-spacing: 1rem;\n  animation-name: moveInLeft;\n  animation-duration: 1s;\n  animation-timing-function: ease-out; }\n  .heading-primary--main {\n    font-weight: 700; }\n    @media screen and (max-width: 600px) {\n      .heading-primary--main {\n        letter-spacing: 0.5rem; } }\n\n.heading-secondary {\n  font-size: 4rem;\n  text-transform: uppercase;\n  display: inline-block;\n  background-image: linear-gradient(to right, #55c57a, #28b485);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 10rem; }\n  @media screen and (max-width: 900px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 600px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  .heading-secondary:hover {\n    transform: skewY(5deg) skewX(10deg) scale(1.1);\n    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }\n\n.home-main-btn {\n  font-size: 20px;\n  background-color: rgba(79, 176, 221, 0.685);\n  font-weight: 400;\n  letter-spacing: 1.1px;\n  padding: 15px 20px;\n  display: inline-block;\n  transition: all 0.2s;\n  box-shadow: -2px 2px 25px -2px black;\n  border-radius: 50px;\n  border: 0.5px solid black;\n  margin: 10px;\n  color: #fff; }\n  .home-main-btn:hover {\n    background-color: rgba(121, 133, 139, 0.774);\n    color: #fff;\n    transform: translateY(-2px);\n    cursor: pointer; }\n  .home-main-btn:active {\n    transform: translateY(0); }\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n    transform: rotate(50deg);\n    /*\n      transform: rotate(50deg); \n      */ }\n  80% {\n    transform: translate(1rem); }\n  100% {\n    opacity: 1;\n    transform: translateX(0); } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem); }\n  80% {\n    transform: translate(-1rem); }\n  100% {\n    opacity: 1;\n    transform: translateX(0); } }\n\n@keyframes moveInButton {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    transform: translateX(0); } }\n\n.row {\n  max-width: 114rem;\n  text-align: center;\n  /*\n      Make the elements inside of elements center\n    */\n  margin: 0 auto;\n  /*\n    select everything except the last child\n    */\n  /*\n    Select only elements which starts with col-\n    */ }\n  .row:not(:last-child) {\n    margin-bottom: 8rem; }\n    @media screen and (max-width: 900px) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n  @media screen and (max-width: 900px) {\n    .row {\n      max-width: 50rem;\n      padding: 0 3rem; } }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 4rem; }\n      @media screen and (max-width: 900px) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 6rem; } }\n    @media screen and (max-width: 900px) {\n      .row [class^=\"col-\"] {\n        width: 100% !important;\n        margin-right: 0; } }\n  .row .col-1-of-2 {\n    width: calc((100% - 4rem) / 2); }\n  .row .col-1-of-1 {\n    width: 100%; }\n\n.section-about {\n  background: #f7f7f7;\n  padding: 15rem 0;\n  width: 100%;\n  position: relative;\n  height: 95vh;\n  display: flex; }\n  @media screen and (max-width: 900px) {\n    .section-about {\n      padding: 15rem 0; } }\n\n.heading-secondary {\n  font-size: 40px;\n  text-transform: uppercase;\n  font-weight: 800;\n  display: inline-block;\n  background-image: linear-gradient(to right, #09203f, #537895);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 1rem;\n  text-align: center;\n  width: 100%; }\n  @media screen and (max-width: 900px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 600px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n\n.heading-small {\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: 600;\n  background-image: linear-gradient(to right, #09203f, #537895);\n  -webkit-background-clip: text;\n  color: transparent;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 1rem;\n  text-align: center;\n  width: 100%; }\n  @media screen and (max-width: 900px) {\n    .heading-small {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 600px) {\n    .heading-small {\n      font-size: 2.5rem; } }\n\n/* STRUCTURE */\n.wrapper {\n  text-align: center;\n  border: 10px;\n  background-color: #777;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 25px;\n  position: absolute; }\n\n.mini_header {\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 100%;\n  color: #163c52;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 1rem; }\n\n/* \n/* FORM TYPOGRAPHY*/\n.field {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\n\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  animation-name: fadeInDown;\n  animation-duration: 1s;\n  animation-fill-mode: both; }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n\n/* Simple CSS3 Fade-in Animation */\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  opacity: 0;\n  animation: fadeIn ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 1s; }\n\n.fadeIn.first {\n  animation-delay: 0.4s; }\n\n.fadeIn.second {\n  animation-delay: 0.6s; }\n\n.fadeIn.third {\n  animation-delay: 0.8s; }\n\n.fadeIn.fourth {\n  animation-delay: 1s; }\n\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n\n.underlineHover:hover {\n  color: #0d0d0d; }\n\n.underlineHover:hover:after {\n  width: 100%; }\n\n.row {\n  max-width: 114rem;\n  text-align: center;\n  /*\n        Make the elements inside of elements center\n      */\n  margin: 0 auto;\n  /*\n      select everything except the last child\n      */\n  /*\n      Select only elements which starts with col-\n      */ }\n  .row:not(:last-child) {\n    margin-bottom: 8rem; }\n    @media screen and (max-width: 900px) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n  @media screen and (max-width: 900px) {\n    .row {\n      max-width: 50rem;\n      padding: 0 3rem; } }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 4rem; }\n      @media screen and (max-width: 900px) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 6rem; } }\n    @media screen and (max-width: 900px) {\n      .row [class^=\"col-\"] {\n        width: 100% !important;\n        margin-right: 0; } }\n  .row .col-1-of-3 {\n    width: calc((100% - 2 * 4rem) / 3);\n    border: solid red; }\n\n.section-dashboard {\n  padding: 5rem 0;\n  background-color: #252827;\n  margin-top: -25vh;\n  font-size: 1.5rem;\n  font-family: 'Open Sans', sans-serif; }\n  @media screen and (max-width: 900px) {\n    .section-dashboard {\n      padding: 10rem 0; } }\n\n/* Import */\n/* Variables */\n/* Base */\n.header_h1 {\n  font-family: \"Saira\", sans-serif;\n  letter-spacing: 1.5px;\n  color: white;\n  font-weight: 400;\n  font-size: 2.4em; }\n\n#timeline-content {\n  margin-top: 50px;\n  text-align: center; }\n\n/* Timeline */\n.timeline {\n  border-left: 4px solid #004ffc;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  background: fade(white, 3%);\n  color: fade(white, 80%);\n  font-family: \"Chivo\", sans-serif;\n  margin: 50px auto;\n  letter-spacing: 0.5px;\n  position: relative;\n  line-height: 1.4em;\n  font-size: 1.03em;\n  padding: 50px;\n  list-style: none;\n  text-align: left;\n  font-weight: 100;\n  max-width: 50%; }\n  .timeline h1 {\n    font-family: \"Saira\", sans-serif;\n    letter-spacing: 1.5px;\n    font-weight: 100;\n    font-size: 1.4em; }\n  .timeline h2, .timeline h3 {\n    font-family: \"Saira\", sans-serif;\n    letter-spacing: 1.5px;\n    font-weight: 400;\n    font-size: 1.4em; }\n  .timeline .event {\n    border-bottom: 1px dashed fade(white, 10%);\n    padding-bottom: 25px;\n    margin-bottom: 50px;\n    position: relative; }\n    .timeline .event:last-of-type {\n      padding-bottom: 0;\n      margin-bottom: 0;\n      border: none; }\n    .timeline .event:before, .timeline .event:after {\n      position: absolute;\n      display: block;\n      top: 0; }\n    .timeline .event:before {\n      left: -217.5px;\n      color: fade(white, 11px);\n      content: attr(data-date);\n      text-align: right;\n      font-weight: 100;\n      font-size: 0.9em;\n      min-width: 120px;\n      font-family: \"Saira\", sans-serif; }\n    .timeline .event:after {\n      box-shadow: 0 0 0 4px fade(#004ffc, 100%);\n      left: -64.85px;\n      background: #313534;\n      border-radius: 50%;\n      height: 11px;\n      width: 11px;\n      content: \"\";\n      top: 5px; }\n\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  /* inherit from body */\n  box-sizing: inherit; }\n\nhtml {\n  /*\n  font-size: 10px;\n  to percent is 10/16 = 62.5\n  */\n  font-size: 62.5%;\n  font-family: \"Assistant\", sans-serif; }\n  @media screen and (max-width: 900px) {\n    html {\n      font-size: 56.25%; } }\n  @media screen and (max-width: 600px) {\n    html {\n      font-size: 50%; } }\n  @media screen and (min-width: 1800px) {\n    html {\n      font-size: 70%; } }\n\nbody {\n  box-sizing: border-box;\n  padding: 3rem;\n  font-family: \"Assistant\", sans-serif;\n  line-height: 1.7;\n  color: #777; }\n  @media screen and (max-width: 900px) {\n    body {\n      padding: 0; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Dashboard.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/pages/Dashboard.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Chivo:300,300i,400,400i,700,700i,900,900i|Saira+Extra+Condensed:100,200,300,400,500,600,700,800|Saira:100,200,300,400,500,600,700,800);"]);
// Module
exports.push([module.i, ".row {\n  max-width: 114rem;\n  text-align: center;\n  /*\n        Make the elements inside of elements center\n      */\n  margin: 0 auto;\n  /*\n      select everything except the last child\n      */\n  /*\n      Select only elements which starts with col-\n      */ }\n  .row:not(:last-child) {\n    margin-bottom: 8rem; }\n    @media screen and (max-width: 900px) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n  @media screen and (max-width: 900px) {\n    .row {\n      max-width: 50rem;\n      padding: 0 3rem; } }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 4rem; }\n      @media screen and (max-width: 900px) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 6rem; } }\n    @media screen and (max-width: 900px) {\n      .row [class^=\"col-\"] {\n        width: 100% !important;\n        margin-right: 0; } }\n  .row .col-1-of-3 {\n    width: calc((100% - 2 * 4rem) / 3);\n    border: solid red; }\n\n.section-dashboard {\n  padding: 5rem 0;\n  background-color: #252827;\n  margin-top: -25vh;\n  font-size: 1.5rem;\n  font-family: 'Open Sans', sans-serif; }\n  @media screen and (max-width: 900px) {\n    .section-dashboard {\n      padding: 10rem 0; } }\n\n/* Import */\n/* Variables */\n/* Base */\n.header_h1 {\n  font-family: \"Saira\", sans-serif;\n  letter-spacing: 1.5px;\n  color: white;\n  font-weight: 400;\n  font-size: 2.4em; }\n\n#timeline-content {\n  margin-top: 50px;\n  text-align: center; }\n\n/* Timeline */\n.timeline {\n  border-left: 4px solid #004ffc;\n  border-bottom-right-radius: 4px;\n  border-top-right-radius: 4px;\n  background: fade(white, 3%);\n  color: fade(white, 80%);\n  font-family: \"Chivo\", sans-serif;\n  margin: 50px auto;\n  letter-spacing: 0.5px;\n  position: relative;\n  line-height: 1.4em;\n  font-size: 1.03em;\n  padding: 50px;\n  list-style: none;\n  text-align: left;\n  font-weight: 100;\n  max-width: 50%; }\n  .timeline h1 {\n    font-family: \"Saira\", sans-serif;\n    letter-spacing: 1.5px;\n    font-weight: 100;\n    font-size: 1.4em; }\n  .timeline h2, .timeline h3 {\n    font-family: \"Saira\", sans-serif;\n    letter-spacing: 1.5px;\n    font-weight: 400;\n    font-size: 1.4em; }\n  .timeline .event {\n    border-bottom: 1px dashed fade(white, 10%);\n    padding-bottom: 25px;\n    margin-bottom: 50px;\n    position: relative; }\n    .timeline .event:last-of-type {\n      padding-bottom: 0;\n      margin-bottom: 0;\n      border: none; }\n    .timeline .event:before, .timeline .event:after {\n      position: absolute;\n      display: block;\n      top: 0; }\n    .timeline .event:before {\n      left: -217.5px;\n      color: fade(white, 11px);\n      content: attr(data-date);\n      text-align: right;\n      font-weight: 100;\n      font-size: 0.9em;\n      min-width: 120px;\n      font-family: \"Saira\", sans-serif; }\n    .timeline .event:after {\n      box-shadow: 0 0 0 4px fade(#004ffc, 100%);\n      left: -64.85px;\n      background: #313534;\n      border-radius: 50%;\n      height: 11px;\n      width: 11px;\n      content: \"\";\n      top: 5px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Home.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/pages/Home.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header {\n  height: 95vh;\n  background-image: linear-gradient(to right bottom, rgba(56, 0, 54, 0.5), rgba(12, 186, 186, 0.8)), url(/hero.jpg);\n  background-size: cover;\n  background-position: top;\n  position: relative;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);\n  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%); }\n  @media screen and (max-width: 600px) {\n    .header {\n      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);\n      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); } }\n  .header__logo-box {\n    position: absolute;\n    top: 4rem;\n    left: 4rem; }\n  .header__logo {\n    height: 3.5rem; }\n  .header__text-box {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center; }\n\n.heading-primary {\n  color: #fff;\n  text-transform: uppercase;\n  margin-bottom: 5rem;\n  font-size: 40px;\n  letter-spacing: 1rem;\n  animation-name: moveInLeft;\n  animation-duration: 1s;\n  animation-timing-function: ease-out; }\n  .heading-primary--main {\n    font-weight: 700; }\n    @media screen and (max-width: 600px) {\n      .heading-primary--main {\n        letter-spacing: 0.5rem; } }\n\n.heading-secondary {\n  font-size: 4rem;\n  text-transform: uppercase;\n  display: inline-block;\n  background-image: linear-gradient(to right, #55c57a, #28b485);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 10rem; }\n  @media screen and (max-width: 900px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 600px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  .heading-secondary:hover {\n    transform: skewY(5deg) skewX(10deg) scale(1.1);\n    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }\n\n.home-main-btn {\n  font-size: 20px;\n  background-color: rgba(79, 176, 221, 0.685);\n  font-weight: 400;\n  letter-spacing: 1.1px;\n  padding: 15px 20px;\n  display: inline-block;\n  transition: all 0.2s;\n  box-shadow: -2px 2px 25px -2px black;\n  border-radius: 50px;\n  border: 0.5px solid black;\n  margin: 10px;\n  color: #fff; }\n  .home-main-btn:hover {\n    background-color: rgba(121, 133, 139, 0.774);\n    color: #fff;\n    transform: translateY(-2px);\n    cursor: pointer; }\n  .home-main-btn:active {\n    transform: translateY(0); }\n\n@keyframes moveInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-10rem);\n    transform: rotate(50deg);\n    /*\n      transform: rotate(50deg); \n      */ }\n  80% {\n    transform: translate(1rem); }\n  100% {\n    opacity: 1;\n    transform: translateX(0); } }\n\n@keyframes moveInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(10rem); }\n  80% {\n    transform: translate(-1rem); }\n  100% {\n    opacity: 1;\n    transform: translateX(0); } }\n\n@keyframes moveInButton {\n  0% {\n    opacity: 0;\n    transform: translateY(3rem); }\n  100% {\n    opacity: 1;\n    transform: translateX(0); } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Signup.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/pages/Signup.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".row {\n  max-width: 114rem;\n  text-align: center;\n  /*\n      Make the elements inside of elements center\n    */\n  margin: 0 auto;\n  /*\n    select everything except the last child\n    */\n  /*\n    Select only elements which starts with col-\n    */ }\n  .row:not(:last-child) {\n    margin-bottom: 8rem; }\n    @media screen and (max-width: 900px) {\n      .row:not(:last-child) {\n        margin-bottom: 6rem; } }\n  @media screen and (max-width: 900px) {\n    .row {\n      max-width: 50rem;\n      padding: 0 3rem; } }\n  .row::after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row [class^=\"col-\"] {\n    float: left; }\n    .row [class^=\"col-\"]:not(:last-child) {\n      margin-right: 4rem; }\n      @media screen and (max-width: 900px) {\n        .row [class^=\"col-\"]:not(:last-child) {\n          margin-right: 0;\n          margin-bottom: 6rem; } }\n    @media screen and (max-width: 900px) {\n      .row [class^=\"col-\"] {\n        width: 100% !important;\n        margin-right: 0; } }\n  .row .col-1-of-2 {\n    width: calc((100% - 4rem) / 2); }\n  .row .col-1-of-1 {\n    width: 100%; }\n\n.section-about {\n  background: #f7f7f7;\n  padding: 15rem 0;\n  width: 100%;\n  position: relative;\n  height: 95vh;\n  display: flex; }\n  @media screen and (max-width: 900px) {\n    .section-about {\n      padding: 15rem 0; } }\n\n.heading-secondary {\n  font-size: 40px;\n  text-transform: uppercase;\n  font-weight: 800;\n  display: inline-block;\n  background-image: linear-gradient(to right, #09203f, #537895);\n  -webkit-background-clip: text;\n  color: transparent;\n  letter-spacing: 2px;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 1rem;\n  text-align: center;\n  width: 100%; }\n  @media screen and (max-width: 900px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 600px) {\n    .heading-secondary {\n      font-size: 2.5rem; } }\n\n.heading-small {\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: 600;\n  background-image: linear-gradient(to right, #09203f, #537895);\n  -webkit-background-clip: text;\n  color: transparent;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 1rem;\n  text-align: center;\n  width: 100%; }\n  @media screen and (max-width: 900px) {\n    .heading-small {\n      font-size: 2.5rem; } }\n  @media screen and (max-width: 600px) {\n    .heading-small {\n      font-size: 2.5rem; } }\n\n/* STRUCTURE */\n.wrapper {\n  text-align: center;\n  border: 10px;\n  background-color: #777;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  padding: 25px;\n  position: absolute; }\n\n.mini_header {\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: 600;\n  width: 100%;\n  color: #163c52;\n  transition: all 0.2s;\n  margin-bottom: 4rem;\n  margin-top: 1rem; }\n\n/* \n/* FORM TYPOGRAPHY*/\n.field {\n  background-color: #56baed;\n  border: none;\n  color: white;\n  padding: 15px 80px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 13px;\n  box-shadow: 0 10px 30px 0 rgba(95, 186, 233, 0.4);\n  border-radius: 5px 5px 5px 5px;\n  margin: 5px 20px 40px 20px;\n  transition: all 0.3s ease-in-out; }\n\n/* ANIMATIONS */\n/* Simple CSS3 Fade-in-down Animation */\n.fadeInDown {\n  animation-name: fadeInDown;\n  animation-duration: 1s;\n  animation-fill-mode: both; }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0); }\n  100% {\n    opacity: 1;\n    transform: none; } }\n\n/* Simple CSS3 Fade-in Animation */\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.fadeIn {\n  opacity: 0;\n  animation: fadeIn ease-in 1;\n  animation-fill-mode: forwards;\n  animation-duration: 1s; }\n\n.fadeIn.first {\n  animation-delay: 0.4s; }\n\n.fadeIn.second {\n  animation-delay: 0.6s; }\n\n.fadeIn.third {\n  animation-delay: 0.8s; }\n\n.fadeIn.fourth {\n  animation-delay: 1s; }\n\n/* Simple CSS3 Fade-in Animation */\n.underlineHover:after {\n  display: block;\n  left: 0;\n  bottom: -10px;\n  width: 0;\n  height: 2px;\n  background-color: #56baed;\n  content: \"\";\n  transition: width 0.2s; }\n\n.underlineHover:hover {\n  color: #0d0d0d; }\n\n.underlineHover:hover:after {\n  width: 100%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Signup */ "./src/pages/Signup.js");
/* harmony import */ var _pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Dashboard */ "./src/pages/Dashboard.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/src/App.js";








function App() {
  const history = Object(history__WEBPACK_IMPORTED_MODULE_5__["createBrowserHistory"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    history: history,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _pages_Home__WEBPACK_IMPORTED_MODULE_2__["Home"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/signup",
    component: _pages_Signup__WEBPACK_IMPORTED_MODULE_3__["Signup"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/dashboard",
    component: _pages_Dashboard__WEBPACK_IMPORTED_MODULE_4__["Dashboard"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/pages/Dashboard.js":
/*!********************************!*\
  !*** ./src/pages/Dashboard.js ***!
  \********************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Dashboard_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.scss */ "./src/pages/Dashboard.scss");
/* harmony import */ var _Dashboard_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dashboard_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/src/pages/Dashboard.js";



const Dashboard = props => {
  console.log(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section-dashboard",
    id: "timeline-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "header_h1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, " ", props.location.order.foodItem, "# Chain Flow"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "timeline",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "event",
    "data-date": props.location.order.deliveryDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, props.location.order.wholesaler), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, props.location.order.wholesalerAddress)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "event",
    "data-date": props.location.order.wholesaleProcessDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, props.location.order.retailer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, props.location.order.retailerAddress, " \uD83D\uDCE3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, props.location.order.qualityAtRetailer, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "event",
    id: "date",
    "data-date": props.location.order.manufactureProcessDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, props.location.order.manufacturer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, props.location.order.manufacturerAddress, " \uD83D\uDCE3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, props.location.order.qualityAtManufacturer, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "event",
    "data-date": props.location.order.wholesaleProcessDate,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, props.location.order.wholesaler), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, props.location.order.wholesalerAddress, " \uD83D\uDCE3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, props.location.order.qualityAtWholeSaler))));
};

/***/ }),

/***/ "./src/pages/Dashboard.scss":
/*!**********************************!*\
  !*** ./src/pages/Dashboard.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Dashboard.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Dashboard.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Dashboard.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Dashboard.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Dashboard.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Dashboard.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: Home */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.scss */ "./src/pages/Home.scss");
/* harmony import */ var _Home_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Home_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/src/pages/Home.js";



const Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "header__text-box",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "heading-primary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "heading-primary--main",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 17
  }
}, "Produce-Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "heading-primary--sub",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 17
  }
}, "Safe Storage")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/signup",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: "home-main-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}, "Retreive Order")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
  to: "/create",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 13
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: "home-main-btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 17
  }
}, "Create Order"))));

/***/ }),

/***/ "./src/pages/Home.scss":
/*!*****************************!*\
  !*** ./src/pages/Home.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Home.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Home.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Home.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Home.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Home.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Home.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/pages/Signup.js":
/*!*****************************!*\
  !*** ./src/pages/Signup.js ***!
  \*****************************/
/*! exports provided: Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Signup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Signup.scss */ "./src/pages/Signup.scss");
/* harmony import */ var _Signup_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Signup_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/src/pages/Signup.js";




class Signup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      order_details: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); // const history = useHistory();
  }

  handleChange(event) {
    this.setState({
      order_details: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`http://localhost:8081/getOrder?key=${this.state.order_details}`).then(res => {
      // console.log("response",res)
      const order = { ...res.data[0].Record,
        orderId: this.state.order_details
      };
      this.props.history.push({
        pathname: "/dashboard",
        order: order
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    console.log(this);
    console.log(this.props.history);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "section-about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "heading-secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "Produce Tracker: Secure Storage!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "heading-small",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, "Retrive your order"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mini_header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, " Enter Order ID "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "form-input",
      value: this.state.order_details,
      onChange: event => this.handleChange(event),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "field",
      onClick: event => this.handleSubmit(event),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, "Submit", " ")));
  }

}

/***/ }),

/***/ "./src/pages/Signup.scss":
/*!*******************************!*\
  !*** ./src/pages/Signup.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Signup.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Signup.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Signup.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Signup.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./Signup.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/Signup.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/yehiaqtaish/Documents/CMPE272-Project/ProjectGroup-3/frontend/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map