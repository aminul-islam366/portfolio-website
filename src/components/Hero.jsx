import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  const floatingIconVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id='home'
      className='py-10 flex flex-col md:flex-row items-center justify-center min-h-[70vh] gap-8 md:gap-0'
    >
      {/* Text Content */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='w-full md:w-1/2 space-y-3 md:space-y-3 text-center md:text-left order-2 md:order-1'
      >
        <motion.div variants={itemVariants}>
          <h1 className='capitalize font-title text-4xl mb-3 lg:mb-4 md:text-7xl font-bold tracking-tight italic text-gray-900 dark:text-white'>
            I&apos;m aminul islam
          </h1>
          <motion.h2
            variants={itemVariants}
            className='font-title text-3xl md:text-4xl font-bold text-gradient pb-2'
          >
            MERN stack Web developer
          </motion.h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className='font-body text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed'
        >
          Frontend Developer | React Developer | MERN Stack Learner | Building
          Scalable Web Applications
        </motion.p>

        <motion.div
          variants={itemVariants}
          className='flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center md:justify-start'
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='group relative inline-flex items-center justify-center px-12 py-5 font-body text-xl font-extrabold tracking-wide text-white transition-all duration-300 btn-gradient rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_45px_rgba(168,85,247,0.7)]'
            href='https://drive.google.com/file/d/1HvtSMWhOE_xqDQYLdySjYylsKyn-tqwn/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <span>Download Resume</span>
            <motion.i
              whileHover={{ y: 2 }}
              className='fas fa-download ml-3 transition-transform'
            ></motion.i>
            <div className='absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity rounded-full'></div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className='w-full md:w-1/2 flex justify-center items-center relative order-1 md:order-2'
      >
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-primary/20 rounded-full blur-[60px]'
        ></motion.div>

        <div className='relative w-[280px] h-[280px] md:w-[420px] md:h-[420px]'>
          {/* Main Profile Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className='w-full h-full rounded-full overflow-hidden border-4 border-white/10 dark:border-white/5 relative z-10 glow-effect bg-gray-800'
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.7 }}
              alt='AMIN working on laptop'
              className='w-full h-full object-cover opacity-90 cursor-pointer'
              src='https://i.ibb.co.com/m7vXnkv/amin.png'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay'></div>
          </motion.div>

          {/* Floating Tech Icons */}
          <motion.div
            variants={floatingIconVariants}
            animate='animate'
            className='absolute top-4 -left-4 md:top-10 md:-left-8 z-20'
          >
            <div className='w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center tech-icon-glow'>
              <i className='fab fa-js text-yellow-400 text-2xl md:text-3xl'></i>
            </div>
          </motion.div>

          <motion.div
            variants={floatingIconVariants}
            animate='animate'
            style={{ animationDelay: '1s' }}
            className='absolute top-0 right-0 md:-top-4 md:right-4 z-20'
          >
            <div className='w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center tech-icon-glow'>
              <i className='fab fa-html5 text-orange-500 text-xl md:text-2xl'></i>
            </div>
          </motion.div>

          <motion.div
            animate={{
              rotate: 360,
              y: [0, -5, 0],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
            className='absolute bottom-0 right-0 md:bottom-4 md:right-4 z-20'
          >
            <div className='w-14 h-14 md:w-20 md:h-20 rounded-full bg-gray-900 border border-white/10 flex items-center justify-center tech-icon-glow shadow-[0_0_20px_rgba(56,189,248,0.5)]'>
              <i className='fab fa-react text-sky-400 text-3xl md:text-4xl'></i>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
