import React from "react";
import ReactDOM from "react-dom";

const baseUrl = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = React.useState("codeartistryio");
  const [user, setUser] = React.useState(null);
  const searchInput = React.useRef();

  React.useEffect(() => {
    getUser();
    // fetch(endpoint)
    //   .then(response => response.json())
    //   .then(data => setUser(data));
  }, [ ]);

  function handleClearInput() {
    searchInput.current.value = "";
    searchInput.current.focus();
  }

  async function getUser() {
    const response = await fetch(`${baseUrl}${username}`);
    const data = await response.json();
    setUser(data);
  }

 
  return  (
<div>
    <input
    type="text"
    placeholder="Input username"
    onChange={event => setUsername(event.target.value)}
    ref={searchInput}
  />
  <button onClick={() => getUser(username)}>Search</button>
  <button onClick={handleClearInput}>Clear</button>
  {user ? (
    <div>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
        <a href={user.blog}>{user.name} Porfolio</a>
        <p>{user.company}</p>
        
     <img alt='avatar' src={user.avatar_url} style={{height:100}}/>
        
    </div>
  ) : ( <p>loading</p>
  )}
</div>
  );
}
  

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
