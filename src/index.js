import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }

  useEffect(() => {
    const id = setInterval(() => {
      console.log('hi')
    }, 1000)
    return () => {
      window.clearInterval(id)
    }
  }, [])

  return (
    <div>
      n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
