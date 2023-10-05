import Copyright from './Copyright'
import DownloadResume from './DownloadResume'
import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import MaltIcon from './icons/MaltIcon'

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-full">
      {/* Container for social media icons */}
      <div className=" flex items-center justify-center gap-6">
        {/* Link to Github profile with associated icon */}
        <a href="https://github.com/jiu-dev" target="_blank">
          <GithubIcon className="w-10 h-10 dark:hover:text-amber-500 hover:text-indigo-300" />
        </a>
        {/* Link to Malt profile with associated icon */}
        <a href="https://www.malt.fr/profile/matahifareea" target="_blank">
          <MaltIcon className="w-10 h-10 dark:hover:text-amber-500 hover:text-indigo-300" />
        </a>
        {/* Link to LinkedIn profile with associated icon */}
        <a
          href="https://www.linkedin.com/in/matahi-fareea-ab6421292/"
          target="_blank"
        >
          <LinkedInIcon className="w-10 h-10 dark:hover:text-amber-500 hover:text-indigo-300" />
        </a>
        {/* Mobile-specific download resume button */}
        <div className="block md:hidden">
          <DownloadResume />
        </div>
      </div>
      {/* Desktop-specific download resume button positioned to the right */}
      <div className="absolute hidden md:block right-10 dark:hover:text-amber-500 hover:text-indigo-300">
        <DownloadResume />
      </div>
      {/* Mobile-specific copyright text */}
      <div className="text-xs sm:hidden">
        <Copyright></Copyright>
      </div>
    </div>
  )
}

export default Footer
