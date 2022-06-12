import React from 'react';

import '../index.css';

export const AddTask = (props) => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add a Task" />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" />
            </div>
            <div className="form-control-check">
                <label>set reminder</label>
                <input type="checkbox" />
            </div>

            <input type="submit" className="btn btn-block" />
        </form>
    )
}
