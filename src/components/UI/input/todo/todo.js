import React,{useState} from 'react'
import './todo.css'
import moment from 'moment'

const Todo = (props) => {

    
    let dateTime = moment(new Date(props.updateTime).toLocaleString()).format('DD/MM/YYYY HH:MM')
    // dateTime = 
    // console.log(props.updateTime.toLocaleString())

    return(
        <div style={{padding:'10px',width:'100%'}}>
            <div className="card" style={{width:'100%'}} onClick={props.click}>
                <div className="card-body">
                    <button type="button" className="close c-close" aria-label="Close" onClick={props.delete}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="text-muted card-text float-right" style={{fontSize:'0.7rem'}}>{dateTime}</p>
                </div>
            </div>
        </div>
    )
}

export default Todo