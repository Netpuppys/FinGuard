import Header from "./component/Header";
import Banner from "./component/Banner";
import Card from "./component/Card";
import WhyFinguard from "./component/WhyFinguard";
import HowToInstall from "./component/Install";
import Necessary from "./component/Necessary";
import FinguardHS from "./component/FinguardHS";
import Clients from "./component/Clients";
import Product from "./component/Product";
import OurSocialMedia from "./component/OurSocialMedia";
import Facts from "./component/Facts";
import Footer from "./component/Footer";
import Testimonials from "./component/Testimonials";
import { MobileProvider } from "./utils/MobileContext";

export default function Home() {
  return (
    <MobileProvider>
      <div className="max-w-screen">
        <Header />
        <Banner />
        <Card />
        <WhyFinguard />
        <Necessary />
        <HowToInstall />
        <FinguardHS />
        <Clients />
        <Testimonials />
        <Product />
        <OurSocialMedia />
        <Facts />
        <Footer />
      </div>
    </MobileProvider>
  );
}
