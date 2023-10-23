import fetch from 'node-fetch'
import express from 'express'
import expressWs from 'express-ws'

const app = express()
expressWs(app)

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
  }, 1000 * 60 * 2)

  const weatherForecastData = await getWeatherForecastData(latitude, latitude)
  ws.send(JSON.stringify(weatherForecastData))
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
})

app.listen(5173)