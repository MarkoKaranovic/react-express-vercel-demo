import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  bolderText: {
    fontSize: '1.8vw',
    color: theme.colors.primary[0],
    fontWeight: 600,
    lineHeight: '150%',
    fontStyle: 'normal',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.s,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
  },
  normaltext: {
    fontSize: '1.8vw',
    color: theme.colors.primary[0],
    lineHeight: '150%',
    fontStyle: 'normal',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.s,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',

    input: {
      border: 'none',
      color: theme.colors.primary[0],
      textAlign: 'right',
      fontSize: '18px',
    },
  },
  decrementBtn: {
    border: 'none',
    fontSize: '20px',
    color: theme.colors.primary[0],
  },
  incrementBtn: {
    border: 'none',
    fontSize: '20px',
    color: theme.colors.primary[0],
  },
  buyBtn: {
    fontSize: '14px',
    backgroundColor: theme.colors.primary[0],
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 26px',
    fontFamily: theme.fontFamilyMonospace,
    fontWeight: 700,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      // display: 'none',
      fontSize: '14px',
      padding: '12px 30px',
    },
  },
}));
