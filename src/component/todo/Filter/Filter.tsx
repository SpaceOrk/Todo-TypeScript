import styles from '../ToDo.module.scss';

interface FilterProps {
    setDone: (filter: string) => void;
    done: string;
}

export default function Filter({ setDone }: FilterProps) {
    return (
        <div className={styles.filter}>
            <button onClick={() => setDone('All')}>All</button>
            <button onClick={() => setDone('Active')}>Active</button>
            <button onClick={() => setDone('Completed')}>Completed</button>
        </div>
    );
}
