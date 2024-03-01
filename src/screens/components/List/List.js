import React from "react";
import styles from ".//List.module.css";
// import Card from "../Card/Card";
import { Card, List } from 'antd';

const Listx = (props) => {
    return (
        <div className={styles.row}>
            {/* {
                props?.options?.map((item , index) => {
                    return (
                        <Card item={item} index={index} />
                    );
                })
            } */}

            <List
                grid={{
                    gutter: 16,
                    column: 4,
                }}
                dataSource={props?.options}
                renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>Card content</Card>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Listx;