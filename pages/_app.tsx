import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '../styles/globalStyles'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>My Blog</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
