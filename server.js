/* eslint no-console:0 */
require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const app = express()
const App = require('./src/app').default

app.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname + '/public/bundle.js')
})

app.get('/', (req, res) => {
  res.send(`
<!doctype html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <div id="root">
    ${ReactDOMServer.renderToString(React.createElement(App, null))}
    </div>
    <script src="/bundle.js"></script>
  </body>
</html>
  `)
})

app.listen(3000)
