import React, {useState} from "react";


function Input() {
    const [inputText, setText]= useState("")
    const [items, setItem] =useState([]);

    function handleClick(event) {
        setItem(prevItems => {
           return [...prevItems, inputText]
        });
        setText("")

        event.preventDefault();
    }

    function handleChange(event) {
        const {value} = event.target;

        setText(value);
    }

    return(<form>
        <div className="input-container">
          <input onChange={handleChange} type="text" name="input" value={inputText}/>
          <button onClick={handleClick}>Add</button>
        </div>
        <div className="card">
          {items.map((item,index) => {return <h3 key={index}>{item} </h3>})}
        </div>
      </form>)
}

export default Input;