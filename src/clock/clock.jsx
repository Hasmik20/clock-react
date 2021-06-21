import {useState,useEffect} from 'react'



const Clock = () => {
const [hour, setHour] = useState("");
const [minutes, setMinutes] = useState("");
const [seconds, setSeconds] = useState("");
const [errorMes, setErrorMes]= useState(false);

 const enterHourHandler = (e) =>{
    let element = e.target.value;
    element = parseInt(element);
    setHour(element)
    typeof element  === 'number' && element <= 24 ? setHour(element) : setErrorMes(true);
 }
 const enterMinutesHandler = (e) =>{
  let element = e.target.value;
  element = parseInt(element);
  setMinutes(element)
  typeof element  === 'number' && element <= 60 ? setMinutes(element) : setErrorMes(true);
}
const enterSecondsHandler = (e) =>{
  let element = e.target.value;
  element = parseInt(element);
  setSeconds(element)
  typeof element  === 'number' && element <= 60 ? setSeconds(element) : setErrorMes(true);
}

 const submitTime = (e) =>{
   e.preventDefault();
  setHour(hour )
  setMinutes(minutes)
  setSeconds(seconds)
  setErrorMes(false)
}

  return ( 
   
    <div className="clock-main-container" >
      <h2>React Clock !</h2>
       <div className="clock-container">
         <form onSubmit={submitTime}>
         <div className="input-c">
           <div className="inputContainer">
           <input type="number" placeholder="Hours" value ={hour}
            onChange={enterHourHandler}  />
            <input type="number" placeholder="Minutes" value={minutes}
            onChange={enterMinutesHandler}  />
            <input type="number" placeholder="Seconds" value={seconds}
            onChange={enterSecondsHandler}  />
           </div>
           {errorMes &&  <p className="errorMes">Please, enter a valid number</p> }
            <button className="btn-c"  >Submit </button>   
          
        </div> 
         </form>
         <div className="clock-c">
           <div className="hand hand-hour " style={{transform:`rotate(${hour *30}deg)`}} ></div> 
           <div className="hand hand-min " style={{transform:`rotate(${minutes *6 }deg)`}} ></div> 
           <div className="hand hand-sec " style={{transform:`rotate(${seconds *6}deg)`}} ></div> 
        </div> 
     </div>
    </div> 

   );
}
 
export default Clock;