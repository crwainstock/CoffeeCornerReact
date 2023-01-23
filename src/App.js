import { useState } from "react";
import "./App.css";
import CoffeeForm from "./Components/CoffeeForm";
import CoffeeView from "./Components/CoffeeView";

import MyCoffees from "./Components/MyCoffees";

function App() {
  //set state data -- allCoffees = empty array(initially, now it's using default data js file), setCoffees = function to modify the allCoffees array
  const [allCoffees, setAllCoffees] = useState(MyCoffees);
  const [gridView, setGridView] = useState(true);

<<<<<<< HEAD
  const handleAddCoffee = (newCoffee) => {
    console.log(allCoffees);
  };

=======
  //With help from Joy. Thank you!
  const [id, setId] = useState(allCoffees.length + 1);

  const handleIncrementId = () => {
    setId((prevState) => prevState + 1); //Incrementing id -- prevState
  };

  const handleAddCoffee = (newCoffee) => {
    handleIncrementId();
    setAllCoffees((prevState) => [...prevState, { ...newCoffee, id }]); //setAllCoffees is not defined error

    console.log(allCoffees);
  };

>>>>>>> c1479bbe3d73f48c0de3cb0c92cd846f9856f0a6
  // function featuredSelected() {
  //   console.log("hello");
  // }
  //What is this actually doing? We don't really need it, do we???

  return (
    <div className="App">
      <main>
        <nav>
          {/* This can be simplified */}
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
            <CoffeeView handleAddCoffee={handleAddCoffee} />
          ) : (
            <CoffeeForm
              allCoffees={allCoffees}
              setAllCoffeesCB={setAllCoffees} //I don't know what to do with this...ugh.
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
