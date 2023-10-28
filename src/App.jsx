import './App.css'
import TargetProfile from './Components/TargetProfile/TargetProfile'
import TargetTracker from './Components/TargetTracker/TargetTracker'
import { useState, createContext, useEffect } from 'react'
import Data from "../data.json" /*For now i dont have an API so i use this json for simulate an API*/ 



export const Context = createContext();/*Creating a global context for change the Data depending if its Daily-Weekly-Monthly */
export const Timers = ["Daily", "Weekly", "Monthly"];

function App() {


   const [Timer, setTimer] = useState(Timers[0]);


   return (

      <Context.Provider value={[Timer, setTimer]}/*all the component will able to get and set the global state*/ >
         <div className="AppContent">


            <div className="App_User">
               <TargetProfile></TargetProfile>
            </div>



            <div className="App_Tracker">

               {Timer==Timers[0]?
               (
                  <>
                      <TargetTracker
                           color={"hsl(15, 100%, 70%)"}
                           TrackerName={Data[0].title}
                           Time={Data[0].timeframes.daily.current}
                           LastDate={"Last day - "+Data[0].timeframes.daily.previous}
                        />

                        <TargetTracker
                           color={"hsl(195, 74%, 62%)"}
                           TrackerName={Data[1].title}
                           Time={Data[1].timeframes.daily.current}
                           LastDate={"Last day - "+Data[1].timeframes.daily.previous}
                        />

                        <TargetTracker
                           color={"hsl(348, 100%, 68%)"}
                           TrackerName={Data[2].title}
                           Time={Data[2].timeframes.daily.current}
                           LastDate={"Last day - "+Data[2].timeframes.daily.previous}
                        />

                        <TargetTracker
                           color={"hsl(145, 58%, 55%)"}
                           TrackerName={Data[3].title}
                           Time={Data[3].timeframes.daily.current}
                           LastDate={"Last day - "+Data[3].timeframes.daily.previous}
                        />

                        <TargetTracker
                           color={"hsl(264, 64%, 52%)"}
                           TrackerName={Data[4].title}
                           Time={Data[4].timeframes.daily.current}
                           LastDate={"Last day - "+Data[4].timeframes.daily.previous}
                        />

                        <TargetTracker
                           color={"hsl(43, 84%, 65%)"}
                           TrackerName={Data[5].title}
                           Time={Data[5].timeframes.daily.current}
                           LastDate={"Last day - "+Data[5].timeframes.daily.previous}
                        />
                  </>
               ):
               null
               }
                      

               {Timer == Timers[1] ?
                  (
                     <>
                        <TargetTracker
                           color={"hsl(15, 100%, 70%)"}
                           TrackerName={Data[0].title}
                           Time={Data[0].timeframes.weekly.current}
                           LastDate={"Last weekly - "+Data[0].timeframes.weekly.previous}
                        />

                        <TargetTracker
                           color={"hsl(195, 74%, 62%)"}
                           TrackerName={Data[1].title}
                           Time={Data[1].timeframes.weekly.current}
                           LastDate={"Last weekly - "+Data[1].timeframes.weekly.previous}
                        />

                        <TargetTracker
                           color={"hsl(348, 100%, 68%)"}
                           TrackerName={Data[2].title}
                           Time={Data[2].timeframes.weekly.current}
                           LastDate={"Last weekly - "+Data[2].timeframes.weekly.previous}
                        />

                        <TargetTracker
                           color={"hsl(145, 58%, 55%)"}
                           TrackerName={Data[3].title}
                           Time={Data[3].timeframes.weekly.current}
                           LastDate={"Last weekly - "+Data[3].timeframes.weekly.previous}
                        />

                        <TargetTracker
                           color={"hsl(264, 64%, 52%)"}
                           TrackerName={Data[4].title}
                           Time={Data[4].timeframes.weekly.current}
                           LastDate={"Last weekly - "+Data[4].timeframes.weekly.previous}
                        />

                        <TargetTracker
                           color={"hsl(43, 84%, 65%)"}
                           TrackerName={Data[5].title}
                           Time={Data[5].timeframes.weekly.current}
                           LastDate={"Last weekly - "+Data[5].timeframes.weekly.previous}
                        />
                     </>
                  )

                  : null
               }

               {Timer==Timers[2]?
               (
                  <>
                     <TargetTracker
                           color={"hsl(15, 100%, 70%)"}
                           TrackerName={Data[0].title}
                           Time={Data[0].timeframes.monthly.current}
                           LastDate={"Last monthly - "+Data[0].timeframes.monthly.previous}
                        />

                        <TargetTracker
                           color={"hsl(195, 74%, 62%)"}
                           TrackerName={Data[1].title}
                           Time={Data[1].timeframes.monthly.current}
                           LastDate={"Last monthly - "+Data[0].timeframes.monthly.previous}
                        />

                        <TargetTracker
                           color={"hsl(348, 100%, 68%)"}
                           TrackerName={Data[2].title}
                           Time={Data[2].timeframes.monthly.current}
                           LastDate={"Last monthly - "+Data[0].timeframes.monthly.previous}
                        />

                        <TargetTracker
                           color={"hsl(145, 58%, 55%)"}
                           TrackerName={Data[3].title}
                           Time={Data[3].timeframes.monthly.current}
                           LastDate={"Last monthly - "+Data[0].timeframes.monthly.previous}
                        />

                        <TargetTracker
                           color={"hsl(264, 64%, 52%)"}
                           TrackerName={Data[4].title}
                           Time={Data[4].timeframes.monthly.current}
                           LastDate={"Last monthly - "+Data[0].timeframes.monthly.previous}
                        />

                        <TargetTracker
                           color={"hsl(43, 84%, 65%)"}
                           TrackerName={Data[5].title}
                           Time={Data[5].timeframes.monthly.current}
                           LastDate={"Last monthly - "+Data[0].timeframes.monthly.previous}
                        />
                  </>
               )
               :null
               }
            </div>

         </div>
      </Context.Provider>
   )
}

export default App
