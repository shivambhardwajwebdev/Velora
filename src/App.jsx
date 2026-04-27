import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register"
import Profile from "./pages/Profile";
import VerifyNotice from "./pages/VerifyNotice";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element ={<Profile/>}/>
        <Route path="/verify" element={<VerifyNotice/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;