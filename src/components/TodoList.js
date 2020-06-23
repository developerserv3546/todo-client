import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
    return (
        <>
            {
                props.tasks.map(el => <TodoItem task={el}
                                                updateTask={props.updateTask}
                                                updateTaskStatus={props.updateTaskStatus}
                                                deleteTask={props.deleteTask}/>)
            }
        </>
    );
};