import React, { Component } from 'react';
import List from './List';

class Form extends Component {
    state = {
        firstName: '',
        lastName:'',
        userName:'',
        users:[]
    };

    handleInput = event => {
        const toChange = event.target.name;
        this.setState({ 
            [toChange]: event.target.value
        });
    };

    addUser = event => {
        event.preventDefault();
        const {firstName, lastName, userName} = this.state;
        const numGames = 0;
        const storedUsers = this.state.users;
        if(storedUsers.length===0){
            this.setState({
                users: [{firstName,lastName,userName,numGames}],
            });
            this.updateState();
        }else if (!this.checkUserExist(storedUsers,userName) ){
            this.setState(oldState => ({
                users: [...oldState.users, {firstName,lastName,userName,numGames}],
            }));
            this.updateState();
        }else{
            alert("Username already used, try another one");
        }
    };

    checkUserExist = (storedUsers,userName) =>{
        var userExist = false; 
        storedUsers.map(user=>{
            if(user.userName === userName){
                userExist = true;
            }
        });
        return userExist;
    };

    updateState = ()=>{
        this.setState({
            firstName: '',
            lastName:'',
            userName:'',
        });
    }

    // deleteLastItem = event => {
    // this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
    // };
    
    inputIsEmpty = () => {
        return (this.state.firstName === '' || this.state.lastName === '' || this.state.userName === '');
        
    };

    // noItemsFound = () => {
    //     return this.state.items.length === 0;
    // };

    render() {
        return (
            <div>
                <form onSubmit={this.addUser}>
                    <input type="text" placeholder="Enter First Name" value={this.state.firstName} name= "firstName"  onChange={this.handleInput}/>
                    <input type="text" placeholder="Enter Last Name" value={this.state.lastName} name= "lastName"  onChange={this.handleInput}/>
                    <input type="text" placeholder="Enter User Name" value={this.state.userName} name= "userName"  onChange={this.handleInput}/>
                    <button disabled={this.inputIsEmpty()}>Add</button>
                </form>
                {this.state.users.length !==0 ? (
                    <List users={this.state.users}/>
                ):(<p>NO USERS REGISTERED</p>)}
            </div>
        );
    }
}

export default Form;