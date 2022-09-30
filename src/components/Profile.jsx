import {React, useState} from 'react'
import "./styles/Profile.css"
import User from './User'



const Profile = () => {
    const [data, setData] = useState("name")

    const handleName=()=>setData("name")
    const handleEmail=()=> setData("email")
    const handleBirth=()=>setData("birth")
    const handleAddress=()=>setData("address")
    const handleNumber=()=>setData("number")
    const handlePass=()=>setData("pass")
    
    return (
        <div className="contains">
            <User show={data}/>
            <div className="container">
                <ul className="listoficons">
                    <li><button onClick={handleName}><span className='name'></span></button></li>
                    <li><button onClick={handleEmail}><span className='mail'></span></button></li>
                    <li><button onClick={handleBirth}><span className='birth'></span></button></li>
                    <li><button onClick={handleAddress}><span className='address'></span></button></li>
                    <li><button onClick={handleNumber}><span className='number'></span></button></li>
                    <li><button onClick={handlePass}><span className='pass'></span></button></li>
                </ul>
            </div>
        </div>
    )
}



export default Profile;