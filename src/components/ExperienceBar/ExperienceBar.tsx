import { useContext } from 'react';
import { ChallangesContext } from '../../contexts/ChallangesContext';
import { ExperienceBarStyles } from './ExperienceBarStyles';


export const ExperienceBar = () => {

  const {currentExperience, experienceToNextLevel} = useContext(ChallangesContext);
  const percentToNextLevel = Math.round(currentExperience*100)/experienceToNextLevel;

  return (
    <ExperienceBarStyles>
    <header className="experienceBar">
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={"currentExperience"} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
    </ExperienceBarStyles>
  );
}

