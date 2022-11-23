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
        ";\n  padding-left: 3rem;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var FileNameSVG = /*#__PURE__*/ function(SVG) {
    _inherits(FileNameSVG, SVG);
    var _super = _createSuper(FileNameSVG);
    function FileNameSVG() {
        _classCallCheck(this, FileNameSVG);
        return _super.apply(this, arguments);
    }
    _createClass(FileNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "14",
                    height: "2",
                    x: "2",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "14",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "12",
                    x: "2",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "2",
                    x: "2",
                    y: "2"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 9,2 7,7 h -7 z"
                }));
            }
        }
    ]);
    return FileNameSVG;
}(_svg.default);
_defineProperty(FileNameSVG, "defaultProperties", {
    viewBox: "0 0 24 18",
    className: "file-name"
});
var _default = (0, _easyWithStyle.default)(FileNameSVG)(_templateObject(), _common.commonColour, _styles.nameSVGHeight);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdmcvZmlsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTVkcgZnJvbSBcIi4uL3N2Z1wiO1xuXG5pbXBvcnQgeyBjb21tb25Db2xvdXIgfSBmcm9tIFwiLi4vc2NoZW1lL2NvbW1vblwiO1xuaW1wb3J0IHsgbmFtZVNWR0hlaWdodCB9IGZyb20gXCIuLi9zdHlsZXNcIjtcblxuY2xhc3MgRmlsZU5hbWVTVkcgZXh0ZW5kcyBTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxNFwiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCIxNlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjdcIiB4PVwiMTRcIiB5PVwiOVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjEyXCIgeD1cIjJcIiB5PVwiNFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiN1wiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCIyXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gOSwyIDcsNyBoIC03IHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB2aWV3Qm94OiBcIjAgMCAyNCAxOFwiLFxuICAgIGNsYXNzTmFtZTogXCJmaWxlLW5hbWVcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoRmlsZU5hbWVTVkcpYFxuXG4gIGZpbGw6ICR7Y29tbW9uQ29sb3VyfTtcbiAgaGVpZ2h0OiAke25hbWVTVkdIZWlnaHR9O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJGaWxlTmFtZVNWRyIsImNoaWxkRWxlbWVudHMiLCJnIiwic3Ryb2tlIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJwYXRoIiwiZCIsIlNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidmlld0JveCIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImNvbW1vbkNvbG91ciIsIm5hbWVTVkdIZWlnaHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThCQTs7O2VBQUE7OztrRUE1QnNCO3dEQUVOO3NCQUVhO3NCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFBLEFBQU1BLDRCQXFCSCxBQXJCSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7aUJBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLHFCQUVFLG9CQUFDQztvQkFBRUMsUUFBTztpQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFLQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDQztvQkFBS0MsR0FBRTs7WUFJZDs7O1dBYklWO0VBQW9CVyxZQUFHO0FBZTNCLGdCQWZJWCxhQWVHWSxxQkFBb0I7SUFDekJDLFNBQVM7SUFDVEMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQ2YsZ0NBRWZnQixvQkFBWSxFQUNWQyxxQkFBYSJ9