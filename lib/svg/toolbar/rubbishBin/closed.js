"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ClosedRubbishBinToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../../svg/toolbar"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var ClosedRubbishBinToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ClosedRubbishBinToolbarSVG, ToolbarSVG);
    var _super = _create_super(ClosedRubbishBinToolbarSVG);
    function ClosedRubbishBinToolbarSVG() {
        _class_call_check(this, ClosedRubbishBinToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(ClosedRubbishBinToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("path", {
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
                    y: "8"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "9",
                    height: "2",
                    x: "8",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 6,4 7,8 c 0,0 2,0 2,0 L 8,4 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "M 19,4 18,8 H 16 L 17,4 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "8",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "16",
                    y: "11"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1",
                    height: "11",
                    x: "12",
                    y: "11"
                }));
            }
        }
    ]);
    return ClosedRubbishBinToolbarSVG;
}(_toolbar.default);
_define_property(ClosedRubbishBinToolbarSVG, "defaultProperties", {
    className: "closed-rubbish-bin"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9ydWJiaXNoQmluL2Nsb3NlZC5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDksOSAxMywxM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTNcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiMjNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxM1wiIHg9XCI0XCIgeT1cIjEwXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTNcIiB4PVwiMTlcIiB5PVwiMTBcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA0LDIzIDYsMjUgdiAtMiB6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTksMjMgdiAyIGwgMiwtMiB6XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjJcIiB4PVwiMlwiIHk9XCI4XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiMlwiIHg9XCI4XCIgeT1cIjRcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTSA2LDQgNyw4IGMgMCwwIDIsMCAyLDAgTCA4LDQgWlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDE5LDQgMTgsOCBIIDE2IEwgMTcsNCBaXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMTFcIiB4PVwiOFwiIHk9XCIxMVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMVwiIGhlaWdodD1cIjExXCIgeD1cIjE2XCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMTFcIiB4PVwiMTJcIiB5PVwiMTFcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiY2xvc2VkLXJ1YmJpc2gtYmluXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInBhdGgiLCJkIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJUb29sYmFyU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzhEQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsMkNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFLQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNyQyxvQkFBQ047b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ047b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFLQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNyQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUtDLEdBQUU7b0JBQUtDLEdBQUU7O1lBSTNDOzs7V0FyQm1CVDtFQUFtQ1UsZ0JBQVU7QUF1QmhFLGlCQXZCbUJWLDRCQXVCWlcscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==