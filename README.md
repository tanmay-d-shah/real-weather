# Realtime Weather Dashboard using Web Sockets

This is a dashboard which communicates with a server via web sockets and displays weather related data
in real time

## Demo : https://real-weather-one.vercel.app/

## Features :
1. Detailed Charts based on weather data from https://open-meteo.com/
2. Auto detect location and search for other locations
3. Uses web sockets to communicate in real time
4. Uses Redux toolkit for efficient state management
5. Disconnects web sockets when browser tab/page is inactive and reconnects when page is active
6. Separate server hosted to mimic a weather server emitting web sockets
7. ARIA complaint UI using HeadlessUI
8. Automated tests

## Tech Used : 
1. React.JS
2. Redux Toolkit
3. Web Sockets
4. Node.JS, Express.JS
5. Other Major Libs/Dependencies: 
   1. react-chartjs-2 : https://www.npmjs.com/package/react-chartjs-2
   2. ws : https://www.npmjs.com/package/ws
   3. react-use-websocket : https://www.npmjs.com/package/react-use-websocket
   4. headlessui/react : https://www.npmjs.com/package/@headlessui/react
   5. Tailwind CSS : https://tailwindcss.com/
   
## Local Setup and Run

### For client:

```sh
npm install
```

```sh
npm run dev
```

### For server:

```sh
npm install
```

```sh
node index.js
```

## Client Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

Google's Weather Widget

