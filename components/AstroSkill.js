import NextJSIcon from './icons/NextJSIcon'
import NodeJSIcon from './icons/NodeJSIcon'
import ReactIcon from './icons/ReactIcon'
import TailwindIcon from './icons/TailwindIcon'

const Bubble = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={`${props.className} rounded-full bg-indigo-300/60 hover:bg-indigo-300/80 backdrop-blur-lg border-4 border-white absolute`}
    >
      {children}
    </div>
  )
}

const AstroSkill = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <img src="images/astro.png" className="w-52 floating z-10" />
      <Bubble className="w-48 h-48 mt-10 ml-72 mb-28">
        <NodeJSIcon className="w-full mx-auto text-white" />
      </Bubble>
      <Bubble className="w-40 h-40 mt-56 ml-56">
        <NextJSIcon className="w-full mx-auto text-white" />
      </Bubble>
      <Bubble className="w-44 h-44 mt-10 mb-56">
        <ReactIcon className="w-full mx-auto text-white" />
      </Bubble>
      <Bubble className="w-36 h-36 mt-10 mr-32">
        <TailwindIcon className="w-full mx-auto text-white" />
      </Bubble>
    </div>
  )
}

export default AstroSkill
