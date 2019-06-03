import React, { useState, Component } from 'react'
import HelloWorld from './components/HelloWorld'

let rdm359 = Math.random * 359
let rdm100 = Math.random * 100
export default function Counter() {
  const [hValue, setHueV] = useState(rdm359)
  const [sValue, setSatV] = useState(rdm100)
  const [lValue, setLigV] = useState(rdm100)
  // console.log({sValue, hValue, lValue})
  return (
    <>
      <body
        style={{
          backgroundColor: ` hsl(${hValue},${sValue}%,${lValue}%)`
        }}
      >
        <HelloWorld />
        <div className="three-buttons">
          <h2>Hue</h2>
          <div>
            <input
              onChange={event => setHueV(event.target.value)}
              type="range"
              min="0"
              max="359"
              name="hue"
              step="1"
            />
          </div>
          <h2>Saturation</h2>
          <div>
            <input
              onChange={event => setSatV(event.target.value)}
              type="range"
              min="0"
              max="100"
              name="saturation"
              step="1"
            />
          </div>
          <h2>Lightness</h2>
          <div>
            <input
              onChange={event => setLigV(event.target.value)}
              type="range"
              min="0"
              max="100"
              name="lightness"
              step="1"
            />
          </div>
          <button
            onClick={() => {
              setLigV(rdm100), setSatV(rdm100), setHueV(rdm359)
            }}
          >
            Randomize
          </button>
        </div>
      </body>
    </>
  )
}
