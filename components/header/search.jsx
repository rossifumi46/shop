import styles from './styles.module.scss';
import { useState } from 'react';
import { SearchSuggestIcon } from '../../icons/SearchSuggest';
import { SearchInputIcon } from '../../icons/SearchInput';



export const Item = () => <div className={styles.item}>
  <SearchSuggestIcon />
  <span>Ноутбук Apple</span>
</div>

export function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <form action="">
        <input placeholder="Например, Кроссовки" className={`${styles.input} ${open ? styles.input_open : ''}`} type="text" onFocus={() => setOpen(true)} onBlur={() => setOpen(false)} />
        <button className={`${styles.btn} ${open ? styles.btn_open : ''}`}>
          <SearchInputIcon />
          <span>Поиск</span></button>
      </form>
      {open && <div className={styles.suggest}>
        <Item />
        <Item />
        <Item />
        <Item />
        </div>}
    </div>
  )
}