import React, { useEffect, useLayoutEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [value, setValue] = useState(0)

  // 这时网速慢的话，页面会从 value: 0 -> value: 1000
  // useEffect(() => {
  //   document.querySelector('#x').innerText = `value: 1000`
  // }, [value])

  // 这时候使用 useLayoutEffect 就可以解决 value 从 0 -> 1000 时抖动的情况
  useLayoutEffect(() => {
    document.querySelector('#x').innerText = `value: 1000`
  }, [value])

  return (
    <div id='x' onClick={() => setValue(0)}>
      value: {value}
    </div>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
