import { Burger, Button, Flex, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { useNavigate } from 'react-router-dom';
import { Service } from '../../Service';
import Menu from '../Menu';
import { useStyles } from './styles';
export default function Navigation() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Flex
        justify="space-around"
        align="center"
        className={classes.navigationContainer}
      >
        <Burger
          size="md"
          color="white"
          w="60px"
          h="60px"
          bg="#084453"
          className={classes.burger}
          onClick={open}
          opened={opened}
        />
        <Image
          src="/assets/logo-white-cropped.svg"
          width="15vw"
          p={10}
          onClick={() => navigate('/')}
          sx={(theme) => ({
            cursor: 'pointer',
            [`@media (max-width: ${theme.breakpoints.mobile})`]: {
              display: 'none',
            },
          })}
        />
        <Button
          bg={'#FFFBF5'}
          variant="subtle"
          color="dark"
          ff="Roboto"
          onClick={() => navigate('/about')}
          className={classes.navigationItem}
        >
          O NAMA
        </Button>

        <Button
          variant="subtle"
          color="dark"
          ff="Roboto"
          p={5}
          bg={'#FFFBF5'}
          onClick={() => navigate('/gallery')}
          className={classes.navigationItem}
        >
          GALERIJA
        </Button>
        <Button
          variant="subtle"
          color="dark"
          ff="Roboto"
          p={5}
          bg={'#FFFBF5'}
          onClick={() => navigate('/workshops')}
          onMouseEnter={() => {
            const query = `{
  workshopsEventsCollection {
    items {
      title
      eventImage{
        url
      }
      date
      price
      difficulty
      location
    }
  }
}`;
            Service.Client.prefetchQuery({
              queryKey: ['events'],
              queryFn: async () => await Service.instance.post('5xvum32zltkp/', JSON.stringify({ query })),
            });
          }}
          className={classes.navigationItem}
        >
          RADIONICE
        </Button>
        <Button
          variant="subtle"
          color="dark"
          ff="Roboto"
          p={5}
          bg={'#FFFBF5'}
          onClick={() => navigate('/contact')}
          className={classes.navigationItem}
        >
          KONTAKT
        </Button>
        <button
          onClick={() => navigate('/workshops')}
          className={classes.navigationItemReservation}
        >
          REZERVIRAJ KARTU
        </button>

        <Menu
          opened={opened}
          close={close}
        />
      </Flex>
    </>
  );
}
