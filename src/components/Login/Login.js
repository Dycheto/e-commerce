import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useNavigate } from 'react-router-dom';
import * as authServices from '../../services/authService';
import { isAuth } from '../../hok/isAuth';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
    const navigate = useNavigate();

    const { login } = useAuth();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        authServices.login(email, password)
            .then((authData) => {

                login(authData);
                console.log(authData);
                navigate(`/`);
            })
            .catch(err => {
                //TODO: show notification
                console.log(err);
            })
    }

    return (
        <Form onSubmit={onLoginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default isAuth(Login)