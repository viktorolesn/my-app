import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

/*function tick(){
    const element = (
        <div>
            <h1>Hello</h1>
            <h2>Time is {new Date().toLocaleTimeString()}</h2>
        </div>);


ReactDOM.render(element, document.getElementById("root"));
    }

setInterval(tick,1000);*/


//const elem = <Hello name="Alex" />;
//ReactDOM.render(<Hello />, document.getElementById("root"));

const propsValues = {
    title: "Список смартфонов",
    items: [
        "HTC U Ultra", 
        "iPhone 7", 
        "Google Pixel", 
        "Huawei P9", 
        "Meizu Pro 6", 
        "Asus Zenfone 3"
    ]
};
     
class Item extends React.Component {
    render() {
        return <li>{this.props.name}</li>;
    }
}
         
class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: this.props.data.items};
                 
        this.filterList = this.filterList.bind(this);
    }
    // фильтрация списка
    filterList(e){
        var filteredList = this.props.data.items.filter(function(item){
            return item.toLowerCase().search(e.target.value.toLowerCase())!== -1;
        });
        // обновление состояния
        this.setState({items: filteredList});
    }
     
    render() {
        return(
            <div>         
                <h2>{this.props.data.title}</h2>
                <input placeholder="Поиск" onChange={this.filterList} />
                <ul>
                    {
                        this.state.items.map(function(item){
                            return <Item key={item} name={item} />
                        })
                    }
                </ul>
            </div>);
    }
}
 
ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("root")
);
    
 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
