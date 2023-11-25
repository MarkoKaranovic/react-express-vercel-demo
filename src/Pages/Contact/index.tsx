import { Box, Button, Divider, Flex, Text, TextInput, Textarea } from '@mantine/core';

export default function Contact() {
  return (
    <Flex
      bg="#FFFBF5"
      p="60px 155px"
      gap={120}
      // justify="space-between"
      direction="row"
      justify="center"
      sx={(theme) => ({
        [`@media (max-width: ${theme.breakpoints.mobile})`]: {
          padding: '100px 20px 24px 24px',
          display: 'block',
        },
        [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
          padding: '50px 30px',
          // gap: '10px',
        },
      })}
    >
      <Box pt={45}>
        <Text
          color="primary.0"
          size="sm"
          fw={700}
          mb={30}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              textAlign: 'center',
            },
          })}
        >
          KONTAKTIRAJTE NAS
        </Text>
        <Divider
          my="sm"
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
            },
          })}
        />
        <Flex
          direction="column"
          gap={40}
          mt={50}
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              gap: '20px',
            },
          })}
        >
          <Flex
            gap={10}
            justify="space-between"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '20px',
              },
            })}
          >
            <TextInput
              label="Ime"
              placeholder="Ime"
              size="sm"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
              color="primary.0"
              sx={(theme) => ({
                label: { color: theme.colors.primary[0] },
                input: {
                  border: `1px solid ${theme.colors.primary[1]} !important`,
                  '::placeholder': { color: 'transparent' },
                },
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  label: { display: 'none', color: theme.colors.primary[0] },
                  input: {
                    backgroundColor: '#EFEFEF',
                    '::placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    ':-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    '::-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    border: `1px solid ${theme.colors.primary[1]} !important`,
                  },
                },
                [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
                  input: {
                    backgroundColor: '#EFEFEF',
                    '::placeholder': { display: 'none', color: 'transparent' },
                    ':-ms-input-placeholder': {
                      display: 'none',
                      color: theme.colors.primary[0],
                      fontSize: '16px',
                      fontWeight: 400,
                    },
                    '::-ms-input-placeholder': {
                      display: 'none',
                      color: theme.colors.primary[0],
                      fontSize: '16px',
                      fontWeight: 400,
                    },
                  },
                },
              })}
            />
            <TextInput
              label="Prezime"
              size="sm"
              placeholder="Prezime"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
              sx={(theme) => ({
                label: { color: theme.colors.primary[0] },
                input: {
                  border: `1px solid ${theme.colors.primary[1]} !important`,
                  '::placeholder': { color: 'transparent' },
                },
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  label: { display: 'none' },
                  input: {
                    backgroundColor: '#EFEFEF',
                    '::placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    ':-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    '::-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                  },
                },
                [`@media (min-width: ${theme.breakpoints.mobile})`]: {
                  input: {
                    '::placeholder': { color: '#EFEFEF' },
                    ':-ms-input-placeholder': { color: '#EFEFEF' },
                    '::-ms-input-placeholder': { color: '#EFEFEF' },
                  },
                },
              })}
            />
          </Flex>
          <Flex
            gap={10}
            justify="space-between"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '20px',
              },
            })}
          >
            <TextInput
              label="Email"
              placeholder="Email"
              size="sm"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
              color="primary.0"
              sx={(theme) => ({
                label: { color: theme.colors.primary[0] },
                input: {
                  border: `1px solid ${theme.colors.primary[1]} !important`,
                  '::placeholder': { color: 'transparent' },
                },
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  label: { display: 'none' },
                  input: {
                    backgroundColor: '#EFEFEF',
                    '::placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    ':-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    '::-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                  },
                },
                [`@media (min-width: ${theme.breakpoints.mobile})`]: {
                  input: {
                    '::placeholder': { color: '#EFEFEF' },
                    ':-ms-input-placeholder': { color: '#EFEFEF' },
                    '::-ms-input-placeholder': { color: '#EFEFEF' },
                  },
                },
              })}
            />
            <TextInput
              label="Telefon"
              placeholder="Telefon"
              size="sm"
              variant="filled"
              labelProps={{ style: { color: 'primary.0' } }}
              sx={(theme) => ({
                input: {
                  border: `1px solid ${theme.colors.primary[1]} !important`,
                  '::placeholder': { color: 'transparent' },
                },
                label: { color: theme.colors.primary[0] },
                [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                  label: { display: 'none' },
                  input: {
                    backgroundColor: '#EFEFEF',
                    '::placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    ':-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                    '::-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                  },
                },
                [`@media (min-width: ${theme.breakpoints.mobile})`]: {
                  input: {
                    '::placeholder': { color: '#EFEFEF' },
                    ':-ms-input-placeholder': { color: '#EFEFEF' },
                    '::-ms-input-placeholder': { color: '#EFEFEF' },
                  },
                },
              })}
            />
          </Flex>
          <Textarea
            placeholder="Poruka..."
            label="Poruka"
            size="sm"
            variant="filled"
            labelProps={{ style: { color: 'primary.0' } }}
            sx={(theme) => ({
              textarea: {
                border: `1px solid ${theme.colors.primary[1]} !important`,
                '::placeholder': { color: 'transparent' },
              },
              label: { color: theme.colors.primary[0] },
              [`@media (min-width: ${theme.breakpoints.mobile})`]: {
                textArea: {
                  '::placeholder': { color: '#EFEFEF' },
                  ':-ms-input-placeholder': { color: '#EFEFEF' },
                  '::-ms-input-placeholder': { color: '#EFEFEF' },
                },
              },
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                label: { display: 'none' },
                textArea: {
                  '::placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                  ':-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                  '::-ms-input-placeholder': { color: theme.colors.primary[0], fontSize: '16px', fontWeight: 400 },
                },
              },
            })}
          />

          <Button
            variant="outline"
            color="primary.0"
            radius={20}
            p="13px 32px"
            fullWidth={false}
            maw="50%"
            size="s"
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                maxWidth: 'none',
                backgroundColor: '#EFEFEF;',
              },
            })}
          >
            POŠALJITE NAM UPIT
          </Button>
        </Flex>
      </Box>

      <Flex
        direction="column"
        bg="white"
        p="30px 40px"
        gap={30}
        sx={(theme) => ({
          [`@media (max-width: ${theme.breakpoints.smallerDesktop})`]: {
            display: 'none',
          },
        })}
      >
        <Box>
          <Text
            size={50}
            fw={700}
            color="primary.0"
            mb={50}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: '36px',
                textAlign: 'center',
              },
            })}
          >
            JAVITE SE
          </Text>
          <Divider my="sm" />
        </Box>
        <Box>
          <Text
            size={16}
            fw={500}
            color="primary.0"
            mb={50}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: '14px',
                textAlign: 'center',
              },
            })}
          >
            Gundulićeva 32, <br /> 31000 Osijek <br /> 099 8802 436
          </Text>
          <Divider my="sm" />
        </Box>
        <Box>
          <Text
            size={25}
            fw={700}
            color="primary.0"
            mb={50}
            sx={(theme) => ({
              [`@media (max-width: ${theme.breakpoints.mobile})`]: {
                fontSize: '14px',
                textAlign: 'center',
              },
            })}
          >
            HELLO@GALERIAARTA.COM
          </Text>
          <Divider my="sm" />
        </Box>
        <Box>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11173.759677117765!2d18.661928648430465!3d45.56159133126761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ce7af30e889cf%3A0x4dbc181b18c449f0!2sOsijek!5e0!3m2!1sen!2shr!4v1683062316283!5m2!1sen!2shr"
            loading="lazy"
            style={{ border: 'none' }}
          ></iframe>
        </Box>
      </Flex>
    </Flex>
  );
}
