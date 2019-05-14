import React from 'react'
import axios from 'axios';
import { throwStatement } from '@babel/types';
import { Get, Post, signUp, logIn, Patch, GetAll } from '../services/services';

export default class PersonList extends React.Component{
     state = {
         categories: []
     }
     
    componentDidMount(){
        Get('/categories')
        .then(response => {
            console.log("getUsers =>", response)
            this.setState({categories: response.categories})
        })

        signUp('/sign_up', "my3_personal_email@gmail.com", "123456789")
        .then(response1 => {
            console.log("signUp =>", response1)
        })
        .catch(error => {
            console.log(error)
        })

        Post('/items', "NewName", 300)
        .then(response2 => {
            console.log("postItems =>", response2)
        })
        .catch(error => {
            console.log(error)
        })

        logIn('/user_token', "my3_personal_email@gmail.com", "123456789")
        .then(response4 => {
            console.log("logIn =>", response4)
        })
        .catch(error => {
            console.log(error)
        })

        GetAll('/items')
        .then(response6 => {
            console.log("GET ALL ITEMS =>", response6)

        })

        Patch('/users', "GreatNewName", 999)
        .then(response5 => {
            console.log("Patch progress =>", response5)
        })
        .catch(error => {
            console.log(error)
        })
    }

     render(){
         return(
             <ul>
                 { this.state.categories.map(categories => <li>{categories.name}</li>)}
             </ul>
         )
     }
}