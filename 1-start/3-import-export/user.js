class User {
    constructor(name) {
        this.name = name;
        console.log('User %s created', name);
    }
}

const USER_VALUE = 15;

let userF = () => {
    console.log('Called userF');
    // console.log(module);
};


module.exports = {User, userF};
module.exports.USER_VALUE = USER_VALUE;
