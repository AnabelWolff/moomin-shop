import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { getFirestore } from "../../firebase";
import Header from "./../Header/Header";

const ItemDetailContainer = () => {
    const [detail, setDetails] = useState({});
    let { id } = useParams();
    const [loading, setLoading] = useState(true);

    const getItems = () => {
        const db = getFirestore();
        const items = db.collection("items");
        const item = items.doc(id);
        item
        .get()
        .then((doc) => {
            if (!doc.exists) {
            console.log("no existe el documento");
            return;
            }
            setDetails({ id: doc.id, ...doc.data() });
        })
        .catch((e) => console.log(`ocurrió un error ${e}`));
    };

    useEffect(() => {
        getItems();
        setLoading(false);
    }, [detail, id]);

    return (
        <div style={{ minHeight: "100vh" }}>
        {loading === true ? (
            <div className={"d-flex justify-content-center mt-5"}>
            <ScaleLoader
                color={"#e89f94"}
                loading={loading}
                height={100}
                width={10}
                radius={6}
                margin={6}
            />
            </div>
        ) : (
            <>
            <Header />
            <h3 className={"text-center mt-4"}>Detalle del producto</h3>
            <ItemDetail detail={detail} />
            </>
        )}
        </div>
    );
};

export default ItemDetailContainer;