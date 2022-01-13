import { Catalog } from "../catalog";
import { Search } from "./search";
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.main}>
        <img src="/logo.png" />
        <Search />
        <div>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
        </div>
      </div>
      <Catalog />
    </header>
  )
}
