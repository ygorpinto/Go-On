import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/ChallangeBox.module.css'

export const ChallangeBox = () => {

const {activeChallange} = useContext(ChallangesContext);
const {resetChallange} = useContext(ChallangesContext);
const {completeChallange} = useContext(ChallangesContext);
    return (
    <div className={styles.challangeBoxContainer}>
        {activeChallange ? 
        (<div className={styles.challangeActive}>
            <header>Ganhe {activeChallange.amount} de EXP</header>

            <main>
                <img src={`icons/${activeChallange.type}.svg`} alt="body"/>
                <strong>Novo Desafio</strong>
                <p>{activeChallange.description}</p>
            </main>

            <footer>
                <button 
                onClick={resetChallange}
                type="button"
                className={styles.challangeFailedButton}
                >Falhei
                </button>
                <button 
                type="button"
                className={styles.challangeSucceededButton}
                onClick={completeChallange}
                >Completei
                </button>
            </footer>
        </div>) :
        (<div className={styles.challangeNotActive}>
            <strong>Finalize um ciclo para receber um desafio.</strong>
            <p>
                <img src="icons/level-up.svg" alt="level-up"/>
                Avance de level completando os desafios.
            </p>
        </div>)}
    </div>
)
}