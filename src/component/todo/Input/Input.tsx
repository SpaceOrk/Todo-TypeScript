import styles from '../ToDo.module.scss';

interface InputProps {
    addTodo: () => void;
    tasks: string;
    setTasks: (tasks: string) => void;
}

export default function Input({ addTodo, tasks, setTasks }: InputProps) {
    const handleInputChange = (event:any) => {
        setTasks(event.target.value);
    };

    return (
        <div className={styles.inputContainer}>
            <input
                type='text'
                placeholder='Enter task name...'
                value={tasks}
                onChange={handleInputChange}
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
}
