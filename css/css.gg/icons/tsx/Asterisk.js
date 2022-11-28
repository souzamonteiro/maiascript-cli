"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAsterisk = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-left:5px solid transparent;border-right:5px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:2px;height:12px;background:currentColor;transform:rotate(55deg)}&::after{transform:rotate(-55deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:12px;height:12px;border-left:5px solid transparent;border-right:5px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:2px;height:12px;background:currentColor;transform:rotate(55deg)}&::after{transform:rotate(-55deg)}\n"])));
exports.Asterisk = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAsterisk, tslib_1.__assign({}, props, { ref: ref, "icon-role": "asterisk" }))));
});
var templateObject_1;
//# sourceMappingURL=Asterisk.js.map