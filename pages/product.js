import { Header } from "../components/header";
import Footer from "../components/footer";
import Product from "../components/product";

export default function ProductPage() {
  return (
    <>
    <div className="main">
      <Header />
    </div>
    <Product />
    <Footer />
    </>
  )
}