import { useState } from "react";
import "./App.css";
import CoffeeForm from "./Components/CoffeeForm";
import "./Components/CoffeeView"; //import CoffeeView component
import CoffeeView from "./Components/CoffeeView";
// import "./Components/CoffeeForm";

import MyCoffees from "./Components/MyCoffees";

function App() {
  //set state data -- allCoffees = empty array, setCoffees = function to modify the allCoffees array
  const [allCoffees, setCoffees] = useState(MyCoffees);
  const [gridView, setGridView] = useState(true);

  console.log(allCoffees);

  function featuredSelected() {
    console.log("hello");
  }

  return (
    <div className="App">
      <main>
        <nav>
          <button
            className="btn btn-warning"
            onClick={() => setGridView(false)}
          >
            Add Coffee
          </button>
          <button className="btn btn-warning" onClick={() => setGridView(true)}>
            Choose Your Cup
          </button>
        </nav>
        <div className="container">
          <h1>Coffee Corner</h1>
          {gridView ? (
            <CoffeeView
              allCoffees={allCoffees}
              featuredSelectedCB={featuredSelected}
            />
          ) : (
            <CoffeeForm />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
