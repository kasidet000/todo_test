import React from 'react';
import { useForm } from "react-hook-form";
import Input from "../../UI/input/input";
import * as Yup from 'yup';
import axios from 'axios';

const Login = (props) => {
    const { register, handleSubmit, watch, errors } = useForm({
        mode:'onBlur',
        validationSchema: Yup.object({
            username: Yup.string().required('Please enter value.'),
            password: Yup.string().required('Please enter value.')
        })
    });
    const styles = {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        height:'100%',
    }

    const onSubmit = (data) => {
        console.log(data);
        const tempToken =  `Test`
        const token = `Bearer ${tempToken}`
        // props.history.push("/todos",token);
        axios.post('https://candidate.neversitup.com/todo/users/auth',data)
        .then(res => {    
            const token = `Bearer ${res.data.token}`
            props.history.push("/todos",{token: token});
        })
        .catch(function (error) {
            alert('Invalid username or password');
       });
    }

    return(
        <div style={styles}>
            <div className="container col-sm-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        type="text"
                        id="username"
                        name="username"
                        label="Username"
                        register={register}
                        errors={errors.username}
                    />
                    <Input 
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        register={register}
                        errors={errors.password}
                    />
                    <button className="btn btn-block btn-secondary" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login