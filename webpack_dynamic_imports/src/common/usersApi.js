const usersApi = 'https://jsonplaceholder.typicode.com/users/';

export function getUsers() {
    return fetch(usersApi)
    .then(response => {
        if(!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then((json) => json)
}

export function hello(name) {
    return `Hello ${name}`;
}