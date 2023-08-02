import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation();

    return (
        <div>
            <label>{t('hello')}</label>
        </div>
    );
}

export default App;
