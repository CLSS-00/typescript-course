"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var HOST = 'https://jsonplaceholder.typicode.com';
axios_1["default"].get(HOST + "/todos/1").then(console.log)["catch"](console.log);
