import { AppProps } from 'next/dist/next-server/lib/router/router'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(<Component />)
  return <Layout >
    <Component />
  </Layout>
  // return <Component {...pageProps} />
}

export default MyApp
