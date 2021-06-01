import React, { useState } from 'react'

export function App() {
  const [hue, setHue] = useState(Math.floor(Math.random() * (359 - 1) + 1))
  const [saturation, setSaturation] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  )
  const [lightness, setLightness] = useState(
    Math.floor(Math.random() * (100 - 1) + 1)
  )

  function handleRandom() {
    ;({
      hue: Math.floor(Math.random() * (359 - 1) + 1),
      saturation: Math.floor(Math.random() * (100 - 1) + 1),
      lightness: Math.floor(Math.random() * (100 - 1) + 1),
    })
  }

  const newBackgroundColor = `hsl(${hue},${saturation}%,${lightness}%)`

  const newStyle = { backgroundColor: newBackgroundColor }
  return (
    <div>
      <h1>Color Picker</h1>
      <div className="ColorRange" style={newStyle}>
        {`hsl(${hue},${saturation}%,${lightness}%)`}
      </div>
      <p> Hue: {hue}</p>
      <input
        max={359}
        type="range"
        value={hue}
        onChange={(event) => setHue({ hue: event.target.value })}
      />
      <p> Saturation: {saturation}%</p>
      <input
        max={100}
        type="range"
        value={saturation}
        onChange={(event) => setSaturation({ hue: event.target.value })}
      />
      <p> Lightness: {lightness}%</p>
      <input
        max={100}
        type="range"
        value={lightness}
        onChange={(event) => setLightness({ hue: event.target.value })}
      />
      <button onClick={handleRandom}>Random Color</button>
    </div>
  )
}

export default App
