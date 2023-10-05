import { AnimatePresence } from 'framer-motion'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import { DarkModeProvider } from '../contexts/DarkModeProvider'
import Preview from './preview'

const Website = ({ Component, pageProps, router }) => {
  // If the current path is `/preview`, only render the `Preview` component
  if (router.asPath === '/preview') return <Preview />

  return (
    // Wrap the entire app inside the DarkModeProvider to make dark mode functionality available everywhere
    <DarkModeProvider>
      <Layout router={router}>
        {/* AnimatePresence is a component from Framer Motion that allows animations for components as they mount and unmount */}
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          {/* Dynamically render the current page component, and add a unique key for Framer Motion to detect changes */}
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </DarkModeProvider>
  )
}

export default Website
