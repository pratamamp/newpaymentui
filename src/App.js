import React from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import AdminLayout from "./adminlayout";
import Cart from "./pages/admin/cart";
import BoardHome from "./pages/admin/home";
import MapViewer from "./pages/admin/mapviewer";
import Login from "./pages/login";
import { AuthProvider, useAuth } from "./hooks/auth";
import Success from "./pages/admin/success";
import MyFiles from "./pages/admin/files";
import Home from "./pages/home";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <Requireauth>
                <AdminLayout />
              </Requireauth>
            }
          >
            <Route index element={<BoardHome />} />
            <Route path="map" element={<MapViewer />} />
            <Route path="cart" element={<Cart />} />
            <Route path="success" element={<Success />} />
            <Route path="myfiles" element={<MyFiles />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

function Layout() {
  return <Outlet />;
}

// function AdminLayout() {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// }

// function Login() {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let auth = useAuth();

//   let from = location.state?.from?.pathname || "/";

//   function handleSubmit(event) {
//     event.preventDefault();

//     let formData = new FormData(event.currentTarget);
//     let username = formData.get("username");

//     auth.signIn(username, () => {
//       navigate(from, { replace: true });
//     });
//   }

//   return (
//     <div>
//       <p>You must login to view page at {from}</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Username: <input name="username" type="text" />
//         </label>
//         <button
//           type="submit"
//           className=" rounded bg-blue-100 border-2 border-gray-500 px-2"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

function Requireauth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect to /login page, but save the current location they were trying to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
