import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTheme } from '../hooks/useTheme.js'
import Logo from './Logo.jsx'

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }

    setIsScrolled(latest > 50)
  })

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'skills',
        'projects',
        'testimonials',
        'contact',
      ]
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScrollTo = elementId => {
    const element = document.getElementById(elementId.replace('#', ''))
    if (element) {
      const navbarHeight = 80 // Account for navbar height
      const elementPosition = element.offsetTop - navbarHeight

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200/20 dark:border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className='px-6 py-4 md:px-12 flex justify-between items-center w-full max-w-7xl mx-auto'>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => smoothScrollTo('#home')}
        >
          <Logo size='default' />
        </motion.div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-8 items-center'>
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -2 }}
              className={`relative font-body text-sm font-medium transition-all duration-200 cursor-pointer px-3 py-2 rounded-lg ${
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5'
              }`}
              onClick={() => smoothScrollTo(item.href)}
            >
              {item.name}
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  layoutId='activeTab'
                  className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full'
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full transition-all ${
              isScrolled
                ? 'bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20'
                : 'bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20'
            }`}
            onClick={toggleDarkMode}
          >
            <i
              className={`fas ${
                darkMode
                  ? 'fa-sun text-yellow-400'
                  : 'fa-moon text-gray-800 dark:text-gray-200'
              }`}
            ></i>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className='md:hidden flex items-center space-x-4'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-2 rounded-full transition-all ${
              isScrolled
                ? 'bg-gray-100 dark:bg-white/10'
                : 'bg-gray-200 dark:bg-white/10'
            }`}
            onClick={toggleDarkMode}
          >
            <i
              className={`fas ${
                darkMode
                  ? 'fa-sun text-yellow-400'
                  : 'fa-moon text-gray-800 dark:text-gray-200'
              }`}
            ></i>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='text-2xl text-gray-800 dark:text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.i
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}
            ></motion.i>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className='absolute top-full left-0 right-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-md border-t border-gray-200/20 dark:border-white/10 md:hidden shadow-lg'
        >
          <div className='px-6 py-4 space-y-4'>
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className={`relative block w-full text-left font-body text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => smoothScrollTo(item.href)}
              >
                {item.name}
                {/* Active indicator for mobile */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId='activeMobileTab'
                    className='absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full'
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
