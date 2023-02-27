import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Register() {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [repeatPass, setRepeatPass] = useState(``);

    const { login } = useAuth();
    const navigate = useNavigate()

    const handleRegiser = (e) => {
        e.preventDefault();

        if (password !== repeatPass) {
            throw new Error(`Passwords does not match!`);
        }

        authService.register(email, password)
            .then(data => {

                login(data);
                navigate(`/`);
            })
    }

    return (
        <Form onSubmit={handleRegiser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" name='repeatPass' placeholder="Repeat password" onChange={(e) => setRepeatPass(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}

export default Register;