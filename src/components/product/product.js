import styles from "../../styles/products.module.scss";
import {
  faStar, faCrown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar as starUnchecked} from "@fortawesome/free-regular-svg-icons";
import Image from 'next/image'

function Product() {
  return (
    <div className={styles.productItemContainer}>
        <div className={styles.productImage}>
            <div className={styles.productHeader}>
                <span className={styles.productAchieve}>
                    <FontAwesomeIcon icon={faCrown}/>
                </span>
                <div className={styles.productDiscount}>
                    Giảm <br/> <strong>29k</strong>
                </div>
            </div>
        </div>
        <div className={styles.productContent}>
            <div className={styles.productContentTitle}>
                Dầu dưỡng Hoàng Lan
            </div>
            <div className={styles.productContentPromote}>
                Mua 2 tặng 1
            </div>
            <span className={styles.productContentPrice}>
                {/* Database Format : $minPrice - $maxPrice  */}
                90.000 đ
            </span>
            <div className={styles.productRate}>
                <span className={styles.productRateStar}>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={starUnchecked} />
                </span>
                <span className={styles.productSaled}>
                    Đã bán 2.4k
                </span>
            </div>
            <span className={styles.productPlace}>
                Đồng Nai
            </span>
        </div>
    </div>
  );
}

export default Product;
