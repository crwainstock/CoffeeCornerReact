import { useState } from "react";
import "./CoffeeView.css";

function CoffeeView({ allCoffees, featuredSelectedCB }) {
  const [featured, setFeatured] = useState({});
  //   console.log(allCoffees);

  function handleClick(id) {
    console.log("clicked");
    let selected = allCoffees.find((item) => item.id === id);
    setFeatured(selected);
    // console.log(selected.image);
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
            <div id="coffee" key={coffee.id}>
              <h4 id={coffee.id}>{coffee.name}</h4>
              <img
                src={coffee.image}
                onClick={() => handleClick(coffee.id)}
                alt="coffee"
              />
            </div>
          ))}
        </div>
        {featured.name && (
          <div id="featured">
            <div>
              <h3>Featured Coffee</h3>
              <h4>{featured.name}</h4>
              <img src={featured.image} alt="featured coffee" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CoffeeView;
