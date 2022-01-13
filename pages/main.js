import { Header } from "../components/header";
import styles from './main.module.scss';

export default function Main() {
  return (
    <div className={styles.main}>
      <Header />
    </div>
  )
}