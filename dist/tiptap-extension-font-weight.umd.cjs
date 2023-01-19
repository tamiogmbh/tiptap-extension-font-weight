(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tiptap/extension-text-style'), require('@tiptap/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tiptap/extension-text-style', '@tiptap/core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["@tiptap/extension-font-weight"] = {}, null, global.core));
})(this, (function (exports, extensionTextStyle, core) { 'use strict';

  const FontWeight = core.Extension.create({
    name: "font-weight",
    addOptions() {
      return {
        types: ["textStyle"]
      };
    },
    addGlobalAttributes() {
      return [
        {
          types: this.options.types,
          attributes: {
            fontWeight: {
              default: null,
              parseHTML: (element) => {
                var _a;
                return (_a = element.style.fontWeight) == null ? void 0 : _a.replace(/['"]+/g, "");
              },
              renderHTML: (attributes) => {
                if (!attributes.fontWeight) {
                  return {};
                }
                return {
                  style: `font-weight: ${attributes.fontWeight}`
                };
              }
            }
          }
        }
      ];
    },
    addCommands() {
      return {
        setFontWeight: (fontWeight) => ({ chain }) => {
          return chain().setMark("textStyle", { fontWeight }).run();
        },
        unsetFontWeight: () => ({ chain }) => {
          return chain().setMark("textStyle", { fontWeight: null }).removeEmptyTextStyle().run();
        }
      };
    }
  });

  exports.FontWeight = FontWeight;
  exports["default"] = FontWeight;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=tiptap-extension-font-weight.umd.cjs.map
