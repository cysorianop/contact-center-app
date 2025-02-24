"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackToHome = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      aria-label="Volver a la página de inicio"
      className="mt-2 text-gray-700 underline hover:text-gray-900 transition duration-200 ease-in-out"
    >
      ← Volver a Inicio
    </button>
  );
};

export default BackToHome;