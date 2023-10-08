import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const HomeCards = ({ homeCard }) => {
    const { id, name, price, image ,description } = homeCard;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Shoes" className=" h-64 w-full" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="text-xs">{description}</p>
                    <p>Price ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${id}`}><button className="btn text-my-blue bg-my-pink hover:bg-my-red">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

HomeCards.propTypes = {
    homeCard : PropTypes.object
}

export default HomeCards;