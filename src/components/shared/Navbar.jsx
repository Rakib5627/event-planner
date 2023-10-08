import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

    const { user , logOut} = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks = <>
        <li className=""><NavLink to="/">Home</NavLink></li>
        <li className=""><NavLink to="/about">About Us</NavLink></li>
        <li className=""><NavLink to="/faqs">FAQs</NavLink></li>

    </>


    return (
        <div className="navbar bg-my-pink rounded-b-lg mb-20 text-my-blue">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-error lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

            </div>

            <div className="navbar-center">
                <Link className="normal-case text-3xl font-bold">Event Planner</Link>
            </div>

            <div className="navbar-end">
                 {
                    user? <><p onClick={handleSignOut}>Logout</p></> : <><p className=""><NavLink to="/login">Login</NavLink></p></>
                 }
            </div>

        </div>
    );
};

export default Navbar;








