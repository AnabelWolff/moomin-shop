import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].item.price * cart[i].quantity;
    }

    if (cart.length === 0) {
        return (
        <div className={"cart__font"}>
            <p className={"cart__title"}>TU CARRITO ESTÁ VACÍO</p>
            <p className={"cart__subtitle"}>
            Mira nuestro productos!
            </p>
            <div className={"cart__img"}>
            <img className={"cart__bg"}></img>
            <Link to="/">
                <Button md={3} className={"cart__button mt-0"} variant={"dark"}>
                VER TIENDA
                </Button>
            </Link>
            </div >
            
        </div>
        );
    }  else {
        return (
        <div className={"cart__row-div"}>
            <h2 className={"text-center mt-3"}>TU COMPRA</h2>
            {cart.map((x) => (
            <Row className={"cart__row"} key={x.item.id}>
                <Col md={3}>
                <img className={"cart__row-img"} src={x.item.imageId}></img>
                </Col>
                <Col md={3} className={"cart__row-items"}>
                <p>{x.item.title}</p>
                </Col>
                <Col md={2} className={"cart__row-items"}>
                <p>Cantidad: {x.quantity}</p>
                </Col>
                <Col md={2} className={"cart__row-items"}>
                <p>Precio: ${x.item.price}</p>
                </Col>
                <Col md={2} className={"cart__row-button"}>
                <Button variant={"dark"} onClick={() => removeItem(x.item.id)}>
                    Eliminar
                </Button>
                </Col>
            </Row>
            ))}
            <h2 className={"text-center mt-5"}>Total: $ {total} </h2>
            <div className={"d-flex justify-content-center mb-5"}>
            <Button
                className={"mt-3 mb-5"}
                variant={"dark"}
                onClick={() => clear()}
            >
                Vaciar Carrito
            </Button>
            <Link to="/checkout">
                <Button className={"ml-2 mt-3 mb-5"} variant={"dark"}>
                Terminar compra
                </Button>
            </Link>
            </div>
        </div>
        );
    }
};

export default Cart;