import {createContext, useState, ReactNode} from 'react'

interface ChallangerContextData {
    level:number;
    currentExperience: number;
    challangesCompleted: number;
    levelUp: () => void;
    startNewChallange: () => void;

}

interface ChallangerProviderProps {
    children : ReactNode;
}

export const ChallangesContext = createContext({} as ChallangerContextData);

export const ChallangeProvider = ({children}:ChallangerProviderProps) => {
    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challangesCompleted, setChallangesCompleted] = useState(0);

    const levelUp = () => {
        setLevel(level+1);
    }

    const startNewChallange = () => {
        console.log("New Challange"); 
    }

    return (
        <ChallangesContext.Provider 
        value={{
        level,
        levelUp,
        currentExperience,
        challangesCompleted,
        startNewChallange
        }}>
            {children}
        </ChallangesContext.Provider>
    );

}