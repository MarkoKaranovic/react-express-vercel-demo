import { BackgroundImage, Container, Flex, Image, Text } from '@mantine/core';

import { useStyles } from './styles';

export default function About() {
  const { classes } = useStyles();

  return (
    <Container
      size="100%"
      p={0}
      bg="#FFFBF5"
    >
      <BackgroundImage
        className={classes.bgImage}
        src="/assets/Rectangle_27.svg"
        mah={700}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          h="100%"
        >
          <Text
            color="white"
            size="120px"
            fw={700}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: '36px',
              },
              [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
                fontSize: theme.fontSizes.md,
              },
            })}
          >
            O NAMA
          </Text>
        </Flex>
      </BackgroundImage>
      <Flex
        pt={120}
        pl={155}
        pr={155}
        pb={170}
        gap={20}
        align="center"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            fontSize: '36px',
            padding: '30px 24px',
          },
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            padding: '50px 30px',
          },
        })}
      >
        <Text
          size={24}
          fw={400}
          color="primary.0"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              fontSize: '14px',
            },
            [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
              fontSize: theme.fontSizes.xs,
            },
          })}
        >
          Osnovana 2023., Galeria Arta predstavlja malu oazu umjetničkog stvaralašta. Presvećena stvaranju opuštenog i
          intimnog iskustva, Galeria Arta svojim polaznicima otvara vrata u svijet umjetnosti. Uz vodstvo stručnih
          voditelja, polaznici imaju priliku iskušati vlastite kreativne vještine kroz zabavne radionice, dok oni više
          naklonjeni umjetnosti imaju moćnost stjecanja znanja i unaprjeđivanje vlastitih kreativnih dometa kroz ponudu
          individulanih tečajeva i škole slikanja.
        </Text>
        <Image
          src="/assets/glass-wine.png"
          maw={555}
          mah={348}
          // w={555}
          mt={20}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
            },
          })}
        />
        <Image
          src="/assets/Rectangle_18.svg"
          maw={555}
          // mah={348}
          width={158}
          height={497}
          mt={20}
          sx={(theme) => ({
            [`@media (min-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
            },
          })}
        />
      </Flex>
      <Flex
        direction="column"
        gap={70}
        pl={155}
        pr={155}
        pb={122}
        justify="center"
        align="center"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            display: 'block',

            padding: '30px 24px',
          },
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            display: 'block',

            padding: '50px 30px',
          },
        })}
      >
        <Text
          size={70}
          fw={800}
          color="primary.0"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              textAlign: 'center',
              fontSize: '36px',
            },
            [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
              fontSize: theme.fontSizes.sm,
            },
          })}
        >
          UPOZNAJTE NAS
        </Text>
        <Flex
          gap={20}
          justify="center"
          align="center"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'block',
            },
          })}
        >
          <Image
            src="/assets/Kristina.png"
            maw={440}
            mah={568}
          />
          <Text
            size={24}
            fw={400}
            color="primary.0"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                paddingTop: '20px',
                fontSize: '16px',
              },
              [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
                fontSize: '16px',
              },
            })}
          >
            Upoznajte Kristinu Janković, mag.educ.art. Bogato likovno znanje stekla je pohađajući Školu primijenjene
            umjetnosti i dizajna Osijek, a 2014. upisala je Akademiju za umjetnost i kulturu u Osijeku. Kristinino
            primarno područje interesa je upravo slikarstvo, a njezin uspjeh potvrđuju sudjelovanja na brojnim
            slikarskim izložbama poput pet Završnih izložbi studenata Odsjeka za likovnu umjetnost, samostalne izložbe u
            Gradskoj i sveučilišnoj knjižnici Osijek, grupne izložbe vezane uz projekt Osječke ljetne noći te izložbi
            Plati i nosi u Galeriji Bačva Meštrovićevom paviljonu u Zagrebu. Osim bogatog slikarskog iskustva, Kristinu
            krasi i vještina rada s djecom koju je stekla kroz vođenje brojnih školskih sati likovne kulture.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
