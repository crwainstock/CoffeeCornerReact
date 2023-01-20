import { useState } from "react";
import "../App";

function CoffeeForm({ allCoffees, setCoffeesCB }) {
  const [newCoffee, setCoffees] = useState({}); //Whole new coffee object
  const [name, addName] = useState("");
  const [price, addPrice] = useState("");
  const [image, addImage] = useState("");
  //Is it necessary to include each input like this?
  //What is the best way to include the id here? Increment it?

  const handleSubmit = (e) => {
    // console.log("submitted");
    e.preventDefault();
    let newCoffee = {
      name: { name },
      price: { price },
      image: { image },
    };
    console.log(newCoffee); //working
    //Something here to set new ID with each submission -- increment
    //Something to push newCoffee into allCoffees array -- addCoffee function?
    setCoffees(newCoffee);
    setCoffeesCB();
    //This bit is copied from what was done in the CoffeeView component, but something is missing.
  };

  return (
    <div>
      <h2>Add a coffee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name} //passing prop here
          placeholder="Name"
          onChange={(e) => addName(e.target.value)} //updates state when something is submitted here - each keystroke?
        />
        <input
          type="text"
          value={price}
          placeholder="Price"
          onChange={(e) => addPrice(e.target.value)}
        />
        <input
          type="url"
          value={image}
          placeholder="Image URL"
          onChange={(e) => addImage(e.target.value)}
        />

        <button type="submit">Add Coffee</button>
      </form>
    </div>
  );
}

export default CoffeeForm;

// This resource was useful for putting the form inputs together: https://beta.reactjs.org/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
