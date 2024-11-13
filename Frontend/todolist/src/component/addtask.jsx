import React, { useState, useEffect } from "react";
import { DatePicker, Button } from "antd";
import moment from "moment";

const AddTaskForm = ({ onAddTask, onCancel, initialData }) => {
    const [title, setTitle] = useState("");
    const [due_date, setdue_date] = useState(null);

    useEffect(() => {
        if (initialData && initialData.due_date) {
            setTitle(initialData.title);
            setdue_date(moment(initialData.due_date));
        }
    }, [initialData]);

    const handleSubmit = () => {
        if (title && moment(due_date).isValid()) {
            onAddTask({
                title,
                due_date: due_date.format('YYYY-MM-DD'),
                completed: false
            });
            setTitle("");
            setdue_date(null);
        } else {
            console.log("data not valid")
        }
    };

    return (
        <div className="AddTaskForm" style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
                type="text"
                placeholder="title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <DatePicker
                value={due_date}
                onChange={(date) => setdue_date(date)}
                placeholder="Due-Date"
            />
            <Button type="primary" onClick={handleSubmit}>Confirm</Button>
            <Button onClick={onCancel}>Cancel</Button>
        </div>
    );
};

export default AddTaskForm;