import {createContext, useState, ReactNode} from 'react'
import challanges from '../../challenges.json'

interface Challange {
    type:string,
    description:string,
    amount:number
}

interface ChallangerContextData {
    level:number;
    experienceToNextLevel:number;
    currentExperience: number;
    challangesCompleted: number;
    activeChallange: Challange;
    levelUp: () => void;
    startNewChallange: () => void;
    resetChallange: () => void;
}

interface ChallangerProviderProps {
    children : ReactNode;
}

export const ChallangesContext = createContext({} as ChallangerContextData);

export const ChallangeProvider = ({children}:ChallangerProviderProps) => {
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangesCompleted] = useState(0);

    const [activeChallange, setActiveChallange] = useState(null);

    const experienceToNextLevel = Math.pow((level+1) * 3,2)

    const levelUp = () => {
        setLevel(level+1);
    }

    const startNewChallange = () => {
        const randomChallangeIndex = Math.floor(Math.random() * challanges.length);
        const challange = challanges[randomChallangeIndex];

        setActiveChallange(challange);
    }

    const resetChallange = () => {
        setActiveChallange(null)
    }

    return (
        <ChallangesContext.Provider 
        value={{
        level,
        levelUp,
        experienceToNextLevel,
        currentExperience,
        challangesCompleted,
        startNewChallange,
        activeChallange,
        resetChallange
        }}>
            {children}
        </ChallangesContext.Provider>
    );

}