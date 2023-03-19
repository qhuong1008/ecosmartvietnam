import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";
import Product from "@/components/product/product";
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
          <div className={styles.productContent}>
            <Sortbar />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className={styles.Ads}>

          </div>
        </div>
      </div>

    </>
  );
}

export default product;
