import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>아아아아아아아아아아아아아아아아</main>
      <Footer />
    </div>
  );
};

export default Layout;
