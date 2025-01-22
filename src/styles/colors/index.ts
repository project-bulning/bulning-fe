import { Colors } from '@/styles';

const colorTheme: Colors = {
  primary: {
    main: '#012962',
    lighten: '#EBEBEB',
    darken: '#48CFCB',
    passive: 'rgba(72, 207, 203, 0.13)',
  },
  text: {
    prominent: '#191B1C',
    moderate: '#71787F',
    subtle: '#9B9B9B',
    darken_white: '#F7FAFE',
    explain_gray: '#9B9B9B',
    btn_secondary: '#474747',
  },
  background: {
    main: '#FFFFFF',
    lighten: '#FFFFFF',
    darken: '#F0F0F0',
    light_blue: '#F7FAFE',
    disabled: '#EBEBEB',
    passive: 'rgba(0, 0, 0, 0.5)',
    btn_default_hover: 'rgba(1, 41, 98, 0.9)',
  },
  border: {
    subtle: '#ECEDEE',
    prominent: '#DFE1E3',
  },
  absolute: {
    black: '#191B1C',
    white: '#FFFFFF',
  },
  other: {
    link: '#3C89FF',
    success: '#45C768',
    warn: '#FFBF44',
    error: '#FC4F4F',
  },
  brand: {
    background: '#131415',
    text: '#FFFFFF',
    primary: '#FF7900',
  },
};

export default colorTheme;
