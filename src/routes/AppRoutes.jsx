import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';

import ProtectedRoute from '../components/ProtectedRoute';
// import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route
            path="/"
            element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            }
             />

    </Routes>

}
export default AppRoutes;