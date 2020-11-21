import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import img from '../../assets/todo-logo.png'
import { Container } from './styles'
export const Header = () => {
    const history = useHistory();
    const { signOut } = useAuth();

    const sair = () => {
        signOut();
        history.push('/');
    }
    return (
        <Container>
            <img src={img} alt="Logo da TODO" />
            <ul>
                <li>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/tarefas">
                        Tarefas
                    </Link>
                </li>
                <li>
                    <span onClick={() => sair()}>
                        Sair
                    </span>
                </li>
            </ul>
        </Container>
    )
}