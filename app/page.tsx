"use client"; // Indica que este componente debe ejecutarse en el cliente en una aplicación Next.js con Server Components habilitados.

import React from "react";
import Link from "next/link"; // Importamos Link para la navegación sin recargar la página.
import Image from "next/image"; // Importamos Image para una mejor optimización de imágenes en Next.js.

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 md:px-12">
      {/* Contenedor principal con diseño de pantalla completa, centrado y fondo con degradado */}
      
      <div className="text-center max-w-3xl w-full">
        {/* Contenedor centrado con un ancho máximo para evitar que el contenido sea demasiado ancho */}
        
        <div className="flex justify-center">
          {/* Contenedor de la imagen, centrado horizontalmente */}
          <Image
            src="/visualcontactsas_logo.jpg" // Ruta de la imagen del logo
            alt="Contact Center" // Descripción alternativa para accesibilidad
            width={200}
            height={200}
            className="max-w-xs md:max-w-sm mb-4" // Ajuste de tamaño responsivo
          />
        </div>

        <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-lg">
          Contact Center
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Gestiona tus agentes y clientes fácilmente.
        </p>

        <nav className="mt-8 flex flex-wrap justify-center gap-6">
          {/* Navegación con botones estilizados para ver Agentes y Clientes */}
          
          <Link
            href="/agents"
            className="px-8 py-4 w-full sm:w-auto bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300 text-lg md:text-xl"
          >
            👥 Ver Agentes
          </Link>
          
          <Link
            href="/customers"
            className="px-8 py-4 w-full sm:w-auto bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300 text-lg md:text-xl"
          >
            🧑‍💼 Ver Clientes
          </Link>
        </nav>
      </div>
    </main>
  );
}