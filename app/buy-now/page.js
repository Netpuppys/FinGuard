import Header from "../component/Header";
import Footer from "../component/Footer";
import { MobileProvider } from "../utils/MobileContext";
import BuyProduct from "./component/BuyProduct";

export default function Home() {
  return (
    <MobileProvider>
      <div className="max-w-screen">
        <Header />
        <BuyProduct />
        <Footer />
      </div>
    </MobileProvider>
  );
}
