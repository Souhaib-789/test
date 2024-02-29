import styles from "./Modal.module.css";
import { CgClose } from "react-icons/cg";

const Modal = (props) => {


  return (
    <div id="myModal" className={styles.grayBg} style={{ display: props?.isModalOpen ? "block" : "none" }}  >
      <div className={`${styles.modalContent}`} >
        <div className={styles.modalHeader}>
          <span className={styles.close} onClick={props?.onCloseModal}>
            <CgClose className={styles.closeIcon} />
          </span>
        </div>
        <div className={` ${styles.modalBody}`}>{props?.children}</div>

        <div className={styles.row}>
          <div>
            <h4>Followers</h4>
            <p>{props?.followers}</p>
          </div>

          <div>
            <h4>Following</h4>
            <p>{props?.following}</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>{props?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
