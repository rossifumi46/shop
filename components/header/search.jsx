import styles from './styles.module.scss';

export function Search() {
  return (
    <div>
      <form action="">
        <input className={styles.input} type="text" />
        <button className={styles.btn}>Поиск</button>
      </form>
    </div>
  )
}