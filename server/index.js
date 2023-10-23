import fetch from 'node-fetch'
// import dotenv from 'dotenv'
import express from 'express'
import expressWs from 'express-ws'

// import { WebSocketServer } from 'ws'

// const wss = new WebSocketServer({ port: 5173 });

// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);

//   ws.on('message', function message(data) {
//     console.log('received: %s', data);
//   });

//   ws.send('something');
// });

const app = express()
expressWs(app)
// dotenv.config()

// const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

// const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
// // const lat = '12.9719'
// // const long = '77.5937'

async function getWeatherForecastData(lat, long) {
  const weatherForecastDataResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation,cloudcover,windspeed_10m,winddirection_10m&timezone=auto`)
  const weatherForecastData = await weatherForecastDataResponse.json()
  return weatherForecastData
}

// async function getWeatherData() {
//   const weatherDataResponse = await fetch(`${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
//   const weatherData = await weatherDataResponse.json()
//   return weatherData
// }

app.ws('/forecast', async function (ws, req) {
  const latitude = req.query.lat ?? 12
  const longitude = req.query.long ?? 27
  setInterval(async () => {
    const weatherForecastData = await getWeatherForecastData(latitude, longitude)
    ws.send(JSON.stringify(weatherForecastData))
  }, 3000)

  const weatherForecastData = await getWeatherForecastData(latitude, latitude)
  ws.send(JSON.stringify(weatherForecastData))

  ws.send('Hello')
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
})

app.listen(5173)