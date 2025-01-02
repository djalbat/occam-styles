"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SynchroniseDocumentToolbarSVG;
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
var SynchroniseDocumentToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(SynchroniseDocumentToolbarSVG, ToolbarSVG);
    function SynchroniseDocumentToolbarSVG() {
        _class_call_check(this, SynchroniseDocumentToolbarSVG);
        return _call_super(this, SynchroniseDocumentToolbarSVG, arguments);
    }
    _create_class(SynchroniseDocumentToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", {
                    transform: "translate(0.5, 2)"
                }, /*#__PURE__*/ React.createElement("path", {
                    d: "M 5.2916666,10.583333 H 19.84375 V 7.9374999 H 10.583333 V 5.2916666 Z"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 5.2916666,14.552083 c 0,0 14.5520834,0 14.5520834,0 0,0 -5.291667,5.291667 -5.291667,5.291667 0,0 0,-2.645834 0,-2.645834 H 5.2916666 Z"
                }));
            }
        }
    ]);
    return SynchroniseDocumentToolbarSVG;
}(_toolbar.default);
_define_property(SynchroniseDocumentToolbarSVG, "defaultProperties", {
    className: "synchronise-document"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9zeW5jaHJvbmlzZURvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9vbGJhclNWRyBmcm9tIFwiLi4vLi4vc3ZnL3Rvb2xiYXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3luY2hyb25pc2VEb2N1bWVudFRvb2xiYXJTVkcgZXh0ZW5kcyBUb29sYmFyU1ZHIHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC41LCAyKVwiPlxuICAgICAgICA8cGF0aCBkPVwiTSA1LjI5MTY2NjYsMTAuNTgzMzMzIEggMTkuODQzNzUgViA3LjkzNzQ5OTkgSCAxMC41ODMzMzMgViA1LjI5MTY2NjYgWlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDUuMjkxNjY2NiwxNC41NTIwODMgYyAwLDAgMTQuNTUyMDgzNCwwIDE0LjU1MjA4MzQsMCAwLDAgLTUuMjkxNjY3LDUuMjkxNjY3IC01LjI5MTY2Nyw1LjI5MTY2NyAwLDAgMCwtMi42NDU4MzQgMCwtMi42NDU4MzQgSCA1LjI5MTY2NjYgWlwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzeW5jaHJvbmlzZS1kb2N1bWVudFwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiU3luY2hyb25pc2VEb2N1bWVudFRvb2xiYXJTVkciLCJjaGlsZEVsZW1lbnRzIiwiZyIsInRyYW5zZm9ybSIsInBhdGgiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLDhDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLHFCQUVFLG9CQUFDQztvQkFBRUMsV0FBVTtpQ0FDWCxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNEO29CQUFLQyxHQUFFOztZQUlkOzs7V0FWbUJMO0VBQXNDTSxnQkFBVTtBQVluRSxpQkFabUJOLCtCQVlaTyxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9