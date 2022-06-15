import React from 'react';
import { Route, Routes} from 'react-router-dom';

import { Header } from './components/Header.jsx';
import { TaskList } from './components/TaskList.jsx';
import { AddTask } from './components/AddTask.jsx';
import { Footer } from './components/Footer.jsx';
import { About } from './components/About.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [],
      formOpened: false,
    }
  }

  //  Delete Task
  deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    
    this.setState({tasks: await this.fetchTasks()});
  }
  
  // AddTask
  addTask = async (task) => {
    await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    });

    this.setState({tasks: await this.fetchTasks()});
  }

  // Toggle Reminder
  toggleReminder = async (id) => {
    const taskToToggle = await this.fetchTask(id);
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder};

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });
    
    this.setState({tasks: await this.fetchTasks()});
  }

  // Toggle Form
  toggleForm = () => {
    this.setState({formOpened: !this.state.formOpened});
  }

  // Function: to fetch all the tasks from server. 
  fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const tasks = await res.json();
  
    return tasks;
  }
  
  // Function: to fetch only one task on the basis of id from server. 
  fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const task = await res.json();
  
    return task;
  }

/////////////////////////////////////////////////////////////////////////
  componentDidMount () {
    const fetch = async () => {
      const tasks = await this.fetchTasks();
      this.setState({tasks: tasks});
    }
    fetch();
  }
  
  render() {
    return (
        <div className="container">
          <Header 
            toggleForm = {this.toggleForm}
            formOpened = {this.state.formOpened}/>

            <Routes>
            <Route exact path="/" element={
              <>
                {this.state.formOpened && <AddTask onAdd = {this.addTask}/>}

                <TaskList
                  tasks={this.state.tasks.length > 0 ? this.state.tasks : []}
                  deleteTask={this.deleteTask}
                  onToggle={this.toggleReminder} />
              </>
            } />
                
            <Route path = "/about" element = {<About/>}/>
          </Routes>
          <Footer />

          
        </div>
    );
  }
}

export default App;
