import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Products = ({product}) => {

    const {_id, name, brand, price, rating, option, description, image} = product;

    return (

<div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
<img
  className="w-full"
  src={image}
  alt="Apple Watch Series 7 in colors pink, silver, and black"
/>
<div className="px-4 py-4">
  <div className="font-bold text-xl mb-2">
    <h2 className="text-gray-900 dark:text-white">
    {name}
    </h2>
  </div>
  <div className="mb-5 mt-2 flex items-center">
   
    <span className=" flex items-center gap-1 ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
    <FaStar /> {rating}
    </span>
    <p className="border-gray-500 border-2 rounded-lg px-1 mr-2">{brand}</p> 
    <p className="border-gray-500 border-2 rounded-lg px-1">{option}</p>
  </div>
  <div className="flex items-center justify-between">
    <span className="text-2xl font-bold text-gray-900 dark:text-white">${price}</span>
<div className="flex justify-center gap-2">
<Link to={`/updateProduct/${_id}`}
      className="rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
    >
      Update
    </Link> 
    <a
      href="#"
      className="rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
    >
      Details
    </a>
</div>

  </div>
</div>
</div>



    );
};

export default Products;