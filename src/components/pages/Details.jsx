import { useLoaderData, useParams } from "react-router-dom";



const Details = () => {

    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);
    console.log(detail); 


    return (
        <div className="text-center text-my-blue">
            <img src={detail.image} alt="" className="w-full" />
            <p className=" text-2xl text-center mt-10">{detail.name}</p>
            <p>{detail.description}</p>

        </div>
    );
};

export default Details;