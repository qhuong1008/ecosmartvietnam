import { useRouter } from "next/router";
import styles from "../../styles/navbar.module.scss";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img
            src="https://ecosmartvietnam.com/static/img/aboutus/logo.png"
            alt=""
          />
        </div>
        <div className={styles.navbarList}>
          <div onClick={() => router.push("/")} className={styles.navbarItem}>
            Trang chủ
          </div>
          <div onClick={() => router.push("/")} className={styles.navbarItem}>
            Sản phẩm
          </div>
          <div onClick={() => router.push("/")} className={styles.navbarItem}>
            Hoạt động
          </div>
          <div onClick={() => router.push("/")} className={styles.navbarItem}>
            Về chúng tôi
          </div>
          <div onClick={() => router.push("/")} className={styles.navbarItem}>
            Liên hệ
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
