import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const endPoint =  'https://api.github.com/users/marlonbarrios';


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => { 
      fetch(endPoint)
      .then(response => response.json())
    //   .then(data => console.log(data))
      .then(data => setUser(data))
  
    }, []);

  
    
 
  return user ? (
    <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <a href={user.blog}>{user.name} Porfolio</a>
        <p>{user.company}</p>
        
     <img alt='avatar' src={user.avatar_url} style={{height:100}}/>
        
    </div>
  ) : ( <p>loading</p>);
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
