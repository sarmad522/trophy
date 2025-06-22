import Image from "next/image";
import HeroSection from './component/HeroSection';
import CustomSlider  from './component/ServicesSlider';

export default function Home() {
  return (
    <div className="">
       <HeroSection />
      <CustomSlider  />
    </div>
  );
}
