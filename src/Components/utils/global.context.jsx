import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();

let lsFavs = [];

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const [favs, setFavs] = useState(lsFavs);
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  return (
    <ContextGlobal.Provider value={{ theme, setTheme, favs, setFavs, users }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
