'use client';

import Image from "next/image";
import { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// Optional smoother (requires Club GSAP membership)
import ScrollSmoother from 'gsap/dist/ScrollSmoother';

import HeroSection from './component/HeroSection';
import ScrollGradientText from './component/ScrollGradientText';
// import CustomSlider from './component/ServicesSlider';
// import AboutUsScroll from './component/AboutUsScroll';
// import ScrollTextFade from './component/ScrollTextFade';
import FlipCard from "./component/FlipCard";
import MissionScrollText from "./component/MissionScrollText";
// import MissionVisionSection from "./component/MissionVisionSection";
import CreativeSection from "./component/CreativeSection";
import  MissionVisionScrollText from "./component/MissionVisionScrollText";
// import RotatingCardSlider from "./component/RotatingCardSlider";
import WhereWeWork from "./component/WhereWeWork";
import Footer from './component/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 3.5,
      effects: true,
          
     speed: 0.8,    
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="">
          
          <HeroSection />
          <ScrollGradientText />
          {/* <CustomSlider /> */}
          {/* <RotatingCardSlider/> */}
          <div
            style={{
              backgroundImage: "url('/images/textbag.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <AboutUsScroll />
            <ScrollTextFade /> */}
          </div>
          <main className="flex items-center justify-center gap-8 p-10 bg-black">
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
              frontImage="/images/wprdout.png"
              backImage="/images/blue.png"
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
              frontImage="/images/work2image.png"
              backImage="/images/blue.png"
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
              frontImage="/images/worflikp.png"
              backImage="/images/blue.png"
            />
          </main>
          <div
            style={{
              backgroundImage: "url('/images/textbag.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
             <MissionVisionScrollText/>
            {/* <MissionVisionSection /> */}
            <MissionScrollText />
           
          </div>
          <div>
            <CreativeSection />
            <WhereWeWork/>
            {/* <ContactSection/> */}
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
}
