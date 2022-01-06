import React, { useEffect, useState } from 'react'

export default function SpotCheck1() {

  const [counter, setCounter] = useState(0)

  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)
  
  useEffect(() => {
    localStorage.setItem('currentPage', counter)
  })
  
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <button onClick={decrease}>-</button>
        <span style={{padding: "20px"}}>{counter}</span>
        <button onClick={increase}>+</button>

      </div>
    </div>
  )
}