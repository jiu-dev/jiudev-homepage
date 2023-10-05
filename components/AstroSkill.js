import Image from 'next/image'
import NextJSIcon from './icons/NextJSIcon'
import NodeJSIcon from './icons/NodeJSIcon'
import ReactIcon from './icons/ReactIcon'
import TailwindIcon from './icons/TailwindIcon'

const Bubble = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} rounded-full dark:bg-amber-500/60 dark:hover:bg-amber-500/80 bg-indigo-300/60 hover:bg-indigo-300/80 backdrop-blur-lg border-4 dark:border-black border-white absolute`}
    >
      {children}
    </div>
  )
}

// Displaying astronaut image on the home page
const AstroSkill = () => {
  return (
    <div className="sm:h-full sm:flex sm:justify-center sm:items-center">
      <Image
        alt="astronaute"
        src="/images/astro.png"
        width="170"
        height="170"
        className="w-36 sm:w-52 floating -z-10 sm:z-10"
      />
      <Bubble className="hidden sm:block sm:w-48 sm:h-48 sm:mt-10 sm:ml-72 sm:mb-28">
        <NodeJSIcon className="w-full mx-auto dark:text-black text-white" />
      </Bubble>
      <Bubble className="hidden sm:block sm:w-40 sm:h-40 sm:mt-56 sm:ml-56">
        <NextJSIcon className="w-full mx-auto dark:text-black text-white" />
      </Bubble>
      <Bubble className="hidden sm:block sm:w-44 sm:h-44 sm:mt-10 sm:mb-56">
        <ReactIcon className="w-full mx-auto dark:text-black text-white" />
      </Bubble>
      <Bubble className="hidden sm:block sm:w-36 sm:h-36 sm:mt-10 sm:mr-32">
        <TailwindIcon className="w-full mx-auto dark:text-black text-white" />
      </Bubble>
    </div>
  )
}

export default AstroSkill
