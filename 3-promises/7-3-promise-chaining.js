
let getUser = (id) =>
    new Promise(
        (resolve) => resolve({id: 1, age: 19, name: 'Max'})
    );

let getUserCreditCard = (id) =>
    new Promise(
        (resolve) => resolve({id: 123, credit: 1000})
    );

let makeReport = (name, creditCard) =>
    new Promise(
        (resolve) => {
            console.log('User %s has %s money', name, creditCard.credit);
            resolve();
        }
    );

let scope = {};
getUser(1)
    .then((user) => {
        scope.user = user;
        return getUserCreditCard(user.id);
    })
    .then((creditCard) => {
        return makeReport(scope.user.name, creditCard);
    })
    .then(() => {
        console.log('Done!');
    });

