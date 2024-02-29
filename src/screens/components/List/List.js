import React from "react";
import styles from ".//List.module.css";
import Card from "../Card/Card";

const List = (props) => {
    return (
        <div className={styles.row}>
            {
                props?.options?.map((item , index) => {
                    return (
                        <Card item={item} index={index} />
                    );
                })
            }
        </div>
    );
}

export default List;