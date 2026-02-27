"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get borderColour () {
        return borderColour;
    },
    get default () {
        return _default;
    },
    get menuBackgroundColour () {
        return menuBackgroundColour;
    },
    get menuBorderColour () {
        return menuBorderColour;
    },
    get menuButtonBackgroundColour () {
        return menuButtonBackgroundColour;
    },
    get menuButtonBorderColour () {
        return menuButtonBorderColour;
    },
    get menuButtonHoverBackgroundColour () {
        return menuButtonHoverBackgroundColour;
    },
    get menuButtonHoverLightBackgroundColour () {
        return menuButtonHoverLightBackgroundColour;
    },
    get menuButtonLightBackgroundColour () {
        return menuButtonLightBackgroundColour;
    },
    get menuLightBackgroundColour () {
        return menuLightBackgroundColour;
    },
    get tabsActiveBackgroundColour () {
        return tabsActiveBackgroundColour;
    },
    get tabsArrowButtonColour () {
        return tabsArrowButtonColour;
    },
    get tabsBackgroundColour () {
        return tabsBackgroundColour;
    },
    get tabsBorderColour () {
        return tabsBorderColour;
    },
    get tabsReadOnlyColour () {
        return tabsReadOnlyColour;
    }
});
const _common = require("../scheme/common");
const _colours = require("../colours");
const borderColour = _common.commonBorderColour; ///
const tabsBorderColour = _common.commonBorderColour; ///
const menuBorderColour = _colours.tuatara;
const tabsReadOnlyColour = _colours.tuatara;
const tabsBackgroundColour = _colours.dawn;
const menuBackgroundColour = _colours.stormDust;
const tabsArrowButtonColour = _colours.woodsmoke;
const menuButtonBorderColour = _colours.tuatara;
const menuLightBackgroundColour = _colours.springWood;
const menuButtonBackgroundColour = _colours.stormDust;
const tabsActiveBackgroundColour = _colours.stardust;
const menuButtonHoverBackgroundColour = _colours.stardust;
const menuButtonLightBackgroundColour = _colours.springWood;
const menuButtonHoverLightBackgroundColour = _colours.bonjour;
const _default = {
    borderColour,
    tabsBorderColour,
    menuBorderColour,
    tabsReadOnlyColour,
    tabsBackgroundColour,
    menuBackgroundColour,
    tabsArrowButtonColour,
    menuButtonBorderColour,
    menuLightBackgroundColour,
    menuButtonBackgroundColour,
    tabsActiveBackgroundColour,
    menuButtonHoverBackgroundColour,
    menuButtonLightBackgroundColour,
    menuButtonHoverLightBackgroundColour
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWUvZWRpdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21tb25Cb3JkZXJDb2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBkYXduLCB0dWF0YXJhLCBib25qb3VyLCBzdGFyZHVzdCwgc3Rvcm1EdXN0LCB3b29kc21va2UsIHNwcmluZ1dvb2QgfSBmcm9tIFwiLi4vY29sb3Vyc1wiO1xuXG5leHBvcnQgY29uc3QgYm9yZGVyQ29sb3VyID0gY29tbW9uQm9yZGVyQ29sb3VyOyAvLy9cblxuZXhwb3J0IGNvbnN0IHRhYnNCb3JkZXJDb2xvdXIgPSBjb21tb25Cb3JkZXJDb2xvdXI7IC8vL1xuXG5leHBvcnQgY29uc3QgbWVudUJvcmRlckNvbG91ciA9IHR1YXRhcmE7XG5cbmV4cG9ydCBjb25zdCB0YWJzUmVhZE9ubHlDb2xvdXIgPSB0dWF0YXJhO1xuXG5leHBvcnQgY29uc3QgdGFic0JhY2tncm91bmRDb2xvdXIgPSBkYXduO1xuXG5leHBvcnQgY29uc3QgbWVudUJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCB0YWJzQXJyb3dCdXR0b25Db2xvdXIgPSB3b29kc21va2U7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uQm9yZGVyQ29sb3VyID0gdHVhdGFyYTtcblxuZXhwb3J0IGNvbnN0IG1lbnVMaWdodEJhY2tncm91bmRDb2xvdXIgPSBzcHJpbmdXb29kO1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIgPSBzdG9ybUR1c3Q7XG5cbmV4cG9ydCBjb25zdCB0YWJzQWN0aXZlQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91ciA9IHN0YXJkdXN0O1xuXG5leHBvcnQgY29uc3QgbWVudUJ1dHRvbkxpZ2h0QmFja2dyb3VuZENvbG91ciA9IHNwcmluZ1dvb2Q7XG5cbmV4cG9ydCBjb25zdCBtZW51QnV0dG9uSG92ZXJMaWdodEJhY2tncm91bmRDb2xvdXIgPSBib25qb3VyO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGJvcmRlckNvbG91cixcbiAgdGFic0JvcmRlckNvbG91cixcbiAgbWVudUJvcmRlckNvbG91cixcbiAgdGFic1JlYWRPbmx5Q29sb3VyLFxuICB0YWJzQmFja2dyb3VuZENvbG91cixcbiAgbWVudUJhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBcnJvd0J1dHRvbkNvbG91cixcbiAgbWVudUJ1dHRvbkJvcmRlckNvbG91cixcbiAgbWVudUxpZ2h0QmFja2dyb3VuZENvbG91cixcbiAgbWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIsXG4gIHRhYnNBY3RpdmVCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uTGlnaHRCYWNrZ3JvdW5kQ29sb3VyLFxuICBtZW51QnV0dG9uSG92ZXJMaWdodEJhY2tncm91bmRDb2xvdXJcbn07XG4iXSwibmFtZXMiOlsiYm9yZGVyQ29sb3VyIiwibWVudUJhY2tncm91bmRDb2xvdXIiLCJtZW51Qm9yZGVyQ29sb3VyIiwibWVudUJ1dHRvbkJhY2tncm91bmRDb2xvdXIiLCJtZW51QnV0dG9uQm9yZGVyQ29sb3VyIiwibWVudUJ1dHRvbkhvdmVyQmFja2dyb3VuZENvbG91ciIsIm1lbnVCdXR0b25Ib3ZlckxpZ2h0QmFja2dyb3VuZENvbG91ciIsIm1lbnVCdXR0b25MaWdodEJhY2tncm91bmRDb2xvdXIiLCJtZW51TGlnaHRCYWNrZ3JvdW5kQ29sb3VyIiwidGFic0FjdGl2ZUJhY2tncm91bmRDb2xvdXIiLCJ0YWJzQXJyb3dCdXR0b25Db2xvdXIiLCJ0YWJzQmFja2dyb3VuZENvbG91ciIsInRhYnNCb3JkZXJDb2xvdXIiLCJ0YWJzUmVhZE9ubHlDb2xvdXIiLCJjb21tb25Cb3JkZXJDb2xvdXIiLCJ0dWF0YXJhIiwiZGF3biIsInN0b3JtRHVzdCIsIndvb2RzbW9rZSIsInNwcmluZ1dvb2QiLCJzdGFyZHVzdCIsImJvbmpvdXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQU1hQTtlQUFBQTs7UUE0QmI7ZUFBQTs7UUFsQmFDO2VBQUFBOztRQU5BQztlQUFBQTs7UUFjQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQVFBQztlQUFBQTs7UUFJQUM7ZUFBQUE7O1FBRkFDO2VBQUFBOztRQVJBQztlQUFBQTs7UUFJQUM7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQUpBQztlQUFBQTs7UUFOQUM7ZUFBQUE7O1FBSUFDO2VBQUFBOzs7d0JBVnNCO3lCQUVnRDtBQUU1RSxNQUFNYixlQUFlYywwQkFBa0IsRUFBRSxHQUFHO0FBRTVDLE1BQU1GLG1CQUFtQkUsMEJBQWtCLEVBQUUsR0FBRztBQUVoRCxNQUFNWixtQkFBbUJhLGdCQUFPO0FBRWhDLE1BQU1GLHFCQUFxQkUsZ0JBQU87QUFFbEMsTUFBTUosdUJBQXVCSyxhQUFJO0FBRWpDLE1BQU1mLHVCQUF1QmdCLGtCQUFTO0FBRXRDLE1BQU1QLHdCQUF3QlEsa0JBQVM7QUFFdkMsTUFBTWQseUJBQXlCVyxnQkFBTztBQUV0QyxNQUFNUCw0QkFBNEJXLG1CQUFVO0FBRTVDLE1BQU1oQiw2QkFBNkJjLGtCQUFTO0FBRTVDLE1BQU1SLDZCQUE2QlcsaUJBQVE7QUFFM0MsTUFBTWYsa0NBQWtDZSxpQkFBUTtBQUVoRCxNQUFNYixrQ0FBa0NZLG1CQUFVO0FBRWxELE1BQU1iLHVDQUF1Q2UsZ0JBQU87TUFFM0QsV0FBZTtJQUNickI7SUFDQVk7SUFDQVY7SUFDQVc7SUFDQUY7SUFDQVY7SUFDQVM7SUFDQU47SUFDQUk7SUFDQUw7SUFDQU07SUFDQUo7SUFDQUU7SUFDQUQ7QUFDRiJ9