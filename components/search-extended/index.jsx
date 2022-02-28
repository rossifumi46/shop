import styles from './styles.module.scss';
import { SearchInputIcon } from '../../icons/SearchInput';
import { Item } from '../header/search';

export default function SearchExtended({ close }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog} onClick={close} />
      <div className={styles.container}>
        <div className={styles.catalog}>
          <div className={styles.flex}>
            <form action="" className={styles.form}>
              <input 
                placeholder="Например, Кроссовки"
                className={`${styles.input} ${open ? styles.input_open : ''}`}
                type="text"
              />
              <button className={styles.btn}>Отмена</button>
            </form>
            <div className={styles.suggest}>
              <Item />
              <Item />
              <Item />
              <Item />
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}