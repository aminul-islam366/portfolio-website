export const Title = ({ children, className = '' }) => {
  return (
    <h1
      className={`font-title text-4xl lg:text-5xl font-extrabold leading-tight tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 ${className}`}
    >
      {children}
    </h1>
  )
}
