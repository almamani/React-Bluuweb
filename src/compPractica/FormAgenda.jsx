import { useState, useEffect } from "react";

const FormAgenda = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({ name: "", email: "" });
  const { name, email } = data;

  //Capturar los datos
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Ingrese Nombre"
          className="form-control mb-3"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Ingrese Email"
          className="form-control mb-3"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default FormAgenda;
