import { useState } from "react";
import "./App.css";
import "./Components/CoffeeView"; //import CoffeeView component
import "./Components/CoffeeForm";
import CoffeeView from "./Components/CoffeeView";

function App() {
  //set state data -- allCoffees = empty array, setCoffees = function to modify the allCoffees array
  const [allCoffees, setCoffees] = useState(["Latte", "Drip Coffee", "Mocha"]);
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
          <CoffeeView
            allCoffees={allCoffees}
            featuredSelectedCB={featuredSelected}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
