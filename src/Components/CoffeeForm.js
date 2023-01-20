import { useState } from "react";
import "../App";

function CoffeeForm() {
  const [newCoffee, addCoffee] = useState({}); //Whole new coffee object
  const [name, addName] = useState("");
  const [price, addPrice] = useState("");
  const [image, addImage] = useState("");
  //Is it necessary to include each input like this?
  //What is the best way to include the id here? Increment it?

  function handleSubmit() {
    console.log("submitted");
    let newCoffee = {
      name: { name },
      price: { price },
      image: { image },
    };
  }
  // This error came up in console: react-dom.development.js:86 Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
  //Added newCoffee object to handleSubmit function, but then it's saying newCoffee is alreay defined.
  return (
    <div>
      <h2>Add a coffee</h2>
      <form>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => addName(e.target.value)}
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
