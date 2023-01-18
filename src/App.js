import { useState } from "react";
import "./App.css";

function App() {
  //set state data -- allCoffees = empty array, setCoffees = function to modify the allCoffees array
  const [allCoffees, setCoffees] = useState([]);

  return (
    <main>
      <nav>
        <button class="selectedView">Add Coffee</button>
        <button class="selectedView">Choose Your Cup</button>
      </nav>
      <div class="formContainer">
        <h1>Coffee Corner</h1>
        <coffee-form />
        <coffee-view />
      </div>
    </main>
  );
}

export default App;
