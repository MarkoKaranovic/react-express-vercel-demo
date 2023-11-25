import { Box, Flex, Grid, Text } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
export default function Footer() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <Box
      bg="rgba(8, 68, 83, 1)"
      p="100px 40px"
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          padding: '50px 24px',
        },
        [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
          padding: '50px 24px',
        },
      })}
    >
      <Flex
        justify="space-between"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            padding: '0',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '30px',
          },
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            padding: '0',
            gap: '10px',
          },
        })}
      >
        <Flex
          gap={15}
          direction="column"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
            },
          })}
        >
          <Text
            size={18}
            fw={600}
            className={classes.footerText}
            color="white"
            onClick={() => navigate('about')}
          >
            O NAMA
          </Text>
          <Text
            size={18}
            fw={600}
            className={classes.footerText}
            color="white"
            onClick={() => navigate('reservation')}
          >
            REZERVVACIJE
          </Text>
          <Text
            size={18}
            fw={600}
            className={classes.footerText}
            color="white"
            onClick={() => navigate('')}
          >
            POKOLN BON
          </Text>
        </Flex>
        <Flex
          gap={15}
          direction="column"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
              padding: '0',
            },
          })}
        >
          <Text
            size={18}
            fw={600}
            className={classes.footerText}
            color="white"
            onClick={() => navigate('contact')}
          >
            KONTAKT
          </Text>
          <Text
            size={18}
            fw={600}
            className={classes.footerText}
            color="white"
            onClick={() => navigate('/workshops')}
          >
            RADIONICE
          </Text>
          <Text
            size={18}
            fw={600}
            className={classes.footerText}
            color="white"
            onClick={() => navigate('/gallery')}
          >
            GALERIJA
          </Text>
        </Flex>
        <Flex
          gap={156}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              padding: '0',
              justifyContent: 'space-between',
              gap: '0',
            },
            [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
              padding: '0',
              justifyContent: 'space-between',
              gap: '10px',
            },
          })}
        >
          <Flex
            gap={15}
            direction="column"
          >
            <Text
              color="white"
              size={18}
              fw={600}
              className={classes.footerText}
            >
              RADNO VRIJEME:
            </Text>
            <Text
              className={classes.footerText}
              color="white"
            >
              UTO - SRI: 13:00 - 21:00
            </Text>
            <Text
              className={classes.footerText}
              color="white"
            >
              UTO - SRI: 13:00 - 21:00
            </Text>
            <Text
              className={classes.footerText}
              color="white"
            >
              UTO - SRI: 13:00 - 21:00
            </Text>
            <Text
              className={classes.footerText}
              color="white"
            >
              UTO - SRI: 13:00 - 21:00
            </Text>
          </Flex>
          <Flex
            gap={15}
            direction="column"
          >
            <Text
              color="white"
              size={18}
              fw={600}
              className={classes.footerText}
            >
              INFORMACIJE:
            </Text>
            <Text
              className={classes.footerText}
              color="white"
            >
              Gundulićeva 32, <br />
              31000, Osijek <br />
              099 2222 888 <br />
              hello@galeriaarta.com
            </Text>
          </Flex>
        </Flex>
        <Flex justify="center">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11173.759677117765!2d18.661928648430465!3d45.56159133126761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7af30e889cf%3A0x4dbc181b18c449f0!2sOsijek!5e0!3m2!1sen!2shr!4v1683062316283!5m2!1sen!2shr"
            loading="lazy"
            style={{ border: 'none' }}
          ></iframe>
        </Flex>
      </Flex>

      <Grid
        pt={50}
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            display: 'grid',
            padding: '0',
            gridTemplateColumns: '1fr',
            justifyItems: 'center',
          },
        })}
      >
        <Grid.Col span={3}>
          <Flex
            pt={15}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
                padding: '0',
              },
            })}
          >
            <a href="https://www.instagram.com/galeria.arta/?igshid=MzRlODBiNWFlZA%3D%3D">
              <IconBrandInstagram color="white" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100091833698327">
              <IconBrandFacebook color="white" />
            </a>
          </Flex>
        </Grid.Col>
        <Grid.Col span={5}>
          <Flex
            justify="space-around"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                display: 'none',
              },
            })}
          >
            <Flex
              justify="space-around"
              gap={10}
            >
              <Text
                color="white"
                size={18}
                fw={600}
                className={classes.footerText}
              >
                © 2023 GALERIA.ARTA
              </Text>
              <Text
                color="white"
                size={18}
                fw={600}
                className={classes.footerText}
              >
                OPĆI UVJETI
              </Text>
            </Flex>
            <Text
              color="white"
              size={18}
              fw={600}
              className={classes.footerText}
            >
              PRAVILA PRIVATNOSTI OSOBNIH PODATAKA
            </Text>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
