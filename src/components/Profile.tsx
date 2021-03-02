import { useContext } from 'react';
import { ChallangesContext } from '../contexts/ChallangesContext';
import styles from '../styles/components/Profile.module.css'
import { ToogleDarkMode } from './ToogleDarkMode';

export const Profile = () => {
    const { level } = useContext(ChallangesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/73406162?v=4" alt="Ygor Ferreira" />
            <div>
                <strong>Ygor Ferreira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
            Level {level}</p>
            </div>
            <ToogleDarkMode/>
            <img className={styles.darkModeButton} src="/icons/moon.png"/>
        </div>
    );
}