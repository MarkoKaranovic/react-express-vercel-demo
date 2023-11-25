import { MantineThemeOverride } from '@mantine/core';

export const galeriaArtaTheme: MantineThemeOverride = {
  fontFamily: 'Teko, sans-serif',
  headings: {
    fontFamily: 'Teko, sans-serif',
  },
  fontFamilyMonospace: 'Roboto',
  fontSizes: {
    xl: '120px',
    lg: '70px',
    md: '63px',
    sm: '30px',
    s: '24px',
    xs: '18px',
    xxs: '14px',
  },
  colors: {
    primary: ['#084453', '#383B69', '383B69'],
    secondary: ['#FFFBF5', '#EFEFEF'],
    warning: ['#D12E2E'],
  },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '360px',
    lg: '720px',
    mobile: '450px',
    tablet: '720px',
    smallerDesktop: '1200px',
    desktop: '1440px',
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 768,
          md: 960,
          lg: 1420,
          xl: 1920,
        },
      },
    },
  },
};
