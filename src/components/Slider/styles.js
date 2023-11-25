import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    paddingBottom: 50,
    width: '100%',
    // backgroundColor: theme.colors.primaryDark[0],
  },
  title: {
    textAlign: 'center',
    fontSize: 52,
    fontWeight: 600,
    // color: theme.colors.light[1],

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: 32,
      fontWeight: 500,
    },
  },
}));
