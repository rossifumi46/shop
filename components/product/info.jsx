import styles from './styles.module.scss';
import infoStyles from './info.module.scss';
import { classLister } from '../../utils';
import { CartIcon } from '../../icons/Cart';

const classes = classLister(styles);

export default function Info() {
  return (
    <div className={styles.info}>
      <div className={styles.tags}>
        <div className={styles.tag}>Бестселлер</div>
        <div className={classes('tag', 'green')}>Новинка</div>
        <div className={classes('tag', 'red')}>-20%</div>
      </div>
      <h3 className={styles.infoTitle}>13.3" Ноутбук Apple MacBook Air M1, Apple M1 (3.2 ГГц) (MGN93RU/A), серебристый</h3>
      <p className={styles.infoDesc}>Самый тонкий и лёгкий ноутбук Apple теперь стал суперсильным благодаря чипу Apple M1. Он быстро справляется с вашими задачами, задействуя потрясающую скорость 8‑ядерного процессора. Открывает возможности нового уровня в приложениях и играх со сложной графикой, используя всю мощь 8‑ядерного графического процессора. И ускоряет операции машинного обучения, применяя 16‑ядерную систему Neural Engine.</p>
      <div className="flex mt-[35px]">
        <div>
          <span className={infoStyles.option_title}>Общий объем памяти</span>
          <div className="flex mt-3">
            <div className={`${infoStyles.option} ${infoStyles.option_selected}`}>256ГБ</div>
            <div className={infoStyles.option}>1024ГБ</div>
          </div>
        </div>
        <div className="ml-[45px]">
          <span className={infoStyles.option_title}>Общий объем памяти</span>
          <div className="flex mt-3">
            <div className={`${infoStyles.option} ${infoStyles.option_selected} ${infoStyles.option_color}`}>
              <div className={infoStyles.color} />
            </div>
            <div className={`${infoStyles.option} ${infoStyles.option_color}`}>
              <div className={infoStyles.color} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <span className={styles.price}>20000₽</span>
      </div>
      <div className="mt-5">
        <button className={styles.button}>
          <span className="mr-2">В корзину</span><CartIcon />
        </button>
        <div></div>
      </div>
    </div>
  )
}