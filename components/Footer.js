import GithubIcon from './icons/GithubIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import MaltIcon from './icons/MaltIcon'
const Footer = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className=" flex items-center justify-center gap-6">
        <GithubIcon className="w-10 h-10" />
        <MaltIcon className="w-10 h-10" />
        <LinkedInIcon className="w-10 h-10" />
      </div>
    </div>
  )
}

export default Footer
