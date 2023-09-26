import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import { DarkModeProvider } from '../contexts/DarkModeProvider'

const Website = ({ Component, pageProps, router }) => {
  return (
    <DarkModeProvider>
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
    </DarkModeProvider>
  )
}

export default Website
