import { useTranslation } from 'react-i18next';
import myself from '../../images/pixel_cut.png';
import coin from '../../images/coin.png';

const Coin = () => {
    const { t } = useTranslation();
    return (
        <div className="relative w-full h-full  flex items-center justify-center">
            <div className="absolute flex items-center justify-center flex-col z-10">
                <img className="w-9/12 h-9/12" src={myself} alt="image" />
            </div>
            <img
                className="absolute w-4/12 h-4/12"
                src={coin}
                alt="coinImage"
            />
        </div>
    );
};

export default Coin;
