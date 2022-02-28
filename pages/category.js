import { Header } from "../components/header";
import { Banner } from "../components/banner";
import CustomSlider from "../components/slider";
import Footer from "../components/footer";
import Categories from "../components/categories";
import { BreadCrumbs } from "../components/breadcrumbs";

const list = [
  {
    name: 'Главная',
    link: '/main',
  },
  {
    name: 'Обувь',
    link: null,
  }
];

export default function Category() {
  return (
    <>
    
    <div className="main">
      <Header />
      <BreadCrumbs list={list} />
      <h2 className="title w-full padding mb-9">Категория</h2>
      <Banner />
      <Categories />
      <div className="mt-20 w-full padding">
        <CustomSlider />
      </div>
    </div>
    <Footer />
    </>
  )
}