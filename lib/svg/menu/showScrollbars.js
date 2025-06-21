"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ShowScrollbarsMenuSVG;
    }
});
var _menu = /*#__PURE__*/ _interop_require_default(require("../../svg/menu"));
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
var ShowScrollbarsMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(ShowScrollbarsMenuSVG, MenuSVG);
    function ShowScrollbarsMenuSVG() {
        _class_call_check(this, ShowScrollbarsMenuSVG);
        return _call_super(this, ShowScrollbarsMenuSVG, arguments);
    }
    _create_class(ShowScrollbarsMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "1.5",
                    height: "17.5",
                    x: "3",
                    y: "4.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "19",
                    height: "1.5",
                    x: "3",
                    y: "3"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "1.5",
                    height: "7",
                    x: "20.5",
                    y: "9",
                    rx: "0.75",
                    ry: "0.75"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "7",
                    height: "1.5",
                    x: "10",
                    y: "20.5",
                    rx: "0.75",
                    ry: "0.75"
                }));
            }
        }
    ]);
    return ShowScrollbarsMenuSVG;
}(_menu.default);
_define_property(ShowScrollbarsMenuSVG, "defaultProperties", {
    className: "show-scrollbars"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS9zaG93U2Nyb2xsYmFycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lbnVTVkcgZnJvbSBcIi4uLy4uL3N2Zy9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dTY3JvbGxiYXJzTWVudVNWRyBleHRlbmRzIE1lbnVTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEuNVwiIGhlaWdodD1cIjE3LjVcIiB4PVwiM1wiIHk9XCI0LjVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjE5XCIgaGVpZ2h0PVwiMS41XCIgeD1cIjNcIiB5PVwiM1wiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMS41XCIgaGVpZ2h0PVwiN1wiIHg9XCIyMC41XCIgeT1cIjlcIiByeD1cIjAuNzVcIiByeT1cIjAuNzVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjdcIiBoZWlnaHQ9XCIxLjVcIiB4PVwiMTBcIiB5PVwiMjAuNVwiIHJ4PVwiMC43NVwiIHJ5PVwiMC43NVwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzaG93LXNjcm9sbGJhcnNcIixcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJTaG93U2Nyb2xsYmFyc01lbnVTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwicngiLCJyeSIsIk1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQU1DLFFBQU87b0JBQU9DLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3hDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBTUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDdEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFNQyxRQUFPO29CQUFJQyxHQUFFO29CQUFPQyxHQUFFO29CQUFJQyxJQUFHO29CQUFPQyxJQUFHO2tDQUN6RCxvQkFBQ047b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQU1DLEdBQUU7b0JBQUtDLEdBQUU7b0JBQU9DLElBQUc7b0JBQU9DLElBQUc7O1lBSWhFOzs7V0FabUJUO0VBQThCVSxhQUFPO0FBY3hELGlCQWRtQlYsdUJBY1pXLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=