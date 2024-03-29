import { io } from "socket.io-client";

const URL = "http://localhost:3003";
const socket = io(URL, { autoConnect: true });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;