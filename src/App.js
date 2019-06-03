import React, { useState, Component } from 'react'
import HelloWorld from './components/HelloWorld'

export default function Counter() {
  return (
    <h1>ColorChanger</h1>
    <div>
    <input type="range" min="0" max="100" name="saturation" value={value} step="1">Saturation</input>
    <input type="range" min="0" max="359" name="hue" value={value} step="1">Hue</input>
    <input type="range" min="0" max="100" name="lightness" value={value} step="1">Lightness</input>
    </div>
  )
}
