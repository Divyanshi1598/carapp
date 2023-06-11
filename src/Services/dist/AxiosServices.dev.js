"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import axios from "axios";
var axios = require("axios")["default"];

var AxiosServices =
/*#__PURE__*/
function () {
  function AxiosServices() {
    _classCallCheck(this, AxiosServices);
  }

  _createClass(AxiosServices, [{
    key: "post",
    value: function post(url, data) {
      var IsRequired = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var Header = arguments.length > 3 ? arguments[3] : undefined;
      return axios.post(url, data, IsRequired && Header);
    }
  }]);

  return AxiosServices;
}();

exports["default"] = AxiosServices;