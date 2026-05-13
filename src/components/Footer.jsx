import { motion } from 'framer-motion'
import Logo from './Logo.jsx'

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className='relative w-full border-t border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark/30 z-20'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='max-w-7xl mx-auto px-6 md:px-12 py-16'
      >
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* Brand Section */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Logo size='large' />
            </motion.div>
            <p className='font-body text-gray-600 dark:text-gray-400 leading-relaxed'>
              Full Stack Developer passionate about creating exceptional digital
              experiences. Let&apos;s build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <h3 className='font-title text-lg font-bold text-gray-900 dark:text-white'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {navLinks.map(link => (
                <motion.li
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <a
                    className='font-body text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors'
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className='space-y-4'>
            <h3 className='font-title text-lg font-bold text-gray-900 dark:text-white'>
              Connect With Me
            </h3>
            <div className='flex items-center gap-3'>
              {[
                {
                  icon: 'fab fa-github',
                  href: 'https://github.com/aminul-islam36',
                },
                {
                  icon: 'fab fa-linkedin-in',
                  href: 'https://www.linkedin.com/in/aminul-islam36',
                },
                {
                  icon: 'fas fa-envelope',
                  href: 'mailto:waminbroo@gmail.com',
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className='w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:border-primary dark:hover:border-primary transition-all'
                  href={social.href}
                  target={
                    social.icon === 'fas fa-envelope' ? '_self' : '_blank'
                  }
                  rel={
                    social.icon === 'fas fa-envelope'
                      ? ''
                      : 'noopener noreferrer'
                  }
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className='border-t border-gray-200 dark:border-white/10 pt-8'
        >
          {/* Bottom Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <motion.p
              variants={itemVariants}
              className='font-body text-sm text-gray-500 dark:text-gray-400'
            >
              © 2024 AMIN. All rights reserved. Built with ❤️ using React &
              Tailwind CSS
            </motion.p>

            <motion.div variants={itemVariants} className='flex gap-6 text-sm'>
              <motion.span
                whileHover={{ color: '#A855F7' }}
                className='font-body text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer'
              >
                Privacy Policy
              </motion.span>
              <motion.span
                whileHover={{ color: '#A855F7' }}
                className='font-body text-gray-500 dark:text-gray-400 hover:text-primary transition-colors cursor-pointer'
              >
                Terms of Service
              </motion.span>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50'
        ></motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
