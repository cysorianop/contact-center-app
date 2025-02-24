// Importamos la librería socket.io-client para establecer la conexión con el servidor WebSocket.
import { io } from "socket.io-client";

// Creamos una instancia de socket.io y nos conectamos al servidor WebSocket en la URL especificada.
// - "http://localhost:4000": Dirección del servidor WebSocket en el puerto 4000.
// - "transports: ['websocket']": Se fuerza el uso de WebSockets para la comunicación en lugar de otros métodos como polling.
const socket = io("http://localhost:4000", { transports: ["websocket"] });

// Exportamos la instancia del socket para que pueda ser utilizada en otros archivos de la aplicación.
export default socket;