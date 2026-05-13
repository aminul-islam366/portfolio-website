import { motion } from 'framer-motion'

const Logo = ({ size = 'default', className = '' }) => {
  const sizeClasses = {
    small: 'text-xl',
    default: 'text-2xl',
    large: 'text-3xl',
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const bracketVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center font-title font-bold tracking-tight cursor-pointer ${sizeClasses[size]} ${className}`}
    >
      {/* Opening Bracket */}
      <motion.span variants={bracketVariants} className='text-primary mr-1'>
        &lt;
      </motion.span>

      {/* Name Letters */}
      <div className='flex items-center'>
        {['A', 'M', 'I', 'N'].map((letter, index) => (
          <motion.span
            key={letter}
            variants={letterVariants}
            transition={{ delay: index * 0.1 }}
            className='relative'
          >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary'>
              {letter}
            </span>
            {/* Subtle glow effect */}
            <span className='absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary blur-sm opacity-50'>
              {letter}
            </span>
          </motion.span>
        ))}
      </div>

      {/* Closing Bracket with Slash */}
      <motion.span variants={bracketVariants} className='text-secondary ml-1'>
        /&gt;
      </motion.span>

      {/* Animated Dot */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='w-2 h-2 bg-primary rounded-full ml-2'
      />
    </motion.div>
  )
}

export default Logo
