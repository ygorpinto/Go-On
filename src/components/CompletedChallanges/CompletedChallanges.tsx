import { useContext } from 'react';
import { ChallangesContext } from '../../contexts/ChallangesContext';
import { CompleteChallangesStyles } from './CompletedChallangesStyle';

export const CompletedChallanges = () => {

    const {challangesCompleted} = useContext(ChallangesContext);

    return (
        <CompleteChallangesStyles>
        <div className="completedChallangesContainer">
            <span> Desafios Completos</span>
            <span>{challangesCompleted}</span>
        </div>
        </CompleteChallangesStyles>
    );
}



