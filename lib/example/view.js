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
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQge1xuICBKb2luU2Vzc2lvblRvb2xiYXJTVkcsXG4gIFN5bmNocm9uaXNlVG9vbGJhclNWRyxcbiAgU2hvd1JlbGVhc2VzVG9vbGJhclNWRyxcbiAgSGlkZVJlbGVhc2VzVG9vbGJhclNWRyxcbiAgTGVhdmVTZXNzaW9uVG9vbGJhclNWRyxcbiAgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyxcbiAgQ3JlYXRlU2Vzc2lvblRvb2xiYXJTVkcsXG4gIENvcHlTZXNzaW9uS2V5VG9vbGJhclNWRyxcbiAgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICBDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyxcbiAgRmluZEluQWN0aXZlRG9jdW1lbnRUb29sYmFyU1ZHLFxuICBFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkcsXG4gIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHLFxuICBGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gIFJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyxcbiAgQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IERpdiBmcm9tIFwiLi92aWV3L2RpdlwiO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgVG9vbGJhclNWR3MgPSBbXG4gICAgICAgICAgICBPcGVuUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBTeW5jaHJvbmlzZVRvb2xiYXJTVkcsXG4gICAgICAgICAgICBSZW5hbWVTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBTaG93UmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgSGlkZVJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFJlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBKb2luU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyxcbiAgICAgICAgICAgIExlYXZlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkcsXG4gICAgICAgICAgICBGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENsZWFyQ29uc29sZVRvb2xiYXJTVkdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBUb29sYmFyU1ZHcy5tYXAoKFRvb2xiYXJTVkcpID0+XG5cbiAgICAgICAgICAgIDxEaXY+XG4gICAgICAgICAgICAgIDxUb29sYmFyU1ZHIC8+XG4gICAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJjaGlsZEVsZW1lbnRzIiwiVG9vbGJhclNWR3MiLCJPcGVuUnViYmlzaEJpblRvb2xiYXJTVkciLCJTeW5jaHJvbmlzZVRvb2xiYXJTVkciLCJSZW5hbWVTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkciLCJTaG93UmVsZWFzZXNUb29sYmFyU1ZHIiwiSGlkZVJlbGVhc2VzVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRGlyZWN0b3J5UGF0aFRvb2xiYXJTVkciLCJDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyIsIlJlbG9hZFByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHIiwiQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkciLCJKb2luU2Vzc2lvblRvb2xiYXJTVkciLCJDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyIsIkxlYXZlU2Vzc2lvblRvb2xiYXJTVkciLCJDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkciLCJGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkciLCJGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyIsIkNsZWFyQ29uc29sZVRvb2xiYXJTVkciLCJtYXAiLCJUb29sYmFyU1ZHIiwiRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0VBOzs7ZUFBQTs7O29FQWhFc0I7b0JBRUU7cUJBbUJ1QjswREFFL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSxxQkFBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ0pDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxjQUFjO29CQUNaQywrQkFBd0I7b0JBQ3hCQyw0QkFBcUI7b0JBQ3JCQywyQ0FBb0M7b0JBQ3BDQyw2QkFBc0I7b0JBQ3RCQyw2QkFBc0I7b0JBQ3RCQyw0Q0FBcUM7b0JBQ3JDQyx1Q0FBZ0M7b0JBQ2hDQywwQ0FBbUM7b0JBQ25DQyxpQ0FBMEI7b0JBQzFCQyw0QkFBcUI7b0JBQ3JCQyw4QkFBdUI7b0JBQ3ZCQyw2QkFBc0I7b0JBQ3RCQywrQkFBd0I7b0JBQ3hCQyxxQ0FBOEI7b0JBQzlCQywwQ0FBbUM7b0JBQ25DQyxxQ0FBOEI7b0JBQzlCQyw2QkFBc0I7aUJBQ3ZCLEVBQ0RsQixnQkFBZ0JDLFlBQVlrQixHQUFHLENBQUMsU0FBQ0M7eUNBRS9CLG9CQUFDQyxZQUFHLHNCQUNGLG9CQUFDRDs7Z0JBS1gsT0FBT3BCO1lBQ1Q7OztXQTlCSUQ7cUJBQWF1QixhQUFPO0FBZ0N4QixpQkFoQ0l2QixNQWdDR3dCLFdBQVU7QUFFakIsaUJBbENJeEIsTUFrQ0d5QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMzQiJ9