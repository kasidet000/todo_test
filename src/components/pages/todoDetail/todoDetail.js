import React,{useState, useEffect} from 'react'
import './todoDetail.css'
import axios from 'axios';

const TodoDetail = (props) => {
    const [token, setToken] = useState('');
    const [action, setAction] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setToken(props.location.state.token)
        setAction(props.location.state.action)

        if (action === "edit") {
            setTitle(props.location.state.data.title)
            setDescription(props.location.state.data.description)
        }
    },[token]);

    const cancelHandle = () => {
        props.history.push("/todos",{token: token});
    }

    const createTodo = () => {
        const data = {title: title, description: description}
        axios.post('https://candidate.neversitup.com/todo/todos/',data,{ headers: { Authorization: token}})
        .then(res => {    
            console.log(res)
            props.history.push("/todos",{token: token});
        })
        .catch(function (error) {
            // alert('Invalid username or password');
       });
    }

    const updateTodo = id => {
        console.log(id)
        const data = {title: title, description: description}
        axios.put(`https://candidate.neversitup.com/todo/todos/${id}`,data,{ headers: { Authorization: token}})
        .then(res => {    
            props.history.push("/todos",{token: token});
        })
        .catch(function (error) {
            // alert('Invalid username or password');
       });
    }

    let actionButton = null;
    if (action === "new") {
        actionButton = <button className="btn btn-primary" style={{width:'40%'}} onClick={createTodo}>Create</button>
    } else {
        actionButton = <button className="btn btn-primary" style={{width:'40%'}} onClick={()=>{updateTodo(props.location.state.data._id)}}>Edit</button>
    }

    return(
        <div className="page">
           
            <div className="container col-sm-4">
                <div className="form-group">
                    <label className="title">TITLE</label>
                    <textarea className="form-control" value={title} onChange={e=>{setTitle(e.target.value)}}/>
                </div>
                <div className="form-group">
                    <label className="title">DESCRIPTION</label>
                    <textarea className="form-control" value={description} onChange={e=>{setDescription(e.target.value)}}/>
                </div>
                <div className="td_d-footer">
                    <button className="btn btn-info" style={{width:'40%'}} onClick={cancelHandle}>Cancel</button>
                    { actionButton }
                </div>
            </div>
           
        </div>
    )
}

export default TodoDetail



