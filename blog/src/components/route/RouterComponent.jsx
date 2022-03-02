import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UserList from "../user/UserList";
import AddUser from "../user/AddUser";

const AppRouter = () => {
   return(
     <div>
       <BrowserRouter>
          <Routes>
            <Route exact path="/" element={UserList} />
            {/* <Route path="/users" element={UserList} /> */}
            <Route path="/add-user" element={AddUser} />
          </Routes>
       </BrowserRouter>
     </div>
   );
}

// const style = {
//   color: 'red',
//   margin: '10px'
// }

export default AppRouter;