import { Card, Flex, Group, Image, Text } from '@mantine/core';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalStore } from '../../../context';
import { useStyles } from './styles';
export default function EventCard({ data }: any) {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [quantity, setQuantity] = React.useState(1);
  const { onSelectEvent, onSetQuantity } = useGlobalStore();
  const dateFormat = React.useMemo(() => {
    const dateObject = dayjs(data.event_date);
    return `${dateObject.get('day') + 1}.${dateObject.get('month') + 1}`;
  }, [data.event_date]);

  const handleClick = () => {
    navigate(`/ticket`);
    onSelectEvent(data);
    onSetQuantity(quantity);
  };
  return (
    <Card
      shadow="sm"
      p={20}
      radius="md"
      withBorder
      maw={325}
    >
      {/* <Image
        src={eventImage.url}
        alt="Norway"
        maw={285}
        mah={150}
        height="150px"
        width="250px"
        sx={(theme) => ({
          // figure: { height: '80%' },
          [`@media (min-width: ${theme.breakpoints.mobile})`]: {
            height: '25%!important',
            figure: { height: '70%' },
            img: {
              height: '50px',
            },
          },
        })}
      /> */}

      <Group
        position="apart"
        mt="lg"
        mb="xs"
      >
        <Text
          className={classes.bolderText}
          weight={500}
        >
          {dateFormat}
        </Text>
        <Text className={classes.bolderText}>{data.price}€</Text>
      </Group>
      <Flex
        gap={10}
        direction="column"
      >
        <Text className={classes.bolderText}>{data.name}</Text>
        <Text
          className={classes.normaltext}
          size="sm"
          color="dimmed"
        >
          {data.location}
        </Text>
        <Text
          className={classes.normaltext}
          size="sm"
          color="dimmed"
        >
          {`Vrijeme : ${data.event_time}`}
        </Text>

        <Flex>
          <Image
            src="/assets/ph_paint-brush-fill.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/ph_paint-brush-fill.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/Shadow_brush.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/Shadow_brush.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
          <Image
            src="/assets/Shadow_brush.svg"
            alt="Norway"
            maw={26}
            mah={23}
          />
        </Flex>

        <div className="quantity-setter">
          <button
            className={classes.incrementBtn}
            disabled={quantity === 1}
            onClick={() => setQuantity(quantity - 1)}
            type="button"
          >
            -
          </button>
          <input
            type="number"
            id="quantity-input"
            min="1"
            max="10"
            value={quantity}
            name="quantity"
            readOnly
          />
          <input
            type="text"
            id="event"
            min="1"
            max="10"
            value={JSON.stringify(data)}
            name="event"
            readOnly
            style={{ visibility: 'hidden' }}
          />
          <button
            className={classes.incrementBtn}
            disabled={quantity === 10}
            onClick={() => setQuantity(quantity + 1)}
            type="button"
          >
            +
          </button>
        </div>

        <button
          className={classes.buyBtn}
          role="link"
          id="submit"
          type="submit"
          onClick={handleClick}
        >
          KUPI ODMAH
        </button>
      </Flex>
    </Card>
  );
}
