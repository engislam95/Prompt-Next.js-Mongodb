"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/update-prompt/page",{

/***/ "(app-pages-browser)/./components/Form.tsx":
/*!*****************************!*\
  !*** ./components/Form.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Form = (param)=>{\n    let { type, post, setPost, submitting, handleSubmit } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"w-full max-w-full flex-start flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"head_text text-left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"blue_gradient\",\n                    children: [\n                        type,\n                        \" Post\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"desc text-left max-w-md\",\n                children: [\n                    type,\n                    \" and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-satoshi font-semibold text-base text-gray-700\",\n                                children: \"Your AI Prompt\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                value: post.prompt,\n                                onChange: (e)=>setPost({\n                                        ...post,\n                                        prompt: e.target.value\n                                    }),\n                                placeholder: \"Write your post here\",\n                                required: true,\n                                className: \"form_textarea \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-satoshi font-semibold text-base text-gray-700\",\n                                children: [\n                                    \"Field of Prompt\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-normal\",\n                                        children: \"(#product, #webdevelopment, #idea, etc.)\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                value: post.tag,\n                                onChange: (e)=>setPost({\n                                        ...post,\n                                        tag: e.target.value\n                                    }),\n                                type: \"text\",\n                                placeholder: \"#Tag\",\n                                required: true,\n                                className: \"form_input\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-end mx-3 mb-5 gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                className: \"text-gray-500 text-sm\",\n                                children: \"Cancel\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                disabled: submitting,\n                                className: \"px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white\",\n                                children: submitting ? \"\".concat(type, \"ing...\") : type\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Form.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDNkI7QUFTN0IsTUFBTUMsT0FBTztRQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUFrQjtJQUM3RSxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFDWiw0RUFBQ0U7b0JBQUtGLFdBQVU7O3dCQUFpQk47d0JBQUs7Ozs7Ozs7Ozs7OzswQkFFeEMsOERBQUNTO2dCQUFFSCxXQUFVOztvQkFDVk47b0JBQUs7Ozs7Ozs7MEJBSVIsOERBQUNVO2dCQUNDQyxVQUFVUDtnQkFDVkUsV0FBVTs7a0NBRVYsOERBQUNNOzswQ0FDQyw4REFBQ0o7Z0NBQUtGLFdBQVU7MENBQXFEOzs7Ozs7MENBSXJFLDhEQUFDTztnQ0FDQ0MsT0FBT2IsS0FBS2MsTUFBTTtnQ0FDbEJDLFVBQVUsQ0FBQ0MsSUFBTWYsUUFBUTt3Q0FBRSxHQUFHRCxJQUFJO3dDQUFFYyxRQUFRRSxFQUFFQyxNQUFNLENBQUNKLEtBQUs7b0NBQUM7Z0NBQzNESyxhQUFZO2dDQUNaQyxRQUFRO2dDQUNSZCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBSWQsOERBQUNNOzswQ0FDQyw4REFBQ0o7Z0NBQUtGLFdBQVU7O29DQUFxRDtvQ0FDbkQ7a0RBQ2hCLDhEQUFDRTt3Q0FBS0YsV0FBVTtrREFBYzs7Ozs7Ozs7Ozs7OzBDQUloQyw4REFBQ2U7Z0NBQ0NQLE9BQU9iLEtBQUtxQixHQUFHO2dDQUNmTixVQUFVLENBQUNDLElBQU1mLFFBQVE7d0NBQUUsR0FBR0QsSUFBSTt3Q0FBRXFCLEtBQUtMLEVBQUVDLE1BQU0sQ0FBQ0osS0FBSztvQ0FBQztnQ0FDeERkLE1BQUs7Z0NBQ0xtQixhQUFZO2dDQUNaQyxRQUFRO2dDQUNSZCxXQUFVOzs7Ozs7Ozs7Ozs7a0NBSWQsOERBQUNpQjt3QkFBSWpCLFdBQVU7OzBDQUNiLDhEQUFDUixrREFBSUE7Z0NBQUMwQixNQUFLO2dDQUFJbEIsV0FBVTswQ0FBd0I7Ozs7OzswQ0FJakQsOERBQUNtQjtnQ0FDQ3pCLE1BQUs7Z0NBQ0wwQixVQUFVdkI7Z0NBQ1ZHLFdBQVU7MENBRVRILGFBQWEsR0FBUSxPQUFMSCxNQUFLLFlBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUM7S0E5RE1EO0FBZ0VOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS50c3g/ZWVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9tcHRJbnRlcmZhY2UgfSBmcm9tIFwiQC90eXBlcy9wcm9tcHRzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBmb3JtSW50ZXJmYWNlIHtcclxuICB0eXBlIDogc3RyaW5nICxcclxuICBwb3N0IDogcHJvbXB0SW50ZXJmYWNlIHwgeyBwcm9tcHQ6IHN0cmluZyAsIHRhZzogc3RyaW5nfTsgXHJcbiAgc2V0UG9zdCA6IGFueVxyXG4gIHN1Ym1pdHRpbmcgOiBib29sZWFuIDtcclxuICBoYW5kbGVTdWJtaXQgOiAoKSA9PiB2b2lkIDtcclxufVxyXG5jb25zdCBGb3JtID0gKHsgdHlwZSwgcG9zdCwgc2V0UG9zdCwgc3VibWl0dGluZywgaGFuZGxlU3VibWl0IH0gOiBmb3JtSW50ZXJmYWNlKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy1mdWxsIG1heC13LWZ1bGwgZmxleC1zdGFydCBmbGV4LWNvbCc+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRfdGV4dCB0ZXh0LWxlZnQnPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmx1ZV9ncmFkaWVudCc+e3R5cGV9IFBvc3Q8L3NwYW4+XHJcbiAgICAgIDwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT0nZGVzYyB0ZXh0LWxlZnQgbWF4LXctbWQnPlxyXG4gICAgICAgIHt0eXBlfSBhbmQgc2hhcmUgYW1hemluZyBwcm9tcHRzIHdpdGggdGhlIHdvcmxkLCBhbmQgbGV0IHlvdXJcclxuICAgICAgICBpbWFnaW5hdGlvbiBydW4gd2lsZCB3aXRoIGFueSBBSS1wb3dlcmVkIHBsYXRmb3JtXHJcbiAgICAgIDwvcD5cclxuXHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICBjbGFzc05hbWU9J210LTEwIHctZnVsbCBtYXgtdy0yeGwgZmxleCBmbGV4LWNvbCBnYXAtNyBnbGFzc21vcnBoaXNtJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdmb250LXNhdG9zaGkgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgdGV4dC1ncmF5LTcwMCc+XHJcbiAgICAgICAgICAgIFlvdXIgQUkgUHJvbXB0XHJcbiAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHZhbHVlPXtwb3N0LnByb21wdH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQb3N0KHsgLi4ucG9zdCwgcHJvbXB0OiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1dyaXRlIHlvdXIgcG9zdCBoZXJlJ1xyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm1fdGV4dGFyZWEgJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtc2F0b3NoaSBmb250LXNlbWlib2xkIHRleHQtYmFzZSB0ZXh0LWdyYXktNzAwJz5cclxuICAgICAgICAgICAgRmllbGQgb2YgUHJvbXB0e1wiIFwifVxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZvbnQtbm9ybWFsJz5cclxuICAgICAgICAgICAgICAoI3Byb2R1Y3QsICN3ZWJkZXZlbG9wbWVudCwgI2lkZWEsIGV0Yy4pXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cG9zdC50YWd9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UG9zdCh7IC4uLnBvc3QsIHRhZzogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPScjVGFnJ1xyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Zvcm1faW5wdXQnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWVuZCBteC0zIG1iLTUgZ2FwLTQnPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAwIHRleHQtc20nPlxyXG4gICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNSBweS0xLjUgdGV4dC1zbSBiZy1wcmltYXJ5LW9yYW5nZSByb3VuZGVkLWZ1bGwgdGV4dC13aGl0ZSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3N1Ym1pdHRpbmcgPyBgJHt0eXBlfWluZy4uLmAgOiB0eXBlfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiXSwibmFtZXMiOlsiTGluayIsIkZvcm0iLCJ0eXBlIiwicG9zdCIsInNldFBvc3QiLCJzdWJtaXR0aW5nIiwiaGFuZGxlU3VibWl0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsInRleHRhcmVhIiwidmFsdWUiLCJwcm9tcHQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiaW5wdXQiLCJ0YWciLCJkaXYiLCJocmVmIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Form.tsx\n"));

/***/ })

});