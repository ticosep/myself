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
            className="w-full rounded overflow-hidden shadow-lg bg-white p-2 my-2"
        >
            {children}
        </section>
    );
};

export default PageSection;
