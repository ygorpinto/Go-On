import { useContext } from 'react'
import { ChallangesContext } from '../contexts/ChallangesContext'
import styles from '../styles/components/ChallangeBox.module.css'

export const ChallangeBox = () => {
const hasActiveChallange = true

    return (
    <div className={styles.challangeBoxContainer}>
        {hasActiveChallange ? 
        (<div className={styles.challangeActive}>
            <header>Ganhe 400XP</header>

            <main>
                <img src="icons/body.svg" alt="body"/>
                <strong>Novo Desafio</strong>
                <p>Levante e faça uma caminhada de 3 min.</p>
            </main>

            <footer>
                <button 
                type="button"
                className={styles.challangeFailedButton}
                >Falhei
                </button>
                <button 
                type="button"
                className={styles.challangeSucceededButton}
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