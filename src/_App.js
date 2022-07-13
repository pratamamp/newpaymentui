import { Routes, Route } from "react-router-dom";
import Layout from "./layout-v2";
import BoardHome from "./pages/admin/home";
import Login from "./pages/login";
import Home from "./pages/home";
import { AuthProvider } from "./hooks/auth";
import MapViewer from "./pages/admin/mapviewer";
import Cart from "./pages/admin/cart";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="admin" element={<Layout />}>
          <Route path="board" element={<BoardHome />} />
          <Route path="map" element={<MapViewer />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="log/in" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
