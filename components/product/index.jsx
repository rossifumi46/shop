import styles from './styles.module.scss';
import CustomSlider from '../slider';
import Base from './base';
import { classLister } from '../../utils';
import Reviews from './reviews';

const c = classLister(styles);

const arr = [1,2,3,4,5,6]

export default function Product() {
  return (
    <div>
      <div className={styles.main}>
        <Base />
        <div className={styles.hr} />
        <h3 className={styles.title}>Описание товара</h3>
        <p className={styles.desc}>Супербыстрый чип M1 Pro даёт феноменальную производительность и обеспечивает удивительно долгое время работы без подзарядки. Прибавьте к этому потрясающий дисплей Liquid Retina XDR и ещё больше портов для профессиональной работы. Это тот самый ноутбук, который вы так ждали. Вы можете монтировать видео 8K, делать компиляцию кода и рендеринг сложных 3D‑сцен — всё с лёгкостью, где бы вы ни были. Дисплей Liquid Retina XDR с экстремальным динами­ческим диапазоном и поразительной контрастностью. Невероятная детализация в тёмных областях, более глубокий чёрный, а остальные цвета — яркие как никогда. Улучшенная камера FaceTime HD 1080p. Мощная система из шести динамиков с поддержкой простран­ственного аудио. И микрофоны студийного уровня. Вас будет отлично видно и слышно. Больше портов для профессиональной работы: слот SDXC, порты HDMI и Thunderbolt 4, выход для наушников. И разъём питания MagSafe 3. Более 10 000 приложений и плагинов уже оптими­зированы для чипов Apple и системы macOS Monterey — в том числе Final Cut Pro, Logic Pro, Cinema 4D и Microsoft 365.</p>
        <div className={styles.hr} />
        <h3 className={styles.title}>Характеристики</h3>
      </div>
      {arr.map(() =>
              <div className={styles.wrapper}>
                <div className={styles.block}>
                <div className={styles.element}>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                </div>
                <div className={styles.element}>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                  <div className={styles.row}>
                    <span className={styles.left}>Модуль связи Bluetooth</span>
                    <span className={styles.right}>5.0</span>
                  </div>
                </div>
              </div>
              </div>
      )}
      <div className={c('main', 'margin')}>
        <CustomSlider />
      </div>
      <div className={c('main', 'margin')}>
        <Reviews />
      </div>
    </div>
  )
}