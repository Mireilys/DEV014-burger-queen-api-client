export const authenticateUser = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 400) {
      throw new Error("Faltan credenciales.");
    } else if (response.status === 404) {
      throw new Error("Endpoint no encontrado.");
    } else if (!response.ok) {
      throw new Error("Error en la solicitud.");
    }

    // Procesa la respuesta JSON
    const data = await response.json();

    // Devuelve los datos necesarios
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error en la autenticación:", error.message);
      throw new Error(error.message);
    } else {
      console.error("Error desconocido.");
      throw new Error("Error desconocido.");
    }
  }
};
