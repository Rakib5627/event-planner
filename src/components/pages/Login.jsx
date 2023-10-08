
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";




const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('abcd', location)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
            <div className=" text-my-blue bg-neutral-50 mx-auto w-1/2 shadow-xl py-5">
                <h2 className="text-3xl font my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin}  className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="email@gmail.com" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="password..." className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-my-pink hover:bg-my-red">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>
      
    );
};

export default Login;