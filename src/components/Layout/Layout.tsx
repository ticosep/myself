import { ReactNode } from 'react';
import Header from '../Header';
import SectionScroll from '../SectionScroll';
import Sky from '../Sky';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Sky />
            <Header />
            <div className="flex container h-[calc(100%-72px)] mt-[72px]">
                <div className="flex items-center justify-center w-[20vw]">
                    <SectionScroll />
                </div>
                <div className="w-[80vw]">{children}</div>
            </div>
        </>
    );
};

export default Layout;
