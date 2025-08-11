

import Home from "./components/Home";
import About from "./components/About";
import FeaturedProducts from "./components/FeaturedProducts";
import Mission from "./components/Mission";
import Directors from "./components/Directors";
import ContactUsClient from "./components/ContactUsClient";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main className="w-full px-2 xs:px-3 sm:px-6 md:px-10" style={{ scrollBehavior: 'smooth' }}>
      <div id="home" className="-mb-15">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="mission">
        <Mission />
      </div>
      <div id="products">
        <FeaturedProducts />
      </div>
  <Directors />
  <ContactUsClient />
  <Footer />
    </main>
  );
}
