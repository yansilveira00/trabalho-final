webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\rocka\\OneDrive\\Documentos\\GitHub\\trabalho-final\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;







var Home = function Home(data) {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Home-WallBotz"), __jsx("meta", {
    name: "description",
    content: "Site sobre rob\xF3tica",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "autor",
    contet: "Luiz Gustavo, Rafael Henrique e Yan Silveira",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx(_components_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Jumbotron"], {
    fluid: true,
    className: "projetos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, ".projetos{\n                        padding-top: 80px;\n                        padding-bottom: 80px;\n                        background-color: #DAA520;\n                        color: #fff;\n                        margin-bottom: 0rem !important;\n\n                }\n                .circulo{\n                    width: 140px;\n                    height: 140px;\n                    background-color: blue;\n                    font-size: 52px;\n                    padding-top: 24px;\n\n                }\n\n                .ang, .penha, .welisom{\n                    width= 100px;\n                    height= 100px;\n                    font-size= 40px; \n                    padding-top= 20px; \n                }\n                .centralizar{\n                    margin: 0 auto !important;\n                    float: none !important;\n                }\n                .featurette-divider {\n                    margin: 5rem 0; \n                  }\n\n                }"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, console.log(data), __jsx("h1", {
    className: "display-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, data.response.titulo), __jsx("p", {
    className: "lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, data.response.subtitulo)), __jsx("hr", {
    "class": "featurette-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: "ang ",
    src: "ang_joca.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  })), __jsx("h2", {
    className: "mt-4 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }, data.response.servUmTitulo), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, data.response.servUmDescricao)), __jsx("div", {
    className: "col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: "welisom",
    src: "welisom_joca.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 33
    }
  })), __jsx("h2", {
    className: "mt-4 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, data.response.servDoisTitulo), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 29
    }
  }, data.response.servDoisDescricao)), __jsx("div", {
    className: "col-lg-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 25
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: "penha",
    src: "penha_joca.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  })), __jsx("h2", {
    className: "mt-4 mt-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, data.response.servTresTitulo), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }, data.response.servTresDescricao))), __jsx("hr", {
    "class": "featurette-divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: "row featurette",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-md-7",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "featurette-heading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, data.response.servQuatroTitulo, " ", __jsx("span", {
    "class": "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 97
    }
  }, data.response.servQuatroSubtitulo)), __jsx("p", {
    className: "lead",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 29
    }
  }, data.response.servQuatroDescricao)), __jsx("div", {
    className: "col-md-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",
    src: "equipeRobo.jpg",
    width: "500",
    height: "500",
    focusable: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }))))), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }), __jsx("footer", {
    id: "myFooter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "col-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, "Inicio"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "http://localhost:3000",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 37
    }
  }, "Inicio")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "http://localhost:3000/projetos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 37
    }
  }, "Projetos")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "http://localhost:3000/eventos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 37
    }
  }, "Eventos")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "http://localhost:3000/equipe",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 37
    }
  }, "Membros")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "http://localhost:3000/quemsomos",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 37
    }
  }, "Quem somos")))), __jsx("div", {
    "class": "col-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, "Sobre n\xF3s"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, "Informa\xE7\xF5es da Rob\xF3tica")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/idalino.ribeiro/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }, "Feira de Ci\xEAncias")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/wallbotz/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, "Blog")))), __jsx("div", {
    "class": "col-sm-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 29
    }
  }, "Suporte"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/wallbotz/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 37
    }
  }, "FAQ")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/wallbotz/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 37
    }
  }, "Telefones")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/wallbotz/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 37
    }
  }, "Chat")))), __jsx("div", {
    "class": "col-sm-3 info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, "Informa\xE7\xF5es"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 29
    }
  }, " Entre em contato em caso de bug. ")))), __jsx("div", {
    "class": "second-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 17
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 20
    }
  }, __jsx("div", {
    "class": "social-icons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://youtube.com/channel/UCSwOcTeWCmZArzMXBPfYc1A",
    "class": "YouTube",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 29
    }
  }, __jsx("i", {
    "class": "fa fa-facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 108
    }
  })), __jsx("a", {
    href: "https://www.instagram.com/wallbotz/",
    "class": "instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 29
    }
  }, __jsx("i", {
    "class": "fa fa-instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 93
    }
  })))))), __jsx("script", {
    src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  })));
};

