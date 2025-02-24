// Importamos los estilos globales de la aplicación
import "../app/globals.css";
import React from "react";
// Importamos el proveedor de contexto para el manejo global de datos
import { DataProvider } from "./context/DataContext";
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}