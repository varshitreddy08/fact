
import Hero from "../components/Hero";
import About from "../components/About";
import Members from "../components/Members";
import Events from "../components/Events";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Members />
      <Events />
      <ContactForm />
      <Footer />
    </>
  );
}