import { Heart, Music, Palette, Trophy, BookOpen, Users, Laptop, Leaf } from "lucide-react";

const specialties = [
  {
    name: "Yoga & Meditation",
    description: "Daily yoga sessions and meditation classes for physical and mental wellness of students.",
    icon: Heart,
    color: "bg-accent",
  },
  {
    name: "Cultural Events",
    description: "Regular cultural programs, music, dance, and drama to nurture artistic talents.",
    icon: Music,
    color: "bg-secondary",
  },
  {
    name: "Sports Excellence",
    description: "State-of-the-art sports facilities with professional coaching in various disciplines.",
    icon: Trophy,
    color: "bg-primary",
  },
  {
    name: "Art & Craft",
    description: "Creative workshops and art classes to develop aesthetic sensibilities and creativity.",
    icon: Palette,
    color: "bg-gold-dark",
  },
  {
    name: "Smart Classrooms",
    description: "Technology-enabled learning with interactive boards and digital resources.",
    icon: Laptop,
    color: "bg-navy-light",
  },
  {
    name: "Eco Campus",
    description: "Green campus initiatives with solar power, rainwater harvesting, and organic gardens.",
    icon: Leaf,
    color: "bg-emerald",
  },
  {
    name: "Library & Resources",
    description: "Extensive library with digital access to thousands of journals and e-books.",
    icon: BookOpen,
    color: "bg-primary",
  },
  {
    name: "Student Clubs",
    description: "Various clubs for coding, robotics, photography, literature, and social service.",
    icon: Users,
    color: "bg-accent",
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="specialties" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What Makes Us Special</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Beyond academics, we offer a range of activities for holistic development
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {specialties.map((specialty, index) => (
            <article
              key={specialty.name}
              className="card-institution text-center group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`w-14 h-14 ${specialty.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <specialty.icon className="text-primary-foreground" size={28} />
              </div>
              
              <h3 className="font-serif text-base md:text-lg font-bold text-foreground mb-2">
                {specialty.name}
              </h3>
              
              <p className="text-muted-foreground text-xs md:text-sm line-clamp-3">
                {specialty.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
