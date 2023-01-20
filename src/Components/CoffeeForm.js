import { useState } from "react";
import "../App";

function CoffeeForm() {
  const [coffeeInfo, addCoffee] = useState({});

  function handleSubmit(coffeeInfo) {
    console.log("submitted");
    let newCoffee = {
      name: { name },
      price: { price },
      image: { image },
      id: { id },
    };
  }

  return (
    <div>
      <h2>Add a coffee</h2>
      <form>
        <input type="text" value="name" placeholder="Name" />
        <input type="text" value="price" placeholder="Price" />
        <input type="url" value="image" placeholder="Image URL" />

        <button type="submit">Add Coffee</button>
      </form>
    </div>
  );
}

export default CoffeeForm;
