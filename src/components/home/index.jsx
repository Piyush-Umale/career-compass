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
        
        <div className='home-content'>
        <br /><br />

        <div style={{height:"80vh"}} className='home-pg-div w-100 h-100'>

        <h1>Discover Your Next Career Move</h1>
        <p className='p-home'>At CareerCompass, we help you find jobs that align with your passion, 
            <br />skills, and future goals. 
        Explore thousands of opportunities 
        <br />across industries and locations.</p>


        <Link to = "/jobs"  className='btn btn-info'>Find Jobs</Link>

        </div>

        
        
        </div>
        </div>
    )
}
 
export default Home;