import Image from 'next/image'
import { Like } from '../../icons/Like';
import styles from './styles.module.scss'
import { classLister } from '../../utils';
import { DisLikeIcon } from '../../icons/Dislike';
import { CartIcon } from '../../icons/Cart';

const classes = classLister(styles);

function ProductCard({ product }) {
  const { title, bestseller, isNew, sale, price, image, liked } = product;

  return (
    <div>
      <div className="relative">
        <Image src={image} alt="image" />
        <div className={styles.tags}>
          <div className={styles.tag}>Бестселлер</div>
          <div className={classes('tag', 'green')}>Новинка</div>
          <div className={classes('tag', 'red')}>-20%</div>
        </div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div>
        <span className={styles.price}>{price}</span>
      </div>
      <div className={styles.row}>
        <button className={styles.button}><span className="mr-2">В корзину</span><CartIcon /></button>
        <span className="ml-5 mr-3">
          {!liked ? <Like/> : <DisLikeIcon />}
        </span>
      </div>
    </div>
  )
}

export default ProductCard;