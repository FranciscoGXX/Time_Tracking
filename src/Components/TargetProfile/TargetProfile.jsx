
import './TargetProfile.css'
import ProfilePhoto from '../../assets/images/image-jeremy.png'
import { useState,useEffect} from 'react'
import { useContext } from 'react'
import { Context } from '../../App'
import { Timers } from '../../App'




const TargetProfile= (prompt)=>{
    
    const [Timer,setTimer]= useContext(Context)


    return(
        <div className="TargetContent">
            <div className="Target_ProfileInfo">
                <div className="Target_ProfileInfo-IMG">
                    <img src={ProfilePhoto} alt="Profile Photo"/>
                </div>

                <div className="Target_ProfileInfo-Description">
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>

            <div className="Target_DateProfile">
                <button className={Timer==Timers[0]?"Target_DateProfile-active":""} onClick={()=>setTimer(Timers[0])}>Daily</button>
                <button className={Timer==Timers[1]?"Target_DateProfile-active":""} onClick={()=>setTimer(Timers[1])}>Weekly</button>
                <button className={Timer==Timers[2]?"Target_DateProfile-active":""} onClick={()=>setTimer(Timers[2])}>Monthly</button>
            </div>
        </div>
    )
}

export default TargetProfile;