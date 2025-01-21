import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CompanySection } from "@/components/CompanySection";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <div id="work" className="bg-gray-50">
        <CompanySection
          name="Biashara Africa Business Club"
          role="Co-Founder"
          description="Discover African Businesses Near You"
          achievements={[
            '<a href="https://biasharaafricabusinessclub.org/" target="_blank">Biashara Africa Business Club</a>',
            "We connect African entrepreneurs with exciting opportunities to grow their businesses.",
            "Join Toronto's vibrant African community designed to help your business thrive."
          ]}
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        />
        <CompanySection
          name="Hannah Community"
          role="Executive Advisor"
          description="Providing executive-level guidance and implementing organizational change."
          achievements={[
            '<a href="https://www.hannahcommunity.org/" target="_blank">Hannah Community Development Project</a>',
            "The Hannah Community Development Project is a faith-based organization in Eldoret's Kamukunji informal settlement, dedicated to empowering youth, women, and the elderly through initiatives like skill development, preventive health, and substance abuse management.",
            "The mission is to improve living standards by linking community members to income-generating opportunities and providing holistic support."
          ]}
          imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          isReversed
        />
      </div>
      <Contact />
    </div>
  );
};

export default Index;