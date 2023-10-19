

const CardOfMyCart = ({cardOfMyCart}) => {

    const {_id, name, brand, price, rating, option, description, image} = cardOfMyCart || {}

    return (
        <div>
            <h2>{name} {price} {description}</h2>



        </div>
    );
};

export default CardOfMyCart;