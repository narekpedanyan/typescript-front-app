import {Link} from 'react-router-dom';
import * as React from 'react';
interface Login{

}

class SignUp extends React.Component<Login, {}> {
    state = {
        email: '',
        password: '',
        fieldUnCompleteError: false,
        createUserResponse: null
    };

    signUp = () => {
        const email: string = this.state.email;
        const password: string = this.state.password;
        const userData = {
            email: email,
            password: password
        };
        if(!!email && !!password) {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(userData)
            };
            const reqInstance = new Request('http://localhost:3001/user/signup', requestOptions);
            fetch(reqInstance)
                .then(response => {
                    console.log(response, 'response')
                    if(response.ok){
                        return response.json();
                    }
                })
                .then(data => {

                }).catch((err) => console.log(err, "error111"))
        }else {
            this.setState({
                fieldUnCompleteError: true
            });
            setTimeout(() => {
                this.setState({
                    fieldUnCompleteError: false
                });
            },2000);
        }
    };

    public render() {
        return (
            <div className='login-wrap'>
                <input className='auth-field' type='email' placeholder='naropedan@gmail.com...' onChange={(e) => this.setState({email: e.target.value})}/>
                <input className='auth-field' type='password' placeholder='CHOOSE PASSWORD' onChange={(e) => this.setState({password: e.target.value})}/>
                {this.state.fieldUnCompleteError && <div className='warning'>Please complete fields!</div>}
                <div className='row-center'>
                    <button className='form-btn' onClick={() => this.signUp()}>SIGN UP</button>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default SignUp;