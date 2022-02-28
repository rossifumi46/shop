import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.nav}>
        <div className={styles.column}>
          <h3 className={styles.title}>Каталог</h3>
          <nav>
            <ul className="mt-5">
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
        <h3 className={styles.title}>Каталог</h3>
          <nav>
            <ul className="mt-5">
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
              <li className={styles.listItem}>Мужчинам</li>
            </ul>
          </nav>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Мы в соц сетях</h3>
          <nav>
            <ul className="mt-5">
              <li className={styles.listItem}>Вконтакте</li>
              <li className={styles.listItem}>Facebook</li>
              <li className={styles.listItem}>Instagram</li>
            </ul>
          </nav>
        </div>
        </div>
        <div className={styles.info}>
          <p className={styles.listItem}>2021-2022 © Vartmon — интернет-магазин одежды, обуви и многого другого.</p>
          <p className={styles.listItem}>Все права защищены.</p>
          <div className={styles.imageWrapper}>
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;