import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext({
  user: null,
  signIn: () => {},
  signOut: () => {},
});
const API_URL = process.env.REACT_APP_API_GATEWAY;

export function AuthProvider({ children }) {
  let [user, setUser] = useState(() => {
    const localData = localStorage.getItem("authInfo");
    return localData ? JSON.parse(localData) : null;
  });
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/admin";

  const signIn = async (newUser) => {
    // setUser(newUser);
    const { email, pass } = newUser;

    try {
      await axios
        .post(`${API_URL}/users/login`, {
          email: email,
          password: pass,
        })
        .then((response) => {
          if (response.data) {
            const token = response.data.data.token;
            const decode = jwtDecode(token);

            setUser({
              token,
            });
            navigate(from, { replace: true });
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

  let signOut = () => {
    localStorage.removeItem("authInfo");
    navigate("/", { replace: true });
  };

  useEffect(() => {
    localStorage.setItem("authInfo", JSON.stringify(user));

    // if (user) {
    //   navigate(from, { replace: true });
    // }
  }, [user]);

  const contextValue = { signIn, signOut, user };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
