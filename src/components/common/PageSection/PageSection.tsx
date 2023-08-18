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
                className="w-full max-h-[calc(100%-215px)] rounded-xl overflow-y-auto bg-white 
                bg-clip-border text-gray-700 break-all text-start shadow-md p-4 animate-fade"
            >
                {children}
            </div>
        </section>
    );
};

export default PageSection;
