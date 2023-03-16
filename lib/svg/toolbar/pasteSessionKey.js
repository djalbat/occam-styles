"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PasteSessionKeyToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interopRequireDefault(require("../../svg/toolbar"));
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
var PasteSessionKeyToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(PasteSessionKeyToolbarSVG, ToolbarSVG);
    var _super = _createSuper(PasteSessionKeyToolbarSVG);
    function PasteSessionKeyToolbarSVG() {
        _classCallCheck(this, PasteSessionKeyToolbarSVG);
        return _super.apply(this, arguments);
    }
    _createClass(PasteSessionKeyToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "12",
                    x: "6",
                    y: "8"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "3",
                    height: "2",
                    x: "4",
                    y: "17"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "3",
                    height: "2",
                    x: "4",
                    y: "14"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "1",
                    x: "5",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 7.0000895 2.9998169 A 3 3 0 0 0 3.9997559 6.0001506 A 3 3 0 0 0 7.0000895 8.9999674 A 3 3 0 0 0 9.9999064 6.0001506 A 3 3 0 0 0 7.0000895 2.9998169 z M 7.0000895 5.0002116 A 0.99999994 0.99999994 0 0 1 8.0000285 6.0001506 A 0.99999994 0.99999994 0 0 1 7.0000895 7.0000895 A 0.99999994 0.99999994 0 0 1 6.0001506 6.0001506 A 0.99999994 0.99999994 0 0 1 7.0000895 5.0002116 z "
                }));
            }
        }
    ]);
    return PasteSessionKeyToolbarSVG;
}(_toolbar.default);
_defineProperty(PasteSessionKeyToolbarSVG, "defaultProperties", {
    className: "paste-session-key"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9wYXN0ZVNlc3Npb25LZXkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXN0ZVNlc3Npb25LZXlUb29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjEyXCIgeD1cIjZcIiB5PVwiOFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiM1wiIGhlaWdodD1cIjJcIiB4PVwiNFwiIHk9XCIxN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiM1wiIGhlaWdodD1cIjJcIiB4PVwiNFwiIHk9XCIxNFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIiB4PVwiNVwiIHk9XCIxNlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDEyLDExLjI4NTcxNCBoIDggViA4Ljg1NzE0MjkgbCA0LDMuNjQyODU4MSAtNCwzLjY0Mjg1NiB2IC0yLjQyODU3MSBoIC04IHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA3LjAwMDA4OTUgMi45OTk4MTY5IEEgMyAzIDAgMCAwIDMuOTk5NzU1OSA2LjAwMDE1MDYgQSAzIDMgMCAwIDAgNy4wMDAwODk1IDguOTk5OTY3NCBBIDMgMyAwIDAgMCA5Ljk5OTkwNjQgNi4wMDAxNTA2IEEgMyAzIDAgMCAwIDcuMDAwMDg5NSAyLjk5OTgxNjkgeiBNIDcuMDAwMDg5NSA1LjAwMDIxMTYgQSAwLjk5OTk5OTk0IDAuOTk5OTk5OTQgMCAwIDEgOC4wMDAwMjg1IDYuMDAwMTUwNiBBIDAuOTk5OTk5OTQgMC45OTk5OTk5NCAwIDAgMSA3LjAwMDA4OTUgNy4wMDAwODk1IEEgMC45OTk5OTk5NCAwLjk5OTk5OTk0IDAgMCAxIDYuMDAwMTUwNiA2LjAwMDE1MDYgQSAwLjk5OTk5OTk0IDAuOTk5OTk5OTQgMCAwIDEgNy4wMDAwODk1IDUuMDAwMjExNiB6IFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXN0ZS1zZXNzaW9uLWtleVwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlBhc3RlU2Vzc2lvbktleVRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsMENBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNDO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTs7WUFJZDs7O1dBZG1CVDtFQUFrQ1UsZ0JBQVU7QUFnQi9ELGdCQWhCbUJWLDJCQWdCWlcscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==