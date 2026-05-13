import { useTheme } from './hooks/useTheme.js'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-out-cubic',
})
function App() {
  const { darkMode } = useTheme()

  return (
    <div className='bg-background-light dark:bg-background-dark text-gray-800 dark:text-white transition-colors duration-300 min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-white'>
      {/* Background Elements */}
      <div className='absolute inset-0 z-0 pointer-events-none opacity-20 dark:opacity-30 bg-grid-pattern bg-grid'></div>
      <div className='absolute top-0 left-1/4 w-1/2 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0'></div>

      {/* Main Content */}
      <div className='relative z-10'>
        <Navbar />
        <main className='w-full max-w-7xl mx-auto px-6 md:px-12 py-20'>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Toast Container */}
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? 'dark' : 'light'}
        toastStyle={{
          backgroundColor: darkMode ? '#1f162b' : '#ffffff',
          color: darkMode ? '#ffffff' : '#1f2937',
          border: darkMode ? '1px solid #382e42' : '1px solid #e5e7eb',
        }}
      />
    </div>
  )
}

export default App
