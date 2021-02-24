import { useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css'

let countdowntimeout: NodeJS.Timeout;

export const Countdown = () => {
   
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
   
    const minutes = Math.floor(time/60);
    const seconds = time%60;
   
    const [minuteLeft,minuteRight] = String(minutes).padStart(2,"0").split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,"0").split('');

    const startCountdown = () => {
        setIsActive(true);
    }

    const resetCountdown = () => {
        clearTimeout(countdowntimeout);
        setIsActive(false);
        setTime(0.05 * 60);
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
        }
    },[isActive,time])

    return (
        <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>
        {hasFinished ? (
            <button 
            disabled
            className={styles.countdownButton}>
                Ciclo Encerrado
            </button>
        ):(
            <>
             {isActive?(
            <button 
            onClick={resetCountdown}
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}>
                Abandonar o Ciclo
            </button>
        ):
        (
            <button 
            onClick={startCountdown}
            type="button" 
            className={styles.countdownButton}>
                Iniciar um ciclo
            </button>
        )}
            </>
        )}
        </div>
        

        
    );
}