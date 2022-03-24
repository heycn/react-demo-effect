import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }
  return (
    <div>
      n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
