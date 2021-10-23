"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_dynamic_imports"] = self["webpackChunkwebpack_dynamic_imports"] || []).push([["UsersApi"],{

/***/ "./src/common/usersApi.js":
/*!********************************!*\
  !*** ./src/common/usersApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers),\n/* harmony export */   \"hello\": () => (/* binding */ hello)\n/* harmony export */ });\nconst usersApi = 'https://jsonplaceholder.typicode.com/users/';\n\nfunction getUsers() {\n    return fetch(usersApi)\n    .then(response => {\n        if(!response.ok) throw Error(response.statusText);\n        return response.json();\n    })\n    .then((json) => json)\n}\n\nfunction hello(name) {\n    return `Hello ${name}`;\n}\n\n//# sourceURL=webpack://webpack_dynamic_imports/./src/common/usersApi.js?");

/***/ })

}]);