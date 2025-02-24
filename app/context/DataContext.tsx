"use client"; // Indica que este código debe ejecutarse solo en el cliente

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import socket from "../../services/socket";

// Crear el contexto con valores iniciales vacíos para agentes y clientes
const DataContext = createContext({ agents: [], customers: [] });

export const DataProvider = ({ children }) => {
  // Estados para almacenar la lista de agentes y clientes
  const [agents, setAgents] = useState([]);
  const [customers, setCustomers] = useState([]);
  
  // Hook para obtener los parámetros de búsqueda de la URL
  const searchParams = useSearchParams();

  /**
   * Función para filtrar los datos en función de los parámetros de búsqueda.
   * @param {Array} data - Lista de datos a filtrar (agentes o clientes).
   * @param {string} type - Tipo de datos: "agents" o "customers".
   * @returns {Array} - Lista filtrada según los parámetros de búsqueda.
   */
  const filterData = (data, type) => {
    let filtered = data;

    if (type === "agents") {
      const status = searchParams.get("status"); // Obtener el estado del agente desde la URL
      if (status) {
        filtered = filtered.filter(agent => agent.status === status);
      }
    }

    if (type === "customers") {
      const minWaitTime = searchParams.get("minWaitTime"); // Obtener el tiempo de espera mínimo desde la URL
      if (minWaitTime) {
        filtered = filtered.filter(customer => customer.waitTime >= Number(minWaitTime));
      }
    }

    return filtered;
  };

  /**
   * useEffect para obtener los datos desde la API y aplicarle filtros cuando cambian los parámetros de búsqueda.
   */
  useEffect(() => {
    fetch("http://localhost:5000/api/agents") // Llamada a la API para obtener agentes
      .then((res) => res.json())
      .then((data) => setAgents(filterData(data, "agents")))
      .catch((err) => console.error("Error fetching agents:", err));

    fetch("http://localhost:5000/api/customers") // Llamada a la API para obtener clientes
      .then((res) => res.json())
      .then((data) => setCustomers(filterData(data, "customers")))
      .catch((err) => console.error("Error fetching customers:", err));

    /**
     * Función para manejar las actualizaciones de datos en tiempo real mediante WebSockets.
     * Se activa cuando el servidor envía nuevos datos de agentes y clientes.
     */
    const handleUpdateData = ({ agents, customers }) => {
      setAgents(filterData(agents || [], "agents"));
      setCustomers(filterData(customers || [], "customers"));
    };

    // Suscribirse al evento "updateData" para recibir datos en tiempo real
    socket.on("updateData", handleUpdateData);

    // Limpiar la suscripción cuando el componente se desmonta
    return () => {
      socket.off("updateData", handleUpdateData);
    };
  }, [searchParams]); // Se ejecuta cada vez que cambian los filtros en la URL

  return (
    <DataContext.Provider value={{ agents, customers }}>
      {children} {/* Renderiza los componentes hijos dentro del proveedor de contexto */}
    </DataContext.Provider>
  );
};

/**
 * Hook personalizado para consumir los datos desde el contexto.
 * @returns {Object} - Retorna la lista de agentes y clientes.
 */
export const useData = () => useContext(DataContext);