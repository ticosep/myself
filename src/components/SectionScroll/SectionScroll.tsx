import { useState } from 'react';
import ballon from '../../images/ballon.png';

const SectionScroll = () => {
    const [step, setStep] = useState(0);
    return (
        <div className="absolute bottom-[-64px] left-0 fixed h-full">
            <input
                type="range"
                className="h-[calc(100%-64px)] fixed"
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
