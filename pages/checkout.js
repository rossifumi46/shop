import { Header } from "../components/header";
import Footer from "../components/footer";
import Checkout from "../components/checkout";

export default function CheckoutPage() {
  return (
    <>
    <div className="main">
      <Header />
    </div>
    <Checkout />
    <Footer />
    </>
  )
}