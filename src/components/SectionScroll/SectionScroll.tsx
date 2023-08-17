import { useState } from 'react';

const SectionScroll = () => {
    const [step, setStep] = useState(0);

    return (
        <input
            type="range"
            className="slider-thumb w-[100vh] h-2 bg-[#e2e8f0] 
             rotate-[270deg] rounded-md appearance-none"
            id="sectionStep"
            name="sectionStep"
            min="0"
            max="4"
            value={step}
            step="1"
            onChange={(e) => {
                setStep(+e.target.value);
            }}
        />
    );
};

export default SectionScroll;
