
export const getData =() => {
    return new Promise((resolved, reject) => {
        resolved(
            "(function(){return '1234'})()"
        );
    });
};