import { HashRouter as Router } from 'react-router-dom';
import { Graduation, Welcome } from './sections';

function App() {
    return (
        <Router>
            <Welcome />
            <Graduation />
        </Router>
    );
}

export default App;
