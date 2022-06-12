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

  render() {
    return (
      <div className="container">
        <Header />
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          onToggle={this.toggleReminder} />
      </div>
    );
  }
}

export default App;
