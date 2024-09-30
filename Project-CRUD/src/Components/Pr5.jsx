import React, { useEffect, useState } from 'react';

export default function Pr5() {
    const [task, setTask] = useState('');
    const [record, setRecord] = useState(null);
    const [editindex, setEditindex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('Work')) || [];
        setRecord(data);
    }, [record]);


    const handleAdd = () => {
        let user = { id: Date.now(), task, status: 'Pending' };
        record.push(user);
        localStorage.setItem('Work', JSON.stringify(record));
        setTask('');
    };


    const handleEdit = (id) => {
        let singledata = record.find((item) => item.id == id);
        setTask(singledata.task);
        setEditindex(id);
    };

    const handleDelete = (id) => {
        let deletedData = record.filter((item) => item.id != id);
        setRecord(deletedData);
        localStorage.setItem('Work', JSON.stringify(deletedData));
    };

    const handleComplete = (id) => {
        let updateRecords = record.map((item) => {
            if (item.id === id) {
                return { ...item, status: 'Complete' };
            }
            return item;
        });
        setRecord(updateRecords);
        localStorage.setItem('Work', JSON.stringify(updateRecords));
    };

    return (
        <div className="container">
            <h1 className="title">Task Manager</h1>

            <input type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} className="task-input" />

            <button onClick={handleAdd} className="btn add-btn">{editindex ? 'Update' : 'Add'}</button>

            <table className="task-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {record &&
                        record.map((e, i) => (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.task}</td>
                                <td>{e.status}</td>
                                
                                <td><button onClick={() => handleEdit(e.id)} className="btn edit-btn">Edit </button> </td>
                                <td><button onClick={() => handleDelete(e.id)} className="btn delete-btn">Delete </button> </td>
                                <td><button onClick={() => handleComplete(e.id)} className="btn complete-btn">Complete </button> </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
