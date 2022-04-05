import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:3000/users";

class ApiService {
    fetchUsers(){
        return axios.get(USER_API_BASE_URL);
    }
   
    deleteUser(userId){
    return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
    
    addUser(user){
    return axios.post(USER_API_BASE_URL, user);
    }

}

export default ApiService;