import Copyright from './Copyright'
import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import MaltIcon from './icons/MaltIcon'
const Footer = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      <div className=" flex items-center justify-center gap-6">
        <a href="https://github.com/jiu-dev" target="_blank">
          <GithubIcon className="w-10 h-10 hover:text-indigo-300" />
        </a>
        <a href="https://www.malt.fr/profile/matahifareea" target="_blank">
          <MaltIcon className="w-10 h-10 hover:text-indigo-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/matahi-fareea-ab6421292/"
          target="_blank"
        >
          <LinkedInIcon className="w-10 h-10 hover:text-indigo-300" />
        </a>
      </div>
      <div className="text-xs sm:hidden">
        <Copyright></Copyright>
      </div>
    </div>
  )
}

export default Footer
