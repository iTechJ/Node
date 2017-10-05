
const promise = new Promise((resolve, reject) => {
    setTimeout(function() {
        try {
            throw new Error("Bad promise");
        } catch (ex) {
            reject(ex);
        }
    }, 1);
});


let asyncFunction = async () => {
    try {
        await promise();
    } catch (ex) {
        console.log('Exception was caught!');
    }
};

asyncFunction();

