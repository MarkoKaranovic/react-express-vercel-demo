import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  footerText: {
    fontFamily: theme.fontFamilyMonospace,

    [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
      fontSize: '10px',
    },
  },
}));
