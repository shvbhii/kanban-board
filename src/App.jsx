
import { useState, useEffect } from 'react';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { v4 as uuidv4 } from 'uuid'; 
import Column from './components/Column';
import Footer from './components/Footer'; 
import './main.css';


const initialData = {
  columns: [
    { id: 'col1', name: 'To Do' },
    { id: 'col2', name: 'In Progress' },
    { id: 'col3', name: 'Done' },
  ],
  tasks: [
    { id: 'task1', columnId: 'col1', content: 'Learn React Drag & Drop' },
    { id: 'task2', columnId: 'col1', content: 'Style the Kanban Board' },
    { id: 'task3', columnId: 'col3', content: 'Start #30DaysOfVibeCoding' },
  ],
};

function App() {
  const [columns] = useState(initialData.columns);
  const [tasks, setTasks] = useState([]);
  const [newTaskContent, setNewTaskContent] = useState('');

  
  useEffect(() => {
    const savedTasks = localStorage.getItem('kanbanTasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    } else {
      setTasks(initialData.tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks));
  }, [tasks]);

  const sensors = useSensors(useSensor(PointerSensor, {
    activationConstraint: { distance: 5 },
  }));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeTask = tasks.find(t => t.id === active.id);
    const overId = over.id;
    const overColumn = columns.find(c => c.id === overId);
    
    // Dropping over a column
    if (activeTask && overColumn) {
      setTasks(currentTasks => {
        const activeIndex = currentTasks.findIndex(t => t.id === active.id);
        currentTasks[activeIndex].columnId = overId;
        return arrayMove(currentTasks, activeIndex, activeIndex);
      });
      return;
    }

    const overTask = tasks.find(t => t.id === overId);
    if (activeTask && overTask) {
      setTasks(currentTasks => {
        const activeIndex = currentTasks.findIndex(t => t.id === active.id);
        const overIndex = currentTasks.findIndex(t => t.id === over.id);
        if (activeTask.columnId !== overTask.columnId) {
          currentTasks[activeIndex].columnId = overTask.columnId;
          return arrayMove(currentTasks, activeIndex, overIndex - 1);
        }
        return arrayMove(currentTasks, activeIndex, overIndex);
      });
    }
  };
  
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskContent.trim()) return;
    
    const newTask = {
      id: uuidv4(),
      columnId: 'col1',
      content: newTaskContent
    };

    setTasks([...tasks, newTask]);
    setNewTaskContent('');
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <header className="app-header">
          <h1>Kanban-Do Board</h1>
          <p>Organize your tasks with a satisfying drag-and-drop.</p>
        </header>
        
        <form onSubmit={handleAddTask} className="add-task-form">
          <input 
            type="text"
            value={newTaskContent}
            onChange={(e) => setNewTaskContent(e.target.value)}
            placeholder="Add a new task..."
          />
          <button type="submit">Add Task</button>
        </form>

        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <div className="board-container">
            {columns.map(col => (
              <Column
                key={col.id}
                column={col}
                tasks={tasks.filter(task => task.columnId === col.id)}
              />
            ))}
          </div>
        </DndContext>
      </div>
      <Footer />
    </div>
  );
}

export default App;