/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar/Navbar";
import { Logo } from "../components/icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Layout />
      <div className="container">
        <div className={styles.wrapper}>
          <a
            className={styles.signup}
            href="https://genadrop.com/mint/vibe"
            target="_blank"
            rel="noreferrer"
          >
            <span>Create A Vibe</span>
          </a>
          <Logo />
        </div>
      </div>
      <div className={styles.copyright}>
        <div>proof of vibes</div>
        &nbsp; © {new Date().getFullYear()}
      </div>
    </div>
  );
}
