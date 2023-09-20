/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/athlete.ts":
/*!************************!*\
  !*** ./src/athlete.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Athlete: () => (/* binding */ Athlete)\n/* harmony export */ });\nvar Athlete = /** @class */ (function () {\n    function Athlete(athleteId, name, age) {\n        this.athleteId = athleteId;\n        this.name = name;\n        this.age = age;\n    }\n    return Athlete;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/athlete.ts?");

/***/ }),

/***/ "./src/athletes/marathonRunner.ts":
/*!****************************************!*\
  !*** ./src/athletes/marathonRunner.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarathonRunner: () => (/* binding */ MarathonRunner)\n/* harmony export */ });\n/* harmony import */ var _athlete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../athlete */ \"./src/athlete.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar MarathonRunner = /** @class */ (function (_super) {\n    __extends(MarathonRunner, _super);\n    function MarathonRunner(athleteId, name, age, bestMarathonTime) {\n        var _this = _super.call(this, athleteId, name, age) || this;\n        _this.sportsfield = \"MarathonRunner\";\n        _this.bestMarathonTime = bestMarathonTime;\n        return _this;\n    }\n    MarathonRunner.prototype.train = function () { };\n    MarathonRunner.prototype.compete = function () { };\n    MarathonRunner.prototype.enduranceTraining = function () { };\n    MarathonRunner.prototype.checkEnduranceLevel = function () { };\n    return MarathonRunner;\n}(_athlete__WEBPACK_IMPORTED_MODULE_0__.Athlete));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/athletes/marathonRunner.ts?");

/***/ }),

/***/ "./src/athletes/sprinter.ts":
/*!**********************************!*\
  !*** ./src/athletes/sprinter.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Spinter: () => (/* binding */ Spinter)\n/* harmony export */ });\n/* harmony import */ var _athlete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../athlete */ \"./src/athlete.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Spinter = /** @class */ (function (_super) {\n    __extends(Spinter, _super);\n    function Spinter(athleteId, name, age, best100mTime, best200mTime) {\n        var _this = _super.call(this, athleteId, name, age) || this;\n        _this.sportsfield = \"Spinter\";\n        _this.best100mTime = best100mTime;\n        _this.best200mTime = best200mTime;\n        return _this;\n    }\n    Spinter.prototype.train = function () { };\n    Spinter.prototype.compete = function () { };\n    return Spinter;\n}(_athlete__WEBPACK_IMPORTED_MODULE_0__.Athlete));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/athletes/sprinter.ts?");

/***/ }),

/***/ "./src/athletes/swimmer.ts":
/*!*********************************!*\
  !*** ./src/athletes/swimmer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Swimmer: () => (/* binding */ Swimmer)\n/* harmony export */ });\n/* harmony import */ var _athlete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../athlete */ \"./src/athlete.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar Swimmer = /** @class */ (function (_super) {\n    __extends(Swimmer, _super);\n    function Swimmer(athleteId, name, age, preferredStroke, best100mFreestyleTime) {\n        var _this = _super.call(this, athleteId, name, age) || this;\n        _this.sportsfield = \"Swimmer\";\n        _this.preferredStroke = preferredStroke;\n        _this.best100mFreestyleTime = best100mFreestyleTime;\n        return _this;\n    }\n    Swimmer.prototype.train = function () { };\n    Swimmer.prototype.compete = function () { };\n    return Swimmer;\n}(_athlete__WEBPACK_IMPORTED_MODULE_0__.Athlete));\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/athletes/swimmer.ts?");

/***/ }),

/***/ "./src/competition.ts":
/*!****************************!*\
  !*** ./src/competition.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Competition: () => (/* binding */ Competition)\n/* harmony export */ });\nvar Competition = /** @class */ (function () {\n    function Competition(competitionId, date, location) {\n        this.athletes = [];\n        this.competitionId = competitionId;\n        this.date = date;\n        this.location = location;\n    }\n    Competition.prototype.registerAthlete = function (athlete) {\n        this.athletes.push(athlete);\n    };\n    Competition.prototype.startCompetition = function () {\n        if (this.athletes.length < 2) {\n            console.log(\"Not enough athletes registered. At least 2 athletes are required to start the competition.\");\n        }\n        else {\n            console.log(\"The competition \".concat(this.competitionId, \" on \").concat(this.date, \" at \").concat(this.location, \" has started.\"));\n            console.log(\"Registered Athletes:\");\n            for (var _i = 0, _a = this.athletes; _i < _a.length; _i++) {\n                var athlete = _a[_i];\n                console.log(\"Name: \".concat(athlete.name, \", age: \").concat(athlete.age, \", sports field: \").concat(athlete.sportsfield, \".\"));\n            }\n        }\n    };\n    return Competition;\n}());\n\n\n\n//# sourceURL=webpack://wbepack-setup/./src/competition.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _athletes_marathonRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./athletes/marathonRunner */ \"./src/athletes/marathonRunner.ts\");\n/* harmony import */ var _athletes_sprinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./athletes/sprinter */ \"./src/athletes/sprinter.ts\");\n/* harmony import */ var _athletes_swimmer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./athletes/swimmer */ \"./src/athletes/swimmer.ts\");\n/* harmony import */ var _competition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competition */ \"./src/competition.ts\");\n\n\n\n\nvar competinion = new _competition__WEBPACK_IMPORTED_MODULE_3__.Competition(\"fr14\", \"2023.09.20\", \"KLaipeda\");\nvar athlete1 = new _athletes_marathonRunner__WEBPACK_IMPORTED_MODULE_0__.MarathonRunner(\"Mr25\", \"Joe Doe\", \"28\", 23);\nvar athlete2 = new _athletes_sprinter__WEBPACK_IMPORTED_MODULE_1__.Spinter(\"sp01\", \"Joe Joes\", \"25\", 10, 23);\nvar athlete3 = new _athletes_swimmer__WEBPACK_IMPORTED_MODULE_2__.Swimmer(\"sw01\", \"Julius Bačkulis\", \"24\", \"peteliškė\", 42);\ncompetinion.registerAthlete(athlete1);\ncompetinion.registerAthlete(athlete2);\ncompetinion.registerAthlete(athlete3);\n// console.log(athlete2);\ncompetinion.startCompetition();\n\n\n//# sourceURL=webpack://wbepack-setup/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;