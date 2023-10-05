import { motion } from 'framer-motion'
import Head from 'next/head'

// Define animation variants for the page transitions
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

// Layout component which applies a page transition effect and sets the page title
const Layout = ({ children, title }) => {
  // Construct the full title for the current page
  const t = `${title} - Fareea Matahi`
  return (
    // Using the motion component from framer-motion to handle page transitions
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      className="h-full overflow-scroll no-scrollbar"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {/* Conditionally render the title and meta details in the <head> of the page */}
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      {children}
    </motion.article>
  )
}

export default Layout
