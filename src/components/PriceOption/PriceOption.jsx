
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

function PriceOption({ option }) {
  const { name, price, features } = option; 

  return (
    <div className=" bg-blue-500 rounded-lg flex flex-col p-4 text-white">
      <h2 className="text-center font-extrabold">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <p className="ml-6 font-extrabold text-3xl text-red-600 mb-3">{name}</p>
      <div className="flex-grow">
      <ul className="ml-12">
        {
        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
        }
      </ul>
      </div>
      <button className="text-center w-full bg-green-500 py-2 mt-6 rounded-lg hover:bg-red-700">Buy Now</button>
    </div>
    
  );
}

PriceOption.propTypes = {
  option: PropTypes.object

};

export default PriceOption;
