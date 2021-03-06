// eslint-disable-next-line import/no-extraneous-dependencies
import { pt } from 'vuetify/lib/locale'
import colors from 'vuetify/lib/util/colors'

export default function () {
  return {
    treeShake: true,
    customVariables: ['@/assets/scss/variables.scss'],

    lang: {
      locales: { pt },
      current: 'pt',
    },

    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: {
            base: '#389DFD',
            lighten1: '##FDFDFC',
            darken1: '#FD7600',
          },
          accent: '#8e5b9a',
          secondary: colors.amber.darken3,
          info: '#3fafd0',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#37b776',
        },
      },
    },

    icons: {
      iconfont: 'md',
    },
  }
}
