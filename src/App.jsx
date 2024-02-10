import  { useState } from 'react'
import  List  from './Data'
import './Data'
const App = () => {
  const [data,setData]=useState(List)
  return (
    <div className="main">
      <div className='Container'>
      <h1 id='heading'>{data.length}  Birthday Today's</h1>
      { 
      data.map((x)=>{
        return(
          <div className='Cart' key={x.id}>
            <div className='pic'> <img src={x.image} ></img></div>
            <div><h3>{x.name}</h3>
           
            <span>{x.age} years</span></div>
          </div>
        )
      })}
      <button onClick={()=>setData([])}>Clear All</button>
    </div>
    </div>
  )
}

export default App