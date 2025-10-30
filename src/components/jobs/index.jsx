import './index.css';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../header';
import DisplayAllJobs from '../displayAllJobs';
import FilterSection from '../filterSection';

const Jobs = ()=>{

    const [allValues,setValues] = useState({

        jobsArr : [],
        empType : [],
        salaryRange : "",
        userInput : ""
    });

    const token = Cookies.get("myToken")

    useEffect(()=>{
        
        const fetchJobs = async()=>{

            const {empType,userInput,salaryRange} =  allValues;

            // console.log(empType);

            const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${salaryRange}&search=${userInput}`;

            const options = {

                method : "Get",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {
                const response = await fetch(api, options);

                const data = await response.json();

               if( response.ok ){

                setValues({...allValues,jobsArr : data.jobs})

               }
               else{

               }

            } catch (error) {
                console.log(error);
            }

        }

        fetchJobs();

    },[allValues.userInput,allValues.empType,allValues.salaryRange]);

     const onSearchJob = (e)=>{

        // let filtered = allValues.jobsArr.filter(job => job.title.toLowerCase().includes(e.target.value.toLowerCase()));
        // let updatedJobs;

        if(e.target.value !== "") {

            if(e.target.value === allValues.userInput){

                setValues({allValues,jobsArr})

            }
            else{
                if(e.key === "Enter") {
                    // Non-empty search: update userInput to typed keyword
                    setValues({ ...allValues,userInput: e.target.value });
                }
            }

        }
        else {
            if(e.key === "Enter") {
                // Empty search: reset userInput to trigger fetch for all jobs
                setValues({...allValues,userInput: "" });
            }
        }           


        // if(e.target.value !== ""){

        //     if(e.key === "Enter"){


        //         setValues({...allValues,userInput : e.target.value});

        //     }
        // }else{

        // }
        
     }

     const onChangeEmpType = (value,ischecked)=>{

        if( ischecked ){
            //add to arr

            setValues({...allValues,empType : [...allValues.empType,value]});
        }
        else{
            //remove from arr

            setValues({...allValues,empType : allValues.empType.filter(e=> e !== value)});
        }

     }

     const onChangeSalaryRange = (e)=>{

            setValues({...allValues,salaryRange : e.target.value})

     }

    return(
        <div className='jobs-cont'>

            <Header/>

            

            <div className='container ' id='container'>

                    <div className='row'>

                        <div className='col-4 ' id='filter-sec'>
                            <FilterSection onChangeEmpType = {onChangeEmpType} onChangeSalaryRange = {onChangeSalaryRange}/>   {/*the one in the blue is prop name and the on in the yellow is function name*/} 
                        </div>
                        <div className='col-8  ' id='display-all-jobs'>

                        <div className='main-jobs-cont'>
                            <input onKeyUp={onSearchJob} type="text" className='form-control w-100' placeholder='search your job'/>
                        </div>

                         <ul className='jobs-ul'>
                                {
                                    allValues.jobsArr.map(e => <DisplayAllJobs key  = {e.id} jobsItems = {e}/> )
                                }
                            </ul>
                        </div>
                    </div>

            </div>
           
        </div>
    )
}

export default Jobs;