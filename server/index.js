import fetch from 'node-fetch'
import dotenv from 'dotenv'
import express from 'express'
import expressWs from 'express-ws'

const app = express()
expressWs(app)
dotenv.config()

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY

const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5"
const lat = '12.9719'
const lon = '77.5937'

async function getWeatherForecastData() {
  const weatherForecastDataResponse = await fetch(`${OPEN_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
  const weatherForecastData = await weatherForecastDataResponse.json()
  return weatherForecastData
}

async function getWeatherData() {
  const weatherDataResponse = await fetch(`${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`)
  const weatherData = await weatherDataResponse.json()
  return weatherData
}

app.ws('/weather', async function (ws, req) {
  setInterval(async () => {
    const weatherData = await getWeatherData()
    ws.send(JSON.stringify(weatherData))
  }, 10000)

  const weatherData = await getWeatherData()
  ws.send(JSON.stringify(weatherData))
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
})

app.ws('/forecast', async function (ws, req) {
  setInterval(async () => {
    const weatherForecastData = await getWeatherForecastData()
    ws.send(JSON.stringify(weatherForecastData))
  }, 30000)

  const weatherForecastData = await getWeatherForecastData()
  ws.send(JSON.stringify(weatherForecastData))

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
})

app.listen(5174)