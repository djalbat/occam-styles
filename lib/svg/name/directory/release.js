"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReleaseDirectoryNameSVG;
    }
});
var _directory = /*#__PURE__*/ _interop_require_default(require("../../../svg/name/directory"));
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
var ReleaseDirectoryNameSVG = /*#__PURE__*/ function(DirectoryNameSVG) {
    _inherits(ReleaseDirectoryNameSVG, DirectoryNameSVG);
    var _super = _create_super(ReleaseDirectoryNameSVG);
    function ReleaseDirectoryNameSVG() {
        _class_call_check(this, ReleaseDirectoryNameSVG);
        return _super.apply(this, arguments);
    }
    _create_class(ReleaseDirectoryNameSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "16",
                    height: "2",
                    x: "0",
                    y: "16"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "3",
                    x: "14",
                    y: "13"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "3",
                    x: "12",
                    y: "6"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "3",
                    x: "18",
                    y: "6"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "0",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "10",
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
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 15.966048,1.0000005 a 3.1111103,3.4999995 0 0 0 -3.077159,3.0003337 h 1.357826 a 1.7777774,1.9999996 0 0 1 1.719333,-1.5001669 1.7777774,1.9999996 0 0 1 1.718872,1.5001669 h 1.360124 A 3.1111103,3.4999995 0 0 0 15.966048,1.0000005 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7.9999995",
                    height: "1.9999995",
                    x: "12.000001",
                    y: "3.9999998"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7.9999995",
                    height: "1.9999995",
                    x: "12.000001",
                    y: "9.000001"
                }));
            }
        }
    ]);
    return ReleaseDirectoryNameSVG;
}(_directory.default);
_define_property(ReleaseDirectoryNameSVG, "defaultProperties", {
    className: "release"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdmcvbmFtZS9kaXJlY3RvcnkvcmVsZWFzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERpcmVjdG9yeU5hbWVTVkcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9uYW1lL2RpcmVjdG9yeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNlRGlyZWN0b3J5TmFtZVNWRyBleHRlbmRzIERpcmVjdG9yeU5hbWVTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMlwiIHg9XCIwXCIgeT1cIjE2XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiM1wiIHg9XCIxNFwiIHk9XCIxM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMTJcIiB5PVwiNlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMThcIiB5PVwiNlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjdcIiB4PVwiMFwiIHk9XCI5XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjJcIiB4PVwiMFwiIHk9XCI3XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI3XCIgaGVpZ2h0PVwiM1wiIHg9XCIwXCIgeT1cIjRcIiAvPlxuICAgICAgICA8cGF0aCBkPVwibSA3LDQgMywzIEggNyBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTUuOTY2MDQ4LDEuMDAwMDAwNSBhIDMuMTExMTEwMywzLjQ5OTk5OTUgMCAwIDAgLTMuMDc3MTU5LDMuMDAwMzMzNyBoIDEuMzU3ODI2IGEgMS43Nzc3Nzc0LDEuOTk5OTk5NiAwIDAgMSAxLjcxOTMzMywtMS41MDAxNjY5IDEuNzc3Nzc3NCwxLjk5OTk5OTYgMCAwIDEgMS43MTg4NzIsMS41MDAxNjY5IGggMS4zNjAxMjQgQSAzLjExMTExMDMsMy40OTk5OTk1IDAgMCAwIDE1Ljk2NjA0OCwxLjAwMDAwMDUgWlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiNy45OTk5OTk1XCIgaGVpZ2h0PVwiMS45OTk5OTk1XCIgeD1cIjEyLjAwMDAwMVwiIHk9XCIzLjk5OTk5OThcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjcuOTk5OTk5NVwiIGhlaWdodD1cIjEuOTk5OTk5NVwiIHg9XCIxMi4wMDAwMDFcIiB5PVwiOS4wMDAwMDFcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVsZWFzZVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVsZWFzZURpcmVjdG9yeU5hbWVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicGF0aCIsImQiLCJEaXJlY3RvcnlOYW1lU1ZHIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2dFQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsd0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0Q7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNOO29CQUFLQyxPQUFNO29CQUFZQyxRQUFPO29CQUFZQyxHQUFFO29CQUFZQyxHQUFFO2tDQUMzRCxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQVlDLFFBQU87b0JBQVlDLEdBQUU7b0JBQVlDLEdBQUU7O1lBSWpFOzs7V0FuQm1CUDtFQUFnQ1Usa0JBQWdCO0FBcUJuRSxpQkFyQm1CVix5QkFxQlpXLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=