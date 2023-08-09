import { Trans, useTranslation } from 'react-i18next';
import { PageSection } from '../../components/common';
import myself from '../../images/pixel_cut.png';

const Welcome = () => {
    const { t } = useTranslation();

    return (
        <PageSection sectionId="welcome">
            <div className="flex">
                <img
                    className="w-32 h-32 rounded-full border"
                    src={myself}
                    alt="image"
                />
                <div className="flex-initial text-gray-700 bg-gray-400 ml-4">
                    <h1>{t('whoAmI')}</h1>
                    <Trans i18nKey="presentation" />
                </div>
            </div>
        </PageSection>
    );
};

export default Welcome;
