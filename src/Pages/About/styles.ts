import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  bgImage: {
    width: '100%',
    height: '100vh',

    position: 'relative',

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'block',
      padding: '90px 0px 0px 0px',
      maxHeight: '200px',
    },
    [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
      display: 'block',
      padding: '90px 0px 0px 0px',
      maxHeight: '500px',
    },
  },
}));
