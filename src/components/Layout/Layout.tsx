import { ReactNode } from 'react';
import Header from '../Header';
import clouds from '../../images/clouds.jpg';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div
            className="w-screen h-screen bg-contain"
            style={{
                backgroundImage: `url(${clouds})`,
            }}
        >
            <Header />
            <div className="container p-2 h-[calc(100%-64px)]">{children}</div>
        </div>
    );
};

export default Layout;
