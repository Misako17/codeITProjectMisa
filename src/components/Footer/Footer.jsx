import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© All Rights Reserved | {new Date().getFullYear()}</p>
    </footer>
  );
}
