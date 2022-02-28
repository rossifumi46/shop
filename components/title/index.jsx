import Link from 'next/link'
import styles from './styles.module.scss';

export function Title({ title='Бестселлеры' }) {
  return (
    <div>
      <span className="title">{title}</span>
      <Link href="/main">
        <a className={styles.link}>Показать все</a>
      </Link>
    </div>
  )
}
