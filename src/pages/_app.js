import '../styles/globals.scss';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <Component {...pageProps} />
    </SnackbarProvider>
  );
}

export default MyApp
