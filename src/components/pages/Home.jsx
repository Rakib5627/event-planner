import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HomeCards from "./HomeCards";
import Partners from "./Partners";


const Home = () => {

    const eventCards = useLoaderData();
    // console.log(eventCards)

    return (
        <div>
            <Banner></Banner>

            <h2 className="text-4xl my-10 text-center font-bold text-my-blue"> Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                {
                    eventCards.map(eventCard => <HomeCards
                    key={eventCard.id}
                    homeCard={eventCard}
                    ></HomeCards> )
                }
            </div>


            <div>
                <Partners></Partners>
            </div>
        </div>
    );
};

export default Home;