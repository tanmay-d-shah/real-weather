import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 5173 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  setInterval(async () => {
    const weatherDataResposen = await fetch('https://api.open-meteo.com/v1/forecast?latitude=12.9719&longitude=77.5937&hourly=temperature_2m,precipitation,windspeed_10m&timezone=auto')
    const weatherData = await weatherDataResposen.json()
    ws.send(JSON.stringify(weatherData))
  }, 3000)
});