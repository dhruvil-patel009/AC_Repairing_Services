import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/how-it-works";
import MobileApp from "./components/mobile-app";
import Navbar from "./components/navbar";
import Services from "./components/services";
import TechnicianCTA from "./components/technician-cta";
import WhyChooseUs from "./components/who-choose-us";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/* <Products /> */}
        <HowItWorks />
        <WhyChooseUs />
        <TechnicianCTA />
        <MobileApp />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </>
  )
}
