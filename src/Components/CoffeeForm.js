import { useState } from "react";
import "../App.css";
import "../App";

function CoffeeForm() {
  const [newCoffee, setNewCoffee] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setNewCoffee((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    // console.log("submitted");
    e.preventDefault();
    console.log(newCoffee); //working
    // handleAddCoffee(newCoffee);

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
            name="name"
            className="form-control"
            value={newCoffee.name} //passing prop here
            placeholder="Name"
            onChange={(e) => handleInputChange(e)}
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
            value={newCoffee.price}
            placeholder="€"
            onChange={(e) => handleInputChange(e)}
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
            value={newCoffee.image}
            placeholder="Image URL"
            onChange={(e) => handleInputChange(e)}
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
