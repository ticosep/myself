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
            className="relative w-full rounded-xl overflow-y-auto bg-white 
            bg-clip-border text-gray-700 shadow-md my-4 p-4"
        >
            {children}
        </section>
    );
};

export default PageSection;
