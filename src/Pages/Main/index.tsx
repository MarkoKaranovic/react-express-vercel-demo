import { BackgroundImage, Box, Container, Flex, Image, Text } from '@mantine/core';

import TestimonialSlider from '../../components/Slider';
import { useStyles } from './styles';

export default function Main() {
  const { classes } = useStyles();

  return (
    <Container
      size="100%"
      p={0}
    >
      <BackgroundImage
        className={classes.bgImage}
        src="/assets/logo.png"
        mah={700}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          h="100%"
        >
          <Text className={classes.heroTitle}>ISKUSI ZABAVU I UŽITAK</Text>
        </Flex>
      </BackgroundImage>
      <Flex
        className={classes.cardWrapper}
        gap={100}
      >
        <Flex
          direction="column"
          gap={50}
          align="center"
          className={classes.animationCard}
        >
          <Image
            src="/assets/palette.png"
            maw={137}
            h={120}
          />
          <Text
            size="s"
            color="white"
            ff="Teko"
            fw={600}
            className={classes.animationCardTitle}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size="xs"
            color="white"
            className={classes.animationCardDescription}
          >
            Ne morate ponijeti ništa. Samo se pojavite spremni za zabavu, a mi ćemo se pobrinut za ostalo.
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={50}
          align="center"
          className={classes.animationCard}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              background: 'white',
            },
          })}
        >
          <Image
            src="/assets/glasses.png"
            maw={137}
            h={120}
          />
          <Text
            size="s"
            color="white"
            ff="Teko"
            fw={600}
            className={classes.animationCardTitle}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                color: 'black',
              },
            })}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size="xs"
            color="white"
            className={classes.animationCardDescription}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                color: 'black',
              },
            })}
          >
            Uz čašu vina, sve je lakše pa tako i potezi kistom. Opustite se uz izbor vina odabaranih slavonskih vinarija
          </Text>
        </Flex>
        <Flex
          direction="column"
          gap={50}
          align="center"
          className={classes.animationCard}
        >
          <Image
            src="/assets/paintPicture.png"
            maw={137}
            h={120}
          />
          <Text
            size="s"
            color="white"
            ff="Teko"
            fw={600}
            className={classes.animationCardTitle}
          >
            KREATIVNI I VESELI SATI
          </Text>

          <Text
            size="xs"
            color="white"
            className={classes.animationCardDescription}
          >
            Slikarsko iskustvo nije potrebno. Oslobodite svog unutarnjeg Van Gogha i zabavite se u ugodnoj atmosferi
            našeg studija.
          </Text>
        </Flex>
      </Flex>

      <Box className={classes.inviteWrapper}>
        <Image
          pos="absolute"
          maw={287}
          src="/assets/brushMarker.svg"
          style={{
            left: '40px',
            top: '68px',
          }}
        />
        <Flex
          gap={86}
          justify="space-between"
          className={classes.inviteBox}
        >
          <Flex
            direction="column"
            gap={55}
          >
            <Text className={classes.inviteTitle}>POVEDI SVOG PRIJATELJA, PARTNERA ILI CIJELU EKIPU</Text>
            <Image src="/assets/BiggeSmalls.png" />
          </Flex>
          <Flex
            direction="column"
            gap={50}
            pt={90}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                paddingTop: '0',
                gap: '10px',
              },
            })}
          >
            <Text className={classes.inviteDescription}>
              Podigli smo ljestvicu iskustva u Galerii Arti i pozivamo Vas da se pridružite zabavi. Vino se hladi,
              platno zove, a vibra je sve samo ne dosadna.
            </Text>
            <Flex
              direction="column"
              gap={50}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  gap: '20px',
                },
              })}
            >
              <Image src="/assets/Eye.png" />
              <Flex
                direction="column"
                sx={(theme) => ({
                  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                    display: 'none',
                  },
                })}
              >
                <Text
                  size={43}
                  color="rgba(56, 59, 105, 1)"
                  fw={500}
                  className={classes.locationText}
                >
                  DRUŽIMO SE U ...
                </Text>
                <Text
                  size={30}
                  color="rgba(56, 59, 105, 1)"
                  sx={(theme) => ({
                    fontFamily: theme.fontFamilyMonospace,
                  })}
                  underline
                  className={classes.location}
                >
                  Osijeku
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Flex
        direction="column"
        className={classes.eventWrapper}
      >
        <Text className={classes.eventTitle}>Kalendar</Text>
        <Flex
          justify="center"
          className={classes.eventSliderWrapper}
        >
          <TestimonialSlider />
        </Flex>
      </Flex>
      <Box
        pl={155}
        pr={155}
        bg="#FFFBF5"
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.mobile})`]: {
            padding: 0,
          },
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            padding: 0,
          },
        })}
      >
        <Flex
          gap={20}
          justify="space-between"
          align="center"
          className={classes.servicesWrapper}
        >
          <Image
            src="/assets/Painting.svg"
            maw={555}
            mah={564}
            alt="With default placeholder"
            withPlaceholder
            className={classes.servicesImage}
          />
          <Flex
            direction="column"
            gap={20}
            className={classes.servicesTextWrapper}
          >
            <Text className={classes.servicesTitle}> NEŠTO POSEBNO I ZA MALENE</Text>
            <Box>
              <Text
                ff="Roboto"
                className={classes.servicesParagprah}
              >
                Naše likovne radionice su puno više od običnih umjetničkih lekcija - ovdje se vaša djeca mogu iraziti,
                istražiti svoju kreativnost i pronaći nove prijatelje. Naši iskusni instruktori vodit će ih kroz sve
                korake stvaranja, od ideje do konačnog djela.
              </Text>
            </Box>
          </Flex>
        </Flex>
        <Flex
          gap={20}
          justify="space-between"
          className={classes.servicesWrapper}
        >
          <Flex
            direction="column"
            gap={20}
            className={classes.servicesTextWrapper}
          >
            <Text
              color="rgba(8, 68, 83, 1) "
              size="s"
              fw={700}
              sx={(theme) => ({
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  fontSize: '16px',
                  position: 'relative',
                  zIndex: 1,
                },
              })}
            >
              #PARTYGOALS
            </Text>
            <Text className={classes.servicesTitle}>NEKA BUDE SAMO NA POZIVNICU</Text>
            <Box>
              <Text
                ff="Roboto"
                className={classes.servicesParagprah}
              >
                Znamo kako organizirati zabavu, pa zašto nam ne biste dopustili da organiziramo vašu? Zauzmite cijeli
                atelje, odaberite tematsku sliku za svoje goste i prepustite se jednom od naših likovnih instruktora da
                vas vodi do dobrog provoda.
              </Text>
              <Text
                mt={30}
                underline
                size={20}
                fw={500}
                color="rgba(56, 59, 105, 1)"
                sx={(theme) => ({
                  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                    fontSize: '10px',
                    display: 'none',
                  },
                })}
              >
                Planirajte zabavu
              </Text>
            </Box>
          </Flex>
          <Image
            src="/assets/cake.svg"
            maw={555}
            mah={564}
            alt="With default placeholder"
            withPlaceholder
            className={classes.servicesImage}
          />
        </Flex>

        <Flex
          gap={20}
          justify="space-between"
          className={classes.servicesWrapper}
        >
          <Image
            src="/assets/paintWomen.svg"
            maw={555}
            mah={564}
            className={classes.servicesImage}
          />
          <Flex
            direction="column"
            justify="center"
            className={classes.servicesTextWrapper}
          >
            <Text className={classes.servicesTitle}>A KERAMIKA?</Text>
            <Text className={classes.servicesParagprah}>
              Na našim keramičkim radionicama ćete pronaći sve što vam treba za stvaranje unikatnih umjetničkih djela od
              gline. Uz mnošto zabavnih aktivnosti, tehnika i tečajeva, naša keramička radionica nudi nezaboravno
              iskustvo za sve uzraste. Dođite i stvorite nešto posebno - vaša kreativnost ne poznaje granice!
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap={20}
          justify="space-between"
          className={classes.giftWrapper}
        >
          <Flex
            gap={20}
            direction="column"
            className={classes.giftTextWrapper}
          >
            <Text className={classes.giftTitle}>POKLON BON</Text>
            <Text className={classes.giftParagraph}>
              Iznenadite svoje najmilije posebnim poklonom, odaberite neku od naših usluga i razveselite dragu osobu.
            </Text>
          </Flex>
          <Image
            src="/assets/giftCard.svg"
            maw={666}
            mah={472}
            style={{
              cursor: 'pointer',
            }}
          />
        </Flex>
      </Box>
    </Container>
  );
}
