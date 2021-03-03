import { useContext } from 'react'
import { ChallangesContext } from '../../contexts/ChallangesContext'
import { CountdownContext } from '../../contexts/CountdownContext';
import { ChallangeBoxStyles } from './ChallangeBoxStyles';

export const ChallangeBox = () => {

    const {activeChallange, resetChallange, completeChallange} = useContext(ChallangesContext);
    const {resetCountdown} = useContext(CountdownContext);
    
    const handleChallangeSucceeded = () => {
        completeChallange();
        resetCountdown();
    };

    const handleChallangeFailed = () => {
        resetChallange();
        resetCountdown();
    };


    return (
    <ChallangeBoxStyles>
    <div className={"challangeBoxContainer"}>
        {activeChallange ? 
        (<div className={"challangeActive"}>
            <header>Ganhe {activeChallange.amount} de EXP</header>

            <main>
                <img src={`icons/${activeChallange.type}.svg`} alt="body"/>
                <strong>Novo Desafio</strong>
                <p>{activeChallange.description}</p>
            </main>

            <footer>
                <button 
                onClick={handleChallangeFailed}
                type="button"
                className="challangeFailedButton"
                >Falhei
                </button>
                <button 
                type="button"
                className="challangeSucceededButton"
                onClick={handleChallangeSucceeded}
                >Completei
                </button>
            </footer>
        </div>) :
        (<div className="challangeNotActive">
            <strong>Finalize um ciclo para receber um desafio.</strong>
            <p>
                <img src="icons/level-up.svg" alt="level-up"/>
                Avance de level completando os desafios.
            </p>
        </div>)}
    </div>
    </ChallangeBoxStyles>
)
}
