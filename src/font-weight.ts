import '@tiptap/extension-text-style'

import { Extension } from '@tiptap/core'

export type FontWeightOptions = {
  types: string[],
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontWeight: {
      /**
       * Set the text font-weight
       */
      setFontWeight: (fontWeight: string) => ReturnType,
      /**
       * Unset the text font-weight
       */
      unsetFontWeight: () => ReturnType,
    }
  }
}

export const FontWeight = Extension.create<FontWeightOptions>({
  name: 'font-weight',

  addOptions() {
    return {
      types: ['textStyle'],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontWeight: {
            default: null,
            parseHTML: element => element.style.fontWeight?.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.fontWeight) {
                return {}
              }

              return {
                style: `font-weight: ${attributes.fontWeight}`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setFontWeight: fontWeight => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontWeight })
          .run()
      },
      unsetFontWeight: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontWeight: null })
          .removeEmptyTextStyle()
          .run()
      },
    }
  },
})
