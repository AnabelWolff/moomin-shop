import ItemList from "../ItemList/ItemList";
import React , { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import { getFirestore } from "../../firebase";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection
        .get()
        .then((querySnapshot) => {
            let itemsProd = querySnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
            });
            setItems(itemsProd);
        })
        .catch((e) => {
            console.log(`error inesperado ${e}`);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div style={{ minHeight: "100vh" }}>
        {loading === true ? (
            <div className={"d-flex justify-content-center mt-5"}>
            <ScaleLoader
                color={"#343A40"}
                loading={loading}
                height={100}
                width={10}
                radius={6}
                margin={6}
            />
            </div>
        ) : (
            <ItemList items={items} />
        )}
        </div>
    );
};

export default ItemListContainer;