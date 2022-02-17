import '../styles/app.scss'
import AppProvider from '../utils/provider';

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
}

export default MyApp

/*
import AppProvider from '../utils/provider'

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
    </AppProvider>
}
*/