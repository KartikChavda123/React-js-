import React, { useState } from 'react'

function Pr2() {
  const reset = () => setCount(0)
  const [count, setCount] = useState(0)
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "100%", height: "600px" }}>
      <p style={{color: "black"}}>PROJEACT-2  USEEFFACT</p>
      <h1 className='w1z' style={{ marginTop: "70px", color: "black", fontSize: "60px",}}>{count}</h1>
      <div className='kk'>
        <button class="btn"  onClick={() => setCount(count + 1)} style={{ height: "50px", width: "150px", color: "black"}}>add</button>
        <button class="btn"  onClick={() => setCount(count - 1)} style={{ height: "50px", width: "150px", marginTop: "20px", color: "black"}}>decrease</button>
        <button class="btn"  onClick={reset} style={{ height: "50px", width: "150px", marginTop: "20px", color: "black"}}>Reset</button>
      </div>
      {/* <div class="data-container">
        <span class="btn">Hover Me </span>
      </div> */}
    </div>
  )
}
export default Pr2