"use client"; // Indica que este componente se ejecuta en el cliente en una aplicación Next.js con Server Components habilitados.

import React from "react";
import CustomerFilter from "../components/CustomerFilter"; // Componente para filtrar clientes.
import CustomerTable from "../components/CustomerTable"; // Componente para mostrar la tabla de clientes.
import BackToHome from "../components/BackToHome"; // Botón para regresar a la página principal.

const CustomersPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-teal-600 flex flex-col items-center py-10 px-4">
      {/* Contenedor principal con fondo degradado y diseño centrado */}

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
        {/* Tarjeta blanca con sombra y bordes redondeados para mejorar la presentación */}

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🏷 Lista de Clientes
        </h1>

        <div className="flex justify-end mb-4">
          {/* Botón para regresar a la página principal */}
          <BackToHome />
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {/* Sección del filtro de clientes */}
          <CustomerFilter />
        </div>

        <div className="mt-6">
          {/* Tabla de clientes */}
          <CustomerTable />
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;