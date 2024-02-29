import React, { useEffect } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
    return (
        <div>
            <input type="text" placeholder={props?.placeholder} className={styles.search} value={props?.value} onChange={props?.onChange}  />
        </div>
    );
}

export default Input;