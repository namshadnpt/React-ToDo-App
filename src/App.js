import './App.css';
import { useState } from 'react'
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Sunday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj, index) => {
            return (
              <div key={index} className="todo">
                <div className="left">
                  <input onChange={(e) => {
                    console.log(e.target.value);
                    console.log(obj);
                    setToDos(toDos.filter(obj1 => {
                      if (obj1.id === obj.id) {
                        obj1.status = e.target.checked
                      }
                      return obj1;
                    }))
                  }} value={obj.status} type="checkbox" name="" id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i onClick={() => {
                    setToDos(toDos.filter(obj2 => {
                      if (obj.id === obj2.id) {
                        obj2 = ""
                      }
                      return obj2;
                    }))
                  }
                  }
                    className="fas fa-times"></i>
                </div>
              </div>
            )
          })
        }

        {
          toDos.map((obj,i) => {
            if (obj.status) {
              return (<h1 key={i}>{obj.text}</h1>)
            }
            return null
          })
        }


      </div>
    </div>
  );
}

export default App;
