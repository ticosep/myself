import { createContext } from 'react';

const BallonContext = createContext({
    currentStage: 0,
    setCurrentStage: (value: number): any => undefined,
});

export default BallonContext;
