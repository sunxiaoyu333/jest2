import axios from  'axios';
export const fetchDatafn = (fn) => {
    axios.get('http://www.dell-lee.com/react/api/demo.json').then(response => {
        fn(response.data);
    });
}
export const fetchData = (fn) => {
   return axios.get('http://www.dell-lee.com/react/api/demo1.json');
}