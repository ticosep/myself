import { useTranslation } from 'react-i18next';
import { PageCard } from '../../components/common';

const Welcome = () => {
    const { t } = useTranslation();

    return <PageCard>{t('welcome.whoAmI')}</PageCard>;
};

export default Welcome;
