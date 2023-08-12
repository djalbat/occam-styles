"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ExportCustomGrammarsToolbarSVG;
    }
});
var _toolbar = /*#__PURE__*/ _interop_require_default(require("../../svg/toolbar"));
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
var ExportCustomGrammarsToolbarSVG = /*#__PURE__*/ function(ToolbarSVG) {
    _inherits(ExportCustomGrammarsToolbarSVG, ToolbarSVG);
    var _super = _create_super(ExportCustomGrammarsToolbarSVG);
    function ExportCustomGrammarsToolbarSVG() {
        _class_call_check(this, ExportCustomGrammarsToolbarSVG);
        return _super.apply(this, arguments);
    }
    _create_class(ExportCustomGrammarsToolbarSVG, [
        {
            key: "childElements",
            value: function childElements() {
                return /*#__PURE__*/ React.createElement("g", null, /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "1",
                    x: "14",
                    y: "7"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2",
                    height: "1",
                    x: "14",
                    y: "17"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "12",
                    height: "2.5",
                    x: "4",
                    y: "4.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2.4884794",
                    height: "6.5253949",
                    x: "-0.46920818",
                    y: "8.305048",
                    transform: "matrix(1,0,0.53813153,0.84286088,0,0)"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "2.4884794",
                    height: "6.5253949",
                    x: "-17.980728",
                    y: "14.830442",
                    transform: "matrix(-1,0,-0.53813153,0.84286088,0,0)"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "12",
                    height: "2.5",
                    x: "4",
                    y: "18"
                }));
            }
        }
    ]);
    return ExportCustomGrammarsToolbarSVG;
}(_toolbar.default);
_define_property(ExportCustomGrammarsToolbarSVG, "defaultProperties", {
    className: "export-custom-grammars"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9leHBvcnRDdXN0b21HcmFtbWFycy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyBleHRlbmRzIFRvb2xiYXJTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCIgeD1cIjE0XCIgeT1cIjdcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCIgeD1cIjE0XCIgeT1cIjE3XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIm0gMTIsMTEuMjg1NzE0IGggOCBWIDguODU3MTQyOSBsIDQsMy42NDI4NTgxIC00LDMuNjQyODU2IHYgLTIuNDI4NTcxIGggLTggelwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyLjVcIiB4PVwiNFwiIHk9XCI0LjVcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjIuNDg4NDc5NFwiIGhlaWdodD1cIjYuNTI1Mzk0OVwiIHg9XCItMC40NjkyMDgxOFwiIHk9XCI4LjMwNTA0OFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMC41MzgxMzE1MywwLjg0Mjg2MDg4LDAsMClcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjIuNDg4NDc5NFwiIGhlaWdodD1cIjYuNTI1Mzk0OVwiIHg9XCItMTcuOTgwNzI4XCIgeT1cIjE0LjgzMDQ0MlwiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwwLC0wLjUzODEzMTUzLDAuODQyODYwODgsMCwwKVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyLjVcIiB4PVwiNFwiIHk9XCIxOFwiIC8+XG4gICAgICA8L2c+XG5cbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJleHBvcnQtY3VzdG9tLWdyYW1tYXJzXCJcbiAgfTtcbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiRXhwb3J0Q3VzdG9tR3JhbW1hcnNUb29sYmFyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInBhdGgiLCJkIiwidHJhbnNmb3JtIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLCtDQUFOO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UscUJBRUUsb0JBQUNDLHlCQUNDLG9CQUFDQztvQkFBS0MsT0FBTTtvQkFBSUMsUUFBTztvQkFBSUMsR0FBRTtvQkFBS0MsR0FBRTtrQ0FDcEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0M7b0JBQUtDLEdBQUU7a0NBQ1Isb0JBQUNOO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFNQyxHQUFFO29CQUFJQyxHQUFFO2tDQUN0QyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQVlDLFFBQU87b0JBQVlDLEdBQUU7b0JBQWNDLEdBQUU7b0JBQVdHLFdBQVU7a0NBQ2xGLG9CQUFDUDtvQkFBS0MsT0FBTTtvQkFBWUMsUUFBTztvQkFBWUMsR0FBRTtvQkFBYUMsR0FBRTtvQkFBWUcsV0FBVTtrQ0FDbEYsb0JBQUNQO29CQUFLQyxPQUFNO29CQUFLQyxRQUFPO29CQUFNQyxHQUFFO29CQUFJQyxHQUFFOztZQUk1Qzs7O1dBZm1CUDtFQUF1Q1csZ0JBQVU7QUFpQnBFLGlCQWpCbUJYLGdDQWlCWlkscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==