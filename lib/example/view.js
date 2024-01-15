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
var _index = require("../index");
var _div = /*#__PURE__*/ _interop_require_default(require("./view/div"));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 2rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        return _super.apply(this, arguments);
    }
    _create_class(View, [
        {
            key: "childElements",
            value: function childElements() {
                var ToolbarSVGs = [
                    _index.OpenRubbishBinToolbarSVG,
                    _index.SynchroniseToolbarSVG,
                    _index.RenameSelectedProjectsPathToolbarSVG,
                    _index.ShowReleasesToolbarSVG,
                    _index.HideReleasesToolbarSVG,
                    _index.CreateProjectsDirectoryPathToolbarSVG,
                    _index.CreateProjectsFilePathToolbarSVG,
                    _index.ReloadProjectsAndReleasesToolbarSVG,
                    _index.ClosedRubbishBinToolbarSVG,
                    _index.JoinSessionToolbarSVG,
                    _index.CreateSessionToolbarSVG,
                    _index.LeaveSessionToolbarSVG,
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
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBKb2luU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICBTeW5jaHJvbmlzZVRvb2xiYXJTVkcsXG4gICAgICAgICBTaG93UmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgSGlkZVJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIExlYXZlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICBDbGVhckNvbnNvbGVUb29sYmFyU1ZHLFxuICAgICAgICAgQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICBPcGVuUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICBDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyxcbiAgICAgICAgIEZpbmRJbkFjdGl2ZURvY3VtZW50VG9vbGJhclNWRyxcbiAgICAgICAgIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIFJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBEaXYgZnJvbSBcIi4vdmlldy9kaXZcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IFRvb2xiYXJTVkdzID0gW1xuICAgICAgICAgICAgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgU3luY2hyb25pc2VUb29sYmFyU1ZHLFxuICAgICAgICAgICAgUmVuYW1lU2VsZWN0ZWRQcm9qZWN0c1BhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgICAgU2hvd1JlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIEhpZGVSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBDcmVhdGVQcm9qZWN0c0RpcmVjdG9yeVBhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgICAgQ3JlYXRlUHJvamVjdHNGaWxlUGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgSm9pblNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgICAgRmluZEluQWN0aXZlRG9jdW1lbnRUb29sYmFyU1ZHLFxuICAgICAgICAgICAgRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBDbGVhckNvbnNvbGVUb29sYmFyU1ZHXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gVG9vbGJhclNWR3MubWFwKChUb29sYmFyU1ZHKSA9PlxuXG4gICAgICAgICAgICA8RGl2PlxuICAgICAgICAgICAgICA8VG9vbGJhclNWRyAvPlxuICAgICAgICAgICAgPC9EaXY+XG5cbiAgICAgICAgICApO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDJyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJWaWV3IiwiY2hpbGRFbGVtZW50cyIsIlRvb2xiYXJTVkdzIiwiT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiU3luY2hyb25pc2VUb29sYmFyU1ZHIiwiUmVuYW1lU2VsZWN0ZWRQcm9qZWN0c1BhdGhUb29sYmFyU1ZHIiwiU2hvd1JlbGVhc2VzVG9vbGJhclNWRyIsIkhpZGVSZWxlYXNlc1Rvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0RpcmVjdG9yeVBhdGhUb29sYmFyU1ZHIiwiQ3JlYXRlUHJvamVjdHNGaWxlUGF0aFRvb2xiYXJTVkciLCJSZWxvYWRQcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkNsb3NlZFJ1YmJpc2hCaW5Ub29sYmFyU1ZHIiwiSm9pblNlc3Npb25Ub29sYmFyU1ZHIiwiQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkciLCJMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHIiwiRmluZEluQWN0aXZlRG9jdW1lbnRUb29sYmFyU1ZHIiwiRmluZEluUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkciLCJFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkciLCJDbGVhckNvbnNvbGVUb29sYmFyU1ZHIiwibWFwIiwiVG9vbGJhclNWRyIsIkRpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStEQTs7O2VBQUE7OztvRUE3RHNCO29CQUVFO3FCQWlCOEI7MERBRXRDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEscUJBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNKQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYztvQkFDWkMsK0JBQXdCO29CQUN4QkMsNEJBQXFCO29CQUNyQkMsMkNBQW9DO29CQUNwQ0MsNkJBQXNCO29CQUN0QkMsNkJBQXNCO29CQUN0QkMsNENBQXFDO29CQUNyQ0MsdUNBQWdDO29CQUNoQ0MsMENBQW1DO29CQUNuQ0MsaUNBQTBCO29CQUMxQkMsNEJBQXFCO29CQUNyQkMsOEJBQXVCO29CQUN2QkMsNkJBQXNCO29CQUN0QkMscUNBQThCO29CQUM5QkMsMENBQW1DO29CQUNuQ0MscUNBQThCO29CQUM5QkMsNkJBQXNCO2lCQUN2QixFQUNEakIsZ0JBQWdCQyxZQUFZaUIsR0FBRyxDQUFDLFNBQUNDO3lDQUUvQixvQkFBQ0MsWUFBRyxzQkFDRixvQkFBQ0Q7O2dCQUtYLE9BQU9uQjtZQUNUOzs7V0E3QklEO3FCQUFhc0IsYUFBTztBQStCeEIsaUJBL0JJdEIsTUErQkd1QixXQUFVO0FBRWpCLGlCQWpDSXZCLE1BaUNHd0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDMUIifQ==