import AboutUs from "./about/AboutUs";
import Home from "./components/Home";
import ContactUs from "./contact/ContactUs";
import Games from "./games/Games";
import Services from "./services/Services";
import Team from "./team/Team";

export default function Hero() {
  return (
    <>
      <Home/>
      <div id="about_us">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="games">
        <Games />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="contact_us">
        <ContactUs />
      </div>
    </>
  )
}
