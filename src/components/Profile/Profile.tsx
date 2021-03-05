import { useContext } from 'react';
import { ChallangesContext } from '../../contexts/ChallangesContext';
import { ProfileStyles } from './ProfileStyles';

interface ProfileProps {
    userName: string;
    userImg: string;
}

export const Profile = ({ userName, userImg } : ProfileProps) => {
    const { level } = useContext(ChallangesContext);
    console.log(userName);
    
    return (
        <ProfileStyles>
        <div className="profileContainer">
            <img src={userImg} alt="GithubUsername" />
            <div>
                <strong>{userName}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
            Level {level}</p>
            </div>
        </div>
        </ProfileStyles>
    );
}