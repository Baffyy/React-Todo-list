import React from "react";

function Items(props) {   
    return(<div className="items" onClick={() => (props.delete(props.id))}>
        <li>{props.text} </li>
    </div>)
};

export default Items;