import { Header } from "../components/header";
import Footer from "../components/footer";
import Products from "../components/products";
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

export default function ProductsPage() {
  return (
    <>
    <div className="main">
      <Header />
      <BreadCrumbs list={list} />
      <h2 className="title w-full padding mb-9">Категория</h2>
      <Products />
    </div>
    <Footer />
    </>
  )
}