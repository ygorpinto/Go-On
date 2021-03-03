import { useContext } from 'react'
import { ChallangesContext } from '../../contexts/ChallangesContext'
import { LevelUpModalStyles } from '../LevelUpModal/LevelUpModalStyles'

export const LevelUpModal = () => {

    const {level,closeLevelUpModal} = useContext(ChallangesContext)

    return (
        <LevelUpModalStyles>
        <div className="overlay">
            <div className="container">
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                <button 
                onClick={closeLevelUpModal}
                type="button">
                    <img src="/icons/close.svg" alt="Fechar Modal"/>
                </button>
            </div>
        </div>
        </LevelUpModalStyles>
    )
}