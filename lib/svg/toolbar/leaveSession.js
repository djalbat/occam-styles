"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LeaveSessionToolbarSVG;
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
var LeaveSessionToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(LeaveSessionToolbarSVG, ToolbarSVG);
    var _super = _createSuper(LeaveSessionToolbarSVG);
    function LeaveSessionToolbarSVG() {
        _classCallCheck(this, LeaveSessionToolbarSVG);
        return _super.apply(this, arguments);
    }
    _createClass(LeaveSessionToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("rect", {
                    width: "3",
                    height: "2",
                    x: "3",
                    y: "17"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "4",
                    x: "13",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "6",
                    x: "3",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "12",
                    height: "2",
                    x: "3",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "4",
                    height: "2",
                    x: "3",
                    y: "7"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "12",
                    height: "2",
                    x: "6",
                    y: "23"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "6",
                    x: "16",
                    y: "17"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "6",
                    x: "6",
                    y: "17"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "12",
                    height: "2",
                    x: "6",
                    y: "15"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "4",
                    height: "2",
                    x: "6",
                    y: "13"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "6",
                    height: "2",
                    x: "14",
                    y: "5"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 7,7 9,9 H 7 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 10,13 2,2 h -2 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 20,3 v 6 l 3,-3 z"
                }));
            }
        }
    ]);
    return LeaveSessionToolbarSVG;
}(_toolbar.default);
_defineProperty(LeaveSessionToolbarSVG, "defaultProperties", {
    className: "leave-session"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9sZWF2ZVNlc3Npb24uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGcgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyXCIgeD1cIjNcIiB5PVwiMTdcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI0XCIgeD1cIjEzXCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiNlwiIHg9XCIzXCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjJcIiB4PVwiM1wiIHk9XCI5XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiMlwiIHg9XCIzXCIgeT1cIjdcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMlwiIHg9XCI2XCIgeT1cIjIzXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiNlwiIHg9XCIxNlwiIHk9XCIxN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjZcIiB4PVwiNlwiIHk9XCIxN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiMTVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiMTNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjZcIiBoZWlnaHQ9XCIyXCIgeD1cIjE0XCIgeT1cIjVcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA3LDcgOSw5IEggNyBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTAsMTMgMiwyIGggLTIgelwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDIwLDMgdiA2IGwgMywtMyB6XCIvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGVhdmUtc2Vzc2lvblwiXG4gIH07XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkxlYXZlU2Vzc2lvblRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInN0cm9rZSIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsdUNBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsb0JBQUNDO29CQUFFQyxRQUFPO2lDQUNSLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTs7WUFJZDs7O1dBdEJtQlY7RUFBK0JXLGdCQUFVO0FBd0I1RCxnQkF4Qm1CWCx3QkF3QlpZLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=