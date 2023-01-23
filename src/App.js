import { useState } from "react";
import "./App.css";
import CoffeeForm from "./Components/CoffeeForm";
import "./Components/CoffeeView"; //import CoffeeView component
import CoffeeView from "./Components/CoffeeView";
// import "./Components/CoffeeForm";

import MyCoffees from "./Components/MyCoffees";

function App() {
  //set state data -- allCoffees = empty array(initially, now it's using default data js file), setCoffees = function to modify the allCoffees array
  const [allCoffees, setAllCoffees] = useState(MyCoffees);
  //Can I define setCoffees here and use it in the CoffeeForm component?
  const [gridView, setGridView] = useState(true);

  //With help from Joy. Thank you!
  const [id, setId] = useState(allCoffees.length + 1);

  const handleIncrementId = () => {
    setId((prevState) => prevState + 1); //Incrementing id -- prevState
  };

  const handleAddCoffee = (newCoffee) => {
    handleIncrementId();
    setAllCoffees((prevState) => [...prevState, { ...newCoffee, id }]); //setAllCoffees is not defined error
  };

  console.log(allCoffees);

  function featuredSelected() {
    console.log("hello");
  }
  //What is this actually doing? We don't really need it, do we???

  return (
    <div className="App">
      <main>
        <nav>
          {gridView ? (
            <button
              className="btn btn-warning"
              onClick={() => setGridView(false)}
            >
              Add Coffee
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => setGridView(false)}
            >
              Add Coffee
            </button>
          )}
          {gridView ? (
            <button
              className="btn btn-danger"
              onClick={() => setGridView(true)}
            >
              Choose Your Cup
            </button>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() => setGridView(true)}
            >
              Choose Your Cup
            </button>
          )}
        </nav>
        <div className="container">
          <h1>Coffee Corner</h1>
          {gridView ? (
            <CoffeeView handleAddCoffee={handleAddCoffee} /> //Updated this and get setAllCoffees is not defined error in line 25
          ) : (
            <CoffeeForm
              allCoffees={allCoffees}
              setAllCoffeesCB={setAllCoffees}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
