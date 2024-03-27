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
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
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
var LeaveSessionToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(LeaveSessionToolbarSVG, ToolbarSVG);
    var _super = _create_super(LeaveSessionToolbarSVG);
    function LeaveSessionToolbarSVG() {
        _class_call_check(this, LeaveSessionToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(LeaveSessionToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
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
_define_property(LeaveSessionToolbarSVG, "defaultProperties", {
    className: "leave-session"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9sZWF2ZVNlc3Npb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUb29sYmFyU1ZHIGZyb20gXCIuLi8uLi9zdmcvdG9vbGJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIGV4dGVuZHMgVG9vbGJhclNWRyB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGc+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiM1wiIGhlaWdodD1cIjJcIiB4PVwiM1wiIHk9XCIxN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjRcIiB4PVwiMTNcIiB5PVwiMTFcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI2XCIgeD1cIjNcIiB5PVwiMTFcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMlwiIHg9XCIzXCIgeT1cIjlcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjRcIiBoZWlnaHQ9XCIyXCIgeD1cIjNcIiB5PVwiN1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyXCIgeD1cIjZcIiB5PVwiMjNcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCI2XCIgeD1cIjE2XCIgeT1cIjE3XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiNlwiIHg9XCI2XCIgeT1cIjE3XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjJcIiB4PVwiNlwiIHk9XCIxNVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiNFwiIGhlaWdodD1cIjJcIiB4PVwiNlwiIHk9XCIxM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiNlwiIGhlaWdodD1cIjJcIiB4PVwiMTRcIiB5PVwiNVwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDcsNyA5LDkgSCA3IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwibSAxMCwxMyAyLDIgaCAtMiB6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gMjAsMyB2IDYgbCAzLC0zIHpcIi8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZWF2ZS1zZXNzaW9uXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBhdGgiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHVDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNuQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDQztvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0Q7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFOztZQUlkOzs7V0F0Qm1CVDtFQUErQlUsZ0JBQVU7QUF3QjVELGlCQXhCbUJWLHdCQXdCWlcscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==