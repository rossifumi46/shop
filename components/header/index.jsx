
import { useState } from 'react';
import Link from 'next/link';
import { Catalog, CatalogBtn } from "../catalog";
import { Search } from "./search";
import styles from './styles.module.scss';
import { ProfileIcon } from "../../icons/Profile";
import { FavoriteIcon } from "../../icons/Favorite";
import { ShopIcon } from "../../icons/Shop";
import { BurgerMenuIcon } from '../../icons/BurgerMenu';
import { SearchIcon } from '../../icons/Search';
import CatalogExtended from '../catalog-extended';
import SearchExtended from '../search-extended';

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const handle = () => setOpen(state => !state);

  return (
    <header className={styles.header}>
      {open && <CatalogExtended />}
      {search && <SearchExtended close={() => setSearch(false)} />}
      <div className="flex justify-between items-center">
        <span className={styles.burger} onClick={handle} role="presentation"><BurgerMenuIcon /></span>
        <img className={styles.logo} src="/logo.png" alt="logo" />
        <div className={styles.catalog_btn} onClick={handle}>
          <CatalogBtn />
        </div>
        <Search />

        <div className="flex">
          <Link href="/profile"><div className={styles.icon}>
            <ProfileIcon />
          </div></Link>
          <Link href="/favourite"><div className={styles.icon + ' ml-5'}>
            <FavoriteIcon />
          </div></Link>
          <Link href="/cart">
            <div className={styles.icon + ' ml-5'}>
              <ShopIcon />
            </div>
          </Link>
          <span className={styles.search_icon} onClick={() => setSearch(state => !state)} role="presentation">
            <SearchIcon />
          </span>
        </div>
      </div>
      <Catalog open={open} handle={handle} />
    </header>
  )
}
