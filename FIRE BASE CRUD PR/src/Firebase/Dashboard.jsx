import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

export default function DashBoard() {

    const [user, setUser] = useState(null)

    const [userName, setUserName] = useState([])

    const [task, setTask] = useState("")
    const [priority, setPriority] = useState("")

    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        let subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })
    }, [])

    useEffect(() => {
        if (user) {
            fetchUser()
            fetchData()
        }
    }, [user])

    const fetchUser = () => {
        console.log(user.uid)
        getDoc(doc(db, "users", user.uid))

            .then(data => {
                console.log(data.data())
                setUserName(data.data())
            })
    }

    const fetchData = async () => {
        const allData = await getDocs(collection(db, "Todos"))

        const filteredData = allData.docs.map((data) => ({
            docId: data.id, ...data.data()
        })).filter((item) => item.uid === user.uid) 

        console.log(filteredData)
        setRecord(filteredData)
    }


    const handleTask = async () => {
        let obj = { uid: user.uid, task, priority }

        if (editIndex == null) {
            let addData = await addDoc(collection(db, "Todos"), obj)
                .then(data => {
                    setRecord([...record, obj])
                    fetchData()
                })
        }
        else {
            let updateData = await updateDoc(doc(db, "Todos", editIndex), {
                id: user.uid, task, priority
            })
            fetchData()
        }
        setTask("")
        setPriority("")
        setEditIndex(null)
    }

    let handleDelete = async (id) => {
        let deleteData = await deleteDoc(doc(db, "Todos", id))
        fetchData()
    }

    let handleEdit = (id) => {
        console.log(id);

        let singleData = record.find(item => item.docId == id)
        setTask(singleData.task)
        setPriority(singleData.priority)
        setEditIndex(id)
    }

    return (
        <div className='dashbord'>
            <p className='p1'>
                {
                    userName && <span>{userName.name} {userName.uid}</span>
                }
            </p>
            <div className="dashbord_text">
                <h3>Task</h3>
                <input type="text" placeholder='Enter Your Task...' value={task} onChange={(e) => setTask(e.target.value)} />
                <h3>priority</h3>
                <input type="text" placeholder='Enter Your priority...' value={priority} onChange={(e) => setPriority(e.target.value)} />
                <button onClick={handleTask}>
                    {editIndex == null ? "Add Task" : "Update Task"}
                </button>

                <Link to={"/signin"}>
                    <button>Sign In</button>
                </Link>



                <div className="dashbord_flex">
                    {
                        record &&
                        record.map((e, i) => {
                            return (
                                <div key={i} className='user_record'>
                                    <div className="user_text">
                                        <h1>{e.task}</h1>
                                        <h1>{e.priority}</h1>
                                    </div>

                                    <div className="user_action">
                                        <button onClick={() => handleEdit(e.docId)}>Edit</button><br />
                                        <button onClick={() => handleDelete(e.docId)}>Delete</button>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}