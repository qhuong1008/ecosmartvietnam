import styles from "../../styles/category.module.scss";
import {
  faBars,
  faCaretRight,
  faFilter,
  faList,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Category() {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryHeader}>
        <div className="icon">
          <FontAwesomeIcon icon={faList} />
        </div>
        <label>Tất Cả Danh Mục</label>
      </div>
      <div className={styles.ruler}></div>
      <div className={styles.categoryList}>
        <div className={`${styles.categoryItem} ${styles.active}`}>
          <FontAwesomeIcon icon={faCaretRight} className={styles.icon} />
          Tinh dầu 1
        </div>
        <div className={styles.categoryItem}>Tinh dầu 2</div>
        <div className={styles.categoryItem}>Tinh dầu 3</div>
        <div className={styles.categoryItem}>Tinh dầu 4</div>
        <div className={styles.categoryItem}>Tinh dầu 5</div>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.filterHeader}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <label>BỘ LỌC TÌM KIẾM</label>
        </div>
      </div>
    </div>
  );
}

export default Category;
