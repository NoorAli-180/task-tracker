import React from 'react';

import { Header } from './components/Header.jsx';
import { TaskList } from './components/TaskList.jsx';
import { AddTask } from './components/AddTask.jsx';

const tasks = [
  {
    id: 1,
    text: "Doctor's Appointment",
    day: 'Feb 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: "Meeting at school",
    day: 'Feb 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: "Food Shopping",
    day: 'Feb 5th at 12:00pm',
    reminder: false,
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: tasks,
      formOpened: false,
    }
  }

  //  Delete Task
  deleteTask = (id) => {
    this.setState({tasks: this.state.tasks.filter((task) => task.id !== id)});
  }

  // Toggle Reminder
  toggleReminder = (id) => {
    this.setState({tasks: this.state.tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task)});
  }

  // AddTask
  addTask = (task) => {
    const id = Math.floor(Math.random() * 100);

    this.setState({tasks: [...this.state.tasks, {...task, id}]});
  }

  // Toggle Form
  toggleForm = () => {
    this.setState({formOpened: !this.state.formOpened});
  }

  render() {
    return (
      <div className="container">
        <Header 
        toggleForm = {this.toggleForm}
        formOpened = {this.state.formOpened}/>
        {
          this.state.formOpened && <AddTask onAdd = {this.addTask}/>
        }
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          onToggle={this.toggleReminder} />
      </div>
    );
  }
}

export default App;
