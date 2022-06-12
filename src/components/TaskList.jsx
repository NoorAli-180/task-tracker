import React from 'react';

import '../index.css';
import {Task} from './Task.jsx'

export const TaskList = ({tasks, deleteTask, onToggle}) => {
    return (
        <>
            {
            tasks.length === 0 ? "No Tasks To Show" : tasks.map((task) => <Task 
            key = {task.id} 
            task = {task} 
            deleteTask = {deleteTask} 
            onToggle = {onToggle}/>)
            }
        </>
    )
}
