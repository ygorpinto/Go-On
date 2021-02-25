import {createContext, useState, ReactNode, useEffect} from 'react'
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
    completeChallange: () => void;
}

interface ChallangerProviderProps {
    children : ReactNode;
}

export const ChallangesContext = createContext({} as ChallangerContextData);

export const ChallangeProvider = ({children}:ChallangerProviderProps) => {

    useEffect(()=>{
        Notification.requestPermission();
    },[]);

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

        new Audio('/notification.mp3').play();

        if (Notification.permission === "granted"){
            new Notification('Novo Desafio !!!', {
                body: `Valendo ${challange.amount} XP !`
            })
        }
    }

    const resetChallange = () => {
        setActiveChallange(null)
    }

    const completeChallange = () => {
        if (!activeChallange){
            return;
        }

        const {amount} = activeChallange
    
        let finalExperience = currentExperience + amount
    
        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallange(null);
        setChallangesCompleted(challangesCompleted + 1)
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
        resetChallange,
        completeChallange
        }}>
            {children}
        </ChallangesContext.Provider>
    );

}