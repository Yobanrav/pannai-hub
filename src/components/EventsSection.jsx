import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    id: 1,
    title: "TECHNOVATE 2024",
    type: "Technical Symposium",
    date: "January 15-16, 2024",
    time: "9:00 AM - 5:00 PM",
    venue: "Engineering College Auditorium",
    description: "Two-day national level technical symposium featuring coding competitions, robotics, and workshops.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    title: "PANNAI UTSAV",
    type: "Cultural Festival",
    date: "February 10-12, 2024",
    time: "4:00 PM onwards",
    venue: "Main Campus Ground",
    description: "Annual cultural extravaganza with music, dance, drama, and celebrity performances.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    title: "Annual Sports Meet",
    type: "Sports",
    date: "January 25-27, 2024",
    time: "7:00 AM - 6:00 PM",
    venue: "Sports Complex",
    description: "Inter-college sports competition featuring athletics, cricket, football, and indoor games.",
    image: "https://images.unsplash.com/photo-1461896836934- voices-and-video-files-and-multimedia-2?w=400&h=250&fit=crop",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Join us in celebrating knowledge, culture, and sportsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <article
              key={event.id}
              className="card-institution overflow-hidden p-0 group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {event.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    {event.venue}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            View All Events <Calendar size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
