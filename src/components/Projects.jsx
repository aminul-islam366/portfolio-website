import { useState } from 'react'
import { Title } from './Title'
import projects from '../data/projects.json'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = project => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id='projects' className='py-10 scroll-mt-10'>
      {/* Background Elements */}
      <div className='fixed inset-0 pointer-events-none z-0 overflow-hidden'>
        <div className='absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto'>
        {/* Section Header */}
        <div
          data-aos='fade-up'
          className='flex flex-col items-center text-center space-y-4 mb-12'
        >
          <div className='inline-flex items-center justify-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider'>
            My Work
          </div>
          <Title>Featured Projects</Title>
          <p className='font-body text-slate-400 max-w-2xl text-lg leading-relaxed'>
            Explore a selection of my recent projects, showcasing my expertise
            in building scalable web applications and solving complex problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos='fade-up'
              data-aos-delay={index * 100}
              className='group relative flex flex-col rounded-xl bg-surface-dark border border-surface-border overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl w-full min-h-[400px]'
            >
              {/* Project Image/Icon Area */}
              <div className='relative h-40 sm:h-48 overflow-hidden border-b border-b-gray-400'>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-[#2a2430]'>
                    <i
                      className={`${project.icon} text-surface-border text-6xl opacity-30 transition-transform duration-700 group-hover:rotate-180`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}
                    />
                  </div>
                )}

                {/* Category Badge */}
                <div className='absolute top-3 right-3 z-20'>
                  <span className='px-3 py-1 rounded-full bg-black/70 text-xs text-white backdrop-blur-sm border border-white/20 font-medium'>
                    {project.category}
                  </span>
                </div>

                {/* Bottom Gradient */}
                <div className='absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface-dark via-surface-dark/50 to-transparent z-10' />
              </div>

              {/* Project Content */}
              <div className='flex flex-col flex-1 p-4 sm:p-5'>
                <h3 className='font-title text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 transition-colors group-hover:text-primary line-clamp-2'>
                  {project.title}
                </h3>

                <p className='font-body text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1 line-clamp-3'>
                  {project.description.length > 100
                    ? `${project.description.slice(0, 100)}...`
                    : project.description}
                </p>

                <div className='flex items-center gap-2 sm:gap-3 mt-auto'>
                  <button
                    onClick={() => openModal(project)}
                    className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98]'
                  >
                    <i className='fas fa-eye text-xs' />
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default Projects
