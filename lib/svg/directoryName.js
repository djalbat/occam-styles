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
var _svg = /*#__PURE__*/ _interopRequireDefault(require("../svg"));
var _common = require("../scheme/common");
var _styles = require("../styles");
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
        ";\n  height: ",
        ";\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DirectoryNameSVG = /*#__PURE__*/ function(SVG) {
    _inherits(DirectoryNameSVG, SVG);
    var _super = _createSuper(DirectoryNameSVG);
    function DirectoryNameSVG() {
        _classCallCheck(this, DirectoryNameSVG);
        return _super.apply(this, arguments);
    }
    _createClass(DirectoryNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "16",
                    height: "2",
                    x: "0",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "14",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "0",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "16",
                    height: "2",
                    x: "0",
                    y: "7"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "3",
                    x: "0",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 7,4 3,3 H 7 Z"
                }));
            }
        }
    ]);
    return DirectoryNameSVG;
}(_svg.default);
_defineProperty(DirectoryNameSVG, "defaultProperties", {
    viewBox: "0 0 24 18",
    className: "directory-name"
});
var _default = (0, _easyWithStyle.default)(DirectoryNameSVG)(_templateObject(), _common.commonColour, _styles.nameSVGHeight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZGlyZWN0b3J5TmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNWRyBmcm9tIFwiLi4vc3ZnXCI7XG5cbmltcG9ydCB7IGNvbW1vbkNvbG91ciB9IGZyb20gXCIuLi9zY2hlbWUvY29tbW9uXCI7XG5pbXBvcnQgeyBuYW1lU1ZHSGVpZ2h0IH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuXG5jbGFzcyBEaXJlY3RvcnlOYW1lU1ZHIGV4dGVuZHMgU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZyBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiMTZcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI3XCIgeD1cIjE0XCIgeT1cIjlcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI3XCIgeD1cIjBcIiB5PVwiOVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyXCIgeD1cIjBcIiB5PVwiN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiN1wiIGhlaWdodD1cIjNcIiB4PVwiMFwiIHk9XCI0XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gNyw0IDMsMyBIIDcgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHZpZXdCb3g6IFwiMCAwIDI0IDE4XCIsXG4gICAgY2xhc3NOYW1lOiBcImRpcmVjdG9yeS1uYW1lXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKERpcmVjdG9yeU5hbWVTVkcpYFxuXG4gIGZpbGw6ICR7Y29tbW9uQ29sb3VyfTtcbiAgaGVpZ2h0OiAke25hbWVTVkdIZWlnaHR9O1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiRGlyZWN0b3J5TmFtZVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwic3Ryb2tlIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwYXRoIiwiZCIsIlNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNvbW1vbkNvbG91ciIsIm5hbWVTVkdIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7OztrRUE3QnNCO3dEQUVOO3NCQUVhO3NCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLGlDQXNCSCxBQXRCSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDQztvQkFBRUMsUUFBTztpQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNDO29CQUFLQyxHQUFFOztZQUlkOzs7V0FkSVY7RUFBeUJXLFlBQUc7QUFnQmhDLGdCQWhCSVgsa0JBZ0JHWSxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2YscUNBRWZnQixvQkFBWSxFQUNWQyxxQkFBYSJ9