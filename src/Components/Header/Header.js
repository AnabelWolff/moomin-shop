import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return <div className={"header"}>
        <div className={"header__container"}>
                <section>
                    <div className={"product-banner"}>
                        <div className={"hero-right"}>
                            
                            <div className={"hero-row"}> 
                                <h3>
                                    <span className={"hero-subtitle"}>Moomin by Arabia</span>
                                </h3>
                                <div className={"line"}></div>
                                <h2 className={"hero-title"}>
                                    <span>EXCLUSIVO ARABIA</span>
                                </h2>
                                <p>Las nuevas tazas Moomin de edición limitada de Arabia estarán disponibles en la tienda online oficial de Moomin en agosto. ¡Regístrese en las listas de espera hoy!</p>
                                <NavLink className={"btn-inicio button"} to="/category/mas-vendidos" activeClassName={"active"}>COMPRA AHORA</NavLink>
                            </div>
                        </div>
                        <div className="left" id="content">                        </div>
                    </div>

                </section>
            </div>
    </div>;
};



export default Header;