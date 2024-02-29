import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import Input from "../components/Input/Input";
import List from "../components/List/List";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppMiddleware } from "../redux/middlware/AppMiddleware";
import { getData } from "../redux/actions/appAction";

const Home = () => {
    const [search, setsearch] = useState(null);
    const [Loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    let timeout = useRef(null);
    const antIcon = <LoadingOutlined style={{ fontSize: 70, color: "blueviolet" }} spin />
    const usersList = useSelector((state) => state.AppReducer?.Users);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        dispatch(AppMiddleware.getUsers())
    }


    const onSearch = (e) => {
        console.log('====================================');
        console.log('fetChDta nahi chala');
        console.log('====================================');
        if (!e.target.value) {
            setsearch(e.target.value);
            fetchData();
            console.log('====================================');
            console.log('fetchData chala');
            console.log('====================================');
        }
        else {
            setsearch(e.target.value);
            setLoader(true);
            clearTimeout(timeout.current);
            timeout.current = setTimeout(() => {
                let arr = [...usersList]
                let filtered = arr?.filter((user) => {
                    return user.login.toLowerCase().includes(search.toLowerCase());
                });
                dispatch(getData(filtered))
                setLoader(false);
            }, 1000);
        }
    };

    return (
        <div>
            <div className={styles.upper_view}>
                <div className={styles.sub_div}>
                    <h2 className={styles.heading}>Users</h2>
                    <Input
                        placeholder={"Search user ..."}
                        value={search}
                        onChange={(e) => { onSearch(e) }}
                    />
                </div>
            </div>

            {
                Loader ?
                    <div className={styles.loader}>
                        <Spin indicator={antIcon} />
                    </div>
                    :
                    usersList?.length === 0 ?
                        <div className={styles.loader}>
                            <h3>No results found</h3>
                        </div>
                        :
                        <List options={usersList} />
            }

        </div>
    );
}

export default Home;