"use client"; // Indica que este componente solo se ejecutará en el cliente

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const AgentFilter = () => {
  // Obtener los parámetros de búsqueda actuales
  const searchParams = useSearchParams();
  // Obtener la ruta actual sin parámetros
  const pathname = usePathname();
  // Hook para manejar la navegación programáticamente
  const router = useRouter();

  /**
   * Maneja el cambio en el filtro de estado de los agentes.
   * Actualiza los parámetros de búsqueda y redirige a la nueva URL con el filtro aplicado.
   * @param {Event} event - Evento de cambio del select.
   */
  const handleFilterChange = (event) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams); // Clona los parámetros actuales

    if (value) {
      params.set("status", value); // Agrega o actualiza el parámetro de estado
    } else {
      params.delete("status"); // Elimina el parámetro si no se selecciona nada
    }

    // Redirigir a la misma página con los nuevos parámetros
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <label className="mr-2">Filtrar por estado:</label>
      <select
        onChange={handleFilterChange}
        defaultValue={searchParams.get("status") || ""} // Mantiene la selección actual en el select
        className="border p-2 rounded"
      >
        <option value="">Todos</option>
        <option value="disponible">Disponible</option>
        <option value="en llamada">En Llamada</option>
      </select>
    </div>
  );
};

export default AgentFilter;