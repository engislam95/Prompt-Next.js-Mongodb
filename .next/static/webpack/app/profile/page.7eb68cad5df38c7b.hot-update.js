"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./components/Profile.tsx":
/*!********************************!*\
  !*** ./components/Profile.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PromptCard */ \"(app-pages-browser)/./components/PromptCard.tsx\");\n\n\nconst Profile = (param)=>{\n    let { name, desc, data, handleEdit, handleDelete } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"head_text text-left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"blue_gradient\",\n                    children: [\n                        name,\n                        \" Profile\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Profile.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Profile.tsx\",\n                lineNumber: 15,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"desc text-left\",\n                children: desc\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Profile.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 prompt_layout\",\n                children: data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        post: post,\n                        handleEdit: ()=>handleEdit && handleEdit(post),\n                        handleDelete: ()=>handleDelete && handleDelete(post)\n                    }, post._id, false, {\n                        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Profile.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Profile.tsx\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Profile.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUNzQztBQVV0QyxNQUFNQyxVQUFVO1FBQUMsRUFBQ0MsSUFBSSxFQUFHQyxJQUFJLEVBQUdDLElBQUksRUFBR0MsVUFBVSxFQUFHQyxZQUFZLEVBQW9CO0lBQ2xGLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDbkIsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUNaLDRFQUFDRTtvQkFBS0YsV0FBVTs7d0JBQWlCTjt3QkFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ1M7Z0JBQUVILFdBQVU7MEJBQWtCTDs7Ozs7OzBCQUUvQiw4REFBQ1M7Z0JBQUlKLFdBQVU7MEJBQ1pKLEtBQUtTLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ2QsbURBQVVBO3dCQUVUYyxNQUFNQTt3QkFDTlQsWUFBWSxJQUFNQSxjQUFjQSxXQUFXUzt3QkFDM0NSLGNBQWMsSUFBTUEsZ0JBQWdCQSxhQUFhUTt1QkFINUNBLEtBQUtDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdkI7S0FwQk1kO0FBc0JOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZmlsZS50c3g/ODM0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9tcHRJbnRlcmZhY2UgfSBmcm9tIFwiQC90eXBlcy9wcm9tcHRzXCI7XHJcbmltcG9ydCBQcm9tcHRDYXJkIGZyb20gXCIuL1Byb21wdENhcmRcIjtcclxuXHJcbmludGVyZmFjZSBwcm9maWxlSW50ZXJmYWNlIHtcclxuICBuYW1lIDogc3RyaW5nOyBcclxuICBkZXNjIDogc3RyaW5nIDsgXHJcbiAgZGF0YSA6IHByb21wdEludGVyZmFjZVtdIDsgXHJcbiAgaGFuZGxlRWRpdCA6IChwb3N0IDpwcm9tcHRJbnRlcmZhY2UgKSA9PiB2b2lkXHJcbiAgaGFuZGxlRGVsZXRlOiAocG9zdCA6cHJvbXB0SW50ZXJmYWNlKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoe25hbWUgLCBkZXNjICwgZGF0YSAsIGhhbmRsZUVkaXQgLCBoYW5kbGVEZWxldGV9IDogcHJvZmlsZUludGVyZmFjZSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ctZnVsbCc+XHJcbiAgICA8aDEgY2xhc3NOYW1lPSdoZWFkX3RleHQgdGV4dC1sZWZ0Jz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPSdibHVlX2dyYWRpZW50Jz57bmFtZX0gUHJvZmlsZTwvc3Bhbj5cclxuICAgIDwvaDE+XHJcbiAgICA8cCBjbGFzc05hbWU9J2Rlc2MgdGV4dC1sZWZ0Jz57ZGVzY308L3A+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9J210LTEwIHByb21wdF9sYXlvdXQnPlxyXG4gICAgICB7ZGF0YS5tYXAoKHBvc3QgOiBwcm9tcHRJbnRlcmZhY2UpID0+IChcclxuICAgICAgICA8UHJvbXB0Q2FyZFxyXG4gICAgICAgICAga2V5PXtwb3N0Ll9pZH1cclxuICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICBoYW5kbGVFZGl0PXsoKSA9PiBoYW5kbGVFZGl0ICYmIGhhbmRsZUVkaXQocG9zdCl9XHJcbiAgICAgICAgICBoYW5kbGVEZWxldGU9eygpID0+IGhhbmRsZURlbGV0ZSAmJiBoYW5kbGVEZWxldGUocG9zdCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJQcm9tcHRDYXJkIiwiUHJvZmlsZSIsIm5hbWUiLCJkZXNjIiwiZGF0YSIsImhhbmRsZUVkaXQiLCJoYW5kbGVEZWxldGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwicCIsImRpdiIsIm1hcCIsInBvc3QiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Profile.tsx\n"));

/***/ })

});