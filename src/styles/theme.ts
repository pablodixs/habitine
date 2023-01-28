import { extendTheme } from 'native-base'

import {
  useFonts,
  Lexend_700Bold,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
} from '@expo-google-fonts/lexend'

export const THEME = extendTheme({
  colors: {
    black: {
      500: '#353535',
      300: '#434343',
      alpha: 'rgba(0, 0, 0, 0.07)',
    },
    gray: {
      950: '#09090A',
      900: '#121214',
      800: '#202024',
      600: '#323238',
      300: '#8D8D99',
      200: '#B1B1B1',
      100: '#E5E5E5',
    },
    blue: {
      500: '#064bb4',
    },
    green: {
      100: '#b8f95c'
    },
    orange: {
      500: '#EF7F31',
    },
    white: {
      100: '#FFFFFF',
      200: '#FBFBFB',
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 26,
    xxl: 32,
  },
  fonts: {
    heading: 'Lexend_700Bold',
    body: 'Lexend_400Regular',
    bold: 'Lexend_700Bold',
    medium: 'Lexend_500Medium',
    black: 'Lexend_800ExtraBold',
  },
  sizes: {
    14: 56,
    22: 87,
  },
})
