import React, { useEffect, useState } from "react";

const OrderSystem: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAuthenticated(true);
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (!authenticated) {
    return <p>Verificando autenticación...</p>;
  }

  return (
    <div>
      <h2>Order System</h2>
      {/* Contenido de la página de pedidos */}
    </div>
  );
};

export default OrderSystem;
