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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PromptCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PromptCard */ \"(app-pages-browser)/./components/PromptCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst PromptCardList = (param)=>{\n    let { data, handleTagClick: handleTagClick1 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-16 prompt_layout\",\n        children: data.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PromptCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                post: post,\n                handleTagClick: handleTagClick1\n            }, post._id, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PromptCardList;\nconst Feed = ()=>{\n    _s();\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [searchTimeout, setSearchTimeout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [searchedResults, setSearchedResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchPosts = async ()=>{\n            const response = await fetch(\"/api/prompt\");\n            const data = await response.json();\n            setPosts(data);\n        };\n        fetchPosts();\n    }, []);\n    const filterPrompts = (searchtext)=>{\n        const regex = new RegExp(searchtext, \"i\"); // 'i' flag for case-insensitive search\n        return posts.filter((item)=>regex.test(item.creator.username) || regex.test(item.tag) || regex.test(item.prompt));\n    };\n    const handleSearchChange = (e)=>{\n        clearTimeout(searchTimeout);\n        setSearchText(e.target.value);\n        // debounce method\n        setSearchTimeout(setTimeout(()=>{\n            const searchResult = filterPrompts(e.target.value);\n            setSearchedResults(searchResult);\n        }, 500));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"feed\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"relative w-full flex-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Search for tag or Username\",\n                    value: searchText,\n                    onChange: handleSearchChange,\n                    required: true,\n                    className: \"search_input peer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            searchText ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PromptCardList, {\n                data: searchedResults,\n                handleTagClick: handleTagClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PromptCardList, {\n                data: allPosts,\n                handleTagClick: handleTagClick\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\islam\\\\Desktop\\\\fullStack-nextjs-promptApp\\\\components\\\\Feed.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Feed, \"auvns4jWR+jZU9OcOgER8CQwzcU=\");\n_c1 = Feed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feed);\nvar _c, _c1;\n$RefreshReg$(_c, \"PromptCardList\");\n$RefreshReg$(_c1, \"Feed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmVlZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU2QztBQUNQO0FBR3RDLE1BQU1HLGlCQUFpQjtRQUFDLEVBQUNDLElBQUksRUFBR0MsZ0JBQUFBLGVBQWMsRUFBTztJQUNuRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWkgsS0FBS0ksR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDUCxtREFBVUE7Z0JBQWdCTyxNQUFNQTtnQkFBTUosZ0JBQWdCQTtlQUF0Q0ksS0FBS0MsR0FBRzs7Ozs7Ozs7OztBQUlqQztLQVJNUDtBQVdOLE1BQU1RLE9BQU87O0lBRVgsTUFBTSxDQUFDQyxZQUFhQyxjQUFjLEdBQUdiLCtDQUFRQSxDQUFDO0lBQzlDLE1BQU0sQ0FBQ2MsT0FBUUMsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3RDLE1BQU0sQ0FBQ2dCLGVBQWVDLGlCQUFpQixHQUFHakIsK0NBQVFBLENBQU07SUFDeEQsTUFBTSxDQUFDa0IsaUJBQWlCQyxtQkFBbUIsR0FBR25CLCtDQUFRQSxDQUFDLEVBQUU7SUFFekRDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTW1CLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1sQixPQUFPLE1BQU1pQixTQUFTRSxJQUFJO1lBQ2hDUixTQUFTWDtRQUNYO1FBRUFnQjtJQUNGLEdBQUcsRUFBRTtJQUdMLE1BQU1JLGdCQUFnQixDQUFDQztRQUNyQixNQUFNQyxRQUFRLElBQUlDLE9BQU9GLFlBQVksTUFBTSx1Q0FBdUM7UUFDbEYsT0FBT1gsTUFBTWMsTUFBTSxDQUNqQixDQUFDQyxPQUNDSCxNQUFNSSxJQUFJLENBQUNELEtBQUtFLE9BQU8sQ0FBQ0MsUUFBUSxLQUNoQ04sTUFBTUksSUFBSSxDQUFDRCxLQUFLSSxHQUFHLEtBQ25CUCxNQUFNSSxJQUFJLENBQUNELEtBQUtLLE1BQU07SUFFNUI7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ0M7UUFDMUJDLGFBQWFyQjtRQUNiSCxjQUFjdUIsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBRTVCLGtCQUFrQjtRQUNsQnRCLGlCQUNFdUIsV0FBVztZQUNULE1BQU1DLGVBQWVqQixjQUFjWSxFQUFFRSxNQUFNLENBQUNDLEtBQUs7WUFDakRwQixtQkFBbUJzQjtRQUNyQixHQUFHO0lBRVA7SUFFQSxxQkFDRSw4REFBQ0M7UUFBUW5DLFdBQVU7OzBCQUNqQiw4REFBQ29DO2dCQUFLcEMsV0FBVTswQkFDZCw0RUFBQ3FDO29CQUNDQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaUCxPQUFPM0I7b0JBQ1BtQyxVQUFVWjtvQkFDVmEsUUFBUTtvQkFDUnpDLFdBQVU7Ozs7Ozs7Ozs7O1lBR1RLLDJCQUNDLDhEQUFDVDtnQkFDQ0MsTUFBTWM7Z0JBQ05iLGdCQUFnQkE7Ozs7OzBDQUdsQiw4REFBQ0Y7Z0JBQWVDLE1BQU02QztnQkFBVTVDLGdCQUFnQkE7Ozs7Ozs7Ozs7OztBQUk1RDtHQS9ETU07TUFBQUE7QUFpRU4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWVkLnRzeD9kYzFkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQgUHJvbXB0Q2FyZCBmcm9tICcuL1Byb21wdENhcmQnO1xyXG5cclxuXHJcbmNvbnN0IFByb21wdENhcmRMaXN0ID0gKHtkYXRhICwgaGFuZGxlVGFnQ2xpY2t9IDogYW55KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0xNiBwcm9tcHRfbGF5b3V0Jz5cclxuICAgICAge2RhdGEubWFwKChwb3N0IDogYW55KSA9PiAoXHJcbiAgICAgICAgPFByb21wdENhcmQga2V5PXtwb3N0Ll9pZH0gcG9zdD17cG9zdH0gaGFuZGxlVGFnQ2xpY2s9e2hhbmRsZVRhZ0NsaWNrfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmNvbnN0IEZlZWQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2hUZXh0ICwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZSgnJykgOyBcclxuICBjb25zdCBbcG9zdHMgLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSkgOyBcclxuICBjb25zdCBbc2VhcmNoVGltZW91dCwgc2V0U2VhcmNoVGltZW91dF0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xyXG4gIGNvbnN0IFtzZWFyY2hlZFJlc3VsdHMsIHNldFNlYXJjaGVkUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3Byb21wdCcpIDsgXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgc2V0UG9zdHMoZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaFBvc3RzKClcclxuICB9LCBbXSlcclxuXHJcblxyXG4gIGNvbnN0IGZpbHRlclByb21wdHMgPSAoc2VhcmNodGV4dCA6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHNlYXJjaHRleHQsIFwiaVwiKTsgLy8gJ2knIGZsYWcgZm9yIGNhc2UtaW5zZW5zaXRpdmUgc2VhcmNoXHJcbiAgICByZXR1cm4gcG9zdHMuZmlsdGVyKFxyXG4gICAgICAoaXRlbSA6IGFueSkgPT5cclxuICAgICAgICByZWdleC50ZXN0KGl0ZW0uY3JlYXRvci51c2VybmFtZSkgfHxcclxuICAgICAgICByZWdleC50ZXN0KGl0ZW0udGFnKSB8fFxyXG4gICAgICAgIHJlZ2V4LnRlc3QoaXRlbS5wcm9tcHQpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENoYW5nZSA9IChlIDogYW55KSA9PiB7XHJcbiAgICBjbGVhclRpbWVvdXQoc2VhcmNoVGltZW91dCk7XHJcbiAgICBzZXRTZWFyY2hUZXh0KGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAvLyBkZWJvdW5jZSBtZXRob2RcclxuICAgIHNldFNlYXJjaFRpbWVvdXQoXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGZpbHRlclByb21wdHMoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFNlYXJjaGVkUmVzdWx0cyhzZWFyY2hSZXN1bHQpO1xyXG4gICAgICB9LCA1MDApXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2ZlZWQnPlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J3JlbGF0aXZlIHctZnVsbCBmbGV4LWNlbnRlcic+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggZm9yIHRhZyBvciBVc2VybmFtZSdcclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaENoYW5nZX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NlYXJjaF9pbnB1dCBwZWVyJyAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogQWxsIFByb21wdHMgKi99XHJcbiAgICAgICAgICB7c2VhcmNoVGV4dCA/IChcclxuICAgICAgICAgICAgPFByb21wdENhcmRMaXN0XHJcbiAgICAgICAgICAgICAgZGF0YT17c2VhcmNoZWRSZXN1bHRzfVxyXG4gICAgICAgICAgICAgIGhhbmRsZVRhZ0NsaWNrPXtoYW5kbGVUYWdDbGlja31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxQcm9tcHRDYXJkTGlzdCBkYXRhPXthbGxQb3N0c30gaGFuZGxlVGFnQ2xpY2s9e2hhbmRsZVRhZ0NsaWNrfSAvPlxyXG4gICAgICAgICApfVxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWVkO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9tcHRDYXJkIiwiUHJvbXB0Q2FyZExpc3QiLCJkYXRhIiwiaGFuZGxlVGFnQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0IiwiX2lkIiwiRmVlZCIsInNlYXJjaFRleHQiLCJzZXRTZWFyY2hUZXh0IiwicG9zdHMiLCJzZXRQb3N0cyIsInNlYXJjaFRpbWVvdXQiLCJzZXRTZWFyY2hUaW1lb3V0Iiwic2VhcmNoZWRSZXN1bHRzIiwic2V0U2VhcmNoZWRSZXN1bHRzIiwiZmV0Y2hQb3N0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZmlsdGVyUHJvbXB0cyIsInNlYXJjaHRleHQiLCJyZWdleCIsIlJlZ0V4cCIsImZpbHRlciIsIml0ZW0iLCJ0ZXN0IiwiY3JlYXRvciIsInVzZXJuYW1lIiwidGFnIiwicHJvbXB0IiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwiZSIsImNsZWFyVGltZW91dCIsInRhcmdldCIsInZhbHVlIiwic2V0VGltZW91dCIsInNlYXJjaFJlc3VsdCIsInNlY3Rpb24iLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwiYWxsUG9zdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Feed.tsx\n"));

/***/ })

});