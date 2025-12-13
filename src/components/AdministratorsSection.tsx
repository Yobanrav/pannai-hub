import { Quote } from "lucide-react";

const administrators = [
  {
    name: "Dr. S. Pannai",
    role: "Founder & Chairman",
    message: "Education is the most powerful weapon which you can use to change the world. At Pannai Group, we nurture minds to build a better tomorrow.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. K. Lakshmi",
    role: "Managing Director",
    message: "Our commitment to excellence drives us to provide world-class education with Indian values and global perspectives.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Prof. R. Kumar",
    role: "Director - Academics",
    message: "We believe in holistic development, combining academic rigor with extracurricular activities to shape well-rounded individuals.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const AdministratorsSection = () => {
  return (
    <section id="administrators" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2">
            Our Leadership
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Guiding the institution towards excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {administrators.map((admin, index) => (
            <article
              key={admin.name}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-primary-foreground/20 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative inline-block mb-4">
                <img
                  src={admin.image}
                  alt={admin.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-secondary mx-auto"
                />
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Quote size={20} className="text-secondary-foreground" />
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold mb-1">{admin.name}</h3>
              <p className="text-secondary font-medium text-sm mb-4">{admin.role}</p>
              
              <p className="text-primary-foreground/80 text-sm italic leading-relaxed">
                "{admin.message}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdministratorsSection;
