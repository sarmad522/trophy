import Image from "next/image";
import HeroSection from './component/HeroSection';
import ScrollGradientText  from './component/ScrollGradientText';
import CustomSlider  from './component/ServicesSlider';

export default function Home() {
  return (
    <div className="">
       <HeroSection />
      <ScrollGradientText/>
      <CustomSlider/>
    </div>
  );
}
