import { ReactNode } from 'react';

const PageCard = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full rounded overflow-hidden shadow-lg bg-white p-2">
            {children}
        </div>
    );
};

export default PageCard;
