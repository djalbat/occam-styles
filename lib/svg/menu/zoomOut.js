"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ZoomOutMenuSVG;
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
var ZoomOutMenuSVG = /*#__PURE__*/ function(MenuSVG) {
    _inherits(ZoomOutMenuSVG, MenuSVG);
    function ZoomOutMenuSVG() {
        _class_call_check(this, ZoomOutMenuSVG);
        return _call_super(this, ZoomOutMenuSVG, arguments);
    }
    _create_class(ZoomOutMenuSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "15",
                    x: "4",
                    y: "5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "15",
                    x: "19",
                    y: "5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "8",
                    height: "2",
                    x: "8.5",
                    y: "11.5"
                }));
            }
        }
    ]);
    return ZoomOutMenuSVG;
}(_menu.default);
_define_property(ZoomOutMenuSVG, "defaultProperties", {
    className: "zoom-out"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvbWVudS96b29tT3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWVudVNWRyBmcm9tIFwiLi4vLi4vc3ZnL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWm9vbU91dE1lbnVTVkcgZXh0ZW5kcyBNZW51U1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTVcIiB4PVwiNFwiIHk9XCI1XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMTVcIiB4PVwiMTlcIiB5PVwiNVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiOFwiIGhlaWdodD1cIjJcIiB4PVwiOC41XCIgeT1cIjExLjVcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiem9vbS1vdXRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlpvb21PdXRNZW51U1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsIk1lbnVTVkciLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUwsSUFBQSxBQUFNQSwrQkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7UUFBTixPQUFBLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQyx5QkFDQyxvQkFBQ0M7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUtDLEdBQUU7b0JBQUlDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBS0MsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDckMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFNQyxHQUFFOztZQUkzQzs7O1dBWG1CUDtFQUF1QlEsYUFBTztBQWFqRCxpQkFibUJSLGdCQWFaUyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9