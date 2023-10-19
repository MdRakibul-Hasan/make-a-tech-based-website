const getStoredProductData = () => {
    const storedProductData = localStorage.getItem('Product-data');

    if(storedProductData){
        return JSON.parse(storedProductData);
    }
    return [];
}

const saveProduct = _id =>{
const storedProductDatas = getStoredProductData();
const exists = storedProductDatas.find(productId => productId === _id);

if(!exists){
    storedProductDatas.push(_id);
    localStorage.setItem('Product-data', JSON.stringify(storedProductDatas))
}

}

export {saveProduct}
export {getStoredProductData}