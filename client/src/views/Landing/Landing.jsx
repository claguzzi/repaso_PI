import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Verifica si ambos campos están completos
  const isFormComplete = username.trim() !== "" && password.trim() !== "";

  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Bienvenido</h1>

      <form className="flex flex-col items-center space-y-4 w-80">
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Link
          to={isFormComplete ? "/home" : "#"}
          className={`w-full text-center font-bold py-2 px-4 rounded transition duration-200 ${
            isFormComplete
              ? "bg-blue-500 hover:bg-blue-700 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          onClick={(e) => {
            if (!isFormComplete) e.preventDefault();
          }}
        >
          INGRESAR
        </Link>
      </form>
    </div>
  );
};

export default Landing;
