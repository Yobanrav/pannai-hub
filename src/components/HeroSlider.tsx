import { useState, useEffect } from "react";
import heroCampus1 from "@/assets/hero-campus-1.jpg";
import heroCampus2 from "@/assets/hero-campus-2.jpg";
import heroCampus3 from "@/assets/hero-campus-3.jpg";

const slides = [
  {
    image: heroCampus1,
    title: "Excellence in Education",
    subtitle: "Shaping Tomorrow's Leaders Today",
  },
  {
    image: heroCampus2,
    title: "World-Class Library",
    subtitle: "Fostering Knowledge & Research",
  },
  {
    image: heroCampus3,
    title: "Modern Infrastructure",
    subtitle: "State-of-the-Art Learning Facilities",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-primary-foreground">
            <h2 
              className="font-serif text-4xl md:text-6xl font-bold mb-4 animate-fade-up"
              key={`title-${currentSlide}`}
            >
              {slides[currentSlide].title}
            </h2>
            <p 
              className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
              key={`subtitle-${currentSlide}`}
            >
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#admissions" className="btn-secondary">
                Apply Now
              </a>
              <a href="#about" className="btn-primary bg-primary-foreground/20 border border-primary-foreground/40 hover:bg-primary-foreground/30">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
