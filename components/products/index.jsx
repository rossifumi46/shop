
import styles from './styles.module.scss';
import ProductCard from '../product-card';
import Filter from './Filter';
import phone from '../../images/phone.png';
import { useState } from 'react';
import { MoreBtn } from '../../pages/favourite';

export const products = [
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    isNew: true,
    sale: 20,
    price: 100000,
    image: phone,
    liked: true,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  },
  {
    title: 'Смартфон Poco X3 Pro 8/256GB, черный',
    bestseller: true,
    new: true,
    sale: 20,
    price: 100000,
    image: phone,
  }
];

export default function Products() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.filter_btn} onClick={() => setOpen(true)}><span>Фильтры</span><div className="hr mt-2" /></div>
      <Filter open={open} onClose={() => setOpen(false)} />
      <div className={styles.grid}>
        {products.map((product, index) => <ProductCard key={product.index} product={product} />)}
      </div>
      <MoreBtn />
    </div>
  )
}