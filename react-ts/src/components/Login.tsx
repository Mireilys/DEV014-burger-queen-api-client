import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { authenticateUser } from "../services/authService";

const LoginComponent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await authenticateUser(email, password);
      if (data.accessToken) {
        // Almacena el token en el almacenamiento local
        localStorage.setItem("accessToken", data.accessToken);
        // Redirige al usuario a la página de pedidos
        window.location.href = "/order-system";
      } else {
        setError("Credenciales inválidas. Inténtalo de nuevo.");
      }
    } catch (error) {
      setError("Ocurrió un error. Inténtalo de nuevo.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Bienvenido a Burger Queen</h2>
      <p>Iniciá sesión para continuar</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
