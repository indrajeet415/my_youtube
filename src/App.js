import React from "react";
import Card from "./Component/Card";
import { data } from "./data/data";
import "./App.css";

const App = () => {
 

  console.log(data);
  return (
    <div className="App">
      <h1>YouTube</h1>

      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
export default App;
