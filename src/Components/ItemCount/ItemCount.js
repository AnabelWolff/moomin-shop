import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ value = 1, onAdd, onSubtract }) => {
    return (
        <div className={"div-count"}>
        <Button
            variant="dark"
            className="handler-button"
            onClick={() => onSubtract()}
        >
            -
        </Button>
        <input className={"quantity"} value={value} />
        <Button variant="dark" className="handler-button" onClick={() => onAdd()}>
            +
        </Button>
        </div>
    );
};
export default ItemCount;