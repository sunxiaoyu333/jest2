import $ from 'jquery';
const addDivToBody = () => {
    $('body').append('<div/>');
};
export default addDivToBody;

// node不具备dom
// jest在node 环境下模拟了一套dom的api,jsDom