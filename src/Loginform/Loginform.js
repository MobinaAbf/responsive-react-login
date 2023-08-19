import './Loginform.css';
import React from 'react';
import {FaEnvelope} from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';


const Loginform = () => {
  return (
    <div className="container">
        <section>
      <div className="login-box">
        <form>
          <h2>Login</h2>
          
          <div className="input-box">
            <span className="icon">
                <FaEnvelope/>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
                <FaLock/>
              </span>
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className='remember-forgot'>
            <label>
                <input type='checkbox'/>
                    Remember me
            </label>

                <a href="#">Forgot Password ?</a>
            
          </div>
          <button type='submit'>Login</button>
          <div className='register'>
            <p>
                Don`t have an account ?  
                <a href='#'>
                    Register
                </a>
            </p>
          </div>
        </form>
      </div>
      </section>
    </div> 
  );
}

export default Loginform;