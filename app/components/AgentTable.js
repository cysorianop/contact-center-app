"use client"; // Indica que este componente solo se ejecutará en el cliente

import React from "react";
import { useData } from "../context/DataContext"; // Importa el contexto global de datos
import { useSearchParams } from "next/navigation"; // Hook para obtener los parámetros de la URL

const AgentTable = () => {
  const { agents } = useData(); // Obtener la lista de agentes desde el contexto global
  const searchParams = useSearchParams(); // Obtener los parámetros de búsqueda de la URL
  const statusFilter = searchParams.get("status") || ""; // Obtener el filtro de estado si está presente

  /**
   * Filtrar los agentes según el estado seleccionado en los parámetros de búsqueda.
   * Si no hay filtro aplicado, muestra todos los agentes.
   */
  const filteredAgents = statusFilter
    ? agents.filter((agent) => agent.status === statusFilter)
    : agents;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-max w-full border-collapse border border-gray-300 shadow-lg bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-3 text-left text-gray-700">ID</th>
            <th className="border p-3 text-left text-gray-700">Nombre</th>
            <th className="border p-3 text-left text-gray-700">Estado</th>
          </tr>
        </thead>
        <tbody>
          {filteredAgents.length > 0 ? (
            // Mapea los agentes filtrados y los muestra en la tabla
            filteredAgents.map((agent) => (
              <tr key={agent.id} className="odd:bg-gray-100 even:bg-white">
                <td className="border p-3">{agent.id}</td>
                <td className="border p-3">{agent.name}</td>
                <td className="border p-3">{agent.status}</td>
              </tr>
            ))
          ) : (
            // Muestra un mensaje si no hay agentes disponibles
            <tr>
              <td colSpan="3" className="border p-3 text-center text-gray-500">
                No hay agentes disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AgentTable;