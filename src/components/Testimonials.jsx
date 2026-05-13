import { motion } from 'framer-motion'

const Testimonials = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  }

  const testimonials = [
    {
      quote:
        'AMIN transformed our outdated platform into a sleek, high-performing web application. Her technical skills are top-notch, but her design intuition is what truly sets her apart.',
      name: 'Alex Lewis',
      position: 'Product Manager, TechFlow',
      initials: 'AL',
      gradient: 'from-blue-500 to-cyan-500',
      quoteColor: 'text-primary/20 group-hover:text-primary/40',
    },
    {
      quote:
        'Working with AMIN was an absolute pleasure. She delivered the project ahead of schedule and the code quality was impeccable. Highly recommended for any complex frontend work.',
      name: 'Sarah Jenkins',
      position: 'CTO, Innovate Inc',
      initials: 'SJ',
      gradient: 'from-secondary to-purple-600',
      quoteColor: 'text-secondary/20 group-hover:text-secondary/40',
    },
    {
      quote:
        "The level of creativity and problem-solving AMIN brought to our e-commerce site was impressive. She didn't just write code; she improved the entire user experience.",
      name: 'Michael Ross',
      position: 'Founder, E-Shopify',
      initials: 'MR',
      gradient: 'from-orange-400 to-red-500',
      quoteColor: 'text-purple-500/20 group-hover:text-purple-500/40',
    },
  ]

  return (
    <section id='testimonials' className='py-10 scroll-mt-10'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className='text-center mb-16 space-y-4'
        >
          <h2 className='text-3xl md:text-5xl font-bold'>
            <span className='text-gradient'>What Clients Say</span>
          </h2>
          <p className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg'>
            Collaborating with passionate people to build exceptional digital
            products.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          {testimonials.map(testimonial => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(168, 85, 247, 0.1)',
              }}
              className='bg-surface-dark/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative group hover:border-primary/40 hover:bg-surface-dark transition-all duration-300'
            >
              {/* Quote Icon */}
              <motion.i
                whileHover={{ scale: 1.2, rotate: 15 }}
                className={`fas fa-quote-left text-4xl ${testimonial.quoteColor} absolute top-8 right-8 transition-colors`}
              ></motion.i>

              {/* Quote Text */}
              <motion.p
                variants={itemVariants}
                className='text-gray-300 mb-8 relative z-10 leading-relaxed'
              >
                &quot;{testimonial.quote}&quot;
              </motion.p>

              {/* Author Info */}
              <motion.div
                variants={itemVariants}
                className='flex items-center gap-4'
              >
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {testimonial.initials}
                </motion.div>

                {/* Name and Position */}
                <div>
                  <motion.h4
                    whileHover={{ color: '#A855F7' }}
                    className='font-bold text-white transition-colors'
                  >
                    {testimonial.name}
                  </motion.h4>
                  <p className='text-sm text-gray-500'>
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>

              {/* Hover Effect Background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 0.1, scale: 1 }}
                className='absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl'
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats or CTA */}
        <motion.div variants={itemVariants} className='mt-16 text-center'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex flex-wrap items-center justify-center gap-3 lg:gap-8 px-8 py-6 max-w-2xl mx-auto bg-surface-dark/30 backdrop-blur-sm border border-white/10 rounded-2xl'
          >
            <div className='text-center'>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
                className='text-3xl font-bold text-primary mb-1'
              >
                98%
              </motion.div>
              <div className='text-sm text-base-content'>
                Client Satisfaction
              </div>
            </div>

            <div className='text-center'>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                className='text-3xl font-bold text-secondary mb-1'
              >
                10+
              </motion.div>
              <div className='text-sm text-base-content'>
                Projects Delivered
              </div>
            </div>

            <div className='text-center'>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
                className='text-3xl font-bold text-blue-400 mb-1'
              >
                1+
              </motion.div>
              <div className='text-sm text-base-content'>Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Testimonials
