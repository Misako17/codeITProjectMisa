import React from "react";
import styles from "./Footer.module.css";
const t = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© All Rights Reserved | {t}</p>
    </footer>
  );
}
