import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Alert from '../components/Alert/alert';
import Layout from '../components/Layout/Layout';
import { loadUser } from '../store/actions/register.actions';
import store from '../store/store';
import GlobalStyle from '../theme/globalStyles';
import theme from '../theme/theme';
import setAuthToken from '../utils/setAuthToken';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAuthToken(localStorage.getItem('token'));
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Alert />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>

  )
}

export default MyApp
