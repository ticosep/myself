import { Routes, Route } from 'react-router-dom';
import { Graduation, Welcome, Work } from './sections';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/graduation" element={<Graduation />} />
            <Route path="/work" element={<Work />} />
        </Routes>
    );
}

export default App;
