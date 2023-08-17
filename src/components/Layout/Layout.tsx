import { ReactNode, useState } from 'react';
import Header from '../Header';
import SectionScroll from '../SectionScroll';
import Sky from '../Sky';
import BallonContext from '../../setup/ballonContext';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const [currentStage, setCurrentStage] = useState(0);
    const defaultContextValue = { currentStage, setCurrentStage };

    return (
        <BallonContext.Provider value={defaultContextValue}>
            <Sky />
            <Header />
            <div className="flex container h-[calc(100%-72px)] mt-[72px]">
                <div className="flex items-center justify-center w-[20vw]">
                    <SectionScroll />
                </div>
                <div className="w-[80vw]">{children}</div>
            </div>
        </BallonContext.Provider>
    );
};

export default Layout;
