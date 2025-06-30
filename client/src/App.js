import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>

                        <Route index element={<Navigate to="/login" replace />} />

                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
