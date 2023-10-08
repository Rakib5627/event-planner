
import aa from "../../assets/band-party-dhaka-150x150.jpg"
import ab from "../../assets/birthday-decoration-150x150.png"
import ac from "../../assets/ghora-gaari-rental-150x150.png"
import ad from "../../assets/palki-rental-dhaka-150x150.png"
import ae from "../../assets/sound-system-rental-dhaka-1-150x150.png"
import af from "../../assets/birthday-photography-dhaka-150x150.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Partners = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="mt-20">
            <div>
                <h1 className="text-3xl font-bold text-center my-6">Our Premium Event Items</h1>

                <div className=" grid grid-cols-6 justify-center mb-20">

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ab} alt="" />
                        <p>Decoration</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ac} alt="" />
                        <p>Ghora Gari</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={aa} alt="" />
                        <p>Palki</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ad} alt="" />
                        <p>Band</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={ae} alt="" />
                        <p>Music</p>
                    </div>
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src={af} alt="" />
                        <p>Camera</p>
                    </div>

                </div>


            </div>



            <div className=" bg-my-pink p-10 rounded">

                <h2 className="text-center text-3xl font-bold my-6">Why Choose Us?</h2>

                <div className="grid grid-cols-2 justify-around lg:gap-10">
                    <div>
                        <p className="text-lg font-medium">ALL KIND OF LOGISTICS AND RESOURCES SUPPORT</p>
                        <p>As an experienced Event Management company, we have all kind of Event equipment, logistics and resources available</p>
                    </div>
                    <div className="">
                        <p className="text-lg grid font-medium">EXPERIENCED EVENT PLANNER AND MANAGER</p>
                        <p>When it is about making your Event successful, it is all about making a good plan, managing and executing successfully. And, we have experienced who will make your event unique and memorable!</p>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Partners;