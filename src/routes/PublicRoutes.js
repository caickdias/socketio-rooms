import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from '../App';
import Room from '../components/pages/Room';

const PublicRoutes = () => {
    
    return(
        <Router>
            <Routes>
                <Route element={<App />} path='/' />
                <Route element={<Room />} path='/room' />
            </Routes>
        </Router>
    );
}

export default PublicRoutes;