import { Button, Card, Checkbox, Flex, NumberInput, Table, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import React from 'react';
import { useGlobalStore } from '../../context';
import { useStyles } from './styles';

export default function Ticket() {
  const [active, setActive] = React.useState(0);
  const [highestStepVisited, setHighestStepVisited] = React.useState(active);
  const [acceptConditions, setAcceptConditions] = React.useState(false);

  const { selectedEvent, quantity, onSetQuantity } = useGlobalStore();
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;
  const { classes } = useStyles();
  const rows = [selectedEvent].map((element: any) => (
    <tr key={element.name}>
      <td>{element.name}</td>
      <td>{element.price}</td>
      <td>
        <NumberInput
          name="quantity"
          value={quantity}
          onChange={onSetQuantity}
          maw={300}
          size="xs"
        />
      </td>
      <td>{element.price * quantity}</td>
    </tr>
  ));

  return (
    <form
      action="/api/create-checkout-session"
      method="POST"
    >
      <Flex
        direction="column"
        align="center"
        p={20}
        gap={30}
      >
        <Card
          shadow="sm"
          p={20}
          radius="md"
          className={classes.card}
        >
          <Table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.tableHead}>Proizvod</th>
                <th className={classes.tableHead}>Cijena</th>
                <th className={classes.tableHead}>Količina</th>
                <th className={classes.tableHead}>Ukupno</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Card>
        <Flex gap={30}>
          <Card
            shadow="sm"
            p={20}
            radius="md"
            className={classes.card}
          >
            <Card.Section>
              <Text
                size="sm"
                ta="center"
              >
                Plaćanje
              </Text>
            </Card.Section>
            <Flex
              direction="column"
              className={classes.checkoutWrapper}
            >
              <Flex gap="10px"></Flex>
              {/* <Checkbox label="Trebate R1 račun" /> */}
              {/* <Select/> */}
              <Flex gap="10px">
                <TextInput
                  label="Ime"
                  name="first_name"
                  withAsterisk
                  size="xs"
                  style={{ flexGrow: 1 }}
                  {...form.getInputProps('first_name')}
                />
                <TextInput
                  label="Prezime"
                  name="last_name"
                  withAsterisk
                  size="xs"
                  style={{ flexGrow: 1 }}
                  {...form.getInputProps('last_name')}
                />
              </Flex>
              <Flex gap="10px">
                <TextInput
                  label="Ulica"
                  name="street_name"
                  withAsterisk
                  size="xs"
                  style={{ flexGrow: 1 }}
                  {...form.getInputProps('street_name')}
                />
                <TextInput
                  label="Grad"
                  name="town"
                  withAsterisk
                  size="xs"
                  style={{ flexGrow: 1 }}
                  {...form.getInputProps('town')}
                />
              </Flex>

              <TextInput
                label="Županija"
                name="region"
                size="xs"
                miw={400}
                {...form.getInputProps('region')}
              />
              <NumberInput
                label="Poštanski broj"
                withAsterisk
                name="postal_code"
                size="xs"
                miw={400}
                {...form.getInputProps('postal_code')}
              />
              <TextInput
                label="Telefonski broj"
                // required
                name="phone_number"
                size="xs"
                miw={400}
                {...form.getInputProps('phone_number')}
              />
              <TextInput
                label="E-mail adresa"
                name="email"
                size="xs"
                miw={400}
                withAsterisk
                {...form.getInputProps('email')}
                // required
              />
            </Flex>
          </Card>

          <Flex
            // shadow="sm"
            // radius="md"
            direction="column"
            p={20}
            className={classes.card}
          >
            <Card.Section>
              <Text
                size="sm"
                ta="center"
              >
                Vaša narudžba
              </Text>
            </Card.Section>
            <Flex
              direction="column"
              gap={10}
              style={{ flexGrow: '1' }}
            >
              <Text
                size="sm"
                className={classes.detailText}
              >
                <strong>Naziv proizvoda:</strong> Radionica test
              </Text>
              <Text
                size="sm"
                className={classes.detailText}
              >
                <strong>Datum: </strong> 12.8.1995
              </Text>
              <Text
                size="sm"
                className={classes.detailText}
              >
                <strong>Vrijeme: </strong> 20:00
              </Text>
              <Text
                size="sm"
                className={classes.detailText}
              >
                <strong>Količina:</strong> 2
              </Text>
              <Checkbox
                label="Prihvatio sam i slažem se s uvjetima korištenja i odredbama web stranice"
                size="xs"
                value={acceptConditions as any}
                onChange={(e) => setAcceptConditions(e.target.checked)}
                mt={30}
              />
            </Flex>

            <Button
              color="primary.0"
              variant="filled"
              type="submit"
              disabled={!acceptConditions}
              style={{ justifySelf: 'end' }}
            >
              Plaćanje
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
}
