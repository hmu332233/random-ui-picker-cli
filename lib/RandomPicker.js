"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
function RandomPicker() {
    return (react_1.default.createElement(ink_1.Box, { margin: 1, padding: 2, flexDirection: "column" },
        react_1.default.createElement(ink_1.Text, null, "\uD14C\uC2A4\uD2B8")));
}
;
exports.default = RandomPicker;
