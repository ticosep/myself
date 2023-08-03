import { useTranslation } from 'react-i18next';
import myself from '../../images/pixel_cut.png';

const WipBouncer = () => {
    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-center flex-col animate-bounce">
            <img src={myself} alt="image" />
            <h1 className="text-4xl font-extrabold mt-2 text-center ">
                {t('wip')}
            </h1>
        </div>
    );
};

export default WipBouncer;
