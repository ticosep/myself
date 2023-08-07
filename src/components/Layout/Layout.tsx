import { ReactNode } from 'react';
import Header from '../Header';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            <div className="container h-[calc(100%-64px)] mt-[72px]">
                {children}
            </div>
        </div>
    );
};

export default Layout;
