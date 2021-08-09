import React from "react";

function Movie({ name }) {
  return <h1>hi my fav movie is {name}</h1>
}

const movieLike = [
  {
    name: "kingkong"
  },
  {
    name: "koko"
  },
  {
    name: "moana"
  },
  {
    name: "rapongel"
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {movieLike.map(title => <Movie name={title.name} /> )}
    </div>
  );
}

export default App;
