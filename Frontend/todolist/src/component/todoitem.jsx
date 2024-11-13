import './todoitem.css';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';

const ToDoItem = ({ taskId, title, due_date, completed, onDelete, onEdit, onCompletedTask }) => {

    const handleDelete = () => {
        onDelete(taskId)
    }

    const handleEdit = () => {
        onEdit({ taskId, title, due_date })
    }

    return (
        <div className="ToDoItem">
            <input type="checkbox"
                checked={completed}
                onChange={() => onCompletedTask(taskId, !completed)} />
            <div className="ItemContent">
                <p className="Title">{title}</p>
                <p className="due_date">
                    <CalendarOutlined style={{ marginRight: '5px', color: '#888' }} />
                    {due_date ? new Date(due_date).toLocaleDateString() : "No Due Date"}
                </p>
            </div>
            <div className="Action">
                <EditOutlined onClick={() => handleEdit()} style={{ cursor: 'pointer', marginRight: '10px' }} />
                <DeleteOutlined onClick={() => handleDelete()} style={{ cursor: 'pointer' }} />

            </div>
        </div>
    );
};

export default ToDoItem;