"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RandomPicker_1 = __importDefault(require("./RandomPicker"));
var ink_1 = require("ink");
ink_1.render(react_1.default.createElement(RandomPicker_1.default, { items: [0, 1, 2, 3, 4] }));
