import { useState } from "react";
import "./App.css";
import CoffeeForm from "./Components/CoffeeForm";
import CoffeeView from "./Components/CoffeeView";

import MyCoffees from "./Components/MyCoffees";

function App() {
  //set state data -- allCoffees = empty array(initially, now it's using default data js file), setCoffees = function to modify the allCoffees array
  const [allCoffees, setCoffees] = useState(MyCoffees); //idk. default coffees not loading anymore.
  const [gridView, setGridView] = useState(true);

  function addCoffee(coffee) {
    console.log("Received from child");
    console.log(coffee);

    let newArray = [...allCoffees, coffee];
    setCoffees(newArray);
  }

  return (
    <div className="App">
      <main>
        <nav>
          <button
            className={gridView ? "btn btn-warning" : "btn btn-danger"}
            onClick={() => setGridView(false)}
          >
            Add Coffee
          </button>
          <button
            className={!gridView ? "btn btn-warning" : "btn btn-danger"}
            onClick={() => setGridView(true)}
          >
            Choose Your Cup
          </button>
        </nav>
        <div className="container">
          <h1>Coffee Corner</h1>
          {gridView ? (
            <CoffeeView coffeeArray={allCoffees} />
          ) : (
            <CoffeeForm
              addCoffeeCB={addCoffee} //I don't know what to do with this...ugh.
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
