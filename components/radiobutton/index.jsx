import styles from './styles.module.scss';

export function RadioButton({ children }) {
  return (
    <label className={styles.container}>
      {children}
      <input type="radio" name="radio" />
      <span className={styles.checkmark}></span>
    </label>
  )
}