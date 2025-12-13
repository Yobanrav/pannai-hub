import { GraduationCap, Building2, BookOpen, School } from "lucide-react";

const schools = [
  {
    id: "engineering",
    name: "Pannai Engineering College",
    description: "Offering B.E/B.Tech programs in Computer Science, Electronics, Mechanical, and Civil Engineering with state-of-the-art labs.",
    icon: Building2,
    color: "bg-primary",
    students: "2500+",
    courses: "8 Programs",
  },
  {
    id: "arts",
    name: "Pannai Arts & Science College",
    description: "Comprehensive undergraduate and postgraduate programs in Arts, Science, and Commerce with experienced faculty.",
    icon: BookOpen,
    color: "bg-accent",
    students: "1800+",
    courses: "15 Programs",
  },
  {
    id: "polytechnic",
    name: "Pannai Polytechnic",
    description: "Technical diploma courses with hands-on training and industry partnerships for practical skill development.",
    icon: GraduationCap,
    color: "bg-gold-dark",
    students: "1200+",
    courses: "6 Programs",
  },
  {
    id: "school",
    name: "Pannai Higher Secondary School",
    description: "Quality education from primary to higher secondary with focus on holistic development and competitive exam preparation.",
    icon: School,
    color: "bg-navy-light",
    students: "3000+",
    courses: "K-12 Education",
  },
];

const SchoolsSection = () => {
  return (
    <section id="schools" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Institutions</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A group of premier educational institutions committed to academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {schools.map((school, index) => (
            <article
              key={school.id}
              id={school.id}
              className="card-institution group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${school.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <school.icon className="text-primary-foreground" size={32} />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {school.name}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {school.description}
              </p>

              <div className="flex justify-between text-sm pt-4 border-t border-border">
                <div>
                  <p className="font-bold text-primary">{school.students}</p>
                  <p className="text-muted-foreground text-xs">Students</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{school.courses}</p>
                  <p className="text-muted-foreground text-xs">Available</p>
                </div>
              </div>

              <a 
                href={`#${school.id}`} 
                className="mt-4 block text-center btn-primary text-sm py-2"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsSection;
