import "./Item.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className={"item-div"} style={{ color: "black" }}>
        <Card className={"item-card"}>
            <Card.Body variant={"dark"}>
            <Card.Title className={"item-title"}>{item.title}</Card.Title>
            <Card.Img className={"item-img"} src={item.imageId} />
            <Link className="btn-shop" to={`/item/${item.id}`}>
                <Button
                style={{ borderRadius: "0.8rem" }}
                className={"btn btn-block"}
                >
                Ver Producto
                </Button>
            </Link>
            </Card.Body>
        </Card>
        </div>
    );
};

export default Item;