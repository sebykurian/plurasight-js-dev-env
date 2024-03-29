import './index.css';

import {getUsers, deleteUser} from './api/userApi';
import { EventEmitter } from 'events';

//Populate tables of users via API calls

getUsers().then(result => {
  let usersBody = "";

  result.forEach(user => {

    usersBody+=  `<tr>

    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>


    </tr>`

  });

  global.document.getElementById('users').innerHTML = usersBody;

const deleteLinks = global.document.getElementsByClassName('deleteUser');

// Must use array from to create a real array from a DOM collection
//getElelementsByClassname only returns an "array like" object

Array.from(deleteLinks, link => {
  link.onclick = function(event) {
    const element = event.target;
    event.preventDefault();
    deleteUser(element.attributes["data-id"].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  };
});
});







//import './index.css';
//import numeral from 'numeral';
//const courseValue = numeral(1000).format('$0,0.00');
//debugger;

//console.log('I would pay ${courseValue} for this ');
