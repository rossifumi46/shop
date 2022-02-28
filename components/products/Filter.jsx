import styles from './styles.module.scss';
import filter from './filter.module.scss';
import { Checkbox } from '../checkbox';
import { classLister } from '../../utils';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';
import cats from './categories.module.scss';
import { ExtendIcon } from '../../icons/Extend';
import { CloseIcon } from '../../icons/close';

const c = classLister(styles);

const rangeStyles = {
  backgroundColor: '#468BE3', border: 'none', width: '15px'
};

const list = [
  {
    name: 'Электроника',
    child: {
      name: 'Смартфоны',
      button: true,
    },
  },
  {
    name: 'Планшеты',
    child: null,
  },
  {
    name: 'Ноутбуки',
    child: null,
  },
  {
    name: 'Телевизоры',
    child: null,
  },
  {
    name: 'Компьютеры и комплектующие',
    child: null,
  },
  {
    name: 'Смарт-часы и фитнес браслеты',
    child: null,
  },
  {
    name: 'Аксессуары',
    child: null,
  },
  {
    name: 'Наушники и аудиотехника',
    child: null,
  },
  {
    name: 'Фотоаппараты',
    child: null,
  },
]

export const Categories = () => {
  return (
    <div className="mt-3">
      {list.map(item => (
        item.child 
        ? <div>
            <div className={cats.cat}>
              {item.name}              
              <span className="ml-[22px]"><ExtendIcon /></span>
            </div>
            <div className="mt-[2px]">
              <button className={cats.btn}>{item.child.name}</button>
            </div>
        </div>
        : <div className={cats.cat}>{item.name}</div>
      ))}
    </div>
  )
}

export default function Filter({ open, onClose }) {

  const [range, setRange] = useState([20, 80]);

  return (
    <>
  <div className={c('dialog', open ? 'open' : '')} />
    <div className={c('filter', open ? 'open' : '')}>
      <div className={styles.wrapper}>
      <span className={styles.close} onClick={onClose}><CloseIcon /></span>
      <h3 className={styles.title}>Категория</h3>
      <Categories />
      <div className={styles.hr} />
      <h3 className={styles.title}>Цена</h3>
      <div>
        <div className="mt-4 pl-1 pr-1">
          <Range
            value={range}
            trackStyle={[{ backgroundColor: '#468BE3' }]}
            handleStyle={[rangeStyles, rangeStyles]}
            onChange={value => setRange(value)}
          />
        </div>
        <div className={filter.inputs}>
          <input placeholder="от" className={filter.input} type="text"/>
          <input placeholder="до" className={filter.input} type="text"/>
        </div>
      </div>
      <div className={styles.hr} />
      <h3 className={styles.title}>Бренды</h3>
      <div className="mt-3">
        <Checkbox>Apple</Checkbox>
        <Checkbox>Apple</Checkbox>
        <Checkbox>Apple</Checkbox>
        <Checkbox>Apple</Checkbox>
        <Checkbox>Apple</Checkbox>
        <Checkbox>Apple</Checkbox>
        <Checkbox>Apple</Checkbox>
      </div>
      <div className={styles.hr} />
      <h3 className={styles.title}>Оперативная память</h3>
      <div className="mt-3">
        <Checkbox>4 ГБ</Checkbox>
        <Checkbox>6 ГБ</Checkbox>
      </div>
      <div className={styles.hr} />
      <h3 className={styles.title}>Цвет</h3>
      <div className="mt-3">
        <Checkbox><div className={filter.color} /></Checkbox>
        <Checkbox><div className={filter.color} /></Checkbox>
        <Checkbox><div className={filter.color} /></Checkbox>
        <Checkbox><div className={filter.color} /></Checkbox>
      </div>
      <div className={styles.hr} />
      <h3 className={styles.title}>Встроенная память</h3>
      <div className="mt-3">
        <Checkbox>64 ГБ</Checkbox>
        <Checkbox>128 ГБ</Checkbox>
        <Checkbox>256 ГБ</Checkbox>
      </div>
      <div className={styles.hr} />
      <h3 className={styles.title}>Связь</h3>
      <div className="mt-3">
        <Checkbox>3G</Checkbox>
        <Checkbox>4G</Checkbox>
        <Checkbox>5G</Checkbox>
      </div>
      <div className="hr mt-5 mb-5 none-m" />
      </div>
    </div>
    </>
  )
}