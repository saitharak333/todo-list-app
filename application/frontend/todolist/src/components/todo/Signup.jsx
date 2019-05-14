import React, {Component} from 'react'
import AuthService from "./AuthService.js"
import Header from "./Header"
import {Link} from 'react-router-dom'
import UserService from "../../api/todo/UserService.js"

export default class Signup extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            repassword: ''
        }
        this.stateChange = this.stateChange.bind(this);
        this.check = this.check.bind(this);
    }

    render () {
        const userState = AuthService.isUserLogged();
        if (userState){
            return (
                <div>
                    <Header />
                    <br/>
                    <h3>Please <Link to = "/logout" onClick = {AuthService.RemoveUser}>Logout!!</Link>.</h3>
            </div> 
            );
        } else {
        return (
            <div>
                <Header />
                <h1>SignUp</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {/* {this.state.UnsuccessfulLog && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.SuccessfulLog && <div>Login Sucessful</div>} */}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.stateChange}/>
                    <br/>
                    <br/>
                    Password: <input type="password" name="password" value={this.state.password}  onChange={this.stateChange}/>
                    <br/>
                    <br/>
                    ReType Password: <input type="password" name="repassword" value={this.state.repassword}  onChange={this.stateChange}/>
                    <br/>
                    <br/>
                    <button className="btn btn-success" onClick={this.check}>SignUp</button>
                </div>
            </div>
        );
    }
}    
    stateChange(event) {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value})
    }

    check() {
        if ((this.state.username !== '') && (this.state.password !== '') && (this.state.password === this.state.repassword)){
            UserService.signupRequest({
                username: this.state.username,
                password: this.state.password
            }).then(
                response =>
                {
                console.log(response)
                if (response.data === "Success"){
                    AuthService.RegisterUser(this.state.username, this.state.password)
                    this.props.history.push(`/app/welcome/${this.state.username}`)
                } else {
                    console.log("Username exists, create account with a different username")
                    return <div>Username exists, create account with a different username</div>
                }
            }).catch(error => console.log(error))               
        } else {
            this.setState({successlog: false})
            this.setState({invalidlog: true})
            return <div>Login Failed</div>
        }
    }
} 