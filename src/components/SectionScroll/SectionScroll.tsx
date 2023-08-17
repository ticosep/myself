import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ROUTES_MAP: Record<string, string> = {
    0: '/',
    1: '/graduation',
    2: '/work',
};

const SectionScroll = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const route = ROUTES_MAP[step];

        navigate(route);
    }, [step]);

    return (
        <input
            type="range"
            className="absolute w-[90vh] bottom-[45vh] slider-thumb h-2 bg-[#e2e8f0] 
             rotate-[270deg] rounded-md appearance-none"
            id="sectionStep"
            name="sectionStep"
            min="0"
            max="2"
            value={step}
            step="1"
            onChange={(e) => {
                setStep(+e.target.value);
            }}
        />
    );
};

export default SectionScroll;
