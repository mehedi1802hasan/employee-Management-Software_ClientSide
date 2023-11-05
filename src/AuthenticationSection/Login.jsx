import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider';

const Login = () => {
  const {loginUser}=useContext(AuthContext);
  const handleLogin=(e)=>{
   e.preventDefault();
   const form=e.target;
   const email=form.email.value;
   const password=form.password.value;
   console.log(email,password);
  loginUser(email,password)
  .then(result=>{
    const SigningUser=result.user;
    console.log(SigningUser);
    alert('signin sucessfully ')
  })
  .catch(error=>{   console.log(error)
  
  alert('sorry somethign missing ')})
   
  
  
  
  }
    return (
        <div>
            <h3 className=' mt-6 text-center text-3xl font-serif font-bold'>Login...</h3>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
<div className='text-center -mt-16 text-3xl font-bold font-serif  text-green-500'>
                    <Link to='/registration'>Registration </Link>
                </div>
        </div>
    );
};

export default Login;