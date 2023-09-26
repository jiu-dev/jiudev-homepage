import Head from 'next/head'
import AstroSkill from '../components/AstroSkill'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Layout from '../components/layouts/article'
import Link from 'next/link'
const Home = () => {
  return (
    <Layout>
      <div className="flex h-full px-4 sm:pr-0 sm:pl-8">
        <div className="w-full h-full flex items-center relative sm:w-1/2 z-10">
          <div className="rounded-3xl p-4 sm:p-0 overflow-scroll no-scrollbar sm:flex sm:items-center sm:justify-center sm:h-full">
            <Head>
              <title>Portfolio - Matahi</title>
            </Head>
            <div className="flex flex-col z-20">
              <Heading>Portrait</Heading>
              <Paragraph className="indent-4">
                Matahi est un développeur full-stack basé à Bordeaux. En tant
                qu&apos;autodidacte passionné, il se dédie à la création de
                <Link href="/portfolio" className="link">
                  {' '}
                  solutions technologiques innovantes
                </Link>
                . Sa curiosité naturelle l&apos;amène à toujours chercher à
                résoudre des problèmes complexes.
              </Paragraph>

              <Heading>Bio</Heading>
              <Paragraph>
                <div className="pl-[3.4rem] -indent-[3.4rem]">
                  <span className="font-bold mr-[1.2rem]">1998</span>
                  Né à Papeete, Tahiti.
                </div>
                <div className="pl-[3.4rem] -indent-[3.4rem]">
                  <span className="font-bold mr-[1.2rem]">2019</span>
                  Commence son alternance chez
                  <a
                    href="https://www.avanade.com/fr-fr"
                    target="_blank"
                    className="link"
                  >
                    {' '}
                    Avanade France
                  </a>
                  .
                </div>
                <div className="pl-[3.4rem] -indent-[3.4rem]">
                  <span className="font-bold mr-[1.2rem]">2022</span>
                  Validation du cursus d&apos;ingénierie informatique à l&apos;
                  <a
                    href="https://www.epsi.fr/campus/campus-de-bordeaux/"
                    target="_blank"
                    className="link"
                  >
                    EPSI Bordeaux
                  </a>
                  .
                </div>
                <div className="pl-[3.4rem] -indent-[3.4rem]">
                  <span className="font-bold mr-[1.2rem]">2023</span>
                  Début de sa carrière de freelance.
                </div>
              </Paragraph>

              <Heading>I &hearts;</Heading>
              <Paragraph>Jiu-jitsu, Neovim, Skate et l&apos;Art.</Paragraph>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-0 right-0 pb-5 pr-5 sm:p-0 sm:top-1/2 sm:-translate-y-1/2 sm:right-0 sm:w-1/2 sm:h-full overflow-hidden">
          <AstroSkill></AstroSkill>
        </div>
      </div>
    </Layout>
  )
}

export default Home
