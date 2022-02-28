import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export const CatalogBtn = ({ handle }) => 
  <button onClick={handle} className={styles.btn}>Каталог</button>


export function Catalog({ open, handle }) {
  return (
      <div className={styles.catalog + ' pt-8'}>
        <CatalogBtn handle={handle} />
        <Link href=""><span className="ml-8">Мужчинам</span></Link>
        <Link href=""><span className="ml-8">Женщинам</span></Link>
        <Link href=""><span className="ml-8">Детям</span></Link>
        <Link href=""><span className="ml-8">Спецодежда</span></Link>
        <Link href=""><span className="ml-8">Для спорта</span></Link>
        <Link href=""><span className="ml-8">Для Школы</span></Link>
        <Link href=""><span className="ml-8">Для Школы</span></Link>
        <Link href=""><span className="ml-8">Для Школы</span></Link>
        <Link href=""><span className="ml-8">Для Школы</span></Link>
      </div>
  )
}
