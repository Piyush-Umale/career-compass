import './index.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../header';


const Home = ()=>{


    return(
        <div className='home-pg'>
        <Header/>

        <br /><br />

        <div style={{height:"80vh"}} className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

        <h1>Discover Your Next Career Move</h1>
        <p>At CareerCompass, we help you find jobs that align with your passion, skills, and future goals. 
        Explore thousands of opportunities across industries and locations.</p>
        <button>Find Jobs</button>

        <br /><br />

        <Link to = "/jobs"  className='btn btn-info'>Find Jobs</Link>

        </div>

        
        
        </div>
    )
}
 
export default Home;