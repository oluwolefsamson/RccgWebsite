import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Cta from "@/components/CTA/Cta";
import Feature from "@/components/Feature/Feature";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";
import Testimonial from "@/components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col ">
      <Header />
      <Hero />
      <Feature />
      <About />
      <Team />
      <Gallery />
      <Cta />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
