
import './TargetTracker.css'

const TargetTracker= ({color,TrackerName,Time,LastDate})=>{

    return(
        <div className="TracketContain" style={{backgroundColor:color}}>
            <div className="Tracket_Info">
                <div className="Tracket_Info-Title">{TrackerName}</div>
                <div className="Tracket_Info-Options">...</div>
                <div className="Tracket_Info-Time">{Time+"Hrs"}</div>
                <div className="Tracket_Info-LastDate">{LastDate}</div>
            </div>
        </div>
    )
}

export default TargetTracker;