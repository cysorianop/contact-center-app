"use client"; // Indica que este componente se ejecuta solo en el cliente

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation"; // Hooks para manejar la navegación y parámetros de búsqueda

const CustomerFilter = () => {
  const searchParams = useSearchParams(); // Obtiene los parámetros de búsqueda de la URL
  const pathname = usePathname(); // Obtiene la ruta actual de la aplicación
  const router = useRouter(); // Permite la navegación programática

  /**
   * Maneja el cambio en el campo de entrada.
   * Actualiza el parámetro 'minWaitTime' en la URL con el nuevo valor ingresado.
   * Si el valor está vacío, elimina el parámetro de la URL.
   */
  const handleFilterChange = (event) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("minWaitTime", value); // Agrega el filtro de tiempo de espera mínimo
    } else {
      params.delete("minWaitTime"); // Elimina el filtro si el campo está vacío
    }

    // Actualiza la URL con los nuevos parámetros sin recargar la página
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      {/* Etiqueta para el campo de filtro */}
      <label className="text-gray-700 font-semibold mb-2">
        ⏳ Tiempo de espera mínimo:
      </label>
      
      {/* Campo de entrada para el tiempo de espera mínimo */}
      <input
        type="number"
        onChange={handleFilterChange} // Llama a la función cuando el usuario cambia el valor
        defaultValue={searchParams.get("minWaitTime") || ""} // Establece el valor por defecto según la URL
        className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2 
          focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
        placeholder="Ingrese el tiempo en minutos"
      />
    </div>
  );
};

export default CustomerFilter;