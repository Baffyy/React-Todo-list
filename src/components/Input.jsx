import React, {useState} from "react";


function Input() {
    const [inputText, setText]= useState("")
    const [items, setItem] =useState([]);

    function handleClick() {
        setItem(prevItems => {
           return [...prevItems, inputText]
        });
        setText("")
    }

    function handleChange(event) {
        const {name, value} = event.target;

        setText(value)

        console.log(value)
    }

    return(<form>
        <div className="input-container">
          <input onChange={handleChange} type="text" name="input" value={inputText}/>
          <button onClick={handleClick}>Add</button>
        </div>
        <div className="card">
           <p>total</p>
        </div>
      </form>)
}

export default Input;