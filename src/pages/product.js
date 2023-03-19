import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import Category from "@/components/category/category";
import Sortbar from "@/components/sortbar/sortbar";
import styles from "../styles/product.module.scss";

function product() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className={styles.productPageContainer}>
        <div className={styles.left}>
          <Category />
        </div>
        <div className={styles.right}>
          <Sortbar />
          <div className={styles.productListContainer}></div>
        </div>
      </div>
    </>
  );
}

export default product;
