import { useContext, useState, useEffect } from 'react';
import BallonContext from '../../setup/ballonContext';

const ANIMATIONS_UP_MAP: Record<number, string> = {
    0: 'animate-groundUp',
    1: 'animate-middleUp',
    2: 'animate-finalUp',
};

const ANIMATIONS_DOWN_MAP: Record<number, string> = {
    0: 'animate-groundDown',
    1: 'animate-middleDown',
    2: 'animate-finalDown',
};

const Sky = () => {
    const { currentStage } = useContext(BallonContext);
    const [prevStage, setPrevStage] = useState(currentStage);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        if (prevStage < currentStage)
            setAnimation(ANIMATIONS_UP_MAP[currentStage]);
        if (prevStage > currentStage)
            setAnimation(ANIMATIONS_DOWN_MAP[currentStage]);
        setPrevStage(currentStage);
    }, [currentStage]);

    return (
        <div
            className={`absolute bg-skyArt bg-cover
            w-[100vw] h-[100vh] z-[-1] top-0 bg-bottom ${animation}`}
        />
    );
};

export default Sky;
