'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.get('/', function (req, res) {
    res.status(200).json({ message: "es6 modules" });
});
app.listen(process.env.PORT || 4000, function () {
    return console.log("Listening to port 4000");
});
//# sourceMappingURL=index.js.map