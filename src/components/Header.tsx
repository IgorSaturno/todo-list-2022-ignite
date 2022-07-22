import styles from './Header.module.css';
import todolistLogo from '../assets/Logo.svg';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
    const [title, setTitle] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        onAddTask(title);
        setTitle("");
    }

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }

    return (
        <header className={styles.header}>
            <img src={todolistLogo} alt="Logotipo to-do-list" />

            <form className={styles.newTask} onSubmit={handleSubmit}>
                <input placeholder="Adicione uma nova tarefa" onChange={onChangeTitle} value={title}/>
                <button>Criar<PlusCircle size={24} /></button>
            </form>
        </header>
    );
}