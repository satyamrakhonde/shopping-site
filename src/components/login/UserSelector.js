import * as React from 'react';
import { useState,useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

import NavBar from "../NavBar/NavBar";

import "./styles.css"


 const UserSelector = () => {

  // const newUsers = [{"_id":"6336d6b85dcfbc715124ab04","USER_ID":6001,"AGE":31,"GENDER":"M","USED":"N"},{"_id":"6336d6b85dcfbc715124ab05","USER_ID":6002,"AGE":58,"GENDER":"F","USED":"N"},{"_id":"6336d6b85dcfbc715124ab06","USER_ID":6003,"AGE":43,"GENDER":"M","USED":"N"},{"_id":"6336d6b85dcfbc715124ab07","USER_ID":6004,"AGE":38,"GENDER":"M","USED":"N"},{"_id":"6336d6b85dcfbc715124ab08","USER_ID":6005,"AGE":24,"GENDER":"M","USED":"N"},{"_id":"6336d6b85dcfbc715124ab09","USER_ID":6006,"AGE":24,"GENDER":"M","USED":"N"},{"_id":"6336d6b85dcfbc715124ab0a","USER_ID":6007,"AGE":20,"GENDER":"M","USED":"N"},{"_id":"6336d6b85dcfbc715124ab0b","USER_ID":6008,"AGE":50,"GENDER":"F","USED":"N"},{"_id":"6336d6b85dcfbc715124ab0c","USER_ID":6009,"AGE":38,"GENDER":"M","USED":"N"},{"_id":"6336d6b85dcfbc715124ab0d","USER_ID":6010,"AGE":42,"GENDER":"F","USED":"N"},{"_id":"6336d6b85dcfbc715124ab0e","USER_ID":6011,"AGE":18,"GENDER":"F","USED":"N"},{"_id":"6336d6b85dcfbc715124ab0f","USER_ID":6012,"AGE":61,"GENDER":"F","USED":"N"}];
 
  const [users,setexistUsers] = useState();
  const [userType, setUserType] = React.useState('');
  const [selectedUser, setSelectedUser] = React.useState('');
  const [newUsers, setnewUsers] = useState();
  const [type, setType] =useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setUserType(event.target.value);
  };

  const login = (event: SelectChangeEvent) => {
    setSelectedUser(event.target.value);
  };
 
  // let type = true;
  useEffect(() => {
   fetch('http://localhost:3002/api/getUsers')
  .then(response => response.json())
        .then(data =>  {
          setexistUsers(data)
        });
 }, []);
 
  useEffect(() => {
    fetch('http://localhost:3002/api/getNewUsers')
    .then(response => response.json())
          .then(data => {
            setnewUsers(data)
          });
  }, []);

  // const [selected, setSelected] = useState("");

  // const changeSelectOptionHandler = (event) => {
  //   setSelected(event.target.value);
  //   // setUserType(event.target.value);
  // }
  // let type = null;
  // // let option = null;
  // let MenuItem = null;

  // if(userType === "New User"){
  //   type = false;
  // }
  // else if(userType === "Existing User"){
  //   type = true;
  // }

    if(userType === 10){
    setType(true);
  }
  else if(userType === 20){
    setType(false);
  }

  

  // if(type) {
  //   // options = type.map((el) => <option key={el}> {el}</option>);
  //   MenuItem = type.map((el) => <MenuItem key={el}>{el}</MenuItem>)
  // }

  // useEffect(()=> {
  //   if(userType){
  //     if(userType == 10){
  //       fetch('http://localhost:3002/api/getNewUsers')
  //       .then(response => response.json())
  //             .then(data => {
  //               setnewUsers(data)
  //             });
  //     }
  //     else if(userType == 20){
  //       fetch('http://localhost:3002/api/getUsers')
  //       .then(response => response.json())
  //             .then(data =>  {
  //               setexistUsers(data)
  //             });
  //     }
  //   }
  // },[userType])

    return (
      <div>
        <NavBar />
        {/* {users1 && users1.map((userss) => userss(<li key={userss.id}>{userss.id}</li>))} */}
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">User Type</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={userType}
          label="UserType"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>New User</MenuItem>
          <MenuItem value={20}>Existing User</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="user">Selected User</InputLabel>
        <Select
          labelId="user"
          id="user"
          value={selectedUser}
          label="selectedUser"
          onChange={login}
        >
          {
         (type) ? (
            users && users.map((user) => (
              <MenuItem value={user.id} key= {user.USER_ID}>
                <p>user id : {user.USER_ID }</p>
                <p>age : {user.AGE} </p>
                <p>gender: {user.GENDER} </p>
              </MenuItem>
            ))
           )
          :
          (
            newUsers && newUsers.map((user) => (
              <MenuItem value={user.id} key={user.USER_ID}>
                <p>age: {user.AGE}</p>
                <p>gender: {user.GENDER}</p>
              </MenuItem>
            ))
          )
        }
          {/* {
            MenuItem
          } */}
        </Select>
      </FormControl>
    </div>
    );
}

export default UserSelector;
