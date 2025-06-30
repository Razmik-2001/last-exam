import './App.css';
import {ToastContainer} from 'react-toastify';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>

                        <Route index element={<Navigate to="/login" replace />} />

                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="products" element={<Products />} />
                        <Route path="cart" element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
