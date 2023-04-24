import socket from 'socket.io-client'

/* Biblioteca que permite baixa-latência e se baseia em eventos de comunicação entre cliente e um servidor */

const io = socket('http://localhost:3000')

export default io
