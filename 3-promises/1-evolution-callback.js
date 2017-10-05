let childFunction = (callback) => {
    callback(1);
};

let mainFunction = (callback) => {
    childFunction((result) => {
        result++;
        callback(result);
    })
};

mainFunction((result) => {
    console.log(result);
});

