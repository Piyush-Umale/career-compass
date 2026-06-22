import './index.css';
import { FaStar } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";


const SimilarJobs = (props)=>{

    const {similarJobs} = props;

    return(
        <li className='similar-jobs-li'>
            
            <div className='similar-jobs-card'>
                <div className='company-info'>
                <img src={similarJobs.company_logo_url} alt={similarJobs.title} className='company-logo'/>
                <div className='job-title-sec'>
                    <h3 className='job-title'>{similarJobs.title}</h3>
                    <div className='d-flex align-items-center'>
                        <FaStar/>
                        <span className='ml-2'>{similarJobs.rating}</span> 
                    </div>
                </div>
            </div>

            <div className='description'>
                <h4>Description</h4>
                <p>{similarJobs.job_description}</p>
            </div>

            <div className='job-loc-type d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                    <FaLocationDot className='mr-2'/>
                    <span className='mr-3'>{similarJobs.location}</span>
                    <BsFillBriefcaseFill className='mr-2'/>
                    <span>{similarJobs.employment_type}</span>
                </div>
            </div>
        
            </div>
        </li>
    )
}

export default SimilarJobs;