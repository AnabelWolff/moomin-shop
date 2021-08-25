import Item from "../Item/Item";
import "./ItemList.css";
import { useParams } from "react-router";
import Header from "./../Header/Header";

const ItemList = ({ items }) => {
    const { categoryId } = useParams();

    if (categoryId === undefined) {
        return (
        <div style={{ minHeight: "100vh" }}>
            <Header />
            <p className={"itemList-title"}> Catalogo de productos</p>
            <div className="itemsContainer">
            {items.map((item, id) => (
                <div key={id}>
                <Item item={item} />
                </div>
            ))}
            </div>
        </div>
        );
    } else {
        return (
        <div style={{ minHeight: "100vh" }}>
            <Header />
            <h2 className={"itemList-title"}>{categoryId}</h2>
            <div className="itemsContainer">
            {items
                .filter((item) => item.categoryId === categoryId)
                .map((item, id) => (
                <div key={id}>
                    <Item item={item} />
                </div>
                ))}
            </div>
        </div>
        );
    }
};

export default ItemList;