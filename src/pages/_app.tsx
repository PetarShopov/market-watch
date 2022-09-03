import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { wrapper } from '../app/store'
import Header from '../components/shared/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default wrapper.withRedux(MyApp);