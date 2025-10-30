import { useNavigate } from 'react-router-dom';
import './index.css';
import React, { useEffect, useState } from "react";
import Cookies from 'js-cookie';



const Login = ()=>{

    const[allValues, setValues] = useState({
        username : "",
        password : "",
        errorMsg : ""
    });

    let token =  Cookies.get("myToken");

    // console.log(token);

    useEffect(()=>{

      if ( token !== undefined){
        navigate("/");
    }
    },[]);
                  
    const navigate = useNavigate();

const [isRightPanelActive, setIsRightPanelActive] = useState(false);


const onSubmitUserDetails = async(e)=>{

    e.preventDefault();

    const api = "https://apis.ccbp.in/login";

    const userDetails = {
        username : allValues.username,
        password : allValues.password
    }

    const options = {
        method : "Post",
        body : JSON.stringify(userDetails)
    }

    try {

         const response = await fetch(api, options);

         const data = await response.json();

        if( response.ok === true ){
            setValues({...allValues,errorMsg : ""});

            Cookies.set("myToken", data.jwt_token);

            console.log(data.jwt_token);

            navigate("/");
        }   
        else{
            setValues({...allValues,errorMsg : data.error_msg});
        }        
    } catch (error) {
        
    }

}

  return (
    <div className='page-cont'>
      <div
        className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
      >
        {/* Sign Up Section*/}
        <div className="form-container sign-up-container">
          <form  action="#">

          <div className='logo-cont'>
           {/* Logo */}
           <img 
              src="/logos/careerCompass_logo.png" 
              alt="CareerCompass Logo" 
              className="logo-img"
            />
            </div>

            <h1 className='createACC'>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Section*/}
        <div className="form-container sign-in-container">
          <form onSubmit={onSubmitUserDetails} action="#">
            <div className='logo-cont'>
           {/* Logo */}
           <img 
              src="/logos/careerCompass_logo.png" 
              alt="CareerCompass Logo" 
              className="logo-img"
            />
            </div>

            <h1 >Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="text" placeholder="Username" 
            onChange={(e)=>{setValues({...allValues,username : e.target.value})}}/>
            <input type="password" placeholder="Password" 
            onChange={(e)=>{setValues({...allValues,password : e.target.value})}}/>
            {/* <a href="#">Forgot your password?</a> */}
            <br />
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay sliding cont*/}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(false)}
              >
                Sign In
              </button>                                      
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(true)}
              >
                Sign Up
              </button>
              <br />
              <p className='text-warning mt-2'> {allValues.errorMsg}</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};




//     return(
//         <div className='login-cont'>
//         <form className='w-50 p-3 border border-danger'>
//   <div className="form-group">
//     <label for="exampleInputEmail1">Username</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//     </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//     </form>
// </div>
        
//     )
 

export default Login;








