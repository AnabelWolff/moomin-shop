import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className={"error__container"}>
            <img className="imgError"></img>
            <Link to="/" className={"error__btn-container"}>
                <Button className={"error__button"} variant={"dark"}>
                Volver a Home
                </Button>
            </Link>
        
        </div>
    );
};

export default ErrorPage;