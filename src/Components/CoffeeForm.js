import { useState } from "react";
import "../App.css";
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
    //Something to reset form input fields upon submission -- reset state values to empty?
  };

  return (
    <div className="container">
      <h2>Add a coffee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-4">
          <label for="name">
            <h4>Coffee Name</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={name} //passing prop here
            placeholder="Name"
            onChange={(e) => addName(e.target.value)} //updates state when something is submitted here - each keystroke?
          />
        </div>
        <div className="form-group col-md-4">
          <label for="price">
            <h4>Price</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={price}
            placeholder="€"
            onChange={(e) => addPrice(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label for="image">
            <h4>Image URL</h4>
          </label>
          <input
            type="url"
            className="form-control"
            value={image}
            placeholder="Image URL"
            onChange={(e) => addImage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Coffee
        </button>
      </form>
    </div>
  );
}

export default CoffeeForm;

// This resource was useful for putting the form inputs together: https://beta.reactjs.org/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
