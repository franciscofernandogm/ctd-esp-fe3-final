import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { users } = useContextGlobal();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
};

export default Home;
