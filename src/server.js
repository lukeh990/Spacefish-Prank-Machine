import { WebSocketServer } from 'ws';

console.log("Starting WS Server")

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data.toString());
  });

  ws.send('something');
});