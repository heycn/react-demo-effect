import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [n, setN] = useState(0)
  const onClick = () => {
    setN(i => i + 1)
  }

  useEffect(() => {
    console.log('第 1 次渲染执行')
  }, [])

  useEffect(() => {
    console.log('任何一个 state 变化都会执行，包括第 1 次')
  })

  useEffect(() => {
    console.log('每次 n 变化都会执行，包括第 1 次')
  }, [n])

  useEffect(() => {
    if (n !== 0) {
      console.log(`n 变化时执行，现在 n 是: ${n}`)
    }
  }, [n])

  console.log('------ 分割线 ------')

  return (
    <div>
      n: {n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
