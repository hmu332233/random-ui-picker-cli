"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ink_1 = require("ink");
var getNextIndex = function (length, current, addend) {
    var next = current + addend;
    if (next < 0) {
        return length - Math.abs(next);
    }
    if (next >= length) {
        return 0 + addend - 1;
    }
    return current + addend;
};
function RandomPicker(_a) {
    var items = _a.items;
    var _b = react_1.useState(Math.floor(Math.random() * items.length - 1)), currentIndex = _b[0], setCurrentIndex = _b[1];
    react_1.useEffect(function () {
        var time = 0;
        var timer = setInterval(function () {
            setCurrentIndex(function (v) { return (v + 1) % items.length; });
            if (time++ === 15) {
                clearInterval(timer);
            }
        }, 150);
        return function () { return clearInterval(timer); };
    }, []);
    var firstIndex = getNextIndex(items.length, currentIndex, -2);
    var prevIndex = getNextIndex(items.length, currentIndex, -1);
    var nextIndex = getNextIndex(items.length, currentIndex, 1);
    var lastIndex = getNextIndex(items.length, currentIndex, 2);
    return (react_1.default.createElement(ink_1.Box, { margin: 1, padding: 2 },
        react_1.default.createElement(ink_1.Box, { paddingTop: 2, marginRight: 2 },
            react_1.default.createElement(ink_1.Text, null, '>>>')),
        react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
            react_1.default.createElement(ink_1.Text, { color: "gray" }, items[firstIndex]),
            react_1.default.createElement(ink_1.Text, null, items[prevIndex]),
            react_1.default.createElement(ink_1.Text, { color: "white" }, items[currentIndex]),
            react_1.default.createElement(ink_1.Text, null, items[nextIndex]),
            react_1.default.createElement(ink_1.Text, { color: "gray" }, items[lastIndex]))));
}
exports.default = RandomPicker;
