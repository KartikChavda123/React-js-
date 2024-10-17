import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from '../Feture/Taskslice';

export default function ReduxTodo() {
    const [name, setname] = useState("");
    const [sub, setsub] = useState(""); 
    const [editIndex, setEditIndex] = useState(null);
    const [task, setTask] = useState("");
    const [seleact, setSeleact] = useState("");
    const [rdio, setRedio] = useState('work');

    const count = useSelector((state) => state.todokey);
    const dispatch = useDispatch();

    const addRecord = () => {
        if (editIndex == null) {
            dispatch(addData({ id: Date.now(), name, sub, task, seleact, rdio }));
        } else {
            dispatch(updateData({ id: editIndex, name, sub, task, seleact, rdio }));
            setEditIndex(null);
        }

        setname("");
        setsub("");
        setTask("");
        setSeleact("");
        setRedio("work");
    };

    const deleteRecord = (id) => {
        dispatch(deleteData(id));
    };

    const editRecord = (id) => {
        let singleData = count.Students.find((item) => item.id === id);
        setname(singleData.name);
        setsub(singleData.sub);
        setTask(singleData.task);
        setSeleact(singleData.seleact);
        setRedio(singleData.rdio);
        setEditIndex(id);
    };

    return (
        <div className="todo-container">
            <h1>Task Manager</h1>

            <div className="form-group">
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Subject"
                    value={sub}
                    onChange={(e) => setsub(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />

                <select value={seleact} onChange={(e) => setSeleact(e.target.value)}>
                    <option value="">Select Priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <div className="radio-group">
                    <label className={rdio === "work" ? "active-radio" : ""}>
                        <input
                            type="radio"
                            value="work"
                            checked={rdio === "work"}
                            onChange={(e) => setRedio(e.target.value)}
                        /> Work
                    </label>
                    <label className={rdio === "personal" ? "active-radio" : ""}>
                        <input
                            type="radio"
                            value="personal"
                            checked={rdio === "personal"}
                            onChange={(e) => setRedio(e.target.value)}
                        /> Personal
                    </label>
                </div>

                <button className="submit-btn" onClick={addRecord}>
                    {editIndex ? "Update Task" : "Add Task"}
                </button>
            </div>

            <div className="task-list">
                {count && count.Students.length > 0 ? (
                    count.Students.map((e, i) => (
                        <ul key={i}>
                            <li className="task-item">
                                <div className="task-details">
                                    <span><strong>ID:</strong> {e.id}</span>
                                    <span><strong>Name:</strong> {e.name}</span>
                                    <span><strong>Subject:</strong> {e.sub}</span>
                                    <span><strong>Task:</strong> {e.task}</span>
                                    <span><strong>Priority:</strong> {e.seleact}</span>
                                    <span><strong>Type:</strong> {e.rdio}</span>
                                </div>
                                <div className="task-actions">
                                    <button className="edit-btn" onClick={() => editRecord(e.id)}>Edit</button>
                                    <button className="delete-btn" onClick={() => deleteRecord(e.id)}>Delete</button>
                                </div>
                            </li>
                        </ul>
                    ))
                ) : (
                    <p className="no-data">No Tasks Available</p>
                )}
            </div>
        </div>
    );
}
