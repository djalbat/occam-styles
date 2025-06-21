"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  margin-bottom: 2rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ToolbarDiv = /*#__PURE__*/ function(Element) {
    _inherits(ToolbarDiv, Element);
    function ToolbarDiv() {
        _class_call_check(this, ToolbarDiv);
        return _call_super(this, ToolbarDiv, arguments);
    }
    _create_class(ToolbarDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var ToolbarSVGs = [
                    _index.OpenRubbishBinToolbarSVG,
                    _index.ClosedRubbishBinToolbarSVG,
                    _index.SynchroniseDocumentToolbarSVG,
                    _index.RenameSelectedProjectsPathToolbarSVG,
                    _index.ShowReleasesToolbarSVG,
                    _index.HideReleasesToolbarSVG,
                    _index.CreateProjectsDirectoryPathToolbarSVG,
                    _index.CreateProjectsFilePathToolbarSVG,
                    _index.ReloadProjectsAndReleasesToolbarSVG,
                    _index.JoinSessionToolbarSVG,
                    _index.CreateSessionToolbarSVG,
                    _index.LeaveSessionToolbarSVG,
                    _index.CopySessionKeyToolbarSVG,
                    _index.FindInActiveDocumentToolbarSVG,
                    _index.FindInProjectsAndReleasesToolbarSVG,
                    _index.ExportCustomGrammarsToolbarSVG,
                    _index.ClearConsoleToolbarSVG
                ], childElements = ToolbarSVGs.map(function(ToolbarSVG) {
                    return /*#__PURE__*/ React.createElement(_div.default, null, /*#__PURE__*/ React.createElement(ToolbarSVG, null));
                });
                return childElements;
            }
        }
    ]);
    return ToolbarDiv;
}(_wrap_native_super(_easy.Element));
_define_property(ToolbarDiv, "tagName", "div");
_define_property(ToolbarDiv, "defaultProperties", {
    className: "toolbar"
});
var _default = (0, _easywithstyle.default)(ToolbarDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3Rvb2xiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgSm9pblNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgU2hvd1JlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIEhpZGVSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHLFxuICAgICAgICAgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICBTeW5jaHJvbmlzZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgIEZpbmRJbkFjdGl2ZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIFJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNsYXNzIFRvb2xiYXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBUb29sYmFyU1ZHcyA9IFtcbiAgICAgICAgICAgIE9wZW5SdWJiaXNoQmluVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgU3luY2hyb25pc2VEb2N1bWVudFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBSZW5hbWVTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBTaG93UmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgSGlkZVJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFJlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgSm9pblNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHLFxuICAgICAgICAgICAgRmluZEluQWN0aXZlRG9jdW1lbnRUb29sYmFyU1ZHLFxuICAgICAgICAgICAgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBDbGVhckNvbnNvbGVUb29sYmFyU1ZHXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gVG9vbGJhclNWR3MubWFwKChUb29sYmFyU1ZHKSA9PlxuXG4gICAgICAgICAgICA8RGl2PlxuICAgICAgICAgICAgICA8VG9vbGJhclNWRyAvPlxuICAgICAgICAgICAgPC9EaXY+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ0b29sYmFyXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFRvb2xiYXJEaXYpYFxuXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJUb29sYmFyRGl2IiwiY2hpbGRFbGVtZW50cyIsIlRvb2xiYXJTVkdzIiwiT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJTeW5jaHJvbmlzZURvY3VtZW50VG9vbGJhclNWRyIsIlJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyIsIlNob3dSZWxlYXNlc1Rvb2xiYXJTVkciLCJIaWRlUmVsZWFzZXNUb29sYmFyU1ZHIiwiQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHIiwiUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkciLCJKb2luU2Vzc2lvblRvb2xiYXJTVkciLCJDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyIsIkxlYXZlU2Vzc2lvblRvb2xiYXJTVkciLCJDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkciLCJGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkciLCJGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyIsIkNsZWFyQ29uc29sZVRvb2xiYXJTVkciLCJtYXAiLCJUb29sYmFyU1ZHIiwiRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUVBOzs7ZUFBQTs7O29FQS9Ec0I7b0JBRUU7MERBRVI7cUJBa0JzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFBLEFBQU1BLDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjO29CQUNaQywrQkFBd0I7b0JBQ3hCQyxpQ0FBMEI7b0JBQzFCQyxvQ0FBNkI7b0JBQzdCQywyQ0FBb0M7b0JBQ3BDQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw0Q0FBcUM7b0JBQ3JDQyx1Q0FBZ0M7b0JBQ2hDQywwQ0FBbUM7b0JBQ25DQyw0QkFBcUI7b0JBQ3JCQyw4QkFBdUI7b0JBQ3ZCQyw2QkFBc0I7b0JBQ3RCQywrQkFBd0I7b0JBQ3hCQyxxQ0FBOEI7b0JBQzlCQywwQ0FBbUM7b0JBQ25DQyxxQ0FBOEI7b0JBQzlCQyw2QkFBc0I7aUJBQ3ZCLEVBQ0RsQixnQkFBZ0JDLFlBQVlrQixHQUFHLENBQUMsU0FBQ0M7eUNBRS9CLG9CQUFDQyxZQUFHLHNCQUNGLG9CQUFDRDs7Z0JBS1gsT0FBT3BCO1lBQ1Q7OztXQTlCSUQ7cUJBQW1CdUIsYUFBTztBQWdDOUIsaUJBaENJdkIsWUFnQ0d3QixXQUFVO0FBRWpCLGlCQWxDSXhCLFlBa0NHeUIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDM0IifQ==