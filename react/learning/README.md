# 

- **App component is the first component that been display**

- **display** use **{ variable or function name }**

- **display** component <**component name** />

- **declare** variable

```js
const rend = (
    <div>
      {name}
      {man}
    </div>
  );
```

- **declaration component** , nom en majuscule

```js
const User = () => {
    return (
      <div>
        <h3>Html 1 jsx</h3>
        <p>Html 2 jsx</p>
      </div>
    );
  };
```

- **props** 

```javascript
<user name="david" age="19" />
const User = (props) => {
    return (
      <div>
        <h3>{ props.name }</h3>
        <p>{ props.age }</p>
      </div> 
    );
  };
```

- **conditional style**

```js
<h1 style={{ color:isGreen?"green":"red" }} ></h1>
{isShow && <Texts />}
```

- **STATE MANAGEMENT** :modification dynamique de la valeur de la variable et affichage dynamique

```js
import { useState } from "react";
export const SButton = ()=>{
    let [age,setAge] = useState(0);
    const increaseAge = () => {
        setAge(age++);
    }
    return (

        <div>
            {age}
            <button onClick={increaseAge}>Increase age</button>
        </div>
    );
};
```

- **LIFE CYCLE** :Du debut a la fin de vie du composant on a (**mounting(component appear on a screen),updating,umounting**)

```js
let value = "hello";
  useEffect(() => {
    console.log("component is mounted");
    return ()=> {
        console.log("component is unmounted");
    }
  }, [value]);
```

- **Fetching Data from API** :

```js
import Axios from "axios";
fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log("fetch: " + data);
 });
Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log("axios :"+res.data.length);
  });
```

- **Routes: react-router-dom** 

```js
npm install react-router-dom
```

```js
import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter as Router,Routes,Route, Link } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Router>
        <div>NAVBAR</div>
        <h3><Link to="/" >Home</Link></h3>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

```

- 
