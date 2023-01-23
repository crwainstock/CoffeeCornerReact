import { useState } from "react";
import "../App.css";
import "../App";

function CoffeeForm({ addCoffeeCB }) {
  const [coffee, setNewCoffee] = useState({
    name: "",
    price: "",
    image: "",
    id: 0,
  });
  const [id, setId] = useState(7);

  function handleChange(event) {
    let newCoffee = { ...coffee, [event.target.name]: event.target.value };
    setNewCoffee(newCoffee);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newCoffee = { ...coffee, id: id };
    setNewCoffee(newCoffee);
    setId((id) => id + 1); //This is throwing an error
    addCoffeeCB(newCoffee);
  }

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
            name="name"
            className="form-control"
            value={coffee.name} //passing prop here
            placeholder="Name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group col-md-4">
          <label for="price">
            <h4>Price</h4>
          </label>
          <input
            type="text"
            name="price"
            className="form-control"
            value={coffee.price}
            placeholder="€"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group col-md-4">
          <label for="image">
            <h4>Image URL</h4>
          </label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={coffee.image}
            placeholder="Image URL"
            onChange={(e) => handleChange(e)}
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
