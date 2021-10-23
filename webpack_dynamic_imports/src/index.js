// import {getUsers} from './common/usersApi.js';
// splitting code:
const getUsersmodule = () => 
    import(/* webpackChunkName: "UsersApi" */"./common/usersApi.js");
import printMe from './print.js';
import "./style.css";
import Img from './por-5.jpg';
const btn = document.getElementById('btn');
btn.addEventListener('click', _ => {
    getUsersmodule().then(({getUsers, hello}) => {
        getUsers().then((json) => {
            const usersList = document.createElement('ul');
            usersList.classList.add('usersList');
            let str = ``;
            json.map(user => {
                str = `<li>
                    <span>username => ${user.id}, </span>
                    <span>username => ${user.name}, </span>
                    <span>username => ${user.username}, </span>
                    <span>username => ${user.email}</span>
                </li>`;
                usersList.innerHTML += str;
            });
            document.body.appendChild(usersList);
        });
        console.log(hello('Alhiane'));
        const myImg = new Image();
        myImg.src = Img;
        document.body.appendChild(myImg);
        printMe();
    });
});