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
        "\n\n  margin-bottom: 2rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ToolbarDiv = /*#__PURE__*/ function(Element) {
    _inherits(ToolbarDiv, Element);
    var _super = _create_super(ToolbarDiv);
    function ToolbarDiv() {
        _class_call_check(this, ToolbarDiv);
        return _super.apply(this, arguments);
    }
    _create_class(ToolbarDiv, [
        {
            key: "childElements",
            value: function childElements() {
                var ToolbarSVGs = [
                    _index.OpenRubbishBinToolbarSVG,
                    _index.ClosedRubbishBinToolbarSVG,
                    _index.SynchroniseToolbarSVG,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvZGl2L3Rvb2xiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgRGl2IGZyb20gXCIuLi9kaXZcIjtcblxuaW1wb3J0IHsgSm9pblNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgU3luY2hyb25pc2VUb29sYmFyU1ZHLFxuICAgICAgICAgU2hvd1JlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgIEhpZGVSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBMZWF2ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgQ2xlYXJDb25zb2xlVG9vbGJhclNWRyxcbiAgICAgICAgIENyZWF0ZVNlc3Npb25Ub29sYmFyU1ZHLFxuICAgICAgICAgQ29weVNlc3Npb25LZXlUb29sYmFyU1ZHLFxuICAgICAgICAgT3BlblJ1YmJpc2hCaW5Ub29sYmFyU1ZHLFxuICAgICAgICAgQ2xvc2VkUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICBGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkcsXG4gICAgICAgICBFeHBvcnRDdXN0b21HcmFtbWFyc1Rvb2xiYXJTVkcsXG4gICAgICAgICBDcmVhdGVQcm9qZWN0c0ZpbGVQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgIEZpbmRJblByb2plY3RzQW5kUmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICBSZW5hbWVTZWxlY3RlZFByb2plY3RzUGF0aFRvb2xiYXJTVkcsXG4gICAgICAgICBDcmVhdGVQcm9qZWN0c0RpcmVjdG9yeVBhdGhUb29sYmFyU1ZHIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5jbGFzcyBUb29sYmFyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3QgVG9vbGJhclNWR3MgPSBbXG4gICAgICAgICAgICBPcGVuUnViYmlzaEJpblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFN5bmNocm9uaXNlVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgICAgIFNob3dSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBIaWRlUmVsZWFzZXNUb29sYmFyU1ZHLFxuICAgICAgICAgICAgQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHLFxuICAgICAgICAgICAgUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkcsXG4gICAgICAgICAgICBKb2luU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyxcbiAgICAgICAgICAgIExlYXZlU2Vzc2lvblRvb2xiYXJTVkcsXG4gICAgICAgICAgICBDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkcsXG4gICAgICAgICAgICBGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkcsXG4gICAgICAgICAgICBGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyxcbiAgICAgICAgICAgIENsZWFyQ29uc29sZVRvb2xiYXJTVkdcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSBUb29sYmFyU1ZHcy5tYXAoKFRvb2xiYXJTVkcpID0+XG5cbiAgICAgICAgICAgIDxEaXY+XG4gICAgICAgICAgICAgIDxUb29sYmFyU1ZHIC8+XG4gICAgICAgICAgICA8L0Rpdj5cblxuICAgICAgICAgICk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInRvb2xiYXJcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVG9vbGJhckRpdilgXG5cbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlRvb2xiYXJEaXYiLCJjaGlsZEVsZW1lbnRzIiwiVG9vbGJhclNWR3MiLCJPcGVuUnViYmlzaEJpblRvb2xiYXJTVkciLCJDbG9zZWRSdWJiaXNoQmluVG9vbGJhclNWRyIsIlN5bmNocm9uaXNlVG9vbGJhclNWRyIsIlJlbmFtZVNlbGVjdGVkUHJvamVjdHNQYXRoVG9vbGJhclNWRyIsIlNob3dSZWxlYXNlc1Rvb2xiYXJTVkciLCJIaWRlUmVsZWFzZXNUb29sYmFyU1ZHIiwiQ3JlYXRlUHJvamVjdHNEaXJlY3RvcnlQYXRoVG9vbGJhclNWRyIsIkNyZWF0ZVByb2plY3RzRmlsZVBhdGhUb29sYmFyU1ZHIiwiUmVsb2FkUHJvamVjdHNBbmRSZWxlYXNlc1Rvb2xiYXJTVkciLCJKb2luU2Vzc2lvblRvb2xiYXJTVkciLCJDcmVhdGVTZXNzaW9uVG9vbGJhclNWRyIsIkxlYXZlU2Vzc2lvblRvb2xiYXJTVkciLCJDb3B5U2Vzc2lvbktleVRvb2xiYXJTVkciLCJGaW5kSW5BY3RpdmVEb2N1bWVudFRvb2xiYXJTVkciLCJGaW5kSW5Qcm9qZWN0c0FuZFJlbGVhc2VzVG9vbGJhclNWRyIsIkV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyIsIkNsZWFyQ29uc29sZVRvb2xiYXJTVkciLCJtYXAiLCJUb29sYmFyU1ZHIiwiRGl2IiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUVBOzs7ZUFBQTs7O29FQS9Ec0I7b0JBRUU7MERBRVI7cUJBa0JzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0RCxJQUFBLEFBQU1BLDJCQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDSkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWM7b0JBQ1pDLCtCQUF3QjtvQkFDeEJDLGlDQUEwQjtvQkFDMUJDLDRCQUFxQjtvQkFDckJDLDJDQUFvQztvQkFDcENDLDZCQUFzQjtvQkFDdEJDLDZCQUFzQjtvQkFDdEJDLDRDQUFxQztvQkFDckNDLHVDQUFnQztvQkFDaENDLDBDQUFtQztvQkFDbkNDLDRCQUFxQjtvQkFDckJDLDhCQUF1QjtvQkFDdkJDLDZCQUFzQjtvQkFDdEJDLCtCQUF3QjtvQkFDeEJDLHFDQUE4QjtvQkFDOUJDLDBDQUFtQztvQkFDbkNDLHFDQUE4QjtvQkFDOUJDLDZCQUFzQjtpQkFDdkIsRUFDRGxCLGdCQUFnQkMsWUFBWWtCLEdBQUcsQ0FBQyxTQUFDQzt5Q0FFL0Isb0JBQUNDLFlBQUcsc0JBQ0Ysb0JBQUNEOztnQkFLWCxPQUFPcEI7WUFDVDs7O1dBOUJJRDtxQkFBbUJ1QixhQUFPO0FBZ0M5QixpQkFoQ0l2QixZQWdDR3dCLFdBQVU7QUFFakIsaUJBbENJeEIsWUFrQ0d5QixxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHNCQUFTLEVBQUMzQiJ9