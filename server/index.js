import fetch from 'node-fetch'
import express from 'express'
import expressWs from 'express-ws'

const app = express()
expressWs(app)

async function getHourlyWeatherForecast(lat, long) {
  const weatherForecastDataResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,precipitation,cloudcover,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)
  const weatherForecastData = await weatherForecastDataResponse.json()
  return weatherForecastData
}


async function getCurrentWeatherData(lat, long) {
  const currentWeatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relativehumidity_2m,precipitation,windspeed_10m&timezone=auto`)
  const currentWeatherData = await currentWeatherResponse.json()
  return currentWeatherData
}

app.ws('/forecast', async function (ws, req) {
  const latitude = req.query.lat ?? 12
  const longitude = req.query.long ?? 27
  try {
    setInterval(async () => {
      const weatherForecastData = await getHourlyWeatherForecast(latitude, longitude)
      ws.send(JSON.stringify(weatherForecastData))
    }, 1000 * 60 * 2)

    const weatherForecastData = await getHourlyWeatherForecast(latitude, longitude)
    ws.send(JSON.stringify(weatherForecastData))
  } catch (e) {
    console.log('Error: ', e)
  }

})

app.ws('/current-weather', async function (ws, req) {
  const latitude = req.query.lat ?? 12
  const longitude = req.query.long ?? 27
  try {
    setInterval(async () => {
      const currentWeatherData = await getCurrentWeatherData(latitude, longitude)
      ws.send(JSON.stringify(currentWeatherData))
    }, 1000 * 60 * 1)

    const weatherForecastData = await getCurrentWeatherData(latitude, longitude)
    ws.send(JSON.stringify(weatherForecastData))
  } catch (e) {
    console.log('Error: ', e)
  }
})

app.listen(5174)