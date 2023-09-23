import Head from 'next/head'
import AstroSkill from '../components/AstroSkill'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import Layout from '../components/layouts/article'

const Home = () => {
  return (
    <Layout>
      <div className="flex h-full">
        <div className="w-1/2 h-full">
          <div className="flex items-center justify-center h-full">
            <Head>
              <title>Portfolio - Matahi</title>
            </Head>
            <div className="flex flex-col">
              <Heading>Portrait</Heading>
              <Paragraph>
                Matahi est un développeur full-stack basé à Bordeaux. En tant
                qu'autodidacte passionné, il se dédie à la création de solutions
                technologiques innovantes. Sa curiosité naturelle l'amène à
                toujours chercher à résoudre des problèmes complexes.{' '}
              </Paragraph>

              <Heading>Bio</Heading>
              <Paragraph>
                <div>
                  <span className="font-bold mr-4">1998</span>
                  Née à Papeete, Tahiti.
                </div>
                <div>
                  <span className="font-bold mr-4">2019</span>
                  Commence mon alternance chez Avanade France.
                </div>
                <div>
                  <span className="font-bold mr-4">2022</span>
                  Validation du cursus d'ingénierie informatique à l'EPSI
                  Bordeaux.
                </div>
                <div>
                  <span className="font-bold mr-4">2023</span>
                  Début de sa carrière de freelance.
                </div>
              </Paragraph>

              <Heading>I ♥</Heading>
              <Paragraph>Jiu-jitsu, Neovim, Skate et l'Art.</Paragraph>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <AstroSkill></AstroSkill>
        </div>
      </div>
    </Layout>
  )
}

export default Home
