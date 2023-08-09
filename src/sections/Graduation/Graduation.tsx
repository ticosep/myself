import { Trans } from 'react-i18next';
import { PageSection } from '../../components/common';
import ufabc from '../../images/ufabc.png';

const Graduation = () => {
    return (
        <PageSection sectionId="graduation">
            <img
                className="w-1/5 h-1/5 float-left mr-4 object-contain animate-spinY"
                src={ufabc}
                alt="image_ufabc"
            />
            <Trans i18nKey="graduationDesc" />
        </PageSection>
    );
};

export default Graduation;
