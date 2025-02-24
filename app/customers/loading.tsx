import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      {/* Spinner animado */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500 border-opacity-50"></div>
      
      {/* Texto de carga */}
      <p className="mt-4 text-gray-600 font-medium text-lg">Cargando...</p>
    </div>
  );
}