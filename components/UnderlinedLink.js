import { motion } from 'framer-motion'
import NextLink from 'next/link'

const UnderlinedLink = ({ href, path, target, children, active, ...props }) => {
  const isActive = () => {
    if (path && href) return path === href

    return active ? true : false
  }

  const underlineVariants = {
    hover: { width: '100%' },
    rest: { width: 0 },
    active: { width: '100%' }
  }

  return (
    <motion.span
      className="relative py-2 hover:text-indigo-300"
      initial={isActive() ? 'active' : 'rest'}
      animate={isActive() ? 'active' : 'rest'}
      whileHover="hover"
    >
      <a
        as={NextLink}
        href={href}
        target={target}
        className="z-10 relative"
        {...props}
      >
        {children}
      </a>
      <motion.span
        className="rounded absolute h-1 bg-current left-1/2 bottom-0 transform -translate-x-1/2"
        variants={underlineVariants}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  )
}

export default UnderlinedLink
