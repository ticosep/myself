import { HashRouter as Router } from 'react-router-dom';
import { Graduation, Welcome, Work } from './sections';

function App() {
    return (
        <Router>
            <Welcome />
            <Graduation />
            <Work />
        </Router>
    );
}

export default App;
