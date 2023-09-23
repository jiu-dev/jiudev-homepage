import Head from 'next/head'
import AstroSkill from '../AstroSkill'
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

      <div className="flex items-center justify-center bg-firstplan w-full h-screen ">
        <div className="w-4/5 h-4/5 border-4 border-white text-white rounded-3xl bg-white/20 backdrop-blur-lg overflow-hidden">
          <div className="h-1/6 bg-indigo-300/40 whitespace-normal px-8">
            <Navbar path={router.asPath} />
          </div>
          <div className="h-4/6 px-8">{children}</div>
          <div className="h-1/6 bg-indigo-300/40 px-8">
            <Footer />
          </div>
        </div>
        <Copyright />
      </div>
    </main>
  )
}

export default Main
