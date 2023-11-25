import { useTheme } from '@emotion/react';
import { Box, Image } from '@mantine/core';

import { useStyles } from './styles';

function CarouselCard({ image }) {
  const { classes } = useStyles();

  const theme = useTheme();

  return (
    <Box className={classes.container}>
      <Box style={{ borderRadius: '50px' }}>
        <Image
          styles={{
            image: {
              width: '370px !important',
              height: '370px !important',

              [`@media (max-width: ${theme?.breakpoints.xl}px)`]: {
                width: '200px !important',
                height: '200px !important',
              },
            },
          }}
          className={classes.cardImg}
          src={image}
        />
      </Box>
    </Box>
  );
}

export default CarouselCard;
