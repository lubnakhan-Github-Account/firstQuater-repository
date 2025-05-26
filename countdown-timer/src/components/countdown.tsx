"use client"
import { useState,useRef, useEffect } from "react"

export default function CountdownTimer(){

    // -------------variables----------------------//
    const [duration, setduration] = useState<number | string>("")
    let [timeLeft,settimeLeft] = useState(0)
    const [isActive, setisActive] = useState<boolean>(false)
    let timer= useRef<any>(null)
    // ------------------TIMEFORMET------------------------------------
    let timeFormet =(time:number):string=>{
        let minutes = Math.floor(time/60)
        let seconds = time % 60;
       return `${String(minutes).padStart(2,"0")}:${ String(seconds).padStart(2,"0")}`
    }
    // -----------------------SET BUTTON-----------------------------------------
    let setBtn:any = ()=>{
        if(typeof duration == "number" && duration >0)
            settimeLeft(duration)
    }
    // --------------------START BUTTON--------------------------
    let startBtn = ()=>{
    
        setisActive(true)
    }

        useEffect(()=>{
            console.log("not work")
        if(isActive== true){
          timer.current =  setInterval(()=>{
            if(timeLeft > 0){
                settimeLeft(timeLeft = timeLeft -1)
            }else{
                clearInterval(timer.current)
            }
          },1000)
        }else{
            clearInterval(timer.current)
        }
        
    },[isActive ])
// -----------------------PAUSEBUTTON----------------------------------
   const pauseBtn = ()=>{
    setisActive(false)
   }
// ------------------------RESETBUTTON------------------------------
   const resetBtn = ()=>{
    setisActive(false)
    settimeLeft(0)
    setduration("")
   }
        







    return(<div>

        <div className="flex flex-col gap-5 justify-center align-center w-[400px]
         bg-slate-200 h-[300px] rounded-2xl ">
            <h2 className="text-3xl font-bold ml-[70px]">Countdown-Timer</h2>
            <div className="ml-[70px]" >
                <input onChange={(e)=>{setduration(Number(e.target.value))}} value={duration} type="number" placeholder="Enter duration in second"></input>
                <button onClick={()=>{setBtn()}} className=   "w-[60px] h-[35px] text-white bg-black text- hover:bg-blue-800 rounded-xl m-5">Set</button>
            </div>
            <div className=" flex  justify-center  mb-[20px] font-bold text-4xl">{timeFormet(timeLeft)}</div>
            <div className="mb-3 gap-[20px]">
            <button onClick={()=>{startBtn()}} className="ml-[50px] w-[60px] h-[40px] hover:bg-blue-800
                        bg-black text-white rounded-xl">Start</button>
            <button onClick={()=>{pauseBtn()}} className="ml-[50px] w-[60px] h-[40px] bg-black text-white hover:bg-blue-800 rounded-xl">Pause</button>
            <button onClick={()=>{resetBtn()}} className="ml-[50px] w-[60px] h-[40px] bg-black text-white hover:bg-blue-800 rounded-xl">Reset</button>
            </div>

        </div>
    </div>

    )
}
