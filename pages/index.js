import Head from 'next/head'
import AstroSkill from '../components/AstroSkill'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Layout from '../components/layouts/article'

const Home = () => {
  return (
    <Layout>
      <div className="flex h-full pl-8">
        <div className="w-1/2 h-full">
          <div className="flex items-center justify-center h-full">
            <Head>
              <title>Portfolio - Matahi</title>
            </Head>
            <div className="flex flex-col">
              <Heading>Portrait</Heading>
              <Paragraph className="indent-4">
                Matahi est un développeur full-stack basé à Bordeaux. En tant
                qu&apos;autodidacte passionné, il se dédie à la création de
                <a href="/portfolio" className="font-bold text-amber-400">
                  {' '}
                  solutions technologiques innovantes
                </a>
                . Sa curiosité naturelle l&apos;amène à toujours chercher à
                résoudre des problèmes complexes.
              </Paragraph>

              <Heading>Bio</Heading>
              <Paragraph>
                <div className="pl-[3.4rem] -indent-[3.4rem]">
                  <span className="font-bold mr-[1.2rem]">1998</span>
                  Née à Papeete, Tahiti.
                </div>
                <div className="pl-[3.4rem] -indent-[3.4rem]">
                  <span className="font-bold mr-[1.2rem]">2019</span>
                  Commence mon alternance chez
                  <a
                    href="https://www.avanade.com/fr-fr"
                    target="_blank"
                    className="font-bold text-amber-400"
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
                    className="font-bold text-amber-400"
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
        <div className="w-1/2 h-full pr-6">
          <AstroSkill></AstroSkill>
        </div>
      </div>
    </Layout>
  )
}

export default Home
