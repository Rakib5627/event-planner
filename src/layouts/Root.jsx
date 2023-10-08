import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Root = () => {
    return (
        <div>
            <div className=" bg-my-of-white">
            <div className="max-w-6xl mx-auto pb-20">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Root;