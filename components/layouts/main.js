import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Copyright from '../Copyright'
import MessageBubble from '../MessageBubble'
import { useDarkMode } from '../../contexts/DarkModeProvider'
import Image from 'next/image'

const Main = ({ children, router }) => {
  const { isDarkMode } = useDarkMode()
  const backgroundImage = isDarkMode ? '/images/mars6.jpg' : '/images/space.jpg'
  return (
    <main className="font-mplus-rounded font-bold">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio de Matahi" />
        <meta name="author" content="Matahi Fareea" />
        <meta name="author" content="jiudev" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>Matahi Fareea - Portfolio</title>
      </Head>
      <div
        style={{ backgroundImage: backgroundImage }}
        className="w-full h-full absolute"
      ></div>
      <div className="hidden">
        <img src="/images/mars6.jpg" />
        <img src="/images/space.jpg" />
      </div>
      <Image
        src="/images/mars6.jpg"
        alt="space"
        layout="fill"
        objectFit="cover"
        className={isDarkMode ? 'block' : 'hidden'}
        quality={100}
      />
      <Image
        src="/images/space.jpg"
        alt="space"
        layout="fill"
        objectFit="cover"
        className={isDarkMode ? 'hidden' : 'block'}
        quality={100}
      />
      <div className="flex items-center justify-center dark:text-white text-white w-full h-screen sm:p-14 md:p-20 xl:p-32 ">
        <span className="absolute hidden whitespace-nowrap sm:block sm:top-7 md:top-10 xl:top-20  left-1/2 -translate-y-1/2 -translate-x-1/2">
          <MessageBubble message="Bonjour ! Je m'appelle Matahi, bienvenue sur mon Portfolio :)" />
        </span>
        <div className="h-full w-full flex flex-col dark:bg-black/20 bg-white/20 backdrop-blur-lg overflow-hidden border-4 dark:border-black border-white rounded-3xl">
          <div className="px-8 py-2 sm:h-1/6 dark:bg-black/40 bg-indigo-300/40 sm:py-4">
            <Navbar path={router.asPath} />
          </div>
          <div className="grow overflow-hidden relative sm:h-4/6">
            {children}
          </div>
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
