"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Feed.tsx":
/*!*****************************!*\
  !*** ./components/Feed.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptCard */ \"(app-pages-browser)/./components/PromptCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PromptCardList = (param)=>{\n    let { data, handleTagClick } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16 prompt_layout\",\n        children: data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                post: post,\n                handleTagClick: handleTagClick\n            }, post._id, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PromptCardList;\nconst Feed = ()=>{\n    _s();\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            const response = await fetch(\"/api/prompt\");\n            const data = await response.json();\n            setPosts(data);\n        };\n        fetchPosts();\n    }, []);\n    const handleSearchChange = ()=>{\n        setSearchText(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feed\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"relative w-full flex-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Search for tag or Username\",\n                    value: searchText,\n                    onChange: handleSearchChange,\n                    required: true,\n                    className: \"search_input peer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PromptCardList, {\n                data: posts,\n                handleTagClick: ()=>{}\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feed, \"V5KfUGNnicy10VqueP3vrVkcyIc=\");\n_c1 = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c, _c1;\n$RefreshReg$(_c, \"PromptCardList\");\n$RefreshReg$(_c1, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmVlZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU2QztBQUNQO0FBR3RDLE1BQU1HLGlCQUFpQjtRQUFDLEVBQUNDLElBQUksRUFBR0MsY0FBYyxFQUFPO0lBQ25ELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaSCxLQUFLSSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNQLG1EQUFVQTtnQkFBZ0JPLE1BQU1BO2dCQUFNSixnQkFBZ0JBO2VBQXRDSSxLQUFLQyxHQUFHOzs7Ozs7Ozs7O0FBSWpDO0tBUk1QO0FBV04sTUFBTVEsT0FBTzs7SUFFWCxNQUFNLENBQUNDLFlBQWFDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7SUFDOUMsTUFBTSxDQUFDYyxPQUFRQyxTQUFTLEdBQUdmLCtDQUFRQSxDQUFDLEVBQUU7SUFHdENDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsYUFBYTtZQUNqQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTWQsT0FBTyxNQUFNYSxTQUFTRSxJQUFJO1lBQ2hDSixTQUFTWDtRQUNYO1FBRUFZO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUkscUJBQXFCO1FBQ3pCUCxjQUFjO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUNRO1FBQVFkLFdBQVU7OzBCQUNqQiw4REFBQ2U7Z0JBQUtmLFdBQVU7MEJBQ2QsNEVBQUNnQjtvQkFDQ0MsTUFBSztvQkFDTEMsYUFBWTtvQkFDWkMsT0FBT2Q7b0JBQ1BlLFVBQVVQO29CQUNWUSxRQUFRO29CQUNSckIsV0FBVTs7Ozs7Ozs7Ozs7MEJBRWQsOERBQUNKO2dCQUFnQkMsTUFBTVU7Z0JBQU9ULGdCQUFnQixLQUFPOzs7Ozs7Ozs7Ozs7QUFHM0Q7R0FsQ01NO01BQUFBO0FBb0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVlZC50c3g/ZGMxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IFByb21wdENhcmQgZnJvbSAnLi9Qcm9tcHRDYXJkJztcclxuXHJcblxyXG5jb25zdCBQcm9tcHRDYXJkTGlzdCA9ICh7ZGF0YSAsIGhhbmRsZVRhZ0NsaWNrfSA6IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTYgcHJvbXB0X2xheW91dCc+XHJcbiAgICAgIHtkYXRhLm1hcCgocG9zdCA6IGFueSkgPT4gKFxyXG4gICAgICAgIDxQcm9tcHRDYXJkIGtleT17cG9zdC5faWR9IHBvc3Q9e3Bvc3R9IGhhbmRsZVRhZ0NsaWNrPXtoYW5kbGVUYWdDbGlja30gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5jb25zdCBGZWVkID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBbc2VhcmNoVGV4dCAsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoJycpIDsgXHJcbiAgY29uc3QgW3Bvc3RzICwgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pIDsgXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wcm9tcHQnKSA7IFxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgIHNldFBvc3RzKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hQb3N0cygpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9ICgpID0+IHtcclxuICAgIHNldFNlYXJjaFRleHQoJycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmZWVkJz5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwgZmxleC1jZW50ZXInPlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VhcmNoIGZvciB0YWcgb3IgVXNlcm5hbWUnXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGV4dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdzZWFyY2hfaW5wdXQgcGVlcicgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8UHJvbXB0Q2FyZExpc3QgIGRhdGE9e3Bvc3RzfSBoYW5kbGVUYWdDbGljaz17KCkgPT4ge319Lz5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVlZDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvbXB0Q2FyZCIsIlByb21wdENhcmRMaXN0IiwiZGF0YSIsImhhbmRsZVRhZ0NsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicG9zdCIsIl9pZCIsIkZlZWQiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsInBvc3RzIiwic2V0UG9zdHMiLCJmZXRjaFBvc3RzIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJzZWN0aW9uIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Feed.tsx\n"));

/***/ })

});