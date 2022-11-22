"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OpenRubbishBinToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interopRequireDefault(require("../../../svg/toolbar"));
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
var OpenRubbishBinToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(OpenRubbishBinToolbarSVG, ToolbarSVG);
    var _super = _createSuper(OpenRubbishBinToolbarSVG);
    function OpenRubbishBinToolbarSVG() {
        _classCallCheck(this, OpenRubbishBinToolbarSVG);
        return _super.apply(this, arguments);
    }
    _createClass(OpenRubbishBinToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    stroke: "none"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "M 9,9 13,13"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "13",
                    height: "2",
                    x: "6",
                    y: "23"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "13",
                    x: "4",
                    y: "10"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "13",
                    x: "19",
                    y: "10"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 4,23 6,25 v -2 z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 19,23 v 2 l 2,-2 z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "21",
                    height: "2",
                    x: "2",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "9",
                    height: "2",
                    x: "8",
                    y: "0"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 6,0 7,4 c 0,0 2,0 2,0 L 8,0 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 19,0 18,4 H 16 L 17,0 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "8",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "15.999999",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "12",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "17",
                    height: "2",
                    x: "4",
                    y: "8"
                }));
            }
        }
    ]);
    return OpenRubbishBinToolbarSVG;
}(_toolbar.default);
_defineProperty(OpenRubbishBinToolbarSVG, "defaultProperties", {
    className: "open-rubbish-bin"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9ydWJiaXNoQmluL29wZW4uanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcGVuUnViYmlzaEJpblRvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZyBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDksOSAxMywxM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiMjNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxM1wiIHg9XCI0XCIgeT1cIjEwXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTNcIiB4PVwiMTlcIiB5PVwiMTBcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA0LDIzIDYsMjUgdiAtMiB6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTksMjMgdiAyIGwgMiwtMiB6XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCI0XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiMlwiIHg9XCI4XCIgeT1cIjBcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA2LDAgNyw0IGMgMCwwIDIsMCAyLDAgTCA4LDAgWlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDE5LDAgMTgsNCBIIDE2IEwgMTcsMCBaXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMTFcIiB4PVwiOFwiIHk9XCIxMVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMVwiIGhlaWdodD1cIjExXCIgeD1cIjE1Ljk5OTk5OVwiIHk9XCIxMVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMVwiIGhlaWdodD1cIjExXCIgeD1cIjEyXCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjJcIiB4PVwiNFwiIHk9XCI4XCIgLz5cbiAgICAgIDwvZz5cblxuICAgICk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm9wZW4tcnViYmlzaC1iaW5cIlxuICB9O1xufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJPcGVuUnViYmlzaEJpblRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInN0cm9rZSIsInBhdGgiLCJkIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzREQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsb0JBQUNDO29CQUFFQyxRQUFPO2lDQUNSLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFLQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNyQyxvQkFBQ047b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ047b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFLQyxHQUFFO29CQUFZQyxHQUFFO2tDQUM1QyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUtDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3JDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTs7WUFJMUM7OztXQXRCbUJWO0VBQWlDVyxnQkFBVTtBQXdCOUQsZ0JBeEJtQlgsMEJBd0JaWSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9