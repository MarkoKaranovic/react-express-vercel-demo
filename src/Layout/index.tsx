import { Box, Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Layout() {
  return (
    <Container
      // style={{ border: '1px solid red' }}
      // maw={1440}
      maw="none"
      style={{ overflow: 'hidden' }}
      p={0}
    >
      <Navigation />
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
}
