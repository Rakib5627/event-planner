import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname);

    const handleRegister = e => {
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password);

        if (password.length < 6) {
            Swal.fire('Password must be at least 6 characters long.');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire("Password must contain at least one capital letter.");
            return;
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            Swal.fire("Password must contain at least one special character.");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                Swal.fire({
                    icon: 'success',
                    text: 'User created & logged in Successfully',
                    timer: 1000

                });

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div className=" text-my-blue bg-neutral-50 mx-auto md:w-1/2 shadow-xl py-5">
            <h2 className="text-3xl my-10 text-center">Please Sign Up</h2>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name..." className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-my-pink hover:bg-my-red">Register</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login Here</Link></p>
            <div className="border border-x-1 opacity-20"></div>
            <p className="mt-4 text-center"><button onClick={handleGoogleSignIn} className="btn btn-ghost">Sign in with Google</button></p>
        </div>
    );
};

export default Register;