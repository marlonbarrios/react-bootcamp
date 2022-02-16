import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";



function App() {
    const [mousePosition, setMousePosition] = useState({x:0, y:0});

    useEffect(() => { 
        document.addEventListener('mousemove', handleMouseMove);
    }, []);

    function handleMouseMove(event) {
    setMousePosition({ x: event.pageX, y: event.pageY});
    }
    
 
  return (
    <div style={{alignContent:"center", alignItems: "center", textAlign: "center" }}>
        <h1>x:{mousePosition.x}</h1>
        <h1>y:{mousePosition.y}</h1>

    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
