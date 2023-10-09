import { useLoaderData, useParams } from "react-router-dom";



const Details = () => {

    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt);
    console.log(details , detail); 


    return (
        <div className=" text-my-blue">
            <img src={detail.image} alt="" className="w-full" />
            <p className=" text-2xl text-center mt-10">{detail.name}</p>
            <p>{detail.description}</p>
            <p >With a perfect blend of experience and passion,Event Planner is an event management company in Bangladesh. We have emerged as a company with ideas to turn your corporate or personal event into something worth remembering. With the help of our creative team, we provide our services to most types of corporate events including, but not limited to, seminars, conferences, trade shows, cultural events, company or organization milestones, exhibitions, product launches, concerts, company annual meetings, corporate picnics, fashion shows and appreciation events. We will also strive to make your wedding events, birthday events and other personal events unforgettable.</p>

        </div>
    );
};

export default Details;