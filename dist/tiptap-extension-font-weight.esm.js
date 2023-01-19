import '@tiptap/extension-text-style';
import { Extension } from '@tiptap/core';

const FontWeight = Extension.create({
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

export { FontWeight, FontWeight as default };
//# sourceMappingURL=tiptap-extension-font-weight.esm.js.map
