import React from 'react'
import { useState } from 'react'

const App = () => {
  const [tval, setTval] = useState(10)
  const [tcol, setTcol] = useState('cold')

  const inc = () =>{
    var x = tval+1
    if(x>30)return
    setTval(x)
    if(x>=15){
      setTcol('hot')
    }
  }


  const dec = () =>{
    var x = tval-1
    if(x<0)return
    setTval(x)
    if(x<15){
      setTcol('cold')
    }
  }


  return (
    <div className="main">
      <div className="innerdiv1">
        <div className={`tempshow ${tcol}`}>{tval}°C</div>
      </div>
      <div className="innerdiv2">
        <button onClick={()=> inc()}>+</button>
        <button onClick={()=> dec()}>-</button>
      </div>
    </div>
  )
}

export default App
