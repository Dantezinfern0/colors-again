import React, { useState, useEffect, Component } from 'react'
import HelloWorld from './components/HelloWorld'
export default function Colors() {
  // const [timer, setTimer] = useState(0)
  // useEffect(() => {
  //   setInterval(() => {
  //     randomizer()
  //     console.log('this will tick every second')
  //     setTimer(ti => ti + 1)
  //   },700)
  // }, [])
  let rdm359 = () => {
    return Math.random() * 359
  }
  let rdm100 = () => {
    return Math.random() * 100
  }
  const newLocal = 0 + Math.abs(sValue - 50);
  const randomIz = () => {
    setLigV(rdm100)
    setSatV(rdm100)
    setHueV(rdm359)
  }
  const [hValue, setHueV] = useState(rdm359)
  const [sValue, setSatV] = useState(rdm100)
  const [lValue, setLigV] = useState(rdm100)
  // console.log({sValue, hValue, lValue})
  return (
    <body>
      <main
        style={{
          backgroundColor: ` hsl(${hValue},${sValue}%,${lValue}%)`
        }}
      >
        <HelloWorld style={{ color: `hsl(${() =>Math.abs(hValue - 180)},${() =>Math.abs(sValue -50)},${() =>Math.abs(lValue -50)})`}}/>
        <div className="three-buttons">
          <h2>
            Hue {Math.ceil(hValue)}˚
          </h2>
          <div>
            <input
              onChange={event => setHueV(event.target.value)}
              type="range"
              min="0"
              max="359"
              name="hue"
              step="1"
              value={hValue}
            />
          </div>
          <h2>Saturation {Math.ceil(sValue)}%</h2>
          <div>
            <input
              onChange={event => setSatV(event.target.value)}
              type="range"
              min="0"
              max="100"
              name="saturation"
              step="1"
              value={sValue}
            />
          </div>
          <h2>Lightness {Math.ceil(lValue)}%</h2>
          <div>
            <input
              onChange={event => setLigV(event.target.value)}
              type="range"
              min="0"
              max="100"
              name="lightness"
              step="1"
              value={lValue}
            />
          </div>
          <button
            onClick={() => {
              randomIz()
            }}
          >
            Randomize
          </button>
        </div>
      </main>
    </body>
  )
}
