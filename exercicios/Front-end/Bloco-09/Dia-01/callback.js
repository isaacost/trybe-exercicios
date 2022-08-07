const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;

const getUser = (callback) => {
    const user = {
        firstName: 'Ivan',
        lastName: 'Ivanovich',
        nationality: 'Russo',
    };
    return callback(user);
};

console.log(getUser(userFullName));