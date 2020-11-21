import React, { useState } from 'react';
import Logo from '../../assets/home-hero.png';
import { Container } from './styles';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export const Login = () => {
    const history = useHistory();
    const { signIn } = useAuth();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        if (!email) return;
        if (!password) return;

        setLoading(true);

        console.log("submit", email, password);

        try {
            await signIn({
                email: email,
                password: password,
            });

            history.push('/dashboard');

        } catch (error) {
            console.log(error);
            console.log("Usuário ou senha não confere.");

        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <div className="login">
                <img src={Logo} alt="" />
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <input type="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="senha">
                        <input type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="button">
                        <button>{loading ? 'Carregando...' : 'Acessar'}</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}