import styles from "../../styles/category.module.scss";
import {
  faBars,
  faCaretDown,
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
        <div className={styles.filterGroup}>
          <div className={styles.filterGroupLabel}>Theo Danh Mục</div>
          <div className={styles.filterGroupList}>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Áo thun (+700k)</span>
            </div>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Áo khoác (+500k)</span>
            </div>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Áo sơ mi (+600k)</span>
            </div>
          </div>
          <div className={styles.filterMore}>
            <span>Thêm</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className={styles.ruler}></div>
        </div>
        <div className={styles.filterGroup}>
          <div className={styles.filterGroupLabel}>Đơn Vị Vận Chuyển</div>
          <div className={styles.filterGroupList}>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Hỏa tốc</span>
            </div>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Nhanh</span>
            </div>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Tiết kiệm</span>
            </div>
          </div>
          <div className={styles.ruler}></div>
        </div>
        <div className={styles.filterGroup}>
          <div className={styles.filterGroupLabel}>Khoảng giá</div>
          <div className={styles.priceRangeFilter}>
            <input
              type="text"
              placeholder="₫ TỪ"
              className={styles.priceRangeFilter__input}
            />
            -
            <input
              type="text"
              placeholder="₫ ĐẾN"
              className={styles.priceRangeFilter__input}
            />
          </div>
          <div className={styles.btn}>ÁP DỤNG</div>
          <div className={styles.ruler}></div>
        </div>

        <div className={styles.filterGroup}>
          <div className={styles.filterGroupLabel}>Dịch Vụ & Khuyến Mãi</div>
          <div className={styles.filterGroupList}>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Freeship Xtra</span>
            </div>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Hoàn xu Xtra</span>
            </div>
            <div className={styles.filterGroupItem}>
              <input type="checkbox" />
              <span>Đang giảm giá</span>
            </div>
          </div>
          <div className={styles.filterMore}>
            <span>Thêm</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          <div className={styles.ruler}></div>
        </div>
        <div className={styles.ruler}></div>
        <div className={`${styles.btn} ${styles.deleteAllFilterBtn}`}>
          XÓA TẤT CẢ
        </div>
      </div>
    </div>
  );
}

export default Category;
