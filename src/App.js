import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./Components/Checkout/Checkout";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
            <Router>
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={ItemListContainer} />
                        <Route path="/moomin-shop" component={ItemListContainer} />
                        <Route exact path="/item/:id" component={ItemDetailContainer} />
                        <Route path="/category/:categoryId" component={ItemListContainer} />
                        <Route exact path="/cart" component={Cart} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="*" component={ErrorPage} />
                    </Switch>
                <Footer />
            </Router>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;