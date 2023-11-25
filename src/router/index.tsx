import { MantineProvider } from '@mantine/core';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Gallery from '../Pages/Gallery';
import Gift from '../Pages/Gift';
import Main from '../Pages/Main';
import Reservation from '../Pages/Reservation';
import Ticket from '../Pages/Ticket';
import Service from '../Pages/Workshops';
import Success from '../components/Success/Success';
import { Provider } from '../context';
import { galeriaArtaTheme } from '../theme/theme';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MantineProvider theme={galeriaArtaTheme}>
        <Provider>
          <Layout />
        </Provider>
      </MantineProvider>
    ),

    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'gift',
        element: <Gift />,
      },
      {
        path: 'reservation',
        element: <Reservation />,
      },
      {
        path: 'workshops',
        element: <Service />,
      },
      {
        path: 'ticket',
        element: <Ticket />,
      },
      {
        path: 'successPayment',
        element: <Success />,
      },
    ],
  },
]);
