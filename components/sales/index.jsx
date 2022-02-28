import styles from './styles.module.scss';

export function Sales() {
  return (
    <div className="w-full mt-[35px]">
      <div className={styles.grid_1}>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
      </div>
      <div className={styles.grid_2}>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
        <div className={styles.cell}></div>
      </div>
    </div>
  )
}