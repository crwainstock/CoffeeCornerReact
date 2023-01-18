import { useState } from "react";
import "../App";

function CoffeeView({ allCoffees, featuredSelectedCB }) {
  const [featured, setFeatured] = useState({});
  console.log(allCoffees);

  function handleClick() {
    console.log("clicked");
    // let selected = allCoffees.find((item) => item.id === id);
    // setFeatured(selected);
    //send the information to parent component by calling the callback function
    //right now no data is passed, only function is called and the parent console.logs hello to check the connection
    // featuredSelectedCB();
  }

  return (
    <div>
      <h2>Pick a favorite:</h2>
      <div id="container-grid">
        <div id="grid">
          {allCoffees.map((coffee, index) => (
            <div key={index} onClick={() => handleClick(coffee)}>
              <p id={index}>{coffee}</p>
              {/* <img src={coffee.img} onClick={() => handleClick(coffee.id)} /> */}
            </div>
          ))}
        </div>
        {featured.name && (
          <div id="featured">
            <div>
              <h3>Featured section</h3>
              <p>{featured.name}</p>
              <img src={featured.img} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoffeeView;
