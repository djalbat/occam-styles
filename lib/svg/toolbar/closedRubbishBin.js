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
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ClosedRubbishBinToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ClosedRubbishBinToolbarSVG, ToolbarSVG);
    function ClosedRubbishBinToolbarSVG() {
        _class_call_check(this, ClosedRubbishBinToolbarSVG);
        return _call_super(this, ClosedRubbishBinToolbarSVG, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9jbG9zZWRSdWJiaXNoQmluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHBhdGggZD1cIk0gOSw5IDEzLDEzXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjJcIiB4PVwiNlwiIHk9XCIyM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjEzXCIgeD1cIjRcIiB5PVwiMTBcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxM1wiIHg9XCIxOVwiIHk9XCIxMFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDQsMjMgNiwyNSB2IC0yIHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwibSAxOSwyMyB2IDIgbCAyLC0yIHpcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjIxXCIgaGVpZ2h0PVwiMlwiIHg9XCIyXCIgeT1cIjhcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjlcIiBoZWlnaHQ9XCIyXCIgeD1cIjhcIiB5PVwiNFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDYsNCA3LDggYyAwLDAgMiwwIDIsMCBMIDgsNCBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0gMTksNCAxOCw4IEggMTYgTCAxNyw0IFpcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxMVwiIHg9XCI4XCIgeT1cIjExXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxXCIgaGVpZ2h0PVwiMTFcIiB4PVwiMTZcIiB5PVwiMTFcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxMVwiIHg9XCIxMlwiIHk9XCIxMVwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjbG9zZWQtcnViYmlzaC1iaW5cIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkNsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJwYXRoIiwiZCIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLDJDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNDO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUtDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDckMsb0JBQUNOO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUtDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNOO29CQUFLQyxHQUFFO2tDQUNSLG9CQUFDRDtvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUtDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDckMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFLQyxHQUFFO29CQUFLQyxHQUFFOztZQUkzQzs7O1dBckJtQlQ7RUFBbUNVLGdCQUFVO0FBdUJoRSxpQkF2Qm1CViw0QkF1QlpXLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=