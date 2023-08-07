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
                <div className="flex-initial text-gray-700 bg-gray-400 px-4 py-2 m-2">
                    <h1 className="font-bold text-xl">{t('whoAmI')}</h1>
                    <Trans i18nKey="presentation" />
                </div>
            </div>
        </PageSection>
    );
};

export default Welcome;
