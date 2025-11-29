"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MenuDiv;
    }
});
var _easy = require("easy");
var _div = /*#__PURE__*/ _interop_require_default(require("../div"));
var _index = require("../../../index");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var MenuDiv = /*#__PURE__*/ function(Element) {
    _inherits(MenuDiv, Element);
    function MenuDiv() {
        _class_call_check(this, MenuDiv);
        return _call_super(this, MenuDiv, arguments);
    }
    _create_class(MenuDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var ToolbarSVGs = [
                    _index.ZoomInMenuSVG,
                    _index.ZoomOutMenuSVG,
                    _index.ResetZoomMenuSVG,
                    _index.EmbeddedModeMenuSVG,
                    _index.FullScreenModeMenuSVG,
                    _index.DraftModeMenuSVG,
                    _index.PresentationModeMenuSVG,
                    _index.PreviewPaneOnlyMenuSVG,
                    _index.PrettyPrinterOnlyMenuSVG,
                    _index.PreviewPanePrettyPrinterMenuSVG,
                    _index.PrettyPrinterPreviewPaneMenuSVG
                ], childElements = ToolbarSVGs.map(function(ToolbarSVG) {
                    return /*#__PURE__*/ React.createElement(_div.default, null, /*#__PURE__*/ React.createElement(ToolbarSVG, null));
                });
                return childElements;
            }
        }
    ]);
    return MenuDiv;
}(_wrap_native_super(_easy.Element));
_define_property(MenuDiv, "tagName", "div");
_define_property(MenuDiv, "defaultProperties", {
    className: "menu"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgWm9vbUluTWVudVNWRyxcbiAgICAgICAgIFpvb21PdXRNZW51U1ZHLFxuICAgICAgICAgUmVzZXRab29tTWVudVNWRyxcbiAgICAgICAgIERyYWZ0TW9kZU1lbnVTVkcsXG4gICAgICAgICBFbWJlZGRlZE1vZGVNZW51U1ZHLFxuICAgICAgICAgRnVsbFNjcmVlbk1vZGVNZW51U1ZHLFxuICAgICAgICAgUHJldmlld1BhbmVPbmx5TWVudVNWRyxcbiAgICAgICAgIFByZXNlbnRhdGlvbk1vZGVNZW51U1ZHLFxuICAgICAgICAgUHJldHR5UHJpbnRlck9ubHlNZW51U1ZHLFxuICAgICAgICAgUHJldmlld1BhbmVQcmV0dHlQcmludGVyTWVudVNWRyxcbiAgICAgICAgIFByZXR0eVByaW50ZXJQcmV2aWV3UGFuZU1lbnVTVkcgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IFRvb2xiYXJTVkdzID0gW1xuICAgICAgICAgICAgWm9vbUluTWVudVNWRyxcbiAgICAgICAgICAgIFpvb21PdXRNZW51U1ZHLFxuICAgICAgICAgICAgUmVzZXRab29tTWVudVNWRyxcbiAgICAgICAgICAgIEVtYmVkZGVkTW9kZU1lbnVTVkcsXG4gICAgICAgICAgICBGdWxsU2NyZWVuTW9kZU1lbnVTVkcsXG4gICAgICAgICAgICBEcmFmdE1vZGVNZW51U1ZHLFxuICAgICAgICAgICAgUHJlc2VudGF0aW9uTW9kZU1lbnVTVkcsXG4gICAgICAgICAgICBQcmV2aWV3UGFuZU9ubHlNZW51U1ZHLFxuICAgICAgICAgICAgUHJldHR5UHJpbnRlck9ubHlNZW51U1ZHLFxuICAgICAgICAgICAgUHJldmlld1BhbmVQcmV0dHlQcmludGVyTWVudVNWRyxcbiAgICAgICAgICAgIFByZXR0eVByaW50ZXJQcmV2aWV3UGFuZU1lbnVTVkdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBUb29sYmFyU1ZHcy5tYXAoKFRvb2xiYXJTVkcpID0+XG5cbiAgICAgICAgICAgIDxEaXY+XG4gICAgICAgICAgICAgIDxUb29sYmFyU1ZHIC8+XG4gICAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lbnVcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk1lbnVEaXYiLCJjaGlsZEVsZW1lbnRzIiwiVG9vbGJhclNWR3MiLCJab29tSW5NZW51U1ZHIiwiWm9vbU91dE1lbnVTVkciLCJSZXNldFpvb21NZW51U1ZHIiwiRW1iZWRkZWRNb2RlTWVudVNWRyIsIkZ1bGxTY3JlZW5Nb2RlTWVudVNWRyIsIkRyYWZ0TW9kZU1lbnVTVkciLCJQcmVzZW50YXRpb25Nb2RlTWVudVNWRyIsIlByZXZpZXdQYW5lT25seU1lbnVTVkciLCJQcmV0dHlQcmludGVyT25seU1lbnVTVkciLCJQcmV2aWV3UGFuZVByZXR0eVByaW50ZXJNZW51U1ZHIiwiUHJldHR5UHJpbnRlclByZXZpZXdQYW5lTWVudVNWRyIsIm1hcCIsIlRvb2xiYXJTVkciLCJEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7b0JBakJHOzBEQUVSO3FCQVlnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2pDLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO1FBQU4sT0FBQSxrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjO29CQUNaQyxvQkFBYTtvQkFDYkMscUJBQWM7b0JBQ2RDLHVCQUFnQjtvQkFDaEJDLDBCQUFtQjtvQkFDbkJDLDRCQUFxQjtvQkFDckJDLHVCQUFnQjtvQkFDaEJDLDhCQUF1QjtvQkFDdkJDLDZCQUFzQjtvQkFDdEJDLCtCQUF3QjtvQkFDeEJDLHNDQUErQjtvQkFDL0JDLHNDQUErQjtpQkFDaEMsRUFDRFosZ0JBQWdCQyxZQUFZWSxHQUFHLENBQUMsU0FBQ0M7eUNBRS9CLG9CQUFDQyxZQUFHLHNCQUNGLG9CQUFDRDs7Z0JBS1gsT0FBT2Q7WUFDVDs7O1dBeEJtQkQ7cUJBQWdCaUIsYUFBTztBQTBCMUMsaUJBMUJtQmpCLFNBMEJaa0IsV0FBVTtBQUVqQixpQkE1Qm1CbEIsU0E0QlptQixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9