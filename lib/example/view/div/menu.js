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
                    _index.ReverseMenuSVG,
                    _index.EmbeddedModeMenuSVG,
                    _index.PresentationModeMenuSVG,
                    _index.TogglePreviewPaneOnlyMenuSVG,
                    _index.TogglePreviewPaneSplitMenuSVG,
                    _index.TogglePrettyPrinterOnlyMenuSVG,
                    _index.TogglePrettyPrinterSplitMenuSVG,
                    _index.ShowPreviewPaneScrollbarsMenuSVG,
                    _index.HidePreviewPaneScrollbarsMenuSVG
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgWm9vbUluTWVudVNWRyxcbiAgICAgICAgIFpvb21PdXRNZW51U1ZHLFxuICAgICAgICAgUmV2ZXJzZU1lbnVTVkcsXG4gICAgICAgICBFbWJlZGRlZE1vZGVNZW51U1ZHLFxuICAgICAgICAgUHJlc2VudGF0aW9uTW9kZU1lbnVTVkcsXG4gICAgICAgICBUb2dnbGVQcmV2aWV3UGFuZU9ubHlNZW51U1ZHLFxuICAgICAgICAgVG9nZ2xlUHJldmlld1BhbmVTcGxpdE1lbnVTVkcsXG4gICAgICAgICBUb2dnbGVQcmV0dHlQcmludGVyT25seU1lbnVTVkcsXG4gICAgICAgICBUb2dnbGVQcmV0dHlQcmludGVyU3BsaXRNZW51U1ZHLFxuICAgICAgICAgU2hvd1ByZXZpZXdQYW5lU2Nyb2xsYmFyc01lbnVTVkcsXG4gICAgICAgICBIaWRlUHJldmlld1BhbmVTY3JvbGxiYXJzTWVudVNWRyB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IFRvb2xiYXJTVkdzID0gW1xuICAgICAgICAgICAgWm9vbUluTWVudVNWRyxcbiAgICAgICAgICAgIFpvb21PdXRNZW51U1ZHLFxuICAgICAgICAgICAgUmV2ZXJzZU1lbnVTVkcsXG4gICAgICAgICAgICBFbWJlZGRlZE1vZGVNZW51U1ZHLFxuICAgICAgICAgICAgUHJlc2VudGF0aW9uTW9kZU1lbnVTVkcsXG4gICAgICAgICAgICBUb2dnbGVQcmV2aWV3UGFuZU9ubHlNZW51U1ZHLFxuICAgICAgICAgICAgVG9nZ2xlUHJldmlld1BhbmVTcGxpdE1lbnVTVkcsXG4gICAgICAgICAgICBUb2dnbGVQcmV0dHlQcmludGVyT25seU1lbnVTVkcsXG4gICAgICAgICAgICBUb2dnbGVQcmV0dHlQcmludGVyU3BsaXRNZW51U1ZHLFxuICAgICAgICAgICAgU2hvd1ByZXZpZXdQYW5lU2Nyb2xsYmFyc01lbnVTVkcsXG4gICAgICAgICAgICBIaWRlUHJldmlld1BhbmVTY3JvbGxiYXJzTWVudVNWR1xuICAgICAgICAgIF0sXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IFRvb2xiYXJTVkdzLm1hcCgoVG9vbGJhclNWRykgPT5cblxuICAgICAgICAgICAgPERpdj5cbiAgICAgICAgICAgICAgPFRvb2xiYXJTVkcgLz5cbiAgICAgICAgICAgIDwvRGl2PlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVudVwiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTWVudURpdiIsImNoaWxkRWxlbWVudHMiLCJUb29sYmFyU1ZHcyIsIlpvb21Jbk1lbnVTVkciLCJab29tT3V0TWVudVNWRyIsIlJldmVyc2VNZW51U1ZHIiwiRW1iZWRkZWRNb2RlTWVudVNWRyIsIlByZXNlbnRhdGlvbk1vZGVNZW51U1ZHIiwiVG9nZ2xlUHJldmlld1BhbmVPbmx5TWVudVNWRyIsIlRvZ2dsZVByZXZpZXdQYW5lU3BsaXRNZW51U1ZHIiwiVG9nZ2xlUHJldHR5UHJpbnRlck9ubHlNZW51U1ZHIiwiVG9nZ2xlUHJldHR5UHJpbnRlclNwbGl0TWVudVNWRyIsIlNob3dQcmV2aWV3UGFuZVNjcm9sbGJhcnNNZW51U1ZHIiwiSGlkZVByZXZpZXdQYW5lU2Nyb2xsYmFyc01lbnVTVkciLCJtYXAiLCJUb29sYmFyU1ZHIiwiRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFrQnFCQTs7O29CQWhCRzswREFFUjtxQkFZaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLHdCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYztvQkFDWkMsb0JBQWE7b0JBQ2JDLHFCQUFjO29CQUNkQyxxQkFBYztvQkFDZEMsMEJBQW1CO29CQUNuQkMsOEJBQXVCO29CQUN2QkMsbUNBQTRCO29CQUM1QkMsb0NBQTZCO29CQUM3QkMscUNBQThCO29CQUM5QkMsc0NBQStCO29CQUMvQkMsdUNBQWdDO29CQUNoQ0MsdUNBQWdDO2lCQUNqQyxFQUNEWixnQkFBZ0JDLFlBQVlZLEdBQUcsQ0FBQyxTQUFDQzt5Q0FFL0Isb0JBQUNDLFlBQUcsc0JBQ0Ysb0JBQUNEOztnQkFLWCxPQUFPZDtZQUNUOzs7V0F4Qm1CRDtxQkFBZ0JpQixhQUFPO0FBMEIxQyxpQkExQm1CakIsU0EwQlprQixXQUFVO0FBRWpCLGlCQTVCbUJsQixTQTRCWm1CLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiIn0=