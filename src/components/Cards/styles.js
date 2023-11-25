import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  container: {
    marginLeft: 200,
    marginRight: 200,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    marginBottom: 50,
    marginTop: 45,
    display: 'grid',

    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      marginLeft: 100,
      marginRight: 100,
      flexDirection: 'column',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      marginLeft: 30,
      marginRight: 30,
      flexDirection: 'column',
      gap: 20,
    },
  },

  content: {
    gap: 30,

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      gap: 20,
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  quotesImg: {
    maxWidth: 61,
    maxHeight: 55,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: 45,
      maxHeight: 41,
    },
  },
  text: {
    fontSize: 16,
    // color: theme.colors.light[1],

    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 14,
    },
  },
}));
