import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { Title } from './Title'
import { emailjsConfig, isEmailJSConfigured } from '../config/emailjs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Check if EmailJS is configured
      if (!isEmailJSConfigured()) {
        console.warn(
          'EmailJS is not configured. Please set up your EmailJS credentials.'
        )

        // Show configuration warning
        toast.warning(
          'EmailJS is not configured yet. Please check the console for setup instructions.',
          {
            position: 'top-right',
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        )

        // Log form data for development
        console.log('Form data (EmailJS not configured):', formData)

        // Reset form anyway for better UX
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })

        return
      }

      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        to_email: 'waminbroo@gmail.com',
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      )

      console.log('Email sent successfully:', response)

      // Show success toast
      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      console.error('EmailJS error:', error)

      // Show error toast with more specific message
      let errorMessage = 'Failed to send message. Please try again.'

      if (error?.status === 400) {
        errorMessage =
          'EmailJS configuration error. Please check your credentials.'
      } else if (error?.text) {
        errorMessage = error.text
      } else if (error?.message) {
        errorMessage = error.message
      }

      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'waminbroo@gmail.com',
      href: 'mailto:waminbroo@gmail.com',
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+8801912874218',
      href: 'tel:+8801912874218',
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'mymensingh ,Bangladesh',
      href: null,
    },
  ]

  return (
    <section id='contact' className='py-10 scroll-mt-10'>
      {/* Background Elements */}
      <div className='absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50 dark:opacity-30'></div>
      <div className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50 dark:opacity-30'></div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='relative max-w-7xl mx-auto w-full z-10'
      >
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start'>
          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className='lg:col-span-5 flex flex-col gap-10 pt-4'
          >
            <div className='space-y-4'>
              <div className='inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider'>
                Contact Me
              </div>
              <Title>Get in Touch</Title>
              <p className='font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
                I&apos;m currently open to new opportunities. Whether you have a
                question about my stack, a project proposal, or just want to say
                hi, I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* Contact Information */}
            <div className='flex flex-col gap-8'>
              {contactInfo.map(info => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className='flex items-start gap-4 transition-all duration-300'
                >
                  <motion.div
                    whileHover={{ scale: 1.1, backgroundColor: '#A855F7' }}
                    className='flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-[#211c27] border border-slate-200 dark:border-[#473b54] text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm'
                  >
                    <i className={info.icon}></i>
                  </motion.div>
                  <div>
                    <h3 className='font-title text-base font-bold text-slate-900 dark:text-white mb-1'>
                      {info.title}
                    </h3>
                    {info.href ? (
                      <motion.a
                        whileHover={{ color: '#A855F7' }}
                        className='text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors text-lg'
                        href={info.href}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <p className='text-slate-600 dark:text-slate-400 text-lg'>
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className='lg:col-span-7 mt-8 lg:mt-0'
          >
            <div className='relative group rounded-2xl'>
              {/* Animated Border */}
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(0deg, #A855F7, #9333EA, #3B82F6)',
                    'linear-gradient(120deg, #A855F7, #9333EA, #3B82F6)',
                    'linear-gradient(240deg, #A855F7, #9333EA, #3B82F6)',
                    'linear-gradient(360deg, #A855F7, #9333EA, #3B82F6)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className='absolute -inset-1 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500'
              ></motion.div>

              <div className='relative rounded-2xl bg-white dark:bg-[#1f162b] border border-slate-200 dark:border-[#382e42] p-6 sm:p-10 shadow-2xl'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                  {/* Name and Email Row */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <motion.label
                      variants={itemVariants}
                      className='flex flex-col gap-2'
                    >
                      <span className='text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1'>
                        Name
                      </span>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        className='w-full rounded-lg bg-slate-50 dark:bg-[#150f1d] border-slate-200 dark:border-[#473b54] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#ab9db9] h-14 px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200'
                        placeholder='Your Name'
                        required
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </motion.label>

                    <motion.label
                      variants={itemVariants}
                      className='flex flex-col gap-2'
                    >
                      <span className='text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1'>
                        Email
                      </span>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        className='w-full rounded-lg bg-slate-50 dark:bg-[#150f1d] border-slate-200 dark:border-[#473b54] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#ab9db9] h-14 px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200'
                        placeholder='your@email.com'
                        required
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </motion.label>
                  </div>

                  {/* Subject */}
                  <motion.label
                    variants={itemVariants}
                    className='flex flex-col gap-2'
                  >
                    <span className='text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1'>
                      Subject
                    </span>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      className='w-full rounded-lg bg-slate-50 dark:bg-[#150f1d] border-slate-200 dark:border-[#473b54] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#ab9db9] h-14 px-4 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200'
                      placeholder='Project Opportunity'
                      type='text'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </motion.label>

                  {/* Message */}
                  <motion.label
                    variants={itemVariants}
                    className='flex flex-col gap-2'
                  >
                    <span className='text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1'>
                      Message
                    </span>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      className='w-full rounded-lg bg-slate-50 dark:bg-[#150f1d] border-slate-200 dark:border-[#473b54] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-[#ab9db9] p-4 min-h-[180px] focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none'
                      placeholder='Tell me about your project or inquiry...'
                      required
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                    ></motion.textarea>
                  </motion.label>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants} className='pt-2'>
                    <motion.button
                      whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                      className={`relative w-full md:w-auto md:min-w-[200px] flex items-center justify-center gap-2 overflow-hidden rounded-lg text-white font-bold h-14 px-8 shadow-lg transition-all duration-200 ${
                        isSubmitting
                          ? 'bg-primary/70 cursor-not-allowed'
                          : 'bg-primary hover:bg-primary/90 hover:shadow-primary/40 focus:ring-4 focus:ring-primary/20 shadow-primary/25'
                      }`}
                      type='submit'
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                            className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <motion.i
                            whileHover={{ x: 5 }}
                            className='fas fa-paper-plane'
                          ></motion.i>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
