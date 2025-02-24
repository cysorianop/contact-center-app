"use client";

import React from "react";
import { useData } from "../context/DataContext";
import { useSearchParams } from "next/navigation";

const CustomerTable = () => {
  const { customers } = useData(); // Obtiene los clientes desde el contexto global
  const searchParams = useSearchParams();
  const minWaitTime = Number(searchParams.get("minWaitTime"));

  // Validamos que minWaitTime sea un número válido
  const minWaitTimeValue = Number.isNaN(minWaitTime) ? 0 : minWaitTime;

  // Verificamos que customers sea un array antes de aplicar filter
  const filteredCustomers = Array.isArray(customers)
    ? customers.filter((customer) => customer.waitTime >= minWaitTimeValue)
    : [];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-teal-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
            <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
            <th className="px-6 py-3 text-center text-sm font-semibold">
              ⏳ Tiempo de Espera (min)
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="border-b border-gray-200 odd:bg-gray-100 even:bg-white"
              >
                <td className="px-6 py-3 text-gray-600">{customer.id}</td>
                <td className="px-6 py-3 text-gray-600">{customer.name}</td>
                <td className="px-6 py-3 text-center text-gray-600">
                  {customer.waitTime} min
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4 text-gray-500">
                No hay clientes con este tiempo de espera.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;