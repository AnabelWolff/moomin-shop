import Cartwidget from "../Cartwidget/Cartwidget";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="menu__container">
            <Link exact to="/moomin-shop/">Moomin Shop
                <label className="menu__label"></label>
            </Link>
            <ul className="menu">
                <NavLink className="menu__options" to="/category/mugs" activeClassName={"active"}>Mugs</NavLink>
                <NavLink className="menu__options" to="/category/mas-vendidos" activeClassName={"active"}>Mas Vendidos</NavLink>
                <NavLink className="menu__options" to="/category/cafe" activeClassName={"active"}> Cafe </NavLink>
                <NavLink className="menu__options" exact to="/cart" activeClassName={"cartOn"}>
                    <Cartwidget/>
                </NavLink>
            </ul>
        </header>
    );
};

export default Navbar;