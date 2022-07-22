import { useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './global.css';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function addTask(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTaksById(taskId: string) {
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasks(newTasks);
  }

  function toogleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
     if(task.id == taskId) {
      return {
        ...task,
        isCompleted: !task .isCompleted,

      };
     }
     return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTaksById} onComplete={toogleTaskCompletedById}/>
    </>
  )
}

