import type React from "react";
import { Outlet } from "react-router";
import { useAppContext } from "../contexts/AppContext";
import styles from "./App.module.css";

const App: React.FC = () => {
  const { theme } = useAppContext();

  return (
    <>
      <div
        className={`${styles.main} ${
          theme === "light" ? styles.lightTheme : styles.darkTheme
        }`}
      >
        <header className={styles.headerContainer}>
          <div className={styles.titleContainer}>
            <h1>neForum</h1>
          </div>

          <nav className={styles.navigationContainer}></nav>

          <div className={styles.accountInfoContainer}></div>
        </header>

        <div className={styles.content}>
          <Outlet context={theme}/>
        </div>

        <footer className={styles.footerContainer}></footer>
      </div>
    </>
  );
}

export default App;
