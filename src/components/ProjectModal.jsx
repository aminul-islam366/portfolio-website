import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='absolute inset-0 bg-black/80 backdrop-blur-sm'
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-dark border border-surface-border rounded-2xl shadow-2xl'
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className='absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors'
            >
              <i className='fas fa-times'></i>
            </motion.button>

            {/* Project Image */}
            <div className='relative h-64 md:h-80 overflow-hidden rounded-t-2xl'>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover'
                />
              ) : (
                <div className='w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center'>
                  <i className={`${project.icon} text-6xl text-primary/50`}></i>
                </div>
              )}

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent'></div>

              {/* Category Badge */}
              <div className='absolute top-4 left-4'>
                <span className='px-3 py-1 rounded-full bg-black/70 text-sm text-white backdrop-blur-sm border border-white/20 font-medium'>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className='p-6 md:p-8'>
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className='font-title text-2xl md:text-3xl font-bold text-white mb-4'
              >
                {project.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='font-body text-slate-400 text-base leading-relaxed mb-6'
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className='mb-8'
              >
                <h3 className='font-title text-lg font-semibold text-white mb-3'>
                  Technologies Used
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className='px-3 py-1.5 capitalize rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20'
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Project Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='mb-8'
              >
                <h3 className='font-title text-lg font-semibold text-white mb-3'>
                  Key Features
                </h3>
                <ul className='space-y-2 text-slate-400'>
                  <li className='flex items-start gap-2'>
                    <i className='fas fa-check text-primary mt-1 text-sm'></i>
                    <span className='font-body'>
                      Responsive design for all devices
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='fas fa-check text-primary mt-1 text-sm'></i>
                    <span className='font-body'>
                      Modern UI/UX with smooth animations
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='fas fa-check text-primary mt-1 text-sm'></i>
                    <span className='font-body'>
                      Optimized performance and SEO
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <i className='fas fa-check text-primary mt-1 text-sm'></i>
                    <span className='font-body'>
                      Clean, maintainable code structure
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='flex flex-col sm:flex-row gap-4'
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.liveUrl || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30'
                >
                  <i className='fas fa-external-link-alt text-sm'></i>
                  <span>Visit Live Site</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.githubUrl || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-border/50 hover:bg-surface-border text-slate-300 hover:text-white font-semibold transition-all border border-surface-border hover:border-primary/30'
                >
                  <i className='fab fa-github text-sm'></i>
                  <span>View Source Code</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
