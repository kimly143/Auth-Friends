import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import useAuthToken from '../hooks/useAuthToken';

export default function Logout() {
    const [token, setToken] = useAuthToken();
    const history = useHistory();

    if (token ===null)
        return null;
    return (
        <div>
            <Button color="secondary" onClick={()=> {
                setToken(null);
                history.push('/login');
            }}>Logout</Button>

        </div>
    )
}