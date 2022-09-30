import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
type PropsType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<Array<PropsType>>([])
    const onClickHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    const cleanPost = () => setTodos([])

    useEffect(() => {
        //onClickHandler()
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    },[])
    return (
        <div className="App">
            <button onClick={cleanPost}>Clean posts</button>
            <ul>
                {
                    todos.map((todo, idx) => <li key={idx}>
                        <span>{todo.id} - </span>{todo.title.slice(0, 15)} completed : {todo.completed}
                    </li>)
                }
            </ul>
        </div>
    );
}

export default App;
