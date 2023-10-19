import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredProductData } from "./Utility/localStorage";
import CardOfMyCart from "./CardOfMyCart";



const MyCart = () => {

    const mycarts = useLoaderData();
    const [storedProducts, setStoredProducts] = useState([])
    const [dataLength, setDataLength] = useState(4);

    useEffect( () => {
        const storedProductIds = getStoredProductData();
        if(mycarts.length > 0) {
            const productDone = [];

            for (const _id of storedProductIds) {
                const product = mycarts.find(product => product._id === _id);

                if (product){
                    productDone.push(product)
                }
            }
            setStoredProducts(productDone);  
        }
    },[mycarts])
console.log(storedProducts.length);

    return (
        <div>
            <h2>My cart:{storedProducts.length}</h2>
<div>
    {storedProducts.slice(0, dataLength).map(cardOfMyCart => <CardOfMyCart key={cardOfMyCart._id} cardOfMyCart={cardOfMyCart}></CardOfMyCart>)

    }
<div className={storedProducts.length <= 4 ? 'hidden' : 'active'}>
    <div className={dataLength === storedProducts.length && 'hidden'}>
<div className="flex flex-row justify-center align-middle items-center py-14 pb-28">
<button
onClick={() => setDataLength(storedProducts.length)}
className=" bg-red-500 text-white py-1 px-4 rounded-md">See All Product</button>
</div>
    </div>
</div>

</div>
<div className="pb-28"></div>


        </div>
    );
};

export default MyCart;