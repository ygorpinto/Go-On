import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/CompletedChallanges.module.css'

export const CompletedChallanges = () => {

    const {challangesCompleted} = useContext(ChallangesContext);

    return (
        <div className={styles.completedChallangesContainer}>
            <span> Desafios Completos</span>
            <span>{challangesCompleted}</span>
        </div>
    );
}