_c = Home;
Home.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:8010/home');

        case 2:
          response = _context.sent;
          console.log(response.data);
          return _context.abrupt("return", {
            response: response.data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJ0aXR1bG8iLCJzdWJ0aXR1bG8iLCJzZXJ2VW1UaXR1bG8iLCJzZXJ2VW1EZXNjcmljYW8iLCJzZXJ2RG9pc1RpdHVsbyIsInNlcnZEb2lzRGVzY3JpY2FvIiwic2VydlRyZXNUaXR1bG8iLCJzZXJ2VHJlc0Rlc2NyaWNhbyIsInNlcnZRdWF0cm9UaXR1bG8iLCJzZXJ2UXVhdHJvU3VidGl0dWxvIiwic2VydlF1YXRyb0Rlc2NyaWNhbyIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLElBQUQ7QUFBQSxTQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsd0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBbUIsVUFBTSxFQUFDLDhDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FGSixFQU9JLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBU0ksTUFBQyxvREFBRDtBQUFXLFNBQUssTUFBaEI7QUFBaUIsYUFBUyxFQUFDLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUF2QjtBQVFXRCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNTY0OTFlZDJjMTZhOTc3YjNhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IHsgSnVtYm90cm9uLCBDb250YWluZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoZGF0YSkgPT4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ib21lLVdhbGxCb3R6PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdTaXRlIHNvYnJlIHJvYsOzdGljYScvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0nYXV0b3InIGNvbnRldD0nTHVpeiBHdXN0YXZvLCBSYWZhZWwgSGVucmlxdWUgZSBZYW4gU2lsdmVpcmEnLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8TWVudSAvPlxyXG5cclxuICAgICAgICAgICAgPEp1bWJvdHJvbiBmbHVpZCBjbGFzc05hbWU9XCJwcm9qZXRvc1wiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlPntgLnByb2pldG9ze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUE1MjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNpcmN1bG97XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5hbmcsIC5wZW5oYSwgLndlbGlzb217XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD0gMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplPSA0MHB4OyBcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcD0gMjBweDsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2VudHJhbGl6YXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZlYXR1cmV0dGUtZGl2aWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cmVtIDA7IFxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfWB9PC9zdHlsZT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9J3RleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2coZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2Rpc3BsYXktNCc+e2RhdGEucmVzcG9uc2UudGl0dWxvfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGVhZCc+e2RhdGEucmVzcG9uc2Uuc3VidGl0dWxvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiZmVhdHVyZXR0ZS1kaXZpZGVyXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFuZyBcIiBzcmM9XCJhbmdfam9jYS5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J210LTQgbXQtNCc+e2RhdGEucmVzcG9uc2Uuc2VydlVtVGl0dWxvfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5yZXNwb25zZS5zZXJ2VW1EZXNjcmljYW99PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIndlbGlzb21cIiBzcmM9XCJ3ZWxpc29tX2pvY2EucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J210LTQgbXQtNCc+e2RhdGEucmVzcG9uc2Uuc2VydkRvaXNUaXR1bG99PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntkYXRhLnJlc3BvbnNlLnNlcnZEb2lzRGVzY3JpY2FvfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwZW5oYVwiIHNyYz1cInBlbmhhX2pvY2EucG5nXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtdC00IG10LTQnPntkYXRhLnJlc3BvbnNlLnNlcnZUcmVzVGl0dWxvfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGF0YS5yZXNwb25zZS5zZXJ2VHJlc0Rlc2NyaWNhb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzPVwiZmVhdHVyZXR0ZS1kaXZpZGVyXCIvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwicm93IGZlYXR1cmV0dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZlYXR1cmV0dGUtaGVhZGluZ1wiPntkYXRhLnJlc3BvbnNlLnNlcnZRdWF0cm9UaXR1bG99IDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZFwiPntkYXRhLnJlc3BvbnNlLnNlcnZRdWF0cm9TdWJ0aXR1bG99PC9zcGFuPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+e2RhdGEucmVzcG9uc2Uuc2VydlF1YXRyb0Rlc2NyaWNhb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImJkLXBsYWNlaG9sZGVyLWltZyBiZC1wbGFjZWhvbGRlci1pbWctbGcgZmVhdHVyZXR0ZS1pbWFnZSBpbWctZmx1aWQgbXgtYXV0b1wiIHNyYz1cImVxdWlwZVJvYm8uanBnXCIgd2lkdGg9XCI1MDBcIiBoZWlnaHQ9XCI1MDBcIiBmb2N1c2FibGU9XCJmYWxzZVwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0p1bWJvdHJvbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGZvb3RlciBpZD1cIm15Rm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5JbmljaW88L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSdodHRwOi8vbG9jYWxob3N0OjMwMDAnPkluaWNpbzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPSdodHRwOi8vbG9jYWxob3N0OjMwMDAvcHJvamV0b3MnPlByb2pldG9zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ldmVudG9zJz5FdmVudG9zPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9lcXVpcGUnPk1lbWJyb3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj0naHR0cDovL2xvY2FsaG9zdDozMDAwL3F1ZW1zb21vcyc+UXVlbSBzb21vczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlNvYnJlIG7Ds3M8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+SW5mb3JtYcOnw7VlcyBkYSBSb2LDs3RpY2E8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vaWRhbGluby5yaWJlaXJvL1wiPkZlaXJhIGRlIENpw6puY2lhczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS93YWxsYm90ei9cIj5CbG9nPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U3Vwb3J0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3dhbGxib3R6L1wiPkZBUTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS93YWxsYm90ei9cIj5UZWxlZm9uZXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vd2FsbGJvdHovXCI+Q2hhdDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMyBpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+SW5mb3JtYcOnw7VlczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gRW50cmUgZW0gY29udGF0byBlbSBjYXNvIGRlIGJ1Zy4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZC1iYXJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3lvdXR1YmUuY29tL2NoYW5uZWwvVUNTd09jVGVXQ21aQXJ6TVhCUGZZYzFBXCIgY2xhc3M9XCJZb3VUdWJlXCI+PGkgY2xhc3M9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS93YWxsYm90ei9cIiBjbGFzcz1cImluc3RhZ3JhbVwiPjxpIGNsYXNzPVwiZmEgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICBIb21lLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDEwL2hvbWUnKTtcclxuXHJcbiAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICByZXR1cm4ge3Jlc3BvbnNlOiByZXNwb25zZS5kYXRhfVxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==