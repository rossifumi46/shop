import styles from './styles.module.scss';
import Link from 'next/link'

export function BreadCrumbs({ list }) {
  return (
    <div className={styles.container}>
      {list.map(item => (
        <Link href={item.link ?? '/'}><a className={styles.item}>{item.name}</a></Link>
      ))}
    </div>
  )
}