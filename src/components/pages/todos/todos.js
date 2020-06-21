import React,{useState, useEffect} from 'react'
import './todos.css'
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Todo from '../../UI/input/todo/todo';

// const GetAllTodo = (token) => {
    

//     return todo
// }

const Todos = (props) => {
    const token = props.location.state.token 
    // const todos = GetAllTodo(token)

    const [todo, setTodo] = useState([]);

    useEffect(()=>{
        axios.get('https://candidate.neversitup.com/todo/todos',{ headers: { Authorization: token } })
        .then(res => {
            setTodo(res.data)
        })
        .catch(function (error) {
       });
    },[token])

    const AddTodo = () => {
        props.history.push("/todo_detail",{token: token, action: "new", id: 0});
    }

    const deleteTodo = id => {
        axios.delete(`https://candidate.neversitup.com/todo/todos/${id}`,{ headers: { Authorization: token } })
        .then(res => {
            setTodo(todo.filter((data)=>(data._id !== id)));
        })
        .catch(function (error) {
       });
    }

    const editTodo = id => {
        axios.get(`https://candidate.neversitup.com/todo/todos/${id}`,{ headers: { Authorization: token } })
        .then(res => {
            console.log(res.data)
            props.history.push("/todo_detail",{token: token, action: "edit", data: res.data});
        })
        .catch(function (error) {
       });
    }

    return(
        <div>
            <div className="page">
                <div className="page-header">
                    <h2 className="text-dark">TODO</h2>
                </div>
                <div className="page-body">
                    <div className="container col-sm-6">
                        {
                            todo.map( (item,i) => {
                                console.log(item._id)
                                return(<Todo title={item.title} description={item.description} 
                                        key={item._id} id={item._id} updateTime={item.updatedAt} 
                                        delete={()=>{deleteTodo(item._id)}}
                                        click={()=>{editTodo(item._id)}}/>)
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="c-add">
                <Fab  color="primary" aria-label="add" onClick={AddTodo}>
                    <AddIcon/>
                </Fab>
            </div>
        </div>
    )
}

export default Todos
