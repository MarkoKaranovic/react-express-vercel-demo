import { Flex, Text } from '@mantine/core';
import { GetGalleryImages } from '../../Service/Queries';
import TestimonialSlider from '../../components/Slider';

export default function Gallery() {
  const data = GetGalleryImages();
  console.log(data);
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      pt={80}
      pb={40}
      gap={20}
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          padding: '100px 20px 24px 24px',
        },
        [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
          padding: '50px 20px 24px 24px',
        },
      })}
    >
      <Text
        size={70}
        fw={700}
        color="rgba(8, 68, 83, 1)"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            fontSize: '36px',
          },
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            fontSize: theme.fontSizes.md,
          },
        })}
      >
        GALERIJA
      </Text>
      <Text
        size={24}
        fw={700}
        color="rgba(8, 68, 83, 1)"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            fontSize: '20px',
          },
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            fontSize: '20px',
          },
        })}
      >
        OBOJAJ SVOJE SRCE
      </Text>
      <Text
        size={18}
        fw={700}
        color="rgba(8, 68, 83, 1)"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            fontSize: '14px',
            color: '#000',
          },
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            fontSize: '14px',
            textAlign: 'center',
          },
        })}
      >
        Dajemo vam uvid u dijelić atmosfere našeg kreativnog studija. Prepustite se vodstvu naših kreativnih instruktora
        i ne brinite ako vam umjetnost nije jača strana. Stvorit ćete pravo malo remek djelo na koje ćete biti ponosni.
        Neka zabava počne!
      </Text>
      <TestimonialSlider data={data?.data?.galleryImagesCollection?.items ?? []} />
    </Flex>
  );
}
