import React,{ useState } from 'react';
import './App.css';

function App() {
  const [box, setBoxes] = useState([]) 

  const[color, setcolor] = useState("")

  const newBox = (e) =>{
      e.preventDefault();
    setBoxes([...box,color])
  }
  return (
    <div className="App">
          <h1>Boxes</h1>
          {JSON.stringify(box)}
          <hr/>
            <form onSubmit = {(e) => newBox(e) }>
              <label>Pick a color</label>
              <input type="text" onChange={(e) =>{setcolor(e.target.value)}}></input>
              <button>Submit</button>
            </form>
          <div className='d-flex'>

          {
            box.map((color,index) =>{
              return <div style={{backgroundColor: color, width:200, height: 200 , marginRight: 15}}></div>
            })
          }
          </div>
        </div>
      )
}

export default App;
