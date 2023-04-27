"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReleaseNameSVG;
    }
});
var _name = /*#__PURE__*/ _interop_require_default(require("../../svg/name"));
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
var ReleaseNameSVG = /*#__PURE__*/ function(NameSVG) {
    _inherits(ReleaseNameSVG, NameSVG);
    var _super = _create_super(ReleaseNameSVG);
    function ReleaseNameSVG() {
        _class_call_check(this, ReleaseNameSVG);
        return _super.apply(this, arguments);
    }
    _create_class(ReleaseNameSVG, [
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
                    y: "13",
                    style: "stroke-width:0.654654"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "7",
                    x: "0",
                    y: "9"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "10",
                    height: "2",
                    x: "0",
                    y: "7",
                    style: "stroke-width:0.790569"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "3",
                    x: "0",
                    y: "4"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 7,4 3,3 H 7 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 14.966048,2.0000005 a 3.1111103,3.4999995 0 0 0 -3.077159,3.0003337 h 1.357826 a 1.7777774,1.9999996 0 0 1 1.719333,-1.5001669 1.7777774,1.9999996 0 0 1 1.718872,1.5001669 h 1.360124 A 3.1111103,3.4999995 0 0 0 14.966048,2.0000005 Z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7.999999",
                    height: "6.9999995",
                    x: "11.000001",
                    y: "5"
                }));
            }
        }
    ]);
    return ReleaseNameSVG;
}(_name.default);
_define_property(ReleaseNameSVG, "defaultProperties", {
    className: "release"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbmFtZS9yZWxlYXNlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTmFtZVNWRyBmcm9tIFwiLi4vLi4vc3ZnL25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVsZWFzZU5hbWVTVkcgZXh0ZW5kcyBOYW1lU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjJcIiB4PVwiMFwiIHk9XCIxNlwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjNcIiB4PVwiMTRcIiB5PVwiMTNcIiBzdHlsZT1cInN0cm9rZS13aWR0aDowLjY1NDY1NFwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMlwiIGhlaWdodD1cIjdcIiB4PVwiMFwiIHk9XCI5XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjJcIiB4PVwiMFwiIHk9XCI3XCIgc3R5bGU9XCJzdHJva2Utd2lkdGg6MC43OTA1NjlcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIzXCIgeD1cIjBcIiB5PVwiNFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDcsNCAzLDMgSCA3IFpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwibSAxNC45NjYwNDgsMi4wMDAwMDA1IGEgMy4xMTExMTAzLDMuNDk5OTk5NSAwIDAgMCAtMy4wNzcxNTksMy4wMDAzMzM3IGggMS4zNTc4MjYgYSAxLjc3Nzc3NzQsMS45OTk5OTk2IDAgMCAxIDEuNzE5MzMzLC0xLjUwMDE2NjkgMS43Nzc3Nzc0LDEuOTk5OTk5NiAwIDAgMSAxLjcxODg3MiwxLjUwMDE2NjkgaCAxLjM2MDEyNCBBIDMuMTExMTEwMywzLjQ5OTk5OTUgMCAwIDAgMTQuOTY2MDQ4LDIuMDAwMDAwNSBaXCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCI3Ljk5OTk5OVwiIGhlaWdodD1cIjYuOTk5OTk5NVwiIHg9XCIxMS4wMDAwMDFcIiB5PVwiNVwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJyZWxlYXNlXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVsZWFzZU5hbWVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5Iiwic3R5bGUiLCJwYXRoIiwiZCIsIk5hbWVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7b0JBQUtDLE9BQU07a0NBQy9DLG9CQUFDTDtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDbkMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFJQyxHQUFFO29CQUFJQyxHQUFFO29CQUFJQyxPQUFNO2tDQUM5QyxvQkFBQ0w7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ25DLG9CQUFDRTtvQkFBS0MsR0FBRTtrQ0FDUixvQkFBQ0Q7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNQO29CQUFLQyxPQUFNO29CQUFXQyxRQUFPO29CQUFZQyxHQUFFO29CQUFZQyxHQUFFOztZQUloRTs7O1dBaEJtQlA7RUFBdUJXLGFBQU87QUFrQmpELGlCQWxCbUJYLGdCQWtCWlkscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==