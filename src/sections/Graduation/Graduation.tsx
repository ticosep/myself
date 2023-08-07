import { Trans, useTranslation } from 'react-i18next';
import { PageSection } from '../../components/common';
import ufabc from '../../images/ufabc.png';

const Graduation = () => {
    const { t } = useTranslation();

    return (
        <PageSection sectionId="graduation">
            <div className="flex items-center">
                <img
                    className="w-64 h-64 object-contain"
                    src={ufabc}
                    alt="image_ufabc"
                />
                <div className="flex-initial text-gray-700 bg-gray-400 px-4 py-2 m-2">
                    <h1 className="font-bold text-xl">
                        {t('graduationTitle')}
                    </h1>
                    <Trans i18nKey="graduationDesc" />
                </div>
            </div>
        </PageSection>
    );
};

export default Graduation;
