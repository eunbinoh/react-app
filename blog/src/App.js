import './App.css';
import React, { useRef, useState, Component } from 'react';
import TOC from "./components/TOC";
import Count from "./components/Count";
//import InputSample from './components/InputSample';
import UserList from './components/UserSample';
import CreateUser from './components/CreateUser';

function App() {

  const [users, setUsers] = useState([
    { id:1,
      username: 'abc',
      email: 'abc.com'
    },
    { id:2,
      username: 'def',
      email: 'def.com'
    },
  ]);

  const [inputs, setInputs] = useState({
    username:'',
    email: ''
  })
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };
 
  const nextId = useRef(3);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username, email,
      //...inputs,
    }
    //등록시 유저리스트에 유저 붙이기
    setUsers(users.concat(user));
    // setUsers([...users , user]);
    
    //등록시 입력창 초기화
    setInputs({
      username:'',
      email:''
    });

    console.log(nextId.current); //4 current => ref value
    nextId.current +=1;
  };


  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }


  return (
    <div className='App'>
      <Subject title="WEB" sub="Hello React :)"></Subject>
      <TOC name="Hello" color="pink" style="none" isSpecial></TOC>
                                  {/* isSpecial="true" 생략가능 */}
      <Count/><br/>

      {/* <InputSample/>
      <br/> */}

      <>
        <CreateUser
          username={username} 
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove}/>
      </>

    </div>
  )
  
}

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}


export default App;
