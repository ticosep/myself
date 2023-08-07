import { useTranslation } from 'react-i18next';
import { PageCard } from '../../components/common';
import myself from '../../images/pixel_cut.png';

const Welcome = () => {
    const { t } = useTranslation();

    return (
        <PageCard>
            <div className="flex">
                <img
                    className="w-32 h-32 rounded-full border"
                    src={myself}
                    alt="image"
                />
                <div className="flex-initial text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h1 className="font-bold text-xl">{t('whoAmI')}</h1>
                </div>
            </div>
        </PageCard>
    );
};

export default Welcome;
