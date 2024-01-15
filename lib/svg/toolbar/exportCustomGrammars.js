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
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "12",
                    height: "2.5",
                    x: "4",
                    y: "4.5"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "3",
                    height: "5.5",
                    x: "0",
                    y: "0",
                    transform: "translate(4, 7) skewX(28.5)"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "3",
                    height: "5.5",
                    x: "0",
                    y: "0",
                    transform: "translate(7, 12.5) skewX(-28.5)"
                }), /*#__PURE__*/ React.createElement("rect", {
                    width: "12",
                    height: "2.5",
                    x: "4",
                    y: "18"
                }), /*#__PURE__*/ React.createElement("path", {
                    d: "m 12,11.285714 h 8 V 8.8571429 l 4,3.6428581 -4,3.642856 v -2.428571 h -8 z"
                }));
            }
        }
    ]);
    return ExportCustomGrammarsToolbarSVG;
}(_toolbar.default);
_define_property(ExportCustomGrammarsToolbarSVG, "defaultProperties", {
    className: "export-custom-grammars"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdmcvdG9vbGJhci9leHBvcnRDdXN0b21HcmFtbWFycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvb2xiYXJTVkcgZnJvbSBcIi4uLy4uL3N2Zy90b29sYmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cG9ydEN1c3RvbUdyYW1tYXJzVG9vbGJhclNWRyBleHRlbmRzIFRvb2xiYXJTVkcge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxnPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCIgeD1cIjE0XCIgeT1cIjdcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCIgeD1cIjE0XCIgeT1cIjE3XCIgLz5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjIuNVwiIHg9XCI0XCIgeT1cIjQuNVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiM1wiIGhlaWdodD1cIjUuNVwiIHg9XCIwXCIgeT1cIjBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNCwgNykgc2tld1goMjguNSlcIiAvPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjNcIiBoZWlnaHQ9XCI1LjVcIiB4PVwiMFwiIHk9XCIwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcsIDEyLjUpIHNrZXdYKC0yOC41KVwiIC8+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIyLjVcIiB4PVwiNFwiIHk9XCIxOFwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJtIDEyLDExLjI4NTcxNCBoIDggViA4Ljg1NzE0MjkgbCA0LDMuNjQyODU4MSAtNCwzLjY0Mjg1NiB2IC0yLjQyODU3MSBoIC04IHpcIiAvPlxuICAgICAgPC9nPlxuXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZXhwb3J0LWN1c3RvbS1ncmFtbWFyc1wiXG4gIH07XG59XG4iXSwibmFtZXMiOlsiRXhwb3J0Q3VzdG9tR3JhbW1hcnNUb29sYmFyU1ZHIiwiY2hpbGRFbGVtZW50cyIsImciLCJyZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4IiwieSIsInRyYW5zZm9ybSIsInBhdGgiLCJkIiwiVG9vbGJhclNWRyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLCtDQUFELEFBQUw7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MseUJBQ0Msb0JBQUNDO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFJQyxHQUFFO29CQUFLQyxHQUFFO2tDQUNwQyxvQkFBQ0o7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQUlDLEdBQUU7b0JBQUtDLEdBQUU7a0NBQ3BDLG9CQUFDSjtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBTUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDdEMsb0JBQUNKO29CQUFLQyxPQUFNO29CQUFJQyxRQUFPO29CQUFNQyxHQUFFO29CQUFJQyxHQUFFO29CQUFJQyxXQUFVO2tDQUNuRCxvQkFBQ0w7b0JBQUtDLE9BQU07b0JBQUlDLFFBQU87b0JBQU1DLEdBQUU7b0JBQUlDLEdBQUU7b0JBQUlDLFdBQVU7a0NBQ25ELG9CQUFDTDtvQkFBS0MsT0FBTTtvQkFBS0MsUUFBTztvQkFBTUMsR0FBRTtvQkFBSUMsR0FBRTtrQ0FDdEMsb0JBQUNFO29CQUFLQyxHQUFFOztZQUlkOzs7V0FmbUJWO0VBQXVDVyxnQkFBVTtBQWlCcEUsaUJBakJtQlgsZ0NBaUJaWSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYiJ9