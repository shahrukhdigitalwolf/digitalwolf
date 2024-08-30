
import Ourpartner from "./home/our-partner";
import TopSection from "./home/TopSection";
import HomeAboutDw from "./home/HomeAboutDw";
import OurServices from "./home/our-services";
import WeProvideSupport from "./common/we-provide-support";
import DigitalMeeting from "./common/digital-meeting";
import HowWeWork from "./common/how-we-work";
import Faq from "./common/Faq";
import Testimonial from "./common/testimonial";


export default function Home() {
 
  return (
    <>
      
      <main>
          <TopSection/>
          <Ourpartner slice={4}/>
          <HomeAboutDw/>
          <OurServices slice={4}/>
          <WeProvideSupport/>
          <DigitalMeeting/>
          <div className="bg-[#322854] clipPath pb-40 pt-10 text-[#ffffff]">
            <HowWeWork/>
          </div>
          <div className="bg-[#EAE9FF] clipPath pb-40 pt-10">
            <Testimonial/>
          </div>
          <Faq/>
      </main>
    </>
  );
}
