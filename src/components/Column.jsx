
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';

function Column({ column, tasks }) {
    const { setNodeRef } = useSortable({
      id: column.id,
      data: {
        type: 'Column',
        column,
      }
    })

  return (
    <div ref={setNodeRef} className="column">
      <h2>{column.name}</h2>
      <div className="task-list">
        <SortableContext items={tasks.map(t => t.id)}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default Column;