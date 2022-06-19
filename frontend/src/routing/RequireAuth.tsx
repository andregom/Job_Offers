import { useLocation, Navigate, Outlet, OutletProps } from 'react-router-dom';
import UseAuth from '../hooks/useAtuth';

const RequireAuth = () => {
    const { auth } = UseAuth();
    const location = useLocation();

    return (
        auth
            ? <Outlet /> 
            : <Navigate to="/user-login" state={{from: location }} replace />
    )
}

export default RequireAuth;