import Head from 'next/head'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Copyright from '../Copyright'

const Main = ({ children, router }) => {
  return (
    <main className="font-mplus-rounded font-bold">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio de Matahi" />
        <meta name="author" content="Matahi Fareea" />
        <meta name="author" content="jiudev" />
        <title>Matahi Fareea - Portfolio</title>
      </Head>

      <div className="flex items-center justify-center bg-firstplan w-full h-screen sm:p-14 md:p-20 xl:p-40 ">
        <div className="h-full w-full flex flex-col text-white bg-white/20 backdrop-blur-lg overflow-hidden border-4 border-white rounded-3xl">
          <div className="px-8 py-4 sm:h-1/6 bg-indigo-300/40 sm:px-8">
            <Navbar path={router.asPath} />
          </div>
          <div className="grow sm:h-4/6 overflow-hidden">{children}</div>
          <div className="px-8 py-4 bg-indigo-300/40 sm:h-1/6 sm:px-8">
            <Footer />
          </div>
        </div>
        <div className="hidden bottom-6 sm:block sm:absolute">
          <Copyright />
        </div>
      </div>
    </main>
  )
}

export default Main
