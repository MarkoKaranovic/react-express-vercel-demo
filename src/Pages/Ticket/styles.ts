import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  checkoutWrapper: {
    fontSize: '1.8vw',
    color: theme.colors.primary[0],
    fontWeight: 600,
    lineHeight: '150%',
    fontStyle: 'normal',

    '& label': {
      color: theme.colors.primary[0],
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.s,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
  },
  checkoutDetails: {
    fontSize: '1.8vw',
    color: theme.colors.primary[0],
    fontWeight: 600,
    lineHeight: '150%',
    fontStyle: 'normal',
    border: '2px solid red',
    borderColor: theme.colors.primary[0],
    padding: '2rem',
    '& label': {
      color: theme.colors.primary[0],
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      fontSize: theme.fontSizes.s,
      textAlign: 'center',
      fontFamily: 'Teko',
    },
  },

  table: {
    '& td': {
      fontSize: '18px !important',
    },
  },
  tableHead: {
    fontSize: '18px !important',
  },
  card: {
    border: '2px solid black',
    borderColor: theme.colors.primary[0],
    borderRadius: '10px',
  },

  detailText: {
    color: theme.colors.primary[0],
    '& strong': {
      color: theme.colors.dark[5],
      marginRight: '10px',
      fontWeight: 400,
      fontSize: '30px',
    },
  },
}));
