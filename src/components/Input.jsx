import React, {useState} from "react";
import Items from "./Items";

function Input() {
    const [inputText, setText]= useState("");
    const [items, setItem] =useState([]);
    

    function handleClick(event) {
      if (inputText !== "") {
          setItem(prevItems => [...prevItems, inputText]);
          setText("");
      }
      event.preventDefault();
  }

    function handleChange(event) {
        const {value} = event.target;

        setText(value);
    }

    function handleDelete(id) {
      setItem(prevItems=> {return prevItems.filter((item,index) => {return index !== id})});
    }

    return(<form>
        <div className="input-container">
          <input onChange={handleChange} type="text" name="input" value={inputText}/>
          <button onClick={handleClick}>Add</button>
        </div>
        <div>
          {items.map((item,index) => <Items text={item} id={index} key={index} delete={handleDelete}/>)}
        </div>
      </form>)
}

export default Input;