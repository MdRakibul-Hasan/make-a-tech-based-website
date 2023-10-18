import { useLoaderData } from "react-router-dom";
import Products from "../Home/Products";

const Google = () => {


    const products = useLoaderData();
const filteredProducts = products.filter(product => product.brand === 'Google' && 'google');
    return (
        <div>
<div className="grid md:grid-cols-2 gap-6 mx-10">

{filteredProducts.map(product => (
      <Products key={product._id} product={product} />
    ))}
</div>
        </div>
    );
};

export default Google;