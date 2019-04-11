import {Link} from 'react-router-dom';
import * as React from 'react';
interface Login{

}

class Login extends React.Component<Login, {}> {
    state = {
        email: null,
        password: null
    };

    login = () => {

    };

    public render() {
        return (
            <div className='login-wrap'>
                <input className='auth-field' type='email' placeholder='naropedan@gmail.com...' onChange={(e) => this.setState({email: e.target.value})}/>
                <input className='auth-field' type='password' placeholder='PASSWORD' onChange={(e) => this.setState({password: e.target.value})}/>
                <div className='row-center'>
                    <button className='form-btn' onClick={() => this.login()}>LOG IN</button>
                </div>
                <div>
                    <Link to="/sign-up">Sign up here!</Link>
                </div>
            </div>
        )
    }
}

export default Login;