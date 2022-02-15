import React from "react";
import ReactDOM from "react-dom";
import { useState} from 'react'


function App() {
const [inputValue, setInputValue] = useState("");

    function handleInputChange(event) {
      setInputValue(event.target.value)
    }
    return (
    
<div id='app'>
 <input onChange={handleInputChange}/>
<h1>{inputValue}</h1>
</div>
);
} 

const rootNode = document.getElementById('root');
ReactDOM.render(<App/>, rootNode
);