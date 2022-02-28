import styles from './styles.module.scss';

export function Category({ name }) {
  return (
    <div className={styles.container}>
      <img src="" alt=""/>
      <span>{name}</span>
    </div>
  )
}