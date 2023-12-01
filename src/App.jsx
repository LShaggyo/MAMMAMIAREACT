import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from './context/Context';
import Home from "./views/Home";
import Cart from "./views/Cart";
import Pizza from "./views/Pizza";


import Navbar from "./components/NavBar";


function App() {

    return (

        <div className ='App'>
            <BrowserRouter>
                <Provider>

                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/pizza/:id" element={<Pizza />} />
                    </Routes>

                </Provider>
            </BrowserRouter>
        </div>

    );
}

export default App;