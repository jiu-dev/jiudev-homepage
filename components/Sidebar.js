import NextLink from 'next/link'
const navigation = [
  { name: 'How I make my portfolio', href: '#', current: true },
  { name: '', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Documents', href: '#', current: false },
  { name: 'Reports', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  return (
    <a
      as={NextLink}
      href={href}
      className={classNames(
        active
          ? 'font-bold text-white'
          : 'font-thin text-white hover:underline',
        'flex items-center px-3 py-1 rounded-md'
      )}
      target={target}
      {...props}
    >
      <span className="truncate">{children}</span>
    </a>
  )
}

const Sidebar = props => {
  const { path } = props
  return (
    <nav className="space-y-1 mt-16" aria-label="Sidebar">
      <h3 className="text-xl mt-3 mb-6">Mes projets</h3>
      <div className="corner-tl p-8">
        <LinkItem href="/portfolio" path={path}>
          Portfolio
        </LinkItem>
        <LinkItem href="/cvflow" path={path}>
          CvFlow
        </LinkItem>
        <LinkItem href="/monitoring" path={path}>
          SBM Offshore Monitoring
        </LinkItem>
        <LinkItem href="/fpks" path={path}>
          Site web pour association
        </LinkItem>
        <LinkItem href="/vanira" path={path}>
          E-Shop de Vanille
        </LinkItem>
      </div>
    </nav>
  )
}

export default Sidebar
