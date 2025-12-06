import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

const Hero = () => {
      const [isHovered, setIsHovered] = useState(false)

      const images = [
  "https://images.unsplash.com/photo-1650809652935-2e5002ba40bf?q=80&w=1740&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570799650082-f3eb7207f588?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1622525523221-18dc9bcf7b22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1691842208155-9460efbbbde8?q=80&w=518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

       const [currentIndex, setCurrentIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, 5000) 

  return () => clearInterval(interval)
}, [])


  return (
    <section className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full px-6 md:px-12 lg:px-20 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm tracking-widest uppercase font-medium text-foreground">Kashi Mala</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Collection
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Heritage
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
            Contact
          </a>
        </div>
        <button className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5">
          <span className="w-5 h-px bg-foreground" />
          <span className="w-5 h-px bg-foreground" />
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 pt-12 lg:pt-0 lg:min-h-[calc(100vh-88px)]">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl space-y-8 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-primary font-medium">Authentic Kashi Heritage</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-foreground text-balance">
            The Path to
            <br />
            <span className="text-primary">Inner Stillness.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Authentic 5-Mukhi Rudraksha, hand-knotted in Kashi.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Button shine effect */}
              <span
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 ${isHovered ? "translate-x-full" : ""}`}
              />
              <span className="relative flex items-center gap-3">
                Begin Your Journey
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>

            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              <span className="w-10 h-px bg-border" />
              Learn more
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-8 pt-8 justify-center lg:justify-start">
            <div className="text-center">
              <p className="text-2xl font-serif text-primary">108</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Sacred Beads</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-serif text-primary">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Authentic</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-2xl font-serif text-primary">Kashi</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Origin</p>
            </div>
          </div>
        </div>

        {/* Right: Product Image */}
        <div className="flex-1 flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-8 border border-secondary/20 rounded-full animate-[spin_30s_linear_infinite]" />
            <div className="absolute -inset-16 border border-primary/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />

            {/* Gold accent glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/10 rounded-full blur-2xl scale-110" />

            {/* Image container */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-2 border-secondary/30 shadow-2xl shadow-primary/10">
              {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt="5-Mukhi Rudraksha Mala"
      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105 
        ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
      `}
    />
  ))}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/5" />
            </div>

            {/* Floating badge */}
            <div className="absolute z-10 -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-card border border-border shadow-lg">
              <p className="text-xs tracking-widest uppercase text-muted-foreground text-center">Hand-Knotted</p>
              <p className="text-sm font-serif text-primary text-center">5-Mukhi Rudraksha</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
