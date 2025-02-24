"use client";

import React from "react";
import AgentFilter from "../components/AgentFilter";
import AgentTable from "../components/AgentTable";
import BackToHome from "../components/BackToHome";

const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center py-16 px-4">
      {/* Contenedor principal con sombras y bordes redondeados */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-6xl">
        {/* Título centrado con icono */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          🕵️‍♂️ Lista de Agentes
        </h1>

        {/* Botón de regreso alineado a la derecha */}
        <div className="flex justify-end mb-6">
          <BackToHome aria-label="Volver a la página de inicio" />
        </div>

        {/* Sección de filtros con fondo sutil */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <AgentFilter />
        </div>

        {/* Tabla de agentes con espaciado adecuado */}
        <div className="mt-8">
          <AgentTable />
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;