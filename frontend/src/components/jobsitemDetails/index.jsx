import { useParams } from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import SimilarJobs from '../similarJobCard';




const JobsItemDetails =  ()=>{



    const [allJobs, setJobs] = useState({

        jobDetails : [],
        jobSkills : [],
        lifeAtComp : [],
        similarJobs : []

    });

    const {id} = useParams();

    

    const token = Cookies.get("myToken");

    useEffect(()=>{

        const fetchJobsDetails = async()=>{

            const api = `https://apis.ccbp.in/jobs/${id}`;

            const options = {

                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api, options);

                const data = await response.json();

                // console.log(data)

                if(response.ok === true){

                    setJobs({...allJobs,jobDetails : data.job_details, jobSkills : data.job_details.skills, lifeAtComp : data.job_details.life_at_company, similarJobs : data.similar_jobs });
                    
                    console.log(data.similar_jobs);

                }
                
            } catch (error) {

                console.log(error)
                
            }
        }

        fetchJobsDetails();

    },[id,token])

    const {jobDetails} = allJobs;
    const {jobSkills} = allJobs;
    const {lifeAtComp} = allJobs;
    const {similarJobs} = allJobs


return(
    <div className='JID-page-cont'>
        <div className='main-job-cont-parent'>
        <div className='main-job-cont'>

            <div className='company-info'>
                < img src={jobDetails.company_logo_url} alt=""  className='job-card-img'/>

                <div className='job-title-sec'>
                    <span><p className='job-title'>{jobDetails.title}</p></span>
                    <div className='d-flex align-items-center'>
                        <FaStar className='rating-star'/>
                    <span className='ml-2 jobs-rating'>{jobDetails.rating}</span>
                    </div>
                </div>
            </div>
            <div className='job-loc-type'>
                <span className='d-flex align-items-center'>
                    <FaLocationDot className='ml-1 mr-2'/>
                    <span className='job-loc-emp mr-3'>{jobDetails.location}</span>
                    <BsFillBriefcaseFill className='mr-2'/>
                    <span className='job-loc-emp'>{jobDetails.employment_type}</span>
                </span>
                <span>
                   <span className='package'>{jobDetails.package_per_annum}</span>
                </span>
            </div>
            <hr className='hori-line'/>
            <div className='description-cont'>
                <div  className='d-flex justify-content-between'>
                    <span><h4>Description</h4></span>
                    <span className='company-url'><a href={jobDetails.company_website_url}>Visit <FaExternalLinkSquareAlt  /></a></span>
                </div>
                <span className='descp'>{jobDetails.job_description}</span>
            </div>
            <div className='skills-cont'>
                <h4>Skills</h4>
                <ul className='jobs-skills-ul'>
                    {
                        jobSkills.map((skill)=> ( <li className='d-flex align-items-center mr-4' key={skill.name}>
                            <img src={skill.image_url} alt={skill.name} className='jobs-skill-img ml-3'/>
                            <span className='skills-name ml-2' >{skill.name}</span>
                        </li>)  )
                    }
                </ul>
                </div>
            <div className='life-at-comp-cont'>
                
                    <div><h4>Life at Company</h4>
                    <span className='life-at-comp-desc'>{lifeAtComp.description}</span></div>
                    <div><img src={lifeAtComp.image_url} className='company-img'/></div>
                
            </div>
        </div>
        </div>

        <div className='similar-jobs-cont-parent'>
        <div className='similar-jobs-cont'>
                <h4>Similar Jobs</h4>
                <div className='similar-jobs-list'>
               <ul className='similar-jobs-ul'>
                     {allJobs.similarJobs?.map(similarJobs =>(<SimilarJobs key={similarJobs.id} similarJobs = {similarJobs}/>
                ))}
               </ul>
            </div>
        </div>
        </div>

    </div>
)

}

export default JobsItemDetails;