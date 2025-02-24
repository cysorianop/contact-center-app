// Importamos los módulos necesarios
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

// Inicializamos la aplicación Express
const app = express();
const server = http.createServer(app);

// Configuramos Socket.io con permisos de CORS para aceptar conexiones desde cualquier origen
const io = new Server(server, { cors: { origin: "*" } });

// Habilitamos CORS en Express para permitir solicitudes desde cualquier origen
app.use(cors());

// Lista de agentes con sus respectivos estados y tiempos de espera
let agents = [
  { id: 1, name: "Cesar", status: "disponible", waitTime: 10 },
  { id: 2, name: "Laura", status: "en llamada", waitTime: 5 },
  { id: 3, name: "Camila", status: "disponible", waitTime: 20 },
  { id: 4, name: "Xiomara", status: "disponible", waitTime: 60 },
  { id: 5, name: "Vanesa", status: "disponible", waitTime: 40 },
  { id: 6, name: "Danna", status: "en llamada", waitTime: 22 },
  { id: 7, name: "Pedro", status: "disponible", waitTime: 2 },
  { id: 8, name: "Maria", status: "en llamada", waitTime: 5 },
  { id: 9, name: "William", status: "disponible", waitTime: 16 },
  { id: 10, name: "Arturo", status: "en llamada", waitTime: 35 },
  { id: 11, name: "Luisa", status: "en llamada", waitTime: 29 },
  { id: 12, name: "Karol", status: "disponible", waitTime: 38 },
];

// Lista de clientes con sus tiempos de espera
let customers = [
  { id: 1, name: "Nicolás", waitTime: 15 },
  { id: 2, name: "Isabel", waitTime: 20 },
  { id: 3, name: "Héctor", waitTime: 5 },
  { id: 4, name: "Lorenzo", waitTime: 22 },
  { id: 5, name: "Hugo", waitTime: 32 },
  { id: 6, name: "Gabriel", waitTime: 50 },
  { id: 7, name: "José", waitTime: 5 },
  { id: 8, name: "Juan", waitTime: 4 },
  { id: 9, name: "Pedro", waitTime: 12 },
  { id: 10, name: "Daniela", waitTime: 23 },
  { id: 11, name: "Sara", waitTime: 27 },
  { id: 12, name: "Martina", waitTime: 35 },
  { id: 13, name: "Sofía", waitTime: 14 },
  { id: 14, name: "Aitana", waitTime: 24 },
  { id: 15, name: "Paula", waitTime: 8 },
];

// Endpoints para obtener la lista de agentes y clientes en formato JSON
app.get("/api/agents", (req, res) => res.json(agents));
app.get("/api/customers", (req, res) => res.json(customers));

// Evento cuando un cliente se conecta mediante WebSockets
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  // Emitimos actualizaciones de los tiempos de espera cada 5 segundos
  setInterval(() => {
    // Reducimos los tiempos de espera de agentes y clientes, sin que sean negativos
    agents = agents.map(agent => ({ ...agent, waitTime: Math.max(agent.waitTime - 1, 0) }));
    customers = customers.map(customer => ({ ...customer, waitTime: Math.max(customer.waitTime - 1, 0) }));

    // Enviamos los datos actualizados a todos los clientes conectados
    io.emit("updateData", { agents: [...agents], customers: [...customers] });
  }, 5000);
});

// Iniciamos el servidor en el puerto 5000
server.listen(5000, () => console.log("Servidor corriendo en el puerto 5000"));