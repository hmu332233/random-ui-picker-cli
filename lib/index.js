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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RandomPicker_1 = __importDefault(require("./RandomPicker"));
var ink_1 = require("ink");
var commander_1 = require("commander");
var fs = __importStar(require("fs"));
var program = new commander_1.Command();
program
    .option('-i --items <items...>', 'items')
    .option('-if --items_file <path>', 'items\'s file path')
    .action(function (_a) {
    var items = _a.items, items_file = _a.items_file;
    if (items_file) {
        items = fs.readFileSync(items_file, 'utf8').split('\n');
    }
    ink_1.render(react_1.default.createElement(RandomPicker_1.default, { items: items }));
});
program.parse();
