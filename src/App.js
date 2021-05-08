import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Anwar',  'Alomgir', 'Salaman Sha', 'Bappi', 'Shuvo']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illstractor', price:'$60.99'},
    {name: 'PDF Reader', price:'6.99'},
    {name: 'Premiere El', price: '$249.99'}
  ]
 


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am A React Person.
        </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }          
        </ul>
          {
            products.map(product => <Product product={product}></Product>)
          }
    
          
       
      </header>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = ()=> setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={()=> setCount(count -1)}>Decrease</button>
      <button onClick={ ()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, SetUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => SetUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(user => <li>{user.username} </li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor:'lightgray',
    height: '200px',
    width:'200px',
    float:'left',
    margin:'10px'
  }

  const {name, price} =  props.product;

  console.log(name,price);
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border:'2px solid gold', width:'400px', margin:'20px'}}>
      <h3>My Name:{props.name} </h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}

export default App;
