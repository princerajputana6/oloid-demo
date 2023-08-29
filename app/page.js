
import Hero from "@/components/Hero"
import Navbar from "/components/Header"
import FirstSection from "@/components/FirstSection"
import SecondSection from "@/components/SecondSection"
import ThirdSection from "@/components/ThirdSection"
import FourthSection from "@/components/FourthSection"
import FifthSection from "@/components/FifthSection"
import SixthSection from "@/components/SixthSection"
import Workplace from "@/components/Workplace"
import Testimonial from "@/components/Testimonial"
import Identity from "@/components/Identity"
import Footer from "@/components/Footer"

const styles = {
  wrapper: 'h-full w-full'
}
export default function Home() {
  return (
  <div className={styles.wrapper}>
     <Navbar/> 
     <Hero/>
     <FirstSection/>
     <SecondSection/>
     <ThirdSection/>
     <FourthSection/>
     <FifthSection/>
     <SixthSection/>
     <Workplace/>
     <div className="testimonialcheck">
     <Testimonial/>
     </div>
     
     <Identity/>
     <Footer/>
  </div>
  )
}
