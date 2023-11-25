import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  navigationContainer: {
    // position: 'absolute',
    padding: '35px 40px',
    width: '100%',
    height: '10%',
    backgroundColor: theme.colors.secondary[0],
    zIndex: 1,

    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      position: 'fixed',
      padding: 0,
      zIndex: 1,
      width: '30%',
      background: 'none',
    },
    [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
      padding: '20px 0px',
    },
  },
  burger: {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '30px',
    alignSelf: 'right',
    right: 0,
    opacity: 1,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'flex',
    },
  },

  navigationItem: {
    fontSize: '20px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    },
    [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
      fontSize: '15px',
      fontWeight: 590,
    },
    // '&:active': { opacity: 0.4 },
    '&:hover': { backgroundColor: theme.colors.primary[0], color: 'white' },
    '&:active': { backgroundColor: theme.colors.primary[0], color: 'white' },
  },
  navigationItemReservation: {
    fontSize: '20px',
    backgroundColor: theme.colors.primary[0],
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    padding: '16px 36px',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      display: 'none',
    },
    [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
      // display: 'none',
      fontSize: '15px',
      padding: '8px 18px',
    },
  },
}));
