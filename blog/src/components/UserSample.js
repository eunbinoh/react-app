// import React from "react"; 

// function User({user, onRemove}){
//   const { username, email, id} = user;
  
//   return (
//     <div>
//       <b>{username}</b><span> - {email}</span>
//       <button onClick={ () => onRemove(id) } > 삭제</button>
//     </div>
//   );
// }


// function UserList({users,onRemove}){
//   return (
//     <div>
//       { 
//         users.map(
//           (user, index ) => ( 
//             <User 
//               user ={user} 
//               key={user.id}
//               onRemove={onRemove}
//             /> 
//           ) 
            
//             //User컴포넌트 배열 렌더링  
//             //** key로 사용할 id가 없을경우엔 i(index)사용 ** 
//             //(key id사용하는것이 효율적이지만, 배열 갯수가 몇개 없을 경우는 index 사용 무관)
//             // (user, i ) => ( <User user={user} key={ i } />)
//         ) 
//       }
//     </div>
//     // <div>
//         // <User user = {user[0]} />
//         // <User user = {user[1]} />
//         // <User user = {user[2]} />
//     // </div>
//   )
// }

// export default UserList;