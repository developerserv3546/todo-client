import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {useAlert} from 'react-alert';

function App() {

    const alert = useAlert();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks();
    }, [])

    const getAllTasks = () => {
        axios({
            method: 'GET',
            url: 'todo',
        }).then(res => {
            setTasks(res.data)
        }).catch(error => alert.show(error.toString(), {type: 'error'}));
    };

    const updateTask = (id, name, description) => {
        axios({
            method: 'PATCH',
            url: `todo/${id}`,
            data: {
                name,
                description
            }
        }).then(res => {
            getAllTasks();
            alert.show("Success: " + res.data, {type: 'success'});
        }).catch(error => alert.show(error.toString(), {type: 'error'}));
    };

    const updateTaskStatus = (id, done) => {
        axios({
            method: 'PUT',
            url: `todo/${id}`,
            data: {
                done
            }
        }).then(res => {
            getAllTasks();
            alert.show("Success: " + res.data, {type: 'success'});
        }).catch(error => alert.show(error.toString(), {type: 'error'}));
    };

    const createTask = (name, description) => {
        axios({
            method: 'POST',
            url: `todo`,
            data: {
                name,
                description
            }
        }).then(res => {
            getAllTasks();
            alert.show("Success: " + res.data, {type: 'success'});
        }).catch(error => alert.show(error.toString(), {type: 'error'}));
    };

    const deleteTask = id => {
        axios({
            method: 'DELETE',
            url: `todo/${id}`
        }).then(res => {
            getAllTasks();
            alert.show("Success: " + res.data, {type: 'success'});
        }).catch(error => alert.show(error.toString(), {type: 'error'}));
    };

    return (
        <div className="mt-4">
            <div>
                <h2 className="mx-2">Create New Task</h2>
                <TodoForm createTask={createTask}/>
            </div>
            <h2 className="m-2">Tasks</h2>
            <TodoList tasks={tasks}
                      updateTask={updateTask}
                      updateTaskStatus={updateTaskStatus}
                      deleteTask={deleteTask}/>
        </div>
    );
}

export default App;
