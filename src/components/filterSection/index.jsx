import './index.css';
import { useEffect,useState } from 'react';

const employmentType = [
    {
        id : "FULLTIME",
        title : "FULL TIME"
    },

    {
        id : "PARTTIME",
        title : "PART TIME"
    },

    {
        id : "INTERNSHIP",
        title : "INTERNSHIP"
    },

    {
        id : "FREELANCE",
        title : "FREELANCE"
    },
];

const salaryRange =  [
    {
    salaryId: '1000000',
    salaryTitle: '10 LPA and above',
  },

  {
    salaryId: '2000000',
    salaryTitle: '20 LPA and above',
  },

  {
    salaryId: '3000000',
    salaryTitle: '30 LPA and above',
  },

  {
    salaryId: '4000000',
    salaryTitle: '40 LPA and above',
  },
]

const FilterSection = (prop)=>{



    //////// profile details section  /////////////

    const [profile,setProfile] = useState({

        ProfileDetails : {}

    });

    const {onChangeEmpType} = prop;

    const {onChangeSalaryRange} = prop;

    useEffect(()=>{

        const profileDetails = async()=>{

            const apiUrl = 'https://apis.ccbp.in/profile'

            const options = {
                method : "Get",
                headers : {
                    Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU`

                }
                
            }

            const response = await fetch(apiUrl, options)
            
            const data = await response.json();

            // console.log(data);

            if(response.ok === true){

                setProfile({...profile,ProfileDetails : data.profile_details})
            }
            
        }

         profileDetails();

    },[])

    


    ///// employment type section ///////

    

    const displayEmpType = (each)=>{

        const onChangeEmp = (e)=>{

            onChangeEmpType(e.target.value, e.target.checked);
            
        }

        const{id,title} = each;

        return(
            
                <li className='filter-list' key={each.id}>
                    <input onChange={onChangeEmp} id = {id} value={id} type="checkbox" />
                   <label className='ml-2' htmlFor={id}>{title}</label>
                </li>

                
        )
    }

    ///////// salary range section //////

    const displaySalaryRange = (eachRange)=>{

        const onChangeSalary= (e)=>{

            onChangeSalaryRange(e);
            
        }

        const{salaryId,salaryTitle} = eachRange;

        return(
            <li className='filters-list-item' key={eachRange.salaryId}>
                <input id={salaryId}
                type="radio" 
                className='salary-range-checkbox'
                value={salaryId}
                onChange={onChangeSalary}
                name='salary Ranges'
                />
                <div className='filter-salaryid'>
                    <label htmlFor={salaryId} className='ml-2 '>

                    {salaryTitle}
                </label>
                </div>
            </li>
        )
    }

    return(

        <div className='filters-group-cont'>

        <div className='profile-details'>
             
            <img className='profile-image' src={profile.ProfileDetails.profile_image_url} alt="profile"/>
            <h1 className='profile-name'>{profile.ProfileDetails.name}</h1>
            <p className='profile-bio'>{profile.ProfileDetails.short_bio}</p>
        </div>
        
            <div className='employe-type'>

                <h1 className='filter-heading'>Employment Type</h1>
                <hr />
                <ul className='filter-ulist'>
                {
                    employmentType.map(each => displayEmpType(each))
                }
                </ul>
            </div>

            <div className='salary-range'>
                

                <h1 className='filter-heading'>Salary Range</h1>
                <hr />
                <ul className='filters-list'>
                    {
                        salaryRange.map(eachRange => displaySalaryRange(eachRange))
                    }
                </ul>

            </div>
        </div>
    )

}

export default FilterSection;