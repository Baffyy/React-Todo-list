import { useState } from 'react'

function App() {
    return(<div className="container">
      <div className="heading">
        <h1>ToDo List</h1>
      </div>
      <form>
        <div className="input-container">
          <input type="text" name="input" />
          <button>Add</button>
        </div>
        <div className="card">
           <p>total</p>
        </div>
      </form>
    </div>)
}

export default App
