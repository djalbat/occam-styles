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
var _styles = require("../styles");
var scrollbarMixin = "\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  \n  @media (pointer: fine) {\n    ::-webkit-scrollbar {\n      display: block;\n      width: ".concat(_styles.scrollbarThickness, ";\n      height: ").concat(_styles.scrollbarThickness, ";\n    }\n  \n    ::-webkit-scrollbar-thumb {\n      cursor: default;\n      border-style: solid;\n      border-color: transparent;\n      border-width: ").concat(_styles.scrollbarThumbBorderWidth, ";\n      border-radius: ").concat(_styles.scrollbarThumbBorderRadius, ";\n      background-clip: content-box;\n    }\n  \n    ::-webkit-scrollbar-track {\n      cursor: default;\n    }\n  }\n\n");
var _default = scrollbarMixin;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbi9zY3JvbGxiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNjcm9sbGJhclRoaWNrbmVzcywgc2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJCb3JkZXJSYWRpdXMgfSBmcm9tIFwiLi4vc3R5bGVzXCI7XG5cbmNvbnN0IHNjcm9sbGJhck1peGluID0gYFxuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIEBtZWRpYSAocG9pbnRlcjogZmluZSkge1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogJHtzY3JvbGxiYXJUaGlja25lc3N9O1xuICAgICAgaGVpZ2h0OiAke3Njcm9sbGJhclRoaWNrbmVzc307XG4gICAgfVxuICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXdpZHRoOiAke3Njcm9sbGJhclRodW1iQm9yZGVyV2lkdGh9O1xuICAgICAgYm9yZGVyLXJhZGl1czogJHtzY3JvbGxiYXJUaHVtYkJvcmRlclJhZGl1c307XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xuICAgIH1cbiAgXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICB9XG5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbGJhck1peGluO1xuIl0sIm5hbWVzIjpbInNjcm9sbGJhck1peGluIiwic2Nyb2xsYmFyVGhpY2tuZXNzIiwic2Nyb2xsYmFyVGh1bWJCb3JkZXJXaWR0aCIsInNjcm9sbGJhclRodW1iQm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQ0E7OztlQUFBOzs7c0JBL0IwRjtBQUUxRixJQUFNQSxpQkFBaUIsQUFBQyx3SkFVUkMsT0FEREEsMEJBQWtCLEVBQUMscUJBUVpDLE9BUE5ELDBCQUFrQixFQUFDLDZKQVFaRSxPQURERCxpQ0FBeUIsRUFBQyw0QkFDRSxPQUEzQkMsa0NBQTBCLEVBQUM7SUFXbEQsV0FBZUgifQ==