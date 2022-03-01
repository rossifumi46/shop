import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import extended from '../../icons/extended.svg';
import extend from '../../icons/extend.svg';
import Image from 'next/image';

const list = [
  {
    name: 'Электроника'
  },
  {
    name: 'Обувь'
  },
  {
    name: 'Одежда'
  }
]

export default function CatalogExtended() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(true);

  const handle = (index) => {
    setActive(index);
    if (window.matchMedia("(max-width: 480px)").matches)
      setOpen(state => !state);
  }

  const isOpen = () => window.matchMedia("(max-width: 480px)").matches && open;

  const [top, setTop] = useState(140);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, []);

  function handleScroll() {
    if (window.scrollY > 140) {
      setTop(0);
    } else {
      setTop(140);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog} style={{ top }} />
      <div className={styles.container}>
        <div className={styles.catalog}>
          <div className={styles.flex}>
            <nav>
              <ul className={styles.list}>
                {list.map((item, index) => (
                  <li className={`${styles.item} ${active === index && isOpen ? styles.active : ''}`} onClick={() => handle(index)}>
                    <span>{item.name}</span>
                    <div className={styles.icon}>
                      {open && index === active ? <Image src={extended} /> : <Image src={extend} />}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`${styles.menu} ${!open ? styles.hidden : ''}`} style={{ top: window.matchMedia("(max-width: 480px)").matches ? `-${(list.length - (active+1))*50}px` : '0' }}>
              <div className={styles.block}>
                <h3 className={styles.title}>Телефоны и Смарт-часы</h3>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
              </div>
              <div className={styles.block}>
                <h3 className={styles.title}>Телефоны и Смарт-часы</h3>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
              </div>
              <div className={styles.block}>
                <h3 className={styles.title}>Телефоны и Смарт-часы</h3>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
              </div>
              <div className={styles.block}>
                <h3 className={styles.title}>Телефоны и Смарт-часы</h3>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
              </div>
              <div className={styles.block}>
                <h3 className={styles.title}>Телефоны и Смарт-часы</h3>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
                <span className={styles.subtitle}>Смартфоны</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}