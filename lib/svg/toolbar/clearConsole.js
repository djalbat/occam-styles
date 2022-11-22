"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _toolbar = /*#__PURE__*/ _interopRequireDefault(require("../../svg/toolbar"));
var _common = require("../../scheme/common");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  fill: ",
        ";\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ClearConsoleToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ClearConsoleToolbarSVG, ToolbarSVG);
    var _super = _createSuper(ClearConsoleToolbarSVG);
    function ClearConsoleToolbarSVG() {
        _classCallCheck(this, ClearConsoleToolbarSVG);
        return _super.apply(this, arguments);
    }
    _createClass(ClearConsoleToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "m 19.217262,5.7822765 a 9.4998945,9.4998942 0 0 0 -13.4349871,4.636e-4 9.4998945,9.4998942 0 0 0 5e-7,13.4345199 9.4998945,9.4998942 0 0 0 13.4349866,4.64e-4 9.4998945,9.4998942 0 0 0 0,-13.4354475 z m -0.977529,2.7696608 a 6.9665893,6.9665892 0 0 1 -0.813681,8.8745777 6.9665893,6.9665892 0 0 1 -8.8727273,0.81183 z M 16.446674,6.7616556 6.7616542,16.446675 A 6.9665893,6.9665892 0 0 1 7.5734829,7.5739474 6.9665893,6.9665892 0 0 1 16.446674,6.7616556 Z"
                }));
            }
        }
    ]);
    return ClearConsoleToolbarSVG;
}(_toolbar.default);
_defineProperty(ClearConsoleToolbarSVG, "defaultProperties", {
    className: "clear-console"
});
var _default = (0, _easyWithStyle.default)(ClearConsoleToolbarSVG)(_templateObject(), _common.clearConsoleColour);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9jbGVhckNvbnNvbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5pbXBvcnQgeyBjbGVhckNvbnNvbGVDb2xvdXIgfSBmcm9tIFwiLi4vLi4vc2NoZW1lL2NvbW1vblwiO1xuXG5jbGFzcyBDbGVhckNvbnNvbGVUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cGF0aCBkPVwibSAxOS4yMTcyNjIsNS43ODIyNzY1IGEgOS40OTk4OTQ1LDkuNDk5ODk0MiAwIDAgMCAtMTMuNDM0OTg3MSw0LjYzNmUtNCA5LjQ5OTg5NDUsOS40OTk4OTQyIDAgMCAwIDVlLTcsMTMuNDM0NTE5OSA5LjQ5OTg5NDUsOS40OTk4OTQyIDAgMCAwIDEzLjQzNDk4NjYsNC42NGUtNCA5LjQ5OTg5NDUsOS40OTk4OTQyIDAgMCAwIDAsLTEzLjQzNTQ0NzUgeiBtIC0wLjk3NzUyOSwyLjc2OTY2MDggYSA2Ljk2NjU4OTMsNi45NjY1ODkyIDAgMCAxIC0wLjgxMzY4MSw4Ljg3NDU3NzcgNi45NjY1ODkzLDYuOTY2NTg5MiAwIDAgMSAtOC44NzI3MjczLDAuODExODMgeiBNIDE2LjQ0NjY3NCw2Ljc2MTY1NTYgNi43NjE2NTQyLDE2LjQ0NjY3NSBBIDYuOTY2NTg5Myw2Ljk2NjU4OTIgMCAwIDEgNy41NzM0ODI5LDcuNTczOTQ3NCA2Ljk2NjU4OTMsNi45NjY1ODkyIDAgMCAxIDE2LjQ0NjY3NCw2Ljc2MTY1NTYgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjbGVhci1jb25zb2xlXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKENsZWFyQ29uc29sZVRvb2xiYXJTVkcpYFxuXG4gIGZpbGw6ICR7Y2xlYXJDb25zb2xlQ29sb3VyfTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIkNsZWFyQ29uc29sZVRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInN0cm9rZSIsInBhdGgiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiY2xlYXJDb25zb2xlQ29sb3VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFBOzs7a0VBdEJzQjs0REFFQztzQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLHVDQWdCSCxBQWhCSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDQztvQkFBRUMsUUFBTztpQ0FDUixvQkFBQ0M7b0JBQUtDLEdBQUU7O1lBSWQ7OztXQVRJTDtFQUErQk0sZ0JBQVU7QUFXN0MsZ0JBWElOLHdCQVdHTyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUNULDJDQUVmVSwwQkFBa0IifQ==