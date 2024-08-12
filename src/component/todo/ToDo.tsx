import styles from './ToDo.module.scss';
import Input from "./Input/Input";
import TaskList from "./TaskList/TaskList";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Filter from "./Filter/Filter.tsx";

interface Todo {
    id: string;
    title: string;
    status: boolean;
}

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]); // список Todo
    const [tasks, setTasks] = useState<string>(''); // Новое ToDo
    const [done, setDone] = useState<string>(''); // Фильтр (All, Active, Completed)

    const addTodo = () => {
        const taskTodo: Todo = {
            id: uuidv4(),
            title: tasks,
            status: false
        };
        let newTask = [taskTodo, ...todos];
        if (tasks.trim() !== '') {
            setTodos(newTask);
            setTasks('');
        }
    };

    const deleteTodo = (id: string) => {
        let del = todos.filter((todo) => todo.id !== id);
        setTodos(del);
    };

    const toggleTask = (id: string) => {
        let toggle = todos.map((todo) => todo.id === id ? { ...todo, status: !todo.status } : { ...todo });
        setTodos(toggle);
    };

    let copiTodos = todos;
    switch (done) {
        case 'All':
            copiTodos = todos;
            break;
        case 'Active':
            copiTodos = todos.filter(value => value.status === false);
            break;
        case 'Completed':
            copiTodos = todos.filter(value => value.status === true);
            break;
        default:
            break;
    }

    const activeTodosCount = todos.filter(todo => !todo.status).length;
    const completedTodosCount = todos.filter(todo => todo.status).length;

    return (
        <div className={styles.todoList}>
            <h1>Todos</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p className={styles.p}>All items: {todos.length}</p>
                <p className={styles.p}>Active items: {activeTodosCount}</p>
                <p className={styles.p}>Completed items: {completedTodosCount}</p>
            </div>
            <div>
                <Input addTodo={addTodo} tasks={tasks} setTasks={setTasks} />
                <TaskList todos={todos} deleteTodo={deleteTodo} toggleTask={toggleTask} copiTodos={copiTodos} />
            </div>
            <Filter setDone={setDone} todos={todos} done={done} />
        </div>
    );
}
