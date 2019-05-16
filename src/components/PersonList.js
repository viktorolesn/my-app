import React from 'react'
import axios from 'axios';
import { throwStatement, functionExpression, optionalCallExpression } from '@babel/types';
import { Get, Post, signUp, logIn, Patch, GetAll, Delete } from '../services/services';
import {getToken, setToken, signOut} from '../services/storage'

export default class PersonList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         categories: [],
         email: '',
         name: '',
         id: '',
         choosedCategory: 0,
         storage: [],
         itemName: '',
         itemPrice: '',
         itemId: ''
        }
        this.handleNamePrice = this.handleNamePrice.bind(this);
    }
     
     
    componentDidMount(){
        Get('/categories')
        .then(response => {
            console.log("getCategories =>", response.categories)
            this.setState({categories: response.categories})
        })
        
        // signUp('/sign_up', "my14_personal_email@gmail.com", "123456789")
        // .then(response1 => {
        //     if(response1)
        //     {
        //     console.log("signUp =>", response1)
        //     console.log("jwt data : ", response1.jwt)
        //     setToken(response1.jwt)
        //     }
        //     else
        //     console.log("signUp => User is already signed up")
        //     })
        //     .catch(error => {
        //         console.log("ERROR :", error)
        //     })


        var data1 = {
            item: {
              name: "NewName",
              daily_price_cents: 300
            }
        }

        var data = {
            item: {
              name: "Example",
              daily_price_cents: 25,
              category_id: 5,
              option_ids: [
                  1,
                  3
              ]
            }
        } 

        // Post('/items', data1)
        // .then(response2 => {
        //     console.log("postItems =>", response2)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        
        //signOut();
        // getToken().then(token =>{
        //     if (!token)
        //     {
        //         logIn('/user_token', "my12_personal_email@gmail.com", "123456789")
        //         .then(response4 => {
        //             setToken(response4.jwt)
        //             console.log("logIn =>", response4)
        //             getToken()
             
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        //     }
        //     else
        //     console.log("logIn => User is already authorised")
        // })
        
        
        Get('/items')
        .then(response6 => {
            console.log("GET ALL ITEMS =>", response6)

        })

        Get('/users/me').then(response => {
            console.log("MY INFO: ", response);
            this.setState({email : response.email});
            this.setState({id : response.id}); 
            this.setState({name : response.name});
            console.log("STATE EMAIL:",this.state.email);

        })
        // Patch('/users', "GreatNewName")
        // .then(response5 => {
        //     console.log("Patch progress =>", response5)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        // Delete('/items/', 11)
        // .then(response5 => {
        //     console.log("Delete progress =>", response5)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    _signOut(){
        signOut();
        this.props.history.push('/login');
    }

    handleSelect = (event) => {
        const value1 = event.target.selectedIndex;
        this.setState({choosedCategory : value1});
        this.setState({itemId : event.target.value});
        this.state.storage = [];
    }

    addOptions = (event) => {
        var flag = 1;
        this.state.storage.forEach(element => {
            if (element == event.target.value)
                flag = 0; 
        });
        if (flag)
        this.state.storage.push(event.target.value)
        else {
            var pos = this.state.storage.indexOf(event.target.value);
            this.state.storage.splice(pos,1);
        }
        console.log("OPTION CONSOLE CLICK:", event.target.value)
        console.log("ARRAY:", this.state.storage)
    }

    handleOptions(){
        if (this.state.categories.length > 0){
            if (this.state.categories[this.state.choosedCategory].filters.length > 0){
            const checkboxes = this.state.categories[this.state.choosedCategory].filters[0].options.map(option => {return <label><input id="check" type="checkbox" value={option.id} onChange={this.addOptions}/>{option.option_value}</label>});
           //return this.state.categories[this.state.choosedCategory].filters[0].options.map(option => {return <label><input id="check"type="checkbox" value={option.id} onChange={this.setState({item: {...this.state.item, options: option.id}})}/>{option.option_value}</label>});
           return checkboxes
            }
           else
           return "no options"
        }
        else
            return "0"
    }

    handleNamePrice(event) {
        const name = event.target.name;
        console.log("EVENT NAME", event.target.value)
        if (name == "name")
        this.setState({itemName: event.target.value});
        if (name == "price")
        this.setState({itemPrice: event.target.value});
      }

      makePost(){
        if (this.state.itemName && this.state.itemPrice)
        {
        var data = {
            item: {
              name: this.state.itemName,
              daily_price_cents: this.state.itemPrice,
              category_id: this.state.itemId,
              option_ids: this.state.storage
            }
        }

        Post('/items', data)
        .then(response2 => {
            console.log("NEW POSTED ITEM =>", response2)
        })
        .catch(error => {
            console.log(error)
        })

      }
    }

     render(){
         return(
             <div>
                 Account email:<br/>
                 <label>{this.state.email}</label><br/><br/>
                 Account name:<br/>
                 <label>{this.state.name}</label><br/><br/>
                 Account id:<br/>
                 <label>{this.state.id}</label><br/><br/>
                 Categories info:
                <div>
                <select onChange={this.handleSelect}>
                    {this.state.categories.map(categorie => {return <option value={categorie.id}>{categorie.name}</option>})}
                </select><br/>
                Name<input type="text" name="name" value={this.state.itemName} onChange={this.handleNamePrice}></input><br/>
                Price<input type="text" name="price" value={this.state.itemPrice} onChange={this.handleNamePrice}></input>
                </div>
                
                <div>{this.handleOptions()}</div>
                <button onClick={() => this.makePost()}> Add item </button>
                <button onClick={() => this._signOut()}>Log out</button>
                </div>
         )
     }
}