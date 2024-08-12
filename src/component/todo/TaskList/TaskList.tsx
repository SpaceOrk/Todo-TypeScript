import styles from '../ToDo.module.scss';

interface Todo {
    id: string;
    title: string;
    status: boolean;
}

interface TaskListProps {
    todos: Todo[];
    deleteTodo: (id: string) => void;
    toggleTask: (id: string) => void;
    copiTodos: Todo[];
}

export default function TaskList({ todos, deleteTodo, toggleTask, copiTodos }: TaskListProps) {
    return (
        <ol className={styles.taskList}>
            {copiTodos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type='checkbox'
                        onClick={() => toggleTask(todo.id)}
                        defaultChecked={todo.status}
                        className={styles.checkboxInput}
                    />
                    <span
                        className={styles.text}
                        style={todo.status ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
                    >
                        {todo.title}
                    </span>
                    <button className={styles.deleteButton} onClick={() => deleteTodo(todo.id)}>❌</button>
                </li>
            ))}
        </ol>
    );
}
