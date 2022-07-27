import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import AuthProvider from '../components/provider/AuthProvider';
import { SnackbarProvider } from 'notistack';
import CustomComponent from '../components/snackbar/CustomComponent';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp
