import AboutUs from "./about/AboutUs";
import Home from "./components/Home";
import ContactUs from "./contact/ContactUs";
import Games from "./games/Games";
import Services from "./services/Services";

export default function Hero() {
  return (
    <>
      <Home/>
      <Services />
      <Games />
      <AboutUs />
      <ContactUs />
    </>
  )
}
