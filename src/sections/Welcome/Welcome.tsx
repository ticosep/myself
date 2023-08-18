import { Trans } from 'react-i18next';
import { PageSection } from '../../components/common';
import myself from '../../images/pixel_cut.png';

const Welcome = () => {
    return (
        <PageSection sectionId="welcome">
            <img
                className="w-[20%] h-[20%] float-left rounded-full border mr-4"
                src={myself}
                alt="image"
            />
            <Trans i18nKey="presentation" />
        </PageSection>
    );
};

export default Welcome;
