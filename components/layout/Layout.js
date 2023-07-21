import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">LoveFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Next.js project | LoveFood by{" "}
        <a
          href="https://github.com/Valadi-Mostafa"
          target="_blank"
          rel="noreferrer"
        >
          Mostafa
        </a>{" "}
        &copy;
      </footer>
    </>
  );
}

export default Layout;
