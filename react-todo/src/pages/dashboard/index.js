import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Container } from './styles';
import img from '../../assets/Developer activity-rafiki.png';
import api from '../../services/api';
import { Header } from '../../components/header';
export const Dashboard = () => {
    const [tarefas, setTarefas] = useState([]);

    const qtd_tarefas = useMemo(() => tarefas.length, [tarefas]);

    const qtd_tarefas_concluidas = useMemo(
        () => {
            const filtrar = tarefas.filter(
                t => {
                    return t.concluido === true
                }
            )
            return filtrar.length;
        }, [tarefas]
    )

    const carregarTarefas = useCallback(
        async () => {
            const response = await api.get('tarefas')
            setTarefas(response.data);
        }, []
    )

    useEffect(() => {
        carregarTarefas()
    }, [carregarTarefas])

    return (
        <>
            <Header />
            <Container>
                <img src={img} alt="" />
                <div className="container">
                    <div className="main-tarefas">
                        <div className="tarefas">
                            {qtd_tarefas - qtd_tarefas_concluidas === 0 ?
                                <h2>Parabéns, Você concluio todas as Tarefas!</h2> :
                                <h2>Exitem <b>{qtd_tarefas - qtd_tarefas_concluidas}</b> Tarefas Para serem concluidas!</h2>
                            }
                        </div>

                        <div className="painel-tarefas">
                            <h3>Quantidade de tarefas: <b>{qtd_tarefas}</b> </h3>
                            <h3>Quantidade de concluidas: <b>{qtd_tarefas_concluidas}</b> </h3>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}