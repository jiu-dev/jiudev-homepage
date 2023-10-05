import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Copyright from '../Copyright'
import MessageBubble from '../MessageBubble'
import { useDarkMode } from '../../contexts/DarkModeProvider'
import Image from 'next/image'

const Main = ({ children, router }) => {
  // Using the hook to check if dark mode is enabled
  const { isDarkMode } = useDarkMode()
  const backgroundImage = isDarkMode ? '/images/mars6.jpg' : '/images/space.jpg'

  const messageBubble = [
    { type: 'text', value: "Bonjour ! Je m'appelle Matahi, bienvenue sur " },
    {
      type: 'nextLink',
      value: 'mon Portfolio',
      url: '/'
    },
    { type: 'text', value: ', accéder au ' },
    {
      type: 'link',
      value: 'code source',
      url: 'https://github.com/jiu-dev/jiudev-homepage'
    },
    { type: 'text', value: ' !' }
  ]

  return (
    <main className="font-mplus-rounded font-bold">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio de Matahi" />
        <meta name="author" content="Matahi Fareea" />
        <meta name="author" content="jiudev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preload" as="image" href="/images/mars6.jpg" />
        <link rel="preload" as="image" href="/images/space.jpg" />
        <title>Matahi Fareea - Portfolio</title>
      </Head>
      <div
        style={{ backgroundImage: backgroundImage }}
        className="w-full h-full absolute"
      ></div>
      <div className="hidden">
        <Image alt="mars-bg" width="10" height="10" src="/images/mars6.jpg" />
        <Image alt="space-bg" width="10" height="10" src="/images/space.jpg" />
      </div>

      {/* Displaying the image "mars6.jpg" if dark mode is enabled */}
      <Image
        src="/images/mars6.jpg"
        alt="space"
        layout="fill"
        objectFit="cover"
        className={isDarkMode ? 'block' : 'hidden'}
        quality={100}
      />
      {/* Displaying the image "space.jpg" if light mode is enabled */}
      <Image
        src="/images/space.jpg"
        alt="space"
        layout="fill"
        objectFit="cover"
        className={isDarkMode ? 'hidden' : 'block'}
        quality={100}
      />

      {/* Main container for the site's content */}
      <div className="flex items-center justify-center dark:text-white text-white w-full h-screen sm:p-14 md:p-20 xl:p-32 ">
        <span className="absolute hidden whitespace-nowrap sm:block sm:top-7 md:top-10 xl:top-20  left-1/2 -translate-y-1/2 -translate-x-1/2">
          <MessageBubble message={messageBubble} />
        </span>
        {/* Main site structure */}
        <div className="h-full w-full flex flex-col dark:bg-black/20 bg-white/20 backdrop-blur-lg overflow-hidden border-4 dark:border-black border-white rounded-3xl">
          {/* Header */}
          <div className="px-8 py-2 sm:h-1/6 dark:bg-black/40 bg-indigo-300/40 sm:py-4">
            <Navbar path={router.asPath} />
          </div>

          {/* Body */}
          <div className="grow overflow-hidden relative sm:h-4/6">
            {children}
          </div>

          {/* Footer */}
          <div className="px-8 py-4 dark:bg-black/40 bg-indigo-300/40 sm:h-1/6 sm:px-8">
            <Footer />
          </div>
        </div>
        <div className="hidden bottom-6 whitespace-nowrap sm:block sm:absolute sm:bottom-7 md:bottom-10 xl:bottom-20 left-1/2 translate-y-1/2 -translate-x-1/2">
          <Copyright />
        </div>
      </div>
    </main>
  )
}

export default Main
