import { motion } from 'framer-motion'
import Link from 'next/link'

// UnderlinedLink component which shows an animated underline when hovered
const UnderlinedLink = ({ href, path, target, children, active, ...props }) => {
  // Determine if the current link is the active link
  const isActive = () => {
    if (path && href) return path === href

    return active ? true : false
  }

  // Animation variants for the underline
  const underlineVariants = {
    hover: { width: '100%' },
    rest: { width: 0 },
    active: { width: '100%' }
  }

  return (
    // Parent motion span for handling animations
    <motion.span
      className="relative py-2 hover:text-white dark:hover:text-white"
      initial={isActive() ? 'active' : 'rest'}
      animate={isActive() ? 'active' : 'rest'}
      whileHover="hover"
    >
      {/* The actual link */}
      <Link href={href} target={target} className="z-10 relative" {...props}>
        {children}
      </Link>
      {/* Animated underline for the link */}
      <motion.span
        className=" absolute h-1 bg-current left-1/2 bottom-0 transform -translate-x-1/2"
        variants={underlineVariants}
        transition={{ duration: 0.3 }}
      />
    </motion.span>
  )
}

export default UnderlinedLink
