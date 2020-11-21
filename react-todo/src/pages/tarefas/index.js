import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';
import { FiCircle, FiCheckCircle, FiDelete } from 'react-icons/fi';
import { Header } from '../../components/header';
export const Tarefas = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [error, setError] = useState('');

    const loadTask = useCallback(
        async () => {
            const response = await api.get('tarefas');
            setTasks(response.data);
        }, []
    )

    useEffect(() => {
        loadTask()
    }, [loadTask]);

    const handleAddTask = useCallback(
        async (e) => {
            e.preventDefault();

            if (newTask === '') {
                setError('Digite a Tarefa')
                return;
            }

            setError('');

            const params = {
                descricao: newTask,
                concluido: false
            };

            try {
                await api.post('tarefas', params)

                loadTask();
                setNewTask('');
            } catch (error) {
                console.log(error)
            }
        }, [newTask, loadTask]
    )
    const handleTask = useCallback(
        async (task) => {
            const params = {
                ...task,
                concluido: !task.concluido
            }
            await api.put(`tarefas/${task.id}`, params);
            loadTask();
        }, [loadTask]
    )

    const removeTask = useCallback(
        async (task) => {
            await api.delete(`tarefas/${task.id}`)
            loadTask();
        }, [loadTask]
    )
    return (
        <Container>
            <Header />
            <h1>Criar Tarefas</h1>
            <form onSubmit={handleAddTask}>
                <input type="text"
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    placeholder="Escreva a nova Tarefa"
                />
                <button>Criar</button>
            </form>

            { tasks.map(t => (
                <div key={t.id} className="informacoes">
                    <strong>{t.descricao}</strong>
                    <span>
                        {
                            t.concluido ?
                                <>
                                    <FiDelete size={22} onClick={() => removeTask(t)} style={{ marginRight: 10 }} />
                                    <FiCheckCircle size={22} onClick={() => handleTask(t)} />
                                </>
                                :
                                <FiCircle size={22} onClick={() => handleTask(t)} />
                        }
                    </span>
                </div>
            ))}
        </Container>
    )
}