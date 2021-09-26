import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div>
    <h1>Hello world</h1>
    <h3>From inside ./app.tsx, which is bundled to public/bundle.js</h3>
  </div>
)

console.log(document.getElementById('root'))

ReactDOM.render(<App/>, document.getElementById('root'))