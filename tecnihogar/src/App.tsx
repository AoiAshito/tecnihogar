import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PainPoints from './components/PainPoints';
import About from './components/About';
import MaintenancePlan from './components/MaintenancePlan';
import Testimonials from './components/Testimonials';
import Courses from './components/Courses';
import ContactSection from './components/ContactSection';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <PainPoints />
        <About />
        <MaintenancePlan />
        <Testimonials />
        {/* Courses: controlled by COURSES_VISIBLE flag inside the component */}
        <Courses />
        <ContactSection />
        <BottomCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
