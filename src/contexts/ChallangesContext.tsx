import {createContext, useState, ReactNode, useEffect} from 'react'
import challanges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal/LevelUpModal';

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
    closeLevelUpModal: () => void;
}

interface ChallangerProviderProps {
    children : ReactNode;
    level:number;
    currentExp:number;
    challangesCompleted:number;
}

export const ChallangesContext = createContext({} as ChallangerContextData);

export const ChallangeProvider = ( { children, ...rest } : ChallangerProviderProps ) => {
 
    useEffect(()=>{
        Notification.requestPermission();
    },[]);

    const [level,setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExp ?? 0);
    const [challangesCompleted, setChallangesCompleted] = useState(rest.challangesCompleted ?? 0);

    const [activeChallange, setActiveChallange] = useState(null);
    const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level+1) * 3,2)

    const levelUp = () => {
        setLevel(level+1);
        setIsLevelModalOpen(true)
    }

    const closeLevelUpModal = () => {
        setIsLevelModalOpen(false)
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
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallange(null);
        setChallangesCompleted(challangesCompleted + 1)
    }


    useEffect(()=>{
        Cookies.set('level',level.toString())
        Cookies.set('currentExp',currentExperience.toString())
        Cookies.set('challangesCompleted',challangesCompleted.toString())
    },[level,currentExperience,challangesCompleted])

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
        completeChallange,
        closeLevelUpModal
        }}>
            {children}
            { isLevelModalOpen && <LevelUpModal/>}
        </ChallangesContext.Provider>
    );

}