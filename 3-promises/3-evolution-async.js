let log = async () => {
    let Promise = require('Promise');

    let childFunction = async () =>
        await 1;

    let mainFunction = async () => {
        let result = await childFunction();
        result++;
        return result;
    };

    let result = await mainFunction();
    console.log(result);

};

log();