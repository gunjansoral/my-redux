/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redux */ \"./src/redux/index.js\");\n// Enter your code from here\n\nconst reducer = (state, action) => {\n  if (action.type === 'INC') return {\n    ...state,\n    value: state.value + 1\n  };\n};\nconst store = (0,_redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(reducer);\nfunction increment() {\n  (0,_redux__WEBPACK_IMPORTED_MODULE_0__.dispatch)({\n    type: 'INC',\n    payload: 1\n  });\n}\nconst btn = document.querySelector('button');\nbtn.addEventListener('click', increment);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDZ0Q7QUFFaEQsTUFBTUUsT0FBTyxHQUFHQSxDQUFDQyxLQUFLLEVBQUVDLE1BQU0sS0FBSztFQUNqQyxJQUFJQSxNQUFNLENBQUNDLElBQUksS0FBSyxLQUFLLEVBQ3ZCLE9BQU87SUFBRSxHQUFHRixLQUFLO0lBQUVHLEtBQUssRUFBRUgsS0FBSyxDQUFDRyxLQUFLLEdBQUc7RUFBRSxDQUFDO0FBQy9DLENBQUM7QUFFRCxNQUFNQyxLQUFLLEdBQUdQLG1EQUFXLENBQUNFLE9BQU8sQ0FBQztBQUVsQyxTQUFTTSxTQUFTQSxDQUFBLEVBQUc7RUFDbkJQLGdEQUFRLENBQUM7SUFBRUksSUFBSSxFQUFFLEtBQUs7SUFBRUksT0FBTyxFQUFFO0VBQUUsQ0FBQyxDQUFDO0FBQ3ZDO0FBRUEsTUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDNUNGLEdBQUcsQ0FBQ0csZ0JBQWdCLENBQUMsT0FBTyxFQUFFTCxTQUFTLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtZ3VuamFuLWpzLWFwcC8uL3NyYy9BcHAuanM/YmU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFbnRlciB5b3VyIGNvZGUgZnJvbSBoZXJlXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBkaXNwYXRjaCB9IGZyb20gXCIuL3JlZHV4XCI7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdJTkMnKVxyXG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsIHZhbHVlOiBzdGF0ZS52YWx1ZSArIDEgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpXHJcblxyXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XHJcbiAgZGlzcGF0Y2goeyB0eXBlOiAnSU5DJywgcGF5bG9hZDogMSB9KTtcclxufVxyXG5cclxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudClcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiZGlzcGF0Y2giLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwidmFsdWUiLCJzdG9yZSIsImluY3JlbWVudCIsInBheWxvYWQiLCJidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/App.js\n");

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore),\n/* harmony export */   customEvent: () => (/* binding */ customEvent),\n/* harmony export */   dispatch: () => (/* binding */ dispatch)\n/* harmony export */ });\nconst customEvent = new Event('dispatch');\nfunction dispatch(action) {\n  // Do some processing or action here...\n  customEvent.action = action;\n  // Trigger the custom event\n  document.dispatchEvent(customEvent);\n}\nconst store = {\n  state: 0,\n  getState: () => {\n    return undefined.state;\n  },\n  subscribe: () => {\n    document.addEventListener('dispatch', e => {\n      console.log(undefined.state);\n    });\n  }\n};\nconst createStore = reducer => {\n  let state;\n  document.addEventListener('dispatch', e => {\n    store.subscribe();\n    state = reducer(state, e.action);\n  });\n  return store;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sTUFBTUEsV0FBVyxHQUFHLElBQUlDLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFFekMsU0FBU0MsUUFBUUEsQ0FBQ0MsTUFBTSxFQUFFO0VBQy9CO0VBQ0FILFdBQVcsQ0FBQ0csTUFBTSxHQUFHQSxNQUFNO0VBQzNCO0VBQ0FDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDTCxXQUFXLENBQUM7QUFDckM7QUFFQSxNQUFNTSxLQUFLLEdBQUc7RUFDWkMsS0FBSyxFQUFFLENBQUM7RUFDUkMsUUFBUSxFQUFFQSxDQUFBLEtBQU07SUFDZCxPQUFPLFNBQUksQ0FBQ0QsS0FBSztFQUNuQixDQUFDO0VBQ0RFLFNBQVMsRUFBRUEsQ0FBQSxLQUFNO0lBQ2ZMLFFBQVEsQ0FBQ00sZ0JBQWdCLENBQUMsVUFBVSxFQUFHQyxDQUFDLElBQUs7TUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQUksQ0FBQ04sS0FBSyxDQUFDO0lBQ3pCLENBQUMsQ0FBQztFQUNKO0FBQ0YsQ0FBQztBQUVNLE1BQU1PLFdBQVcsR0FBSUMsT0FBTyxJQUFLO0VBRXRDLElBQUlSLEtBQUs7RUFDVEgsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUdDLENBQUMsSUFBSztJQUMzQ0wsS0FBSyxDQUFDRyxTQUFTLENBQUMsQ0FBQztJQUNqQkYsS0FBSyxHQUFHUSxPQUFPLENBQUNSLEtBQUssRUFBRUksQ0FBQyxDQUFDUixNQUFNLENBQUM7RUFDbEMsQ0FBQyxDQUFDO0VBQ0YsT0FBT0csS0FBSztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmVhdGUtZ3VuamFuLWpzLWFwcC8uL3NyYy9yZWR1eC9pbmRleC5qcz9lYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjdXN0b21FdmVudCA9IG5ldyBFdmVudCgnZGlzcGF0Y2gnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcclxuICAvLyBEbyBzb21lIHByb2Nlc3Npbmcgb3IgYWN0aW9uIGhlcmUuLi5cclxuICBjdXN0b21FdmVudC5hY3Rpb24gPSBhY3Rpb25cclxuICAvLyBUcmlnZ2VyIHRoZSBjdXN0b20gZXZlbnRcclxuICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbUV2ZW50KTtcclxufVxyXG5cclxuY29uc3Qgc3RvcmUgPSB7XHJcbiAgc3RhdGU6IDAsXHJcbiAgZ2V0U3RhdGU6ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlXHJcbiAgfSxcclxuICBzdWJzY3JpYmU6ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Rpc3BhdGNoJywgKGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xyXG5cclxuICBsZXQgc3RhdGU7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGlzcGF0Y2gnLCAoZSkgPT4ge1xyXG4gICAgc3RvcmUuc3Vic2NyaWJlKClcclxuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgZS5hY3Rpb24pO1xyXG4gIH0pXHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjdXN0b21FdmVudCIsIkV2ZW50IiwiZGlzcGF0Y2giLCJhY3Rpb24iLCJkb2N1bWVudCIsImRpc3BhdGNoRXZlbnQiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJzdWJzY3JpYmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/index.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/App.js");
/******/ 	
/******/ })()
;