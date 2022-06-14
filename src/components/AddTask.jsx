import React, { useState } from 'react';


import '../index.css';

export const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!(text || day)){
            alert('Please add a task');
            return;
        }

        const newTask = {text, day, reminder};

        onAdd(newTask);

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit = { onSubmit }>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add a Task"
                value = {text} 
                onChange = {(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time"
                value = {day} 
                onChange = {(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control-check">
                <label>set reminder</label>
                <input type="checkbox"
                checked = {reminder} 
                onChange = {(e) => setReminder(e.target.checked)}/>
            </div>

            <input type="submit" className="btn btn-block" 
            />
        </form>
    )
}
