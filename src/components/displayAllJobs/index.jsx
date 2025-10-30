import './index.css';
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const DisplayAllJobs = (props)=>{

    const {jobsItems} = props;

    

    return(
        <Link to= {`/jobs/${jobsItems.id}`} className='job-card-link'>

            
            <li className='ul-jobs-li w-100 border border-danger rounded p-2'> 

                    <div className='d-flex '>
                        <img src={jobsItems.company_logo_url} width = "55 px" height={"55px"} />
                        
                        <div className=' ml-3'>
                            <h3>{jobsItems.title}</h3>
                            <FaStar />
                            <span className='ml-2'>{jobsItems.rating}</span>
                        </div>
                    </div>

                    <br />

                     <div className='d-flex justify-content-between'>
                            <div>
                                <FaLocationDot/> 
                                <span className='ml-1 mr-3'>{jobsItems.location}</span>

                                <BsFillBriefcaseFill />
                                <span className='ml-2'>{jobsItems.employment_type}</span>

                            </div>
                            <span className='package-per-annum'>{jobsItems.package_per_annum}</span>
                        </div>

                        <hr />

                        <h4> Description </h4>

                        <p>{jobsItems.job_description}</p>
            </li>

        
        
        </Link>
    )

}

export default DisplayAllJobs;