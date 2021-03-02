import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { ChallangesContext } from './ChallangesContext';

interface CountdownContextData {
    minutes:number
    seconds:number
    hasFinished:boolean
    isActive:boolean
    startCountdown: () => void;
    resetCountdown: () => void;
}

interface CountdownProviderProps {
    children : ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

let countdowntimeout: NodeJS.Timeout;

export const CountdownProvider = ({children}:CountdownProviderProps) => {

    const {startNewChallange} = useContext(ChallangesContext)
    
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
   
    const minutes = Math.floor(time/60);
    const seconds = time%60;

    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () => {
        clearTimeout(countdowntimeout);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }

    useEffect(()=>{
        if (isActive && time > 0){
        countdowntimeout = setTimeout(()=>{
                setTime(time-1)
            },1000);
        }
        else if(isActive && time === 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallange();   
        }
    },[isActive,time])


    return (
        <CountdownContext.Provider 
        value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )
}
