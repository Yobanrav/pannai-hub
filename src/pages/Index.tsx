import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import MarqueeAnnouncements from "@/components/MarqueeAnnouncements";
import SchoolsSection from "@/components/SchoolsSection";
import AdministratorsSection from "@/components/AdministratorsSection";
import AnnouncementsSection from "@/components/AnnouncementsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <MarqueeAnnouncements />
        <SchoolsSection />
        <AnnouncementsSection />
        <AdministratorsSection />
        <SpecialtiesSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
