import { useLoaderData } from "react-router-dom";
import Products from "../Home/Products";


const Apple = () => {

const products = useLoaderData();
const filteredProducts = products.filter(product => product.brand === 'apple');
    return (
        <div>
<div className="grid md:grid-cols-2 gap-4 m-8">
    
{filteredProducts.map(product => (
      <Products key={product._id} product={product} />
    ))}
</div>
        </div>
    );
};

export default Apple;