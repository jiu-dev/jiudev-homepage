import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import { DarkModeProvider } from '../contexts/DarkModeProvider'
import Preview from './preview'

const Website = ({ Component, pageProps, router }) => {
  if (router.asPath === '/preview') return <Preview />
  console.log(router.asPath)
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
