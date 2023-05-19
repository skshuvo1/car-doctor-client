import { Link } from 'react-router-dom';
import logo from '../../assets/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

  const {signIn} = useContext(AuthContext)

    const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
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
            <h1 className="text-5xl font-bold text-center">Login</h1>
              <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
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
                
                <input className='btn btn-primary' type="submit" value="Sign In" />
              </div>
              </form>
              <h3>New to Car Doctors? <Link to = '/signup' className= 'text-red-400'>Sign Up</Link></h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;