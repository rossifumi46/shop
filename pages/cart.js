import { Header } from "../components/header";
import CustomSlider from "../components/slider";
import Footer from "../components/footer";
import Cart from "../components/cart";

export default function CartPage() {
  return (
    <>
    <div className="main">
      <Header />
    </div>
    <Cart />
    <div className="slider padding pt-20">
      <CustomSlider />
    </div>
    <Footer />
    </>
  )
}