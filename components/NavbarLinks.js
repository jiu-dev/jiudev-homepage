import UnderlinedLink from './UnderlinedLink'

const NavbarLinks = ({ path }) => {
  return (
    <ul className="inline-flex gap-4">
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
  )
}

export default NavbarLinks
