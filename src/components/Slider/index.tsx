import { Carousel } from '@mantine/carousel';
import { Box, Image } from '@mantine/core';

import CarouselCard from '../Cards';

import { useStyles } from './styles';

export default function TestimonialSlider({ data }: { data?: any }) {
  const { classes } = useStyles();
  return (
    <Box className={classes.container}>
      {/* <Title className={classes.title}>{t('lovely_users_say')}</Title> */}

      <Carousel
        mx={60}
        loop
        draggable
        styles={{
          viewport: {
            overflow: 'initial',
          },
          container: {
            alignItems: 'center',
          },
          control: {
            border: 'none',
            background: 'none',
            [`@media (max-width: 576px)`]: {
              background: '#D9D9D9;',
            },
          },
          controls: {
            top: 0,
            bottom: 0,

            [`@media (max-width:576px)`]: {
              top: -100,
            },

            [`@media (max-width: 1200px)`]: {
              top: 450,
            },
          },
        }}
        nextControlIcon={<Image src="/assets/RightArrow.svg" />}
        previousControlIcon={<Image src="/assets/LeftArrow.svg" />}
      >
        {data?.map((i: any) => {
          return (
            <Carousel.Slide>
              <CarouselCard image={i.image.url} />
            </Carousel.Slide>
          );
        })}
      </Carousel>
    </Box>
  );
}
