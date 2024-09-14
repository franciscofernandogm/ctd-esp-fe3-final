import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetails] = useState({});
  const { id } = useParams();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    axios(url).then((res) => {
      setDetails(res.data);
    });
  }, []);

  console.log(detail);
  return (
    <>
      <h1>Detail Dentist id {detail.id}</h1>
      <p>Nombre: {detail.name}</p>
      <p>Email: {detail.email}</p>
      <p>Teléfono: {detail.phone}</p>
      <p>Sitio web: {detail.website}</p>
    </>
  );
};

export default Detail;
