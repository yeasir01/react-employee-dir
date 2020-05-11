import Axios from 'axios';

export default {
    getUsers: ()=>{
        Axios
        .get('https://randomuser.me/api/?results=50&nat=us')
        .then(res => res)
    }
}