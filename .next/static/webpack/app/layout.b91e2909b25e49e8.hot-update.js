"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a7675f8c34c2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzIxYmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhNzY3NWY4YzM0YzJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Nav = ()=>{\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [toggleDropdown, setToggleDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const settingProviders = async ()=>{\n            const response = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getProviders)();\n            setProviders(response);\n        };\n        settingProviders();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex-between w-full mb-16 pt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                className: \"flex gap-2 flex-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/assets/images/logo.svg\",\n                        alt: \"Promptopia Logo\",\n                        width: 30,\n                        height: 30,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo_text\",\n                        children: \"Promptopia\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:flex hidden\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-3 md:gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/create-prompt\",\n                            className: \"black_btn\",\n                            children: \"Create Post\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"outline_btn\",\n                            onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut,\n                            children: \"Sign Out\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/profile\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: session === null || session === void 0 ? void 0 : session.user.image,\n                                width: 37,\n                                height: 37,\n                                className: \"rounded-full\",\n                                alt: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id),\n                            className: \"black_btn\",\n                            children: \"Sign In\"\n                        }, provider.name, false, {\n                            fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:hidden flex relative\",\n                children: (session === null || session === void 0 ? void 0 : session.user) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: session === null || session === void 0 ? void 0 : session.user.image,\n                            width: 37,\n                            height: 37,\n                            className: \"rounded-full cursor-pointer\",\n                            alt: \"Profile\",\n                            onClick: ()=>setToggleDropdown((prevState)=>!prevState)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        toggleDropdown && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"dropdown\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/profile\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"My Profile\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/create-prompt\",\n                                    className: \"dropdown_link\",\n                                    onClick: ()=>setToggleDropdown(false),\n                                    children: \"Create Prompt\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"button\",\n                                    className: \"mt-5 w-full black_btn\",\n                                    onClick: ()=>{\n                                        setToggleDropdown(false);\n                                        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut;\n                                    },\n                                    children: \"Sign Out\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: providers && Object.values(providers).map((provider)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(provider.id),\n                            className: \"black_btn\",\n                            children: \"Sign In\"\n                        }, provider.name, false, {\n                            fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Nav.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"pQwkQD6kx3e0MFe+jjOLDX1MoSg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDNkI7QUFDRTtBQUNhO0FBQ2dDO0FBQzVFLE1BQU1RLE1BQU07O0lBQ1YsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR0gsMkRBQVVBO0lBQ3BDLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNXLGdCQUFnQkMsa0JBQWtCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXJEQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLG1CQUFtQjtZQUN2QixNQUFNQyxXQUFXLE1BQU1YLDZEQUFZQTtZQUNuQ08sYUFBYUk7UUFDZjtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2xCLGtEQUFJQTtnQkFBQ21CLE1BQUs7Z0JBQUlELFdBQVU7O2tDQUN2Qiw4REFBQ2pCLG1EQUFLQTt3QkFDSm1CLEtBQUk7d0JBQ0pDLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JMLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ007d0JBQUVOLFdBQVU7a0NBQVk7Ozs7Ozs7Ozs7OzswQkFHM0IsOERBQUNPO2dCQUFJUCxXQUFVOzBCQUNaUixDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNnQixJQUFJLGtCQUNaLDhEQUFDRDtvQkFBSVAsV0FBVTs7c0NBQ2IsOERBQUNsQixrREFBSUE7NEJBQUNtQixNQUFLOzRCQUFpQkQsV0FBVTtzQ0FBWTs7Ozs7O3NDQUdsRCw4REFBQ1M7NEJBQ0NDLE1BQUs7NEJBQ0xWLFdBQVU7NEJBQ1ZXLFNBQVN6QixvREFBT0E7c0NBQ2pCOzs7Ozs7c0NBR0QsOERBQUNKLGtEQUFJQTs0QkFBQ21CLE1BQUs7c0NBQ1QsNEVBQUNsQixtREFBS0E7Z0NBQ0ptQixHQUFHLEVBQUVWLG9CQUFBQSw4QkFBQUEsUUFBU2dCLElBQUksQ0FBQ0ksS0FBSztnQ0FDeEJSLE9BQU87Z0NBQ1BDLFFBQVE7Z0NBQ1JMLFdBQVU7Z0NBQ1ZHLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS1Y7OEJBQ0dWLGFBQ0NvQixPQUFPQyxNQUFNLENBQUNyQixXQUFXc0IsR0FBRyxDQUFDLENBQUNDLHlCQUM1Qiw4REFBQ1A7NEJBQ0NDLE1BQUs7NEJBRUxDLFNBQVMsSUFBTXZCLHVEQUFNQSxDQUFDNEIsU0FBU0MsRUFBRTs0QkFDakNqQixXQUFVO3NDQUNYOzJCQUhNZ0IsU0FBU0UsSUFBSTs7Ozs7Ozs7Ozs7MEJBVzlCLDhEQUFDWDtnQkFBSVAsV0FBVTswQkFDWlIsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTZ0IsSUFBSSxrQkFDWiw4REFBQ0Q7b0JBQUlQLFdBQVU7O3NDQUNiLDhEQUFDakIsbURBQUtBOzRCQUNKbUIsR0FBRyxFQUFFVixvQkFBQUEsOEJBQUFBLFFBQVNnQixJQUFJLENBQUNJLEtBQUs7NEJBQ3hCUixPQUFPOzRCQUNQQyxRQUFROzRCQUNSTCxXQUFVOzRCQUNWRyxLQUFJOzRCQUNKUSxTQUFTLElBQU1mLGtCQUFrQixDQUFDdUIsWUFBYyxDQUFDQTs7Ozs7O3dCQUVsRHhCLGdDQUNDLDhEQUFDWTs0QkFBSVAsV0FBVTs7OENBQ2IsOERBQUNsQixrREFBSUE7b0NBQ0htQixNQUFLO29DQUNMRCxXQUFVO29DQUNWVyxTQUFTLElBQU1mLGtCQUFrQjs4Q0FDbEM7Ozs7Ozs4Q0FHRCw4REFBQ2Qsa0RBQUlBO29DQUNIbUIsTUFBSztvQ0FDTEQsV0FBVTtvQ0FDVlcsU0FBUyxJQUFNZixrQkFBa0I7OENBQ2xDOzs7Ozs7OENBR0QsOERBQUNhO29DQUNDQyxNQUFLO29DQUNMVixXQUFVO29DQUNWVyxTQUFTO3dDQUNQZixrQkFBa0I7d0NBQ2xCVixvREFBT0E7b0NBQ1Q7OENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQU9QOzhCQUNHTyxhQUNDb0IsT0FBT0MsTUFBTSxDQUFDckIsV0FBV3NCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDNUIsOERBQUNQOzRCQUNDQyxNQUFLOzRCQUVMQyxTQUFTLElBQU12Qix1REFBTUEsQ0FBQzRCLFNBQVNDLEVBQUU7NEJBQ2pDakIsV0FBVTtzQ0FDWDsyQkFITWdCLFNBQVNFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWXBDO0dBNUhNNUI7O1FBQ3NCRCx1REFBVUE7OztLQURoQ0M7QUE4SE4sK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYudHN4P2U2MzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2lnbk91dCwgZ2V0UHJvdmlkZXJzLCBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBbcHJvdmlkZXJzLCBzZXRQcm92aWRlcnNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RvZ2dsZURyb3Bkb3duLCBzZXRUb2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzZXR0aW5nUHJvdmlkZXJzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xyXG4gICAgICBzZXRQcm92aWRlcnMocmVzcG9uc2UgYXMgYW55KTtcclxuICAgIH07XHJcblxyXG4gICAgc2V0dGluZ1Byb3ZpZGVycygpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4LWJldHdlZW4gdy1mdWxsIG1iLTE2IHB0LTNcIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGZsZXgtY2VudGVyXCI+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICBhbHQ9XCJQcm9tcHRvcGlhIExvZ29cIlxyXG4gICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29fdGV4dFwiPlByb21wdG9waWE8L3A+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgey8qIERlc2t0b3AgTmF2ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmZsZXggaGlkZGVuXCI+XHJcbiAgICAgICAge3Nlc3Npb24/LnVzZXIgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTMgbWQ6Z2FwLTVcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jcmVhdGUtcHJvbXB0XCIgY2xhc3NOYW1lPVwiYmxhY2tfYnRuXCI+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlIFBvc3RcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0bGluZV9idG5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25PdXQgYXMgYW55fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uPy51c2VyLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezM3fVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXszN31cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3ZpZGVycyAmJlxyXG4gICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2tfYnRuXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIE1vYmlsZSBOYXYgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206aGlkZGVuIGZsZXggcmVsYXRpdmVcIj5cclxuICAgICAgICB7c2Vzc2lvbj8udXNlciA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3Nlc3Npb24/LnVzZXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezM3fVxyXG4gICAgICAgICAgICAgIGhlaWdodD17Mzd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRUb2dnbGVEcm9wZG93bigocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge3RvZ2dsZURyb3Bkb3duICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bl9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNeSBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NyZWF0ZS1wcm9tcHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bl9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBDcmVhdGUgUHJvbXB0XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IHctZnVsbCBibGFja19idG5cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VG9nZ2xlRHJvcGRvd24oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpZ25PdXQgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTaWduIE91dFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAge3Byb3ZpZGVycyAmJlxyXG4gICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyOiBhbnkpID0+IChcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17cHJvdmlkZXIubmFtZX1cclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2lnbkluKHByb3ZpZGVyLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2tfYnRuXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInNpZ25PdXQiLCJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJ1c2VTZXNzaW9uIiwiTmF2IiwiZGF0YSIsInNlc3Npb24iLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJ0b2dnbGVEcm9wZG93biIsInNldFRvZ2dsZURyb3Bkb3duIiwic2V0dGluZ1Byb3ZpZGVycyIsInJlc3BvbnNlIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImRpdiIsInVzZXIiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsImltYWdlIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJpZCIsIm5hbWUiLCJwcmV2U3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n"));

/***/ })

});