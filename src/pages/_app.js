import '../styles/globals.scss';
import { SnackbarProvider } from 'notistack';
import { SessionProvider } from 'next-auth/react'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }, 
}) {
  return (
    <SessionProvider session={session}>
      <SnackbarProvider>
        <Component {...pageProps} />
      </SnackbarProvider>
    </SessionProvider>
  );
}

export default MyApp
