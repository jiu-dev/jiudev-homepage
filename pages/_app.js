import Layout from '../components/layouts/main'
import '../styles/globals.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default Website
