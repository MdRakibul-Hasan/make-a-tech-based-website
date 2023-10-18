import { FaStar } from "react-icons/fa6";

const Products = ({product}) => {

    const {name, brand, price, rating, option, description, image} = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary"><FaStar /> {rating}</div>
    </h2>

    <p>${price}</p>
    <div className="btn-group flex justify-between items-center">
  
  <div><button className="btn">Details</button>
  <button className="btn">Update</button>
</div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{brand}</div> 
      <div className="badge badge-outline">{option}</div>
    </div>
    </div>
  </div>
</div>
    );
};

export default Products;