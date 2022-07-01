import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { store } from 'src/redux/store';
import AuthProvider from '../components/provider/AuthProvider';
import { SnackbarProvider } from 'notistack';
import CustomComponent from 'src/components/snackbar/CustomComponent';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
