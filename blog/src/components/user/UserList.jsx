import React, { Component } from "react";
import ApiService from "../../ApiService";

class UserList extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: [],
            msg: null
        }
    }

    componentDidMount(){
        this.reloadUseList();
    }

    reloadUseList = () =>{
        ApiService.fetchUsers()
        .then( res => {
            this.setState({
                users : res.data.result
            })
        })
        .catch( err => {
            console.log('reload error:',err);
        })
    }

    deleteUser = (userId) => {
        ApiService.deleteUser(userId)
        .then( res => {
            this.setState({
                msg: 'user delete success'
            });
            this.setState({
                users: this.state.users.filter( user => 
                    user.id !== userId )
            })
        })
        .catch( err => {
            console.log('delete err:', err);
        })
    }

    addUser = () => {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }



    render () {
        return (
         <div>
            <h2>User List sample</h2>
            <button onClick={this.addUser}> Add User </button>
            <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>FistName</th>
                <th>LastName</th>
                <th>UserName</th>
                <th>Age</th>
                <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map( user => 
                <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.username}</td>
                    <td>{user.age}</td>
                    <td>{user.salary}</td>
                    <td>
                    
                    <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
                )}
            </tbody>
            </table>
         </div>
        )
    }

}

export default UserList;