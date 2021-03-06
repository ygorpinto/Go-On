import { useContext} from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import { CountdownStyles } from './Countdownstyles';


export const Countdown = () => {

    const {
    
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown

    } = useContext(CountdownContext);
   
    const [minuteLeft,minuteRight] = String(minutes).padStart(2,"0").split('');
    const [secondLeft,secondRight] = String(seconds).padStart(2,"0").split('');

    return (
        <CountdownStyles>
        <div>
        <div className="countdownContainer">
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
            className="countdownButton">
                Ciclo Encerrado
            </button>
        ):(
            <>
             {isActive?(
            <button 
            onClick={resetCountdown}
            type="button" 
            className="countdownButton countdownButtonActive">
                Abandonar o Ciclo
            </button>
        ):
        (
            <button 
            onClick={startCountdown}
            type="button" 
            className="countdownButton">
                Iniciar um ciclo
            </button>
        )}
            </>
        )}
        </div>
        </CountdownStyles>

        
    );
}