import { useState } from 'react';

const SectionScroll = () => {
    const [step, setStep] = useState(0);

    return (
        <div className="absolute h-full w-[20vw]">
            <input
                type="range"
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
        </div>
    );
};

export default SectionScroll;
