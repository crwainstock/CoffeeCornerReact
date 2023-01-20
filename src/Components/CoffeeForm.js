import { useState } from "react";
import "../App";

function CoffeeForm() {
  return (
    <div>
      <h2>Add a coffee</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Price" />
        <input type="url" placeholder="Image URL" />

        <button type="submit">Add Coffee</button>
      </form>
    </div>
  );
}

export default CoffeeForm;
