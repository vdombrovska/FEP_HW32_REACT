import './css/App.css';
import { API_URL } from '../../config';
import NewUsersForm from '../UsersForm/UsersForm';
import UsersList from '../components/UsersList/UsersList.js'
import {getUserList, removeUser as apiRemoveUser, createUser as apiCreateUser} from '../api.js'
import React, { Component, useEffect, useState } from 'react';


export default function App () {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getUserList()
    .then((data) => {
        setList(data);
    })
    .catch(() => {
        setError('Alarm');
    });
  })
  
  function createUser(NewUser) {
    if (!this.validationInputs()){
      return 'Check your info'
    }
  
    return apiCreateUser(NewUser).then((data) => {
      setList((prevValue) => [...prevValue, data]);
  });;
  };

  validationInputs = (value) => {
    return value !== '';
  }

  function removeUser (id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
    return  apiRemoveUser(id);
  };

    return (
        <div className="container">
            <UsersList
                list={this.state.list}
                onRemove={this.removeUser}
            />
            <NewUsersForm onSave={this.createUser} />
        </div>
    );
}



