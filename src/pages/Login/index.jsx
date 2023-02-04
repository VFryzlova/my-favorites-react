import React from 'react';
import { Form } from './styles';

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input id="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="form-control">
                    <button type="submit">Login</button>
                </div>
            </Form>
        </>
    );
};

export default Login;
