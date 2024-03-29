import { Link } from 'react-router-dom';
import logo from '../../assets/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext);
   
    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.text.value;
        console.log(name);

        createUser(email, password)
        .then(result => {
        const user = result.user;
        console.log(user);
        })
        .catch(error => console.error(error))

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <div className="text-center lg:text-left">
            
            <img src={logo} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign UP</h1>
              <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name ="text" placeholder="name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name ="email" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
              </form>
              <h3>Already have an account. <Link to = '/login' className= 'text-red-400'>Sign In</Link></h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;