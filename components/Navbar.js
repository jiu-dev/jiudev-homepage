import UnderlinedLink from './UnderlinedLink'
import PlanetIcon from './icons/PlanetIcon'
import StarsIcon from './icons/StarsIcon'

const Navbar = props => {
  const { path } = props
  return (
    <div className="flex items-center justify-between h-full w-full">
      <div className="flex items-center justify-start gap-6">
        <PlanetIcon className="w-14" />
        <div className="flex flex-col">
          <a href="/" className="text-2xl text-white">
            Fareea Matahi
          </a>

          <span className="font-thin">Développeur React | NodeJS | NextJS</span>
        </div>
      </div>

      <ul className="flex gap-4 text-lg">
        <li>
          <UnderlinedLink href="/" path={path}>
            Accueil
          </UnderlinedLink>
        </li>
        <span className="self-center">&bull;</span>
        <li>
          <UnderlinedLink href="/portfolio" path={path}>
            Portfolio
          </UnderlinedLink>
        </li>
      </ul>
      <div className="w-10 h-10 p-1 border-4 border-white rounded-lg">
        <StarsIcon className="w-full " />
      </div>
    </div>
  )
}

export default Navbar
