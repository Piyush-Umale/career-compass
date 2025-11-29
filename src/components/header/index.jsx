import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const Header = ()=>{

    const navigate = useNavigate();

        const tokenremove = ()=>{

            Cookies.remove("myToken");                                

            navigate("/login");
        };
    

    return(
        <nav className='d-flex justify-content-between '>

           
            {/* <Link to ="/" className = 'text-danger'>Jobby App</Link> */}
            <img className='nav-logo' src="/logos/careerCompass_logo2.png" alt="career compass logo" />
         
                <ul style={{listStyle : "none"}} >
                <li>
                    <Link to = "/" className='home-btn btn btn-info'>Home</Link>
                </li>

                <li>
                    <Link to =  "/jobs" className='jobs-btn btn btn-info'> Jobs</Link>
                </li>

                <div className='logout-btn'><button onClick={tokenremove} className = 'btn btn-primary'>Logout</button></div>
                </ul>

        </nav>
    )
}

export default Header;