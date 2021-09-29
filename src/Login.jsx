import React from 'react'
import './login.css'
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './Stateprovider';

function Login() {
    const [state, dispatch] = useStateValue();
    const SignIn = () => {
 
        //  SignIn
        auth
            .signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="logo-img">
                <img src="http://www.iphonehacks.com/wp-content/uploads/2019/12/Facebook-logo.jpg" alt="load" />
                <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt="load" />

            </div>

            <Button type="submit" onClick={SignIn}>LOGIN </Button>

        </div>

    )
}

export default Login
