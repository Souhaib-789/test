import React, { useState } from "react";
import styles from "./Card.module.css";
import Modal from "../Modal/Modal";
import axios from "axios";


const Card = (props) => {
    const [isModalOpen, setisModalOpen] = useState(false);

    const [details, setDetails] = useState({});

    const getmoreData = () => {
        
        setisModalOpen(true)
        axios.get(props?.url).then((res) => {
            setDetails(res?.data)
        }).catch((err) => {
            console.log('err', err);
        })
    }
    return (
        <div key={props?.index}>
            <div className={styles.card} onClick={getmoreData}>
                <img src={props?.item?.avatar_url} alt="Avatar" className={styles.avatar} />
                <div className={styles.card_content}>
                    <h2>{props?.item?.login}</h2>
                    <p>{props?.item?.url}</p>
                </div>
            </div>

            <Modal
                url={props?.item?.url}
                isModalOpen={isModalOpen}
                followers={details?.followers}
                following={details?.following}
                location={details?.location}
                onCloseModal={() => setisModalOpen(false)}
            >
                <img src={props?.item?.avatar_url} alt="Avatar" className={styles.avatar} />
                <div className={styles.card_content}>
                    <h2>{props?.item?.login}</h2>
                    <p><a href={props?.item?.html_url}>{props?.item?.html_url}</a></p>
                </div>
            </Modal>
        </div>
    );
}

export default Card;