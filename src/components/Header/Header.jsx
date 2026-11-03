import Link from "next/link";
import styles from "./Header.module.css";

function Header({ listOfLinks }) {
  return (
    <header className={styles.headerCont}>
      <Link href="/about" className={`${styles.navItem} ${styles.logo}`}>
        CodeIT
      </Link>
     
      <nav className={styles.navCont}>
        <ul className={styles.navList}>
          {listOfLinks.map((link, index, array) => {
            return (
              <li key={link.title + index} >
                <Link className={styles.navItem} href={link.path}> {link.title }</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
