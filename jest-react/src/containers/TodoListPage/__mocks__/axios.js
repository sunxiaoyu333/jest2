const mockUndolist = {
    data: [{
        status: 'div',
        value: 'dell le'
    }],
    success: true
};
export default {
    get(url) {
        if (url === '/undolist.json'){
            return new Promise((resolve, reject)=>{
                resolve(mockUndolist);
            });
        }
    }
}