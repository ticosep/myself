import { Trans } from 'react-i18next';
import { PageSection } from '../../components/common';
import Cogs from './components/Cogs';

const Work = () => {
    return (
        <PageSection sectionId="work">
            <Cogs />
            <Trans i18nKey="workDesc" />
        </PageSection>
    );
};

export default Work;
