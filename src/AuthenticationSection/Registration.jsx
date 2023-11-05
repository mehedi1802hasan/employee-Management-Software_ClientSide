import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider';

const Registration = () => {
    const {signUpUser,loading}=useContext(AuthContext);
    const handleRegistration=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const role=form.role.value;
        const image=form.image.value;
        console.log(name,email,role,image,password);
        signUpUser(email,password)
        .then(result=>{
            const userResult =result.user;
            console.log(userResult);
            alert('registration sucessfull')
        })
        .catch(error=>{
            console.log(error);
            alert('sorry Failed')

        })

    }
    return (
        <div>
            <h3 className=' mt-6 text-center text-3xl font-serif font-bold'>Registration...</h3>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                         
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="enter your name" className="input input-bordered" required />
                            </div>
                         
                         
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <input type="text" name='role' placeholder="enter your role" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name='image' placeholder="enter your image url" className="input input-bordered" required />
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
            {/* <div className='text-center -mt-16 text-3xl font-bold font-serif  text-green-500'>
            <Link to='/'>Login</Link>
                </div> */}
           <Link className='flex justify-center text-green-600 font-serif text-2xl' to='/login'>Login</Link>
        </div>
    );
};

export default Registration;