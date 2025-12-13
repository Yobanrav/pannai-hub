import { Calendar, ArrowRight, Bell } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Admissions Open 2024-25",
    date: "December 1, 2024",
    category: "Admissions",
    description: "Applications are now open for all courses. Early bird discounts available for registrations before January 31st.",
    important: true,
  },
  {
    id: 2,
    title: "National Level Technical Symposium",
    date: "January 15, 2024",
    category: "Events",
    description: "Join us for TECHNOVATE 2024 - A two-day technical symposium featuring workshops, competitions, and expert talks.",
    important: true,
  },
  {
    id: 3,
    title: "Semester Exam Schedule Released",
    date: "December 5, 2024",
    category: "Academic",
    description: "The examination schedule for the current semester has been published. Students can download from the portal.",
    important: false,
  },
  {
    id: 4,
    title: "Campus Recruitment Drive",
    date: "December 20, 2024",
    category: "Placements",
    description: "Top IT companies including TCS, Infosys, and Wipro will be visiting for campus placements.",
    important: true,
  },
  {
    id: 5,
    title: "Annual Cultural Festival",
    date: "February 10, 2024",
    category: "Events",
    description: "PANNAI UTSAV 2024 promises three days of music, dance, drama, and celebrations.",
    important: false,
  },
];

const AnnouncementsSection = () => {
  return (
    <section id="announcements" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Important Announcements</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Stay updated with the latest news and events from our institutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {announcements.map((announcement, index) => (
            <article
              key={announcement.id}
              className={`card-institution flex gap-4 ${
                announcement.important ? "border-l-4 border-l-secondary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                announcement.important ? "bg-secondary" : "bg-muted"
              }`}>
                {announcement.important ? (
                  <Bell className="text-secondary-foreground" size={24} />
                ) : (
                  <Calendar className="text-muted-foreground" size={24} />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded">
                    {announcement.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {announcement.date}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {announcement.title}
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {announcement.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            View All Announcements <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
