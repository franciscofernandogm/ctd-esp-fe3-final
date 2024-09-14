import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ user }) => {
  const { setFavs } = useContextGlobal();

  const addFav = (usu) => {
    setFavs((favs) => [...favs, usu]);
  };

  return (
    <div className="card">
      <Link to={`dentist/${user.id}`}>
        <h4>{user.name}</h4>
        <p>@{user.username}</p>
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
