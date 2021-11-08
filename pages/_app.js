import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Next.Js Sample Website</title>
      <meta name="description" content="A NEXT.JS Sample website" />
      <link rel="icon" href="/paypal.png" />
    </Head>
    <div style={{overflowX: "hidden"}}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
    </>
  )
}

export default MyApp
