import styles from './styles.module.scss';

export function Checkbox({ children }) {
  return (
    <label className={styles.container}>
      {children}
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  )
}