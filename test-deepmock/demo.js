import axios from 'axios';
export const getData =() => {
    return axios.get('/').then(res => res.data);
};
// "(function(){return '123'})()"
export const getNumber=()=> {
    return 123;
}