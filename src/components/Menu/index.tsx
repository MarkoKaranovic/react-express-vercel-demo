import { Anchor, Flex, Image, Modal } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Menu({ opened, close }: any) {
  const navigate = useNavigate();

  const handleClick = React.useCallback(
    (path: any) => {
      navigate(path);
      close();
    },
    [close, navigate],
  );
  return (
    <Modal.Root
      opened={opened}
      onClose={close}
      fullScreen
      styles={{
        inner: {
          width: '100% !important',
        },
      }}
    >
      <Modal.Overlay />
      <Modal.Content
        bg="#084453"
        h="100%"
      >
        <Modal.Header bg="#084453">
          <Image
            src="/assets/close.svg"
            onClick={close}
            maw={25}
            mah={25}
            pt={46}
            pl={46}
            pb={50}
          />
        </Modal.Header>
        <Modal.Body p={50}>
          <Flex
            direction="column"
            gap={20}
          >
            <Flex gap={20}>
              <Flex
                direction="column"
                gap={20}
              >
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('/')}
                >
                  POČETNA
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('about')}
                >
                  O NAMA
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('workshops')}
                >
                  REZERVIRAJ
                </Anchor>
              </Flex>
              <Flex
                direction="column"
                gap={20}
              >
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('workshops')}
                >
                  RADIONICE
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('gallery')}
                >
                  GALERIJA
                </Anchor>
                <Anchor
                  color="white"
                  size={20}
                  fw={500}
                  onClick={() => handleClick('contact')}
                >
                  KONTAKT
                </Anchor>
              </Flex>
            </Flex>
          </Flex>
          <Flex>{/* <Avatar src="/assets/socials/instagram-small.svg" /> */}</Flex>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
