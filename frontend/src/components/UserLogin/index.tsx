import axios from 'axios';
import {
    useState,
    useEffect,
    useRef,
    FormEvent
} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Location } from 'history';
import { useMutation } from 'react-query';

import './styles.css';

import useAuth from '../../hooks/useAtuth';
import { BASE_URL, queryClient } from '../../service/queryClient';

const LOGIN_URL = 'auth/login'

interface IUser {
    email: string,
    password: string
}

interface IJWTResponse {
    access_token: string
}

/* interface LocationState extends Location {
    state: {
        from: {
            pathname: string;
        }
    }
} */

type ExtendedLocation = Location & {
    state: {
        from: {
            pathname: string;
        }
    }
}

const userLoginRequest = async (userCerdentials: IUser) => {
    const { data: response } = await axios.post(`${BASE_URL}/${LOGIN_URL}`,
        JSON.stringify(userCerdentials),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: false
        }
    );
    console.log(`${BASE_URL}/${LOGIN_URL}`);
    console.log(response);
    return response;
};

export function UserLogin() {
    const { setAuth, auth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = (location  as ExtendedLocation).state?.from?.pathname || '/';

    const userRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current?.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, password]);

    const sendUserCredentials = useMutation(userLoginRequest, {
        onSuccess: (data: IJWTResponse) => {
            setAuth?.(data.access_token);
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create');
        }
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        sendUserCredentials.mutateAsync({ email: user, password: password });

        setUser('');
        setPassword('');
        navigate(from, { replace: true });
    }

    return (
        <section>
            <p ref={errRef} className={errMsg ? "eerMsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        // autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                </span>

                <span>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                    />
                    <button>Sign In</button>
                </span>
            </form>
        </section>
    );
}
