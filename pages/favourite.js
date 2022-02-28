import { Header } from "../components/header";
import Footer from "../components/footer";
import styles from "./favourite.module.scss";
import { products } from "../components/products";
import ProductCard from "../components/product-card";
import { MoreIcon } from "../icons/Like copy";

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

export const MoreBtn = () =>
  <button className="more_btn">
    <span>Показать ещё</span>
    <MoreIcon />
  </button>

export default function FavouritePage() {
  return (
    <>
    <div className="main">
      <Header />
      <h2 className="title w-full padding mt-[35px] mb-9">Избранное</h2>
      <div className={styles.grid}>
        {products.map((product, index) => <ProductCard key={product.index} product={product} />)}
      </div>
      <MoreBtn />
    </div>
    <Footer />
    </>
  )
}