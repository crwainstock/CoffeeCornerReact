import { useState } from "react";
import "./CoffeeView.css";

function CoffeeView({ allCoffees, featuredSelectedCB }) {
  const [featured, setFeatured] = useState({});
  console.log(allCoffees);

  function handleClick(id) {
    console.log("clicked");
    let selected = allCoffees.find((item) => item.id === id);
    setFeatured(selected);
    //send the information to parent component by calling the callback function
    //right now no data is passed, only function is called and the parent console.logs hello to check the connection
    featuredSelectedCB();
  }

  return (
    <div>
      <h2>Pick a favorite:</h2>
      <div id="container-grid">
        <div id="grid">
          {allCoffees.map((coffee) => (
            <div key={coffee.id}>
              <p id={coffee.id}>{coffee.name}</p>
              <img src={coffee.image} onClick={() => handleClick(coffee.id)} />
            </div>
          ))}
        </div>
        {featured.name && (
          <div id="featured">
            <div>
              <h3>Featured section</h3>
              <p>{featured.name}</p>
              <img src={featured.image} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoffeeView;
