import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { NetflixSeries } from "./components/NetflixSeries";
import "./components/Netflix.css"
function App() {
  return (
    <section className="container">
      <h1 className="card-heading">List of Best Netflix series</h1>
      <NetflixSeries></NetflixSeries>
    </section>
  );
}

export default App;
