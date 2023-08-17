import { ReactNode } from 'react';

const PageSection = ({
    children,
    sectionId,
}: {
    children: ReactNode;
    sectionId: string;
}) => {
    return (
        <section
            id={sectionId}
            className="flex h-[100vh] pb-[72px] items-center"
        >
            <div
                className="w-full max-h-[calc(100%-20px)] rounded-xl overflow-y-auto bg-white 
                bg-clip-border text-gray-700 shadow-md my-4 p-4 animate-fade"
            >
                {children}
            </div>
        </section>
    );
};

export default PageSection;
