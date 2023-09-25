import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import '../styles/globals.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <Layout router={router}>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default Website
