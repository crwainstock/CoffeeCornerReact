import { useState } from "react";
import "../App.css";
import "../App";

function CoffeeForm({ handleAddCoffee }) {
  //Is this where I need to destructure this handleAddCoffees function? idk.
  const [newCoffee, setNewCoffee] = useState({
    name: "",
    price: "",
    image: "",
  });

  //Tried to simplify the handleInputChange, but it's not working yet.
  // const handleInputChange(event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   setNewCoffee((state) => ({
  //     ...state,
  //     [name]:value,
  //   }));
  // };

  //Update name property when new item is added
  const handleNameChange = (event) => {
    setNewCoffee((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };
  // Update price property
  const handlePriceChange = (event) => {
    setNewCoffee((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };
  // Update image property
  const handleImageChange = (event) => {
    setNewCoffee((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    // console.log("submitted");
    e.preventDefault();
    console.log(newCoffee); //working
    // handleAddCoffee(newCoffee);

    // setAllCoffeesCB(newCoffee);
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
            value={newCoffee.name} //passing prop here
            placeholder="Name"
            onChange={handleNameChange}
            // onChange={(e) => addName(e.target.value)} //updates state when something is submitted here - each keystroke? Original attempt.
          />
        </div>
        <div className="form-group col-md-4">
          <label for="price">
            <h4>Price</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={newCoffee.price}
            placeholder="€"
            onChange={handlePriceChange}
          />
        </div>
        <div className="form-group col-md-4">
          <label for="image">
            <h4>Image URL</h4>
          </label>
          <input
            type="text"
            className="form-control"
            value={newCoffee.image}
            placeholder="Image URL"
            onChange={handleImageChange}
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
