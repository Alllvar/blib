import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';

function App() {
    const isLoggedIn = false

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={isLoggedIn ? <Navigate to="/dashboard" /> : <Landing />}
                />
                {/* інші роути */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
