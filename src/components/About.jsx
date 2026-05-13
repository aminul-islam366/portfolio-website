import { motion } from 'framer-motion'

const About = () => {
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

  const stats = [
    { number: '01+', label: 'Years Experience', color: 'text-primary' },
    { number: '10+', label: 'Projects Completed', color: 'text-accent-pink' },
    { number: '15+', label: 'Happy Clients', color: 'text-blue-500' },
  ]

  return (
    <section id='about' className='scroll-mt-10 py-10'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='max-w-7xl mx-auto w-full'
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className='text-center mb-16 relative'
        >
          <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-2'
          >
            About{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink'>
              Me
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className='w-24 h-1 bg-gradient-to-r from-primary to-accent-pink mx-auto rounded-full'
          ></motion.div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-primary/20 rounded-full blur-[80px] -z-10'></div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className='lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-1'
          >
            <div className='relative w-full h-full'>
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='w-full h-full border-2 border-gray-300 rounded-md'
              >
                <img
                  alt='AMIN working on code'
                  className='w-full h-full object-cover rounded-md'
                  src='https://i.ibb.co.com/nN2dqRDx/unnamed.jpg'
                />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className='absolute -top-4 right-0 md:right-4 z-30 bg-card-dark border border-white/10 p-3 rounded-xl shadow-lg'
              >
                <i className='fas fa-lightbulb text-yellow-400 text-3xl'></i>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className='absolute -bottom-8 left-0 md:left-4 z-30 bg-card-dark border border-white/10 p-3 rounded-xl shadow-lg'
              >
                <i className='fas fa-code text-blue-400 text-3xl'></i>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className='lg:col-span-7 order-2 lg:order-2'
          >
            <motion.h3
              variants={itemVariants}
              className='text-2xl md:text-3xl font-display font-semibold text-gray-800 dark:text-gray-100'
            >
              I&apos;m a MERN Stack Developer 🧑‍💻{' '}
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className='space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg'
            >
              <p>
                I&apos;m a MERN stake web developer with hands-on experience
                building user-friendly web applications with react,
                next.js,mongodb, Express, node.js. I focus on building clean and
                sustainable code for growing your project.
              </p>
              <p>
                I enjoy solving real world problems and always trying to learn
                new technologies . I love to improve my skills every day
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className='grid grid-cols-2 md:grid-cols-3 gap-4 pt-6'
            >
              {stats.map(stat => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className='p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary/50 transition-colors group'
                >
                  <span
                    className={`block text-3xl font-bold ${stat.color} mb-1`}
                  >
                    {stat.number}
                  </span>
                  <span className='text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'>
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className='pt-6 flex flex-wrap gap-4'
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='inline-flex items-center justify-center px-6 py-3 text-white font-medium bg-gradient-to-r from-primary to-accent-pink rounded-full hover:shadow-lg hover:shadow-primary/40 transition-all duration-300'
                href='https://drive.google.com/file/d/1YnPLdYig2IM1hXSvDM29QqpHRBe7nQ1s/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                <span>Download CV</span>
                <i className='fas fa-download ml-2 text-sm'></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
