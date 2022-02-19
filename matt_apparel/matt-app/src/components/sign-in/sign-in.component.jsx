import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            username: '',
            password: ''

            };
        } 
    handleSubmit = event => {
        event.preventDefault();
    
        this.setState ({ email: '', username: '', password: '' });
    
    };

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return(
            <div className = 'sign-in'> 
            <h2>I already have an account</h2>
                <span>Username or email</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name = 'email' 
                    type ='email' 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label='email or username'
                    required 
                    />
                    
                    <FormInput 
                    name = 'username' 
                    type ='username' 
                    handleChange={this.handleChange} 
                    value={this.state.username}
                    label='username' 
                    required 
                    />
                    
                    <FormInput 
                        name = 'password' 
                        type ='password' 
                        handleChange={this.handleChange} 
                        value={this.state.password}
                        label='password' 
                        required 
                    />
                    <div className='buttons'> 
                        <CustomButton type='submit'> LOG IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSigIn> 
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;