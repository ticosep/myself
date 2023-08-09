import { useState } from 'react';
import ballon from '../../images/ballon.png';
import styled from 'styled-components';

const Slider = styled.input`
    &::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        width: 15px !important;
        height: 15px !important;
        border: 1px solid black !important;
    }
`;

const SectionScroll = () => {
    const [step, setStep] = useState(0);
    return (
        <div className="absolute bottom-[-64px] left-0 fixed h-full">
            <Slider
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
