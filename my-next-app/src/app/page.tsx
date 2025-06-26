import Image from "next/image";
import HeroSection from './component/HeroSection';
import ScrollGradientText  from './component/ScrollGradientText';
import CustomSlider  from './component/ServicesSlider';
import AboutUsScroll  from './component/AboutUsScroll';
import ScrollTextFade  from './component/ScrollTextFade';
import FlipCard from "./component/FlipCard";
import MissionScrollText from "./component/MissionScrollText";
import MissionVisionSection from "./component/MissionVisionSection";
import CreativeSection from "./component/CreativeSection"
export default function Home() {
  return (
    <div className="">
       <HeroSection />
      <ScrollGradientText/>
      <CustomSlider/>
     <div   style={{
    backgroundImage: "url('/images/textbag.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      <AboutUsScroll/>
      <ScrollTextFade/>
      </div>
     <main className=" flex items-center justify-center gap-8 p-10 bg-black">
      <FlipCard
        title="Ideate"
        items={[
          "Creative Direction",
          "Design Sprints",
          "Product Validation Sprint",
          "User Research and Testing",
          "Prototypes",
          "Minimum Viable Products",
        ]}
      />
      <FlipCard
        title="Develop"
        items={[
          "Frontend Development",
          "Backend Development",
          "CMS Implementation",
          "Accessibility",
          "Interaction and Motion",
          "Lowcode Development",
        ]}
      />
      <FlipCard
        title="Develop"
        items={[
          "Frontend Development",
          "Backend Development",
          "CMS Implementation",
          "Accessibility",
          "Interaction and Motion",
          "Lowcode Development",
        ]}
      />
    </main>
 <div   style={{
    backgroundImage: "url('/images/textbag.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <MissionVisionSection />
      <MissionScrollText/>
      
      </div>
      <div>
        <CreativeSection/>
      </div>
    </div>
  );
}
