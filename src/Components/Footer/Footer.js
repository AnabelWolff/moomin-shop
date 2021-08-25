import "./Footer.css";

const Footer = () => {
    return (
        <div className={"footer"}>
        <p className={"footer__title"}>® Moomin Shop (Fan-page) </p>
        <p className={"footer__credit"}>
            Sitio hecho por Anabel Farias - Camada 16895: React
        </p>
        <button className={"footer__button"}>
            <a href="https://www.linkedin.com/in/anabelfarias/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
            </a>
        </button>
        <button className={"footer__button"}>
            <a href="https://github.com/AnabelFarias" target="_blank">
            <i class="fab fa-github"></i>
            </a>
        </button>
        </div>
    );
};
export default Footer;