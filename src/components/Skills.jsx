import { motion } from 'framer-motion'
import skillCategories from '../data/skills.json'

const Skills = () => {
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

  return (
    <section id='skills' className='py-10 scroll-mt-10'>
      {/* Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]'></div>
        <div className='absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]'></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='relative z-10'
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className='flex flex-col items-center text-center space-y-4 mb-12'
        >
          <h1 className='text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.02em]'>
            Core
            <span className=' ml-1.5 inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400'>
              Expertise
            </span>
          </h1>
          <p className='font-body text-slate-400 max-w-2xl text-lg leading-relaxed'>
            Specialized in building full-stack applications using the latest
            industry standards. From responsive frontend design to secure
            backend architecture, here is my toolkit.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'
        >
          {skillCategories.map(category => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className='flex flex-col gap-4 p-6 rounded-2xl bg-surface-dark/50 backdrop-blur-sm border border-surface-border hover:border-primary/50 transition-colors duration-300 group'
            >
              {/* Category Header */}
              <div className='flex items-center gap-3 mb-2'>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className='p-2 rounded-lg bg-primary/10 text-primary'
                >
                  <i className={category.icon}></i>
                </motion.div>
                <h3 className='text-white text-xl font-bold'>
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                {category.skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: '0 10px 25px rgba(168, 85, 247, 0.2)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className='flex flex-col items-center cursor-pointer justify-center gap-2 p-3 rounded-xl bg-[#2a2430] border border-surface-border hover:border-primary/40 hover:bg-[#322b3a] transition-all'
                  >
                    <motion.i
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`${skill.icon} ${skill.color} text-2xl`}
                    ></motion.i>
                    <span className='text-sm font-medium text-slate-200'>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
