import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRoutes } from './hooks/useRoutes';

function App() {
    const routes = useRoutes();
    return (
        <Router>
            <Routes>
                {routes.map(({ element, path }, index) => {
                    return (
                        <Route
                            key={`route_${index}`}
                            element={element}
                            path={path}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
