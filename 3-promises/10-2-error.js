
const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        try {
            throw new Error("Bad promise");
        } catch (ex) {
            reject(ex);
        }
    }, 1);
});


promise
    .then((result) => {
        console.log('Result 1: %s', result);
        return 2;
    })
    .catch((ex) => {
        console.log('Error catched!');
        return 5;
    })
    .then((result) => {
        console.log('Result 2: %s', result);
    });

