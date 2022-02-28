import Image from 'next/image'
import styles from './styles.module.scss';
import { Item } from '../cart';
import { RadioButton } from '../radiobutton';
import mastercard from '../../icons/mastercard.svg';
import visa from '../../icons/visa.svg';
import paypal from '../../icons/paypal.svg';
import Link from 'next/link';

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h3 className="info_title">Контактная информация</h3>
      <input placeholder="Email" className={styles.input + ' mt-5'} type="email"/>
      <div className={styles.inputs}>
        <input placeholder="Имя" className={styles.input} type="text"/>
        <input placeholder="Фамилия" className={styles.input} type="text"/>
      </div>
    </div>
  )
}

function Order() {
  return (
    <div className={styles.order}>
      <h3 className={styles.order_title}>Заказ №1</h3>
      <span className={styles.order_subtitle}>Товар</span>
      <Item checkout />
      <div className="hr mt-[25px]"/>
      <h3 className="info_title mt-9">Адрес доставки</h3>
      <input placeholder="Адрес" className={styles.input + ' mt-5'} type="text"/>
      <input placeholder="Квартира" className={styles.input + ' mt-5'} type="text"/>
      <div className={styles.inputs}>
        <input placeholder="Страна" className={styles.input} type="text"/>
        <input placeholder="Регион" className={styles.input} type="text"/>
        <input placeholder="Почтовый индекс" className={styles.input} type="text"/>
      </div>
      <input placeholder="Город" className={styles.input + ' mt-5'} type="text"/>
      <input placeholder="Номер телефона" className={styles.input + ' mt-5'} type="text"/>
      <div className="hr mt-9" />
      <h3 className="info_title mt-9">Способ оплаты</h3>
      <div className="mt-[26px]">
        <div>
          <RadioButton>
            <Image src={visa} />
            <span className="ml-[10px]"><Image src={mastercard} /></span>
            <span className={styles.payment_title}>Банковской картой онлайн</span>
          </RadioButton>
        </div>
        <div>
          <RadioButton>
            <Image src={paypal} />
            <span className={styles.payment_title}>Paypal</span>
          </RadioButton>
        </div>
      </div>
      <div className="hr mt-9" />
      <h3 className="info_title mt-9">Контактные данные покупателя</h3>
      <input placeholder="Телефон" className={styles.input + ' mt-5'} type="text"/>
      <div className={styles.inputs}>
        <input placeholder="Имя" className={styles.input} type="text"/>
        <input placeholder="Фамилия" className={styles.input} type="text"/>
      </div>
      <div className="hr mt-9" />
      <button className={styles.btn}>Копировать в другие заказы</button>
    </div>
  )
}

export default function Checkout() {
  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h2 className="title">Оформление заказа</h2>
          <Link href="/cart"><a className={styles.link}>Вернуться в корзину</a></Link>
        </div>
        <div className={styles.blocks}>
          <div>
            <Contacts />
            <div className="mt-9">
              <Order />
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
              <div className={styles.info_third}>
                <span className={styles.info_tip}>Доставка</span>
                <span className={`${styles.info_value} green`}>Бесплано</span>
              </div>
              <div className="hr mt-6"/>
              <div className={styles.promo}>
                <input placeholder="Введите промокод" className={styles.promo_input} type="text"/>
                <button className={styles.promo_btn}>Ввести</button>
              </div>
              <div className="hr mt-6"/>
              <div className={styles.info_fourth}>
                <span>Итого</span>
                <span>11755 ₽</span>
              </div>
            </div>
            <div className="hr" />
            <div className={styles.info_two}>
              <button className={styles.btn + ' btn'}>Перейти к оплате</button>
              <span className={styles.tip}>Нажимая на кнопку, вы соглашаетесь с Условиями обработки персональных данных, а также с Условиями продажи</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}