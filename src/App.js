import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const APP_ID = "e986084e";
  const APP_KEY = "d9c1485cbfc9eb0fae2acd8c251dea51";
  // const [data, setData] = useState();
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
  };
  return (
    <div>
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
