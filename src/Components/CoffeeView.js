import { useState } from "react";
import "./CoffeeView.css";

function CoffeeView({ coffeeArray, onFeatured }) {
  const [featured, setFeatured] = useState({});
  //   console.log(allCoffees);

  function handleClick(id) {
    console.log("clicked");
    let selected = coffeeArray.find((item) => item.id === id);
    setFeatured(selected);
    onFeatured();
    //This function is defined in the App.js parent -- called here to communicate back up to parent
  }

  return (
    <div>
      <h2>Pick a favorite:</h2>
      <div id="featured-container" className="container">
        {featured.name && (
          <div id="featured">
            <h3>Featured Coffee</h3>
            <h4>
              {featured.name} {featured.price}€
            </h4>
            <img
              src={featured.image}
              alt="featured coffee"
              className="rounded"
            />
          </div>
        )}
      </div>
      <div id="container-grid" className="container">
        <div id="coffee-grid" className="row">
          {coffeeArray.map((coffee) => (
            <div id="coffee" key={coffee.id} className="col-sm-3">
              <h4 id={coffee.id}>{coffee.name}</h4>
              <img
                src={coffee.image}
                onClick={() => handleClick(coffee.id)}
                alt="singleCoffee"
                className="img-fluid rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CoffeeView;
