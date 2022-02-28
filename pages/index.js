import { Header } from "../components/header";
import { Banner } from "../components/banner";
import CustomSlider from "../components/slider";
import Footer from "../components/footer";
import Categories from "../components/categories";
import { Sales } from "../components/sales";

export default function Main() {
  return (
    <>
    <div className="main">
      <Header />
      <Banner />
      <div className="mt-20 w-full padding">
        <CustomSlider />
      </div>
      <div className="flex justify-start w-full padding">
        <span className="title mt-[50px]">Акции</span>
      </div>
      <Sales />
      <div className="mt-20 w-full padding">
        <CustomSlider title={'Успей купить со скидкой'} />
      </div>
      <div className="flex justify-start w-full padding">
        <span className="title mt-[50px]">Бренды</span>
      </div>
      <Categories />
    </div>
    <Footer />
    </>
  )
}