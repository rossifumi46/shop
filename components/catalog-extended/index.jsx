import styles from './styles.module.scss';
import { useState, useEffect } from 'react';
import extended from '../../icons/extended.svg';
import extend from '../../icons/extend.svg';
import Image from 'next/image';

const list = [
  {
    name: 'Электроника',
    list: [
      {
        block: 'Телефоны и Смарт-часы',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Ноутбуки, планшеты и электронные книги',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Аудиотехника',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Компьютеры и комплектующие',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Умный дом и безопасность',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
    ]
  },
  {
    name: 'Обувь',
    list: [
      {
        block: 'Женщинам',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Мужчинам',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Уход и аксессуары',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Детям',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      }
    ]
  },
  {
    name: 'Одежда',
    list: [
      {
        block: 'Женщинам',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Уход за одеждой',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Детям',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      },
      {
        block: 'Спецодежда',
        cats: [
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
          'Смартфоны',
        ]
      }
    ]
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
              {list[active].list.map(block => (
                <div className={styles.block}>
                  <h3 className={styles.title}>{block.block}</h3>
                  {block.cats.map(cat => <span className={styles.subtitle}>{cat}</span>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}