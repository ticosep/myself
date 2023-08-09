import { ReactNode } from 'react';
import Header from '../Header';
import SectionScroll from '../SectionScroll';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <SectionScroll />
            <div className="container w-4/5 ml-[20%] h-[calc(100%-64px)] mt-[72px]">
                {children}
            </div>
        </>
    );
};

export default Layout;
