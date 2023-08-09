import { Trans } from 'react-i18next';
import { PageSection } from '../../components/common';
import ufabc from '../../images/ufabc.png';

const Graduation = () => {
    return (
        <PageSection sectionId="graduation">
            <img
                className="w-2/4 h-2/4 float-left object-contain animate-spinY"
                src={ufabc}
                alt="image_ufabc"
            />
            <Trans i18nKey="graduationDesc" />
        </PageSection>
    );
};

export default Graduation;
