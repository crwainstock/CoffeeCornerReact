import { useState } from "react";
import "./App.css";
import CoffeeForm from "./Components/CoffeeForm";
import "./Components/CoffeeView"; //import CoffeeView component
import CoffeeView from "./Components/CoffeeView";
// import "./Components/CoffeeForm";

import MyCoffees from "./Components/MyCoffees";

function App() {
  //set state data -- allCoffees = empty array(initially, now it's using default data js file), setCoffees = function to modify the allCoffees array
  const [allCoffees, setCoffees] = useState(MyCoffees);
  //Can I define setCoffees here and use it in the CoffeeForm component?
  const [gridView, setGridView] = useState(true);

  console.log(allCoffees);

  function featuredSelected() {
    console.log("hello");
  }
  //What is this actually doing? We don't really need it, do we???

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
            <CoffeeForm allCoffees={allCoffees} setCoffeesCB={setCoffees} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
