import { Bell, Star } from "lucide-react";

const announcements = [
  "📢 Admissions Open for 2024-25 Academic Year - Apply Now!",
  "🏆 Our Students Secured Top Ranks in State Board Exams",
  "📅 Annual Sports Day on 15th January 2024",
  "🎓 Convocation Ceremony Scheduled for 20th December",
  "📚 New Courses Added: AI & Machine Learning, Data Science",
  "🌟 100% Placement Record for Engineering Batch 2023",
];

const MarqueeAnnouncements = () => {
  return (
    <section className="bg-secondary py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="bg-primary text-primary-foreground px-4 py-2 flex items-center gap-2 shrink-0 z-10 shadow-lg">
          <Bell size={18} />
          <span className="font-semibold text-sm md:text-base">Latest Updates</span>
        </div>
        
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {[...announcements, ...announcements].map((announcement, index) => (
              <span
                key={index}
                className="inline-flex items-center mx-8 text-secondary-foreground font-medium"
              >
                <Star size={14} className="text-primary mr-2" />
                {announcement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeAnnouncements;
