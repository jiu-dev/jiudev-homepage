import Image from 'next/image'
import Skill from '../components/Skill'
import { SKILL_LEVELS } from '../lib/enums'
import Layout from '../components/layouts/article'
import ReactIcon from '../components/icons/ReactIcon'
import NodeJSIcon from '../components/icons/NodeJSIcon'
import NextJSIcon from '../components/icons/NextJSIcon'
import TailwindIcon from '../components/icons/TailwindIcon'
import MongoDBIcon from '../components/icons/MongoDBIcon'
import Heading from '../components/Heading'

const Skills = () => {
  const renderAstroMeditation = () => (
    <>
      <div className="relative w-[136px] h-32 floating">
        <Image
          alt="astro-meditation"
          src="/images/astro-meditation.png"
          className="w-full"
          width="150"
          height="150"
        />
        <div className="w-10 border-2 dark:border-black border-white rounded-full dark:bg-amber-500/40 bg-indigo-300/40  absolute block top-12 -left-12">
          <NodeJSIcon className="w-full dark:text-black" />
        </div>
        <div className="w-10 border-2 dark:border-black  border-white rounded-full dark:bg-amber-500/40 bg-indigo-300/40  absolute -top-6 -left-6">
          <NextJSIcon className="w-full dark:text-black" />
        </div>
        <div className="w-10 border-2 dark:border-black  border-white rounded-full dark:bg-amber-500/40 bg-indigo-300/40  absolute -top-12 left-12">
          <ReactIcon className="w-full dark:text-black" />
        </div>
        <div className="w-10 border-2 dark:border-black  border-white rounded-full dark:bg-amber-500/40 bg-indigo-300/40  absolute -top-6 -right-6">
          <MongoDBIcon className="w-full dark:text-black" />
        </div>
        <div className="w-10 border-2 dark:border-black  border-white rounded-full dark:bg-amber-500/40 bg-indigo-300/40  absolute block top-12 -right-12">
          <TailwindIcon className="w-full dark:text-black" />
        </div>
      </div>
    </>
  )
  return (
    <Layout>
      <div className="h-full w-full flex">
        <div className="flex justify-center lg:items-center w-full sm:w-1/2 lg:w-full h-full flex-col lg:flex-row">
          <div className="flex-none w-full lg:w-auto lg:grow px-8 pt-8 pb-4 lg:p-8 flex flex-col gap-4">
            <span className="text-3xl mb-4 text-center sm:hidden block">
              Mes compétences
            </span>
            <Skill className="" level={SKILL_LEVELS.EXPERT}>
              React
            </Skill>
            <Skill className="" level={SKILL_LEVELS.INTERMEDIATE}>
              NextJS
            </Skill>
            <Skill className="" level={SKILL_LEVELS.ADVANCED}>
              NodeJS
            </Skill>
          </div>
          <div className="hidden lg:flex lg:order-none flex-none items-center justify-center w-64 relative">
            {renderAstroMeditation()}
          </div>
          <div className="flex-none w-full lg:w-auto lg:grow px-8 pt-0 pb-8 lg:p-8 flex flex-col gap-4">
            <Skill className="" level={SKILL_LEVELS.EXPERT}>
              Tailwind
            </Skill>
            <Skill className="" level={SKILL_LEVELS.INTERMEDIATE}>
              ASP.Net
            </Skill>
            <Skill className="" level={SKILL_LEVELS.INTERMEDIATE}>
              Azure Devops
            </Skill>
          </div>
        </div>
        <div className="hidden sm:flex lg:hidden w-1/2 items-center justify-center">
          {renderAstroMeditation()}
        </div>
      </div>
    </Layout>
  )
}

export default Skills
