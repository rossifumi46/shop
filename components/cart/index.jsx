import Image from 'next/image'
import styles from './styles.module.scss';
import itemStyles from './item.module.scss';
import image from '../../images/item.png';
import { Checkbox } from '../checkbox';
import Link from 'next/link';

export const Item = ({ checkout}) => {
  return (
    <div className={styles.item}>
      <div className="flex">
      <div className="none-m"><Checkbox /></div>
      <div className={itemStyles.image_cart}>
        <Image src={image} alt="item" width="74" height="74" objectFit="contain" />
      </div>
      </div>
      <div className={styles.info_wrapper}>
        <div className={styles.second}>
          <span className={styles.item_title}>MacBook Pro 16 2020 год, Space Gray</span>
          <span className={`${styles.delete} none-m`}>Удалить</span>
        </div>
        <div className={styles.wrapper}>
          {!checkout ? (
            <div>
              <div className={styles.input_container}>
                <span>-</span>
                <input type="text" value="1" />
                <span>+</span>
              </div>
            </div>
          ) : (
            <div className={itemStyles.counts}>
              <span className={itemStyles.count_title}>Количество</span>
              <span className={itemStyles.count}>1</span>
            </div>
          )}
          <div className={styles.third}>
            <span>70000 ₽</span>
            <span className={styles.sale}>90000 ₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ItemCheckout = () => {
  return (
    <div className={styles.item}>
      <Image src="/" alt="" width="74" height="74" />
      <div className={styles.info_wrapper}>
        <div className={styles.second}>
          <span className={styles.item_title}>MacBook Pro 16 2020 год, Space Gray</span>
          <span className={styles.delete}>Удалить</span>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.input_container}>
            <span>-</span>
            <input type="text" value="1" />
            <span>+</span>
          </div>
          <div className={styles.third}>
            <span>70000 ₽</span>
            <span className={styles.sale}>90000 ₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Cart() {
  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <h2 className="title">Корзина</h2>
        <div className={styles.blocks}>
          <div className={styles.list}>
            <div className="none-m">
              <div className={styles.header}>
                <Checkbox><span>Выбрать все</span></Checkbox>
                <span className={styles.delete_selected}>Удалить выбранное</span>
              </div>
              <div className="hr"/>
            </div>
            <div className={styles.items}>
              <Item />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.info_one}>
              <div className={styles.info_first}>
                <span className={styles.info_title}>Ваш заказ</span>
                <span className={styles.info_value}>3 товара</span>
              </div>
              <div className={styles.info_second}>
                <span className={styles.info_tip}>Сумма</span>
                <span className={styles.info_value}>19755 ₽</span>
              </div>
              <div className={styles.info_third}>
                <span className={styles.info_tip}>Скидка</span>
                <span className={`${styles.info_value} red`}>- 8000 ₽</span>
              </div>
              <div className="hr mt-6"/>
              <div className={styles.info_fourth}>
                <span>Итого</span>
                <span>11755 ₽</span>
              </div>
            </div>
            <div className="hr" />
            <div className={styles.info_two}>
              <Link href="/checkout"><button className={styles.btn + ' btn'}>Перейти к оплате</button></Link>
              <span className={styles.tip}>Способ доставки заказа можно выбрать при оформлении заказа</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}